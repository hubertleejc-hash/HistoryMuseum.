/* Contemporaries: second content layer (events kinds, extra events, works of art,
   everyday life, myths, honesty labels). Loaded after data.js.
   lab: "verified" | "likely" | "disputed" | "myth" */
(function(H){

/* kind of each existing event: war, turning, invention, discovery, movement, building, culture, disaster */
const KIND = {
  "great-pyramid":"building","first-olympics":"culture","qin-unifies":"turning","caesar-killed":"turning","vesuvius":"disaster",
  "rome-falls":"turning","tang-founded":"turning","charlemagne-crowned":"turning","oxford-teaching":"culture","mongol-empire":"turning",
  "magna-carta":"turning","tenochtitlan":"building","black-death":"disaster","malacca-founded":"turning","zheng-he-voyages":"discovery",
  "forbidden-city":"building","constantinople-falls":"war","gutenberg-bible":"invention","columbus-1492":"discovery","sistine-ceiling":"culture",
  "reformation":"movement","magellan-voyage":"discovery","aztec-fall":"war","armada":"war","globe-theatre":"culture",
  "tokugawa-shogunate":"turning","mayflower":"turning","taj-mahal":"building","qing-beijing":"war","great-fire":"disaster",
  "principia":"discovery","us-independence":"turning","penang-founded":"turning","french-revolution":"turning","macartney":"turning",
  "napoleon-crowned":"turning","waterloo":"war","photography":"invention","opium-war":"war","revolutions-1848":"turning",
  "origin-of-species":"discovery","us-civil-war":"war","meiji-restoration":"turning","suez-canal":"building","telephone":"invention",
  "eiffel-tower":"building","nintendo-founded":"culture","first-flight":"invention","xinhai-revolution":"turning","titanic":"disaster",
  "ww1":"war","russian-revolution":"turning","penicillin":"discovery","great-depression":"turning","ww2":"war",
  "india-independence":"turning","prc-founded":"turning","merdeka":"turning","sputnik":"invention","first-human-space":"discovery",
  "moon-landing":"discovery","berlin-wall":"turning"
};
H.events.forEach(e => { e.k = KIND[e.id] || "turning"; });
/* honesty label overrides for existing events (default: verified, or likely when the date is approximate) */
const EV_LAB = {"first-olympics":["likely","776 BC is the traditional starting date from ancient Greek lists of winners."],
  "oxford-teaching":["likely","Teaching is recorded in some form by 1096, but there is no single founding date."],
  "malacca-founded":["likely","Founding dates of about 1400 come from later chronicles and Chinese records."],
  "great-pyramid":["likely","The pyramid is certain; its date of about 2560 BC comes from king lists and radiocarbon dating, give or take a few decades."]};
H.events.forEach(e => { const o = EV_LAB[e.id]; if (o) { e.lab = o[0]; e.why = o[1]; } });

/* extra events: wars, movements, inventions */
H.events.push(
  {id:"peloponnesian-war", n:"Peloponnesian War", y:-431, e:-404, c:"greece", k:"war", t:"Athens and Sparta fought for almost 30 years. Sparta won, and Athens never fully recovered its power."},
  {id:"punic-wars", n:"Punic Wars", y:-264, e:-146, c:"italy", k:"war", t:"Three wars between Rome and Carthage. Hannibal crossed the Alps with elephants, but Rome destroyed Carthage in 146 BC."},
  {id:"paper", n:"Cai Lun improves papermaking", y:105, c:"china", k:"invention", lab:"likely", why:"The Han court official Cai Lun presented his method in AD 105, but older paper fragments show the idea existed before him.", t:"A cheap writing material made from bark, hemp and rags. It slowly spread west and reached Europe over a thousand years later."},
  {id:"gunpowder", n:"Gunpowder formula written down", y:1044, c:"china", k:"invention", t:"The Song dynasty military manual Wujing Zongyao gives the oldest known written recipes for gunpowder."},
  {id:"hundred-years-war", n:"Hundred Years' War", y:1337, e:1453, c:"france", k:"war", t:"England and France fought on and off for 116 years over the French crown. Joan of Arc turned the tide for France."},
  {id:"renaissance", n:"The Renaissance", y:1400, e:1600, a:1, c:"italy", k:"movement", lab:"likely", why:"Historians use 1400 to 1600 as a convenient span; the change was gradual and started earlier in some places.", t:"A rebirth of interest in ancient Greek and Roman learning that began in Italian cities and changed art, science and ideas across Europe."},
  {id:"wars-of-the-roses", n:"Wars of the Roses", y:1455, e:1487, c:"uk", k:"war", t:"Two branches of the English royal family fought for the throne until Henry Tudor won and founded the Tudor dynasty."},
  {id:"scientific-revolution", n:"The Scientific Revolution", y:1543, e:1687, c:"uk", k:"movement", lab:"likely", why:"A common span runs from Copernicus's book in 1543 to Newton's Principia in 1687; the start and end are a convention.", t:"Observation and experiment replaced ancient authority as the way to understand nature."},
  {id:"telescope", n:"Telescope invented", y:1608, c:"netherlands", k:"invention", t:"The Dutch spectacle maker Hans Lipperhey applied for a patent on a telescope. Galileo built his own the next year."},
  {id:"thirty-years-war", n:"Thirty Years' War", y:1618, e:1648, c:"germany", k:"war", t:"One of the most destructive wars in European history. Some German regions lost a third or more of their people."},
  {id:"english-civil-war", n:"English Civil War", y:1642, e:1651, c:"uk", k:"war", t:"Parliament fought King Charles I, who was put on trial and beheaded in 1649."},
  {id:"enlightenment", n:"The Enlightenment", y:1685, e:1815, a:1, c:"france", k:"movement", lab:"likely", why:"There is no agreed start or end; this span is one common convention.", t:"Thinkers argued that reason, science and rights should guide society instead of tradition and the church."},
  {id:"seven-years-war", n:"Seven Years' War", y:1756, e:1763, c:"germany", k:"war", t:"Fought across Europe, North America and India. Britain came out as the leading colonial power."},
  {id:"industrial-revolution", n:"The Industrial Revolution", y:1760, e:1840, a:1, c:"uk", k:"movement", lab:"likely", why:"1760 to 1840 is a common span for Britain; the change came later elsewhere.", t:"Machines, factories, coal and steam changed how goods were made, starting in Britain."},
  {id:"watt-engine", n:"Watt patents his steam engine", y:1769, c:"uk", k:"invention", t:"James Watt's separate condenser made steam engines far more efficient, powering mills and mines."},
  {id:"american-revolutionary-war", n:"American Revolutionary War", y:1775, e:1783, c:"usa", k:"war", t:"Thirteen colonies fought Britain for independence, with help from France."},
  {id:"smallpox-vaccine", n:"First vaccine", y:1796, c:"uk", k:"discovery", t:"Edward Jenner showed that cowpox could protect people against smallpox. The disease was declared eradicated in 1980."},
  {id:"rosetta-stone", n:"Rosetta Stone found", y:1799, c:"egypt", k:"discovery", t:"French soldiers found a stone with the same text in hieroglyphs and Greek. Champollion used it to read hieroglyphs in 1822."},
  {id:"napoleonic-wars", n:"Napoleonic Wars", y:1803, e:1815, c:"france", k:"war", t:"France under Napoleon fought shifting coalitions of European powers until his defeat at Waterloo."},
  {id:"slave-trade-abolished", n:"Britain bans the slave trade", y:1807, c:"uk", k:"turning", t:"Parliament outlawed the British slave trade. Slavery itself was abolished across most of the British Empire from 1834."},
  {id:"romanticism", n:"Romanticism", y:1800, e:1850, a:1, c:"germany", k:"movement", lab:"likely", why:"A conventional span; Romantic ideas began in the late 1700s.", t:"Artists put emotion, nature and the individual first. Beethoven, Byron and Chopin are its stars."},
  {id:"first-railway", n:"First public steam railway", y:1825, c:"uk", k:"invention", t:"The Stockton and Darlington Railway opened with George Stephenson's Locomotion No. 1."},
  {id:"telegraph", n:"Morse telegraph line opens", y:1844, c:"usa", k:"invention", t:"Samuel Morse sent \"What hath God wrought\" from Washington to Baltimore. News could now travel faster than a horse."},
  {id:"taiping-rebellion", n:"Taiping Rebellion", y:1850, e:1864, c:"china", k:"war", t:"A civil war against the Qing dynasty, among the deadliest in history, with an estimated 20 million or more dead."},
  {id:"perry-japan", n:"Commodore Perry arrives in Japan", y:1853, c:"japan", k:"turning", t:"American warships forced Japan to open its ports after more than two centuries of strict limits on foreign contact."},
  {id:"crimean-war", n:"Crimean War", y:1853, e:1856, c:"russia", k:"war", t:"Britain, France and the Ottomans fought Russia. Florence Nightingale's nursing work made her famous."},
  {id:"italy-unified", n:"Kingdom of Italy proclaimed", y:1861, c:"italy", k:"turning", t:"Most of the Italian peninsula was united under one king. Rome joined in 1870."},
  {id:"germany-unified", n:"German Empire founded", y:1871, c:"germany", k:"turning", t:"The German states united under the Prussian king, proclaimed emperor in the Hall of Mirrors at Versailles."},
  {id:"impressionism", n:"Impressionist exhibitions", y:1874, e:1886, c:"france", k:"movement", t:"A group of painters rejected by the official Salon held eight independent shows in Paris. A critic mocked them as \"Impressionists\" and the name stuck."},
  {id:"light-bulb", n:"Edison's light bulb", y:1879, c:"usa", k:"invention", t:"Edison's team made a carbon-filament bulb that lasted long enough to be practical. Others had made earlier bulbs."},
  {id:"first-car", n:"First practical car", y:1886, c:"germany", k:"invention", t:"Carl Benz patented his three-wheeled Motorwagen. In 1888 his wife Bertha drove it over 100 km to prove it worked."},
  {id:"radio-atlantic", n:"Radio signal crosses the Atlantic", y:1901, c:"uk", k:"invention", t:"Guglielmo Marconi received the letter S in Morse code in Newfoundland, sent from Cornwall."},
  {id:"relativity", n:"Einstein's special relativity", y:1905, c:"germany", k:"discovery", t:"In one year Einstein, then a patent clerk in Bern, published four papers that changed physics, including E = mc squared."},
  {id:"model-t", n:"Ford Model T launched", y:1908, c:"usa", k:"invention", t:"The first car built for ordinary families. Over 15 million were made."},
  {id:"television", n:"Television demonstrated", y:1926, c:"uk", k:"invention", t:"John Logie Baird showed moving images on a screen to scientists in London."},
  {id:"eniac", n:"ENIAC computer unveiled", y:1946, c:"usa", k:"invention", t:"One of the first general-purpose electronic computers, filling a large room."},
  {id:"dna", n:"Structure of DNA described", y:1953, c:"uk", k:"discovery", t:"Watson and Crick published the double helix, built on X-ray images made by Rosalind Franklin's lab."}
);
H.events.forEach(e => { if (!e.lab) e.lab = e.a ? "likely" : "verified"; });

/* connection honesty labels: key "a|b" as written in data.js */
H.connLab = {
  "kublai-khan|marco-polo":["likely","Some historians doubt parts of Polo's story, but most accept he spent years in China."],
  "leonardo|machiavelli":["likely","Both are recorded in the Arno project; how closely they worked together is not certain."],
  "tagore|gandhi":["likely","Their friendship is certain; whether Tagore first gave him the title Mahatma is debated."],
  "salieri|mozart":["verified","The rivalry is real. The poisoning story is a myth: see Myths."],
  "dickens|andersen":["verified","Dickens' daughter recorded the visit, and Dickens pinned a card on the guest room mirror after Andersen left."]
};

/* ---------- works of art, music and books ---------- */
H.works = [
  {id:"mona-lisa", n:"Mona Lisa", by:"leonardo", y:1503, e:1519, a:1, k:"painting", where:"Louvre, Paris", t:"A portrait of Lisa Gherardini, a Florentine merchant's wife. Leonardo kept working on it for years and took it to France. It became world famous after it was stolen from the Louvre in 1911."},
  {id:"school-of-athens", n:"The School of Athens", by:"raphael", y:1509, e:1511, k:"painting", where:"Vatican, Rome", t:"A fresco of ancient philosophers. Plato in the center is often said to have Leonardo's face, a likely but unproven reading."},
  {id:"the-prince", n:"The Prince", by:"machiavelli", y:1513, k:"book", t:"Written in 1513 while Machiavelli was out of a job, it was only printed in 1532, after his death."},
  {id:"don-quixote", n:"Don Quixote", by:"cervantes", y:1605, e:1615, k:"book", t:"Published in two parts. Often called the first modern novel."},
  {id:"hamlet", n:"Hamlet", by:"shakespeare", y:1600, a:1, k:"book", t:"Shakespeare's longest play, written around 1600. \"To be, or not to be\" comes from it."},
  {id:"night-watch", n:"The Night Watch", by:"rembrandt", y:1642, k:"painting", where:"Rijksmuseum, Amsterdam", t:"A huge group portrait of a city militia. It is not actually a night scene; dark varnish made it look like one."},
  {id:"pearl-earring", n:"Girl with a Pearl Earring", by:"vermeer", y:1665, a:1, k:"painting", where:"Mauritshuis, The Hague", t:"Not a portrait of a known person but a tronie, a study of a face. Nobody knows who the model was."},
  {id:"brandenburg", n:"Brandenburg Concertos", by:"bach", y:1721, k:"music", t:"Bach sent six concertos to a margrave in 1721. There is no record they were ever played for him."},
  {id:"four-seasons", n:"The Four Seasons", by:"vivaldi", y:1725, k:"music", t:"Four violin concertos published in 1725, each with a poem describing the season."},
  {id:"messiah", n:"Messiah", by:"handel", y:1742, k:"music", t:"First performed in Dublin in 1742 for charity. It became a fixture of Christmas and Easter."},
  {id:"figaro", n:"The Marriage of Figaro", by:"mozart", y:1786, k:"music", t:"A comic opera about servants outwitting their master, based on a play that had been banned in Vienna."},
  {id:"magic-flute", n:"The Magic Flute", by:"mozart", y:1791, k:"music", t:"Mozart's last opera, premiered two months before he died."},
  {id:"moonlight", n:"Moonlight Sonata", by:"beethoven", y:1801, k:"music", t:"Beethoven called it Sonata quasi una fantasia. A critic gave it the name Moonlight after Beethoven died."},
  {id:"eroica", n:"Symphony No. 3, Eroica", by:"beethoven", y:1804, k:"music", t:"Written for Napoleon. When Napoleon crowned himself emperor, Beethoven scratched his name off the title page so hard he tore the paper."},
  {id:"fifth", n:"Symphony No. 5", by:"beethoven", y:1808, k:"music", t:"Its four-note opening is maybe the most famous motif in music. Premiered in a freezing four-hour concert in Vienna in December 1808."},
  {id:"fur-elise", n:"Für Elise", by:"beethoven", y:1810, k:"music", lab:"likely", why:"The piece is Beethoven's; who Elise was is unknown, and the title may come from a misread dedication.", t:"A short piano piece found after Beethoven's death and published only in 1867."},
  {id:"pride-prejudice", n:"Pride and Prejudice", by:"jane-austen", y:1813, k:"book", t:"Published anonymously, credited only to \"the author of Sense and Sensibility\"."},
  {id:"frankenstein", n:"Frankenstein", by:"mary-shelley", y:1818, k:"book", t:"Begun in a ghost story contest at Lake Geneva in 1816, published anonymously in 1818."},
  {id:"ninth", n:"Symphony No. 9", by:"beethoven", y:1824, k:"music", t:"Premiered in Vienna in 1824. Beethoven, by then deaf, had to be turned around to see the audience applauding."},
  {id:"great-wave", n:"The Great Wave off Kanagawa", by:"hokusai", y:1831, a:1, k:"painting", where:"Copies in many museums", t:"A woodblock print, so thousands were made and sold cheaply. Mount Fuji sits tiny under the wave."},
  {id:"plum-park", n:"Plum Park in Kameido", by:"hiroshige", y:1857, k:"painting", t:"From Hiroshige's One Hundred Famous Views of Edo. Thirty years later Van Gogh copied it in oil."},
  {id:"war-and-peace", n:"War and Peace", by:"tolstoy", y:1869, k:"book", t:"Follows Russian families through Napoleon's invasion of 1812. Over 1,200 pages."},
  {id:"impression-sunrise", n:"Impression, Sunrise", by:"monet", y:1872, k:"painting", where:"Musée Marmottan Monet, Paris", t:"A misty view of the port of Le Havre. A critic used its title to mock the whole group as Impressionists."},
  {id:"swan-lake", n:"Swan Lake", by:"tchaikovsky", y:1877, k:"music", t:"Its first production in Moscow was not a success. A new staging in 1895, after Tchaikovsky's death, made it famous."},
  {id:"flowering-plum", n:"Flowering Plum Orchard (after Hiroshige)", by:"van-gogh", y:1887, k:"painting", where:"Van Gogh Museum, Amsterdam", t:"Van Gogh copied Hiroshige's print in oil, adding a border of Japanese characters copied from other prints."},
  {id:"sunflowers", n:"Sunflowers", by:"van-gogh", y:1888, k:"painting", where:"National Gallery, London and others", t:"Painted in Arles to decorate the room where Gauguin would stay. He made several versions."},
  {id:"cafe-terrace", n:"Café Terrace at Night", by:"van-gogh", y:1888, k:"painting", where:"Kröller-Müller Museum, Otterlo", t:"A night sky with no black in it. The cafe in Arles still exists."},
  {id:"starry-night", n:"The Starry Night", by:"van-gogh", y:1889, k:"painting", where:"Museum of Modern Art, New York", t:"Painted in June 1889 at the asylum in Saint-Rémy, from memory of the view east from his bedroom window. He called it a failure in a letter."},
  {id:"nutcracker", n:"The Nutcracker", by:"tchaikovsky", y:1892, k:"music", t:"A Christmas ballet that was not a hit at first. Today it is the most performed ballet in the world."},
  {id:"the-thinker", n:"The Thinker", by:"rodin", y:1904, k:"sculpture", where:"Musée Rodin, Paris", t:"First made as a small figure of the poet Dante for The Gates of Hell. The large version was cast in 1904."},
  {id:"the-kiss", n:"The Kiss", by:"klimt", y:1908, k:"painting", where:"Belvedere, Vienna", t:"Painted with real gold leaf during Klimt's Golden Period. The Austrian state bought it before it was even finished."},
  {id:"guernica", n:"Guernica", by:"picasso", y:1937, k:"painting", where:"Museo Reina Sofía, Madrid", t:"Picasso's response to the bombing of the Basque town of Guernica during the Spanish Civil War."},
  {id:"two-fridas", n:"The Two Fridas", by:"kahlo", y:1939, k:"painting", where:"Museo de Arte Moderno, Mexico City", t:"Painted the year she divorced Diego Rivera, showing two versions of herself holding hands."}
];
H.works.forEach(w => { if (!w.lab) w.lab = "verified"; });

/* ---------- everyday life: food and dress ---------- */
H.everyday = [
  {s:-3000, e:-500, n:"The Bronze Age", items:[
    {r:"Egypt", food:"Bread and beer were the daily staples. Pyramid workers received rations of both.", dress:"Simple linen: kilts for men, straight dresses for women. The rich wore wigs and eye makeup."},
    {r:"China", food:"Millet in the north, rice in the south.", dress:"Silk was already being made, but it was worn by the elite."}]},
  {s:-500, e:500, n:"Greece, Rome and Han China", items:[
    {r:"Rome", food:"Bread, olive oil, wine, and garum, a fermented fish sauce used like ketchup.", dress:"A simple tunic every day. The toga was for citizens on formal occasions."},
    {r:"Greece", food:"Barley, olives, figs and wine, usually mixed with water.", dress:"The chiton, a draped rectangle of cloth pinned at the shoulders."},
    {r:"China", food:"Rice, millet, soybeans, and pork.", dress:"Long robes with the collar crossed left over right."}]},
  {s:500, e:1000, n:"The early Middle Ages", items:[
    {r:"China", food:"Tea drinking spread widely in the Tang dynasty. Lu Yu wrote The Classic of Tea in the 700s.", dress:"Tang fashion was loose and colorful, with high-waisted skirts for women."},
    {r:"Baghdad", food:"Rice dishes, sugar, citrus and spices. Paper mills came to Baghdad around 795.", dress:"Layers of robes, with turbans for men."},
    {r:"Europe", food:"Pottage (a thick stew of grains and vegetables) and bread for most people.", dress:"Wool tunics, linen underclothes, cloaks."}]},
  {s:1000, e:1450, n:"The high Middle Ages", items:[
    {r:"China", food:"Song dynasty cities had restaurants and teahouses open late into the night, and the world's first paper money.", dress:"Long robes; foot binding for girls spread among wealthy families."},
    {r:"Mongolia", food:"Mutton, dairy and airag, fermented mare's milk.", dress:"The deel, a long wrapped coat still worn today."},
    {r:"Europe", food:"Bread, pottage and ale. Meat was for feast days unless you were rich.", dress:"Long gowns. Laws in many towns limited who could wear fur, silk or bright colors."}]},
  {s:1450, e:1600, n:"Renaissance and the Columbian Exchange", items:[
    {r:"The world", food:"After 1492, tomatoes, potatoes, maize and chili peppers began moving from the Americas to the rest of the world. Chili reached Asia in the 1500s.", dress:""},
    {r:"Aztec Mexico", food:"Maize tortillas, beans, squash. Chocolate was a frothy drink for the elite.", dress:"Cotton cloaks for nobles; commoners wore maguey fiber."},
    {r:"Europe", food:"Spices from Asia were status symbols on rich tables.", dress:"Slashed sleeves, then the stiff starched ruff collar in the late 1500s."}]},
  {s:1600, e:1700, n:"Coffee, tea and wigs", items:[
    {r:"England", food:"London's first coffeehouse opened in 1652. Tea became fashionable at court in the 1660s.", dress:"Men began wearing long curly periwigs, following the French court."},
    {r:"China", food:"New World crops like maize and sweet potato helped the population grow.", dress:"From 1645 the Qing ordered men to wear the queue: shaved forehead and a long braid."},
    {r:"Japan", food:"Edo grew into one of the world's largest cities, full of food stalls.", dress:"The kimono, in the colors and patterns the law allowed for your class."}]},
  {s:1700, e:1800, n:"The age of powdered wigs", items:[
    {r:"Europe", food:"Potatoes spread across Europe. Frederick the Great ordered Prussian farmers to grow them in 1756.", dress:"Powdered wigs, stays (corsets) and tricorn hats."},
    {r:"Britain", food:"Tea with sugar became an everyday drink for all classes.", dress:"Wide skirts on hoops for formal wear."}]},
  {s:1800, e:1850, n:"Regency and Romantic years", items:[
    {r:"France", food:"Nicolas Appert published his method of preserving food in sealed jars in 1810, the start of canned food.", dress:"High-waisted, light dresses inspired by ancient Greece; men switched from knee breeches to long trousers."},
    {r:"Britain", food:"A tin can for food was patented in 1810.", dress:"The top hat became the gentleman's standard."}]},
  {s:1850, e:1914, n:"The Victorian and Meiji years", items:[
    {r:"Europe and USA", food:"Margarine was invented in 1869 and Coca-Cola in 1886.", dress:"Huge crinoline skirts in the 1850s and 1860s, then the bustle."},
    {r:"Japan", food:"Beef eating, long avoided, became fashionable in the Meiji era.", dress:"From 1872 officials had to wear Western-style clothes on formal occasions."}]},
  {s:1914, e:1945, n:"World wars and the Jazz Age", items:[
    {r:"Britain", food:"Food rationing in both world wars. In the second, it lasted from 1940 to 1954.", dress:"Short flapper dresses and bobbed hair in the 1920s."},
    {r:"USA", food:"Sliced bread went on sale in 1928.", dress:"Women wore trousers for factory work in the Second World War."}]},
  {s:1945, e:2026, n:"The modern world", items:[
    {r:"Japan", food:"Momofuku Ando invented instant noodles in 1958.", dress:"Jeans became everyday wear around the world."},
    {r:"USA", food:"Frozen TV dinners went on sale in 1953.", dress:"T-shirts moved from underwear to outerwear."}]}
];

/* ---------- myths and legends (shown only when the myths switch is on) ---------- */
H.myths = [
  {id:"trojan-war", n:"The Trojan War", y:-1180, a:1, c:"turkey", lab:"myth", t:"Greek armies besiege Troy for ten years to win back Helen, and finally get inside hidden in a wooden horse.", source:"Homer's Iliad and Odyssey, composed around the 700s BC, centuries after the war is set.", found:"The real city of Troy has been dug up at Hisarlik in Turkey, and one of its layers was destroyed around 1180 BC. There is no evidence for the wooden horse or for Helen."},
  {id:"rome-founding", n:"Romulus founds Rome", y:-753, c:"italy", lab:"myth", t:"Twin brothers raised by a she-wolf; Romulus kills Remus and founds the city.", source:"Roman writers such as Livy, writing around 700 years later.", found:"Archaeology shows huts on the Palatine Hill from about the 700s BC, so the date is roughly right. The twins and the wolf are legend."},
  {id:"king-arthur", n:"King Arthur", y:500, a:1, c:"uk", lab:"myth", t:"A British king with a round table of knights and the sword Excalibur, who fought the Saxons.", source:"First named in the Historia Brittonum around 830. Geoffrey of Monmouth made him a full legend in 1136.", found:"No writer of Arthur's own time mentions him. Most historians think he is legend, possibly built on a real war leader."},
  {id:"great-flood", n:"The great flood stories", y:-2100, a:1, c:"iraq", lab:"myth", t:"A god sends a flood to destroy humanity and one family survives in a boat.", source:"The oldest written version is in Mesopotamian texts such as the Epic of Gilgamesh. Similar stories appear in the Bible (Noah), India (Manu) and Greece (Deucalion).", found:"There is evidence of big local floods in Mesopotamia, but no sign of a flood that covered the whole Earth."},
  {id:"mozart-poisoned", n:"Salieri poisoned Mozart", y:1791, c:"austria", lab:"myth", t:"The jealous Salieri murdered his young rival.", source:"Rumors in Vienna in the 1820s, then Pushkin's play (1830) and the film Amadeus (1984).", found:"Mozart died of an illness; no evidence points to poison. Salieri even taught Mozart's son."},
  {id:"newton-apple", n:"An apple hit Newton on the head", y:1666, c:"uk", lab:"disputed", t:"An apple falling on his head gave Newton the idea of gravity.", source:"Newton told his friend William Stukeley that a falling apple set him thinking about gravity.", found:"The falling apple is in Newton's own account. The bonk on the head is a later joke."},
  {id:"marie-antoinette-cake", n:"\"Let them eat cake\"", y:1789, c:"france", lab:"myth", t:"Told that the poor had no bread, the queen said they should eat cake.", source:"Rousseau wrote the line about \"a great princess\" in his Confessions, written when Marie Antoinette was still a child in Austria.", found:"There is no evidence she ever said it."},
  {id:"napoleon-short", n:"Napoleon was very short", y:1804, c:"france", lab:"myth", t:"A tiny man compensating with conquest.", source:"British cartoons, and confusion between French and English inches.", found:"He was about 1.69 m (5 ft 7 in), average for a Frenchman of his time."},
  {id:"columbus-flat", n:"Columbus proved the Earth was round", y:1492, c:"spain", lab:"myth", t:"Everyone thought he would sail off the edge of a flat world.", source:"Popularized by Washington Irving's 1828 biography of Columbus.", found:"Educated Europeans had known the Earth was round since ancient Greece. The debate was about its size, and Columbus had it wrong."},
  {id:"horned-helmets", n:"Vikings wore horned helmets", y:900, c:"norway", lab:"myth", t:"Raiders in helmets with horns.", source:"Costumes for Wagner's Ring operas in 1876 made the look famous.", found:"The only well-preserved Viking helmet ever found, from Gjermundbu in Norway, has no horns."},
  {id:"einstein-math", n:"Einstein failed math", y:1895, c:"germany", lab:"myth", t:"The genius who was bad at school.", source:"A 1935 Ripley's Believe It or Not item.", found:"When shown the item, Einstein said he had mastered calculus before he was 15. He did fail the general part of a college entrance exam at 16, while doing well in math and physics."},
  {id:"van-gogh-ear", n:"Van Gogh only cut off his earlobe", y:1888, c:"france", lab:"disputed", t:"For a century many books said he cut off only a small part of his ear.", source:"Accounts at the time differed.", found:"In 2016 researcher Bernadette Murphy found a drawing by his doctor, Félix Rey, showing that almost the whole left ear was cut off."}
];

})(window.HISTORY);
