import AVFoundation
import MediaPlayer
import UIKit
import WebKit

/// "Listen", played by the phone itself: a chapter read aloud in the iPhone's built-in voice (free, offline,
/// private), or a public-domain recording streamed from Wikimedia Commons. One sound at a time, one audio
/// session, the lock screen and Control Centre show what is playing, and it keeps going with the screen locked
/// or the silent switch on, the way Books and Podcasts behave.
///
/// The page sends (window.webkit.messageHandlers.listen):
///   {op:"status"}
///   {op:"read", id, title, by, start, rate, parts:[text, ...]}   reads parts[start...] in order
///   {op:"play", id, title, by, url}                               streams one recording (https only)
///   {op:"pause"} {op:"resume"} {op:"stop"} {op:"skip", by:+1|-1} {op:"seek", to:seconds} {op:"rate", rate}
/// and hears back on window.__listen.onEvent:
///   {t:"status", available, voice, better}
///   {t:"part", id, i}                 part i has started (reading)
///   {t:"word", id, i, at, n}          the word at UTF-16 offset `at`, length `n`, in part i
///   {t:"time", id, at, len}           position and length in seconds (recording), about twice a second
///   {t:"playing", id} {t:"paused", id} {t:"done", id} {t:"stopped", id} {t:"error", id}
@MainActor
final class ListenBridge: NSObject, WKScriptMessageHandler, AVSpeechSynthesizerDelegate {
    weak var webView: WKWebView?

    private enum Mode { case idle, reading, recording }
    private var mode = Mode.idle
    private var id = ""
    private var title = ""
    private var by = ""
    private var paused = false

    // reading
    private let synth = AVSpeechSynthesizer()
    private var parts: [String] = []
    private var index = 0
    private var rate: Float = AVSpeechUtteranceDefaultSpeechRate
    private var current: AVSpeechUtterance?
    private var partStarted = Date()
    private lazy var chosenVoice: AVSpeechSynthesisVoice? = ListenBridge.bestVoice()

    // recording
    private var player: AVPlayer?
    private var timeObserver: Any?
    private var endObserver: NSObjectProtocol?
    private var statusObserver: NSKeyValueObservation?

    private var commandTokens: [(MPRemoteCommand, Any)] = []
    private var inBackground = false

    override init() {
        super.init()
        synth.delegate = self
        let nc = NotificationCenter.default
        nc.addObserver(self, selector: #selector(interrupted(_:)), name: AVAudioSession.interruptionNotification, object: nil)
        nc.addObserver(self, selector: #selector(routeChanged(_:)), name: AVAudioSession.routeChangeNotification, object: nil)
        nc.addObserver(self, selector: #selector(wentBack), name: UIApplication.didEnterBackgroundNotification, object: nil)
        nc.addObserver(self, selector: #selector(cameBack), name: UIApplication.willEnterForegroundNotification, object: nil)
    }

    func userContentController(_ controller: WKUserContentController, didReceive message: WKScriptMessage) {
        guard message.name == "listen", let body = message.body as? [String: Any],
              let op = body["op"] as? String else { return }
        switch op {
        case "status":
            send(["t": "status", "available": true, "voice": chosenVoice?.name ?? "",
                  "better": (chosenVoice?.quality ?? .default) != .default])
        case "read":
            guard let id = body["id"] as? String, id.count < 80, let raw = body["parts"] as? [Any] else { return }
            let list = raw.compactMap { $0 as? String }.prefix(500).map { String($0.prefix(6000)) }
            guard !list.isEmpty else { return }
            stop(report: true)
            take(id: id, body: body)
            parts = Array(list)
            if let r = body["rate"] as? Double { rate = ListenBridge.rate(r) }
            index = max(0, min((body["start"] as? Int) ?? 0, parts.count - 1))
            mode = .reading
            activate(spoken: true)
            speakCurrent()
        case "play":
            guard let id = body["id"] as? String, id.count < 80, let s = body["url"] as? String,
                  let url = URL(string: s), url.scheme == "https" else { return }
            stop(report: true)
            take(id: id, body: body)
            mode = .recording
            activate(spoken: false)
            startPlayer(url)
        case "pause": pause()
        case "resume": resume()
        case "stop": stop(report: true)
        case "skip": skip((body["by"] as? Int) ?? 1)
        case "seek":
            if let to = body["to"] as? Double, let p = player { p.seek(to: CMTime(seconds: max(0, to), preferredTimescale: 600)) }
        case "rate":
            if let r = body["rate"] as? Double {
                rate = ListenBridge.rate(r)
                if mode == .reading, !paused { restartPart() }   // takes effect from the start of this paragraph
            }
        default: break
        }
    }

    private func take(id: String, body: [String: Any]) {
        self.id = id
        title = String((body["title"] as? String ?? "").prefix(200))
        by = String((body["by"] as? String ?? "").prefix(200))
        paused = false
    }

    // MARK: voice

    /// The best English voice on this phone: an Enhanced or Premium download (Settings > Accessibility >
    /// Spoken Content > Voices) if there is one, else the standard voice for the phone's English. Never a novelty voice.
    static func bestVoice() -> AVSpeechSynthesisVoice? {
        let lang = AVSpeechSynthesisVoice.currentLanguageCode()
        let want = lang.hasPrefix("en") ? lang : "en-US"
        let good = AVSpeechSynthesisVoice.speechVoices().filter { v in
            guard v.language.hasPrefix("en"), v.quality != .default else { return false }
            if #available(iOS 17.0, *), v.voiceTraits.contains(.isNoveltyVoice) { return false }
            return true
        }
        let ranked = good.sorted { a, b in
            if a.quality != b.quality { return a.quality.rawValue > b.quality.rawValue }
            if (a.language == want) != (b.language == want) { return a.language == want }
            return a.name < b.name
        }
        return ranked.first ?? AVSpeechSynthesisVoice(language: want)
    }

    /// The page's speed (0.8 to 1.4, 1 = normal) on the synthesizer's scale.
    static func rate(_ r: Double) -> Float {
        let x = Float(max(0.7, min(1.5, r)))
        return min(AVSpeechUtteranceMaximumSpeechRate, AVSpeechUtteranceDefaultSpeechRate * x)
    }

    // MARK: reading

    private func speakCurrent() {
        guard mode == .reading else { return }
        guard index < parts.count else { finish(); return }
        let u = AVSpeechUtterance(string: parts[index])
        u.voice = chosenVoice
        u.rate = rate
        u.postUtteranceDelay = 0.3
        current = u
        partStarted = Date()
        send(["t": "part", "id": id, "i": index])
        updateNowPlaying()
        synth.speak(u)
    }

    private func restartPart() {
        current = nil
        synth.stopSpeaking(at: .immediate)
        speakCurrent()
    }

    private func skip(_ step: Int) {
        switch mode {
        case .idle: return
        case .recording:
            guard let p = player else { return }
            let now = p.currentTime().seconds.isFinite ? p.currentTime().seconds : 0
            p.seek(to: CMTime(seconds: max(0, now + (step < 0 ? -15 : 15)), preferredTimescale: 600))
        case .reading:
            // Back restarts this paragraph when it is more than 3 seconds in, like a music app.
            var next = index + (step < 0 ? -1 : 1)
            if step < 0, Date().timeIntervalSince(partStarted) > 3 { next = index }
            if next >= parts.count { current = nil; synth.stopSpeaking(at: .immediate); finish(); return }
            index = max(0, next)
            let wasPaused = paused
            paused = false
            restartPart()
            if wasPaused { send(["t": "playing", "id": id]) }
        }
    }

    // MARK: recording

    private func startPlayer(_ url: URL) {
        let item = AVPlayerItem(url: url)
        let p = AVPlayer(playerItem: item)
        p.automaticallyWaitsToMinimizeStalling = true
        player = p
        statusObserver = item.observe(\.status, options: [.new]) { [weak self] item, _ in
            Task { @MainActor in
                guard let self = self, self.player?.currentItem === item else { return }
                if item.status == .failed { let was = self.id; self.stop(report: false); self.send(["t": "error", "id": was]) }
            }
        }
        timeObserver = p.addPeriodicTimeObserver(forInterval: CMTime(seconds: 0.5, preferredTimescale: 600), queue: .main) { [weak self] t in
            Task { @MainActor in
                guard let self = self, !self.inBackground, let item = self.player?.currentItem else { return }
                let len = item.duration.seconds
                self.send(["t": "time", "id": self.id, "at": t.seconds, "len": len.isFinite ? len : 0])
                self.updateNowPlaying()
            }
        }
        endObserver = NotificationCenter.default.addObserver(forName: .AVPlayerItemDidPlayToEndTime, object: item, queue: .main) { [weak self] _ in
            Task { @MainActor in self?.finish() }
        }
        p.play()
        send(["t": "playing", "id": id])
        updateNowPlaying()
    }

    private func dropPlayer() {
        if let o = timeObserver { player?.removeTimeObserver(o) }
        if let o = endObserver { NotificationCenter.default.removeObserver(o) }
        statusObserver?.invalidate()
        player?.pause()
        player = nil; timeObserver = nil; endObserver = nil; statusObserver = nil
    }

    // MARK: shared controls

    private func pause() {
        guard mode != .idle, !paused else { return }
        paused = true
        if mode == .reading {
            if !synth.pauseSpeaking(at: .immediate) { current = nil; synth.stopSpeaking(at: .immediate) }
        } else {
            player?.pause()
        }
        send(["t": "paused", "id": id])
        updateNowPlaying()
    }

    private func resume() {
        guard mode != .idle, paused else { return }
        paused = false
        activate(spoken: mode == .reading)
        if mode == .reading {
            if !(synth.isPaused && synth.continueSpeaking()) { restartPart() }
        } else {
            player?.play()
        }
        send(["t": "playing", "id": id])
        updateNowPlaying()
    }

    private func finish() {
        let done = id
        reset()
        if !done.isEmpty { send(["t": "done", "id": done]) }
    }

    func stop(report: Bool) {
        let was = id
        reset()
        if report && !was.isEmpty { send(["t": "stopped", "id": was]) }
    }

    private func reset() {
        let wasActive = mode != .idle
        mode = .idle
        current = nil
        if synth.isSpeaking || synth.isPaused { synth.stopSpeaking(at: .immediate) }
        dropPlayer()
        id = ""; parts = []; index = 0; paused = false
        commandsOff()
        MPNowPlayingInfoCenter.default().nowPlayingInfo = nil
        if wasActive {
            // Let other apps' audio (music, a podcast) carry on. Done off the main thread: it can take a moment.
            DispatchQueue.global(qos: .utility).async {
                try? AVAudioSession.sharedInstance().setActive(false, options: .notifyOthersOnDeactivation)
            }
        }
    }

    private func activate(spoken: Bool) {
        let s = AVAudioSession.sharedInstance()
        try? s.setCategory(.playback, mode: spoken ? .spokenAudio : .default, options: [])
        try? s.setActive(true)
        commandsOn()
    }

    // A phone call or an alarm pauses; it waits for the visitor to press play again.
    @objc nonisolated private func interrupted(_ note: Notification) {
        guard let raw = note.userInfo?[AVAudioSessionInterruptionTypeKey] as? UInt,
              AVAudioSession.InterruptionType(rawValue: raw) == .began else { return }
        Task { @MainActor in self.pause() }
    }

    // Headphones unplugged: pause, as Apple's guidelines ask, rather than suddenly play out loud.
    @objc nonisolated private func routeChanged(_ note: Notification) {
        guard let raw = note.userInfo?[AVAudioSessionRouteChangeReasonKey] as? UInt,
              AVAudioSession.RouteChangeReason(rawValue: raw) == .oldDeviceUnavailable else { return }
        Task { @MainActor in self.pause() }
    }

    // With the screen locked there is no page to move a highlight on; it catches up when the app comes back.
    @objc nonisolated private func wentBack() { Task { @MainActor in self.inBackground = true } }
    @objc nonisolated private func cameBack() {
        Task { @MainActor in
            self.inBackground = false
            if self.mode == .reading { self.send(["t": "part", "id": self.id, "i": self.index]) }
            if self.paused { self.send(["t": "paused", "id": self.id]) }
        }
    }

    // MARK: speech events (delivered on a thread Apple does not promise, so hop to the main one first)

    nonisolated func speechSynthesizer(_ s: AVSpeechSynthesizer, willSpeakRangeOfSpeechString r: NSRange, utterance: AVSpeechUtterance) {
        Task { @MainActor in
            guard utterance === self.current, !self.inBackground else { return }
            self.send(["t": "word", "id": self.id, "i": self.index, "at": r.location, "n": r.length])
        }
    }

    nonisolated func speechSynthesizer(_ s: AVSpeechSynthesizer, didFinish utterance: AVSpeechUtterance) {
        Task { @MainActor in
            guard utterance === self.current, self.mode == .reading else { return }
            self.index += 1
            self.speakCurrent()
        }
    }

    // MARK: lock screen and Control Centre

    private func commandsOn() {
        guard commandsTokensEmpty else { return }
        let c = MPRemoteCommandCenter.shared()
        func on(_ cmd: MPRemoteCommand, _ act: @escaping @MainActor () -> Void) {
            cmd.isEnabled = true
            let token = cmd.addTarget { _ in
                Task { @MainActor in act() }
                return .success
            }
            commandTokens.append((cmd, token))
        }
        on(c.playCommand) { [weak self] in self?.resume() }
        on(c.pauseCommand) { [weak self] in self?.pause() }
        on(c.togglePlayPauseCommand) { [weak self] in guard let self = self else { return }; self.paused ? self.resume() : self.pause() }
        on(c.nextTrackCommand) { [weak self] in self?.skip(1) }
        on(c.previousTrackCommand) { [weak self] in self?.skip(-1) }
    }

    private var commandsTokensEmpty: Bool { commandTokens.isEmpty }

    private func commandsOff() {
        commandTokens.forEach { cmd, token in cmd.removeTarget(token) }
        commandTokens.removeAll()
    }

    private static let artwork: MPMediaItemArtwork? = {
        guard let icon = UIImage(named: "AppIcon") ?? UIImage(named: "AppIcon60x60") else { return nil }
        return MPMediaItemArtwork(boundsSize: icon.size) { _ in icon }
    }()

    private func updateNowPlaying() {
        guard mode != .idle else { return }
        var info: [String: Any] = [
            MPMediaItemPropertyTitle: title.isEmpty ? "Contemporaries" : title,
            MPMediaItemPropertyArtist: by.isEmpty ? "Contemporaries" : by,
            MPMediaItemPropertyAlbumTitle: "Contemporaries",
            MPNowPlayingInfoPropertyPlaybackRate: paused ? 0.0 : 1.0,
        ]
        if let art = ListenBridge.artwork { info[MPMediaItemPropertyArtwork] = art }
        if mode == .reading {
            info[MPNowPlayingInfoPropertyChapterNumber] = index
            info[MPNowPlayingInfoPropertyChapterCount] = parts.count
        } else if let item = player?.currentItem {
            let len = item.duration.seconds, at = item.currentTime().seconds
            if len.isFinite { info[MPMediaItemPropertyPlaybackDuration] = len }
            if at.isFinite { info[MPNowPlayingInfoPropertyElapsedPlaybackTime] = at }
        }
        MPNowPlayingInfoCenter.default().nowPlayingInfo = info
    }

    private func send(_ event: [String: Any]) {
        guard let data = try? JSONSerialization.data(withJSONObject: event),
              let json = String(data: data, encoding: .utf8) else { return }
        webView?.evaluateJavaScript("window.__listen&&window.__listen.onEvent(\(json))", completionHandler: nil)
    }
}
