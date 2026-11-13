import Foundation
import WebKit
#if canImport(FoundationModels)
import FoundationModels
#endif

/// "Talk to a historical person", on the phone itself.
/// The page sends {op:"status"} and {op:"ask", id, instructions, prompt}. On iPhones with Apple Intelligence
/// (iOS 26 or later) the answer is written by Apple's on-device model: free, private, and offline.
/// Everywhere else status says "not available", and the page answers straight from the museum's record.
/// Answers go back to window.__talk.onEvent. Nothing ever leaves the phone.
final class TalkBridge: NSObject, WKScriptMessageHandler {
    weak var webView: WKWebView?
    private var tasks: [String: Task<Void, Never>] = [:]

    func userContentController(_ controller: WKUserContentController, didReceive message: WKScriptMessage) {
        guard message.name == "talk", let body = message.body as? [String: Any],
              let op = body["op"] as? String else { return }
        switch op {
        case "status":
            send(["t": "status", "available": TalkBridge.available])
        case "ask":
            guard let id = body["id"] as? String, id.count < 40,
                  let instructions = body["instructions"] as? String,
                  let prompt = body["prompt"] as? String else { return }
            ask(id: id, instructions: String(instructions.prefix(3000)), prompt: String(prompt.prefix(2000)))
        case "cancel":
            cancelAll()
        default:
            break
        }
    }

    static var available: Bool {
        #if canImport(FoundationModels)
        if #available(iOS 26.0, *) {
            if case .available = SystemLanguageModel.default.availability { return true }
        }
        #endif
        return false
    }

    private func ask(id: String, instructions: String, prompt: String) {
        #if canImport(FoundationModels)
        if #available(iOS 26.0, *), TalkBridge.available {
            tasks[id] = Task { @MainActor [weak self] in
                do {
                    let session = LanguageModelSession(instructions: instructions)
                    let reply = try await session.respond(to: prompt)
                    self?.send(["t": "done", "id": id, "text": reply.content])
                } catch {
                    // Declined by the model's safety rules, out of context, or cancelled: the page falls back to the record.
                    self?.send(["t": "error", "id": id, "kind": "declined"])
                }
                self?.tasks[id] = nil
            }
            return
        }
        #endif
        send(["t": "error", "id": id, "kind": "unavailable"])
    }

    func cancelAll() {
        tasks.values.forEach { $0.cancel() }
        tasks.removeAll()
    }

    private func send(_ event: [String: Any]) {
        guard let data = try? JSONSerialization.data(withJSONObject: event),
              let json = String(data: data, encoding: .utf8) else { return }
        DispatchQueue.main.async { [weak self] in
            self?.webView?.evaluateJavaScript("window.__talk && window.__talk.onEvent(\(json))", completionHandler: nil)
        }
    }
}
