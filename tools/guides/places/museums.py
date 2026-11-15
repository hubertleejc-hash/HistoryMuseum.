"""Round 1: sizeable museums around the world, ranked roughly by size and visitors (1 = biggest)."""
from lib import F, O, W, place

M = []
M.append(place("louvre", "Musée du Louvre", "museum", "Paris", 48.8606, 2.3376, 350, rank=1, short="The Louvre",
 blurb="The most visited museum in the world, in a royal palace that grew for 800 years along the Seine.",
 facts=[F("A fortress, a palace, then a museum", "The Louvre began around 1200 as a fortress. Kings turned it into a palace, and when Louis XIV moved to Versailles it filled with artists and academies. The Revolution opened it to the public as a museum in 1793.",
          [W("Louvre_Palace"), W("Louvre")], when="1190 to 1793", people=["louis-xiv"]),
        F("Napoleon's museum", "Napoleon brought paintings and statues to the Louvre from the countries he conquered, and for a few years it was called the Musée Napoléon. After his fall in 1815 about 5,000 works were sent back, though not all; Veronese's Wedding at Cana stayed.",
          [W("Louvre"), W("Napoleonic_looting_of_art")], when="1803 to 1815", people=["napoleon"]),
        F("The glass pyramid", "The architect I. M. Pei's glass pyramid opened in 1989 as a new main entrance. Many Parisians hated it at first, as they had once hated the Eiffel Tower.",
          [W("Louvre_Pyramid"), O("Musée du Louvre", "https://www.louvre.fr/en")], when="1989")]))
M.append(place("british-museum", "The British Museum", "museum", "London", 51.5194, -0.1270, 250, rank=2,
 blurb="The first national public museum in the world, free since it opened in 1759, with about eight million objects from every continent.",
 facts=[F("Founded on one doctor's collection", "When the physician Hans Sloane died in 1753 he left 71,000 objects to the nation in return for £20,000 for his heirs. Parliament founded the museum to hold them, and it opened in 1759, free to all 'studious and curious persons'.",
          [W("British_Museum"), W("Hans_Sloane")], when="1753 to 1759"),
        F("Marx wrote Capital in the Reading Room", "The round Reading Room under the great dome opened in 1857. Karl Marx worked there for years on Das Kapital, and Gandhi, Lenin and Virginia Woolf held reader's tickets too.",
          [W("British_Museum_Reading_Room"), W("Das_Kapital")], when="1857 onwards", people=["marx", "gandhi", "woolf"]),
        F("Objects other countries ask for", "Some of the most famous objects, like the Parthenon sculptures and the Benin Bronzes, were taken in ways many people now see as wrong, and Greece and Nigeria ask for them back. The museum's founding law limits what it can give away.",
          [W("Elgin_Marbles"), W("Benin_Bronzes")], lab="verified")]))
M.append(place("vatican-museums", "Vatican Museums", "museum", "Vatican City", 41.9065, 12.4536, 350, rank=4,
 blurb="The popes' collections, gathered over five centuries, with the Sistine Chapel at the end of a seven-kilometre walk of galleries.",
 facts=[F("It began with one statue", "In 1506 Pope Julius II put the newly dug-up Laocoön group on show in a courtyard of the Vatican, a month after it was found in a Roman vineyard. Michelangelo was among the first to see it. That display is counted as the start of the museums.",
          [W("Vatican_Museums"), W("Laocoön_and_His_Sons")], when="1506", people=["michelangelo"]),
        F("Raphael's rooms", "Raphael painted four rooms of the pope's apartments from 1508, including the School of Athens. He died in 1520 at 37, and his pupils finished the last room.",
          [W("Raphael_Rooms"), W("The_School_of_Athens")], when="1508 to 1524", people=["raphael", "plato", "aristotle"], go=["#place-rome", "Rome"])]))
M.append(place("palace-museum", "The Palace Museum (Forbidden City)", "museum", "Beijing", 39.9163, 116.3972, 500, rank=5, short="The Palace Museum",
 blurb="The palace of 24 emperors of the Ming and Qing, now a museum with more than 1.8 million objects.",
 facts=[F("Built in fourteen years", "The Yongle Emperor moved the capital to Beijing and built the palace from 1406 to 1420. It stayed the home of the emperors for almost 500 years, and ordinary people were forbidden to enter.",
          [W("Forbidden_City"), O("The Palace Museum", "https://en.dpm.org.cn/")], when="1406 to 1420", go=["#e-forbidden-city", "The Forbidden City"]),
        F("The last emperor's home until 1924", "Puyi gave up the throne in 1912 as a six-year-old, but was allowed to keep living in the inner palace. He was expelled in 1924, and the Palace Museum opened in 1925.",
          [W("Puyi"), W("Palace_Museum")], when="1912 to 1925", people=["puyi"]),
        F("The Kangxi Emperor's long reign", "Kangxi ruled from here for 61 years, from 1661 to 1722, the longest reign in Chinese history. His grandson Qianlong added many of the paintings and treasures.",
          [W("Kangxi_Emperor"), W("Qianlong_Emperor")], people=["kangxi", "qianlong"])]))
M.append(place("hermitage", "State Hermitage Museum", "museum", "St Petersburg", 59.9398, 30.3146, 350, rank=6, short="The Hermitage",
 blurb="Catherine the Great's private gallery, grown into one of the largest museums on Earth, in the Winter Palace of the tsars.",
 facts=[F("Catherine's 225 paintings", "In 1764 Catherine the Great bought 225 paintings from a Berlin merchant who could not pay his debts to Prussia. That purchase is taken as the founding of the Hermitage. She called it her hermitage because only a few friends were allowed in.",
          [W("Hermitage_Museum"), W("Catherine_the_Great")], when="1764", people=["catherine-the-great"]),
        F("The storming of the Winter Palace", "On the night of 7 November 1917 (25 October in the old Russian calendar), Bolshevik forces entered the Winter Palace and arrested the government sitting there. The palace has belonged to the museum ever since.",
          [W("Storming_of_the_Winter_Palace"), W("Winter_Palace")], when="1917", go=["#e-russian-revolution", "The Russian Revolution"])]))
M.append(place("national-museum-china", "National Museum of China", "museum", "Beijing", 39.9035, 116.4010, 350, rank=7,
 blurb="One of the largest museums in the world by floor space, on the east side of Tiananmen Square.",
 facts=[F("Two museums made one", "It was formed in 2003 from the Museum of Chinese History and the Museum of the Chinese Revolution, which had shared the building since 1959. After rebuilding it reopened in 2011 with about 200,000 square metres of space.",
          [W("National_Museum_of_China"), O("National Museum of China", "https://en.chnmuseum.cn/")], when="1959 to 2011"),
        F("The biggest bronze of ancient China", "The Houmuwu ding, a ritual cauldron cast about 3,200 years ago in the Shang dynasty, weighs over 800 kilograms. It is the heaviest bronze vessel known from ancient China.",
          [W("Houmuwu_ding"), W("National_Museum_of_China")])]))
M.append(place("national-gallery-london", "The National Gallery", "museum", "London", 51.5089, -0.1283, 200, rank=8,
 blurb="Western European paintings from the 1200s to 1900, free to see on Trafalgar Square.",
 facts=[F("Thirty-eight paintings to start", "Parliament bought 38 paintings from the banker John Julius Angerstein in 1824 and showed them in his house on Pall Mall. The building on Trafalgar Square opened in 1838.",
          [W("National_Gallery"), O("The National Gallery", "https://www.nationalgallery.org.uk/")], when="1824"),
        F("Van Gogh's Sunflowers", "Van Gogh painted sunflowers in Arles in August 1888 to decorate the room for Gauguin. The National Gallery's version is one of the four he made that month.",
          [W("Sunflowers_(Van_Gogh_series)"), W("National_Gallery")], when="1888", people=["van-gogh", "gauguin"], go=["#place-arles", "Arles"])]))
M.append(place("prado", "Museo del Prado", "museum", "Madrid", 40.4138, -3.6921, 250, rank=9, short="The Prado",
 blurb="The Spanish royal collection, with the world's best Velázquez, Goya and Titian.",
 facts=[F("Opened in 1819", "King Ferdinand VII opened the royal picture collection to the public in a building first designed for a natural history museum. 311 Spanish paintings were shown on the first day.",
          [W("Museo_del_Prado"), O("Museo del Prado", "https://www.museodelprado.es/en")], when="1819"),
        F("Las Meninas", "Velázquez painted the little Infanta Margarita and her maids in 1656, with himself at a huge easel and the king and queen reflected in a mirror. Picasso painted 58 versions of it in 1957.",
          [W("Las_Meninas"), W("Las_Meninas_(Picasso)")], when="1656", people=["picasso"])]))
M.append(place("uffizi", "Uffizi Galleries", "museum", "Florence", 43.7678, 11.2553, 200, rank=10, short="The Uffizi",
 blurb="Offices built for the Medici in 1560, now holding the Renaissance at its best.",
 facts=[F("Uffizi means offices", "Cosimo I de' Medici had Giorgio Vasari build the Uffizi from 1560 as offices for the magistrates of Florence. The Medici displayed their art on the top floor. The last of the family, Anna Maria Luisa, left it all to Florence in 1737, on condition it never leave the city.",
          [W("Uffizi"), O("Uffizi Galleries", "https://www.uffizi.it/en")], when="1560 to 1737"),
        F("Leonardo's first great painting", "The Annunciation, painted around 1472 to 1476 while Leonardo was still in Verrocchio's workshop, hangs here, as does the Adoration of the Magi he left unfinished when he moved to Milan.",
          [W("Annunciation_(Leonardo)"), W("Adoration_of_the_Magi_(Leonardo)")], when="c. 1472 to 1481", people=["leonardo"], go=["#place-florence", "Florence"])]))
M.append(place("rijksmuseum", "Rijksmuseum", "museum", "Amsterdam", 52.3600, 4.8852, 200, rank=11,
 blurb="The national museum of the Netherlands, home of the Dutch Golden Age.",
 facts=[F("A cathedral for art", "Pierre Cuypers designed the building, opened in 1885; he also designed Amsterdam's Central Station. Some Protestants complained it looked too much like a Catholic church.",
          [W("Rijksmuseum"), O("Rijksmuseum", "https://www.rijksmuseum.nl/en")], when="1885"),
        F("Rembrandt and Vermeer under one roof", "The Night Watch has its own hall at the end of the Gallery of Honour, and Vermeer's Milkmaid hangs nearby. The museum has opened most of its collection online, free to use.",
          [W("The_Night_Watch"), W("The_Milkmaid_(Vermeer)")], people=["rembrandt", "vermeer"], go=["#place-amsterdam", "Amsterdam"])]))
M.append(place("musee-orsay", "Musée d'Orsay", "museum", "Paris", 48.8600, 2.3266, 200, rank=12,
 blurb="A railway station of 1900, turned into the museum of the Impressionists.",
 facts=[F("A station for the 1900 World's Fair", "The Gare d'Orsay was built for the 1900 Exposition. Its platforms became too short for modern trains, and after years of plans to knock it down it reopened as a museum in 1986. The big station clock still keeps time.",
          [W("Musée_d'Orsay"), O("Musée d'Orsay", "https://www.musee-orsay.fr/en")], when="1900 and 1986"),
        F("Van Gogh, Monet, Renoir, Cézanne", "It holds the world's largest Impressionist collection, including Renoir's dance at the Moulin de la Galette, Monet's Rouen Cathedral series and Van Gogh's swirling self-portrait from Saint-Rémy, 1889.",
          [W("Bal_du_moulin_de_la_Galette"), W("Musée_d'Orsay")], people=["van-gogh", "monet", "renoir", "cezanne"])]))
M.append(place("national-palace-museum", "National Palace Museum", "museum", "Taipei", 25.1024, 121.5485, 300, rank=13,
 blurb="About 700,000 treasures of the Chinese emperors, carried across the sea in 1948 and 1949.",
 facts=[F("The collection that crossed the strait", "During the Chinese Civil War the best of the Forbidden City's collection was shipped to Taiwan. The museum in Taipei opened in 1965. Much of it had been collected by the Qianlong Emperor.",
          [W("National_Palace_Museum"), O("National Palace Museum", "https://www.npm.gov.tw/")], when="1948 to 1965", people=["qianlong"]),
        F("The cabbage everyone queues for", "The Jadeite Cabbage, carved from one piece of jade half green and half white, with two insects on its leaves, is the museum's most popular object. It came from the Forbidden City's Palace of Eternal Harmony.",
          [W("Jadeite_Cabbage"), W("National_Palace_Museum")])]))
M.append(place("tokyo-national-museum", "Tokyo National Museum", "museum", "Tokyo", 35.7188, 139.7765, 300, rank=14,
 blurb="Japan's oldest and largest museum, in Ueno Park.",
 facts=[F("Founded in 1872", "It began with an exhibition at the Yushima Seidō in 1872, just after the Meiji Restoration, when Japan was opening to the world. It holds about 120,000 objects, including 89 National Treasures.",
          [W("Tokyo_National_Museum"), O("Tokyo National Museum", "https://www.tnm.jp/?lang=en")], when="1872", go=["#e-meiji-restoration", "The Meiji Restoration"]),
        F("Pine trees in the mist", "Hasegawa Tōhaku's Pine Trees screens, painted in ink around 1595, show trees vanishing into fog. They are a National Treasure and come out only for a few weeks each New Year.",
          [W("Pine_Trees_(Hasegawa_Tōhaku)"), W("Tokyo_National_Museum")], when="c. 1595")]))
M.append(place("grand-egyptian-museum", "Grand Egyptian Museum", "museum", "Giza", 29.9947, 31.1191, 400, rank=15,
 blurb="The largest museum in the world devoted to one civilization, two kilometres from the pyramids.",
 facts=[F("Tutankhamun, all together", "For the first time since Howard Carter opened the tomb in 1922, the whole burial treasure of Tutankhamun, about 5,000 objects, is shown in one place. The museum opened fully in November 2025.",
          [W("Grand_Egyptian_Museum"), W("Tutankhamun")], when="1922 and 2025"),
        F("A king in the entrance", "A colossal granite statue of Ramesses II, about 3,200 years old and 11 metres tall, greets visitors in the atrium. It stood in a Cairo square from 1955 until 2006, when it was moved to protect it from traffic fumes.",
          [W("Grand_Egyptian_Museum"), W("Ramesses_II")], go=["#place-giza", "The pyramids"])]))
M.append(place("moma", "The Museum of Modern Art", "museum", "New York", 40.7614, -73.9776, 150, rank=16, short="MoMA",
 blurb="The museum that decided what modern art was, founded in 1929 by three collectors.",
 facts=[F("The Starry Night lives here", "MoMA bought Van Gogh's The Starry Night in 1941. He painted it in June 1889 from his window at the asylum in Saint-Rémy, partly from memory.",
          [O("MoMA: The Starry Night", "https://www.moma.org/collection/works/79802"), W("The_Starry_Night")], when="1889 and 1941", people=["van-gogh"], go=["#place-arles", "Arles and Saint-Rémy"]),
        F("Picasso's shock of 1907", "Les Demoiselles d'Avignon, which Picasso kept rolled up in his studio for years because even his friends were shocked, was bought by MoMA in 1939. Frida Kahlo's Self-Portrait with Cropped Hair is in the collection too.",
          [W("Les_Demoiselles_d'Avignon"), W("Museum_of_Modern_Art")], when="1907", people=["picasso", "kahlo"])]))
M.append(place("air-and-space", "National Air and Space Museum", "museum", "Washington, D.C.", 38.8882, -77.0199, 200, rank=17, short="Air and Space Museum",
 blurb="The Smithsonian's museum of flight, free, on the National Mall.",
 facts=[F("The first airplane", "The 1903 Wright Flyer, which flew 12 seconds at Kitty Hawk, hangs here. Because of a long quarrel with the Smithsonian it spent 20 years in London's Science Museum, and came to Washington only in 1948.",
          [W("Wright_Flyer"), W("Wright_brothers")], when="1903 and 1948", people=["wilbur-wright", "orville-wright"], go=["#e-first-flight", "The first flight"]),
        F("Columbia came home", "The Apollo 11 command module Columbia, which carried Neil Armstrong, Buzz Aldrin and Michael Collins to the Moon and back in July 1969, is on show, scorched by re-entry.",
          [W("Apollo_11"), W("National_Air_and_Space_Museum")], when="1969", people=["armstrong"], go=["#e-moon-landing", "The Moon landing"])]))
M.append(place("art-institute-chicago", "Art Institute of Chicago", "museum", "Chicago", 41.8796, -87.6237, 200, rank=18,
 blurb="One of the great encyclopaedic art museums of America, behind two bronze lions on Michigan Avenue.",
 facts=[F("Van Gogh's bedroom", "Van Gogh painted his bedroom in the Yellow House three times. The Art Institute has the second version, painted in September 1889 at Saint-Rémy from the first.",
          [W("Bedroom_in_Arles"), O("Art Institute of Chicago", "https://www.artic.edu/")], when="1889", people=["van-gogh"]),
        F("A Sunday afternoon made of dots", "Georges Seurat spent two years on A Sunday on La Grande Jatte, finished in 1886, building it from tiny dots of pure colour. It has never been lent since 1958.",
          [W("A_Sunday_Afternoon_on_the_Island_of_La_Grande_Jatte"), W("Art_Institute_of_Chicago")], when="1884 to 1886")]))
M.append(place("national-gallery-art", "National Gallery of Art", "museum", "Washington, D.C.", 38.8913, -77.0198, 200, rank=19,
 blurb="A gift to the nation from the banker Andrew Mellon, free since 1941.",
 facts=[F("The only Leonardo in the Americas", "Ginevra de' Benci, painted in Florence around 1474 to 1478, was bought in 1967 from the Prince of Liechtenstein. It is the only painting by Leonardo in the Americas.",
          [W("Ginevra_de'_Benci"), O("National Gallery of Art", "https://www.nga.gov/")], when="c. 1474 to 1478", people=["leonardo"])]))
M.append(place("kunsthistorisches", "Kunsthistorisches Museum", "museum", "Vienna", 48.2038, 16.3616, 200, rank=20,
 blurb="The Habsburg collections, opened by Emperor Franz Joseph in 1891.",
 facts=[F("The Bruegel room", "It holds about a dozen paintings by Pieter Bruegel the Elder, the largest group anywhere, among them Hunters in the Snow and the Tower of Babel.",
          [W("Kunsthistorisches_Museum"), W("The_Hunters_in_the_Snow")], when="1560s"),
        F("Raphael's Madonna of the Meadow", "Raphael painted it in Florence around 1506, when he was studying Leonardo's triangle compositions. The Habsburgs bought it in 1663.",
          [W("Madonna_of_the_Meadow"), W("Kunsthistorisches_Museum")], when="c. 1506", people=["raphael", "leonardo"])]))
M.append(place("museum-island", "Museum Island", "museum", "Berlin", 52.5208, 13.3977, 400, rank=21,
 blurb="Five museums on an island in the Spree, a World Heritage Site.",
 facts=[F("The Ishtar Gate of Babylon", "The blue glazed gate King Nebuchadnezzar II built around 575 BC was excavated in pieces and rebuilt in the Pergamon Museum. The Pergamon is closed for renovation from 2023 into the late 2020s, so check before you go.",
          [W("Ishtar_Gate"), W("Pergamon_Museum")], when="c. 575 BC"),
        F("Nefertiti", "The painted bust of Queen Nefertiti, found by a German team at Amarna in 1912, is in the Neues Museum. Egypt has long asked for it back.",
          [W("Nefertiti_Bust"), W("Neues_Museum")], when="c. 1345 BC")]))
M.append(place("acropolis-museum", "Acropolis Museum", "museum", "Athens", 37.9684, 23.7285, 150, rank=22,
 blurb="A glass museum at the foot of the Acropolis, built over a dig you can see through the floor.",
 facts=[F("A gallery waiting for its missing half", "The top floor has the Parthenon frieze laid out at its real size, facing the temple itself. Casts in white fill the places of the pieces that are in the British Museum.",
          [W("Acropolis_Museum"), W("Elgin_Marbles")], when="2009"),
        F("The Parthenon of Socrates' city", "The Parthenon was built from 447 to 432 BC, when Socrates was a young man in Athens. The Caryatids of the nearby Erechtheion, five of the six maidens, stand here; the sixth is in London.",
          [W("Parthenon"), W("Erechtheion")], when="447 to 432 BC", people=["socrates"])]))
M.append(place("anthropology-mexico", "National Museum of Anthropology", "museum", "Mexico City", 19.4260, -99.1863, 300, rank=23,
 blurb="The largest museum in Mexico, of the peoples before and after the Spanish conquest.",
 facts=[F("The Sun Stone", "The great Aztec calendar stone, carved in the early 1500s, was found buried in the main square of Mexico City in 1790. It is 3.6 metres across and weighs about 24 tonnes.",
          [W("Aztec_calendar_stone"), W("National_Museum_of_Anthropology_(Mexico)")], when="1790", go=["#e-tenochtitlan", "Tenochtitlan"]),
        F("Under one umbrella", "Pedro Ramírez Vázquez's building opened in 1964. Its courtyard roof stands on a single bronze-clad column, and water falls from it like rain.",
          [W("National_Museum_of_Anthropology_(Mexico)"), O("Museo Nacional de Antropología", "https://www.mna.inah.gob.mx/")], when="1964")]))
M.append(place("national-museum-korea", "National Museum of Korea", "museum", "Seoul", 37.5239, 126.9803, 300, rank=24,
 blurb="One of the largest museums in Asia, with 5,000 years of Korean history.",
 facts=[F("The room of quiet", "Two gilt-bronze Pensive Bodhisattvas from the 6th and 7th centuries, both National Treasures, share a dark room of their own, with nothing else to look at.",
          [W("National_Museum_of_Korea"), O("National Museum of Korea", "https://www.museum.go.kr/site/eng/home")], when="600s"),
        F("A new home in 2005", "The museum moved to Yongsan in 2005, into a building 400 metres long, so big that a ten-storey stone pagoda from the Goryeo period stands inside it.",
          [W("National_Museum_of_Korea"), O("National Museum of Korea", "https://www.museum.go.kr/site/eng/home")], when="2005")]))
M.append(place("shanghai-museum", "Shanghai Museum", "museum", "Shanghai", 31.2286, 121.4752, 200, rank=25,
 blurb="Ancient Chinese bronzes, ceramics and paintings, in a building shaped like an ancient cooking vessel.",
 facts=[F("A building like a bronze ding", "The museum on People's Square, opened in 1996, has a round top on a square base, after the old Chinese idea of a round heaven over a square earth. Seen from afar it looks like a bronze ding.",
          [W("Shanghai_Museum"), O("Shanghai Museum", "https://www.shanghaimuseum.net/mu/frontend/pg/en/index")], when="1996")]))
M.append(place("terracotta-army", "Terracotta Army Museum", "museum", "Xi'an", 34.3853, 109.2785, 800, rank=26, short="Terracotta Army",
 blurb="The clay army that guards the tomb of China's first emperor.",
 facts=[F("Found by farmers digging a well", "In March 1974 farmers near Xi'an dug into pieces of clay soldiers. Archaeologists now think there are about 8,000 figures, each with its own face. Most are still underground.",
          [W("Terracotta_Army"), W("Mausoleum_of_the_First_Qin_Emperor")], when="1974", people=["qin-shi-huang"]),
        F("The tomb nobody has opened", "Qin Shi Huang's own burial mound has never been dug. The historian Sima Qian wrote that it held rivers of mercury; tests of the soil have found unusually high mercury.",
          [W("Mausoleum_of_the_First_Qin_Emperor"), W("Records_of_the_Grand_Historian")], lab="likely", people=["qin-shi-huang", "sima-qian"], go=["#e-qin-unifies", "Qin unifies China"])]))
M.append(place("hong-kong-palace-museum", "Hong Kong Palace Museum", "museum", "Hong Kong", 22.3015, 114.1597, 150, rank=27,
 blurb="Treasures lent from Beijing's Palace Museum, in a building opened in 2022 on the West Kowloon waterfront.",
 facts=[F("The Forbidden City by the harbour", "It opened in July 2022 with more than 900 objects lent from the Palace Museum in Beijing, many shown outside the capital for the first time.",
          [W("Hong_Kong_Palace_Museum"), O("Hong Kong Palace Museum", "https://www.hkpm.org.hk/en")], when="2022", go=["#place-palace-museum", "The Palace Museum, Beijing"])]))
M.append(place("national-museum-india", "National Museum", "museum", "New Delhi", 28.6119, 77.2193, 200, rank=30,
 blurb="India's largest museum, with about 200,000 objects over 5,000 years.",
 facts=[F("From an exhibition in London", "Indian treasures sent to the Royal Academy in London in 1947 and 1948 were shown in Delhi's Rashtrapati Bhavan when they came back. That show became the National Museum, which opened in its own building in 1960.",
          [W("National_Museum,_New_Delhi"), O("National Museum, New Delhi", "https://nationalmuseumindia.gov.in/en")], when="1949 to 1960"),
        F("The dancing girl of Mohenjo-daro", "A bronze girl, 10.5 centimetres tall, cast about 4,500 years ago in the Indus Valley, is one of the oldest bronze statues known.",
          [W("Dancing_Girl_(prehistoric_sculpture)"), W("Mohenjo-daro")], when="c. 2300 BC")]))
M.append(place("csmvs-mumbai", "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya", "museum", "Mumbai", 18.9269, 72.8326, 150, rank=32, short="CSMVS Museum",
 blurb="Mumbai's great museum, built as the Prince of Wales Museum in the Indo-Saracenic style.",
 facts=[F("Named twice", "The foundation stone was laid in 1905 by the Prince of Wales, the future George V, and the museum was named after him. In 1998 it was renamed after the Maratha king Shivaji.",
          [W("Chhatrapati_Shivaji_Maharaj_Vastu_Sangrahalaya"), O("CSMVS", "https://csmvs.in/")], when="1905 and 1998")]))
M.append(place("museum-islamic-art", "Museum of Islamic Art", "museum", "Doha", 25.2950, 51.5390, 200, rank=33,
 blurb="Fourteen centuries of Islamic art from three continents, on its own island in Doha Bay.",
 facts=[F("I. M. Pei's last great museum", "The architect of the Louvre pyramid, then in his late eighties, designed the building after travelling to study Islamic architecture. He said the fountain of the Ibn Tulun mosque in Cairo gave him the idea. It opened in 2008.",
          [W("Museum_of_Islamic_Art,_Doha"), W("I._M._Pei")], when="2008", go=["#place-louvre", "The Louvre"])]))
M.append(place("louvre-abu-dhabi", "Louvre Abu Dhabi", "museum", "Abu Dhabi", 24.5337, 54.3983, 200, rank=34,
 blurb="A museum under a vast lace dome, telling the history of art as one story of all humanity.",
 facts=[F("A rain of light", "Jean Nouvel's dome, 180 metres wide, is made of almost 8,000 metal stars in layers, so sunlight falls through in moving spots. The museum opened in 2017 under a 30-year agreement with France.",
          [W("Louvre_Abu_Dhabi"), O("Louvre Abu Dhabi", "https://www.louvreabudhabi.ae/en")], when="2017"),
        F("The missing Leonardo", "The Salvator Mundi, attributed to Leonardo, sold in 2017 for $450 million, the highest price ever paid for a painting. It was announced for this museum, but it has not been shown in public since. Experts still argue whether Leonardo painted it.",
          [W("Salvator_Mundi_(Leonardo)"), W("Louvre_Abu_Dhabi")], lab="disputed", when="2017", people=["leonardo"])]))
M.append(place("israel-museum", "The Israel Museum", "museum", "Jerusalem", 31.7724, 35.2042, 250, rank=35,
 blurb="Israel's largest cultural institution, home of the Dead Sea Scrolls.",
 facts=[F("The Shrine of the Book", "The Dead Sea Scrolls, found from 1947 in caves at Qumran, first by Bedouin shepherds, are the oldest known manuscripts of the Hebrew Bible. Their shrine has a white dome shaped like the lid of the jars they were found in.",
          [W("Shrine_of_the_Book"), W("Dead_Sea_Scrolls")], when="1947 onwards", go=["#place-jerusalem", "Jerusalem"])]))
M.append(place("zeitz-mocaa", "Zeitz MOCAA", "museum", "Cape Town", -33.9085, 18.4227, 150, rank=40,
 blurb="The largest museum of contemporary African art, carved out of a grain silo.",
 facts=[F("Galleries cut from concrete tubes", "The 42 tubes of a 1920s grain silo on the V&A Waterfront were sliced through to make an atrium shaped like a grain of corn. The museum opened in 2017.",
          [W("Zeitz_Museum_of_Contemporary_Art_Africa"), O("Zeitz MOCAA", "https://zeitzmocaa.museum/")], when="2017")]))
M.append(place("national-museums-kenya", "Nairobi National Museum", "museum", "Nairobi", -1.2737, 36.8144, 200, rank=41,
 blurb="Kenya's national museum, with some of the oldest human fossils ever found.",
 facts=[F("The Turkana Boy", "In 1984 a team led by Kamoya Kimeu and Richard Leakey found most of the skeleton of a boy who died near Lake Turkana about 1.5 million years ago. It is one of the most complete early human skeletons known, and the museum keeps the original.",
          [W("Turkana_Boy"), W("Nairobi_National_Museum")], when="1984")]))
M.append(place("black-civilisations", "Museum of Black Civilisations", "museum", "Dakar", 14.6795, -17.4448, 150, rank=42,
 blurb="A museum of Africa and its peoples around the world, first imagined in 1966 and opened in 2018.",
 facts=[F("A dream of 1966", "Senegal's first president, the poet Léopold Sédar Senghor, proposed a museum of Black civilisations at the World Festival of Black Arts in Dakar in 1966. It opened 52 years later, in 2018, in a round building inspired by the houses of southern Senegal.",
          [W("Museum_of_Black_Civilisations"), W("Léopold_Sédar_Senghor")], when="1966 and 2018")]))
M.append(place("ngv-melbourne", "National Gallery of Victoria", "museum", "Melbourne", -37.8226, 144.9689, 200, rank=36,
 blurb="Australia's oldest and most visited art museum, founded in 1861.",
 facts=[F("Cleopatra's banquet", "Giambattista Tiepolo's Banquet of Cleopatra, painted around 1743 to 1744, shows a story Pliny told, probably a legend: Cleopatra won a bet by dissolving a pearl in vinegar and drinking it. Catherine the Great once owned it; the Soviet government sold it to Melbourne in 1932.",
          [W("The_Banquet_of_Cleopatra_(Tiepolo)"), O("NGV", "https://www.ngv.vic.gov.au/")], when="1743 to 1744", people=["cleopatra", "catherine-the-great"])]))
M.append(place("te-papa", "Te Papa Tongarewa", "museum", "Wellington", -41.2905, 174.7820, 150, rank=43, short="Te Papa",
 blurb="New Zealand's national museum, telling the story of the land and its Māori and later settlers together.",
 facts=[F("A treasure box", "Te Papa Tongarewa means container of treasures in Māori. It opened in 1998 on the Wellington waterfront, built on rubber and lead bearings so it can ride out an earthquake.",
          [W("Museum_of_New_Zealand_Te_Papa_Tongarewa"), O("Te Papa", "https://www.tepapa.govt.nz/")], when="1998")]))
M.append(place("australian-museum", "Australian Museum", "museum", "Sydney", -33.8743, 151.2130, 150, rank=44,
 blurb="Australia's first museum, founded in 1827, with natural history and First Nations cultures.",
 facts=[F("The first museum in Australia", "It was founded in 1827, only 39 years after the First Fleet arrived, to collect the strange animals and minerals of the colony. The voyages of James Cook had first brought Australian specimens to Europe.",
          [W("Australian_Museum"), O("Australian Museum", "https://australian.museum/")], when="1827", people=["james-cook"])]))
M.append(place("masp", "São Paulo Museum of Art", "museum", "São Paulo", -23.5614, -46.6559, 150, rank=37, short="MASP",
 blurb="A red box floating over Avenida Paulista, with the best European art collection in the southern hemisphere.",
 facts=[F("A museum lifted off the ground", "Lina Bo Bardi's building of 1968 hangs from two red frames, leaving a free span of 74 metres below as a public square. Inside, she hung the paintings on glass easels, so you walk among them as in a crowd.",
          [W("São_Paulo_Museum_of_Art"), O("MASP", "https://masp.org.br/en")], when="1968"),
        F("Van Gogh in Brazil", "Among its Van Goghs is The Schoolboy, painted in Arles in 1888 of the postman Roulin's son. MASP also owns works by Renoir and Cézanne.",
          [W("São_Paulo_Museum_of_Art"), W("Roulin_Family")], when="1888", people=["van-gogh", "renoir", "cezanne"])]))
M.append(place("museu-nacional-rio", "National Museum of Brazil", "museum", "Rio de Janeiro", -22.9058, -43.2263, 250, rank=38,
 blurb="Brazil's oldest scientific institution, in a former imperial palace, rebuilding after a great fire.",
 facts=[F("The fire of 2018", "On 2 September 2018 a fire destroyed most of the museum's roughly 20 million objects, including Luzia, the oldest human skull found in the Americas. Luzia's skull was later found in pieces in the ruins and pieced back together. The 5-tonne Bendegó meteorite survived untouched.",
          [W("2018_National_Museum_of_Brazil_fire"), W("Bendegó_meteorite")], when="2018")]))
M.append(place("museo-del-oro", "Gold Museum", "museum", "Bogotá", 4.6019, -74.0721, 150, rank=39, short="Museo del Oro",
 blurb="More than 55,000 gold objects from the peoples of ancient Colombia.",
 facts=[F("The raft of El Dorado", "The Muisca Raft, a small gold model of a chief on a raft with his attendants, was found in a cave in 1969. It matches the old story of a chief covered in gold dust offering treasure in Lake Guatavita, the root of the El Dorado legend.",
          [W("Muisca_raft"), W("El_Dorado")], lab="myth", when="c. 600 to 1600")]))
M.append(place("national-museum-singapore", "National Museum of Singapore", "museum", "Singapore", 1.2966, 103.8485, 150, rank=45,
 blurb="Singapore's oldest museum, founded in 1849.",
 facts=[F("Older than the country", "It began as a library and museum of the Raffles Institution in 1849, when Singapore was a British trading post, and moved to its domed building on Stamford Road in 1887.",
          [W("National_Museum_of_Singapore"), O("National Museum of Singapore", "https://www.nhb.gov.sg/nationalmuseum")], when="1849 and 1887")]))
M.append(place("asian-civilisations", "Asian Civilisations Museum", "museum", "Singapore", 1.2875, 103.8514, 150, rank=46,
 blurb="Pan-Asian art and trade on the Singapore River.",
 facts=[F("A Tang ship's cargo", "The Tang Shipwreck, an Arab-style ship that sank off Belitung around 830, carried about 60,000 Chinese bowls and gold and silver from Tang China towards the Middle East. Most of the cargo is here.",
          [W("Belitung_shipwreck"), O("Asian Civilisations Museum", "https://www.nhb.gov.sg/acm")], when="c. 830", go=["#e-tang-founded", "The Tang dynasty"])]))
M.append(place("islamic-arts-malaysia", "Islamic Arts Museum Malaysia", "museum", "Kuala Lumpur", 3.1418, 101.6898, 150, rank=47,
 blurb="The largest museum of Islamic art in Southeast Asia, by the Lake Gardens.",
 facts=[F("Domes of turquoise", "It opened in 1998 with about 7,000 objects, from Qur'an manuscripts to models of great mosques. Its five domes are tiled inside in Iranian style.",
          [W("Islamic_Arts_Museum_Malaysia"), O("Islamic Arts Museum Malaysia", "https://www.iamm.org.my/")], when="1998", go=["#place-kuala-lumpur", "Kuala Lumpur"])]))
M.append(place("topkapi", "Topkapı Palace Museum", "museum", "Istanbul", 41.0115, 28.9834, 300, rank=28,
 blurb="The palace of the Ottoman sultans for almost 400 years, on the point between two seas.",
 facts=[F("Built after the conquest", "Sultan Mehmed II began the palace in 1459, six years after he took Constantinople. It was the centre of the Ottoman Empire until the 1850s, and became a museum in 1924, soon after the republic was founded.",
          [W("Topkapı_Palace"), O("Topkapı Palace Museum", "https://muze.gov.tr/muze-detay?SectionId=TSM01&DistId=MRK")], when="1459 to 1924", go=["#e-constantinople-falls", "The fall of Constantinople"]),
        F("The Holy Relics", "The Privy Chamber keeps objects that, by Muslim tradition, belonged to the Prophet Muhammad, peace be upon him, including a mantle and hairs of his beard. Qur'an is recited beside them through the day.",
          [W("Topkapı_Palace"), W("Sacred_Relics_(Topkapı_Palace)")], lab="tradition", people=["muhammad"])]))
M.append(place("museo-egizio", "Museo Egizio", "museum", "Turin", 45.0684, 7.6844, 150, rank=29,
 blurb="The oldest museum in the world devoted entirely to ancient Egypt.",
 facts=[F("Champollion's workshop", "The king of Sardinia bought the collection of Napoleon's consul in Egypt, Bernardino Drovetti, in 1824. That same year Jean-François Champollion, who had just cracked the hieroglyphs, came to study its papyri.",
          [W("Museo_Egizio"), W("Jean-François_Champollion")], when="1824", people=["napoleon"])]))
M.append(place("van-gogh-museum", "Van Gogh Museum", "museum", "Amsterdam", 52.3584, 4.8811, 150, rank=31,
 blurb="The largest collection of Van Gogh's work in the world, kept by his family.",
 facts=[F("The Potato Eaters", "Van Gogh painted The Potato Eaters in Nuenen in 1885 and thought it his first real work. He wanted the peasants to look as if they had dug up the potatoes they were eating.",
          [W("The_Potato_Eaters"), O("Van Gogh Museum", "https://www.vangoghmuseum.nl/en")], when="1885", people=["van-gogh"]),
        F("Saved by Jo", "After Vincent and Theo died, Theo's widow Jo van Gogh-Bonger kept the paintings, published the letters and lent the works to exhibitions until he was famous. Her son gave the collection to the nation.",
          [W("Johanna_van_Gogh-Bonger"), W("Van_Gogh_Museum")], people=["van-gogh"], go=["#place-amsterdam", "Amsterdam"])]))
M.append(place("musee-orangerie", "Musée de l'Orangerie", "museum", "Paris", 48.8638, 2.3227, 120, rank=48,
 blurb="Monet's Water Lilies, in two oval rooms lit by the sky.",
 facts=[F("A gift for peace", "On 12 November 1918, the day after the Armistice, Monet offered two paintings to France as a monument to peace. The gift grew into eight huge Water Lilies panels, installed here in 1927, a few months after he died.",
          [W("Water_Lilies_(Monet_series)"), O("Musée de l'Orangerie", "https://www.musee-orangerie.fr/en")], when="1918 to 1927", people=["monet"], go=["#e-ww1", "The First World War"])]))
M.append(place("musee-rodin", "Musée Rodin", "museum", "Paris", 48.8553, 2.3158, 150, rank=49,
 blurb="Rodin's studio house and rose garden, with The Thinker outside.",
 facts=[F("His gift to France", "Rodin gave all his works and his own collection to the state in 1916, on condition that the Hôtel Biron, where he worked, become his museum. It opened in 1919, two years after his death.",
          [W("Musée_Rodin"), O("Musée Rodin", "https://www.musee-rodin.fr/en")], when="1916 to 1919", people=["rodin"]),
        F("A room for Camille Claudel", "The museum has a room of sculptures by Camille Claudel, Rodin's student, model and lover, whose own work was overshadowed by his for a century.",
          [W("Camille_Claudel"), W("Musée_Rodin")], people=["claudel", "rodin"])]))
M.append(place("les-invalides", "Les Invalides", "museum", "Paris", 48.8550, 2.3125, 250, rank=50,
 blurb="A soldiers' hospital built by Louis XIV, now the Army Museum and Napoleon's tomb.",
 facts=[F("Napoleon came back", "Napoleon died on Saint Helena in 1821. In 1840 his body was brought back to Paris, and from 1861 it has lain under the golden dome, in a red stone tomb inside six coffins.",
          [W("Les_Invalides"), W("Retour_des_cendres")], when="1840 and 1861", people=["napoleon"], go=["#place-waterloo", "Waterloo"]),
        F("Built for old soldiers", "Louis XIV founded it in 1670 as a home for wounded and old soldiers. Some still live there today.",
          [W("Les_Invalides"), O("Musée de l'Armée", "https://www.musee-armee.fr/en/")], when="1670", people=["louis-xiv"])]))
M.append(place("v-and-a", "Victoria and Albert Museum", "museum", "London", 51.4966, -0.1722, 200, rank=51, short="The V&A",
 blurb="The world's largest museum of design and decorative arts, born from the Great Exhibition of 1851.",
 facts=[F("Raphael's cartoons", "Raphael's full-size designs for tapestries for the Sistine Chapel, made in 1515 and 1516, belong to the King and have hung at the V&A since 1865, lent by Queen Victoria.",
          [W("Raphael_Cartoons"), W("Victoria_and_Albert_Museum")], when="1515 and 1865", people=["raphael", "victoria"])]))
M.append(place("natural-history-london", "Natural History Museum", "museum", "London", 51.4967, -0.1764, 200, rank=52,
 blurb="A cathedral of nature, with about 80 million specimens.",
 facts=[F("Darwin on the stairs", "A marble statue of Charles Darwin sits at the top of the main staircase. The museum keeps specimens he collected on the voyage of the Beagle, among them his finches.",
          [W("Natural_History_Museum,_London"), W("Darwin's_finches")], people=["darwin"], go=["#e-origin-of-species", "On the Origin of Species"]),
        F("Hope the whale", "The skeleton of a blue whale named Hope dives from the ceiling of Hintze Hall. She stranded in Ireland in 1891 and replaced the famous diplodocus cast in 2017.",
          [W("Natural_History_Museum,_London"), O("Natural History Museum", "https://www.nhm.ac.uk/")], when="1891 and 2017")]))
M.append(place("deutsches-museum", "Deutsches Museum", "museum", "Munich", 48.1299, 11.5834, 250, rank=53,
 blurb="One of the largest museums of science and technology in the world, on an island in the Isar.",
 facts=[F("Founded by an engineer", "Oskar von Miller founded it in 1903 to show the masterpieces of science and technology. It opened on the Museumsinsel in 1925. Among its treasures are Karl Benz's first motor car of 1886 and Rudolf Diesel's first working engine of 1897.",
          [W("Deutsches_Museum"), O("Deutsches Museum", "https://www.deutsches-museum.de/en")], when="1903 to 1925")]))
M.append(place("mauritshuis", "Mauritshuis", "museum", "The Hague", 52.0804, 4.3143, 100, rank=54,
 blurb="A small palace with some of the best Dutch paintings of all.",
 facts=[F("Girl with a Pearl Earring", "Vermeer painted her around 1665. She is not a portrait but a tronie, a study of a face in an exotic turban. Nobody knows who sat for it.",
          [W("Girl_with_a_Pearl_Earring"), O("Mauritshuis", "https://www.mauritshuis.nl/en")], when="c. 1665", people=["vermeer"]),
        F("Rembrandt's anatomy lesson", "In 1632 the young Rembrandt painted the Amsterdam surgeons' guild watching Dr Nicolaes Tulp dissect a hanged thief's arm. It made his name.",
          [W("The_Anatomy_Lesson_of_Dr._Nicolaes_Tulp"), W("Mauritshuis")], when="1632", people=["rembrandt"])]))
M.append(place("kroller-muller", "Kröller-Müller Museum", "museum", "Otterlo, Netherlands", 52.0954, 5.8168, 300, rank=55,
 blurb="A museum in a national park, with the second largest Van Gogh collection.",
 facts=[F("The woman who bought Van Gogh early", "Helene Kröller-Müller bought almost 90 paintings and 180 drawings by Van Gogh from 1908, when few people wanted them. The Café Terrace at Night is hers.",
          [W("Kröller-Müller_Museum"), W("Helene_Kröller-Müller")], when="1908 onwards", people=["van-gogh"], go=["#place-arles", "Arles"])]))
M.append(place("nmaahc", "National Museum of African American History and Culture", "museum", "Washington, D.C.", 38.8911, -77.0326, 150, rank=56,
 blurb="The Smithsonian's museum of African American life, history and culture, opened in 2016.",
 facts=[F("Harriet Tubman's hymnal and shawl", "The museum keeps Harriet Tubman's hymn book and a silk shawl that Queen Victoria gave her around 1897, after reading about her life.",
          [O("NMAAHC", "https://nmaahc.si.edu/"), W("Harriet_Tubman")], when="c. 1897", people=["tubman", "victoria"])]))
M.append(place("getty-center", "The Getty Center", "museum", "Los Angeles", 34.0780, -118.4741, 300, rank=57,
 blurb="A hilltop museum of travertine stone above Los Angeles, free to visit.",
 facts=[F("Van Gogh's Irises", "Van Gogh painted Irises in May 1889, his first week at the asylum in Saint-Rémy. In 1987 it sold for a record $53.9 million; the Getty bought it in 1990.",
          [W("Irises_(painting)"), O("The Getty", "https://www.getty.edu/")], when="1889", people=["van-gogh"])]))
M.append(place("casa-azul", "Frida Kahlo Museum (La Casa Azul)", "museum", "Mexico City", 19.3551, -99.1625, 100, rank=58, short="La Casa Azul",
 blurb="The blue house in Coyoacán where Frida Kahlo was born and died.",
 facts=[F("Born and died in the same house", "Frida Kahlo was born here in 1907 and died here in 1954. Diego Rivera gave the house and its contents to the nation, and it opened as a museum in 1958.",
          [W("Frida_Kahlo_Museum"), O("Museo Frida Kahlo", "https://www.museofridakahlo.org.mx/")], when="1907 to 1958", people=["kahlo", "rivera"]),
        F("Trotsky's refuge", "Leon Trotsky, exiled from Stalin's Soviet Union, lived in the Blue House from 1937 to 1939. He moved to a house nearby, where a Soviet agent killed him in 1940.",
          [W("Leon_Trotsky"), W("Frida_Kahlo_Museum")], when="1937 to 1940", people=["trotsky", "stalin"])]))
M.append(place("hiroshima-peace-museum", "Hiroshima Peace Memorial Museum", "museum", "Hiroshima", 34.3915, 132.4525, 300, rank=59,
 blurb="A museum of the first atomic bombing, by the ruined dome that still stands.",
 facts=[F("6 August 1945, 8:15 in the morning", "An American bomber dropped an atomic bomb on Hiroshima. Around 140,000 people had died by the end of that year. The museum keeps the belongings of the dead, and asks that it never happen again.",
          [W("Atomic_bombings_of_Hiroshima_and_Nagasaki"), O("Hiroshima Peace Memorial Museum", "https://hpmmuseum.jp/?lang=eng")], when="1945", go=["#e-ww2", "The Second World War"]),
        F("The dome", "The Industrial Promotion Hall stood almost directly below the explosion, and its dome frame survived. It has been kept exactly as it was, and is a World Heritage Site.",
          [W("Hiroshima_Peace_Memorial"), O("UNESCO: Hiroshima Peace Memorial", "https://whc.unesco.org/en/list/775/")], when="1945")]))
print(len(M), "museums")
