import SwiftUI
import WebKit

/// Shows the museum page that ships inside the app (Web/index.html).
/// Everything works offline. Links to the web (sources, the online museum) open in Safari.
/// The same page lays itself out for iPhone, iPad and a foldable, so there is one app for all of them.
struct MuseumView: UIViewRepresentable {
    @ObservedObject var theme: ThemeState

    static let darkBG = Color(red: 0.078, green: 0.075, blue: 0.071)   // #141312
    static let lightBG = Color(red: 0.945, green: 0.910, blue: 0.839)  // #F1E8D6

    func makeCoordinator() -> Coordinator { Coordinator(theme: theme) }

    func makeUIView(context: Context) -> WKWebView {
        let config = WKWebViewConfiguration()
        config.userContentController.add(context.coordinator, name: "theme")
        let web = WKWebView(frame: .zero, configuration: config)
        web.navigationDelegate = context.coordinator
        web.uiDelegate = context.coordinator
        web.isOpaque = false
        web.backgroundColor = UIColor(MuseumView.darkBG)
        web.scrollView.backgroundColor = web.backgroundColor
        web.scrollView.contentInsetAdjustmentBehavior = .never

        let page = Bundle.main.url(forResource: "index", withExtension: "html")
            ?? Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "Web")
        if let page = page {
            web.loadFileURL(page, allowingReadAccessTo: page.deletingLastPathComponent())
        } else {
            web.loadHTMLString("<body style='font:20px -apple-system;color:#EDE3CF;background:#141312;padding:60px 24px'>The museum page is missing from the app. Run <b>python3 app/build.py</b>, then press Run in Xcode again.</body>", baseURL: nil)
        }
        return web
    }

    func updateUIView(_ web: WKWebView, context: Context) {
        let bg = UIColor(theme.isLight ? MuseumView.lightBG : MuseumView.darkBG)
        web.backgroundColor = bg
        web.scrollView.backgroundColor = bg
    }

    @MainActor
    final class Coordinator: NSObject, WKNavigationDelegate, WKUIDelegate, WKScriptMessageHandler {
        let theme: ThemeState
        init(theme: ThemeState) { self.theme = theme }

        // The page says which theme it shows.
        func userContentController(_ controller: WKUserContentController, didReceive message: WKScriptMessage) {
            if message.name == "theme", let t = message.body as? String {
                theme.isLight = (t == "light")
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

        // If iOS frees the page's memory in the background, reload instead of showing a blank screen.
        func webViewWebContentProcessDidTerminate(_ webView: WKWebView) {
            webView.reload()
        }
    }
}
