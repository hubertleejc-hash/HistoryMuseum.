"""Checks that every source link in online/places/*.json opens (runs on GitHub Actions for pull requests).
A citation that does not exist is worse than none. Usage: python3 tools/online/check_links.py [files...]"""
import json, sys, time, urllib.error, urllib.parse, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
UA = "contemporaries-link-check/1.0 (history app; source citations)"


def links(pl):
    for x in pl.get("facts", []) + (pl.get("guide") or {}).get("stops", []) + [pl.get("guide") or {}]:
        for s in x.get("src", []) or []:
            if s.get("u"):
                yield s["u"]
        if x.get("pic", {}).get("page"):
            yield x["pic"]["page"]


def ok(u):
    """One HEAD, then one GET. 404/410 is broken; a site that refuses robots or times out passes as unchecked."""
    last = None
    for method in ("HEAD", "GET"):
        try:
            req = urllib.request.Request(urllib.parse.quote(u, safe=":/?&=%#+,;@()'!*~"), method=method, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=12) as r:
                return r.status < 400, r.status
        except urllib.error.HTTPError as e:
            if e.code in (404, 410):
                return False, e.code
            last = e.code
        except Exception as e:  # noqa: BLE001
            last = type(e).__name__
    return True, f"unchecked ({last})"


def wiki_missing(titles):
    """Wikipedia: ask the API about 50 titles at a time (one polite request, no rate limit), following redirects."""
    missing = set()
    for i in range(0, len(titles), 50):
        chunk = titles[i:i + 50]
        q = urllib.parse.urlencode({"action": "query", "titles": "|".join(chunk), "redirects": 1, "format": "json"})
        for attempt in range(4):
            try:
                req = urllib.request.Request("https://en.wikipedia.org/w/api.php?" + q, headers={"User-Agent": UA})
                with urllib.request.urlopen(req, timeout=30) as r:
                    d = json.loads(r.read())
                break
            except Exception:  # noqa: BLE001
                time.sleep(5 * (attempt + 1))
        else:
            continue
        norm = {n["from"]: n["to"] for n in d["query"].get("normalized", [])}
        redir = {n["from"]: n["to"] for n in d["query"].get("redirects", [])}
        gone = {p["title"] for p in d["query"]["pages"].values() if "missing" in p or "invalid" in p}
        for t in chunk:
            t2 = norm.get(t, t)
            t2 = redir.get(t2, t2)
            if t2 in gone:
                missing.add(t)
        time.sleep(1)
    return missing


def main(files):
    files = [Path(f) for f in files] or sorted((ROOT / "online" / "places").glob("*.json"))
    from concurrent.futures import ThreadPoolExecutor
    per = {f: list(links(json.loads(f.read_text()))) for f in files if f.suffix == ".json" and f.exists()}
    urls = sorted({u for us in per.values() for u in us})
    WP = "https://en.wikipedia.org/wiki/"
    wiki = {u: urllib.parse.unquote(u[len(WP):]).replace("_", " ") for u in urls if u.startswith(WP)}
    gone = wiki_missing(sorted(set(wiki.values())))
    seen = {u: (t not in gone, 200 if t not in gone else 404) for u, t in wiki.items()}
    rest = [u for u in urls if u not in wiki]
    with ThreadPoolExecutor(12) as ex:
        seen.update(zip(rest, ex.map(ok, rest)))
    bad = []
    for f, us in per.items():
        for u in us:
            good, code = seen[u]
            if not good:
                bad.append(f"{f.name}: {u} ({code})")
            elif code != 200 and not isinstance(code, int):
                print("note:", f.name, u, code)
    print(len(seen), "links checked")
    for b in bad:
        print("BROKEN", b)
    sys.exit(1 if bad else 0)


if __name__ == "__main__":
    main(sys.argv[1:])
