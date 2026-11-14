#!/usr/bin/env python3
"""Gather real period pictures for the Walk-in street scenes (runs on GitHub Actions).

Reads tools/scenes/request.json:
  {"mode": "search", "groups": {"paris-1889": {"cats": ["Category name", ...], "search": ["words", ...]}}}
     -> tools/scenes/out/<group>-NN.jpg contact sheets (numbered thumbnails) and <group>.json candidates
  {"mode": "fetch", "picks": [{"id": "paris-1889-1", "file": "Commons file name", "depth": true}]}
     -> app/img/scenes/<id>.jpg (1600 px wide), <id>_d.jpg (software depth estimate, photos only)
        and app/img/scenes/credits.json (title, artist, date, licence, source page)
Only public-domain or CC0 files are kept. Pictures are never altered beyond resizing.
"""
import io, json, re, sys, time, urllib.parse
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "art"))
from portraits import get, plain  # Commons helpers with polite rate limiting

ROOT = Path(__file__).resolve().parents[2]
REQ = json.loads((Path(__file__).parent / "request.json").read_text())
OUT = Path(__file__).parent / "out"
IMG = ROOT / "app" / "img" / "scenes"
API = "https://commons.wikimedia.org/w/api.php?"

def is_free(md):
    lic = (md.get("License", {}).get("value") or "").lower()
    name = plain(md.get("LicenseShortName", {}).get("value")).lower()
    return lic.startswith("pd") or lic.startswith("cc0") or name.startswith("public domain") or name.startswith("pd")

def query(gen, width=320):
    p = {"action": "query", "format": "json", "prop": "imageinfo", "iiprop": "url|size|extmetadata|mime", "iiurlwidth": width, **gen}
    d = get(API + urllib.parse.urlencode(p)) or {}
    return list(d.get("query", {}).get("pages", {}).values())

def search(groups):
    from PIL import Image, ImageDraw
    OUT.mkdir(parents=True, exist_ok=True)
    for g, spec in groups.items():
        pages, seen = [], set()
        for c in spec.get("cats", []):
            pages += query({"generator": "categorymembers", "gcmtitle": "Category:" + c, "gcmtype": "file", "gcmlimit": spec.get("limit", 60)})
        for s in spec.get("search", []):
            pages += query({"generator": "search", "gsrnamespace": 6, "gsrsearch": s, "gsrlimit": spec.get("limit", 40)})
        cands = []
        for pg in pages:
            ii = (pg.get("imageinfo") or [None])[0]
            if not ii or pg["title"] in seen or "image/" not in ii.get("mime", "") or "svg" in ii.get("mime", ""): continue
            seen.add(pg["title"])
            md = ii.get("extmetadata", {})
            if not is_free(md) or ii["width"] < 1000: continue
            cands.append({"n": len(cands) + 1, "file": pg["title"][5:], "w": ii["width"], "h": ii["height"],
                          "date": plain(md.get("DateTimeOriginal", {}).get("value"), 60), "by": plain(md.get("Artist", {}).get("value"), 60),
                          "title": plain(md.get("ObjectName", {}).get("value"), 90), "thumb": ii.get("thumburl")})
        (OUT / (g + ".json")).write_text(json.dumps(cands, ensure_ascii=False, indent=1))
        print(g, len(cands), "candidates", flush=True)
        # contact sheets, 24 per sheet: 4 x 6 tiles of 300 x 230 with the number and date
        for s in range(0, len(cands), 24):
            sheet = Image.new("RGB", (4 * 300, 6 * 230), (20, 19, 18)); dr = ImageDraw.Draw(sheet)
            for k, c in enumerate(cands[s:s + 24]):
                b = get(c["thumb"], raw=True)
                if b:
                    try:
                        im = Image.open(io.BytesIO(b)).convert("RGB"); im.thumbnail((292, 196))
                        sheet.paste(im, ((k % 4) * 300 + 4, (k // 4) * 230 + 4))
                    except Exception: pass
                dr.text(((k % 4) * 300 + 6, (k // 4) * 230 + 204), f"#{c['n']}  {c['date'][:22]}  {c['w']}px", fill=(240, 200, 110))
            sheet.save(OUT / f"{g}-{s // 24 + 1:02d}.jpg", quality=80)

def trim(im):
    """Cut away a plain scanner border or mount (near-white or near-black rows and columns at the edges)."""
    from PIL import ImageStat
    g = im.convert("L"); w, h = g.size
    plain = lambda box: (lambda st: st.stddev[0] < 14 and (st.mean[0] > 200 or st.mean[0] < 40))(ImageStat.Stat(g.crop(box)))
    l, t, r, b = 0, 0, w, h
    while l < w * .2 and plain((l, 0, l + 4, h)): l += 4
    while r > w * .8 and plain((r - 4, 0, r, h)): r -= 4
    while t < h * .2 and plain((0, t, w, t + 4)): t += 4
    while b > h * .8 and plain((0, b - 4, w, b)): b -= 4
    pad = round(min(w, h) * .01)
    return im.crop((l + pad, t + pad, r - pad, b - pad)) if (l, t, r, b) != (0, 0, w, h) else im

def fetch(picks):
    from PIL import Image
    IMG.mkdir(parents=True, exist_ok=True)
    cred_f = IMG / "credits.json"
    cred = json.loads(cred_f.read_text()) if cred_f.exists() else {}
    depth = None
    for pk in picks:
        pg = query({"titles": "File:" + pk["file"]}, width=1800)
        ii = (pg[0].get("imageinfo") or [None])[0] if pg else None
        if not ii: print("not found:", pk["file"]); continue
        md = ii.get("extmetadata", {})
        if not is_free(md): print("not public domain:", pk["file"]); continue
        b = get(ii.get("thumburl") or ii["url"], raw=True)
        im = Image.open(io.BytesIO(b)).convert("RGB")
        if pk.get("trim"): im = trim(im)
        if pk.get("crop"): l, t, r, b = pk["crop"]; im = im.crop((round(l * im.width), round(t * im.height), round(r * im.width), round(b * im.height)))
        if im.width > 1600: im = im.resize((1600, round(im.height * 1600 / im.width)), Image.LANCZOS)
        im.save(IMG / (pk["id"] + ".jpg"), "JPEG", quality=80, optimize=True, progressive=True)
        if pk.get("depth"):
            if depth is None:
                from transformers import pipeline  # Depth Anything V2 Small, Apache-2.0
                depth = pipeline("depth-estimation", model="depth-anything/Depth-Anything-V2-Small-hf")
            d = depth(im)["depth"].convert("L")
            d = d.resize((512, round(512 * im.height / im.width)), Image.LANCZOS)
            d.save(IMG / (pk["id"] + "_d.jpg"), "JPEG", quality=85)
        cred[pk["id"]] = {"file": pk["file"], "title": plain(md.get("ObjectName", {}).get("value"), 160) or re.sub(r"\.\w+$", "", pk["file"]),
                          "by": plain(md.get("Artist", {}).get("value"), 120) or "Unknown", "date": plain(md.get("DateTimeOriginal", {}).get("value"), 80),
                          "credit": plain(md.get("Credit", {}).get("value"), 160), "lic": plain(md.get("LicenseShortName", {}).get("value")) or "Public domain",
                          "page": ii.get("descriptionurl", ""), "w": im.width, "h": im.height, "depth": bool(pk.get("depth"))}
        print("fetched", pk["id"], im.size, cred[pk["id"]]["lic"], flush=True)
    cred_f.write_text(json.dumps(cred, ensure_ascii=False, indent=1))

if __name__ == "__main__":
    if REQ.get("picks"): fetch(REQ["picks"])
    if REQ.get("groups"): search(REQ["groups"])
