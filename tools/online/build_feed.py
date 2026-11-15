"""Builds online/feed.json: the extra stories and Gallery works the app fetches without a new install.

The museum works fully offline with what ships inside the app. When the phone is online, the app
fetches this one file from the repository's main branch (raw.githubusercontent.com, free, no setup),
keeps a copy for offline use and adds what is new. So: merge a content PR into main, and the next
time the app opens online, the new things are there.

Inputs (all in online/):
  art/catalog.json    works gathered by  tools/art/gather.py --feed  (same screens as the app's Gallery)
  art/m/<id>.jpg      their 160 px tiles; the big picture loads from the museum's own server
  today.json          exact days for the Today page (tools/today/dates.py)
  stories/<id>.json   a chapter for a person in app/data.js, in the app/chapters.js format,
                      ending with a {"k": "sources", "src": [{"n": ..., "u": ...}]} section (required)
  places/<id>.json    a place for "Near me" (a museum, city or battlefield): its centre point and radius,
                      short fact cards tied to the museum's people, and for a museum an optional guide route.
                      The feed carries only the list (id, name, point, rev); the phone downloads a place's
                      file by name when it is opened, so no position is ever sent.

Rules checked here (the build fails rather than publish something wrong):
  * a person's bundled chapter always wins; an online story is only for someone without one
  * stories use only pictures that ship in the app (img/manifest.json slugs or pt-<id> portraits)
  * sacred people (Moses, Jesus, the Prophet Muhammad...) get no pictures at all in their story
  * every work passes the Gallery's screens again (deny list, the Prophet Muhammad is never shown)
  * every place fact and guide cites sources with a link, names only real people, and uses only
    pictures that ship in the app; facts about sacred people have no picture
Run:  python3 tools/online/build_feed.py
"""
import hashlib, json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
ON = ROOT / "online"
sys.path.insert(0, str(ROOT / "tools" / "art"))
import gather  # noqa: E402  (screens: still_ok, DENY, NEVER, figural_islamic)

KIND = ["painting", "print", "drawing", "photo", "sculpture", "textile", "object", "book"]
REG = ["east-asia", "south-asia", "islamic", "africa", "ancient", "europe", "americas", "oceania"]
MAX_ART = 4000  # keeps the feed near 2 MB, so the phone's offline copy stays small


def people():
    src = (ROOT / "app" / "data.js").read_text()
    out = {}
    for m in re.finditer(r'\{id:"([a-z0-9-]+)", n:"[^"]*"([^}]*?)bio:', src):
        out[m.group(1)] = "sacred:1" in m.group(2)
    return out


def bundled_chapters():
    return set(re.findall(r'^\s*"([a-z0-9-]+)":\s*\{', (ROOT / "app" / "chapters.js").read_text(), re.M))


def pictures():
    slugs = {m["slug"] for m in json.loads((ROOT / "app" / "img" / "manifest.json").read_text())
             if (ROOT / "app" / "img" / (m["slug"] + ".jpg")).exists()}
    gd = ROOT / "app" / "img" / "guide"
    if (gd / "credits.json").exists():
        slugs |= {k for k in json.loads((gd / "credits.json").read_text()) if (gd / (k + ".jpg")).exists()}
    pt = ROOT / "app" / "art" / "portraits.json"
    if pt.exists():
        slugs |= {"pt-" + k for k in json.loads(pt.read_text()) if (ROOT / "app" / "art" / "p" / (k + ".jpg")).exists()}
    return slugs


def story(pid, ch, ppl, have, pics):
    where = f"online/stories/{pid}.json"
    assert pid in ppl, f"{where}: no person with id {pid} in app/data.js"
    assert pid not in have, f"{where}: {pid} already has a chapter in the app; edit app/chapters.js instead"
    assert ch.get("lede") and ch.get("sections"), f"{where}: needs lede and sections"
    src = next((s.get("src") for s in ch["sections"] if s.get("k") == "sources"), None) or []
    assert len(src) >= 2 and all(s.get("n") for s in src) and any(str(s.get("u", "")).startswith("https://") for s in src), \
        f"{where}: every story needs a sources section citing at least two sources, with links"
    imgs = [ch.get("hero"), ch.get("portrait")] + [s.get("img") for s in ch["sections"]]
    imgs = [i for i in imgs if i]
    if ppl[pid]:
        assert not imgs, f"{where}: {pid} is a sacred figure; out of respect the story has no pictures"
    for i in imgs:
        assert i in pics, f"{where}: picture {i} does not ship in the app"
    for s in ch["sections"]:
        assert s.get("k") and s.get("h") and (s.get("ps") or s.get("myths") or s.get("src")), f"{where}: section needs k, h and ps, myths or src"
    return ch


LABS = {"verified", "likely", "disputed", "myth", "tradition"}
KINDS = {"museum", "city", "site"}


def cited(src, where):
    assert src and all(x.get("n") for x in src) and any(str(x.get("u", "")).startswith("https://") for x in src), \
        f"{where}: needs sources, at least one with an https link"


def place(f, ppl, pics):
    where = f"online/places/{f.name}"
    pl = json.loads(f.read_text())
    assert pl.get("id") == f.stem and re.fullmatch(r"[a-z0-9-]+", f.stem), f"{where}: id must match the file name"
    assert pl.get("n") and pl.get("kind") in KINDS, f"{where}: needs n and kind ({sorted(KINDS)})"
    assert -90 <= pl["lat"] <= 90 and -180 <= pl["lon"] <= 180 and 50 <= pl["r"] <= 60000, f"{where}: lat, lon, r (metres) out of range"
    cards = list(pl.get("facts", []))
    assert cards or pl.get("guide"), f"{where}: needs facts or a guide"
    for i, x in enumerate(cards):
        w = f"{where} fact {i + 1}"
        assert x.get("h") and x.get("t") and x.get("lab") in LABS, f"{w}: needs h, t and lab ({sorted(LABS)})"
        assert len(x["t"]) <= 600, f"{w}: keep a card under 600 characters"
        cited(x.get("src"), w)
    g = pl.get("guide")
    if g:
        assert g.get("n") and g.get("stops") and 5 <= len(g["stops"]) <= 30, f"{where}: a guide needs n and 5 to 30 stops"
        cited(g.get("src"), where + " guide")
        floors = [s["floor"] for s in g["stops"]]
        assert floors == sorted(floors), f"{where}: guide stops must be in walking order, floor by floor"
        cards += g["stops"]
        for s in g["stops"]:
            assert s.get("t") and s.get("story") and len(s["story"]) <= 500, f"{where}: stop {s.get('t')} needs t and a story under 500 characters"
    for x in cards:
        for pid in x.get("people", []):
            assert pid in ppl, f"{where}: no person with id {pid} in app/data.js"
        if x.get("pic"):
            pc = x["pic"]
            assert re.match(r"https://((upload|thumb)\.wikimedia\.org|images\.metmuseum\.org)/", pc.get("u", "")), f"{where}: pictures load only from Wikimedia Commons or The Met"
            assert pc.get("cr") and pc.get("lic") and str(pc.get("page", "")).startswith("https://"), f"{where}: a picture needs its credit (cr), licence (lic) and page"
            assert re.search(r"public domain|cc0|cc by", pc["lic"], re.I) and not re.search(r"\bnc\b|non-?commercial|\bnd\b", pc["lic"], re.I), f"{where}: licence {pc['lic']} is not free for a paid app"
            assert not any(ppl.get(pid) for pid in x.get("people", [])), f"{where}: out of respect, no picture with a sacred figure"
        if x.get("img"):
            assert x["img"] in pics, f"{where}: picture {x['img']} does not ship in the app"
            assert not any(ppl.get(pid) for pid in x.get("people", [])), f"{where}: out of respect, no picture with a sacred figure"
    stub = {k: pl[k] for k in ("id", "n", "short", "kind", "where", "lat", "lon", "r", "rank") if k in pl}
    stub["rev"] = hashlib.sha1(f.read_bytes()).hexdigest()[:10]
    if g:
        stub["guide"] = 1
    return stub


def main():
    ppl, have, pics = people(), bundled_chapters(), pictures()
    assert len(ppl) > 100 and len(have) > 50, ("could not read the app's people or chapters", len(ppl), len(have))
    chapters = {}
    for f in sorted((ON / "stories").glob("*.json")) if (ON / "stories").exists() else []:
        chapters[f.stem] = story(f.stem, json.loads(f.read_text()), ppl, have, pics)

    cat = json.loads((ON / "art" / "catalog.json").read_text()) if (ON / "art" / "catalog.json").exists() else []
    app_ids = {r["id"] for r in json.loads((ROOT / "app" / "art" / "catalog.json").read_text())}
    keep = [r for r in cat if r["id"] not in gather.DENY and r["id"] not in app_ids and gather.still_ok(r)
            and (ON / "art" / "m" / (r["id"] + ".jpg")).exists() and r.get("img", "").startswith("https://")]
    for r in keep:
        assert not gather.NEVER.search(" ".join([r["t"], r.get("x", ""), r.get("fy", ""), r.get("c", "")])), r["id"]
        assert not gather.figural_islamic(r), r["id"]
    keep = keep[:MAX_ART]
    art = [[r["id"], r["t"], r["a"], r["y"], REG.index(r["r"]), KIND.index(r["k"]), r["w"], r["h"], 1 if r.get("x") else 0] for r in keep]
    detail = {r["id"]: {k: r[k] for k in ("d", "c", "m", "x", "fy", "cr", "u", "img", "on") if r.get(k)} for r in keep}

    # The Today page's dates (tools/today/dates.py): the app keeps the newest copy, so Today grows without a new install.
    today = json.loads((ON / "today.json").read_text()) if (ON / "today.json").exists() else {"days": {}, "events": []}
    assert set(today) == {"days", "events"}, set(today)
    for pid in today["days"]: assert pid in ppl, ("Today: no such person", pid)
    places = [place(f, ppl, pics) for f in sorted((ON / "places").glob("*.json"))] if (ON / "places").exists() else []
    body = {"art": art, "detail": detail, "chapters": chapters, "today": today, "places": places}
    rev = hashlib.sha1(json.dumps(body, sort_keys=True, ensure_ascii=False).encode()).hexdigest()[:12]
    out = json.dumps({"v": 1, "rev": rev, **body}, ensure_ascii=False, separators=(",", ":"))
    (ON / "feed.json").write_text(out + "\n")
    print(f"online/feed.json: {len(art)} works, {len(chapters)} stories, Today {len(today['days'])} people + {len(today['events'])} events, {len(places)} places, {len(out) // 1024} KB, rev {rev}")


if __name__ == "__main__":
    main()
