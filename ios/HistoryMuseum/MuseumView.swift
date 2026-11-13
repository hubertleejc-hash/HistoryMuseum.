import SwiftUI
import WebKit

/// Shows the museum page that ships inside the app (Web/index.html).
/// Everything works offline. Links to the web (sources, the online museum) open in Safari.
/// The same page lays itself out for iPhone, iPad and a foldable, so there is one app for all of them.
struct MuseumView: UIViewRepresentable {
    let launch: LaunchState

    static let darkBG = Color(red: 0.078, green: 0.075, blue: 0.071)   // #141312, the museum at night
    static let lightBG = Color(red: 0.969, green: 0.953, blue: 0.918)  // #F7F3EA, the daylight gallery
    /// The same two colours as one that follows the phone's light or dark setting.
    static let pageBG = UIColor { $0.userInterfaceStyle == .light ? UIColor(MuseumView.lightBG) : UIColor(MuseumView.darkBG) }

    func makeCoordinator() -> Coordinator { Coordinator(launch: launch) }

    func makeUIView(context: Context) -> WKWebView {
        let config = WKWebViewConfiguration()
        config.userContentController.add(context.coordinator, name: "ready")
        config.userContentController.add(context.coordinator, name: "haptic")
        config.userContentController.add(context.coordinator.talk, name: "talk")
        // For the screenshot runs on GitHub: `-route p-van-gogh` opens that page. Ignored when not given.
        var start = ""
        if let route = MuseumView.argument("-route"),
           route.range(of: "^[A-Za-z0-9@-]+$", options: .regularExpression) != nil {
            start += "if(!location.hash)location.hash='\(route)';"
        }
        if !start.isEmpty {
            config.userContentController.addUserScript(
                WKUserScript(source: start, injectionTime: .atDocumentStart, forMainFrameOnly: true))
        }
        let web = MuseumWebView(frame: .zero, configuration: config)
        web.navigationDelegate = context.coordinator
        web.uiDelegate = context.coordinator
        context.coordinator.talk.webView = web
        web.isOpaque = false
        web.backgroundColor = MuseumView.pageBG
        web.scrollView.backgroundColor = MuseumView.pageBG
        web.scrollView.contentInsetAdjustmentBehavior = .never
        web.allowsLinkPreview = false          // no web-style link previews on a long press
        // An app does not zoom when you double-tap or pinch: turn the web view's zooming off.
        web.scrollView.delegate = context.coordinator
        web.scrollView.minimumZoomScale = 1
        web.scrollView.maximumZoomScale = 1
        web.scrollView.bouncesZoom = false
        web.scrollView.pinchGestureRecognizer?.isEnabled = false
        web.allowsBackForwardNavigationGestures = true

        let page = Bundle.main.url(forResource: "index", withExtension: "html")
            ?? Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "Web")
        if let page = page {
            web.loadFileURL(page, allowingReadAccessTo: page.deletingLastPathComponent())
        } else {
            web.loadHTMLString("<body style='font:20px -apple-system;color:#EDE3CF;background:#141312;padding:60px 24px'>The museum page is missing from the app. Run <b>python3 app/build.py</b>, then press Run in Xcode again.</body>", baseURL: nil)
        }
        return web
    }

    /// The value after a launch argument, e.g. `-route p-van-gogh` gives "p-van-gogh".
    static func argument(_ name: String) -> String? {
        let args = ProcessInfo.processInfo.arguments
        guard let i = args.firstIndex(of: name), i + 1 < args.count else { return nil }
        return args[i + 1]
    }

    func updateUIView(_ web: WKWebView, context: Context) {}

    @MainActor
    final class Coordinator: NSObject, WKNavigationDelegate, WKUIDelegate, WKScriptMessageHandler, UIScrollViewDelegate {
        let launch: LaunchState
        init(launch: LaunchState) { self.launch = launch }
        let talk = TalkBridge()

        // No zooming: there is nothing to zoom into, so double-tap and pinch do nothing.
        func viewForZooming(in scrollView: UIScrollView) -> UIView? { nil }

        private let selection = UISelectionFeedbackGenerator()
        private let impact = UIImpactFeedbackGenerator(style: .medium)
        private let notice = UINotificationFeedbackGenerator()
        private var lastHaptic = Date.distantPast

        // "ready": the page has drawn, so the opening animation can hand over.
        // "haptic": a soft click from the page (the year dial, opening a Hall). Only these few words are accepted,
        // and no more than about 25 a second.
        func userContentController(_ controller: WKUserContentController, didReceive message: WKScriptMessage) {
            if message.name == "ready" {
                launch.pageIsReady()
                return
            }
            guard message.name == "haptic", let kind = message.body as? String else { return }
            let now = Date()
            guard now.timeIntervalSince(lastHaptic) > 0.04 else { return }
            lastHaptic = now
            switch kind {
            case "tick", "select": selection.selectionChanged(); selection.prepare()
            case "open": impact.impactOccurred(); impact.prepare()
            case "success": notice.notificationOccurred(.success)
            default: break
            }
        }

        private func openOutside(_ url: URL?) -> Bool {
            guard let url = url, let scheme = url.scheme?.lowercased(),
                  scheme == "http" || scheme == "https" || scheme == "mailto" else { return false }
            UIApplication.shared.open(url)
            return true
        }

        // Web links leave the app and open in Safari; the museum's own pages stay inside.
        func webView(_ webView: WKWebView, decidePolicyFor action: WKNavigationAction,
                     decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
            if action.navigationType == .linkActivated || action.targetFrame == nil,
               openOutside(action.request.url) {
                decisionHandler(.cancel)
            } else {
                decisionHandler(.allow)
            }
        }

        // Links marked "open in a new tab" also go to Safari.
        func webView(_ webView: WKWebView, createWebViewWith configuration: WKWebViewConfiguration,
                     for action: WKNavigationAction, windowFeatures: WKWindowFeatures) -> WKWebView? {
            _ = openOutside(action.request.url)
            return nil
        }

        func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
            (webView as? MuseumWebView)?.applyHinge()
            // For the screenshot runs: `-snapshot` saves a picture of the page to the app's temporary
            // folder (snapshot.png), for devices where the simulator cannot take one, like the iPhone Duo.
            if MuseumView.argument("-snapshot") != nil {
                DispatchQueue.main.asyncAfter(deadline: .now() + 5) {
                    webView.takeSnapshot(with: nil) { image, _ in
                        guard let data = image?.pngData() else { return }
                        let file = URL(fileURLWithPath: NSTemporaryDirectory()).appendingPathComponent("snapshot.png")
                        try? data.write(to: file, options: .atomic)
                    }
                }
            }
        }

        // If iOS frees the page's memory in the background, reload instead of showing a blank screen.
        func webViewWebContentProcessDidTerminate(_ webView: WKWebView) {
            talk.cancelAll()
            webView.reload()
        }
    }
}

/// The web view, plus the iPhone Duo's fold. When the phone is open, the fold is a "division"
/// region (inactive when flat, active when half open). Its position goes to the page as CSS
/// variables (--hinge-x, --hinge-y, --hinge-w, --hinge-h, and --hinge-active 1 or 0) and to
/// hinge.txt in the app's temporary folder, so the screenshot runs can report it.
final class MuseumWebView: WKWebView {
    private var lastReport = ""

    override func layoutSubviews() {
        super.layoutSubviews()
        reportHinge()
    }

    private func reportHinge() {
        var report = "none"
        var css = "--hinge-active:0;--hinge-w:0px;--hinge-h:0px"
        #if FOLD_APIS
        if #available(iOS 27.1, *) {
            let regions = reservedRegions(kind: .division, options: .includeInactive)
            if let region = regions.first(where: \.isActive) ?? regions.first,
               !region.frame.isNull, region.frame.width > 0 || region.frame.height > 0 {
                let f = region.frame
                report = "active=\(region.isActive) region=\(Int(f.minX)),\(Int(f.minY)),\(Int(f.width)),\(Int(f.height)) bounds=\(Int(bounds.width))x\(Int(bounds.height))"
                css = "--hinge-active:\(region.isActive ? 1 : 0);--hinge-x:\(Int(f.minX))px;--hinge-y:\(Int(f.minY))px;--hinge-w:\(Int(f.width))px;--hinge-h:\(Int(f.height))px"
            }
        }
        #endif
        guard report != lastReport else { return }
        lastReport = report
        hingeCSS = css
        let file = URL(fileURLWithPath: NSTemporaryDirectory()).appendingPathComponent("hinge.txt")
        try? (report + "\n").write(to: file, atomically: true, encoding: .utf8)
        applyHinge()
    }

    private var hingeCSS = ""

    /// Sets the hinge variables on the page. Called again when a page finishes loading.
    func applyHinge() {
        guard !hingeCSS.isEmpty else { return }
        let pairs = hingeCSS.split(separator: ";").map { pair -> String in
            let kv = pair.split(separator: ":", maxSplits: 1)
            return "s.setProperty('\(kv[0])','\(kv.count > 1 ? kv[1] : "")');"
        }.joined()
        evaluateJavaScript("(function(){var s=document.documentElement.style;\(pairs)if(window.onHinge)window.onHinge();})()", completionHandler: nil)
    }
}
