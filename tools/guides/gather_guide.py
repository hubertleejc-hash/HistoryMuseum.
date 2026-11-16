"""Gathers the facts and pictures for a museum route from The Met's open-access API (CC0).

Reads tools/guides/request.json. For each work: the Met record (title, artist, date, gallery number,
public-domain flag, credit line, page) goes to tools/guides/out/met.json, and the picture, if the work
is public domain, to app/img/guide/met-<id>.jpg (at most 900 px). The route's stories are written by
hand in online/places/met.json from these records; nothing here writes text for the app.
Runs on GitHub Actions (workflow "Gather guide"), because the API is not reachable from the build machines.
"""
import io, json, sys, time, urllib.parse, urllib.request
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
API = "https://collectionapi.metmuseum.org/public/collection/v1/"
OUT = ROOT / "tools" / "guides" / "out"
IMG = ROOT / "app" / "img" / "guide"


def get(url, raw=False):
    for i in range(4):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "contemporaries-guide/1.0"})
            with urllib.request.urlopen(req, timeout=40) as r:
                b = r.read()
                return b if raw else json.loads(b)
        except Exception as e:  # noqa: BLE001
            print("  retry", i, url, e)
            time.sleep(2 + 3 * i)
    return None


def obj(i):
    return get(API + f"objects/{i}")


def ok(o, want):
    if not o or not o.get("objectID"):
        return False
    if want.get("artist") and want["artist"].lower() not in (o.get("artistDisplayName") or "").lower():
        return False
    return want.get("title", "").lower() in (o.get("title") or "").lower()


def find(want):
    if want.get("id"):
        o = obj(want["id"])
        if ok(o, want):
            return o, []
        if o is None:  # the API did not answer; searching would not either
            return None, []
        print("  id did not match, searching", want["key"], o and o.get("title"))
    q = want.get("q") or want.get("title")
    seen = []
    for extra in ("&isHighlight=true", "&hasImages=true", ""):
        # the Met API reads filters only before q
        res = get(API + "search?" + extra.lstrip("&") + ("&" if extra else "") + "q=" + urllib.parse.quote(q)) or {}
        for i in (res.get("objectIDs") or [])[:12]:
            o = obj(i)
            if o:
                seen.append([i, o.get("title"), o.get("artistDisplayName"), o.get("GalleryNumber"), o.get("isHighlight")])
            if ok(o, want):
                return o, seen
            time.sleep(.1)
    return None, seen


def main():
    req = json.loads((ROOT / "tools" / "guides" / "request.json").read_text())
    OUT.mkdir(parents=True, exist_ok=True)
    IMG.mkdir(parents=True, exist_ok=True)
    out, misses = {}, {}
    old = json.loads((OUT / "met.json").read_text())["works"] if (OUT / "met.json").exists() else {}
    for want in req["met"]:
        print("work", want["key"])
        if want["key"] in old:
            out[want["key"]] = old[want["key"]]
            continue
        o, seen = find(want)
        if not o:
            misses[want["key"]] = seen
            continue
        rec = {k: o.get(k) for k in ("objectID", "title", "artistDisplayName", "artistDisplayBio", "objectDate", "medium", "dimensions",
                                      "GalleryNumber", "department", "isHighlight", "isPublicDomain", "creditLine", "accessionNumber",
                                      "objectURL", "primaryImage", "primaryImageSmall", "culture", "period")}
        if want.get("size") and o.get("isPublicDomain") and o.get("primaryImageSmall"):
            # only the picture's size, so the app can keep its space while it loads from The Met; nothing is saved
            b = get(o["primaryImageSmall"], raw=True)
            if b:
                rec["w"], rec["h"] = Image.open(io.BytesIO(b)).size
        if want.get("download") and o.get("isPublicDomain") and (o.get("primaryImage") or o.get("primaryImageSmall")):
            b = get(o.get("primaryImage") or o["primaryImageSmall"], raw=True) or get(o.get("primaryImageSmall") or "", raw=True)
            if b:
                im = Image.open(io.BytesIO(b)).convert("RGB")
                im.thumbnail((900, 900), Image.LANCZOS)
                im.save(IMG / f"met-{o['objectID']}.jpg", quality=84, optimize=True, progressive=True)
                rec["w"], rec["h"] = im.size
        out[want["key"]] = rec
        print("  ->", rec["objectID"], rec["title"], "| gallery", rec["GalleryNumber"], "| PD", rec["isPublicDomain"])
    (OUT / "met.json").write_text(json.dumps({"works": out, "misses": misses}, ensure_ascii=False, indent=1) + "\n")
    print(len(out), "found,", len(misses), "missing:", list(misses))


if __name__ == "__main__" and "--extra" not in sys.argv:
    sys.exit(main())


# ---------- Louvre rooms and Wikimedia Commons pictures (for routes that load pictures online) ----------
import html as _html, re as _re

COMMONS = "https://commons.wikimedia.org/w/api.php?"
FREE = _re.compile(r"public domain|^pd|cc0|cc[- ]by(?!.*nc)(?!.*nd)", _re.I)


def commons(want):
    q = "filetype:bitmap " + want["q"]
    url = COMMONS + urllib.parse.urlencode({"action": "query", "generator": "search", "gsrsearch": q, "gsrnamespace": 6, "gsrlimit": 15,
                                            "prop": "imageinfo", "iiprop": "url|extmetadata|size", "iiurlwidth": 900, "format": "json"})
    pages = sorted(((get(url) or {}).get("query") or {}).get("pages", {}).values(), key=lambda p: p.get("index", 99))
    must = [m.lower() for m in want.get("must", [])]
    tried = []
    for p in pages:
        ii = (p.get("imageinfo") or [{}])[0]
        meta = ii.get("extmetadata") or {}
        lic = (meta.get("LicenseShortName") or {}).get("value", "")
        title = p.get("title", "")
        tried.append([title, lic, ii.get("width")])
        if must and not all(m in title.lower() for m in must):
            continue
        if not FREE.search(lic) or (ii.get("width") or 0) < 600:
            continue
        artist = _re.sub(r"<[^>]+>", "", _html.unescape((meta.get("Artist") or {}).get("value", ""))).strip()
        return {"u": ii.get("thumburl") or ii.get("url"), "w": ii.get("thumbwidth"), "h": ii.get("thumbheight"), "page": ii.get("descriptionurl"),
                "lic": lic, "cr": (artist[:120] or "Unknown") + ", via Wikimedia Commons", "file": title}, tried
    return None, tried


def louvre(want):
    page = get("https://collections.louvre.fr/en/recherche?q=" + urllib.parse.quote(want["q"]), raw=True) or b""
    arks = list(dict.fromkeys(_re.findall(r"/ark:/53355/(cl\d+)", page.decode("utf-8", "ignore"))))[:6]
    out = []
    for a in arks:
        rec = get(f"https://collections.louvre.fr/ark:/53355/{a}.json") or {}
        out.append({"ark": a, "url": f"https://collections.louvre.fr/en/ark:/53355/{a}", "title": rec.get("title"),
                    "date": (rec.get("dateCreated") or [{}])[0].get("text") if isinstance(rec.get("dateCreated"), list) else rec.get("displayDateCreated"),
                    "room": rec.get("room"), "loc": rec.get("currentLocation"), "by": [c.get("label") for c in rec.get("creator", []) if isinstance(c, dict)][:2]})
        time.sleep(.3)
    return out


def extra():
    req = json.loads((ROOT / "tools" / "guides" / "request.json").read_text())
    path = OUT / "extra.json"
    old = json.loads(path.read_text()) if path.exists() else {"commons": {}, "louvre": {}}
    for want in req.get("commons", []):
        if want["key"] in old["commons"] and (old["commons"][want["key"]].get("pic") or old["commons"][want["key"]].get("rejected")):
            continue
        print("commons", want["key"])
        pic, tried = commons(want)
        old["commons"][want["key"]] = {"pic": pic, "tried": tried[:8]}
        time.sleep(.5)
    for want in req.get("louvre", []):
        if old["louvre"].get(want["key"]):
            continue
        print("louvre", want["key"])
        old["louvre"][want["key"]] = louvre(want)
    path.write_text(json.dumps(old, ensure_ascii=False, indent=1) + "\n")
    print("commons:", sum(1 for v in old["commons"].values() if v.get("pic")), "of", len(old["commons"]))


if __name__ == "__main__" and "--extra" in sys.argv:
    extra()
