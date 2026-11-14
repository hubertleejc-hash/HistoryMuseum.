"""Tidy portrait titles from Commons metadata (language prefixes, QS: labels, file-name titles)."""
import json, re, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parents[2]

def names():
    src = (ROOT / "app" / "data.js").read_text()
    return {m.group(1): m.group(2) for m in re.finditer(r'\{id:"([^"]+)", n:"([^"]+)"', src)}

def tidy(t, name):
    t = re.split(r"\s+(?:label|title) QS:", t)[0].strip()
    t = re.sub(r"^(?:[A-Z][a-z]+ )?(?:English|German|French|Chinese|Arabic|Italian|Spanish|Russian|Japanese|Dutch|Polish|Portuguese|Latin):\s*", "", t)
    t = re.split(r"\s+(?:English|German|French|Simplified Chinese|Traditional Chinese|Arabic|Italian|Spanish|Russian):\s", t)[0].strip()
    bad = (not t or " " not in t or re.search(r"[《》一-鿿؀-ۿ]", t) or re.search(r"\b(crop|restored|hires|full|\d{3,}px)\b", t, re.I)
           or re.fullmatch(r"[\w .'-]+", t) and t.lower().replace(" ", "") in name.lower().replace(" ", "").replace("-", ""))
    return f"Portrait of {name}" if bad else t.rstrip(" .")

if __name__ == "__main__":
    p = ROOT / "app" / "art" / "portraits.json"
    m, n = json.loads(p.read_text()), names()
    for pid, v in m.items():
        new = tidy(v["title"], re.sub(r"\s*\(.*\)", "", n.get(pid, pid)))
        if new != v["title"]: print(f"{pid}: {v['title'][:60]!r} -> {new!r}"); v["title"] = new
    p.write_text(json.dumps(m, ensure_ascii=False, indent=1) + "\n")
