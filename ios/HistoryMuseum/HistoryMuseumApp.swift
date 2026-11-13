import SwiftUI

@main
struct HistoryMuseumApp: App {
    var body: some Scene {
        WindowGroup {
            RootView()
        }
    }
}

/// The museum page, with the opening animation on top until the page is ready.
/// Light or dark simply follows the phone's own setting.
struct RootView: View {
    @Environment(\.colorScheme) private var scheme
    @StateObject private var launch = LaunchState()

    var body: some View {
        ZStack {
            MuseumView(launch: launch)
                .ignoresSafeArea()
            if launch.showing {
                LaunchView(onSkip: { launch.finish() })
                    .transition(.opacity)
                    .zIndex(1)
            }
        }
        .background(scheme == .light ? MuseumView.lightBG : MuseumView.darkBG)
        .ignoresSafeArea()
        .onAppear { launch.start() }
    }
}

/// Decides when the opening animation hands over to the page: when the page says it is ready
/// and the animation has had time to play, or after 4 seconds whatever happens.
/// Screenshot runs (`-route ...`) skip it, so they show the page itself.
@MainActor
final class LaunchState: ObservableObject {
    @Published var showing = MuseumView.argument("-route") == nil
    private var pageReady = false
    private var minTimePassed = false
    private var started = false

    func start() {
        guard showing, !started else { return }
        started = true
        let minimum = UIAccessibility.isReduceMotionEnabled ? 0.8 : 1.5
        DispatchQueue.main.asyncAfter(deadline: .now() + minimum) { [weak self] in
            self?.minTimePassed = true
            self?.finishIfDone()
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 4) { [weak self] in self?.finish() }
    }

    func pageIsReady() {
        pageReady = true
        finishIfDone()
    }

    private func finishIfDone() {
        if pageReady && minTimePassed { finish() }
    }

    func finish() {
        guard showing else { return }
        withAnimation(.easeOut(duration: 0.45)) { showing = false }
    }
}
