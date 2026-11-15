"""Writes online/places/met.json (The Met's place page and its one-hour route) (pictures load from The Met's own server, so the app stays small).

Facts per work (title, artist, date, gallery, credit, picture) come from The Met's open-access records in
tools/guides/out/met.json (gather_guide.py, CC0). The stories below are written for this app from the
sources listed in the guide; nothing is copied from the Met's labels, videos or reviews.
Run after a "Gather guide" run:  python3 tools/guides/make_met.py
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
REC = json.loads((ROOT / "tools" / "guides" / "out" / "met.json").read_text())["works"]
W = lambda t: "https://en.wikipedia.org/wiki/" + t

# key: (short artist line, people, story, look for). Order = walking order, floor 1 then floor 2.
STOPS = [
 ("kouros", "Greek, Attic", [],
  "One of the earliest life-size marble statues of a young man carved in Athens, around 590 BC. The stiff stride and fists come from Egyptian statues the Greeks had seen; within a century Greek sculptors would make marble look like it breathes.",
  "the left foot forward, and the braided hair like a wig"),
 ("henry-armor", "Made in Greenwich, England", ["henry-viii"],
  "Henry VIII ordered this armour from his own workshop at Greenwich for his last campaign, the siege of Boulogne in 1544. He was over fifty and heavy by then, and the armour was made to measure. It tells you his size better than any portrait.",
  "how wide the waist is, and the king's initials worked into the decoration"),
 ("dendur", "Egyptian, Roman period", ["augustus", "cleopatra"],
  "A small temple built in Nubia, on the Nile, in the years after Rome took Egypt from Cleopatra, and finished by about AD 10. On its walls the Roman emperor Augustus is carved as a pharaoh, making offerings to Egyptian gods. Egypt gave it to the United States in 1965, thanks for help in saving monuments from the floods of the Aswan High Dam.",
  "Augustus in a pharaoh's crown, and names scratched into the stone by 19th-century travellers"),
 ("washington", "Emanuel Leutze", ["washington"],
  "Washington's surprise crossing of the icy Delaware River on Christmas night, 1776, before he won at Trenton. Leutze painted it 75 years later in Germany, using German models. Some details are wrong: the Stars and Stripes did not exist until 1777, and nobody would stand up in a rowing boat in ice.",
  "the flag that had not been invented yet"),
 ("madame-x", "John Singer Sargent", [],
  "Sargent's portrait of a Paris society beauty, Virginie Gautreau, caused a scandal at the 1884 Salon. In the first version one strap had slipped from her shoulder. He painted it back up, but his career in Paris was over and he moved to London. He sold it to the Met in 1916, calling it the best thing he had done.",
  "the pale skin against the black dress, and the strap, now firmly in place"),
 ("card-players", "Paul Cézanne", ["cezanne"],
  "Farm workers from around Cézanne's family estate near Aix-en-Provence sat for him playing cards. He painted the scene five times in the early 1890s. Nobody talks, nobody wins: it is a still life made of people.",
  "the pipes on the wall, and how nobody looks at anybody"),
 ("straw-hat", "Vincent van Gogh", ["van-gogh"],
  "Painted in Paris in 1887, when Van Gogh had just discovered bright colour and short brushstrokes. Canvas cost money, so he painted this on the back of an older picture, The Potato Peeler, from his dark Dutch years. Both sides survive.",
  "the strokes of the background running in different directions"),
 ("cypresses", "Vincent van Gogh", ["van-gogh"],
  "In the summer of 1889, at the asylum in Saint-Rémy, Van Gogh painted this field outdoors, with the wind in it. He wrote that cypresses were as beautiful as Egyptian obelisks. He later made two copies in the studio; this is the one he painted on the spot.",
  "the thick paint of the clouds, still standing up from the canvas"),
 ("dance-class", "Edgar Degas", [],
  "Degas spent years in the rehearsal rooms of the Paris Opera. This class is not a snapshot: he built it in the studio from many drawings. The old ballet master in the middle was a real teacher, Jules Perrot.",
  "the dancer scratching her back, and the little dog"),
 ("pitcher", "Johannes Vermeer", ["vermeer"],
  "Only about 36 paintings by Vermeer survive, and the Met owns five, more than any other museum. In this one a young woman opens a window with one hand and holds a pitcher with the other. Nothing happens, and the light does everything.",
  "the blue of the cloth, and the map on the wall"),
 ("aristotle", "Rembrandt", ["rembrandt", "aristotle", "alexander"],
  "A Sicilian nobleman ordered a philosopher from Rembrandt in 1653. Rembrandt painted Aristotle in the clothes of his own day, resting a hand on a bust of the poet Homer. On his gold chain hangs a medallion of Alexander the Great, the pupil he once taught. Fame, wisdom and money in one picture.",
  "Alexander's face on the medallion"),
 ("rembrandt-self", "Rembrandt", ["rembrandt"],
  "Rembrandt painted himself about 40 times, in youth and in success. This one is from 1660, four years after his bankruptcy, when his house and collection had been sold. He did not flatter himself.",
  "the thick paint on the nose and forehead"),
 ("pareja", "Velázquez", [],
  "Velázquez painted his assistant, Juan de Pareja, an enslaved man of Moorish descent, in Rome in 1650. The portrait was shown at the Pantheon and praised by all of Rome. That same year Velázquez signed papers to free him. Pareja became a painter in his own right.",
  "the eyes, which meet yours"),
 ("socrates", "Jacques-Louis David", ["socrates", "plato"],
  "Athens sentenced Socrates to death in 399 BC. David shows him reaching for the cup of hemlock while still teaching. Plato sits at the foot of the bed, though Plato wrote that he was ill and not there that day, and David made him an old man.",
  "Plato, eyes shut, at the end of the bed"),
 ("harvesters", "Pieter Bruegel the Elder", [],
  "Painted in 1565 for a merchant in Antwerp, as one of six pictures of the times of the year. Five survive. Peasants cut wheat and stop for lunch under a pear tree, while the land runs away to the sea behind them.",
  "the man asleep under the tree"),
 ("toledo", "El Greco", [],
  "One of only two landscapes El Greco painted, of the Spanish city where he lived. It is not a faithful view: he moved the cathedral to where he wanted it. Storm light makes it feel like a vision.",
  "the cathedral tower, moved for the picture"),
]
MAX = 15
FLOOR = lambda g: 1 if str(g)[:1] in "1345" else 2

def main():
    stops = []
    for key, by, people, story, look in STOPS:
        r = REC.get(key)
        if not r or not r.get("GalleryNumber") or len(stops) >= MAX:
            continue
        pic = {"u": r["primaryImageSmall"], "w": r.get("w") or 4, "h": r.get("h") or 3, "page": r["objectURL"],
               "cr": "The Metropolitan Museum of Art, Open Access", "lic": "Public domain (CC0)"} if r.get("isPublicDomain") and r.get("primaryImageSmall") else None
        stops.append({"floor": FLOOR(r["GalleryNumber"]), "gal": r["GalleryNumber"], "met": r["objectID"], "pic": pic,
                      "t": r["title"].split(" (")[0], "by": by, "date": r["objectDate"],
                      "story": story, "look": look, "people": people, "u": r["objectURL"]})
    stops.sort(key=lambda s: s["floor"])  # stable: keeps the walking order inside a floor
    pl = {"id": "met", "n": "The Metropolitan Museum of Art", "short": "The Met", "kind": "museum", "where": "New York",
          "lat": 40.7794, "lon": -73.9632, "r": 300, "rank": 3, "checked": "15 November 2026",
          "blurb": "The largest art museum in the Americas, with about two million works from five thousand years. You cannot see it in a day, so here is one good hour.",
          "guide": {"n": "The Met in one hour", "mins": 60,
                    "intro": f"{len(stops)} works that people cross the world to see, in walking order: ground floor first, then up the stairs. About three minutes each, with time to walk. Tap Next stop as you go.",
                    "note": "Gallery numbers come from The Met's open data, checked 15 November 2026. Rooms change and works travel: if a work is not where we say, a guard will know where it went.",
                    "src": [{"n": "The Met Collection API, Open Access (CC0)", "u": "https://metmuseum.github.io/"},
                            {"n": "The Met: Heilbrunn Timeline of Art History", "u": "https://www.metmuseum.org/toah/"},
                            {"n": "Wikipedia articles on each work", "u": W("Metropolitan_Museum_of_Art")}],
                    "stops": stops},
          "facts": [
              {"h": "Founded before it had any art", "when": "1870", "lab": "verified",
               "t": "A group of New York businessmen and artists founded the Met in 1870 with no building and no collection. It opened on Fifth Avenue in Central Park in 1880, and the building has grown around that first one ever since. Parts of the old brick front can still be seen inside, in the Lehman wing.",
               "src": [{"n": "The Met: history of the museum", "u": "https://www.metmuseum.org/about-the-met/history"}, {"n": "Wikipedia: Metropolitan Museum of Art", "u": W("Metropolitan_Museum_of_Art")}]},
              {"h": "Free pictures for everyone", "when": "2017", "lab": "verified",
               "t": "In 2017 the Met put more than 375,000 pictures of public-domain works online under a licence that lets anyone use them for anything. The pictures in this guide come from that gift.",
               "src": [{"n": "The Met: Open Access", "u": "https://www.metmuseum.org/hubs/open-access"}, {"n": "The Met Collection API", "u": "https://metmuseum.github.io/"}]}]}
    out = ROOT / "online" / "places" / "met.json"
    out.write_text(json.dumps(pl, ensure_ascii=False, indent=1) + "\n")
    print(len(stops), "stops:", [(s["floor"], s["gal"], s["t"][:24]) for s in stops])

if __name__ == "__main__":
    main()
