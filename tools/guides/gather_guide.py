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
        if want["key"] in old and (IMG / f"met-{old[want['key']]['objectID']}.jpg").exists():
            out[want["key"]] = old[want["key"]]
            continue
        o, seen = find(want)
        if not o:
            misses[want["key"]] = seen
            continue
        rec = {k: o.get(k) for k in ("objectID", "title", "artistDisplayName", "artistDisplayBio", "objectDate", "medium", "dimensions",
                                      "GalleryNumber", "department", "isHighlight", "isPublicDomain", "creditLine", "accessionNumber",
                                      "objectURL", "primaryImage", "primaryImageSmall", "culture", "period")}
        if o.get("isPublicDomain") and (o.get("primaryImage") or o.get("primaryImageSmall")):
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


if __name__ == "__main__":
    sys.exit(main())
