"""Adds the longer routes (2 hours, 3 hours, a half day) to the museum guides in online/places/<id>.json.

Each guide keeps "stops" (the one-hour route, read by older versions of the app) and gains "tour": every stop
of the half day in walking order, each with "tier", the shortest route it belongs to (60, 120, 180 or 270
minutes). A longer route keeps every stop of the shorter ones. "routes" holds each length's name and intro.

The Met: titles, dates, gallery numbers and pictures come from The Met's open-access records
(tools/guides/out/met.json, gathered on GitHub Actions). A work with no gallery number is not on view and is
left out. Louvre and British Museum: pictures from Wikimedia Commons (tools/guides/out/extra.json, free licences
only); room numbers are where the works usually are and show as "Usually room N". Where we are not sure of the
room, the stop shows only the floor. The stories are written for this app; nothing is copied from labels.
Plan by Sonnet, fact review by Fable (see the pull request). Run:  python3 tools/guides/make_routes.py
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "tools" / "guides" / "out"
# The Met's API records (with pictures) where the API answered, else the Met's open-access CSV (facts, no picture)
REC = {**json.loads((OUT / "met-csv.json").read_text())["works"], **json.loads((OUT / "met.json").read_text())["works"]}
EX = json.loads((OUT / "extra.json").read_text())
WIKI = "https://en.wikipedia.org/wiki/"
TIERS = (60, 120, 180, 270)

# ---------- The Met ----------
# (tier, key, floor, by, people, story, look). Tier 60 entries name an existing one-hour stop by its title.
MET = [
 (60, "Marble statue of a kouros"),
 (270, "boscoreale", 1, "Roman", [],
  "A bedroom from a country villa at Boscoreale, near Pompeii, painted around 50 to 40 BC and buried by Vesuvius in AD 79. Its walls are painted with columns, gateways and whole townscapes that open the small room up like a stage set. It came to the Met in 1903.",
  "the painted city views, and the real window that sits among the fake ones"),
 (180, "monteleone", 1, "Etruscan", [],
  "A ceremonial bronze chariot, made around 530 BC and found in a tomb near Monteleone di Spoleto in Umbria in 1902. Its three bronze panels tell the story of the Greek hero Achilles. The Etruscans who ruled central Italy before Rome loved Greek stories.",
  "Achilles taking his new armour from his mother Thetis, on the front panel"),
 (270, "idia", 1, "Edo peoples, Court of Benin", [],
  "An ivory pendant mask of Idia, mother of Oba Esigie, who ruled the kingdom of Benin in today's Nigeria in the early 1500s. She raised an army for her son and was the first to hold the title of Queen Mother. It left Benin when British forces sacked Benin City in 1897.",
  "the tiny heads of Portuguese traders in her crown"),
 (180, "perseus", 1, "Antonio Canova", ["napoleon"],
  "Canova carved a Perseus holding up Medusa's head on his own, and the Pope bought it in 1802 to stand where the famous Apollo Belvedere had been, before Napoleon took it to Paris. This is Canova's second version, made for a Polish countess.",
  "Medusa's face: beautiful, not a monster"),
 (180, "ugolino", 1, "Jean-Baptiste Carpeaux", ["dante"],
  "In Dante's Inferno, Count Ugolino is locked in a tower in Pisa with his sons and grandsons to starve. Carpeaux made the group in Rome in the 1860s: the father bites his hands in despair while the children beg him to eat them.",
  "Ugolino's feet, clenched as tight as his hands"),
 (120, "studiolo", 1, "Designed by Francesco di Giorgio Martini", [],
  "A tiny study made for Duke Federico da Montefeltro in his palace at Gubbio, about 1478. The walls are wood inlay that tricks the eye: cupboards with doors half open, books, a lute, armour, all flat. It is the Renaissance idea of a learned man, made into a room.",
  "the cupboard doors that seem to stand open, and the bench that seems to fold"),
 (120, "clifford", 1, "Made in the royal workshops at Greenwich", ["elizabeth-i"],
  "George Clifford, Earl of Cumberland, was Queen Elizabeth I's champion at her yearly tournaments. This blue and gold armour was made for him at Greenwich, the royal workshop that Henry VIII founded with German armourers. It is one of the most complete Elizabethan armours in the world.",
  "the Tudor roses and fleurs-de-lis in the gold decoration"),
 (120, "perneb", 1, "Egyptian, Old Kingdom", [],
  "The chapel of Perneb, an official of Egypt's Old Kingdom around 2350 BC, from his tomb at Saqqara. Relatives brought food and drink here for him. The Met rebuilt it stone by stone in 1916, and you can walk inside.",
  "the false door: a door carved in stone that only the dead could pass through"),
 (120, "hippo", 1, "Egyptian, Middle Kingdom", [],
  "The museum's mascot, a blue faience hippopotamus nicknamed William, made around 1900 BC for a tomb. Hippos were dangerous on the Nile, and three of his legs were broken, probably on purpose, so he could not harm the dead. They have been restored.",
  "the lotus flowers and marsh plants painted on his body"),
 (120, "hatshepsut", 1, "Egyptian, New Kingdom", [],
  "Hatshepsut ruled Egypt as pharaoh for about twenty years, around 1479 to 1458 BC. After her death her statues were smashed and thrown into a quarry. The Met's excavators found the pieces near her temple at Deir el-Bahri in the 1920s and put her back together.",
  "the royal head-cloth of a king, worn by a woman who ruled as one"),
 (60, "The Temple of Dendur"),
 (180, "wright", 1, "Frank Lloyd Wright", [],
  "The living room of a summer house Frank Lloyd Wright built on a lake in Minnesota in 1912 to 1914. When the house was to be demolished in 1972, the Met took this room. Wright wanted buildings that grow out of the land, so the long windows look out at a lake that is no longer there.",
  "the patterns in the leaded windows, and the low, wide proportions"),
 (270, "tiffany-window", 1, "Louis Comfort Tiffany", [],
  "Tiffany made this window of a stream running through autumn trees in 1923, layering coloured glass that he invented to paint with light instead of paint. It stands in the American Wing's glass courtyard, close to the loggia of his own country house, Laurelton Hall.",
  "glass folded and rippled to look like water and leaves"),
 (60, "Washington Crossing the Delaware"),
 (180, "church", 2, "Frederic Edwin Church", [],
  "Church travelled the Andes after reading the explorer Alexander von Humboldt. In 1859 he showed this huge view alone in a dark room in New York, lit by gas, and thousands paid to see it, some with opera glasses to study the detail.",
  "the tiny figures praying at a cross, and the flowers you can count petal by petal"),
 (180, "oxbow", 2, "Thomas Cole", [],
  "Cole painted the Connecticut River from Mount Holyoke after a thunderstorm in 1836: wild forest on the left, farms on the right. It is a picture about what Americans were doing to their land. Cole put himself in it, tiny, at his easel.",
  "the painter in the bottom centre, looking back at you"),
 (120, "homer", 2, "Winslow Homer", [],
  "A Black sailor lies on the deck of a broken boat, with sharks circling and a waterspout coming. Homer painted it in 1899 after winters in the Caribbean. The Met bought it in 1906, while Homer was alive. Nobody knows if he is saved.",
  "the ship on the horizon, easy to miss"),
 (60, "Madame X"),
 (120, "cristofori", 2, "Bartolomeo Cristofori", [],
  "Cristofori, instrument keeper to the Medici in Florence, invented the piano around 1700: hammers strike the strings, so you can play soft and loud. Only three of his pianos survive, and this one, dated 1720, is the oldest.",
  "only 54 keys, about four and a half octaves"),
 (120, "astor", 2, "Built by craftsmen from Suzhou", [],
  "A Chinese garden court, modelled on the Garden of the Master of the Nets in Suzhou and built in 1981 by craftsmen from China with traditional tools. It was the first lasting cultural exchange between China and the United States. Sit down: it is the quietest place in the museum.",
  "the moon gate, and the rocks chosen for their holes"),
 (180, "yuan-mural", 2, "Chinese, Yuan dynasty", [],
  "A Buddhist wall painting nearly 15 metres wide, made around 1319 for a temple in Shanxi province. The Buddha of Medicine sits among his attendants. The temple sold the mural in the 1920s; it was cut from the wall in sections and reached New York.",
  "the lines where the wall was cut into pieces to move it"),
 (180, "nimrud", 2, "Assyrian", [],
  "A guardian with a man's head, wings and a lion's body stood at a doorway of King Ashurnasirpal II's palace at Nimrud in Iraq, around 860 BC. Like the Louvre's bulls, it has five legs, so it looks right from the front and from the side.",
  "the five legs, and the cuneiform writing running between them"),
 (120, "nur-al-din", 2, "Damascus", [],
  "A winter reception room from a rich family's house in Damascus, Syria, dated 1707. Guests left their shoes on the lower floor and stepped up to sit. Wooden panels are painted and gilded with flowers, and poems run around the walls.",
  "the step up from the entrance, and the verses around the top of the walls"),
 (120, "joan", 2, "Jules Bastien-Lepage", ["joan-of-arc"],
  "A farm girl in her parents' garden in Lorraine, around 1425, hears voices calling her to save France. Bastien-Lepage, who came from the same region, painted it in 1879. Behind her, almost transparent, hover the saints she said she saw.",
  "her outstretched hand, reaching for something that is not there"),
 (60, "The Card Players"),
 (60, "Self-Portrait with a Straw Hat"),
 (60, "Wheat Field with Cypresses"),
 (120, "lilies", 2, "Claude Monet", ["monet"],
  "Monet built a water garden at his house in Giverny and put a Japanese-style footbridge over it. He painted this view in 1899, and kept painting the pond for the rest of his life, until the water lilies filled whole walls.",
  "there is no sky: the pond fills the picture"),
 (270, "sainte-adresse", 2, "Claude Monet", ["monet"],
  "Monet painted his family on a terrace by the sea in Normandy in 1867, when he was 26 and broke. The man in the chair is his father. The bright flags and flat colours show he had been looking at Japanese prints.",
  "the two flags snapping in the wind"),
 (60, "The Dance Class"),
 (270, "manet", 2, "Édouard Manet", [],
  "Victorine Meurent, who also posed for Manet's scandalous Olympia, stands in a pink dressing gown with a parrot. Manet painted it in 1866. The same year Courbet painted his own Woman with a Parrot; both pictures are now at the Met.",
  "the half-peeled orange on the floor"),
 (270, "thinker", 2, "Auguste Rodin", ["rodin", "dante"],
  "Rodin first made him to sit above his huge bronze door, The Gates of Hell, looking down on Dante's Inferno, and at first called him The Poet. Enlarged and on his own, he became one of the most famous sculptures in the world.",
  "how hard he is thinking, with every muscle"),
 (270, "raphael", 2, "Raphael", ["raphael"],
  "The young Raphael painted this altarpiece around 1504 for a convent of nuns in Perugia, before he left for Florence and Rome. The nuns asked that the baby Jesus be shown clothed.",
  "the baby Jesus fully dressed, as the nuns wanted"),
 (60, "Young Woman with a Water Pitcher"),
 (60, "Aristotle with a Bust of Homer"),
 (60, "Self-Portrait"),
 (180, "caravaggio", 2, "Caravaggio", [],
  "Painted around 1597 for Caravaggio's first patron in Rome, Cardinal del Monte, who loved music. Four boys in loose classical costume tune up. The one behind, looking out at you, is probably Caravaggio himself.",
  "the boy at the back, and the winged Cupid picking grapes"),
 (270, "la-tour", 2, "Georges de La Tour", [],
  "A rich young man has his fortune told, and while the old woman talks, the others rob him. Painted in the 1630s by a French painter almost forgotten until the 20th century.",
  "one hand lifting his purse, and another cutting the medal from his chain"),
 (60, "Juan de Pareja"),
 (120, "toledo", 2, "El Greco", [],
  "El Greco, born in Crete, settled in Toledo in Spain and spent nearly forty years there. This is one of only two landscapes he painted. He moved buildings around to suit himself, and the storm light makes it feel like a vision.",
  "the cathedral tower, moved for the picture, under a grey storm sky"),
 (60, "The Death of Socrates"),
 (60, "The Harvesters"),
 (180, "goya", 2, "Francisco de Goya", [],
  "The son of a count, aged about four, in a red suit with his pet magpie on a string, painted around 1787 to 1788. Three cats stare at the bird from the dark. The magpie holds Goya's own calling card in its beak.",
  "the cats' eyes in the shadow"),
]

# shorter names for records whose catalogue titles are long
MET_TITLE = {"boscoreale": "Bedroom from a villa at Boscoreale", "monteleone": "The Monteleone chariot", "clifford": "Armour of George Clifford",
             "perneb": "Tomb of Perneb", "hippo": "Hippopotamus (\"William\")", "hatshepsut": "Seated statue of Hatshepsut",
             "wright": "Living room from the Little House", "oxbow": "The Oxbow", "cristofori": "The oldest piano", "yuan-mural": "Buddha of Medicine mural",
             "studiolo": "Studiolo from Gubbio", "tiffany-window": "Autumn Landscape window"}
MET_FLOORS = {"1": "First floor", "2": "Second floor"}


def met_stops(old):
    by_t = {s["t"]: s for s in old}
    tour, missing = [], []
    for e in MET:
        if e[0] == 60:
            s = dict(by_t[e[1]]); s["tier"] = 60; tour.append(s); continue
        tier, key, floor, by, people, story, look = e
        r = REC.get(key)
        if not r or not r.get("GalleryNumber"):
            missing.append(key); continue
        pic = {"u": r["primaryImageSmall"], "w": r.get("w") or 4, "h": r.get("h") or 3, "page": r["objectURL"],
               "cr": "The Metropolitan Museum of Art, Open Access", "lic": "Public domain (CC0)"} if r.get("isPublicDomain") and r.get("primaryImageSmall") else None
        r = {**r, "objectURL": r["objectURL"] or f"https://www.metmuseum.org/art/collection/search/{r['objectID']}"}
        s = {"floor": floor, "gal": r["GalleryNumber"], "met": r["objectID"], "t": MET_TITLE.get(key) or r["title"].split(" (")[0].split(", from ")[0], "by": by,
             "date": r["objectDate"], "story": story, "look": look, "people": people, "u": r["objectURL"], "tier": tier}
        if pic:
            s["pic"] = pic
        tour.append(s)
    return tour, missing


# ---------- Louvre and British Museum ----------
# (tier, key, floor, room or "", title, by, date, people, story, look, wiki)
LV = [
 (180, "baptistere", -2, "", "Baptistère de Saint Louis", "Muhammad ibn al-Zayn", "c. 1320 to 1340", [],
  "A brass basin inlaid with silver and gold, made in Mamluk Egypt or Syria, with hunters, horsemen and courtiers all round. The maker signed it six times. French kings later used it to baptise their children, and it took the name of Saint Louis, though it was made long after his time.",
  "the maker's signature among the figures", "Baptistère_de_Saint_Louis"),
 (270, "pyxis", -1, "", "Pyxis of al-Mughira", "Córdoba, al-Andalus", "968", [],
  "A round ivory box carved in 968 in Córdoba, in Muslim Spain, for al-Mughira, a son of the caliph Abd al-Rahman III. Its scenes of princes, musicians and hunters were probably also a political message; he was killed in a power struggle a few years later.",
  "the inscription around the lid that names him", "Pyxis_of_al-Mughira"),
 (120, "moat", -1, "", "The medieval Louvre", "Built for King Philip II", "from about 1190", [],
  "Under the museum lie the foundations of the first Louvre, a fortress King Philip II began around 1190 to guard Paris while he was away on crusade. You walk along the dry moat, beside the base of the great round tower. Kings turned the fortress into a palace, and the palace became a museum in 1793.",
  "the stonemasons' marks on the blocks", "Louvre_Palace"),
 (120, "sphinx", -1, "", "Great Sphinx of Tanis", "Egyptian", "date debated, perhaps c. 2600 BC or c. 1900 BC", [],
  "A huge sphinx carved from a single block of pink granite. Nobody agrees when it was made. Later pharaohs, including Amenemhat II, Merneptah and Shoshenq I, carved their own names on it, as if to sign it. It was found at Tanis in the Nile delta.",
  "the names of later kings carved on its chest and base", "Great_Sphinx_of_Tanis"),
 (120, "marly", 0, "", "The Marly Horses", "Guillaume Coustou", "1739 to 1745", [],
  "Two wild horses held back by grooms, carved for Louis XV's park at Marly. During the Revolution they were moved to the start of the Champs-Élysées, where they stood for nearly 200 years until copies replaced them in 1984. The glass-roofed Cour Marly gives them the sky again.",
  "the rearing horse and the groom bracing against it", "Marly_Horses"),
 (270, "pot", 0, "", "Tomb of Philippe Pot", "Burgundian", "c. 1480", [],
  "Philippe Pot, a great lord of Burgundy, lies on a slab carried by eight life-size mourners in black hoods, each holding a coat of arms of his family. He died in 1493. It is a funeral procession that never ends.",
  "the mourners' faces, hidden in their hoods", "Philippe_Pot"),
 (60, "Winged bulls of Khorsabad"),
 (60, "The Code of Hammurabi"),
 (180, "gudea", 0, "", "Statues of Gudea", "Sumerian, Lagash", "c. 2120 BC", [],
  "Gudea ruled the Sumerian city of Lagash, in today's Iraq, around 2120 BC and rebuilt its temples. He had himself carved in hard black diorite again and again, hands folded in prayer. In one statue he holds the plan of a temple on his lap, with a measuring rule.",
  "the temple plan on his knees", "Gudea"),
 (180, "archers", 0, "", "Frieze of Archers", "Persian, Susa", "c. 510 BC", [],
  "Glazed brick soldiers from the palace of the Persian king Darius I at Susa, in today's Iran. They march in step with spears, bows and quivers. French archaeologists dug them up in the 1880s.",
  "the patterns on their robes, made of coloured glaze", "Frieze_of_Archers"),
 (270, "vultures", 0, "", "Stele of the Vultures", "Sumerian, Lagash", "c. 2450 BC", [],
  "One of the oldest war memorials known. It tells how Eannatum, king of Lagash, beat the neighbouring city of Umma around 2450 BC over a strip of farmland. Only pieces survive.",
  "the vultures flying off with the heads of the defeated", "Stele_of_the_Vultures"),
 (60, "Venus de Milo"),
 (270, "hermaphroditus", 0, "", "Sleeping Hermaphroditus", "Roman copy of a Greek work", "2nd century AD", [],
  "Found in Rome in the early 1600s and restored for Cardinal Scipione Borghese; the young Bernini carved the soft marble mattress. Walk all the way round: the figure joins male and female, like Hermaphroditus in the poet Ovid's story.",
  "the mattress, which looks soft enough to press", "Sleeping_Hermaphroditus"),
 (180, "gladiator", 0, "", "Borghese Gladiator", "Agasias of Ephesus", "c. 100 BC", ["napoleon"],
  "A fighter lunging, shield arm up, looking at an enemy we cannot see. Found near Rome around 1611, it belonged to the Borghese family until Napoleon's brother-in-law sold their collection to him in 1807. The sculptor signed it on the tree trunk.",
  "the signature on the tree trunk", "Borghese_Gladiator"),
 (60, "Dying Slave"),
 (120, "psyche", 0, "", "Psyche Revived by Cupid's Kiss", "Antonio Canova", "1787 to 1793", [],
  "Cupid has come to wake Psyche from a deathly sleep. A British collector ordered it from Canova in Rome. The two bodies make an X in the air, and the marble is so thin in places that light passes through the wings.",
  "the space between their faces, just before the kiss", "Psyche_Revived_by_Cupid's_Kiss"),
 (60, "Winged Victory of Samothrace"),
 (180, "cimabue", 1, "708", "Maestà", "Cimabue", "c. 1280", ["napoleon"],
  "The Virgin and Child on a great throne, surrounded by six angels, painted for the church of San Francesco in Pisa around 1280. Cimabue began to give holy figures real weight, which his pupil Giotto would take further. Napoleon's agents brought it to Paris in 1813.",
  "the six angels, and the small round faces in the frame", "Maestà_(Cimabue)"),
 (120, "rocks", 1, "710", "Virgin of the Rocks", "Leonardo da Vinci", "c. 1483 to 1486", ["leonardo"],
  "Leonardo was asked in 1483 to paint the Virgin for a chapel in Milan. This is the first version; a later one is in London's National Gallery. Leonardo studied the plants and rocks so closely that botanists can name them.",
  "the angel's pointing hand, and the real plants in the cave", "Virgin_of_the_Rocks"),
 (180, "castiglione", 1, "710", "Portrait of Baldassare Castiglione", "Raphael", "c. 1514 to 1515", ["raphael", "rembrandt"],
  "Castiglione wrote The Book of the Courtier, a guide to the perfect gentleman. Raphael, his friend, painted him in soft greys and black. More than a century later Rembrandt saw it at an auction in Amsterdam and sketched it.",
  "the blue eyes, and how few colours there are", "Portrait_of_Baldassare_Castiglione"),
 (60, "Mona Lisa"),
 (60, "The Wedding at Cana"),
 (180, "glove", 1, "", "Man with a Glove", "Titian", "c. 1520 to 1523", [],
  "A young Venetian in black, one bare hand, one gloved. Nobody knows who he was. Louis XIV owned the painting; Titian, the great colourist of Venice, made a whole portrait out of black and one white collar.",
  "the gloved hand, painted in a few strokes", "Man_with_a_Glove"),
 (120, "horatii", 1, "702", "Oath of the Horatii", "Jacques-Louis David", "1784", [],
  "Painted in Rome for King Louis XVI: three Roman brothers swear to fight for their city, while the women, who will lose either way, collapse. Five years later the Revolution began, and people saw it as a call to sacrifice for the nation.",
  "the three arms raised to the swords", "Oath_of_the_Horatii"),
 (60, "The Coronation of Napoleon"),
 (60, "Grande Odalisque"),
 (180, "recamier", 1, "702", "Madame Récamier", "Jacques-Louis David", "1800", ["napoleon"],
  "Juliette Récamier ran the most famous salon in Napoleon's Paris. David began her portrait in 1800 but they fell out, and he left it unfinished. A sofa of this kind is still called a récamier.",
  "the bare, unfinished room around her", "Portrait_of_Madame_Récamier"),
 (60, "Liberty Leading the People"),
 (60, "The Raft of the Medusa"),
 (270, "sardanapalus", 1, "700", "The Death of Sardanapalus", "Eugène Delacroix", "1827", ["byron"],
  "An ancient king, defeated, lies on his bed and watches his servants and horses killed before his palace burns. Delacroix took the idea from a play by Lord Byron but invented the violent scene himself. Critics in 1827 were shocked.",
  "the king, calm on the red bed, amid the chaos", "The_Death_of_Sardanapalus"),
 (270, "cellini", 1, "", "Nymph of Fontainebleau", "Benvenuto Cellini", "1542 to 1543", [],
  "The Florentine goldsmith Cellini cast this bronze nymph for King Francis I's palace at Fontainebleau. It was never put up there; the king's mistress later had it set over the gate of her château at Anet.",
  "the stag's head that pushes out of the bronze", "Nymph_of_Fontainebleau"),
 (60, "The Seated Scribe"),
 (120, "napoleon3", 1, "", "Napoleon III Apartments", "Hector Lefuel and others", "1857 to 1861", [],
  "When Emperor Napoleon III finished the Louvre in the 1850s, his minister of state got these reception rooms. They are all gold, red velvet and crystal chandeliers, the taste of the Second Empire, and the ministry of finance kept them until 1989.",
  "the giant chandelier in the great salon", "Louvre_Palace"),
 (120, "rubens", 2, "801", "The Marie de' Medici cycle", "Peter Paul Rubens", "1622 to 1625", [],
  "Queen Marie de' Medici, widow of Henri IV and mother of Louis XIII, asked Rubens to paint her life for her Luxembourg Palace. He made 24 huge canvases full of gods, sea nymphs and cherubs. Her real life was full of quarrels with her son, and Rubens had to make it look heroic.",
  "the sea nymphs welcoming her ship to France", "Marie_de'_Medici_cycle"),
 (120, "rolin", 2, "", "The Madonna of Chancellor Rolin", "Jan van Eyck", "c. 1435", [],
  "Nicolas Rolin, chancellor of the Duke of Burgundy, kneels before the Virgin, as if he had every right to be there. Behind them, through the arches, a whole city and river are painted in tiny, sharp detail.",
  "the two little figures looking over the wall at the river", "Madonna_of_Chancellor_Rolin"),
 (120, "lacemaker", 2, "", "The Lacemaker", "Johannes Vermeer", "c. 1669 to 1670", ["vermeer"],
  "One of Vermeer's smallest paintings, about 24 by 21 centimetres. A young woman bends over her lace pillow. Vermeer painted the threads in front soft and blurred, as a camera would. Vermeer paintings are often lent, so it may be travelling.",
  "the red and white threads spilling from the cushion", "The_Lacemaker_(Vermeer)"),
 (180, "astronomer", 2, "", "The Astronomer", "Johannes Vermeer", "1668", ["vermeer"],
  "A scholar reaches for a celestial globe, with a book of astronomy open in front of him. It is one of the few Vermeers with a man alone, and one of only three he dated. Its pair, The Geographer, is in Frankfurt.",
  "the date on the cupboard", "The_Astronomer_(Vermeer)"),
 (270, "bathsheba", 2, "", "Bathsheba at Her Bath", "Rembrandt", "1654", ["rembrandt"],
  "In the Bible King David sees Bathsheba bathing and sends for her. Rembrandt shows the moment after she has read his letter, thinking. The model was probably Hendrickje Stoffels, who lived with Rembrandt.",
  "the letter in her hand", "Bathsheba_at_Her_Bath"),
 (270, "erasmus", 2, "", "Erasmus Writing", "Hans Holbein the Younger", "1523", [],
  "Erasmus of Rotterdam, the most famous scholar in Europe, writing at his desk. Holbein painted him in Basel, and Erasmus sent portraits like this to friends. Three years later Holbein went to England with Erasmus's letter of introduction.",
  "the pen, and the concentration in the face", "Portrait_of_Erasmus_of_Rotterdam_Writing"),
 (270, "poussin", 2, "", "The Arcadian Shepherds", "Nicolas Poussin", "c. 1637 to 1638", ["louis-xiv"],
  "Shepherds in an ideal countryside find a tomb that reads 'Et in Arcadia ego', usually understood as 'even in paradise, I, death, am here'. Louis XIV bought it.",
  "the shepherd tracing the letters with his finger", "Et_in_Arcadia_ego"),
 (270, "cheat", 2, "", "The Cheat with the Ace of Diamonds", "Georges de La Tour", "c. 1636 to 1638", [],
  "A rich young man plays cards, while the cheat pulls an ace from his belt and the women pass him signals. A cousin of the Met's Fortune Teller, by the same painter.",
  "the ace hidden behind the cheat's back, and the sideways eyes", "The_Cheat_with_the_Ace_of_Diamonds"),
 (180, "pierrot", 2, "", "Pierrot", "Antoine Watteau", "c. 1718 to 1719", [],
  "A nearly life-size clown from the Italian comedy, standing alone, arms hanging, in white satin. Painted a few years before Watteau died at 36. Nobody knows what it was made for; maybe a sign for a café run by a retired actor.",
  "the donkey peering out behind him", "Pierrot_(Watteau)"),
 (270, "bather", 2, "", "The Valpinçon Bather", "Jean-Auguste-Dominique Ingres", "1808", [],
  "Painted in Rome when Ingres was 28: a woman seen from behind, all smooth light. He came back to this figure for fifty years, ending with The Turkish Bath.",
  "the folds of the sheet, and the turban", "The_Valpinçon_Bather"),
]
LV_FLOORS = {"-2": "Level -2", "-1": "Level -1", "0": "Level 0", "1": "Level 1", "2": "Level 2"}

BM = [
 (60, "The Enlightenment Gallery"),
 (60, "The Rosetta Stone"),
 (60, "Colossal bust of Ramesses II"),
 (180, "amenhotep", 0, "4", "Colossal head of Amenhotep III", "Egyptian", "c. 1370 BC", [],
  "Amenhotep III ruled Egypt at the height of its wealth, around 1390 to 1352 BC. He was the father of Akhenaten and probably the grandfather of Tutankhamun. This granite head came from his vast funeral temple at Thebes.",
  "the calm half-smile of his reign", "Amenhotep_III"),
 (270, "cat", 0, "4", "The Gayer-Anderson Cat", "Egyptian", "c. 600 BC", [],
  "A bronze cat for the goddess Bastet, with gold rings in its ears and nose. Cats were sacred to her, and many were mummified as offerings. A British army officer, Major Gayer-Anderson, gave it to the museum.",
  "the gold rings, and the scarab beetle on its head", "Gayer-Anderson_Cat"),
 (120, "obelisk", 0, "6", "Black Obelisk of Shalmaneser III", "Assyrian", "c. 825 BC", [],
  "A black stone pillar listing the victories of the Assyrian king Shalmaneser III. On the second row a man bows to the ground; the text calls him Jehu, king of Israel, or his envoy. It is the earliest surviving picture of an Israelite.",
  "the kneeling man in the second row from the top", "Black_Obelisk_of_Shalmaneser_III"),
 (60, "Lion hunt of Ashurbanipal"),
 (120, "nereid", 0, "17", "Nereid Monument", "Lycian, from Xanthos", "c. 390 to 380 BC", [],
  "A tomb shaped like a Greek temple, built for a ruler of Xanthos in Lycia, in today's Turkey. Between the columns stand sea nymphs, nereids, who seem to run over the waves. A British expedition shipped it to London in the 1840s.",
  "the nymphs' dresses blown against them by the sea wind", "Nereid_Monument"),
 (60, "Parthenon sculptures"),
 (120, "mausoleum", 0, "21", "The Mausoleum of Halikarnassos", "Greek and Carian", "c. 350 BC", [],
  "The tomb of Mausolus, a ruler in today's Turkey, was one of the Seven Wonders of the Ancient World. It gave us the word mausoleum. Earthquakes brought it down; here are a giant horse from its roof and statues that may be Mausolus and his wife Artemisia.",
  "the size of the horse's head, from a chariot group on the top", "Mausoleum_at_Halicarnassus"),
 (60, "Hoa Hakananai'a"),
 (120, "serpent", 0, "27", "Double-headed serpent", "Mexica (Aztec)", "c. 1400 to 1521", [],
  "A serpent of turquoise mosaic on carved cedar wood, with shell teeth and red gums, probably worn on the chest in ceremonies. Turquoise was more precious than gold to the Mexica. Nobody knows how it reached Europe.",
  "the thousands of tiny turquoise pieces", "Double-headed_serpent"),
 (180, "yaxchilan", 0, "27", "Yaxchilan Lintel 24", "Maya", "c. AD 725", [],
  "A carved stone from over a temple door in the Maya city of Yaxchilan, in Mexico. Queen K'abal Xook draws a thorned rope through her tongue in a blood offering, while her husband, King Shield Jaguar, holds a torch above her. The explorer Alfred Maudslay had it removed in the 1880s.",
  "the rope of thorns, and the basket of blood-spotted paper", "Yaxchilan_Lintel_24"),
 (180, "tang", 0, "33", "Tomb figures of Liu Tingxun", "Chinese, Tang dynasty", "c. 728", [],
  "A set of glazed pottery figures from the tomb of a Tang general, Liu Tingxun: guardians, officials, camels and horses, made to serve him after death. Tang China was the richest empire in the world, and the Silk Road camels show it.",
  "the green, amber and cream glazes running down the horses", "Sancai"),
 (270, "amaravati", 0, "33a", "Amaravati sculptures", "Andhra, South India", "c. 200 BC to AD 250", [],
  "Limestone slabs from a great Buddhist stupa at Amaravati in South India. The early carvings show the Buddha only by signs, a throne, footprints, a wheel; later ones show him in human form. A British official took them to Madras in the 1800s.",
  "an empty throne where the Buddha is, but not shown", "Amaravati_Stupa"),
 (120, "benin", -1, "25", "Benin plaques", "Edo, Kingdom of Benin", "16th to 17th century", [],
  "Brass plaques that once covered the pillars of the royal palace in Benin City, in today's Nigeria, showing the Oba, his court and Portuguese traders. British forces took them when they sacked the city in 1897. Nigeria has asked for them back; the museum says the British Museum Act of 1963 stops it giving them away, while museums in Germany and the United States have returned some.",
  "the Portuguese traders with their long hair and hats", "Benin_Bronzes"),
 (270, "ife", -1, "25", "Ife head", "Yoruba, Ife", "c. 1300s to 1400s", [],
  "A life-size head cast in brass at Ife, the sacred city of the Yoruba in today's Nigeria. When European scholars first saw heads like this in 1910 they could not believe they were African. They are among the finest metal sculptures ever made anywhere.",
  "the fine lines down the face", "Ife_Head"),
 (120, "cyrus", 1, "52", "The Cyrus Cylinder", "Babylonian, for Cyrus the Great", "after 539 BC", [],
  "A clay barrel written in cuneiform after Cyrus the Great of Persia took Babylon in 539 BC. Cyrus says he returned the statues of gods to their temples and let deported peoples go home. It is often called the first charter of human rights; historians say it is a king's usual praise of himself, but an unusually generous one.",
  "how small it is, about 23 centimetres long", "Cyrus_Cylinder"),
 (270, "oxus", 1, "52", "The Oxus Treasure", "Achaemenid Persian", "5th to 4th century BC", [],
  "About 180 gold and silver pieces from the Persian Empire, found near the Oxus river, now on the border of Tajikistan and Afghanistan, around 1877. Traders who bought it were robbed on the road, and a British officer got part of it back.",
  "the little gold chariot pulled by four horses", "Oxus_Treasure"),
 (270, "flood", 1, "55", "The Flood Tablet", "Assyrian", "7th century BC", [],
  "A clay tablet from the library of King Ashurbanipal at Nineveh, with part of the Epic of Gilgamesh. A man is told to build a boat, takes animals on board and sends out birds when the flood ends. When George Smith of the museum read it in 1872, he was so excited he started to undress, the story goes.",
  "the wedge-shaped writing, smaller than a fingernail", "Gilgamesh_flood_myth"),
 (60, "The Royal Game of Ur"),
 (120, "standard", 1, "56", "The Standard of Ur", "Sumerian", "c. 2600 BC", [],
  "A wooden box covered in shell, red limestone and blue lapis lazuli, found by Leonard Woolley in the royal tombs at Ur in Iraq. One side shows war, with chariots running over enemies; the other shows peace, with a feast and a musician. Nobody knows what it was for.",
  "the lyre player at the feast, on the peace side", "Standard_of_Ur"),
 (180, "ram", 1, "56", "Ram in a Thicket", "Sumerian", "c. 2600 BC", [],
  "A goat, not really a ram, rearing up against a flowering tree, from the royal tombs at Ur. Its face is gold, its fleece shell, its horns and shoulders lapis lazuli. Woolley named it after the ram in the Bible story of Abraham.",
  "the gold face and the tiny shell curls", "Ram_in_a_Thicket"),
 (270, "lyre", 1, "56", "The Queen's Lyre", "Sumerian", "c. 2600 BC", [],
  "A lyre with a gold bull's head and a beard of lapis lazuli, from the grave of Queen Puabi at Ur. It was found crushed and rebuilt. Music in Sumer was played 4,500 years ago on instruments like this.",
  "the blue beard of the bull", "Lyres_of_Ur"),
 (120, "nebamun", 1, "61", "Paintings from the tomb-chapel of Nebamun", "Egyptian", "c. 1350 BC", [],
  "Wall paintings from the chapel of Nebamun, a scribe who counted grain at Thebes. He hunts birds in the marshes with his wife and daughter, and guests feast with music and dancers. They are among the liveliest paintings from ancient Egypt.",
  "the cat in the marsh, catching three birds at once", "Tomb_of_Nebamun"),
 (60, "Egyptian mummies"),
 (180, "gebelein", 1, "64", "Gebelein Man", "Egyptian, Predynastic", "c. 3500 BC", [],
  "This is the body of a real man, buried in the hot sand at Gebelein, in Egypt, around 3500 BC, and preserved naturally, before mummies were made. Scans show he was a young man killed by a stab in the back, and that he had tattoos. Please look with respect; it is fine to skip.",
  "how he lies curled on his side, as he was buried", "Gebelein_predynastic_mummies"),
 (180, "eidmar", 1, "68", "EID MAR coin", "Roman", "42 BC", ["julius-caesar"],
  "Brutus, one of the killers of Julius Caesar, had this silver coin struck two years after the murder. Two daggers stand beside a cap of freedom, and below is EID MAR: the Ides of March, 44 BC. Few coins have ever boasted of a murder.",
  "the two daggers", "Eid_Mar"),
 (60, "The Portland Vase"),
 (270, "augustus", 1, "70", "The Meroë Head of Augustus", "Roman", "c. 27 to 25 BC", ["augustus"],
  "A bronze head of the emperor Augustus, cut from a statue in Roman Egypt by an army from the kingdom of Kush around 25 BC. They buried it under the steps of a victory temple at Meroë, in today's Sudan, so that people walked over the emperor every day.",
  "the eyes of glass and stone, still staring", "Meroë_Head"),
 (60, "Sutton Hoo helmet"),
 (270, "lycurgus", 1, "41", "The Lycurgus Cup", "Roman", "4th century AD", [],
  "A Roman glass cup that is green in ordinary light and glows red when lit from behind. Scientists found why only in the 1990s: tiny particles of gold and silver in the glass. It shows King Lycurgus caught by vines.",
  "the colour: is it lit from the front or from behind?", "Lycurgus_Cup"),
 (60, "Lewis Chessmen"),
 (270, "goldcup", 1, "40", "The Royal Gold Cup", "French", "c. 1370 to 1380", [],
  "A gold cup with enamel scenes from the life of Saint Agnes, probably made for the Duke of Berry, a brother of the French king. It passed through the hands of English and Spanish kings before the museum bought it in 1892.",
  "the deep blues and reds of the enamel", "Royal_Gold_Cup"),
 (120, "galleon", 1, "", "The mechanical galleon", "Hans Schlottheim", "c. 1585", [],
  "A gilded clockwork ship made in Augsburg. It rolled along a banquet table while tiny figures paraded before the Holy Roman Emperor on deck, music played and a cannon fired. It was a clock, a toy and a boast, all at once.",
  "the emperor on deck, and the tiny sailors in the rigging", "Hans_Schlottheim"),
 (180, "mildenhall", 1, "49", "The Mildenhall Great Dish", "Roman Britain", "4th century AD", [],
  "A ploughman found a hoard of Roman silver at Mildenhall in Suffolk in the 1940s. The Great Dish shows a sea god with seaweed in his beard, and a wild party of the wine god Bacchus around him.",
  "the face of the sea god in the centre", "Mildenhall_Treasure"),
 (120, "hoxne", 1, "49", "The Hoxne Hoard", "Roman Britain", "early 5th century AD", [],
  "In 1992 a man searching for a lost hammer in a field at Hoxne, Suffolk, found nearly 15,000 Roman coins with gold jewellery and silver spoons, buried as Rome left Britain. It is the largest hoard of late Roman gold and silver ever found. He found the hammer too.",
  "the silver pepper pot shaped like an empress", "Hoxne_Hoard"),
 (180, "torc", 1, "50", "The Snettisham Great Torc", "Iron Age Britain", "c. 75 BC", [],
  "A neck ring of over a kilo of gold and silver, twisted from 64 wires. It was found by a ploughman at Snettisham in Norfolk in 1950. Torcs were worn by the powerful in Celtic Europe.",
  "the eight strands, each twisted from eight wires", "Snettisham_Hoard"),
 (270, "battersea", 1, "50", "The Battersea Shield", "Iron Age Britain", "c. 350 to 50 BC", [],
  "A bronze shield cover decorated with red glass, dredged from the Thames at Battersea in 1857. It is too thin for battle, so it was probably for show, and was perhaps thrown into the river as an offering.",
  "the swirls and the red glass studs", "Battersea_Shield"),
 (270, "mold", 1, "51", "The Mold gold cape", "Bronze Age Britain", "c. 1900 to 1600 BC", [],
  "A cape beaten from a single lump of gold, found in a burial mound at Mold in Wales in 1833. It would have covered someone's shoulders and pinned their arms, so it was worn for ceremonies, perhaps by a woman.",
  "how it imitates folds of cloth and beads", "Mold_cape"),
 (180, "david", 1, "95", "The David Vases", "Chinese, Yuan dynasty", "1351", [],
  "Two blue-and-white porcelain vases with an inscription dated 1351, saying they were given to a Daoist temple. They are the best-known early dated blue-and-white, and helped scholars date the rest. Room 95 is up the north stairs.",
  "the long dedication written on the necks", "David_Vases"),
]
BM_FLOORS = {"-1": "Lower floor", "0": "Ground floor", "1": "Upper floor"}


def lb_stops(lst, prefix, old):
    by_t = {s["t"]: s for s in old}
    tour, nopic = [], []
    for e in lst:
        if e[0] == 60:
            s = dict(by_t[e[1]]); s["tier"] = 60; tour.append(s); continue
        tier, key, floor, room, t, by, date, people, story, look, wiki = e
        c = EX["commons"].get(prefix + key) or {}
        pic = None if c.get("rejected") else c.get("pic")
        s = {"floor": floor, "gal": room, "t": t, "by": by, "date": date, "story": story, "look": look, "people": people,
             "u": WIKI + wiki, "tier": tier}
        if not room:
            del s["gal"]
        if pic:
            s["pic"] = {k: pic[k] for k in ("u", "w", "h", "page", "lic", "cr")}
        else:
            nopic.append(key)
        tour.append(s)
    return tour, nopic


def counts(tour):
    return {t: sum(1 for s in tour if s["tier"] <= t) for t in TIERS}


def routes(name, n, intro):
    return [{"mins": m, "n": f"{name} in {w}", "intro": intro[m].format(n=n[m])} for m, w in ((60, "one hour"), (120, "two hours"), (180, "three hours"), (270, "a half day"))]


def write(id, tour, rs, floors=None):
    p = ROOT / "online" / "places" / (id + ".json")
    pl = json.loads(p.read_text())
    g = pl["guide"]
    g["tour"], g["routes"] = tour, rs
    if floors:
        g["floors"] = floors
    if id == "met":
        g["note"] = "Gallery numbers come from The Met's open data, checked 16 November 2026. Rooms change and works travel: if a work is not where we say, a guard will know where it went."
    p.write_text(json.dumps(pl, ensure_ascii=False, indent=1) + "\n")
    print(id, counts(tour))


def main():
    for id in ("met", "louvre", "british-museum"):
        g = json.loads((ROOT / "online" / "places" / (id + ".json")).read_text())["guide"]
        if id == "met":
            tour, miss = met_stops(g["stops"])
            print("met: not on view or not found:", miss)
            n = counts(tour)
            write(id, tour, routes("The Met", n, {
                60: g["intro"],
                120: "{n} works in walking order. Downstairs: Greek and Roman, Renaissance rooms, armour and Egypt. Upstairs: American painting, the oldest piano in the world, a room from Damascus, then the Impressionists and Old Masters. Take a coffee break in between.",
                180: "{n} stops: everything in the two-hour walk, plus an Etruscan chariot, Canova, Frank Lloyd Wright, a Chinese Buddhist mural, Caravaggio and Goya. Wear comfortable shoes.",
                270: "{n} stops, about four and a half hours with a lunch break: the whole of the shorter walks, plus Roman wall paintings, Benin ivory, Tiffany glass, Rodin's Thinker, Raphael and more. Sit down whenever a room asks you to."}), MET_FLOORS)
        elif id == "louvre":
            tour, nopic = lb_stops(LV, "lv-", g["stops"])
            print("louvre: no free picture for", nopic)
            n = counts(tour)
            write(id, tour, routes("The Louvre", n, {
                60: g["intro"],
                120: "{n} works. Start below ground in the moat of the medieval castle and the Egyptian crypt, then the sculpture courts and Mesopotamia, before the Winged Victory, Leonardo, the great French paintings and, at the end, Rubens and Vermeer on the top floor.",
                180: "{n} works: the two-hour walk, plus Islamic art, Persian archers, Cimabue, Raphael, Titian and Watteau. Go early: the Mona Lisa room is calmest at opening time.",
                270: "{n} works, about four and a half hours with a lunch break, from the medieval moat to Rembrandt and Poussin on the top floor. The Louvre is the largest museum in the world; even this is a small part of it."}), LV_FLOORS)
        else:
            tour, nopic = lb_stops(BM, "bm-", g["stops"])
            print("british-museum: no free picture for", nopic)
            n = counts(tour)
            write(id, tour, routes("The British Museum", n, {
                60: g["intro"],
                120: "{n} objects. Ground floor: Egypt, Assyria, the Parthenon and two wonders of the ancient world, the Aztecs, then down to Africa. Upstairs: Persia, the royal tombs of Ur, Egypt, Rome and medieval Europe. Entry is free.",
                180: "{n} objects: the two-hour walk, plus Maya carvings, Tang China, the coin that boasts of killing Caesar, and Iron Age gold. Entry is free.",
                270: "{n} objects, about four and a half hours with a lunch break: everything above, plus the Flood Tablet, the Oxus Treasure, the Meroë head of Augustus and the Mold gold cape. Entry is free."}), BM_FLOORS)


if __name__ == "__main__":
    main()
