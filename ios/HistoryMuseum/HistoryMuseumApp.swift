import SwiftUI

/// Remembers which museum theme is showing ("dark" night museum or "light" old book),
/// so the clock and battery icons at the top stay readable.
final class ThemeState: ObservableObject {
    @Published var isLight = false
}

@main
struct HistoryMuseumApp: App {
    @StateObject private var theme = ThemeState()

    var body: some Scene {
        WindowGroup {
            MuseumView(theme: theme)
                .ignoresSafeArea()
                .background(theme.isLight ? MuseumView.lightBG : MuseumView.darkBG)
                .preferredColorScheme(theme.isLight ? .light : .dark)
        }
    }
}
