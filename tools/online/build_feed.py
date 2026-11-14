"""Builds online/feed.json: the extra stories and Gallery works the app fetches without a new install.

The museum works fully offline with what ships inside the app. When the phone is online, the app
fetches this one file from the repository's main branch (raw.githubusercontent.com, free, no setup),
keeps a copy for offline use and adds what is new. So: merge a content PR into main, and the next
time the app opens online, the new things are there.

Inputs (all in online/):
  art/catalog.json    works gathered by  tools/art/gather.py --feed  (same screens as the app's Gallery)
  art/m/<id>.jpg      their 160 px tiles; the big picture loads from the museum's own server
  stories/<id>.json   a chapter for a person in app/data.js, in the app/chapters.js format,
                      ending with a {"k": "sources", "src": [{"n": ..., "u": ...}]} section (required)

Rules checked here (the build fails rather than publish something wrong):
  * a person's bundled chapter always wins; an online story is only for someone without one
  * stories use only pictures that ship in the app (img/manifest.json slugs or pt-<id> portraits)
  * sacred people (Moses, Jesus, the Prophet Muhammad...) get no pictures at all in their story
  * every work passes the Gallery's screens again (deny list, the Prophet Muhammad is never shown)
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

    body = {"art": art, "detail": detail, "chapters": chapters}
    rev = hashlib.sha1(json.dumps(body, sort_keys=True, ensure_ascii=False).encode()).hexdigest()[:12]
    out = json.dumps({"v": 1, "rev": rev, **body}, ensure_ascii=False, separators=(",", ":"))
    (ON / "feed.json").write_text(out + "\n")
    print(f"online/feed.json: {len(art)} works, {len(chapters)} stories, {len(out) // 1024} KB, rev {rev}")


if __name__ == "__main__":
    main()
