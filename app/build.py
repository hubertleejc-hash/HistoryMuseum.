import json, pathlib, shutil
d = pathlib.Path(__file__).parent
src = (d/"app.src.html").read_text()

# Every picture goes through one map, window.HISTORY.images[slug].src.
# To serve images from somewhere else (e.g. the claude.ai asset store),
# change IMG_BASE here or rewrite the src values in one place.
IMG_BASE = "img/"
manifest = json.loads((d/"img"/"manifest.json").read_text())
# Dates shown in credit lines. The manifest keeps the full research notes in brackets;
# the page shows only the part before them, or a fix from this map.
DATE_SHOW = {"napoleon-alps": "1801", "tribute-giraffe": "16th-century copy of a 1414 painting",
             "death-caesar": "1859 to 1867", "qingming": "early 12th century", "school-athens": "1509 to 1511",
             "mona-lisa": "c. 1503 to 1519", "great-wave": "c. 1831"}
BY_SHOW = {"tribute-giraffe": "After Shen Du"}
COLL_SHOW = {"cleopatra-caesar": "Private collection"}
show_date = lambda m: DATE_SHOW.get(m["slug"], m["date"].split(" (")[0])
images = {m["slug"]: {"src": IMG_BASE + m["slug"] + ".jpg", "title": m["title"].split(" (")[0], "by": BY_SHOW.get(m["slug"], m["artist"]), "date": show_date(m),
                      "coll": COLL_SHOW.get(m["slug"], m["collection"]), "lic": m["licence"], "page": m["page"], "w": m["w"], "h": m["h"]}
          for m in manifest if (d/"img"/(m["slug"] + ".jpg")).exists()}
# Portraits of the museum's people (tools/art/portraits.py), shipped as files in art/p/
portraits = json.loads((d/"art"/"portraits.json").read_text()) if (d/"art"/"portraits.json").exists() else {}
# Wikimedia's date and author fields carry machine text ("1748 date QS:P571,+1748-00-00T00:00:00Z/9", a doubled
# "Unknown artist Unknown artist", footnote marks). The credit line shows only the readable part, or a fix from these maps.
import re as _re
PT_BY = {"bohr": "AB Lagrelius & Westphal", "cleopatra": "Unknown sculptor", "renoir": "Unknown photographer",
         "qin-shi-huang": "Unknown artist", "poe": "Unknown photographer", "engels": "William Hall",
         "edison": "Louis Bachrach / Michel Vuijlsteke", "elizabeth-i": "Unknown artist, perhaps Federico Zuccaro",
         "verdi": "A. Cairoli and Ernesto Mancastroppa", "wilbur-wright": "Orville and Wilbur Wright",
         "orville-wright": "Orville and Wilbur Wright", "adam-smith": "After a 1787 original"}
PT_DATE = {"cleopatra": "40 to 30 BC", "kepler": "1910", "earhart": "c. 1928", "engels": "May 1877", "poe": "June 1849",
           "adam-smith": "etched 1811 to 1872", "vivaldi": "18th century", "einstein": "1921", "andersen": "October 1869"}
# Titles copied from Wikimedia file names, shortened by hand
PT_TITLE = {"verdi": "Giuseppe Verdi, wood engraving", "vivaldi": "Portrait of Antonio Vivaldi",
            "woolf": "Virginia Woolf in 1902", "scott": "Scott of the Antarctic", "einstein": "Einstein in 1921",
            "peter-the-great": "Portrait of Peter I", "charlemagne": "Emperor Charlemagne", "darwin": "Charles Darwin",
            "lafayette": "Marquis de Lafayette", "fitzgerald": "F. Scott Fitzgerald", "mlk": "Martin Luther King Jr.",
            "columbus": "Portrait of a Man, Said to be Christopher Columbus", "archimedes": "Archimedes Thoughtful"}
PT_BY.update({"cezanne": "Unknown artist", "helen-keller": "Los Angeles Times / Rhododendrites", "kangxi": "Unknown Qing court painter"})
PT_DATE.update({"cezanne": "September 1899"})
def clean_title(t):
    return _re.sub(r"\s*\(\d{3,4}\s*[–-]\s*\d{3,4}\)", "", t).strip()
def clean_date(t):
    t = _re.split(r"\s*(?:date QS:|\.mw-parser-output)", t)[0]
    t = _re.sub(r"(\d) (st|nd|rd|th)\b", r"\1\2", t)
    t = _re.sub(r"\bbetween (.+?) and (?:circa )?(.+)", r"\1 to \2", t)
    t = _re.sub(r"\bcirca\b", "c.", t)
    return _re.sub(r"\s+", " ", t).strip(" ,;")
def clean_by(t):
    t = _re.sub(r"\s*,?\s*\[\d+\]", "", t)
    t = _re.sub(r"\b(Unknown|Anonymous)( \w+)? Unknown( \w+)?", lambda m: "Unknown" + (m.group(3) or m.group(2) or " artist"), t)
    t = _re.sub(r"\s+([,;])", r"\1", t)
    t = _re.sub(r"\s+", " ", t).strip(" ,;")
    return {"Unknown": "Unknown artist", "anonymous": "Unknown artist", "Unknown author": "Unknown artist"}.get(t, t)
for pid, m in portraits.items():
    m["artist"] = PT_BY.get(pid, clean_by(m["artist"])); m["date"] = PT_DATE.get(pid, clean_date(m["date"])); m["title"] = PT_TITLE.get(pid, clean_title(m["title"]))
for pid, m in portraits.items():
    if (d/"art"/"p"/(pid + ".jpg")).exists():
        images["pt-" + pid] = {"src": "art/p/" + pid + ".jpg", "title": m["title"], "by": m["artist"], "date": m["date"], "coll": "Wikimedia Commons",
                               "lic": m["licence"], "page": m["page"], "w": m["w"], "h": m["h"], **({"note": m["note"]} if m.get("note") else {})}
# Walks through real pictures (app/walks.js): pictures gathered by tools/scenes/scenes.py into img/scenes/.
# A photograph with a depth estimate (<id>_d.jpg) also gets img/scenes/<id>.js holding both as data URLs,
# because WebGL may not read file pictures inside the iPhone app.
import base64 as _b64
scene_dir = d/"img"/"scenes"
scene_cred = json.loads((scene_dir/"credits.json").read_text()) if (scene_dir/"credits.json").exists() else {}
walk_pics = {}
for sid, m in scene_cred.items():
    if not (scene_dir/(sid + ".jpg")).exists(): continue
    walk_pics[sid] = {"src": "img/scenes/" + sid + ".jpg", "title": m["title"], "by": m["by"], "date": m["date"], "lic": m["lic"], "page": m["page"], "w": m["w"], "h": m["h"]}
    if (scene_dir/(sid + "_d.jpg")).exists():
        u = lambda f: "data:image/jpeg;base64," + _b64.b64encode(f.read_bytes()).decode()
        (scene_dir/(sid + ".js")).write_text(f"window.WALK_PIC({json.dumps(sid)},{json.dumps(u(scene_dir/(sid + '.jpg')))},{json.dumps(u(scene_dir/(sid + '_d.jpg')))});\n")
        walk_pics[sid]["js"] = "img/scenes/" + sid + ".js"
walks_js = (d/"walks.js").read_text() if (d/"walks.js").exists() else "window.HISTORY.walks = {};"
walks_js += "\nwindow.HISTORY.walkPics = " + json.dumps(walk_pics, ensure_ascii=False) + ";"
# Pictures for the museum guides (tools/guides/gather_guide.py): img/guide/<slug>.jpg, credits in img/guide/credits.json
guide_dir = d/"img"/"guide"
for slug, m in (json.loads((guide_dir/"credits.json").read_text()) if (guide_dir/"credits.json").exists() else {}).items():
    if (guide_dir/(slug + ".jpg")).exists():
        images[slug] = {"src": "img/guide/" + slug + ".jpg", **m}
images_js = "window.HISTORY.images = " + json.dumps(images, ensure_ascii=False, indent=0) + ";"
# "Near me" (online/places/*.json, checked by tools/online/build_feed.py): the list of every place ships in the app,
# with the pages of the starter set ("starter": true), so those work with no signal. Other pages download by name.
places = {"list": [], "files": {}}
for f in sorted((d.parent/"online"/"places").glob("*.json")) if (d.parent/"online"/"places").exists() else []:
    pl = json.loads(f.read_text()); pl["rev"] = __import__("hashlib").sha1(f.read_bytes()).hexdigest()[:10]
    places["list"].append({k: pl[k] for k in ("id", "n", "short", "kind", "where", "lat", "lon", "r", "rank", "rev") if k in pl} | ({"guide": 1} if pl.get("guide") else {}))
    if pl.get("starter"): places["files"][pl["id"]] = pl
images_js += "\nwindow.HISTORY.places = " + json.dumps(places, ensure_ascii=False, separators=(",", ":")) + ";"
print("places:", len(places["list"]), "in the list,", len(places["files"]), "pages built in")

# ---------- the Gallery's collection (gathered by tools/art/gather.py) ----------
# The page loads art/index.js when the Gallery first opens (a small record per work for the grid,
# filters and search), and one art/d-NN.js shard when a work is opened (its explanation and credit).
# Pictures: art/t (thumbnail) and art/f (full) for works in the app; art/m (small tile) for the
# Online wing, whose big picture loads from the museum's own server.
art_dir = d/"art"
catalog = json.loads((art_dir/"catalog.json").read_text()) if (art_dir/"catalog.json").exists() else []
deny = set(json.loads((d.parent/"tools"/"art"/"overrides.json").read_text()).get("deny", []))
catalog = [r for r in catalog if r["id"] not in deny]
SHARDS = 64
shard_of = lambda i: int(__import__("hashlib").md5(i.encode()).hexdigest()[:4], 16) % SHARDS
KIND = ["painting", "print", "drawing", "photo", "sculpture", "textile", "object", "book"]
REG = ["east-asia", "south-asia", "islamic", "africa", "ancient", "europe", "americas", "oceania"]
index = [[r["id"], r["t"], r["a"], r["y"], REG.index(r["r"]), KIND.index(r["k"]), r["w"], r["h"], 0 if r["wing"] == "app" else 1, 1 if r["x"] else 0]
         for r in catalog]
details = [dict() for _ in range(SHARDS)]
for r in catalog:
    details[shard_of(r["id"])][r["id"]] = {k: r[k] for k in ("d", "c", "m", "x", "fy", "cr", "u", "img", "on") if r.get(k)}
for f in art_dir.glob("*.js") if art_dir.exists() else []: f.unlink()
if catalog:
    (art_dir/"index.js").write_text("window.ART_INDEX(" + json.dumps(index, ensure_ascii=False, separators=(",", ":")) + ");\n")
    for n, dd in enumerate(details):
        (art_dir/f"d-{n:02d}.js").write_text(f"window.ART_DETAIL({n}," + json.dumps(dd, ensure_ascii=False, separators=(",", ":")) + ");\n")
    for r in catalog:
        need = ("t", "f") if r["wing"] == "app" else ("m",)
        for sub in need: assert (art_dir/sub/(r["id"] + ".jpg")).exists(), (sub, r["id"])
print("gallery:", len(catalog), "works,", sum(1 for r in catalog if r["wing"] == "app"), "in the app")
images_js += "\nwindow.HISTORY.artShards = " + str(SHARDS) + "; window.HISTORY.artCount = " + str(len(catalog)) + ";"

# ---------- the museum's chapters (app/chapters.js), one file each ----------
# The page carries only what its lists need from each chapter (pictures, lede, search words).
# The full text is ch/<id>.js, loaded when that person (or their Talk page) is opened, so the app opens quicker.
# Search loads ch/all.js the first time it opens. The chapters are written in app/chapters.js as before.
def js_object(text):
    """The object literal in Object.assign(window.HISTORY.chapters, {...}) as Python data. Handles what
    chapters.js uses: comments, unquoted keys, double-quoted strings and trailing commas (checked against node)."""
    i = text.index("{", text.index("Object.assign(window.HISTORY.chapters"))
    out, depth = [], 0
    last = lambda: next((t for t in reversed(out) if t.strip()), "")
    while True:
        c = text[i]
        if c == '"':
            j = i + 1
            while text[j] != '"': j += 2 if text[j] == "\\" else 1
            out.append(text[i:j + 1]); i = j + 1; continue
        if text.startswith("/*", i): i = text.index("*/", i) + 2; continue
        if text.startswith("//", i): i = text.index("\n", i); continue
        m = _re.match(r"[A-Za-z_$][\w$]*(?=\s*:)", text[i:i + 80])
        if m and last() in ("{", ","): out.append(json.dumps(m.group())); i += len(m.group()); continue
        if c in "}]":
            while out and not out[-1].strip(): out.pop()
            if out and out[-1] == ",": out.pop()
            depth -= 1; out.append(c); i += 1
            if depth == 0: break
            continue
        if c in "{[": depth += 1
        out.append(c); i += 1
    return json.loads("".join(out))
chapters = js_object((d/"chapters.js").read_text())
ch_dir = d/"ch"
if ch_dir.exists(): shutil.rmtree(ch_dir)
ch_dir.mkdir()
ch_stub, ch_all = {}, []
for cid, ch in chapters.items():
    for k in ("hero", "portrait", "scene"): assert not ch.get(k) or ch[k] in images, f"chapter {cid}: {k} picture {ch[k]} is not in the app"
    for sec in ch["sections"]: assert not sec.get("img") or sec["img"] in images, f"chapter {cid}: section picture {sec['img']} is not in the app"
    line = f"window.CH_LOAD({json.dumps(cid)}," + json.dumps(ch, ensure_ascii=False, separators=(",", ":")) + ");\n"
    (ch_dir/(cid + ".js")).write_text(line); ch_all.append(line)
    ch_stub[cid] = {k: ch[k] for k in ("hero", "portrait", "scene", "lede", "kw") if k in ch} | {"file": 1}
(ch_dir/"all.js").write_text("".join(ch_all))
chapters_js = "window.HISTORY.chapters = " + json.dumps(ch_stub, ensure_ascii=False, separators=(",", ":")) + ";"
print("chapters:", len(chapters), "as files,", len(chapters_js), "bytes left in the page")

for tag, f in (("/*__DATA__*/", "data.js"), ("/*__TODAY__*/", "today.js"), ("/*__CONTENT__*/", "content.js"), ("/*__DEEP__*/", "deep.js"), ("/*__ERAS__*/", "eras.js"), ("/*__WALKS__*/", "WALKS"),
               ("/*__CHAPTERS__*/", "CHAPTERS"), ("/*__VOICE__*/", "voice.js"), ("/*__IMAGES__*/", None), ("/*__GEO__*/", "geo.js")):
    assert tag in src, tag
    src = src.replace(tag, images_js if f is None else walks_js if f == "WALKS" else chapters_js if f == "CHAPTERS" else (d/f).read_text())
(d/"index.html").write_text(src)
print("built", len(src), "bytes,", len(images), "images")

# iPhone app version: one file with every picture and font built in (so it works offline),
# a phone viewport, and APP_MODE. The app never links out to another site for a feature.
import base64, re
app_dir = d.parent/"ios"/"HistoryMuseum"/"Web"
if app_dir.parent.exists():
    app_src = src
    # The pictures ship as files in Web/img (a folder reference, see project.yml), not as base64 inside
    # the page: a page with megabytes of base64 parsed slowly, and every person page re-parsed its picture.
    # Google Fonts -> fonts built into the page
    links = re.findall(r'<link rel="(?:preconnect|stylesheet)" href="https://fonts\.g[^>]*>\n', app_src)
    assert len(links) == 3, links
    for l in links: app_src = app_src.replace(l, "")
    fonts_css = (d/"fonts"/"fonts.css").read_text()
    for f in re.findall(r"fonts/([\w-]+\.woff2)", fonts_css):
        fonts_css = fonts_css.replace("fonts/" + f, "data:font/woff2;base64," + base64.b64encode((d/"fonts"/f).read_bytes()).decode())
    assert "fonts.g" not in app_src
    app_src = re.sub(r'"https://claude\.ai/[^"]*"', '""', app_src)
    assert "claude.ai" not in app_src
    head = ('<!doctype html>\n<html lang="en"><head><meta charset="utf-8">\n'
            '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover">\n'
            '<script>window.APP_MODE = true;</script>\n'
            '<style>' + fonts_css + '\n'
            'html body{padding-top:env(safe-area-inset-top, 0px); padding-bottom:calc(96px + env(safe-area-inset-bottom, 0px));'
            ' -webkit-text-size-adjust:100%; -webkit-tap-highlight-color:transparent}\n'
            'html{touch-action:manipulation}\n'
            'html body input, html body select, html body textarea{font-size:16px}</style>\n')
    app_dir.mkdir(exist_ok=True)
    import shutil
    (app_dir/"index.html").write_text(head + app_src)
    # The collection ships as a folder next to the page (project.yml adds Web/art as a folder reference),
    # so the page uses the same art/... paths in the app as on the web.
    if (app_dir/"img").exists(): shutil.rmtree(app_dir/"img")
    (app_dir/"img").mkdir()
    for slug in images:
        if images[slug]["src"].startswith(IMG_BASE):
            (app_dir/images[slug]["src"]).parent.mkdir(exist_ok=True)
            shutil.copy2(d/images[slug]["src"], app_dir/images[slug]["src"])
    if walk_pics:
        (app_dir/"img"/"scenes").mkdir()
        for sid, m in walk_pics.items():
            for f in [sid + ".jpg"] + ([sid + ".js"] if m.get("js") else []): shutil.copy2(scene_dir/f, app_dir/"img"/"scenes"/f)
    if (app_dir/"ch").exists(): shutil.rmtree(app_dir/"ch")
    shutil.copytree(ch_dir, app_dir/"ch")
    if (app_dir/"art").exists(): shutil.rmtree(app_dir/"art")
    if catalog or portraits:
        (app_dir/"art").mkdir()
        for f in art_dir.glob("*.js"): shutil.copy2(f, app_dir/"art"/f.name)
        for sub in ("t", "f", "m", "p"):
            if (art_dir/sub).exists():
                keep = {r["id"] + ".jpg" for r in catalog} | {pid + ".jpg" for pid in portraits}
                (app_dir/"art"/sub).mkdir()
                for f in (art_dir/sub).iterdir():
                    if f.name in keep: shutil.copy2(f, app_dir/"art"/sub/f.name)
        print("app gallery folder:", sum(1 for _ in (app_dir/"art").rglob("*")), "files")
    print("built iPhone app page", len(head + app_src), "bytes")
