# Contemporaries: a pocket history museum

Who shared the world? A history app for iPhone and iPad (including the folding iPhone Duo).
Long chapters with real public-domain paintings, a timeline of 169 people, Time Machine, Walk in,
games, and myths labelled as myths. Everything works offline. Talk, the AI guide and
"Tell me more" are written by Claude, so they open the online museum instead.

## Install on your iPhone or iPad (no Xcode needed)

GitHub builds the app every time something changes. You install it with **Sideloadly** and
your normal (free) Apple ID.

1. On your Mac, install **Sideloadly** from sideloadly.io.
2. Download the app: on this repo's page, click **Releases** > **Latest app build** > **Contemporaries.ipa**.
3. Plug the iPhone or iPad into the Mac with a cable. Unlock it and tap **Trust** if it asks.
4. Open Sideloadly. Drag **Contemporaries.ipa** onto it, type your Apple ID email, and press **Start**.
   Type your Apple ID password if it asks.
5. On the iPhone: **Settings > General > VPN & Device Management** > tap your Apple ID > **Trust**.
6. If iOS asks for **Developer Mode**: **Settings > Privacy & Security > Developer Mode** > On, then restart.
7. Open **Contemporaries**.

Good to know:
- With a free Apple ID, the app stops opening after **7 days**. Repeat steps 3 and 4 to renew it.
  Your settings in the app are kept.
- A free Apple ID can have **3** sideloaded apps at a time (Hearth / Countertop Cook counts as one).

## Screenshots

Each change also runs the app in Apple's simulators and takes screenshots:
- iPhone Duo, closed, open and half open: the **ci-results-duo** branch
- iPhone and iPad: the **ci-results** branch

## How it is built

| Path | What |
| --- | --- |
| `app/app.src.html` | The whole museum: HTML, CSS and JavaScript. |
| `app/data.js`, `content.js`, `deep.js`, `chapters.js` | People, events, works, myths, stories and the long chapters. |
| `app/img/` | 20 public-domain pictures; `manifest.json` has each one's title, artist, date, collection and licence. |
| `app/art/` | The Gallery's collection: `catalog.json` (every work with its museum, credit and licence), `t/` and `f/` (thumbnail and full picture of works inside the app), `m/` (small tiles of the Online wing, whose large picture loads from the museum). Gathered by `tools/art/gather.py`. |
| `tools/art/` | The art gatherer. Run **Actions > Gather art > Run workflow** to add more works: it only adds, never removes. `overrides.json` hides a work by id (`deny`). |
| `app/fonts/` | Fraunces, Inter and IBM Plex Mono (SIL Open Font License), so the app needs no internet. |
| `app/build.py` | Builds `app/index.html` (web page) and `ios/HistoryMuseum/Web/index.html` (app page, pictures and fonts built in). |
| `app/geo.js` | World coastlines and a map point for each Hall (Natural Earth, public domain). Remake with `tools/make-geo.mjs`. |
| `ios/HistoryMuseum/` | The iPhone/iPad app: SwiftUI with a web view that shows the museum page. |
| `project.yml` | XcodeGen spec for the Xcode project. |
| `.github/workflows/build-ipa.yml` | Builds the unsigned `Contemporaries.ipa` and attaches it to the latest release. |
| `.github/workflows/screenshots.yml` + `ci/` | Simulator screenshots on iPhone Duo, iPhone and iPad. |

Build locally (on a Mac with Xcode): `python3 app/build.py && brew install xcodegen && xcodegen generate`.

Work on this project is planned by Claude Sonnet, reviewed by Claude Fable and built by Claude Opus.
