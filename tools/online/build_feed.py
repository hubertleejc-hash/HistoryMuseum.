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
  voice/<id>.json     Talk lines in a person's own voice, in the app/voice.js format: {"hi", "how", "bye",
                      "lines": [[topic, keywords, what they say, record pointers], ...]}. Each line must point at
                      the record behind it (chapter paragraphs like "turns.3", "work:<id>", "conn:<id>", "myth:<id>").
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
        if g.get("tour"):
            # longer routes: every stop in walking order, each with the shortest route (minutes) it belongs to
            tour = g["tour"]
            assert 5 <= len(tour) <= 70, f"{where}: a tour needs 5 to 70 stops"
            assert all(s.get("tier", 60) in (60, 120, 180, 270) for s in tour), f"{where}: tour tiers are 60, 120, 180 or 270 minutes"
            tf = [s["floor"] for i, s in enumerate(tour) if i == 0 or s["floor"] != tour[i - 1]["floor"]]
            assert len(tf) == len(set(tf)), f"{where}: tour stops must be in walking order, one floor at a time (each floor once)"
            assert [s["t"] for s in tour if s.get("tier", 60) == 60] == [s["t"] for s in g["stops"]], f"{where}: the tour's one-hour stops must be the guide's stops, in the same order"
            for r in g.get("routes", []):
                assert r.get("mins") in (60, 120, 180, 270) and r.get("n") and r.get("intro"), f"{where}: a route needs mins, n and intro"
            assert len({s["t"] for s in tour}) == len(tour), f"{where}: a stop appears twice in the tour"
        gstops = g["stops"] + [s for s in g.get("tour", []) if s.get("tier", 60) != 60]
        cards += gstops
        for s in gstops:
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


def walks():
    """online/walks/<id>.json: a walk through real pictures (same shape as app/walks.js), with its pictures in
    online/walks/img/<pic>.jpg (and <pic>_d.jpg, a depth estimate for the 3D tilt), credits in img/credits.json."""
    d = ON / "walks"
    if not d.exists(): return {}
    cred = json.loads((d / "img" / "credits.json").read_text()) if (d / "img" / "credits.json").exists() else {}
    bundled = set(re.findall(r'^"([a-z0-9-]+)":\s*\{', (ROOT / "app" / "walks.js").read_text(), re.M))
    out = {}
    for f in sorted(d.glob("*.json")):
        where = f"online/walks/{f.name}"
        w = json.loads(f.read_text())
        assert w.get("id") == f.stem and re.fullmatch(r"[a-z0-9-]+", f.stem), f"{where}: id must match the file name"
        assert f.stem not in bundled, f"{where}: this walk already ships inside the app"
        assert isinstance(w.get("y"), int) and w.get("c") and w.get("place") and 1 <= w.get("tol", 0) <= 60, f"{where}: needs y, tol, c, place"
        assert w.get("look") and all(len(x) == 2 for x in w["look"]), f"{where}: needs look [[heading, text], ...]"
        assert 1 <= len(w.get("stops", [])) <= 8, f"{where}: 1 to 8 stops"
        pics = {}
        for st in w["stops"]:
            pid = st.get("pic", "")
            m = cred.get(pid)
            assert m and (d / "img" / (pid + ".jpg")).exists(), f"{where}: picture {pid} is missing or has no credit"
            lic = (m.get("lic") or "").lower()
            assert lic.startswith("public domain") or lic.startswith("pd") or lic.startswith("cc0"), f"{where}: {pid} is not public domain ({m.get('lic')})"
            assert st.get("name") and st.get("made") and st.get("kind"), f"{where}: {pid} needs name, made and kind"
            for sp in st.get("spots", []):
                assert 0 <= sp["x"] <= 1 and 0 <= sp["y"] <= 1 and sp.get("t") and sp.get("d"), f"{where}: {pid} spot {sp.get('t')} is out of the picture or empty"
                assert not re.search(r"muhammad|prophet", (sp["t"] + sp["d"]).lower()), f"{where}: the Prophet Muhammad is never shown"
            pics[pid] = {k: m[k] for k in ("title", "by", "date", "lic", "page", "w", "h")}
            if (d / "img" / (pid + "_d.jpg")).exists(): pics[pid]["depth"] = 1
        w["pics"] = pics
        out[f.stem] = w
    return out


def inline_ok(r):
    try: x = json.loads(r)
    except ValueError: return False
    return isinstance(x, list) and len(x) == 2 and x[0] in ("verified", "likely", "disputed", "myth") and isinstance(x[1], str) and x[1]


VOICE_TOPICS = {"who", "early", "death", "family", "love", "work", "people", "myth", "world", "legacy", "like", "life"}


def voices(ppl):
    """Talk lines for people without lines in the app. Sacred people never get any: the museum does not speak for them."""
    d = ON / "voice"
    if not d.exists(): return {}
    bundled = set(re.findall(r'^"([a-z0-9-]+)":\s*\{', (ROOT / "app" / "voice.js").read_text(), re.M))
    out = {}
    for f in sorted(d.glob("*.json")):
        where, pid, v = f"online/voice/{f.name}", f.stem, json.loads(f.read_text())
        assert pid in ppl, f"{where}: no such person in app/data.js"
        assert not ppl[pid], f"{where}: sacred people are never given a voice"
        assert pid not in bundled, f"{where}: {pid} already has lines in app/voice.js; edit that instead"
        assert 3 <= len(v.get("lines", [])) <= 40, f"{where}: 3 to 40 lines"
        for k in ("hi", "how", "bye"): assert isinstance(v.get(k, ""), str) and "<" not in v.get(k, ""), f"{where}: {k} must be plain text"
        for ln in v["lines"]:
            assert isinstance(ln, list) and len(ln) == 4 and all(isinstance(x, str) and x for x in ln), f"{where}: each line is [topic, keywords, words, record]"
            assert ln[0] in VOICE_TOPICS, f"{where}: unknown topic {ln[0]}"
            assert len(ln[2]) <= 500 and "<" not in ln[2], f"{where}: words must be plain text, at most 500 characters"
            for r in re.split(r"\|(?=[a-z]+\.\d|work:|conn:|myth:|\[)", ln[3]):
                r = r.strip()
                assert re.fullmatch(r"[a-z]+\.\d+|(work|conn|myth):[a-z0-9-]+", r) or (r.startswith("[") and inline_ok(r)), f"{where}: bad record pointer {r}"
        out[pid] = {k: v[k] for k in ("hi", "how", "bye", "lines") if v.get(k)}
    return out


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
    body = {"art": art, "detail": detail, "chapters": chapters, "today": today, "places": places, "walks": walks()}
    voice = voices(ppl)
    if voice: body["voice"] = voice   # only when there are some, so the feed does not change until the first one lands
    rev = hashlib.sha1(json.dumps(body, sort_keys=True, ensure_ascii=False).encode()).hexdigest()[:12]
    out = json.dumps({"v": 1, "rev": rev, **body}, ensure_ascii=False, separators=(",", ":"))
    (ON / "feed.json").write_text(out + "\n")
    print(f"online/feed.json: {len(art)} works, {len(chapters)} stories, Today {len(today['days'])} people + {len(today['events'])} events, {len(places)} places, {len(body['walks'])} walks, {len(out) // 1024} KB, rev {rev}")


if __name__ == "__main__":
    main()
