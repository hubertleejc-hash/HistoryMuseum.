"""Writes the one-hour routes for the Louvre and the British Museum into online/places/louvre.json and
british-museum.json (keeping their fact cards). Pictures: free-licence photos on Wikimedia Commons found by
gather_guide.py --extra (tools/guides/out/extra.json); Louvre room numbers from collections.louvre.fr when found.
British Museum room numbers are from the museum's floor plan and object pages; rooms change, so the guide says so.
The stories are ours. Run:  python3 tools/guides/make_lv_bm.py"""
import json, re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
EX = json.loads((ROOT / "tools" / "guides" / "out" / "extra.json").read_text()) if (ROOT / "tools" / "guides" / "out" / "extra.json").exists() else {"commons": {}, "louvre": {}}
W = lambda t: {"n": "Wikipedia: " + t.replace("_", " "), "u": "https://en.wikipedia.org/wiki/" + t}

# key, floor, room (fallback), title, by, date, people, story, look, wiki
LV = [
 ("lamassu", 0, "229", "Winged bulls of Khorsabad", "Assyrian", "c. 713 to 706 BC", [],
  "These human-headed winged bulls guarded a gate of King Sargon II's palace at Khorsabad, in today's Iraq. Each weighs about 30 tonnes. Count the legs: five, so they look right both from the front and from the side.", "the fifth leg", "Lamassu"),
 ("hammurabi", 0, "227", "The Code of Hammurabi", "Babylonian", "c. 1754 BC", [],
  "King Hammurabi of Babylon had 282 laws carved on this basalt pillar, under a picture of himself before the sun god. 'An eye for an eye' is here, about 1,000 years before it appears in the Bible. French archaeologists found it in Susa, Iran, in 1901.", "the king and the god at the top", "Code_of_Hammurabi"),
 ("venus", 0, "345", "Venus de Milo", "Greek", "c. 150 to 125 BC", [],
  "A farmer found her on the Greek island of Milos in 1820, and the French ambassador bought her for the king. Her arms were never found. She is probably Aphrodite, though some think she is the sea goddess Amphitrite.", "the twist of the body, and the line where the two blocks of marble meet", "Venus_de_Milo"),
 ("slave", 0, "403", "Dying Slave", "Michelangelo", "1513 to 1516", ["michelangelo"],
  "Carved for the tomb of Pope Julius II, which shrank again and again over 40 years. Michelangelo gave this figure and its pair, the Rebellious Slave, to a friend. Nobody agrees whether he is dying, sleeping or waking.", "the unfinished monkey behind his leg", "Dying_Slave"),
 ("victory", 1, "703", "Winged Victory of Samothrace", "Greek", "c. 190 BC", [],
  "Nike, goddess of victory, lands on the prow of a warship, her dress blown against her by the sea wind. She was found in pieces on the island of Samothrace in 1863. Her head and arms are lost; a hand found later is in a case nearby.", "the wind in the dress", "Winged_Victory_of_Samothrace"),
 ("mona-lisa", 1, "711", "Mona Lisa", "Leonardo da Vinci", "c. 1503 to 1519", ["leonardo"],
  "Leonardo began the portrait of Lisa Gherardini, a Florentine silk merchant's wife, in 1503, and was still working on it when he died in France. It is smaller than people expect, 77 by 53 centimetres. Turn around afterwards: the largest painting in the Louvre is behind you.", "the two different landscapes on either side of her", "Mona_Lisa"),
 ("cana", 1, "711", "The Wedding at Cana", "Paolo Veronese", "1562 to 1563", ["napoleon"],
  "Veronese filled ten metres of canvas with about 130 guests. Tradition says the musicians in front are Veronese himself, Titian and other Venetian painters. Napoleon's soldiers cut it from a Venetian monastery in 1797. It was never sent back.", "the musicians in the middle", "The_Wedding_at_Cana"),
 ("coronation", 1, "702", "The Coronation of Napoleon", "Jacques-Louis David", "1805 to 1807", ["napoleon"],
  "David shows Napoleon crowning Josephine in Notre-Dame in 1804. He changed things to please him: Napoleon's mother, who stayed away, sits in a place of honour.", "Madame Mère in the box, who was not there", "The_Coronation_of_Napoleon"),
 ("odalisque", 1, "702", "Grande Odalisque", "Jean-Auguste-Dominique Ingres", "1814", [],
  "Critics laughed when it was shown in 1819: her back has two or three extra vertebrae. Ingres made her longer on purpose, for the line.", "how long the back is", "Grande_Odalisque"),
 ("liberty", 1, "700", "Liberty Leading the People", "Eugène Delacroix", "1830", ["victor-hugo"],
  "Delacroix painted the July Revolution of 1830, three days of fighting in Paris, the same year. The boy with two pistols may have helped inspire Victor Hugo's Gavroche in Les Misérables, though nobody can be sure.", "the towers of Notre-Dame in the smoke", "Liberty_Leading_the_People"),
 ("medusa", 1, "700", "The Raft of the Medusa", "Théodore Géricault", "1818 to 1819", [],
  "In 1816 a French navy ship ran aground off Africa, and 147 people were set adrift on a raft; 15 survived. Géricault interviewed survivors, studied corpses in a hospital and built a model of the raft to paint it.", "the tiny ship on the horizon", "The_Raft_of_the_Medusa"),
 ("scribe", 1, "635", "The Seated Scribe", "Egyptian", "c. 2600 to 2350 BC", [],
  "A painted limestone scribe with eyes of rock crystal set in copper, so lifelike they seem to follow you. He was found at Saqqara in 1850. Nobody knows his name.", "the eyes, from the side", "Seated_Scribe"),
]
BM = [
 ("enlightenment", 0, "1", "The Enlightenment Gallery", "", "Built 1820s", ["george-iii"],
  "This long room was built in the 1820s to hold the library of George III, which his son gave to the nation. Today it shows how 18th-century collectors tried to sort the whole world into cases.", "the cases of shells, coins and fossils, sorted the old way", "British_Museum"),
 ("rosetta", 0, "4", "The Rosetta Stone", "Egyptian", "196 BC", ["napoleon"],
  "The same decree written three ways: in hieroglyphs, in everyday Egyptian script and in Greek. Napoleon's soldiers found it in 1799; the British took it in 1801. Champollion used it to read hieroglyphs in 1822.", "the three kinds of writing, top to bottom", "Rosetta_Stone"),
 ("memnon", 0, "4", "Colossal bust of Ramesses II", "Egyptian", "c. 1250 BC", [],
  "The 'Younger Memnon' came from Ramesses II's temple at Thebes. The hole in his right chest is said to have been drilled by Napoleon's men trying to move him. The poet Shelley wrote Ozymandias as it was on its way to London.", "the hole on his right side", "Younger_Memnon"),
 ("lion", 0, "10", "Lion hunt of Ashurbanipal", "Assyrian", "c. 645 to 635 BC", [],
  "Carved panels from the palace at Nineveh show King Ashurbanipal killing lions released from cages in an arena. The dying lions are some of the most moving animals in ancient art.", "the wounded lioness dragging her back legs", "Lion_Hunt_of_Ashurbanipal"),
 ("parthenon", 0, "18", "Parthenon sculptures", "Greek", "447 to 432 BC", ["socrates"],
  "About half of the surviving sculpture of the Parthenon, removed by Lord Elgin's agents from 1801 and bought by Parliament in 1816. Greece asks for them back, and the Acropolis Museum keeps space for them.", "the horse of the moon goddess, tired at the end of the night", "Elgin_Marbles"),
 ("hoa", 0, "24", "Hoa Hakananai'a", "Rapa Nui (Easter Island)", "c. 1000 to 1200", [],
  "A moai, one of the great stone ancestor figures of Rapa Nui, taken by a British ship's crew in 1868. Islanders have asked for him to come home. Look at his back: later carvings show the island's birdman ceremony.", "the carvings on his back", "Hoa_Hakananai'a"),
 ("ur", 1, "56", "The Royal Game of Ur", "Sumerian", "c. 2600 to 2400 BC", [],
  "One of the oldest board games known, found in a royal tomb at Ur in Iraq. Its rules were worked out from a cuneiform tablet written 2,000 years later, and people still play it.", "the rosettes, which are the lucky squares", "Royal_Game_of_Ur"),
 ("mummy", 1, "62", "Egyptian mummies", "Egyptian", "c. 3500 BC to AD 300", [],
  "The Egyptian death rooms show mummies, coffins and the tools of embalming. Scans have let the museum see inside without unwrapping anyone.", "the painted faces on the coffin lids", "Mummy"),
 ("portland", 1, "70", "The Portland Vase", "Roman", "c. AD 1 to 25", ["augustus"],
  "A Roman cameo-glass vase from the time of Augustus, white figures cut from a layer over dark blue glass. In 1845 a visitor smashed it into almost 200 pieces; it has been put back together three times.", "the thin white glass of the figures", "Portland_Vase"),
 ("sutton", 1, "41", "Sutton Hoo helmet", "Anglo-Saxon", "early 600s", [],
  "In 1939 an amateur archaeologist, Basil Brown, dug out the imprint of a 27-metre ship buried in Suffolk, probably for the East Anglian king Rædwald. The helmet was found crushed into hundreds of pieces.", "the dragon flying across the face", "Sutton_Hoo_helmet"),
 ("lewis", 1, "40", "Lewis Chessmen", "Norse", "c. 1150 to 1200", [],
  "Found on the Isle of Lewis in Scotland in 1831, carved mostly from walrus ivory, probably in Norway. The rook-warriors bite their shields in a battle rage.", "the warriors biting their shields", "Lewis_chessmen"),
]


def stops(lst, louvre):
    out = []
    for key, floor, room, t, by, date, people, story, look, wiki in lst:
        c = EX["commons"].get(("lv-" if louvre else "bm-") + key) or {}
        pic = None if c.get("rejected") else c.get("pic")
        u = "https://en.wikipedia.org/wiki/" + wiki
        if louvre:
            rec = next((r for r in EX["louvre"].get(key, []) if r.get("room")), None)
            if rec:
                m = re.search(r"\d{3}", str(rec["room"]))
                room = m.group(0) if m else room
                u = rec["url"]
        s = {"floor": floor, "gal": room, "t": t, "by": by, "date": date, "story": story, "look": look, "people": people, "u": u}
        if pic:
            s["pic"] = {k: pic[k] for k in ("u", "w", "h", "page", "lic", "cr")}
        out.append(s)
    return out


def write(id, guide):
    p = ROOT / "online" / "places" / (id + ".json")
    pl = json.loads(p.read_text())
    pl["guide"] = guide
    pl["checked"] = "15 November 2026"
    p.write_text(json.dumps(pl, ensure_ascii=False, indent=1) + "\n")
    print(id, len(guide["stops"]), "stops,", sum(1 for s in guide["stops"] if s.get("pic")), "with pictures")


write("louvre", {"n": "The Louvre in one hour", "mins": 60, "room": "Room",
    "floors": {"0": "Level 0", "1": "Level 1"},
    "intro": "Twelve works in walking order, starting with Mesopotamia and Greece on level 0, then up the Daru staircase to the Winged Victory and the great paintings. The Mona Lisa room gets crowded; go early or late.",
    "note": "Room numbers are the Louvre's usual rooms for these works; we could not check them automatically, and rooms close and works move. The Louvre's app and the guards know where things are today.",
    "src": [{"n": "Louvre collections database", "u": "https://collections.louvre.fr/en/"}, {"n": "Musée du Louvre: plan your visit", "u": "https://www.louvre.fr/en"}, W("Louvre")],
    "stops": stops(LV, True)})
write("british-museum", {"n": "The British Museum in one hour", "mins": 60, "room": "Room",
    "floors": {"0": "Ground floor", "1": "Upper floor"},
    "intro": "Eleven objects in walking order: the ground-floor galleries of Egypt, Assyria and Greece, then the upper floor. Entry is free.",
    "note": "Room numbers are the British Museum's usual rooms for these objects; we could not check them automatically, and rooms close for repairs and objects travel. Ask at the information desk in the Great Court.",
    "src": [{"n": "British Museum: collection online", "u": "https://www.britishmuseum.org/collection"}, {"n": "British Museum: visit", "u": "https://www.britishmuseum.org/visit"}, W("British_Museum")],
    "stops": stops(BM, False)})
