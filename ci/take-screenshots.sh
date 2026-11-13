#!/usr/bin/env bash
# Builds the app for the simulator once, then opens museum pages on each simulator and
# takes a screenshot of each. No UI test target: the app reads -route and -theme launch
# arguments (see ios/HistoryMuseum/MuseumView.swift).
# Simulators come from ci/pick_simulators.py, or from $SIMULATOR_LIST_CMD (e.g. ci/create-duo.sh).
# FOLD_POSES (iPhone Duo only), e.g. "open:180 partial:120", repeats the shots with the hinge moved.
set -uo pipefail

ROOT=$(cd "$(dirname "$0")/.." && pwd)
OUT="$ROOT/ci-output"
DERIVED="$ROOT/build/DerivedData"
BUNDLE=com.hubert.contemporaries
mkdir -p "$OUT/screenshots"

if [ -n "${SIMULATOR_LIST_CMD:-}" ]; then
  $SIMULATOR_LIST_CMD > "$OUT/simulators.txt" || { echo "::error::'$SIMULATOR_LIST_CMD' failed"; exit 1; }
else
  python3 "$ROOT/ci/pick_simulators.py" > "$OUT/simulators.txt" || exit 1
fi
cat "$OUT/simulators.txt"

set -o pipefail
xcodebuild build \
  -project "$ROOT/HistoryMuseum.xcodeproj" \
  -scheme HistoryMuseum \
  -configuration Debug \
  -destination "generic/platform=iOS Simulator" \
  -derivedDataPath "$DERIVED" \
  CODE_SIGNING_ALLOWED=NO \
  | tee "$OUT/build.log" | grep -E "error:|warning: .*HistoryMuseum|\*\* BUILD" || true
grep -q "\*\* BUILD SUCCEEDED \*\*" "$OUT/build.log" || { echo "::error::Simulator build failed"; grep -E "error:" "$OUT/build.log" | sort -u; exit 1; }
APP="$DERIVED/Build/Products/Debug-iphonesimulator/HistoryMuseum.app"
SIZE=$(stat -f%z "$APP/index.html" 2>/dev/null || echo 0)
[ "$SIZE" -gt 3000000 ] || { echo "::error::The museum page inside the app is only $SIZE bytes"; exit 1; }

# Pages to photograph: <route>:<theme>
SHOTS="world:dark world:light timeline:light p-van-gogh:dark p-van-gogh@myths:light library:dark talk-van-gogh:dark"
status=0

# shoot <udid> <label>: one screenshot per page; on a folding phone, both displays are tried.
shoot() {
  local udid=$1 label=$2 n=0
  for item in $SHOTS; do
    local route=${item%%:*} theme=${item#*:}
    n=$((n + 1))
    xcrun simctl ui "$udid" appearance "$theme" > /dev/null 2>&1 || true   # the app follows the phone's light/dark setting
    local box; box=$(xcrun simctl get_app_container "$udid" "$BUNDLE" data 2>/dev/null || true)
    [ -n "$box" ] && rm -f "$box/tmp/snapshot.png"
    xcrun simctl launch --terminate-running-process "$udid" "$BUNDLE" -route "$route" -snapshot 1 > /dev/null \
      || { echo "::error::[$label] could not launch the app"; status=1; continue; }
    sleep 10   # the 4 MB page, its pictures and fonts need a moment on a cold simulator
    local name; name=$(printf "%s-%02d-%s-%s" "$label" "$n" "${route//@/-}" "$theme")
    if ! xcrun simctl io "$udid" screenshot "$OUT/screenshots/$name.png" > /dev/null 2> "$OUT/io-error.txt"; then
      # Some devices (the iPhone Duo) refuse a simulator screenshot; use the app's own picture of the page instead.
      if [ -n "$box" ] && [ -f "$box/tmp/snapshot.png" ]; then
        cp "$box/tmp/snapshot.png" "$OUT/screenshots/$name-page.png"
      else
        echo "::warning::[$label] no screenshot for $route: $(head -c 300 "$OUT/io-error.txt")"
      fi
    fi
    # A folding phone may show the app on its other display; keep that too if there is one.
    xcrun simctl io "$udid" screenshot --display=external "$OUT/screenshots/$name-other-display.png" > /dev/null 2>&1 || true
    if [ "$n" = 1 ]; then
      for f in "$OUT/screenshots/$name.png" "$OUT/screenshots/$name-other-display.png"; do
        [ -f "$f" ] && echo "[$label] $(basename "$f"): $(sips -g pixelWidth -g pixelHeight "$f" 2>/dev/null | awk '/pixel/{printf "%s ", $2}')" | tee -a "$OUT/summary.txt"
      done
    fi
  done
  # What the app saw of the fold (iPhone Duo only; "none" elsewhere).
  local box; box=$(xcrun simctl get_app_container "$udid" "$BUNDLE" data 2>/dev/null)
  echo "[$label] hinge: $(cat "$box/tmp/hinge.txt" 2>/dev/null || echo "not reported")" | tee -a "$OUT/summary.txt"
  echo "[$label] $(ls "$OUT/screenshots" | grep -c "^$label-") screenshots" | tee -a "$OUT/summary.txt"
}

while IFS='|' read -r label udid name destination; do
  [ -z "$udid" ] && continue
  echo "::group::Screenshots on $name"
  xcrun simctl boot "$udid" 2>/dev/null
  xcrun simctl bootstatus "$udid" -b > /dev/null 2>&1
  xcrun simctl io "$udid" enumerate > "$OUT/displays-$label.txt" 2>&1 || true
  xcrun simctl install "$udid" "$APP" || { echo "::error::Install failed on $name"; status=1; echo "::endgroup::"; continue; }
  # Warm up: the first launch on a freshly booted simulator is slow.
  xcrun simctl launch "$udid" "$BUNDLE" > /dev/null && sleep 20 && xcrun simctl terminate "$udid" "$BUNDLE"
  # A freshly booted iPhone Duo starts folded shut, on the outer display.
  shoot "$udid" "$label${FOLD_POSES:+-closed}"
  echo "::endgroup::"

  for entry in ${FOLD_POSES:-}; do
    pose=${entry%%:*}; degrees=${entry#*:}
    echo "::group::$name with the hinge $pose ($degrees degrees)"
    if "$ROOT/ci/duo-hinge.sh" "$udid" "$degrees"; then
      shoot "$udid" "$label-$pose"
    else
      echo "::error::Could not move the $name hinge to $degrees degrees ($pose)"
      status=1
    fi
    echo "::endgroup::"
  done
  xcrun simctl shutdown "$udid" 2>/dev/null
done < "$OUT/simulators.txt"

# Drop "other display" shots that are blank (a solid colour compresses to a tiny file).
find "$OUT/screenshots" -name "*-other-display.png" -size -40k -delete 2>/dev/null || true
ls -l "$OUT/screenshots"
exit $status
