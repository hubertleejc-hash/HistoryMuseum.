/* Talk check: every line in app/voice.js points at a real record, every person answers without errors,
   and Van Gogh answers the review's seven test questions in his own voice with the record shown.
   Run after  python3 app/build.py :   node tools/talk_check.js   (needs Playwright with Chromium) */
const http = require("http"), fs = require("fs"), path = require("path");
const { chromium } = require("playwright");
const root = path.join(__dirname, "..", "ios", "HistoryMuseum", "Web");
const TYPES = {".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".jpg": "image/jpeg", ".png": "image/png", ".woff2": "font/woff2"};
const server = http.createServer((q, r) => { const f = path.join(root, decodeURIComponent(q.url.split("?")[0]).replace(/^\/$/, "/index.html"));
  fs.readFile(f, (e, b) => { if (e) { r.writeHead(404); r.end(); } else { r.writeHead(200, {"Content-Type": TYPES[path.extname(f)] || "application/octet-stream"}); r.end(b); } }); });
const fail = []; const ok = (c, m) => { if (!c) fail.push(m); };
server.listen(0, async () => {
  const b = await chromium.launch(), pg = await b.newPage({viewport: {width: 430, height: 932}});
  const errs = []; pg.on("pageerror", e => errs.push(e.message));
  await pg.goto(`http://localhost:${server.address().port}/index.html#talk-van-gogh`); await pg.waitForSelector("#talkIn"); await pg.evaluate(() => window.__allChapters());
  const data = await pg.evaluate(() => { const H = window.HISTORY, T = window.__talk, out = {bad: [], crash: []};
    Object.entries(H.voice || {}).forEach(([id, v]) => { const p = H.people.find(x => x.id === id);
      if (!p || p.sacred) out.bad.push(id + ": not a person, or sacred");
      v.lines.forEach(l => String(l[3]).split("|").forEach(r => { if (!T.recRef(p, r.trim())) out.bad.push(`${id}: ${r} points at nothing`); })); });
    H.people.forEach(p => ["hello", "Who are you?", "How did you die?", "Did you know Napoleon?", "zzz qqq"].forEach(q => { try { T.recordAnswer(p, q, new Set()); } catch(e) { out.crash.push(`${p.id} "${q}": ${e.message}`); } }));
    return out; });
  data.bad.forEach(m => fail.push(m)); data.crash.forEach(m => fail.push(m));
  const QS = ["hello", "Why did you cut your ear?", "Tell me about Gauguin", "Did you know Monet?", "How did you die?", "What was your favourite colour?", "Tell me about your brother"];
  for (const q of QS) {
    await pg.fill("#talkIn", q); await pg.press("#talkIn", "Enter"); await pg.waitForTimeout(150);
    const r = await pg.evaluate(() => { const m = [...document.querySelectorAll("#chat .msg.them")].pop(); return {t: m.querySelector(".bub").innerText, n: m.querySelectorAll(".receipt .ln").length}; });
    ok(/\b(I|I'm|my|me|we)\b/.test(r.t), `"${q}": not in the first person: ${r.t}`);
    ok(!/record is silent|What the record says|can't answer that/.test(r.t), `"${q}": no real answer: ${r.t}`);
    ok(r.n > 0, `"${q}": no record shown under the answer`);
  }
  ok(!errs.length, "page errors: " + errs.join("; "));
  await b.close(); server.close();
  console.log(fail.length ? "Talk check FAILED\n" + fail.join("\n") : `Talk check passed: ${QS.length} test questions, every voice line backed by the record.`);
  process.exit(fail.length ? 1 : 0);
});
