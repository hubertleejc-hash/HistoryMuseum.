import SwiftUI

/// The opening: a gold dial draws itself, its hand sweeps backwards through time,
/// and "Contemporaries" appears. Tap anywhere to skip. With Reduce Motion on, it simply fades in.
struct LaunchView: View {
    var onSkip: () -> Void
    @Environment(\.colorScheme) private var scheme
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    @State private var ring: CGFloat = 0
    @State private var ticks = 0.0
    @State private var hand = 0.0
    @State private var word = 0.0
    @State private var caption = 0.0

    private var gold: Color { scheme == .light ? Color(hex: 0x8A6420) : Color(hex: 0xD4AF5A) }
    private var bright: Color { scheme == .light ? Color(hex: 0x5A3E0E) : Color(hex: 0xF2C969) }
    private var ink: Color { scheme == .light ? Color(hex: 0x1F1A14) : Color(hex: 0xEDE3CF) }
    private var ink3: Color { scheme == .light ? Color(hex: 0x6E6252) : Color(hex: 0x958A76) }
    private var bg: Color { scheme == .light ? MuseumView.lightBG : MuseumView.darkBG }

    var body: some View {
        ZStack {
            bg.ignoresSafeArea()
            RadialGradient(colors: [gold.opacity(scheme == .light ? 0.10 : 0.12), .clear],
                           center: UnitPoint(x: 0.5, y: 0.4), startRadius: 0, endRadius: 320)
                .ignoresSafeArea()
            VStack(spacing: 36) {
                ZStack {
                    Circle()
                        .trim(from: 0, to: ring)
                        .stroke(gold, style: StrokeStyle(lineWidth: 1.6, lineCap: .round))
                        .rotationEffect(.degrees(-90))
                    Ticks()
                        .stroke(gold, style: StrokeStyle(lineWidth: 1.6, lineCap: .round))
                        .opacity(ticks)
                    Capsule()
                        .fill(bright)
                        .frame(width: 2.2, height: 68)
                        .offset(y: -34)
                        .rotationEffect(.degrees(hand))
                        .opacity(ticks)
                    Circle().fill(bright).frame(width: 8, height: 8).opacity(ticks)
                }
                .frame(width: 180, height: 180)
                VStack(spacing: 12) {
                    Text("Contemporaries")
                        .font(.system(size: 36, weight: .regular, design: .serif))
                        .tracking(word < 1 ? 4 : 0.3)
                        .foregroundColor(ink)
                        .opacity(word)
                    Text("WHO SHARED THE WORLD")
                        .font(.system(size: 12, weight: .medium))
                        .tracking(2.6)
                        .foregroundColor(ink3)
                        .opacity(caption)
                }
            }
            .offset(y: -30)
        }
        .contentShape(Rectangle())
        .onTapGesture { onSkip() }
        .accessibilityElement(children: .ignore)
        .accessibilityLabel("Contemporaries")
        .accessibilityAddTraits(.isButton)
        .accessibilityHint("Opens the museum")
        .onAppear(perform: play)
    }

    private func play() {
        if reduceMotion {
            ring = 1; hand = 0
            withAnimation(.easeOut(duration: 0.4)) { ticks = 1; word = 1; caption = 1 }
            return
        }
        withAnimation(.timingCurve(0.6, 0, 0.3, 1, duration: 0.75).delay(0.1)) { ring = 1 }
        withAnimation(.easeOut(duration: 0.4).delay(0.4)) { ticks = 1 }
        withAnimation(.timingCurve(0.45, 0, 0.2, 1, duration: 1.0).delay(0.25)) { hand = -360 }
        withAnimation(.easeOut(duration: 0.6).delay(0.55)) { word = 1 }
        withAnimation(.easeOut(duration: 0.5).delay(0.85)) { caption = 1 }
    }
}

/// Four hour marks, eight minute marks, and a faint globe arc inside the dial.
private struct Ticks: Shape {
    func path(in r: CGRect) -> Path {
        var p = Path()
        let c = CGPoint(x: r.midX, y: r.midY), R = r.width / 2
        for i in 0..<12 {
            let a = Double(i) * .pi / 6, long = i % 3 == 0
            let inner = R - (long ? 12 : 7)
            p.move(to: CGPoint(x: c.x + CGFloat(sin(a)) * inner, y: c.y - CGFloat(cos(a)) * inner))
            p.addLine(to: CGPoint(x: c.x + CGFloat(sin(a)) * (R - 2), y: c.y - CGFloat(cos(a)) * (R - 2)))
        }
        p.addArc(center: c, radius: R * 0.62, startAngle: .degrees(180), endAngle: .degrees(360), clockwise: false)
        return p
    }
}

extension Color {
    init(hex: UInt32) {
        self.init(red: Double((hex >> 16) & 0xFF) / 255, green: Double((hex >> 8) & 0xFF) / 255, blue: Double(hex & 0xFF) / 255)
    }
}
