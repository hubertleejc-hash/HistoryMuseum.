"""Small helpers for writing place files by hand (online/places/<id>.json). The text is ours; each card cites sources."""
import json
from pathlib import Path

OUT = Path(__file__).resolve().parents[3] / "online" / "places"
W = lambda t: {"n": "Wikipedia: " + t.replace("_", " "), "u": "https://en.wikipedia.org/wiki/" + t}
O = lambda n, u: {"n": n, "u": u}


def F(h, t, src, lab="verified", when=None, people=(), go=None):
    x = {"h": h}
    if when: x["when"] = when
    x["lab"] = lab
    if people: x["people"] = list(people)
    if go: x["go"] = list(go)
    x["t"] = t
    x["src"] = list(src)
    return x


def place(id, n, kind, where, lat, lon, r, blurb, facts, short=None, rank=None):
    pl = {"id": id, "n": n}
    if short: pl["short"] = short
    pl.update({"kind": kind, "where": where, "lat": lat, "lon": lon, "r": r})
    if rank: pl["rank"] = rank
    pl["blurb"] = blurb
    pl["facts"] = facts
    p = OUT / (id + ".json")
    if p.exists():  # keep a guide written by another tool
        old = json.loads(p.read_text())
        if old.get("guide"): pl["guide"] = old["guide"]
    p.write_text(json.dumps(pl, ensure_ascii=False, indent=1) + "\n")
    return id
