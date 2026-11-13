import json, pathlib
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
images_js = "window.HISTORY.images = " + json.dumps(images, ensure_ascii=False, indent=0) + ";"

for tag, f in (("/*__DATA__*/", "data.js"), ("/*__CONTENT__*/", "content.js"), ("/*__DEEP__*/", "deep.js"),
               ("/*__CHAPTERS__*/", "chapters.js"), ("/*__IMAGES__*/", None), ("/*__GEO__*/", "geo.js")):
    assert tag in src, tag
    src = src.replace(tag, images_js if f is None else (d/f).read_text())
(d/"index.html").write_text(src)
print("built", len(src), "bytes,", len(images), "images")

# iPhone app version: one file with every picture and font built in (so it works offline),
# a phone viewport, and APP_MODE so the AI parts point to the online museum.
import base64, re
app_dir = d.parent/"ios"/"HistoryMuseum"/"Web"
if app_dir.parent.exists():
    app_src = src
    for slug in images:
        b64 = base64.b64encode((d/"img"/(slug + ".jpg")).read_bytes()).decode()
        app_src = app_src.replace('"' + IMG_BASE + slug + '.jpg"', '"data:image/jpeg;base64,' + b64 + '"')
    # Google Fonts -> fonts built into the page
    links = re.findall(r'<link rel="(?:preconnect|stylesheet)" href="https://fonts\.g[^>]*>\n', app_src)
    assert len(links) == 3, links
    for l in links: app_src = app_src.replace(l, "")
    fonts_css = (d/"fonts"/"fonts.css").read_text()
    for f in re.findall(r"fonts/([\w-]+\.woff2)", fonts_css):
        fonts_css = fonts_css.replace("fonts/" + f, "data:font/woff2;base64," + base64.b64encode((d/"fonts"/f).read_bytes()).decode())
    assert "fonts.g" not in app_src
    head = ('<!doctype html>\n<html lang="en"><head><meta charset="utf-8">\n'
            '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
            '<script>window.APP_MODE = true;</script>\n'
            '<style>' + fonts_css + '\n'
            'html body{padding-top:env(safe-area-inset-top, 0px); padding-bottom:calc(96px + env(safe-area-inset-bottom, 0px));'
            ' -webkit-text-size-adjust:100%; -webkit-tap-highlight-color:transparent}\n'
            'html body input, html body select, html body textarea{font-size:16px}</style>\n')
    app_dir.mkdir(exist_ok=True)
    (app_dir/"index.html").write_text(head + app_src)
    print("built iPhone app page", len(head + app_src), "bytes")
