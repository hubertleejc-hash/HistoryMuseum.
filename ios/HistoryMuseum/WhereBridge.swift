import CoreLocation
import WebKit

/// "Near me": one quick location check, only when the visitor taps "Use my location".
/// The page sends {op:"status"} (never asks) or {op:"locate"} (asks once, "While using the app").
/// The position goes back to the page, which compares it with the list of places stored inside the
/// app and forgets it. Nothing is saved, sent anywhere or tracked: no background location, no "Always".
/// Answers go to window.__where.onEvent: {t:"status", s}, {t:"fix", lat, lon, acc}, {t:"denied"}, {t:"error"}.
final class WhereBridge: NSObject, WKScriptMessageHandler, CLLocationManagerDelegate {
    weak var webView: WKWebView?
    private let manager = CLLocationManager()
    private var wanted = false

    override init() {
        super.init()
        manager.delegate = self
        // A museum or a city is enough; this is quicker and kinder to the battery than GPS precision.
        manager.desiredAccuracy = kCLLocationAccuracyHundredMeters
    }

    func userContentController(_ controller: WKUserContentController, didReceive message: WKScriptMessage) {
        guard message.name == "where", let body = message.body as? [String: Any],
              let op = body["op"] as? String else { return }
        switch op {
        case "status": send(["t": "status", "s": statusWord])
        case "locate": locate()
        default: break
        }
    }

    private var statusWord: String {
        switch manager.authorizationStatus {
        case .authorizedWhenInUse, .authorizedAlways: return "granted"
        case .denied, .restricted: return "denied"
        default: return "unknown"
        }
    }

    private func locate() {
        wanted = true
        switch manager.authorizationStatus {
        case .notDetermined: manager.requestWhenInUseAuthorization()   // the answer arrives below
        case .denied, .restricted: wanted = false; send(["t": "denied"])
        default: manager.requestLocation()
        }
    }

    func locationManagerDidChangeAuthorization(_ manager: CLLocationManager) {
        guard wanted else { return }
        switch manager.authorizationStatus {
        case .authorizedWhenInUse, .authorizedAlways: manager.requestLocation()
        case .denied, .restricted: wanted = false; send(["t": "denied"])
        default: break
        }
    }

    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        guard wanted, let l = locations.last else { return }
        wanted = false
        send(["t": "fix", "lat": l.coordinate.latitude, "lon": l.coordinate.longitude, "acc": l.horizontalAccuracy])
    }

    func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
        guard wanted else { return }
        wanted = false
        let denied = (error as? CLError)?.code == .denied
        send(["t": denied ? "denied" : "error"])
    }

    private func send(_ event: [String: Any]) {
        guard let data = try? JSONSerialization.data(withJSONObject: event),
              let json = String(data: data, encoding: .utf8) else { return }
        DispatchQueue.main.async { [weak self] in
            self?.webView?.evaluateJavaScript("window.__where&&window.__where.onEvent(\(json))", completionHandler: nil)
        }
    }
}
