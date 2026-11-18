#!/usr/bin/env python3
"""Gather public-domain recordings for Listen (runs on GitHub Actions; Wikimedia is not reachable elsewhere).

Reads tools/listen/request.json:
  {"mode": "search", "items": {"<person-id>": {"search": ["words", ...], "cats": ["Category name", ...]}}}
     -> tools/listen/out/<person-id>.json: numbered candidates (file, licence, length, date, author, description)
        for a person to pick from. Nothing reaches the app in this round.
  {"mode": "fetch", "picks": [{"by": "<person-id>", "file": "Commons file name", "kind": "music"|"voice",
                               "title": "...", "work": "<work id, optional>", "year": 1913, "who": "performer"}]}
     -> online/listen/<person-id>.json, one file per person, every track checked again here:
        a public-domain or CC0 licence on Commons, 15 s to 40 min long, and an MP3 that answers and plays.
Audio is never copied into the repository: the phone streams it from Wikimedia's own servers.
"""
import json, re, subprocess, sys, urllib.error, urllib.parse, urllib.request
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "art"))
from portraits import get, plain, UA  # Commons helpers with polite rate limiting

ROOT = Path(__file__).resolve().parents[2]
REQ = json.loads((Path(__file__).parent / "request.json").read_text())
OUT = Path(__file__).parent / "out"
LISTEN = ROOT / "online" / "listen"
API = "https://commons.wikimedia.org/w/api.php?"
AUDIO = re.compile(r"\.(ogg|oga|opus|mp3|flac|wav|webm)$", re.I)


def licence(md):
    """(free?, short name). Only public domain and CC0: no attribution-only or share-alike licences."""
    lic = (md.get("License", {}).get("value") or "").lower()
    name = plain(md.get("LicenseShortName", {}).get("value"), 80)
    low = name.lower()
    free = lic.startswith("pd") or lic.startswith("cc0") or low.startswith("public domain") or low.startswith("pd") or low.startswith("cc0")
    if re.search(r"\bby\b|sa\b|share", lic) and not lic.startswith("cc0"):
        free = False
    if md.get("Restrictions", {}).get("value"):
        free = False
    return free, name or lic.upper()


def info(titles):
    p = {"action": "query", "format": "json", "titles": "|".join(titles), "prop": "videoinfo",
         "viprop": "url|size|mime|extmetadata|derivatives|metadata"}
    d = get(API + urllib.parse.urlencode(p)) or {}
    return list(d.get("query", {}).get("pages", {}).values())


def length(vi):
    for m in vi.get("metadata") or []:
        if m.get("name") in ("length", "playtime_seconds", "duration"):
            try: return float(m["value"])
            except (TypeError, ValueError): pass
    return None


def mp3_url(vi):
    if vi.get("mime") == "audio/mpeg":
        return vi["url"]
    for d in vi.get("derivatives") or []:
        if d.get("transcodekey") == "mp3" or "audio/mpeg" in d.get("type", ""):
            return d["src"]
    return None


def probe(url, known=None):
    """Length in seconds of the MP3 as the phone will hear it, or None if it does not answer or play.
    One small ranged download (the first 256 KB) is enough to see that it is a real MP3; the length comes
    from Commons. Wikimedia limits bots, so this goes slowly and waits when asked to (HTTP 429)."""
    import tempfile, time
    for attempt in range(5):
        time.sleep(4 + attempt * 30)
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA, "Range": "bytes=0-262143"})
            with urllib.request.urlopen(req, timeout=60) as r:
                if r.status not in (200, 206) or "audio" not in r.headers.get("Content-Type", ""):
                    return None
                head = r.read(262144)
            with tempfile.NamedTemporaryFile(suffix=".mp3") as f:
                f.write(head); f.flush()
                out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "stream=codec_name", "-of", "default=nw=1:nk=1", f.name],
                                     capture_output=True, text=True, timeout=60)
            if "mp3" not in out.stdout:
                return None
            return known
        except urllib.error.HTTPError as e:
            if e.code == 429:
                print("  Wikimedia asks to slow down; waiting", flush=True); continue
            print("  probe failed:", url[:120], e, file=sys.stderr); return None
        except Exception as e:
            print("  probe failed:", url[:120], e, file=sys.stderr); return None
    return None


def describe(pg):
    vi = (pg.get("videoinfo") or [None])[0]
    if not vi:
        return None
    md = vi.get("extmetadata", {})
    free, lic = licence(md)
    return {"file": pg["title"][5:], "free": free, "licence": lic, "mime": vi.get("mime"),
            "len": length(vi), "mp3": mp3_url(vi),
            "date": plain(md.get("DateTimeOriginal", {}).get("value"), 60),
            "by": plain(md.get("Artist", {}).get("value"), 90),
            "desc": plain(md.get("ImageDescription", {}).get("value"), 260),
            "page": vi.get("descriptionurl") or "https://commons.wikimedia.org/wiki/File:" + urllib.parse.quote(pg["title"][5:].replace(" ", "_"))}


def search(items):
    OUT.mkdir(parents=True, exist_ok=True)
    for pid, spec in items.items():
        titles = []
        for c in spec.get("cats", []):
            p = {"action": "query", "format": "json", "list": "categorymembers", "cmtitle": "Category:" + c, "cmtype": "file", "cmlimit": 80}
            d = get(API + urllib.parse.urlencode(p)) or {}
            titles += [m["title"] for m in d.get("query", {}).get("categorymembers", [])]
        for s in spec.get("search", []):
            p = {"action": "query", "format": "json", "list": "search", "srnamespace": 6, "srsearch": s + " filetype:audio", "srlimit": spec.get("limit", 25)}
            d = get(API + urllib.parse.urlencode(p)) or {}
            titles += [m["title"] for m in d.get("query", {}).get("search", [])]
        titles = [t for i, t in enumerate(titles) if AUDIO.search(t) and t not in titles[:i]]
        cands = []
        for k in range(0, len(titles), 40):
            for pg in info(titles[k:k + 40]):
                c = describe(pg)
                if c and c["free"]:
                    cands.append(c)
        cands.sort(key=lambda c: c["file"])
        for n, c in enumerate(cands, 1):
            c["n"] = n
        (OUT / (pid + ".json")).write_text(json.dumps(cands, ensure_ascii=False, indent=1))
        print(pid, len(titles), "audio files,", len(cands), "free", flush=True)


def fetch(picks):
    LISTEN.mkdir(parents=True, exist_ok=True)
    rejected, by = [], {}
    done = {}  # tracks already checked in an earlier run keep their place and are not fetched again
    for f in LISTEN.glob("*.json"):
        for t in json.loads(f.read_text()).get("tracks", []):
            done[(f.stem, t["file"])] = t
    for pk in picks:
        old = done.get((pk["by"], pk["file"]))
        if old:
            t = dict(old, kind=pk.get("kind", "music"), title=pk["title"])
            for k in ("work", "year", "who", "note"):
                if pk.get(k): t[k] = pk[k]
                else: t.pop(k, None)
            by.setdefault(pk["by"], []).append(t)
            print("  kept:", pk["by"], "-", pk["title"], flush=True)
            continue
        pg = info(["File:" + pk["file"]])
        c = describe(pg[0]) if pg else None
        why = None
        if not c: why = "not found on Commons"
        elif not c["free"]: why = "licence is " + c["licence"]
        elif not c["mp3"]: why = "no MP3 version"
        if not why:
            secs = c["len"]
            if not secs or not 15 <= secs <= 2400: why = f"length {secs} s"
            elif probe(c["mp3"], secs) is None: why = "the MP3 does not answer or play"
        if why:
            rejected.append(f"{pk['by']}\t{pk['file']}\t{why}")
            print("  rejected:", pk["file"], "-", why, flush=True)
            continue
        t = {"kind": pk.get("kind", "music"), "title": pk["title"], "file": c["file"], "url": c["mp3"],
             "page": c["page"], "licence": c["licence"], "len": round(secs)}
        for k in ("work", "year", "who", "note"):
            if pk.get(k): t[k] = pk[k]
        by.setdefault(pk["by"], []).append(t)
        print("  ok:", pk["by"], "-", pk["title"], f"({secs:.0f} s)", flush=True)
    for pid, tracks in by.items():
        (LISTEN / (pid + ".json")).write_text(json.dumps({"by": pid, "tracks": tracks}, ensure_ascii=False, indent=1) + "\n")
    (LISTEN / "rejected.log").write_text("\n".join(rejected) + ("\n" if rejected else ""))


if __name__ == "__main__":
    if REQ.get("mode") == "search":
        search(REQ.get("items", {}))
    else:
        fetch(REQ.get("picks", []))
