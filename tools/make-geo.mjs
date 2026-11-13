// Makes app/geo.js: the world's coastlines as one SVG path, plus a map point for each Hall (country).
// Source: Natural Earth 1:110m via the world-atlas package (public domain).
// Run once:  npm i world-atlas@2.0.2 topojson-client@3.1.0 topojson-simplify@3.0.3 d3-geo@3.1.1
//            node tools/make-geo.mjs > app/geo.js
import fs from 'fs';
import { merge } from 'topojson-client';
import { presimplify, simplify, quantile } from 'topojson-simplify';
import { geoPath, geoNaturalEarth1 } from 'd3-geo';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const topo = JSON.parse(fs.readFileSync(require.resolve('world-atlas/countries-110m.json')));
const pt = presimplify(topo);
const st = simplify(pt, quantile(pt, 0.3));
const geoms = st.objects.countries.geometries.filter(g => g.properties.name !== 'Antarctica');
const land = merge(st, geoms);
const W = 1000, H = 520;
const proj = geoNaturalEarth1().fitExtent([[4, 4], [W - 4, H - 4]], land);
const path = geoPath(proj).digits(1);
// Label points (longitude, latitude) for each Hall: roughly the heart of the country today.
const LL = {
  egypt: [30.8, 26.8], greece: [22, 39.3], italy: [12.5, 42.8], china: [104, 34], mongolia: [103, 46.8],
  japan: [138, 36.5], india: [79, 22], malaysia: [102, 4], france: [2.5, 46.6], uk: [-1.5, 52.5],
  ireland: [-8, 53.2], germany: [10.4, 51.1], austria: [14.5, 47.5], netherlands: [5.5, 52.2],
  spain: [-3.7, 40.2], portugal: [-8.2, 39.6], poland: [19.4, 52.1], hungary: [19.5, 47.2],
  czechia: [15.5, 49.8], croatia: [16, 45.3], denmark: [9.3, 56], sweden: [15.5, 60.5],
  norway: [9, 61], russia: [40, 56], usa: [-98, 39], mexico: [-102, 23.5], morocco: [-6.5, 31.8],
  iraq: [43.7, 33.2], turkey: [35.2, 39],
  // Jerusalem and Mecca, for the faith chapters
  'israel-palestine': [35.22, 31.78], arabia: [39.83, 21.42]
};
const pts = {};
for (const [id, ll] of Object.entries(LL)) { const [x, y] = proj(ll); pts[id] = [Math.round(x), Math.round(y)]; }
process.stdout.write('/* World coastlines (Natural Earth 1:110m, public domain), projected for the World map. Made by tools/make-geo.mjs. */\n' +
  'window.HISTORY.geo = ' + JSON.stringify({ w: W, h: H, land: path(land), pts }) + ';\n');
