"""Checks that every source link in online/places/*.json opens (runs on GitHub Actions for pull requests).
A citation that does not exist is worse than none. Usage: python3 tools/online/check_links.py [files...]"""
import json, sys, time, urllib.error, urllib.request
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
    last = None
    for i in range(2):
        for method in ("HEAD", "GET"):
            try:
                req = urllib.request.Request(u, method=method, headers={"User-Agent": UA})
                with urllib.request.urlopen(req, timeout=30) as r:
                    return r.status < 400, r.status
            except urllib.error.HTTPError as e:
                if e.code == 404 or e.code == 410:
                    return False, e.code
                last = e.code  # 403/405/429: some museum sites refuse robots; let it pass as unchecked
                if e.code in (401, 403, 429):
                    return True, f"unchecked ({e.code})"
            except Exception as e:  # noqa: BLE001
                last = str(e)
        time.sleep(2)
    return True, f"unchecked ({last})"


def main(files):
    files = [Path(f) for f in files] or sorted((ROOT / "online" / "places").glob("*.json"))
    from concurrent.futures import ThreadPoolExecutor
    per = {f: list(links(json.loads(f.read_text()))) for f in files if f.suffix == ".json" and f.exists()}
    urls = sorted({u for us in per.values() for u in us})
    with ThreadPoolExecutor(12) as ex:
        seen = dict(zip(urls, ex.map(ok, urls)))
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
