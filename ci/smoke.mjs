// Quick safety check: opens every screen of the built app page in headless Chromium at phone size,
// in light and dark, and fails on a page error, a missing local file, an empty screen, sideways
// overflow, a broken picture or a person page that does not show its person.
// Run after `python3 app/build.py`:  node ci/smoke.mjs   (from the repository root)
// Optional: CHROMIUM_PATH=/path/to/chromium to use an installed browser, SMOKE_ONLY=p-van-gogh,world to test a few routes,
// SMOKE_STACK=1 to print where a JavaScript error happened. First time: npm ci --prefix ci
import { chromium } from "playwright";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve("ios/HistoryMuseum/Web");
const ONLINE = path.resolve("online");
const OUT = path.resolve("ci-output");
const W = 430, H = 932;
// The app fetches new stories, art and places from main on GitHub. The check serves them from this
// pull request's own online/ folder instead, so new content is tested in the app before it reaches phones.
const FEED_PREFIX = "https://raw.githubusercontent.com/hubertleejc-hash/historymuseum./main/online/";
// Known problems on main that must not block other work. Each entry: "route" or "route|reason start". Keep it empty.
const KNOWN = new Set(JSON.parse(fs.existsSync("ci/known-issues.json") ? fs.readFileSync("ci/known-issues.json", "utf8") : "[]"));

if (!fs.existsSync(path.join(ROOT, "index.html"))) { console.error("::error::ios/HistoryMuseum/Web/index.html is missing: run python3 app/build.py first"); process.exit(1); }
fs.mkdirSync(OUT, { recursive: true });

const TYPES = { ".html": "text/html", ".js": "text/javascript", ".json": "application/json", ".css": "text/css", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".png": "image/png", ".webp": "image/webp", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".mp3": "audio/mpeg", ".m4a": "audio/mp4" };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(new URL(req.url, "http://x").pathname));
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { "content-type": TYPES[path.extname(p).toLowerCase()] || "application/octet-stream" });
  fs.createReadStream(p).pipe(res);
});
await new Promise(r => server.listen(0, "127.0.0.1", r));
const BASE = `http://127.0.0.1:${server.address().port}/`;

const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
const failures = [];
const fail = (theme, route, why) => {
  if (KNOWN.has(route) || [...KNOWN].some(k => k.includes("|") && route === k.split("|")[0] && why.startsWith(k.split("|")[1]))) return;
  failures.push({ theme, route, why });
};


async function openContext(theme) {
  const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 1, isMobile: true, hasTouch: true,
    colorScheme: theme, reducedMotion: "reduce", serviceWorkers: "block", permissions: [] });
  // Start with this branch's online feed already on the phone (run tools/online/build_feed.py first), so new
  // stories, walks and places are part of every screen from the start, not only after the app's 6 s fetch.
  const feed = path.join(ONLINE, "feed.json");
  if (fs.existsSync(feed)) await ctx.addInitScript(f => { try { if (!localStorage.getItem("ctm-feed")) localStorage.setItem("ctm-feed", f); } catch (e) {} }, fs.readFileSync(feed, "utf8"));
  await ctx.route("**/*", async route => {
    const url = route.request().url();
    if (url.startsWith(BASE)) return route.continue();
    if (url.startsWith(FEED_PREFIX)) {
      const f = path.join(ONLINE, decodeURIComponent(url.slice(FEED_PREFIX.length).split("?")[0]));
      if (f.startsWith(ONLINE) && fs.existsSync(f) && !fs.statSync(f).isDirectory())
        return route.fulfill({ status: 200, contentType: TYPES[path.extname(f)] || "application/octet-stream", body: fs.readFileSync(f) });
      return route.fulfill({ status: 404, body: "" });
    }
    return route.abort();   // museum pictures and other outside addresses: the check never depends on the internet
  });
  return ctx;
}

// What one screen must look like. Runs inside the page.
function inspect(args) {
  const { route, W } = args;
  const out = [];
  const view = document.getElementById("view");
  if (!view) return ["#view is missing"];
  const text = view.innerText.trim();
  if (text.length < 40 || view.children.length < 1) out.push(`empty screen (${text.length} characters)`);
  // Template slips such as "Born undefined" or "NaN years": a short piece of text, or one that shows [object Object].
  // Ordinary prose that happens to use the word "undefined" is fine.
  const tw = document.createTreeWalker(view, NodeFilter.SHOW_TEXT);
  for (let n; (n = tw.nextNode());) {
    const v = n.nodeValue.trim();
    if (v.includes("[object Object]") || (v.length < 40 && /(^|[\s·:(,])(undefined|NaN|null)(?=$|[\s·,):])/.test(v))) { out.push(`shows "${v.slice(0, 60)}"`); break; }
  }
  const sw = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
  if (sw > W + 1) {
    const scrollsSideways = el => { for (let e = el.parentElement; e && e !== document.body; e = e.parentElement) { const s = getComputedStyle(e); if (/(auto|scroll|hidden|clip)/.test(s.overflowX)) return true; } return false; };
    const name = el => el.tagName.toLowerCase() + (el.id ? "#" + el.id : "") + (el.classList.length ? "." + [...el.classList].slice(0, 2).join(".") : "");
    const wide = [...document.body.querySelectorAll("*")].filter(el => { const r = el.getBoundingClientRect(); return r.width && r.right > W + 1 && !scrollsSideways(el); }).slice(0, 3).map(name);
    out.push(`page is ${sw}px wide on a ${W}px screen (${wide.join(", ") || "no single element found"})`);
  }
  for (const img of view.querySelectorAll("img")) {
    const src = img.currentSrc || img.src || "";
    if (src.startsWith(location.origin) && img.complete && img.naturalWidth === 0) out.push(`broken picture ${src.slice(location.origin.length)}`);
  }
  for (const f of view.querySelectorAll(".fig-frame.broken")) { const i = f.querySelector("img"); if (i && (i.src || "").startsWith(location.origin)) out.push(`picture shown as a gradient: ${i.src.slice(location.origin.length)}`); }
  if (route.startsWith("p-") && !route.includes("@")) {
    const p = window.HISTORY.people.find(x => x.id === route.slice(2));
    if (!p) out.push("no such person");
    else {
      const h = view.querySelector("h1");
      if (!h || !h.innerText.trim()) out.push("person page has no heading");
      else if (!h.innerText.replace(/\s+/g, " ").includes(p.n.split(" (")[0])) out.push(`heading is "${h.innerText.trim().slice(0, 60)}", expected ${p.n}`);
      // a person with a portrait or a chapter picture must show at least one picture of their own at the top
      const IMG = window.HISTORY.images || {}, ch = (window.HISTORY.chapters || {})[p.id];
      const own = !p.noimg && (IMG["pt-" + p.id] || (ch && IMG[ch.hero]));
      const top = view.querySelector(".ch-top img");
      if (own && !(top && top.complete && top.naturalWidth > 0)) out.push("person page has no picture at the top");
    }
  }
  return out;
}

// Wait until the screen has finished: no file still loading (a place page downloads its file first), no "Opening…" stub.
async function settle(page, busy) {
  for (let t = Date.now(); Date.now() - t < 5000;) {
    await page.evaluate(() => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))));
    if (busy.n === 0 && !(await page.evaluate(() => /^Opening…$/m.test((document.getElementById("view") || {}).innerText || "")))) break;
    await page.waitForTimeout(50);
  }
  await page.evaluate(() => Promise.race([
    Promise.all([...document.querySelectorAll("#view img")].filter(i => !i.complete && i.loading !== "lazy").map(i => new Promise(r => { i.onload = i.onerror = r; }))),
    new Promise(r => setTimeout(r, 1500))]));
}

async function runTheme(theme, routesFor) {
  const ctx = await openContext(theme);
  const page = await ctx.newPage();
  let current = "(load)", previous = "(load)";
  const busy = { n: 0 };
  page.on("request", () => busy.n++);
  for (const ev of ["requestfinished", "requestfailed"]) page.on(ev, () => { busy.n = Math.max(0, busy.n - 1); });
  page.on("pageerror", e => fail(theme, current, `JavaScript error (opened after ${previous}): ${e.message.split("\n")[0]}${process.env.SMOKE_STACK ? "\n" + e.stack : ""}`));
  page.on("console", m => { if (m.type() === "error" && !/Failed to load resource|net::ERR_FAILED|Failed to fetch/.test(m.text())) fail(theme, current, `console error: ${m.text().slice(0, 200)}`); });
  page.on("response", r => { if (r.url().startsWith(BASE) && r.status() >= 400) fail(theme, current, `missing file ${r.url().slice(BASE.length)} (${r.status()})`); });
  page.on("requestfailed", r => { if (r.url().startsWith(BASE)) fail(theme, current, `file did not load: ${r.url().slice(BASE.length)}`); });
  await page.goto(BASE + "index.html#world", { waitUntil: "load" });
  await page.evaluate(() => document.fonts && document.fonts.ready);
  await settle(page, busy);
  if (theme === "light") {
    await page.evaluate(() => window.__allChapters && window.__allChapters());   // chapter text is in ch/ files, loaded on demand
    const d = await page.evaluate(dataProblems);
    for (const p of d.out) fail("data", "data", p);
    for (const f of d.files) if (!/^(https?:|data:)/.test(f) && !fs.existsSync(path.join(ROOT, f))) fail("data", "pictures", `missing picture file ${f}`);
  }
  const routes = await routesFor(page);
  let n = 0;
  for (const r of routes) {
    previous = current; current = r;
    try {
      await page.evaluate(h => { if (location.hash === "#" + h) location.hash = "#world"; location.hash = "#" + h; }, r);
      await settle(page, busy);
      const probs = await page.evaluate(inspect, { route: r, W });
      for (const p of probs) fail(theme, r, p);
      if (probs.length && failures.length <= 40) await page.screenshot({ path: path.join(OUT, `${theme}-${r.replace(/[^a-z0-9@-]/gi, "_")}.png`) }).catch(() => {});
    } catch (e) { fail(theme, r, `could not open: ${e.message.split("\n")[0]}`); }
    n++;
  }
  await ctx.close();
  return n;
}

// The museum's data must hang together: every id points at something that exists, and every picture file is there.
function dataProblems() {
  const H = window.HISTORY, out = [];
  const P = new Set(H.people.map(p => p.id)), E = new Set(H.events.map(e => e.id)), C = new Set(Object.keys(H.countries)), IMG = H.images || {};
  for (const [name, list] of [["person", H.people], ["event", H.events], ["work", H.works || []], ["myth", H.myths || []]]) {
    const seen = new Set();
    for (const x of list) { if (!x.id) out.push(`a ${name} has no id: ${JSON.stringify(x).slice(0, 80)}`); else if (seen.has(x.id)) out.push(`${name} id "${x.id}" is used twice`); seen.add(x.id); }
  }
  for (const p of H.people) {
    if (!p.n) out.push(`person ${p.id} has no name`);
    if (!H.fields[p.f]) out.push(`person ${p.id} has an unknown field "${p.f}"`);
    for (const c of p.c || []) if (!C.has(c)) out.push(`person ${p.id} names an unknown country "${c}"`);
    if (typeof p.b !== "number" || (typeof p.d !== "number" && !p.alive)) out.push(`person ${p.id} has no birth or death year`);
  }
  for (const e of H.events) if (e.c && ![].concat(e.c).every(c => C.has(c))) out.push(`event ${e.id} names an unknown country "${e.c}"`);
  for (const [a, b] of H.connections || []) for (const id of [a, b]) if (!P.has(id)) out.push(`a connection names an unknown person "${id}"`);
  for (const f of H.facts || []) for (const l of f.links || []) { const [k, id] = l.split(":"); if ((k === "p" && !P.has(id)) || (k === "e" && !E.has(id))) out.push(`fact "${f.h.slice(0, 40)}" links to unknown ${l}`); }
  for (const [what, obj] of [["story", H.stories], ["fact sheet", H.sheets], ["chapter", H.chapters]]) for (const id of Object.keys(obj || {})) if (!P.has(id)) out.push(`${what} for unknown person "${id}"`);
  for (const [id, ch] of Object.entries(H.chapters || {})) {
    for (const k of ["hero", "portrait", "scene"]) if (ch[k] && !IMG[ch[k]]) out.push(`chapter ${id}: ${k} picture "${ch[k]}" is not in the app`);
    for (const s of ch.sections || []) if (s.img && !IMG[s.img]) out.push(`chapter ${id}: section picture "${s.img}" is not in the app`);
  }
  for (const c of H.chains || []) for (const st of c.steps || []) if (st.ev && !E.has(st.ev)) out.push(`chain ${c.id} names an unknown event "${st.ev}"`);
  for (const id of Object.keys((H.today && H.today.days) || {})) if (!P.has(id) && !E.has(id)) out.push(`Today has a day for unknown "${id}"`);
  const files = [...Object.values(IMG).map(i => i.src), ...Object.values(H.walkPics || {}).flatMap(w => [w.src, w.js].filter(Boolean))];
  return { out, files };
}

// Every screen of the app, read from the app's own data.
async function allRoutes(page) {
  const only = process.env.SMOKE_ONLY; if (only) return only.split(",");
  return page.evaluate(() => {
    const H = window.HISTORY, r = ["world", "timeline", "tm", "eras", "library", "people", "events", "places", "art", "walk", "near",
      "play", "talk", "today", "degrees", "race", "cards", "you", "whatif", "no-such-page"];
    for (const p of H.people) r.push("p-" + p.id);
    for (const e of H.events) r.push("e-" + e.id);
    for (const c of Object.keys(H.countries)) r.push("c-" + c);
    for (const e of H.eras || []) r.push("era-" + e.id);
    for (const p of H.people.filter(p => (H.chapters || {})[p.id]).slice(0, 3)) r.push("talk-" + p.id);
    r.push("talk-jesus", "talk-muhammad", "p-van-gogh@myths", "tm-1889", "tm-1505", "tm--44");
    for (const y of Object.keys(H.walks || {}).slice(0, 6)) r.push("walk-" + y);
    for (const pl of (H.places && H.places.list) || []) { r.push("place-" + pl.id); if (pl.guide) r.push("guide-" + pl.id); }
    return [...new Set(r)];
  });
}

// Listen: the "Listen to the story" button hands the chapter to the phone's voice (faked here, as in the app),
// the player sits above the tab bar inside the screen, and reading carries on while you look around.
async function listenCheck() {
  const ctx = await openContext("light");
  await ctx.addInitScript(() => { window.__sent = []; window.webkit = { messageHandlers: { listen: { postMessage(o) { window.__sent.push(o); } } } }; });
  const page = await ctx.newPage();
  page.on("pageerror", e => fail("light", "listen", `JavaScript error: ${e.message.split("\n")[0]}`));
  try {
    await page.goto(BASE + "index.html#p-van-gogh", { waitUntil: "load" });
    await page.waitForTimeout(400);
    const btn = await page.$("[data-listen]");
    if (!btn) { fail("light", "listen", "no Listen button on a person page with a chapter"); return; }
    await btn.click();
    const r = await page.evaluate(() => {
      const o = window.__sent.find(x => x.op === "read"), bar = document.getElementById("lsBar"), tabs = document.getElementById("tabs");
      if (!o) return ["pressing Listen sent nothing to the phone"];
      const out = [];
      if (o.parts.length < 10) out.push(`only ${o.parts.length} paragraphs to read`);
      if (o.parts.some(t => /undefined|\[object|<\w/.test(t))) out.push("a paragraph to read contains a template slip or markup");
      window.__listen.onEvent({ t: "part", id: o.id, i: 2 });
      if (!document.querySelector("#view .ls-cur")) out.push("the paragraph being read is not marked");
      if (!bar || bar.hidden) out.push("the player did not appear");
      else { const b = bar.getBoundingClientRect(), t = tabs.getBoundingClientRect();
        if (b.left < 0 || b.right > innerWidth || b.bottom > t.top) out.push("the player is not inside the screen above the tab bar"); }
      return out;
    });
    for (const p of r) fail("light", "listen", p);
    await page.evaluate(() => { location.hash = "#world"; });
    await page.waitForTimeout(300);
    const still = await page.evaluate(() => window.__listen.state().mode === "read" && !document.getElementById("lsBar").hidden);
    if (!still) fail("light", "listen", "reading stopped when another screen opened");
    await page.click('#lsBar [data-ls="close"]');
    if (!(await page.evaluate(() => window.__sent.some(x => x.op === "stop") && document.getElementById("lsBar").hidden))) fail("light", "listen", "closing the player did not stop the voice");
  } catch (e) { fail("light", "listen", `could not test Listen: ${e.message.split("\n")[0]}`); }
  finally { await ctx.close(); }
}

// My museum: the heart on a person's page and on a Gallery work, the Saved shelf and Continue reading in Library,
// all kept on the phone; a broken saved list must never break the Library.
async function myMuseumCheck(theme) {
  const ctx = await openContext(theme);
  const page = await ctx.newPage();
  const bad = why => fail(theme, "my-museum", why);
  page.on("pageerror", e => bad(`JavaScript error: ${e.message.split("\n")[0]}`));
  const go = async h => { await page.evaluate(x => { location.hash = x; }, h); await page.waitForTimeout(500); };
  try {
    await page.goto(BASE + "index.html#library", { waitUntil: "load" });
    await page.waitForTimeout(400);
    if (!(await page.$(".sh-empty"))) bad("an empty My museum does not say how to save");
    await go("#p-van-gogh");
    const heart = '[data-save="p:van-gogh"]';
    if (!(await page.$(heart))) { bad("no heart on a person's page"); return; }
    await page.click(heart);
    if ((await page.getAttribute(heart, "aria-pressed")) !== "true") bad("the heart did not fill when tapped");
    await go("#p-van-gogh@myths");
    await go("#art");
    await page.waitForSelector("#galGrid button", { timeout: 8000 });
    await page.click("#galGrid button");
    await page.waitForTimeout(400);
    await page.click("#av [data-save]");
    if ((await page.getAttribute("#av [data-save]", "aria-pressed")) !== "true") bad("the heart in the Gallery viewer did not fill");
    await page.click("#av [data-avx]");
    await page.waitForTimeout(300);
    await go("#library");
    const r = await page.evaluate(() => ({ people: document.querySelectorAll('.shelf a.sh-t[href="#p-van-gogh"]').length,
      works: document.querySelectorAll(".shelf [data-shelf-art]").length, resume: (document.querySelector(".resume") || {}).getAttribute ? document.querySelector(".resume").getAttribute("href") : null,
      wide: document.documentElement.scrollWidth > innerWidth }));
    if (r.people !== 1) bad("the saved person is not on the shelf");
    if (r.works !== 1) bad("the saved work is not on the shelf");
    if (r.resume !== "#p-van-gogh@myths") bad(`Continue reading points to ${r.resume}, not the section that was open`);
    if (r.wide) bad("the Library is wider than the phone with a full shelf");
    await page.click(".shelf [data-shelf-art]");
    await page.waitForTimeout(300);
    if (await page.evaluate(() => document.getElementById("av").hidden)) bad("a saved work does not open from the shelf");
    await page.click("#av [data-avx]");
    await page.waitForTimeout(300);
    await page.evaluate(() => { localStorage.setItem("ctm-saved", "{"); localStorage.setItem("ctm-resume", '{"id":"nobody"}'); location.hash = "#library"; });
    await page.reload({ waitUntil: "load" });
    await page.waitForTimeout(400);
    if (!(await page.$(".sh-empty"))) bad("a damaged saved list does not fall back to an empty shelf");
  } catch (e) { bad(`could not test My museum: ${e.message.split("\n")[0]}`); }
  finally { await ctx.close(); }
}

const t0 = Date.now();
const counts = await Promise.all(["light", "dark"].map(t => runTheme(t, allRoutes)));
if (!process.env.SMOKE_ONLY) { await listenCheck(); console.log("Listen checked: read aloud, the player, and stopping.");
  for (const t of ["light", "dark"]) await myMuseumCheck(t); console.log("My museum checked: hearts, the shelf, Continue reading."); }
await browser.close(); server.close();
const secs = ((Date.now() - t0) / 1000).toFixed(0);
console.log(`Opened ${counts[0]} screens in light and ${counts[1]} in dark in ${secs} s.`);
fs.writeFileSync(path.join(OUT, "smoke.json"), JSON.stringify(failures, null, 1));
if (failures.length) {
  const seen = new Set();
  for (const f of failures) { const k = f.route + f.why; if (seen.has(k)) continue; seen.add(k); console.log(`::error title=${f.route} (${f.theme})::${f.why}`); }
  console.log(`\n${seen.size} problem(s). Screenshots of the first ones are in the ci-output artifact.`);
  process.exit(1);
}
console.log("Every screen opened cleanly.");
