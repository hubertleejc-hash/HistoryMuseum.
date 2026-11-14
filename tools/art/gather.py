#!/usr/bin/env python3
"""Gather public-domain (CC0) art for the museum's Gallery.

Runs on GitHub Actions (the museums can't be reached from the cloud dev machine).
Incremental: it reads what is already gathered, adds new works, never removes any
(except ids put on the deny list in tools/art/overrides.json).

Two wings:
  * "In the app": works shipped inside the app (thumbnail + full picture), so they work offline.
    Mostly Cleveland Museum of Art works that come with the museum's own written explanation.
  * "Online wing": many more works whose records ship in the app but whose pictures load
    from the museum's own image server when the phone is online.

Outputs (all under app/art/):
  catalog.json   every record, one per line in a JSON list (source of truth)
  m/<id>.jpg     160 px tiles for the Online wing
  t/<id>.jpg     thumbnails for the In-the-app wing (320 px long side)
  f/<id>.jpg     full pictures for the In-the-app wing (1024 px long side)
  rejected.log   why works were skipped (only the sensitive-content rejections are kept)

Usage: python3 tools/art/gather.py [--offline N] [--online N]
  --offline N  add up to N new works to the In-the-app wing (default 300)
  --online N   add up to N new Cleveland works to the Online wing (default 6000)
  --met N      add up to N new Met works to the Online wing (default 2000)
"""
import argparse, concurrent.futures as cf, hashlib, html, io, json, os, random, re, sys, time, urllib.parse, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
ART = ROOT / "app" / "art"
UA = "Contemporaries-museum-app/1.0 (open-access art gatherer; GitHub Actions)"
OVERRIDES = json.loads((Path(__file__).parent / "overrides.json").read_text())
DENY = set(OVERRIDES.get("deny", []))
ALLOW = set(OVERRIDES.get("allow", []))

# ---------- sensitive content ----------
# The Prophet Muhammad must never be shown. Text-based screen over every text field.
NEVER = re.compile(r"mu[hḥ]amm[ae]d|moh?amm[ae]d|mahomet|\bmi['`ʿ’]?r[aā]j\b|\bburaq\b|ascension of the prophet|night journey|siyer|qisas|anbiya|"
                   r"dante|inferno|divine comedy|divina commedia", re.I)
# Not for a classy all-ages museum: erotica and racist caricature.
UNFIT = re.compile(r"shunga(?!\s*(?:period|dynasty|empire|p\b))|erotic|pillow (book|picture)|makura-?e|spring pictures|caricature|minstrel|blackface|pickaninny|sambo|\bcoons?\b|darkie|golliwog|mammy|lynch", re.I)
# In Islamic-world works, a bare "the Prophet" also means him.
ISLAMIC_HINT = re.compile(r"islam|persia|iran|ottoman|turk|arab|mughal|safavid|timurid|ilkhanid|mamluk|qur|koran|deccan|afghan|uzbek|central asia", re.I)
PROPHET = re.compile(r"\bprophet\b|\bpbuh\b|rasul|nabi\b", re.I)

def sensitive(texts, islamic):
    t = " \n ".join(x for x in texts if x)
    if NEVER.search(t): return "prophet rule (may show the Prophet Muhammad)"
    if islamic and PROPHET.search(t): return "Islamic-world work mentioning a prophet"
    if UNFIT.search(t): return "unfit"
    return None

# Islamic-culture pictures made outside the "Islamic world" region (Mughal India, Deccan...): court portraits,
# hunts and epics are fine, but illustrated histories and stories of prophets, angels and miracles are held back.
RISKY_SUBJECT = re.compile(r"tarikh|tawarikh|history of the|qisas|anbiya|siyar|siyer|rauzat|habib al-siyar|majalis|prophet|angel|gabriel|jibra|miracle|veiled|ascension|paradise|heaven", re.I)
def islamic_risky(rec):
    if rec["id"] in ALLOW or rec["r"] == "islamic" or rec["k"] not in ("painting", "drawing", "print", "book"): return False
    return bool(ISLAMIC_HINT.search(rec.get("c", "") + " " + rec.get("dept", ""))) and bool(RISKY_SUBJECT.search(rec["t"] + " " + rec.get("x", "") + " " + rec.get("fy", "")))

def still_ok(rec):
    """Re-screen a stored record with today's rules (rules get stricter over time)."""
    isl = bool(ISLAMIC_HINT.search(rec.get("c", "") + " " + rec.get("dept", "")))
    return not (sensitive([rec["t"], rec.get("x"), rec.get("fy"), rec.get("c")], isl) or figural_islamic(rec) or islamic_risky(rec))

def figural_islamic(rec):
    """Figural paintings, drawings and book pages from the Islamic world are only shown when hand-approved."""
    if rec["r"] != "islamic" or rec["id"] in ALLOW: return False
    if rec["k"] in ("painting", "drawing", "print"): return True
    # book pages: Qur'an folios and calligraphy are writing, not pictures; other pages may be illustrated
    return rec["k"] == "book" and not re.search(r"qur'?an|koran|calligraph|text page|folio from a qur", rec["t"], re.I)

# ---------- helpers ----------
def get(url, tries=4, raw=False):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
            with urllib.request.urlopen(req, timeout=60) as r:
                b = r.read()
                return b if raw else json.loads(b)
        except Exception as e:
            if i == tries - 1:
                print("  give up:", url[:120], e, file=sys.stderr)
                return None
            time.sleep(1.5 * (i + 1) + random.random())

TAG = re.compile(r"<[^>]+>")
def clean(s, cap=1400):
    if not s: return ""
    s = html.unescape(TAG.sub(" ", str(s)))
    s = re.sub(r"\s+", " ", s).strip()
    if len(s) > cap:
        cut = s[:cap].rsplit(". ", 1)[0]
        s = cut + "." if len(cut) > cap * 0.5 else s[:cap].rsplit(" ", 1)[0] + "…"
    return s

def year_of(a, b):
    """One year to place a work in time: the middle of a short range, else its start."""
    if a is None and b is None: return None
    if a is None: return int(b)
    if b is None or abs(int(b) - int(a)) > 120: return int(a)
    return int(round((int(a) + int(b)) / 2))

REGIONS = ["east-asia", "south-asia", "islamic", "africa", "ancient", "europe", "americas", "oceania"]
def region_from(dept, culture):
    d, c = (dept or "").lower(), (culture or "").lower()
    if re.search(r"chin|japan|korea|tibet|mongol", d + " " + c): return "east-asia"
    if re.search(r"india|southeast|nepal|thai|cambod|indones|burm|myanmar|sri lanka|vietnam|pakistan|bangla|khmer|java|himalay", d + " " + c): return "south-asia"
    if re.search(r"islam|persia|iran|ottoman|turk|arab|mughal|safavid|syria|egypt.*(mamluk|fatimid)|mamluk|fatimid", d + " " + c): return "islamic"
    if re.search(r"egypt|greek|roman|near east|etrus|cypr|mesopotam|assyr|ancient|byzantine", d + " " + c): return "ancient"
    if re.search(r"africa|nigeria|congo|ghana|mali|benin|yoruba|kongo|cameroon|ethiopi|kenya|ivory coast|côte", d + " " + c): return "africa"
    if re.search(r"oceania|pacific|polynes|melanes|maori|papua|hawai|australia", d + " " + c): return "oceania"
    if re.search(r"americ|united states|mexic|peru|maya|aztec|inca|andes|canad|brazil|colomb|guatemal|costa rica|panama|ecuador|native|navajo|haiti|cuba|argentin|chile|moche|olmec", d + " " + c): return "americas"
    return "europe"

def kind_from(t):
    t = (t or "").lower()
    if "photo" in t: return "photo"
    if "painting" in t or "miniature" in t or t in ("scroll",): return "painting"
    if "print" in t or "woodcut" in t or "etching" in t or "engraving" in t or "lithograph" in t: return "print"
    if "drawing" in t or "watercolor" in t: return "drawing"
    if "sculpture" in t or "jade" in t or "relief" in t or "statue" in t or "figure" in t: return "sculpture"
    if "textile" in t or "costume" in t or "carpet" in t or "rug" in t or "tapestry" in t or "embroider" in t: return "textile"
    if "manuscript" in t or "book" in t or "calligraph" in t or "illumin" in t: return "book"
    return "object"

def strip_life(s):
    """'Vincent van Gogh (Dutch, 1853–1890)' -> 'Vincent van Gogh'"""
    return re.sub(r"\s*\(.*$", "", s or "").strip()

# ---------- Cleveland Museum of Art ----------
CMA_FIELDS = ",".join(["id", "accession_number", "share_license_status", "title", "creation_date", "creation_date_earliest",
    "creation_date_latest", "creators", "culture", "technique", "department", "collection", "type", "measurements",
    "description", "did_you_know", "wall_description", "images", "url", "creditline", "is_highlight", "copyright", "alternate_titles"])

def cma_records():
    out, skip, total = [], 0, None
    while True:
        u = f"https://openaccess-api.clevelandart.org/api/artworks/?cc0=1&has_image=1&limit=1000&skip={skip}&fields={CMA_FIELDS}"
        d = get(u)
        if not d: break
        total = d["info"]["total"]
        out += d["data"]
        skip += 1000
        print(f"  Cleveland {len(out)}/{total}", flush=True)
        if skip >= total or not d["data"]: break
    return out

def from_cma(r):
    if r.get("share_license_status") != "CC0" or r.get("copyright"): return None, "not CC0"
    im = (r.get("images") or {}).get("web") or {}
    if not im.get("url"): return None, "no image"
    w, h = int(im.get("width") or 0), int(im.get("height") or 0)
    if not w or not h or max(w, h) / min(w, h) > 4: return None, "odd image size"
    culture = "; ".join(r.get("culture") or [])
    creators = r.get("creators") or []
    artist = strip_life(creators[0].get("description")) if creators else ""
    y = year_of(r.get("creation_date_earliest"), r.get("creation_date_latest"))
    if y is None or not r.get("title"): return None, "no date or title"
    desc = clean(r.get("wall_description") or r.get("description"))
    fact = clean(r.get("did_you_know"), 400)
    rec = {
        "id": "cma-" + str(r["id"]), "src": "cma", "t": clean(r["title"], 200), "a": artist, "d": r.get("creation_date") or "",
        "y": y, "r": region_from(r.get("department"), culture), "k": kind_from(r.get("type")), "c": clean(culture, 160),
        "m": clean(r.get("technique"), 200), "x": desc, "fy": fact,
        "cr": "The Cleveland Museum of Art, " + (r.get("creditline") or "") + (", " + r["accession_number"] if r.get("accession_number") else ""),
        "u": r.get("url") or "", "w": w, "h": h, "img": im["url"], "hi": 1 if r.get("is_highlight") else 0,
        "dept": r.get("department") or "",
    }
    why = sensitive([r.get("title"), " ".join(r.get("alternate_titles") or []), r.get("description"), r.get("wall_description"),
                     r.get("did_you_know"), r.get("collection")], bool(ISLAMIC_HINT.search(culture + " " + (r.get("department") or ""))))
    if why: return None, why
    if figural_islamic(rec) or islamic_risky(rec): return None, "Islamic-world figural work, needs hand approval"
    return rec, None

# ---------- The Met ----------
MET_DEPTS = {1: "The American Wing", 3: "Ancient Near Eastern Art", 4: "Arms and Armor", 5: "Arts of Africa, Oceania, and the Americas",
    6: "Asian Art", 7: "The Cloisters", 9: "Drawings and Prints", 10: "Egyptian Art", 11: "European Paintings",
    12: "European Sculpture and Decorative Arts", 13: "Greek and Roman Art", 14: "Islamic Art", 15: "The Robert Lehman Collection",
    17: "Medieval Art", 19: "Photographs", 21: "Modern Art"}

def met_ids(per_dept):
    ids = []
    for dep in MET_DEPTS:
        got, off = [], 0
        while len(got) < per_dept:
            d = get(f"https://collectionapi.metmuseum.org/public/collection/v1.1/search?q=*&hasImages=true&isPublicDomain=true&departmentId={dep}&offset={off}&limit=100")
            if not d or not d.get("objectIDs"): break
            got += d["objectIDs"]; off += 100
            if off >= (d.get("total") or 0): break
        print(f"  Met department {dep}: {len(got)} ids", flush=True)
        ids += got[:per_dept]
    return ids

def met_obj(i):
    return get(f"https://collectionapi.metmuseum.org/public/collection/v1/objects/{i}")

def from_met(r):
    if not r or not r.get("isPublicDomain") or not r.get("primaryImageSmall"): return None, "not public domain or no image"
    y = year_of(r.get("objectBeginDate"), r.get("objectEndDate"))
    if not r.get("title") or y is None: return None, "no date or title"
    if r["objectBeginDate"] == 0 and r["objectEndDate"] == 0 and not r.get("objectDate"): return None, "no date"
    culture = r.get("culture") or r.get("country") or r.get("period") or ""
    dept = r.get("department") or ""
    why = sensitive([r.get("title"), r.get("objectName"), " ".join(t.get("term", "") for t in (r.get("tags") or []))],
                    bool(ISLAMIC_HINT.search(culture + " " + dept)))
    if why: return None, why
    big = r["primaryImageSmall"]
    reg = region_from(dept if dept not in ("Asian Art",) else "", culture + " " + (r.get("country") or "") + " " + (r.get("artistNationality") or ""))
    if dept == "The American Wing": reg = "americas"
    if dept in ("Egyptian Art", "Greek and Roman Art", "Ancient Near Eastern Art"): reg = "ancient"
    if dept == "Islamic Art": reg = "islamic"
    if dept == "Asian Art" and reg == "europe": reg = "east-asia"
    rec = {
        "id": "met-" + str(r["objectID"]), "src": "met", "t": clean(r["title"], 200), "a": r.get("artistDisplayName") or "",
        "d": r.get("objectDate") or "", "y": y, "r": reg, "k": kind_from((r.get("classification") or "") + " " + (r.get("objectName") or "")),
        "c": clean(", ".join(x for x in [r.get("culture"), r.get("period"), r.get("dynasty")] if x), 160), "m": clean(r.get("medium"), 200),
        "x": "", "fy": "", "cr": "The Metropolitan Museum of Art, " + (r.get("creditLine") or "") + (", " + r["accessionNumber"] if r.get("accessionNumber") else ""),
        "u": r.get("objectURL") or "", "w": 0, "h": 0, "img": big, "th": big.replace("/web-large/", "/mobile-large/"),
        "hi": 1 if r.get("isHighlight") else 0, "on": r.get("objectName") or "", "dept": dept,
    }
    if figural_islamic(rec) or islamic_risky(rec): return None, "Islamic-world figural work, needs hand approval"
    return rec, None

# ---------- the Louvre and the British Museum, through Wikimedia Commons ----------
# Their own sites do not license images for reuse in an app, but Wikimedia Commons holds photographs of
# their public-domain works. Only files Commons marks public domain or CC0 are kept, with a credit line.
COMMONS_ROOTS = {
    "louvre": ("The Louvre", ["Paintings in the Louvre Museum", "Drawings in the Louvre Museum", "Sculptures in the Louvre Museum",
                              "Egyptian antiquities in the Louvre", "Greek antiquities in the Louvre"]),
    "bm": ("The British Museum", ["Prints in the British Museum", "Drawings in the British Museum", "Paintings in the British Museum",
                                  "Egyptian antiquities in the British Museum", "Asian art in the British Museum"]),
}
CAPI = "https://commons.wikimedia.org/w/api.php?"

def capi(params):
    time.sleep(0.4)  # Wikimedia asks bots to go slowly
    for i in range(6):
        d = get(CAPI + urllib.parse.urlencode({**params, "format": "json"}), tries=1)
        if d is not None: return d
        time.sleep(15 * (i + 1))
    return None

def commons_files(root, want, max_cats=300):
    """Walk a Commons category tree breadth first and yield (page, categories text) for each image file."""
    seen, queue, n = {root}, [root], 0
    while queue and n < want and len(seen) <= max_cats:
        cat = queue.pop(0)
        cont = {}
        while n < want:
            d = capi({"action": "query", "generator": "categorymembers", "gcmtitle": "Category:" + cat, "gcmtype": "file|subcat",
                      "gcmlimit": 50, "prop": "imageinfo", "iiprop": "url|size|extmetadata", "iiurlwidth": 1024,
                      "iiextmetadatalanguage": "en", **cont})
            if not d: break
            for pg in (d.get("query", {}).get("pages") or {}).values():
                if pg.get("ns") == 14:
                    sub = pg["title"].split(":", 1)[1]
                    if sub not in seen: seen.add(sub); queue.append(sub)
                elif pg.get("imageinfo"):
                    n += 1; yield pg, cat
            if "continue" not in d: break
            cont = {k: v for k, v in d["continue"].items() if k != "continue"}

def commons_year(s):
    m = re.search(r"\b(1[0-9]{3}|[1-9][0-9]{2})\b", s or "")
    if m: return int(m.group(1))
    m = re.search(r"\b(\d{1,2})(?:st|nd|rd|th)[ -]century( BC| BCE)?", s or "", re.I)
    if m:
        y = int(m.group(1)) * 100 - 50
        return -y if m.group(2) else y
    return None

def from_commons(arg):
    (pg, cat), src = arg
    museum = COMMONS_ROOTS[src][0]
    ii = pg["imageinfo"][0]; md = ii.get("extmetadata", {})
    v = lambda k, cap=400: clean((md.get(k) or {}).get("value"), cap)
    lic = (md.get("License", {}).get("value") or "").lower(); lic_name = v("LicenseShortName", 80)
    if not (lic.startswith("pd") or lic.startswith("cc0") or lic_name.lower().startswith("public domain")): return None, "not public domain"
    if not ii.get("thumburl") or min(ii.get("width", 0), ii.get("height", 0)) < 500: return None, "small"
    if not re.search(r"\.(jpe?g|png|tiff?)$", pg["title"], re.I): return None, "not a picture"
    cats, title = v("Categories", 3000), v("ObjectName", 200) or re.sub(r"^File:|\.\w+$", "", pg["title"]).replace("_", " ")
    date = v("DateTimeOriginal", 120); y = commons_year(date)
    if y is None: return None, "no date or title"
    artist = re.sub(r"^(unknown|anonymous)\b.*", "", v("Artist", 120), flags=re.I)
    desc = v("ImageDescription", 1400)
    blob = " ".join([title, cat, cats])
    why = sensitive([title, desc, cats, cat], bool(ISLAMIC_HINT.search(blob)))
    if why: return None, why
    rec = {"id": f"{src}-{pg['pageid']}", "src": src, "t": title, "a": artist, "d": date, "y": y,
           "r": region_from("", blob), "k": kind_from(cat + " " + title), "c": clean(cat, 160), "m": "",
           "x": desc if len(desc) > 60 and desc.lower() != title.lower() else "", "fy": "",
           "cr": f"{museum}. Photograph via Wikimedia Commons ({lic_name or 'public domain'}).",
           "u": ii.get("descriptionurl", ""), "w": ii.get("width", 0), "h": ii.get("height", 0),
           "img": ii["thumburl"], "th": ii["thumburl"].replace("/1024px-", "/320px-"), "hi": 0, "on": "", "dept": museum}
    if re.search(r"egypt|greek|roman|etrus|assyr|mesopotam", cat, re.I): rec["r"] = "ancient"
    if figural_islamic(rec) or islamic_risky(rec): return None, "Islamic-world figural work, needs hand approval"
    return rec, None

# ---------- pictures ----------
def save_pictures(rec):
    """Download the web image once; write a 1024 px full picture and a 320 px thumbnail."""
    from PIL import Image
    b = get(rec["img"], raw=True)
    if not b: return False
    try:
        im = Image.open(io.BytesIO(b)); im.load()
        if im.mode not in ("RGB",): im = im.convert("RGB")
    except Exception:
        return False
    w, h = im.size
    if min(w, h) < 300: return False
    full = im.copy(); full.thumbnail((1024, 1024), Image.LANCZOS)
    thumb = im.copy(); thumb.thumbnail((320, 320), Image.LANCZOS)
    (ART / "f").mkdir(parents=True, exist_ok=True); (ART / "t").mkdir(parents=True, exist_ok=True)
    full.save(ART / "f" / (rec["id"] + ".jpg"), "JPEG", quality=80, optimize=True)
    thumb.save(ART / "t" / (rec["id"] + ".jpg"), "JPEG", quality=72, optimize=True)
    rec["w"], rec["h"] = full.size
    return True

def save_micro(rec):
    """Online wing: a small 160 px tile ships in the app; the big picture loads from the museum."""
    from PIL import Image
    b = get(rec.get("th") or rec["img"], raw=True)
    if not b: return False
    try:
        im = Image.open(io.BytesIO(b)); im.load()
        if im.mode != "RGB": im = im.convert("RGB")
    except Exception:
        return False
    if min(im.size) < 120: return False
    w, h = im.size
    if max(w, h) / min(w, h) > 4: return False
    rec["w"], rec["h"] = (rec["w"], rec["h"]) if rec.get("w") else (w, h)
    im.thumbnail((160, 160), Image.LANCZOS)
    (ART / "m").mkdir(parents=True, exist_ok=True)
    im.save(ART / "m" / (rec["id"] + ".jpg"), "JPEG", quality=68, optimize=True)
    return True

# ---------- choosing a balanced set ----------
def score(rec):
    s = 0
    if rec["x"]: s += 4
    if rec["fy"]: s += 1
    if rec["hi"]: s += 3
    if rec["k"] in ("painting", "sculpture", "photo"): s += 1
    return s + random.random()

def balanced(cands, n, per_artist=4):
    """Pick n works, spread over regions and kinds so no single department dominates."""
    buckets = {}
    for r in sorted(cands, key=score, reverse=True):
        buckets.setdefault((r["r"], r["k"]), []).append(r)
    keys = list(buckets)
    random.shuffle(keys)
    keys.sort(key=lambda k: REGIONS.index(k[0]))
    picked, artists = [], {}
    while len(picked) < n and any(buckets.values()):
        for k in keys:
            if len(picked) >= n: break
            b = buckets[k]
            while b:
                r = b.pop(0)
                a = r["a"] or ""
                if a and artists.get(a, 0) >= per_artist: continue
                artists[a] = artists.get(a, 0) + 1
                picked.append(r); break
    return picked

def norm_key(r):
    return re.sub(r"\W+", "", (r["t"] + "|" + (r["a"] or "") + "|" + str(r["y"])).lower())

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--offline", type=int, default=300)
    ap.add_argument("--online", type=int, default=6000)
    ap.add_argument("--met", type=int, default=2000)
    ap.add_argument("--met-per-dept", type=int, default=400)
    ap.add_argument("--commons", type=int, default=0, help="new Louvre and British Museum works from Wikimedia Commons, per museum")
    ap.add_argument("--recheck-only", action="store_true", help="only re-screen the works already gathered")
    ap.add_argument("--seed", type=int, default=int(time.time()) // 86400)
    a = ap.parse_args()
    random.seed(a.seed)
    ART.mkdir(parents=True, exist_ok=True)
    cat_path = ART / "catalog.json"
    cat = json.loads(cat_path.read_text()) if cat_path.exists() else []
    dropped = [r for r in cat if r["id"] in DENY or not still_ok(r)]
    cat = [r for r in cat if r["id"] not in DENY and still_ok(r)]
    for r in dropped:
        for sub in ("t", "f", "m"): (ART / sub / (r["id"] + ".jpg")).unlink(missing_ok=True)
    if dropped: print(f"Removed {len(dropped)} works that today's screens hold back")
    if a.recheck_only:
        cat_path.write_text("[\n" + ",\n".join(json.dumps(r, ensure_ascii=False, separators=(",", ":")) for r in cat) + "\n]\n"); return
    have = {r["id"] for r in cat}
    keys = {norm_key(r) for r in cat}
    rejected = []

    def take(raw_list, conv):
        out = []
        for raw in raw_list:
            rec, why = conv(raw)
            if not rec:
                if why and ("prophet rule" in why or "mentioning" in why or why == "unfit"): rejected.append(f"{why}: {raw.get('id') or raw.get('objectID')} {raw.get('title')}" if isinstance(raw, dict) else f"{why}: {raw[0][0].get('title')}")
                continue
            if rec["id"] in have or rec["id"] in DENY: continue
            k = norm_key(rec)
            if k in keys: continue
            keys.add(k); out.append(rec)
        return out

    print("Cleveland Museum of Art...", flush=True)
    cma = take(cma_records(), from_cma)
    print(f"  {len(cma)} new usable Cleveland works", flush=True)

    # In the app: the best-described works, balanced; then download their pictures.
    with_text = [r for r in cma if r["x"]]
    offline = balanced(with_text, a.offline)
    print(f"Downloading {len(offline)} pictures for the In-the-app wing...", flush=True)
    ok = []
    with cf.ThreadPoolExecutor(8) as ex:
        for rec, good in zip(offline, ex.map(save_pictures, offline)):
            if good:
                rec["wing"] = "app"; ok.append(rec)
    print(f"  saved {len(ok)}", flush=True)
    chosen = {r["id"] for r in ok}

    # Online wing: the rest of Cleveland's described works first, then the Met.
    rest = [r for r in cma if r["id"] not in chosen and r["x"]]
    online = balanced(rest, min(a.online, len(rest)), per_artist=40)
    room = a.met
    met = []
    if room > 0 and a.met_per_dept > 0:
        print("The Met...", flush=True)
        ids = [i for i in met_ids(a.met_per_dept) if "met-" + str(i) not in have]
        random.shuffle(ids)
        ids = ids[: room * 4]
        with cf.ThreadPoolExecutor(10) as ex:
            raws = [r for r in ex.map(met_obj, ids) if r]
        met = balanced(take(raws, from_met), room, per_artist=25)
        print(f"  {len(met)} new Met works", flush=True)
    for src in (COMMONS_ROOTS if a.commons > 0 else []):
        print(COMMONS_ROOTS[src][0] + " (Wikimedia Commons)...", flush=True)
        got = []
        for root in COMMONS_ROOTS[src][1]:
            got += take([(x, src) for x in commons_files(root, a.commons * 2 // len(COMMONS_ROOTS[src][1]))], from_commons)
            print(f"  {root}: {len(got)} usable so far", flush=True)
        got = balanced(got, a.commons, per_artist=25)
        print(f"  {len(got)} new works", flush=True); met += got
    print(f"Downloading {len(online) + len(met)} small tiles for the Online wing...", flush=True)
    web = []
    with cf.ThreadPoolExecutor(12) as ex:
        for rec, good in zip(online + met, ex.map(save_micro, online + met)):
            if good:
                rec["wing"] = "web"; rec.pop("th", None); web.append(rec)
    print(f"  saved {len(web)}", flush=True)
    online, met = web, []

    cat += ok + online + met
    cat.sort(key=lambda r: r["id"])
    cat_path.write_text("[\n" + ",\n".join(json.dumps(r, ensure_ascii=False, separators=(",", ":")) for r in cat) + "\n]\n")
    if rejected:
        with open(ART / "rejected.log", "a") as f:
            f.write("\n".join(sorted(set(rejected))) + "\n")

    # Checks: every In-the-app work has both pictures; nothing on the deny list or the never-show screen.
    bad = [r["id"] for r in cat if r.get("wing") == "app" and not ((ART / "t" / (r["id"] + ".jpg")).exists() and (ART / "f" / (r["id"] + ".jpg")).exists())]
    bad += [r["id"] for r in cat if r.get("wing") == "web" and not (ART / "m" / (r["id"] + ".jpg")).exists()]
    assert not bad, ("missing pictures", bad[:10])
    for r in cat:
        assert not NEVER.search(" ".join([r["t"], r["x"], r["fy"], r["c"]])), r["id"]
        assert not figural_islamic(r), r["id"]
    by = {}
    for r in cat: by[(r["wing"], r["r"])] = by.get((r["wing"], r["r"]), 0) + 1
    print("Catalog:", len(cat), "works;", sum(1 for r in cat if r["wing"] == "app"), "in the app")
    for k in sorted(by): print("  ", k, by[k])

if __name__ == "__main__":
    main()
