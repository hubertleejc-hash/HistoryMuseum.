#!/usr/bin/env python3
"""Find the exact birth and death days of the museum's people, for the "Today in history" page.

Runs on GitHub Actions (Wikidata is not reachable from every machine). For each person in app/data.js,
Wikidata (CC0) finds the human whose birth year matches (same search as tools/art/portraits.py), and only
day-precision dates are kept, and only when their year agrees with the year the museum already shows.
The calendar is kept too: "j" marks a date Wikidata gives in the Julian (Old Style) calendar.

Events: tools/today/events.json lists events and the Wikidata date to read; the day comes from Wikidata
and is kept only when its year matches the event's year.

Writes online/today.json {"days": {person id: {q, b: [month, day, cal], d: [...]}}, "events": [{e | n,y,t, q, m, d, j}]}
(the app fetches it inside online/feed.json, so Today grows without a new install) and app/today.js, the same
data built into the app for the first launch offline. Re-running replaces both. --people looks up every person again (slow); without it the people's days already
in app/today.js are kept and only the events are looked up. tools/today/deny.json lists "id:b" or "id:d" dates to leave out.
"""
import json, re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "art"))
from portraits import find_entity, wd  # noqa: E402

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

def events():
    src = (ROOT / "app" / "data.js").read_text()
    years = {m.group(1): int(m.group(2)) for m in re.finditer(r'\{id:"([^"]+)", n:"[^"]+", y:(-?\d+)', src)}
    out = []
    for ev in json.loads((Path(__file__).parent / "events.json").read_text())["events"]:
        y = years.get(ev["e"]) if ev.get("e") else ev.get("y")
        if y is None: print("  no such event:", ev); continue
        s = wd({"action": "wbsearchentities", "search": ev["s"], "language": "en", "type": "item", "limit": 5})
        ids = [x["id"] for x in (s or {}).get("search", [])]
        e = wd({"action": "wbgetentities", "ids": "|".join(ids), "props": "claims"}) if ids else None
        hit = None
        for qid in ids:
            dd = day_of((e or {}).get("entities", {}).get(qid, {}), ev["p"], y)
            if dd: hit = {**{k: ev[k] for k in ("e", "n", "y", "t") if k in ev}, "q": qid, "m": dd[0], "d": dd[1], **({"j": 1} if dd[2] == "j" else {})}; break
        print("event", ev.get("e") or ev.get("n"), hit and (hit["q"], hit["m"], hit["d"]))
        if hit: out.append(hit)
    return out

def main():
    deny = set(json.loads((Path(__file__).parent / "deny.json").read_text())) if (Path(__file__).parent / "deny.json").exists() else set()
    out, miss = {}, []
    # People's days are looked up again only with --people (slow: about 35 minutes); otherwise the
    # existing ones are kept and only the events are looked up.
    old = re.search(r"= (\{.*\});", (ROOT / "app" / "today.js").read_text(), re.S)
    old = json.loads(old.group(1)) if old else {}
    old = old.get("days", old) if "days" in old or "events" in old else old
    if old and "--people" not in sys.argv:
        # a denied date drops only that date; the person's other date stays
        out = {k: w for k, v in old.items() if (w := {x: y for x, y in v.items() if f"{k}:{x}" not in deny}) and ("b" in w or "d" in w)}
    for p in ([] if out else people()):
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
    evs = events()
    body = json.dumps({"days": out, "events": evs}, separators=(",", ":"), ensure_ascii=False)
    (ROOT / "online" / "today.json").write_text(body + "\n")
    (ROOT / "app" / "today.js").write_text(
        "/* Exact days for the Today page, from Wikidata (CC0). Built by tools/today/dates.py; do not edit by hand.\n"
        "   The same data as online/today.json, which the app fetches through online/feed.json and which wins when newer.\n"
        "   b, d = [month, day, calendar]; calendar j = Julian (Old Style), g = Gregorian. */\n"
        "window.HISTORY.today = " + body + ";\n")
    print(len(evs), "events with a day")
    print(len(out), "people with a day;", len(miss), "without:", " ".join(miss))

if __name__ == "__main__":
    main()
