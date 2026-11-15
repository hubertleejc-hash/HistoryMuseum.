#!/usr/bin/env python3
"""Find the exact birth and death days of the museum's people, for the "Today in history" page.

Runs on GitHub Actions (Wikidata is not reachable from every machine). For each person in app/data.js,
Wikidata (CC0) finds the human whose birth year matches (same search as tools/art/portraits.py), and only
day-precision dates are kept, and only when their year agrees with the year the museum already shows.
The calendar is kept too: "j" marks a date Wikidata gives in the Julian (Old Style) calendar.

Writes app/today.js: window.HISTORY.days = {person id: {q: QID, b: [month, day, cal], d: [month, day, cal]}}.
Re-running replaces the file. tools/today/deny.json lists "id:b" or "id:d" dates to leave out.
"""
import json, re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "art"))
from portraits import find_entity  # noqa: E402

ROOT = Path(__file__).resolve().parents[2]
JULIAN = "http://www.wikidata.org/entity/Q1985786"

def people():
    src = (ROOT / "app" / "data.js").read_text()
    for m in re.finditer(r'\{id:"([^"]+)", n:"([^"]+)", b:(-?\d+), d:(-?\d+|null)', src):
        yield {"id": m.group(1), "n": m.group(2), "b": int(m.group(3)), "d": None if m.group(4) == "null" else int(m.group(4))}

def day_of(ent, prop, year):
    """[month, day, "g"|"j"] when Wikidata has exactly one day-precision date for prop in the museum's year."""
    found = set()
    for c in ent.get("claims", {}).get(prop, []):
        if c.get("rank") == "deprecated": continue
        v = c["mainsnak"].get("datavalue", {}).get("value") or {}
        m = re.match(r"([+-])(\d+)-(\d\d)-(\d\d)", v.get("time", ""))
        if not m or v.get("precision") != 11: continue
        y = int(m.group(2)) * (-1 if m.group(1) == "-" else 1)
        if y != year and not (year < 0 and y in (year + 1, year - 1)): continue
        found.add((int(m.group(3)), int(m.group(4)), "j" if v.get("calendarmodel") == JULIAN else "g"))
    return list(next(iter(found))) if len(found) == 1 else None

def main():
    deny = set(json.loads((Path(__file__).parent / "deny.json").read_text())) if (Path(__file__).parent / "deny.json").exists() else set()
    out, miss = {}, []
    for p in people():
        ent = find_entity(p)
        if not ent: miss.append(p["id"]); continue
        rec = {"q": ent["id"]}
        for k, prop, y in (("b", "P569", p["b"]), ("d", "P570", p["d"])):
            if y is None or f'{p["id"]}:{k}' in deny: continue
            dd = day_of(ent, prop, y)
            if dd: rec[k] = dd
        if "b" in rec or "d" in rec: out[p["id"]] = rec
        else: miss.append(p["id"])
        print(p["id"], ent["id"], rec.get("b"), rec.get("d"))
    (ROOT / "app" / "today.js").write_text(
        "/* Exact birth and death days for the Today page, from Wikidata (CC0). Built by tools/today/dates.py; do not edit by hand.\n"
        "   b, d = [month, day, calendar]; calendar j = Julian (Old Style), g = Gregorian. */\n"
        "window.HISTORY.days = " + json.dumps(out, separators=(",", ":")) + ";\n")
    print(len(out), "people with a day;", len(miss), "without:", " ".join(miss))

if __name__ == "__main__":
    main()
