#!/usr/bin/env python3
"""Find a public-domain portrait for every person in the museum (app/data.js).

Runs on GitHub Actions. For each person: Wikidata finds the person (a human whose birth year matches),
its "image" (P18) names a Wikimedia Commons file, and Commons says the file's licence.
Only public-domain or CC0 files are used. People marked noimg:1 (the Prophet Muhammad) never get a picture.

Writes app/art/p/<person id>.jpg (800 px long side) and app/art/portraits.json with the title, artist,
date, licence, source page and an honesty note when the picture was made long after the person died.
Incremental: people who already have a portrait are skipped. tools/art/overrides.json "portrait_deny"
lists person ids whose found picture is wrong; "portrait_file" maps a person id to a Commons file name,
or to {"file", "note": [label, text], "title"} for a hand-checked pick (these replace earlier finds).
"""
import html, io, json, re, sys, time, urllib.parse, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "app" / "art" / "p"
MAN = ROOT / "app" / "art" / "portraits.json"
UA = "ContemporariesMuseumApp/1.0 (educational open-source app; portrait gatherer)"
OV = json.loads((Path(__file__).parent / "overrides.json").read_text())

def get(url, raw=False, tries=4):
    for i in range(tries):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=60) as r:
                b = r.read()
                return b if raw else json.loads(b)
        except Exception as e:
            if i == tries - 1:
                print("  give up:", url[:140], e, file=sys.stderr); return None
            time.sleep(2 * (i + 1))

def people():
    src = (ROOT / "app" / "data.js").read_text()
    out = []
    for m in re.finditer(r'\{id:"([^"]+)", n:"([^"]+)", b:(-?\d+), d:(-?\d+|null)([^\n]*)', src):
        rest = m.group(5)
        out.append({"id": m.group(1), "n": m.group(2), "b": int(m.group(3)), "d": int(m.group(4)) if m.group(4) != "null" else None,
                    "sacred": "noimg:1" in rest, "alive": "alive:true" in rest})
    return out

def wd(params):
    return get("https://www.wikidata.org/w/api.php?" + urllib.parse.urlencode({**params, "format": "json"}))

def year_of_claim(ent, prop):
    for c in ent.get("claims", {}).get(prop, []):
        try:
            t = c["mainsnak"]["datavalue"]["value"]["time"]
            return int(re.match(r"([+-]\d+)", t).group(1))
        except Exception:
            pass
    return None

def find_entity(p):
    """Search Wikidata for the name and keep the human whose birth year matches."""
    name = re.sub(r"\s*\(.*\)", "", p["n"])
    s = wd({"action": "wbsearchentities", "search": name, "language": "en", "type": "item", "limit": 7})
    ids = [x["id"] for x in (s or {}).get("search", [])]
    if not ids: return None
    e = wd({"action": "wbgetentities", "ids": "|".join(ids), "props": "claims|sitelinks"})
    best = None
    for qid in ids:
        ent = (e or {}).get("entities", {}).get(qid, {})
        human = any(c["mainsnak"].get("datavalue", {}).get("value", {}).get("id") == "Q5" for c in ent.get("claims", {}).get("P31", []))
        if not human: continue
        by = year_of_claim(ent, "P569")
        if by is None: continue
        # Wikidata uses astronomical-ish years for BC (-0043 = 44 BC); allow a little slack for "c." dates.
        if abs(by - p["b"]) <= (6 if p["b"] < 1000 else 2) or abs(by - (p["b"] + 1)) <= 2:
            score = len(ent.get("sitelinks", {}))
            if not best or score > best[0]: best = (score, ent)
    return best[1] if best else None

def commons_info(fname):
    d = get("https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode({
        "action": "query", "titles": "File:" + fname, "prop": "imageinfo", "iiprop": "url|extmetadata|size",
        "iiurlwidth": 800, "format": "json"}))
    pages = (d or {}).get("query", {}).get("pages", {})
    for pg in pages.values():
        ii = (pg.get("imageinfo") or [None])[0]
        if ii: return ii
    return None

TAG = re.compile(r"<[^>]+>")
def plain(s, cap=200):
    s = re.sub(r"\s+", " ", html.unescape(TAG.sub(" ", s or ""))).strip()
    return s[:cap]

def main():
    OUT.mkdir(parents=True, exist_ok=True)
    man = json.loads(MAN.read_text()) if MAN.exists() else {}
    deny, force = set(OV.get("portrait_deny", [])), OV.get("portrait_file", {})
    for pid in list(man):
        if pid in deny: man.pop(pid); (OUT / (pid + ".jpg")).unlink(missing_ok=True)
    from PIL import Image
    found = missed = 0
    for p in people():
        pick = force.get(p["id"])
        if isinstance(pick, str): pick = {"file": pick}
        if p["sacred"] or p["id"] in deny: continue
        if p["id"] in man and not (pick and man[p["id"]].get("file") != pick["file"]): continue
        fname = pick and pick["file"]
        if not fname:
            ent = find_entity(p)
            if ent:
                for c in ent.get("claims", {}).get("P18", []):
                    fname = c["mainsnak"].get("datavalue", {}).get("value"); break
        if not fname:
            print("  no picture:", p["n"]); missed += 1; continue
        ii = commons_info(fname)
        if not ii: missed += 1; continue
        md = ii.get("extmetadata", {})
        lic = (md.get("License", {}).get("value") or "").lower()
        lic_name = plain(md.get("LicenseShortName", {}).get("value"))
        if not (lic.startswith("pd") or lic.startswith("cc0") or lic_name.lower().startswith("public domain")):
            print(f"  not public domain ({lic_name}):", p["n"]); missed += 1; continue
        b = get(ii.get("thumburl") or ii["url"], raw=True)
        if not b: missed += 1; continue
        try:
            im = Image.open(io.BytesIO(b)); im.load(); im = im.convert("RGB")
        except Exception:
            missed += 1; continue
        im.thumbnail((800, 800), Image.LANCZOS)
        im.save(OUT / (p["id"] + ".jpg"), "JPEG", quality=82, optimize=True)
        date = plain(md.get("DateTimeOriginal", {}).get("value"), 80)
        yrs = [int(y) for y in re.findall(r"\b(1[0-9]{3}|20[0-2][0-9])\b", date)]
        made = min(yrs) if yrs else None
        note = None
        if p["d"] is not None and made and made > p["d"] + 40:
            note = ["likely", f"Made about {made - p['d']} years after {p['n'].split(' (')[0]} died, so it shows how later artists imagined them."]
        elif p["d"] is None and made and made < p["b"]:
            note = None
        elif not made and p["b"] < 1500:
            note = ["likely", "Probably made long after their lifetime. Nobody knows how close it is to their real face."]
        if pick and pick.get("note"): note = pick["note"]
        title = (pick or {}).get("title") or plain(md.get("ObjectName", {}).get("value")) or re.sub(r"\.\w+$", "", fname).replace("_", " ")
        man[p["id"]] = {"title": title, "artist": plain(md.get("Artist", {}).get("value"), 120) or "Unknown",
                        "date": date or "Date unknown", "licence": lic_name or "Public domain", "page": ii.get("descriptionurl", ""),
                        "file": fname, "w": im.size[0], "h": im.size[1], **({"note": note} if note else {})}
        found += 1
        print("  portrait:", p["n"], "|", title[:60], "|", lic_name, flush=True)
        time.sleep(0.3)
    MAN.write_text(json.dumps(dict(sorted(man.items())), ensure_ascii=False, indent=1) + "\n")
    print(f"Portraits: {len(man)} in all, {found} new, {missed} people without a public-domain portrait")

if __name__ == "__main__":
    main()
