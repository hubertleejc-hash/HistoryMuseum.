/* Museum chapters (Van Gogh, Beethoven, Napoleon, Cleopatra and Leonardo are written; add more in the same format). Each chapter: hero, portrait and scene are image slugs from img/manifest.json. A paragraph is a plain string (settled history) or
   {t, lab, why} when it needs an honesty label. Labels: verified, likely,
   disputed, myth. myths: {c: claim, lab, t: what we actually know}.
   kw: extra search words. A word lands on the section that mentions it most;
   "word@k" sends it to section k instead (e.g. "ear@myths"). */
window.HISTORY.chapters = window.HISTORY.chapters || {};
Object.assign(window.HISTORY.chapters, {

"van-gogh": {
  hero: "cafe-terrace", portrait: "vg-self-1887", scene: "starry-night",
  kw: ["ear@myths","earlobe@myths","Sunflowers","Starry Night","Theo","Gauguin","Arles","Yellow House","Potato Eaters","Saint-Rémy","Auvers","Johanna","Red Vineyard"],
  lede: "A failed art dealer, teacher and preacher who taught himself to paint at 27, made about 860 paintings in ten years, and died almost unknown. His brother's widow made him famous.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Vincent van Gogh was born in 1853 in the Dutch village of Groot-Zundert, the eldest surviving son of a Protestant pastor. He failed at three careers before deciding, at 27, to become an artist with almost no training.",
      "In the ten years he had left he made about 860 oil paintings and well over a thousand drawings and watercolours, most of them in his last five years. His brother Theo paid for nearly all of it.",
      "He lived with a serious mental illness, cut off his ear in December 1888, spent a year in an asylum, and died of a gunshot wound in July 1890, aged 37. Today he is one of the most famous painters who ever lived, mostly because of his sister-in-law, Johanna van Gogh-Bonger."
    ]},
    {k:"early", h:"Early life", ps:[
      "Vincent was named after a brother who was stillborn exactly a year before him, and he grew up in a strict, loving, rather serious household. He was a solitary child who liked walking in the fields and collecting beetles and birds' nests.",
      "At 16, in 1869, an uncle found him a job with the international art dealers Goupil and Co. He worked in The Hague, then London from 1873 and Paris from 1875. In London he fell for his landlady's daughter, was turned down, and grew withdrawn and intensely religious. Goupil dismissed him in 1876.",
      "He taught at small boarding schools in Ramsgate and Isleworth in England, worked in a bookshop in Dordrecht, and studied in Amsterdam to enter university for theology, then gave up. In 1879 he became a lay preacher among coal miners in the Borinage in Belgium. He gave away his clothes and slept on straw, and the church let him go for 'excessive zeal'.",
      "In 1880, broke and 27, he wrote to Theo that he would become an artist. It was the first plan that stuck."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "The Hague, 1881 to 1883. He took lessons from his cousin by marriage, the painter Anton Mauve, and moved in with Sien Hoornik, a pregnant former sex worker, and her daughter. His family was appalled, Mauve broke with him, and in 1883 he left her.",
      "Nuenen, 1883 to 1885. Back with his parents in Brabant he painted weavers and peasants in browns and greys. His father died suddenly in March 1885, and a month later he finished The Potato Eaters, a family eating by lamplight, his first big ambition.",
      "Paris, 1886 to 1888. He arrived unannounced at Theo's flat. At Fernand Cormon's studio he met Henri de Toulouse-Lautrec and Émile Bernard, and he saw the Impressionists, Seurat's dots and Japanese woodblock prints. His palette exploded. He painted about two dozen self-portraits there, because he could not afford models.",
      "Arles, 1888. Worn out by Paris, he went south in February, rented the Yellow House, and painted orchards, the Café Terrace at Night and the Sunflowers. Paul Gauguin came in October, paid for by Theo. They argued for two months. On 23 December, after a quarrel, Vincent cut off his left ear with a razor and gave it to a young woman at a local brothel.",
      "Saint-Rémy, 1889. In May he entered the asylum of Saint-Paul-de-Mausole of his own free will. Between attacks he painted about 150 canvases in a year, including The Starry Night in June, worked up from the view from his window.",
      "Auvers, 1890. In May he moved to Auvers-sur-Oise near Paris, under the eye of Dr Paul Gachet, and painted about 70 pictures in about 70 days. On 27 July he was shot in the chest. He died on 29 July with Theo beside him."
    ]},
    {k:"works", h:"The work", ps:[
      "The Potato Eaters (1885) is dark on purpose: he wanted it to look like it was painted with the colour of a dusty potato.",
      "The Sunflowers (1888 to 1889) are a series. He painted four in Arles to decorate Gauguin's room, then made repetitions of them. Versions hang in London, Amsterdam, Munich, Philadelphia and Tokyo.",
      "The Café Terrace at Night (1888) was his first painting of a starry sky, painted on the spot at night. The Night Café, painted the same month, is its opposite: he said he wanted to show a place where one could go mad or commit a crime.",
      "The Starry Night (1889) is now at the Museum of Modern Art in New York. He did not think much of it at the time and called it a failure in a letter to Bernard.",
      "Wheatfield with Crows (1890) is often said to be his last painting. It is not: experts think Tree Roots was probably the last, left unfinished on the morning he was shot.",
      "His letters are a work in themselves. Around 820 of his letters survive, more than 650 of them to Theo, full of sketches and ideas about colour. They are why we know him so well."
    ]},
    {k:"people", h:"His people", ps:[
      "Theo van Gogh (1857 to 1891), his younger brother, an art dealer in Paris, sent him money every month from 1880 until the end. Without Theo there would be no Van Gogh.",
      "Paul Gauguin shared the Yellow House for nine weeks. They admired and irritated each other, and Gauguin left right after the ear. They wrote to each other afterwards but never met again.",
      "Johanna van Gogh-Bonger, Theo's wife from 1889, was left a widow with a baby in 1891. She inherited the paintings and spent 34 years making the world see them.",
      "Dr Félix Rey treated him in Arles, and Dr Paul Gachet in Auvers. He painted portraits of both. Joseph Roulin, the Arles postman, and his family sat for more than twenty portraits and stayed loyal friends."
    ]},
    {k:"world", h:"The world around him", ps:[
      "His lifetime ran from the Crimean War to the eve of the motor car. Paris was rebuilt with wide boulevards in the 1850s and 1860s, and the Impressionists held their first show there in 1874, when he was 20.",
      "Japan had opened to the West in the 1850s, and cheap woodblock prints flooded Paris. He and Theo collected hundreds. Hokusai and Hiroshige changed how he drew outlines and flat colour.",
      "In 1889, while he was in the asylum, the Eiffel Tower opened for the Paris World's Fair. Thomas Edison, Buffalo Bill and the young Claude Debussy all visited that fair.",
      "He was an almost exact contemporary of people who never heard of him: Thomas Edison was born six years before him, and Sigmund Freud three years after."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "Theo died six months after Vincent, in January 1891. Johanna sold paintings one at a time to the right collectors, lent them to shows, and in 1905 helped mount a show of nearly 500 works at the Stedelijk Museum in Amsterdam. In 1914 she published the letters.",
      "By the time she died in 1925 he was world famous. Her son, also named Vincent, kept the collection together, and the Van Gogh Museum opened in Amsterdam in 1973.",
      "His style, with thick paint, pure colour and feeling over accuracy, fed directly into Expressionism and Fauvism. In 1990 his Portrait of Dr Gachet sold for 82.5 million dollars, then a record."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He sold only one painting in his whole life.", lab:"disputed", t:"The Red Vineyard, bought by the painter Anna Boch in 1890 for 400 francs, is the only fully documented sale of a painting. There are records or hints of a few other sales and swaps, so 'only one, ever' is too strong. He earned almost nothing from art."},
      {c:"He cut off just a small piece of his earlobe.", lab:"disputed", t:"In 2016 the researcher Bernadette Murphy published a sketch by his doctor, Félix Rey, showing the cut took almost the whole left ear. How much was removed was argued about for a century; the doctor's drawing settled most of it."},
      {c:"He was shot by local boys, not by himself.", lab:"disputed", t:"Biographers Steven Naifeh and Gregory White Smith argued this in 2011. Van Gogh Museum researchers and most experts still conclude it was suicide: he said so himself, and his illness fits. Nobody saw it happen and no gun was found at the time."},
      {c:"He was mad.", lab:"disputed", t:"He had repeated attacks of a severe illness, with long clear periods in which he painted and wrote brilliantly. His doctors thought it was a kind of epilepsy. Modern guesses include bipolar disorder and others, worsened by drink, poor food and exhaustion. There is no agreed diagnosis."},
      {c:"He painted The Starry Night outdoors at night.", lab:"myth", t:"He painted it in his studio room in daytime, from sketches and memory of the view from his window. The Café Terrace at Night, a year earlier, was the one painted on the spot at night."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Vincent van Gogh: The Letters, with notes, Van Gogh Museum", u:"https://vangoghletters.org"},
      {n:"Van Gogh Museum, Amsterdam", u:"https://www.vangoghmuseum.nl"},
      {n:"Johanna van Gogh-Bonger, memoir in the 1914 edition of the letters"},
      {n:"Steven Naifeh and Gregory White Smith, Van Gogh: The Life (2011)"},
      {n:"Bernadette Murphy, Van Gogh's Ear (2016)"},
      {n:"Martin Bailey, Starry Night: Van Gogh at the Asylum (2018)"}
    ]}
  ]
},

"beethoven": {
  hero: "beethoven-stieler", portrait: "beethoven-stieler",
  kw: ["deaf","deafness","Eroica","Ode to Joy","Ninth Symphony","Fifth Symphony","Immortal Beloved","Heiligenstadt","Moonlight Sonata","Für Elise","Vienna","Haydn"],
  lede: "A court musician's son from Bonn who became the most famous composer in Europe while slowly going deaf, and who wrote some of his greatest music when he could no longer hear it.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Ludwig van Beethoven was born in Bonn, in the Rhineland, in December 1770. At 21 he moved to Vienna, where he became the most exciting pianist in the city and then its most famous composer.",
      "From his late twenties he went deaf, slowly and then almost completely. He kept composing: nine symphonies, 32 piano sonatas, an opera, the Missa solemnis and the late string quartets.",
      "He died in Vienna on 26 March 1827, aged 56. Thousands of people lined the streets for his funeral."
    ]},
    {k:"early", h:"Early life", ps:[
      {t:"He was baptised on 17 December 1770. His birthday is usually given as 16 December, because babies were normally baptised the next day, but no record of the birth itself survives.", lab:"likely", why:"Only the baptism entry in the parish register survives."},
      "His grandfather, also Ludwig, was the respected music director at the court of the Elector of Cologne in Bonn. His father Johann was a court tenor who drank heavily and drilled the boy hard at the keyboard, hoping for a second Mozart.",
      "His real teacher was the court organist Christian Gottlob Neefe, who had him play Bach and helped publish his first piece when he was 12. By his teens he was assistant organist and played viola in the court orchestra.",
      {t:"In 1787, aged 16, he travelled to Vienna, perhaps hoping to study with Mozart. Whether they met is unknown. Within weeks he was called home because his mother was dying of tuberculosis.", lab:"disputed", why:"The visit is documented. A meeting with Mozart is only told in stories written down decades later."},
      "After she died, his father's drinking got worse. At 18 Ludwig went to court to have half his father's pay sent directly to him, so he could support his two younger brothers."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Vienna, 1792. With the Elector's support he went to study with Joseph Haydn. The lessons did not go well, and he took extra ones in secret from other teachers. He made his name first as a pianist, famous for wild improvisations, and found rich patrons such as Prince Karl Lichnowsky.",
      "Deafness, from about 1798. He noticed a ringing and loss of hearing in his late twenties. In October 1802, at Heiligenstadt outside Vienna, he wrote a letter to his brothers that was never sent. In it he admits he had thought of ending his life and says only his art held him back. It was found among his papers after he died.",
      "The heroic years, 1803 to 1812. He poured out the Eroica Symphony, the Fifth and Sixth Symphonies, the Emperor piano concerto, the Violin Concerto and his opera Fidelio. In 1809 three noblemen, Archduke Rudolph and Princes Lobkowitz and Kinsky, promised him a yearly income to stop him leaving Vienna for a job elsewhere.",
      {t:"The Immortal Beloved, 1812. In July 1812 he wrote a passionate letter to a woman he calls only 'my immortal beloved'. It was never sent and her name is not in it. Antonie Brentano, a married woman in his circle, is the strongest candidate, but nobody knows.", lab:"disputed", why:"The letter survives; who it was written to has been argued about for two hundred years."},
      "Karl, from 1815. When his brother Kaspar Karl died, Beethoven fought the boy's mother in court for years to become guardian of his nephew Karl. It was bitter and draining for everyone. In 1826 Karl tried to shoot himself, and survived.",
      "Silence, from 1818. By now he was so deaf that visitors wrote to him in conversation books. About 140 survive, giving us one side of thousands of his conversations.",
      "The Ninth, 1824. The Ninth Symphony, with its choral finale on Schiller's Ode to Joy, was premiered on 7 May 1824. Beethoven stood beside the conductor, beating time he could not hear."
    ]},
    {k:"works", h:"The work", ps:[
      "The Eroica, Symphony No. 3 (1804), is twice as long as most symphonies of its day and changed what a symphony could be.",
      "The Fifth Symphony (1808) opens with four notes that are probably the best-known in music. It was first played at a freezing four-hour concert on 22 December 1808 that also premiered the Sixth, the Pastoral.",
      "The Moonlight Sonata (1801) did not have that name in his lifetime. A critic, Ludwig Rellstab, compared it to moonlight on Lake Lucerne after Beethoven had died.",
      "Fidelio, his only opera, is about a wife who disguises herself as a man to rescue her husband from a political prison. It failed in 1805 and succeeded in its revised form in 1814.",
      "Für Elise was not published until 1867, forty years after his death. Who 'Elise' was is not known, and the title may come from a misread manuscript.",
      "The late string quartets (1825 to 1826) baffled people at the time. Today many musicians think they are his greatest works."
    ]},
    {k:"people", h:"His people", ps:[
      "Joseph Haydn, his teacher, called him 'the Great Mogul' for his arrogance. They respected each other more than they liked each other.",
      "Archduke Rudolph, the emperor's youngest brother, was his piano pupil, friend and most loyal patron. The Archduke Trio and the Missa solemnis are dedicated to him.",
      "Ferdinand Ries, his pupil, wrote memoirs that are the source of many famous stories, including the Eroica title page.",
      "Franz Schubert lived in the same city for 30 years and revered him. Schubert was one of the torchbearers at his funeral and died the next year."
    ]},
    {k:"world", h:"The world around him", ps:[
      "He was 18 when the French Revolution began, and his whole working life was shadowed by Napoleon. French armies occupied Vienna twice, in 1805 and 1809. During the 1809 bombardment he hid in his brother's cellar with pillows over his ears to protect what was left of his hearing.",
      "Pianos were changing fast. In his lifetime they grew from about five octaves to six and a half, and became louder and stronger. His music kept pushing past what the instruments could do.",
      "Goethe, Napoleon, Jane Austen and Hokusai were all alive at the same time as him. He met Goethe in 1812 at the spa town of Teplitz. Each admired the other's work and found the man difficult."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "He changed the composer from a servant of the court into an independent artist, and turned the symphony into a personal statement. Almost every composer of the 1800s worked in his shadow; Brahms took over twenty years to finish his first symphony.",
      "The Ode to Joy from the Ninth is the anthem of the European Union. A copy of the Fifth's opening is on the Golden Record carried by the two Voyager spacecraft."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He was completely deaf when he wrote all his great music.", lab:"myth", t:"His hearing faded over about 20 years. He wrote the Eroica and the Fifth while he could still hear a good deal. He was very deaf by the time of the Ninth and the late quartets."},
      {c:"He tore up the dedication of the Eroica when Napoleon crowned himself emperor.", lab:"likely", t:"The story comes from his pupil Ferdinand Ries, writing years later. A surviving copy of the score does have 'Bonaparte' scratched out so hard it made a hole in the paper, which supports it. He renamed the symphony 'Eroica'."},
      {c:"At the first Ninth, someone turned him round to see the applause.", lab:"likely", t:"Several people who were there remembered it, the singer Caroline Unger is usually named, and details vary. It is very probably true, but it was written down second-hand."},
      {c:"Lead poisoning made him deaf and killed him.", lab:"disputed", t:"A 2023 study of his DNA from authenticated hair found a high genetic risk of liver disease and a hepatitis B infection, and could not explain the deafness. One famous lock that had shown lead turned out to be from a woman."},
      {c:"He met Mozart, who said 'Keep an eye on him; one day he'll give the world something to talk about.'", lab:"myth", t:"The quote appears only in a biography written long after both men died. Whether they ever met is unknown."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Beethoven-Haus Bonn, digital archive", u:"https://www.beethoven.de"},
      {n:"Jan Swafford, Beethoven: Anguish and Triumph (2014)"},
      {n:"Maynard Solomon, Beethoven (revised edition, 1998)"},
      {n:"Begg and others, 'Genomic analyses of hair from Ludwig van Beethoven', Current Biology (2023)"},
      {n:"Ferdinand Ries and Franz Wegeler, Biographical Notes on Beethoven (1838)"}
    ]}
  ]
},

"napoleon": {
  hero: "napoleon-alps", portrait: "napoleon-study", scene: "napoleon-alps",
  kw: ["Waterloo","Elba","Saint Helena","Josephine","Joséphine","Sphinx","Austerlitz","height","Code Napoléon","Haiti","slavery","Moscow","Alps"],
  lede: "A minor Corsican noble who became emperor of the French at 35, redrew the map of Europe, wrote a law code still in use, restored slavery, and died a prisoner on an island in the Atlantic.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Napoleon Bonaparte was born in 1769 on Corsica, an island France had bought from Genoa the year before. A brilliant artillery officer, he rose through the chaos of the French Revolution, seized power in 1799 and crowned himself emperor in 1804.",
      "His armies conquered most of Europe. His Civil Code still shapes the law in France and many other countries. He also restored slavery in the French colonies in 1802, and his wars killed millions.",
      "He lost a huge army in Russia in 1812, was exiled to Elba, came back for a hundred days, lost at Waterloo in 1815, and died on Saint Helena in 1821, aged 51."
    ]},
    {k:"early", h:"Early life", ps:[
      "He was born Napoleone di Buonaparte in Ajaccio on 15 August 1769, the second of eight surviving children of Carlo Buonaparte, a lawyer from the island's minor nobility, and Letizia Ramolino. His first language was Corsican Italian.",
      "At nine he was sent to a French military school at Brienne, where other boys mocked his accent and his poverty. He read constantly. In 1785, at 16, he became an artillery lieutenant, the year his father died.",
      "As a young man he was a Corsican patriot. He only turned fully French after his family fell out with the island's leader, Pasquale Paoli, and had to flee to the mainland in 1793."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Toulon, 1793. As a 24-year-old captain he planned the artillery attack that drove the British out of the port of Toulon. He was made a brigadier general.",
      "Paris, 1795. When royalists rose against the government, he defended it by firing cannon into the crowd. It made him a political figure. The next year he married Joséphine de Beauharnais, a widow with two children.",
      "Italy, 1796 to 1797. Given a ragged army, he beat the Austrians again and again and made peace on his own terms. Paintings and printed bulletins made him a celebrity.",
      "Egypt, 1798 to 1799. He invaded Egypt with an army and 167 scholars and scientists. The British admiral Nelson sank his fleet at the Battle of the Nile, but the expedition's scholars studied the country, and his soldiers found the Rosetta Stone in 1799. He slipped back to France and left the army behind.",
      "Power, 1799 to 1804. In a coup in November 1799 he became First Consul. He made peace with the Catholic Church, set up the Bank of France and the lycée schools, and in 1804 issued the Civil Code. In December 1804 he crowned himself emperor in Notre-Dame, with the pope looking on.",
      {t:"Slavery, 1802. He restored slavery and the slave trade in the French colonies that had kept it, and sent an army to retake Saint-Domingue. Its leader Toussaint Louverture was captured and died in a French prison in 1803. The French army was defeated, and Haiti declared independence on 1 January 1804.", lab:"verified", why:"The law of 20 May 1802 and the expedition's own records survive."},
      "Austerlitz to Moscow, 1805 to 1812. He crushed Austria and Russia at Austerlitz in 1805 and Prussia in 1806, and made his brothers kings. But the British navy had won at Trafalgar, and Spain rose against him from 1808. In 1812 he invaded Russia with more than 400,000 men. Moscow burned, winter came, and only a small part of the army got out.",
      "The fall, 1813 to 1815. Beaten at Leipzig in 1813, he abdicated in April 1814 and was sent to the island of Elba. In March 1815 he escaped and retook France without a shot. On 18 June 1815 Wellington and the Prussian commander Blücher beat him at Waterloo."
    ]},
    {k:"works", h:"What he built", ps:[
      "The Civil Code of 1804, the Napoleonic Code, set out equality of men before the law, property rights and secular marriage. It also made wives legally subject to their husbands. It became the model for law codes from Belgium to Louisiana to Latin America.",
      "He created the Legion of Honour in 1802, an award still given today, and the centralised system of prefects that still runs France's regions.",
      "His Egyptian expedition produced the Description of Egypt, a huge illustrated study that started modern Egyptology."
    ]},
    {k:"people", h:"His people", ps:[
      "Joséphine, his first wife, was unfaithful early in the marriage and he later was too. He divorced her in 1809 because she had not given him an heir, and they stayed fond of each other. In 1810 he married Marie-Louise of Austria, who bore his son in 1811.",
      "Jacques-Louis David painted him crossing the Alps and crowning himself. Napoleon understood images better than almost any ruler before him.",
      "The Duke of Wellington beat his marshals in Spain and him at Waterloo. They never met in person.",
      "Beethoven admired him as a hero of liberty, then turned on him. Goethe met him in 1808 and was impressed; Napoleon told him he had read The Sorrows of Young Werther seven times."
    ]},
    {k:"world", h:"The world around him", ps:[
      "He was a child when the American colonies declared independence, and 19 when the French Revolution began. To the rest of Europe's kings he was the Revolution with an army.",
      "The wars reshaped the globe. Needing money, he sold Louisiana to the United States in 1803, doubling its size. His invasion of Spain loosened Spain's grip on Latin America, which broke away within twenty years.",
      "While he fought, Beethoven wrote the Eroica, Jane Austen wrote her novels, and Hokusai was making his first great prints in Edo."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "He swept away the Holy Roman Empire, which ended in 1806, and hundreds of small German states. Without meaning to, he helped create German and Italian nationalism.",
      "His body was brought back to Paris in 1840 and lies under the dome of Les Invalides. Historians still argue whether he was the heir of the Revolution or its betrayer, and the argument is part of his legacy."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He was tiny.", lab:"myth", t:"He was about 1.69 metres, around 5 feet 7 inches, average for a Frenchman of his time. The confusion comes partly from French inches being longer than English ones, partly from his nickname 'the little corporal', and partly from British cartoons."},
      {c:"He crossed the Alps on a rearing white horse.", lab:"myth", t:"He crossed the Great St Bernard Pass in May 1800 on a mule, led by a guide, in good weather. He asked David to paint him 'calm on a fiery horse'. The painting is propaganda, and a later painting by Paul Delaroche shows the mule."},
      {c:"His soldiers shot the nose off the Sphinx.", lab:"myth", t:"Drawings made decades before he arrived already show the nose missing. An Egyptian historian, al-Maqrizi, wrote that it was damaged on purpose in the 1300s."},
      {c:"He was poisoned with arsenic on Saint Helena.", lab:"disputed", t:"Arsenic has been found in his hair, but arsenic was common in wallpaper, medicines and hair treatments of the time. His autopsy found a stomach ulcer and cancer, and that is still the most widely accepted cause of death."},
      {c:"'Not tonight, Joséphine.'", lab:"myth", t:"There is no record of him saying it. It is a joke from music-hall songs and later films."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Fondation Napoléon, Paris", u:"https://www.napoleon.org"},
      {n:"Andrew Roberts, Napoleon the Great (2014)"},
      {n:"Philip Dwyer's three-volume biography (2007 to 2018)"},
      {n:"Laurent Dubois, Avengers of the New World: The Story of the Haitian Revolution (2004)"},
      {n:"His correspondence, published by the Fondation Napoléon"}
    ]}
  ]
},

"cleopatra": {
  hero: "cleopatra-caesar", scene: "death-caesar",
  kw: ["Caesar","Julius Caesar","Ides of March","Mark Antony","Antony","Caesarion","asp","carpet","Actium","Alexandria","Ptolemy","Et tu Brute","Rubicon","Brutus"],
  lede: "The last queen of a Greek dynasty that had ruled Egypt for almost 300 years. She bet her kingdom on two Roman generals, Julius Caesar and Mark Antony, and lost it to a third, Octavian.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Cleopatra VII was born in 69 BC into the Ptolemies, a Macedonian Greek family that had ruled Egypt since one of Alexander the Great's generals took it after Alexander died in 323 BC. She became queen at 18, in 51 BC.",
      "To keep Egypt independent of Rome, the superpower next door, she allied herself first with Julius Caesar, who was murdered in 44 BC, and then with Mark Antony. She had a child with Caesar and three with Antony.",
      "In 30 BC, after Octavian, Caesar's adopted heir, defeated them, Antony and then Cleopatra killed themselves in Alexandria. She was 39. Egypt became a Roman province, and Octavian became Augustus, the first Roman emperor.",
      "She lived closer in time to the Moon landing than to the building of the Great Pyramid."
    ]},
    {k:"early", h:"Early life", ps:[
      "Her father was Ptolemy XII, nicknamed Auletes, 'the flute player'. Who her mother was is not known. The Ptolemies often married their own siblings, so her family tree is very short on names.",
      "She grew up in Alexandria, the greatest city of the Mediterranean after Rome, with its lighthouse, its harbour and its famous Library. Her court spoke Greek.",
      {t:"Plutarch says she spoke many languages and was the first of her dynasty to bother learning Egyptian, the language of the people she ruled.", lab:"likely", why:"Plutarch wrote about 150 years after her death. Most historians accept the point, but his list of her languages cannot be checked."},
      "When she was about 11 her father was driven out of Alexandria. He went to Rome, borrowed huge sums, and came back in 55 BC with a Roman army paid by bribes. Among its cavalry officers was a young Mark Antony. Her older sister Berenice, who had taken the throne in his absence, was executed on her father's return."
    ]},
    {k:"turns", h:"Turning points", img:"death-caesar", ps:[
      "Queen at 18, 51 BC. When her father died she was meant to rule with her brother Ptolemy XIII, who was about ten. His advisers pushed her out, and by 49 BC she was raising an army on Egypt's eastern border.",
      "Caesar arrives, 48 BC. Rome was in civil war. Julius Caesar beat his rival Pompey at Pharsalus in Greece, and Pompey fled to Egypt, where Ptolemy's men stabbed him to death in a small boat as it reached the shore. When Caesar landed in Alexandria a few days later, he was shown Pompey's head.",
      {t:"Cleopatra needed to reach Caesar without her brother's soldiers seeing her. Plutarch says her friend Apollodorus rowed her to the palace at dusk and carried her in to Caesar wrapped in a bedding sack, tied with a strap.", lab:"likely", why:"Plutarch is the only detailed source, writing long after. The carpet in many films and in the painting at the top of this page is a later invention."},
      "The Alexandrian War, 48 to 47 BC. Caesar took her side and was besieged in the palace for months. Fire spread from the harbour and burned warehouses and, according to some ancient writers, many books. Ptolemy XIII drowned in the Nile after losing a battle, and Cleopatra was made queen again, alongside a younger brother, Ptolemy XIV.",
      {t:"Caesarion, 47 BC. She had a son, Ptolemy Caesar, whom the people of Alexandria called Caesarion, 'little Caesar'. She said Caesar was the father.", lab:"likely", why:"Caesar never formally acknowledged the boy, and his will made Octavian his main heir and did not mention the boy. Most historians think the boy was his, but it cannot be proven."},
      "Rome, 46 to 44 BC. She lived in Caesar's villa across the Tiber while Caesar, now dictator, reformed the calendar with help from an Alexandrian astronomer. Our 365-day year with a leap day comes from it.",
      "The Ides of March, 44 BC. In February Caesar had himself named dictator for life. On 15 March, at a Senate meeting held in the hall built by Pompey, about 60 men joined a plot led by Marcus Brutus and Gaius Cassius, and he was stabbed 23 times. He fell at the foot of Pompey's statue. Cleopatra left Rome soon after. Her brother Ptolemy XIV died that year, and Caesarion became her co-ruler.",
      {t:"Antony, 41 BC. Mark Antony, who now ruled Rome's eastern provinces, summoned her to Tarsus, in today's Turkey. Plutarch describes her sailing up the river on a barge with a gilded stern, purple sails and silver oars, dressed as Venus.", lab:"likely", why:"The meeting is certain. The barge description is Plutarch's, written to dazzle, and the details cannot be checked."},
      "Actium, 31 BC. Antony married Octavian's sister Octavia, but lived with Cleopatra, and in 34 BC gave lands in the east to her and her children. Octavian declared war on Cleopatra, not on Antony, so it looked like a foreign war. At the sea battle of Actium in Greece, on 2 September 31 BC, her squadron broke away and Antony followed. Their side collapsed.",
      "The end, August 30 BC. Octavian took Alexandria. Antony, told falsely that she was dead, stabbed himself and died with her. Days later, held prisoner and facing a parade through Rome in chains, Cleopatra killed herself, with two of her maids, Iras and Charmion."
    ]},
    {k:"works", h:"What she did", ps:[
      "She ruled for 21 years and kept Egypt independent through Rome's civil wars. Hers was the last of the kingdoms founded by Alexander's successors to fall to Rome.",
      "She ran one of the richest states in the world. Egypt was the richest grain land of the Mediterranean, and she used that wealth and her fleet as bargaining chips.",
      "She put herself on coins, sometimes beside Antony, and was shown on temple walls as an Egyptian pharaoh. At Dendera, a carved relief shows her with Caesarion making offerings to the gods.",
      "Rome's poets turned her into a monster. Horace celebrated her death as the fall of a 'mad queen'. Almost everything we know was written by her enemies' side."
    ]},
    {k:"people", h:"Her people", ps:[
      "Julius Caesar (100 to 44 BC) conquered Gaul, crossed the Rubicon river with his army in 49 BC to start a civil war, and won it. He was 52 when they met, and she was 21.",
      "Mark Antony (83 to 30 BC) was Caesar's ally and one of the three men who ruled Rome after him. They had twins, Alexander Helios and Cleopatra Selene, and a son, Ptolemy Philadelphus.",
      "Octavian (63 BC to AD 14) was Caesar's great-nephew and adopted son. He beat both of them and ruled as Augustus for over 40 years.",
      {t:"Cicero, the great Roman orator, met her in Rome and disliked her. 'I hate the queen,' he wrote in a letter to his friend Atticus in 44 BC.", lab:"verified", why:"The line survives in Cicero's own letters to Atticus."},
      "Her daughter Cleopatra Selene survived. She was raised in Rome by Octavia and married Juba II, becoming queen of Mauretania in North Africa. Caesarion was killed on Octavian's orders in 30 BC, aged 17."
    ]},
    {k:"world", h:"The world around her", ps:[
      "The Roman Republic was dying. For a century Roman generals had fought each other for power, and her lifetime saw the last round, which ended with one man in charge.",
      "In China the Han dynasty ruled an empire about as large and as rich as Rome. The historian Sima Qian had finished his great history of China a generation before she was born.",
      "Within a decade of her death the poet Virgil was writing the Aeneid, Rome's national epic, which shows Actium as a victory over the East."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "With her death, 300 years of Greek rule in Egypt, and 3,000 years of pharaohs, came to an end. Egypt became the personal property of Rome's emperors.",
      "Octavian's victory ended the Republic. When people say 'Caesar' and mean a ruler, as in the German Kaiser and the Russian tsar, they are using the name of a man who was never emperor.",
      "She became a legend before she was cold, and she has been retold by Shakespeare, by George Bernard Shaw and by Hollywood ever since, usually as a seductress rather than a ruler."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"She was smuggled to Caesar rolled in a carpet.", lab:"myth", t:"Plutarch, our only detailed source, says a bedding sack tied with a strap. The carpet comes from later retellings and films."},
      {c:"She killed herself with an asp, a cobra.", lab:"disputed", t:"Plutarch himself says 'the truth of the matter no one knows'. He reports the snake story, but also that she might have used poison kept in a hollow comb. Two small marks on her arm were the only clue. Octavian's triumph showed an image of her with a snake, which fixed the story."},
      {c:"She was Egyptian.", lab:"disputed", t:"She was a Ptolemy, a Macedonian Greek dynasty, and Greek was her language. Her mother and her father's mother are unknown, so some Egyptian or other ancestry is possible but cannot be shown."},
      {c:"She was the most beautiful woman in the world.", lab:"myth", t:"Plutarch says her beauty was not in itself remarkable, but her voice, wit and company were irresistible. Her coins show a strong hooked nose and a firm chin."},
      {c:"Caesar's last words were 'Et tu, Brute?'", lab:"myth", t:"The line was made famous by Shakespeare's Julius Caesar (1599) and appears in no ancient source. Suetonius says Caesar said nothing, though some claimed he said in Greek 'You too, child?' to Brutus."},
      {c:"Caesar was the first Roman emperor and was killed in the Senate house.", lab:"myth", t:"He was dictator for life, never emperor; Augustus was the first. The Senate's usual house was being rebuilt, so that day it met in a hall in Pompey's theatre complex."},
      {c:"Caesar was born by Caesarean section.", lab:"myth", t:"In his time the operation was done only on mothers who had died, and his mother, Aurelia, lived until 54 BC. The link between his name and the operation is a later guess."},
      {c:"Caesar burned down the Library of Alexandria.", lab:"disputed", t:"The fire of 48 BC did burn books, perhaps in warehouses by the docks. The Library itself carried on and faded away over the following centuries; there was no single great burning."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Plutarch, Life of Antony and Life of Caesar (early 2nd century AD)"},
      {n:"Suetonius, Life of the Deified Julius (about AD 121)"},
      {n:"Cassius Dio, Roman History, books 42 to 51"},
      {n:"Julius Caesar, The Civil War (his own account)"},
      {n:"Stacy Schiff, Cleopatra: A Life (2010)"},
      {n:"Duane W. Roller, Cleopatra: A Biography (2010)"},
      {n:"Adrian Goldsworthy, Caesar: Life of a Colossus (2006)"}
    ]}
  ]
},

"leonardo": {
  hero: "mona-lisa", portrait: "leonardo-self", scene: "school-athens",
  kw: ["Mona Lisa","Last Supper","Vitruvian Man","notebooks","mirror writing","flying machine","Verrocchio","Milan","Sforza","Amboise","Francis I","anatomy","Salvator Mundi"],
  lede: "A notary's son born outside marriage who became the most famous painter in the world, finished remarkably few paintings, and filled thousands of pages with machines, bodies, water and birds.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Leonardo was born in 1452 near the Tuscan town of Vinci, trained as a painter in Florence, and worked for the rulers of Milan, Florence, Rome and finally the king of France.",
      "Fewer than twenty paintings are accepted as his, several unfinished, among them the Mona Lisa and The Last Supper. He left thousands of notebook pages on anatomy, flight, water, optics, geology and war machines.",
      "He died in France in 1519, aged 67. He is the textbook 'Renaissance man'."
    ]},
    {k:"early", h:"Early life", ps:[
      "His grandfather Antonio wrote down the birth in the family book: a grandson, born on Saturday 15 April 1452 at about three hours after sunset. His father, Ser Piero, was a young notary. His mother was called Caterina, and she and Piero never married.",
      {t:"Who Caterina was is debated. The old view is a local peasant girl. In 2023 the historian Carlo Vecce published a document suggesting she was an enslaved woman from the Caucasus who had been freed in Florence.", lab:"disputed", why:"Vecce's document is real, but whether that Caterina is Leonardo's mother is still argued about."},
      {t:"Because he was born outside marriage he could not follow his father into the notaries' guild, and he had little Latin. He called himself 'a man without letters'.", lab:"verified", why:"The phrase, omo sanza lettere, is in his own notebooks (Codex Atlanticus)."},
      "In his teens he was apprenticed to Andrea del Verrocchio, whose Florence workshop made paintings, sculpture and metalwork. In 1472 he joined the painters' guild."
    ]},
    {k:"turns", h:"Turning points", ps:[
      {t:"The angel, about 1475. In Verrocchio's Baptism of Christ, the kneeling angel on the left is by the young Leonardo.", lab:"likely", why:"The attribution of the angel is widely accepted. Vasari's story that Verrocchio was so outdone that he gave up painting is not supported by the evidence."},
      "A scandal, 1476. He and three other young men were anonymously accused of sodomy, a crime in Florence. The charges were dropped for lack of evidence.",
      {t:"Milan, 1482. He moved to the court of Ludovico Sforza. A draft letter offers his services almost entirely as a military engineer: bridges, cannons, armoured carts. Painting comes near the end.", lab:"likely", why:"The draft survives in the Codex Atlanticus, but probably in another person's hand, so it may be a copy."},
      "The Last Supper, about 1495 to 1498. Painted on a refectory wall in Milan, it shows the moment Jesus says one of the apostles will betray him. Leonardo tried an experimental technique on dry plaster, and it began to flake in his own lifetime.",
      "The horse that never was. For years he worked on a bronze horse for Ludovico's father, about seven metres tall. A full-size clay model was made, but in 1494 the bronze set aside for it was used for cannons. French troops took Milan in 1499, and Leonardo left.",
      "Florence, 1500 to 1506. He began the portrait of Lisa Gherardini, a merchant's wife, the Mona Lisa, around 1503. He also worked as a military engineer for Cesare Borgia, and began a battle scene for the city hall, where Michelangelo was commissioned to paint another in the same room. Neither was finished.",
      "France, 1516. After three restless years in Rome, he accepted an invitation from the young King Francis I, crossed the Alps with the Mona Lisa, and lived in a manor house at Amboise on the Loire. He died there on 2 May 1519."
    ]},
    {k:"works", h:"The work", img:"mona-lisa", ps:[
      "The Mona Lisa (begun about 1503) never went to the man who ordered it. Leonardo kept working on it for years and took it to France, where it passed to the French royal collection and later to the Louvre. It was famous among painters, but became world-famous after it was stolen in 1911 by Vincenzo Peruggia, an Italian handyman who had worked at the Louvre. It was missing for over two years.",
      "The Last Supper is still on its wall in Milan, much restored. The Lady with an Ermine (about 1490) is in Kraków, and the Vitruvian Man (about 1490), a drawing of a man in a circle and a square, is in Venice.",
      "His notebooks survive in about 7,000 pages, scattered across collections. They cover the heart, the eye and the womb, birds' wings, the flow of water, fossils, the light of the Moon and plans for machines. He drew the human body after dissecting corpses, about 30 by one report, and his anatomy drawings were centuries ahead of their time. He never published any of it.",
      {t:"Salvator Mundi, a painting of Christ attributed to Leonardo, sold in 2017 for 450 million US dollars, the highest known price ever paid for a painting.", lab:"disputed", why:"Some experts accept it as largely by Leonardo; others think it is mostly by his workshop. It has not been shown in public since the sale."}
    ]},
    {k:"people", h:"His people", ps:[
      "Andrea del Verrocchio, his master, taught him painting, sculpture and metalwork.",
      "Gian Giacomo Caprotti, nicknamed Salaì, 'little devil', joined him at about ten and stayed for some 25 years. Leonardo's notes list his thefts and lies, and the money spent on his clothes.",
      "Francesco Melzi, a young nobleman and pupil, went with him to France and inherited his notebooks. After Melzi's death they were scattered.",
      "Michelangelo, more than twenty years younger, was his rival in Florence. Raphael studied his work there, and it shaped his portraits.",
      {t:"Niccolò Machiavelli, then a Florentine official, worked on the same 1503 plan to divert the river Arno away from Pisa. It failed.", lab:"likely", why:"Machiavelli's letters show he ran the Arno project; Leonardo's part in it is inferred from his maps and notes rather than stated in a contract."}
    ]},
    {k:"world", h:"The world around him", img:"school-athens", ps:[
      "He was a baby when the Ottomans took Constantinople in 1453, and a toddler when Gutenberg's printed Bible appeared. When he was 40, Columbus crossed the Atlantic.",
      "Italy was a patchwork of rich, rival states, and the wars that France and Spain fought over it from 1494 shaped his career, sending him from city to city.",
      {t:"In Raphael's School of Athens, painted in Rome when Leonardo was in his late fifties, the figure of Plato is often said to be a portrait of Leonardo.", lab:"likely", why:"This is a long-standing identification based on the resemblance to drawings thought to show him. No document says so."}
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "The Mona Lisa is probably the most visited painting in the world, behind bulletproof glass in the Louvre.",
      "His notebooks, rediscovered and published from the 1800s on, made him a symbol of curiosity without limits. Many of his machines have been built from his drawings in modern times, to see if they would have worked."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"The red chalk drawing in Turin is his self-portrait.", lab:"disputed", t:"It is the image most people picture as Leonardo. Some scholars think it shows an older relative or is a study of a head. It has no inscription by him, so it is called a presumed self-portrait."},
      {c:"He wrote backwards to keep his ideas secret.", lab:"myth", t:"He was left-handed, and writing from right to left avoided smudging the ink. Anyone with a mirror can read it, so it was no code."},
      {c:"He invented the helicopter, the tank and the parachute.", lab:"myth", t:"He drew ideas for all of them. Almost none were built in his lifetime, and many would not have worked as drawn. They were designs, not inventions in use."},
      {c:"He died in the arms of King Francis I.", lab:"disputed", t:"The story comes from Giorgio Vasari's Lives of the Artists (1550). A royal document dated the next day seems to place the king elsewhere, though its date has also been argued over."},
      {c:"The Mona Lisa's eyes follow you round the room.", lab:"myth", t:"A 2019 study at Bielefeld University found that she is actually looking slightly to the viewer's right, not straight out. The effect is real for many portraits that look straight out, but not quite for her."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Leonardo's notebooks: Codex Atlanticus (Milan), Royal Collection drawings (Windsor), Codex Leicester and others"},
      {n:"Giorgio Vasari, Lives of the Artists (1550, revised 1568)"},
      {n:"Martin Kemp, Leonardo da Vinci: The Marvellous Works of Nature and Man (revised 2006)"},
      {n:"Walter Isaacson, Leonardo da Vinci (2017)"},
      {n:"Carlo Vecce, Il sorriso di Caterina (2023)"},
      {n:"Louvre Museum", u:"https://www.louvre.fr"}
    ]}
  ]
},

"shakespeare": {
  hero: "shakespeare",
  kw: ["Hamlet","Macbeth","Romeo and Juliet","King Lear","Othello","The Tempest","Globe","First Folio","sonnets","Anne Hathaway","Hamnet","Stratford","second best bed","authorship@myths","Cervantes@myths","Marlowe","King's Men","Lord Chamberlain's Men"],
  lede: "A glover's son from a market town who never went to university, wrote or co-wrote about 38 plays and 154 sonnets, and left almost no personal papers. Two friends saved half his plays from being lost.",
  sections: [
    {k:"short", h:"In short", ps:[
      "William Shakespeare was baptised in Stratford-upon-Avon, in the English Midlands, on 26 April 1564. He married at 18, had three children, and by his late twenties was working in London as an actor and playwright.",
      "Over about 25 years he wrote or co-wrote around 38 plays, including Romeo and Juliet, Hamlet, Othello, King Lear, Macbeth and The Tempest, plus two long poems and 154 sonnets. He was also a shareholder in his acting company and its theatre, the Globe, which made him rich.",
      "He died in Stratford in 1616, aged 52. Seven years later two fellow actors published 36 of his plays in one big book, the First Folio. Eighteen of those plays had never been printed before and might otherwise have vanished."
    ]},
    {k:"early", h:"Early life", ps:[
      {t:"His baptism, on 26 April 1564, is the first record of his life. His birthday is celebrated on 23 April, but that date is a tradition, not a record.", lab:"verified", why:"The baptism is in the parish register of Holy Trinity Church, Stratford. No birth record survives; 23 April was chosen later partly because it is St George's Day and the day he died."},
      "His father, John Shakespeare, was a glover and wool dealer who rose to be bailiff, the town's mayor, in 1568, then fell into debt in the late 1570s. His mother, Mary Arden, came from a farming family that owned land.",
      {t:"As the son of a town official he was entitled to free places at Stratford's grammar school, where boys studied Latin authors such as Ovid for long days. Ovid turns up all through his plays.", lab:"likely", why:"The school's registers for those years do not survive, so his attendance is inferred, though almost all historians accept it."},
      "In November 1582, at 18, he married Anne Hathaway, who was 26. Their daughter Susanna was baptised six months later. Twins, Hamnet and Judith, followed in February 1585. Hamnet died in 1596, aged 11.",
      "Between 1585 and 1592 he disappears from the records entirely. Historians call these the 'lost years'. Every story about them, from poaching deer to teaching school, is guesswork."
    ]},
    {k:"turns", h:"Turning points", ps:[
      {t:"London, 1592. A pamphlet sneered at an 'upstart Crow, beautified with our feathers', a 'Shake-scene' who thought he could write as well as university men. It is the first sign he was a known playwright.", lab:"likely", why:"The pamphlet, Greene's Groats-worth of Wit (1592), is real. Most scholars read 'Shake-scene' as Shakespeare. It was published under Robert Greene's name, but the printer Henry Chettle may have written it."},
      "Plague, 1592 to 1594. London's theatres closed for long spells because of plague. He turned to poetry and published Venus and Adonis (1593) and The Rape of Lucrece (1594), both dedicated to the young Earl of Southampton.",
      "The Lord Chamberlain's Men, 1594. He became a founding member and shareholder of this company of actors, with the star Richard Burbage. He wrote for them, and acted with them, for the rest of his career.",
      "The Globe, 1599. When their lease ran out, the company took apart their old playhouse, The Theatre, carried the timbers across the Thames and built the Globe on the south bank. Julius Caesar was one of the first plays staged there.",
      "The King's Men, 1603. When James VI of Scotland became King James I of England, he took the company under his own patronage. Macbeth, with its Scottish king and its witches, followed a few years later; James had written a book on witchcraft.",
      "Fire, 1613. During a performance of Henry VIII, a cannon fired for a royal entrance set the thatched roof alight, and the Globe burned down in about an hour. Nobody was killed. It was rebuilt the next year.",
      "Home, 1610s. He had bought New Place, the second-largest house in Stratford, in 1597, and spent more of his last years there. He died on 23 April 1616 and was buried inside Holy Trinity Church."
    ]},
    {k:"works", h:"The work", ps:[
      "Comedies such as A Midsummer Night's Dream and Twelfth Night; histories of English kings from Richard II to Henry V; tragedies from Romeo and Juliet to Hamlet, Othello, King Lear and Macbeth; and late 'romances' such as The Winter's Tale and The Tempest.",
      "He borrowed nearly all his plots: from Holinshed's Chronicles for the English kings, from Plutarch's Lives (in Thomas North's 1579 translation) for Julius Caesar and Antony and Cleopatra, and from Italian stories for Othello and Romeo and Juliet. What he added was the language and the people.",
      "He did not always work alone. Henry VIII and The Two Noble Kinsmen were written with John Fletcher, and parts of Titus Andronicus, Timon of Athens and other plays are now credited to George Peele, Thomas Middleton and others.",
      "The Sonnets, 154 short poems, were printed in 1609, probably without his say-so. Many are addressed to a young man and later ones to a 'dark lady'. Who they were is unknown.",
      {t:"The First Folio, 1623. His fellow actors John Heminges and Henry Condell gathered 36 plays into one book, with an engraved portrait by Martin Droeshout. About 235 copies are known to survive. Ben Jonson's poem at the front says he 'was not of an age, but for all time'.", lab:"verified", why:"The Folio and Jonson's poem are on Project Gutenberg and in Folger Shakespeare Library facsimiles. The count of surviving copies comes from the Folger's census."}
    ]},
    {k:"people", h:"His people", ps:[
      "Anne Hathaway (about 1556 to 1623) ran the household in Stratford while he worked in London for most of their marriage. She outlived him by seven years.",
      "Richard Burbage (1567 to 1619) was the company's leading actor and probably the first Hamlet, Othello and Lear.",
      "Christopher Marlowe (1564 to 1593), born the same year, was the star playwright when Shakespeare started. He was stabbed to death in a house in Deptford at 29. Shakespeare's early histories show his influence.",
      {t:"Ben Jonson (1572 to 1637), friend and rival, teased him in print for having 'small Latine, and lesse Greeke', and then praised him as the greatest writer of the age.", lab:"verified", why:"Both lines are in Jonson's poem in the First Folio (1623)."}
    ]},
    {k:"world", h:"The world around him", ps:[
      "He was born under Elizabeth I, who was a theatre-goer, and died under James I. England was Protestant by law, and Catholics could be fined or worse; his father was listed in 1592 among those who stayed away from church.",
      "Galileo was born in the same year, 1564, two months earlier. Miguel de Cervantes published the first part of Don Quixote in 1605, the year after Othello was first performed.",
      "In 1588 the Spanish Armada sailed against England. In 1605 the Gunpowder Plot tried to blow up the king and Parliament. Macbeth, about killing a king, was written soon after.",
      "Theatre was cheap mass entertainment. A standing place in the Globe's yard cost a penny, the price of a loaf of bread, and a full house was about 3,000 people."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "His plays have been translated into every major language and are performed somewhere in the world every day. He is the most-performed playwright in history.",
      "Everyday English is full of his phrases: 'wild-goose chase', 'the be-all and end-all', 'a sorry sight', 'heart of gold'. Some he invented; others he made famous.",
      "A reconstructed Globe opened in 1997 near the original site in London, built with oak, lime plaster and the first thatched roof allowed in London since the Great Fire of 1666."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"Someone else really wrote his plays.", lab:"myth", t:"Theories naming the Earl of Oxford, Francis Bacon or Marlowe began in the 1850s. Oxford died in 1604, before about ten of the plays were written. His name is on the printed plays, his fellow actors credited him in the Folio, and Jonson knew him personally. Almost no historians doubt he wrote them."},
      {c:"He and Cervantes died on the same day.", lab:"myth", t:"Both deaths are dated 23 April 1616, but England still used the old Julian calendar while Spain used the Gregorian one. Shakespeare died about ten days after Cervantes."},
      {c:"He invented about 1,700 English words.", lab:"disputed", t:"He is the first recorded user of many words, such as 'lonely' and 'swagger'. But early dictionaries combed his works more closely than other writers', and many 'firsts' have since been found earlier. He coined some, not all."},
      {c:"He insulted his wife by leaving her the 'second best bed'.", lab:"disputed", t:"The line is in his will. The best bed was usually kept for guests, and the second best was often the marriage bed, so it may have been a tender gift. Under English law a widow also had a right to part of the estate anyway. Nobody knows what he meant."},
      {c:"The Chandos portrait shows what he looked like.", lab:"likely", t:"It was the first picture to enter London's National Portrait Gallery, given by Lord Ellesmere in 1856, and is the best candidate for a portrait painted from life. It may be by John Taylor, a painter and actor. Only the Droeshout engraving and the Stratford monument are known to have been approved by people who knew him."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Mr. William Shakespeares Comedies, Histories, & Tragedies (the First Folio, 1623), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/2270"},
      {n:"The Complete Works of William Shakespeare, Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/100"},
      {n:"Shakespeare Documented: the parish register, will and other records, Folger Shakespeare Library (free to view)", u:"https://shakespearedocumented.folger.edu"},
      {n:"Folger Shakespeare: free texts of all the plays and poems", u:"https://www.folger.edu/explore/shakespeares-works/"},
      {n:"Robert Greene (attributed), Greene's Groats-worth of Wit (1592), public domain"},
      {n:"Further reading: Samuel Schoenbaum, William Shakespeare: A Compact Documentary Life (1977)"},
      {n:"Further reading: James Shapiro, 1599: A Year in the Life of William Shakespeare (2005)"}
    ]}
  ]
},

"zheng-he": {
  hero: "tribute-giraffe",
  kw: ["treasure fleet","treasure ships","Yongle","Ming","eunuch","Malacca","Calicut","Hormuz","giraffe@works","qilin","Ma Huan","1421@myths","Hang Li Po@myths","Sam Poh","Cheng Ho","Ceylon"],
  lede: "A Muslim boy captured in war and made a palace eunuch, who grew up to command the largest fleets the world had seen, seven times, from China to Arabia and East Africa, eighty years before Columbus.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Zheng He was born Ma He in 1371 in Yunnan, in south-west China, into a Muslim family. When a Ming army conquered Yunnan he was captured as a boy, castrated, and sent to serve a prince, Zhu Di.",
      "When that prince seized the throne in 1402 and became the Yongle Emperor, Zheng He became one of his most trusted men. Between 1405 and 1433 he led seven great voyages across the Indian Ocean, with dozens of large ships and tens of thousands of men.",
      "The fleets carried silk and porcelain, collected tribute and envoys, fought pirates and kings, and brought a giraffe back to the Ming court. After he died around 1433, China stopped sending them. The ships rotted, and the voyages were nearly forgotten for centuries."
    ]},
    {k:"early", h:"Early life", ps:[
      {t:"His father and grandfather both carried the title hajji, meaning they had made the pilgrimage to Mecca. Later family genealogies claim descent from Sayyid Ajall, a Central Asian Muslim governor of Yunnan under the Mongols.", lab:"likely", why:"The hajji titles are on a memorial stone to his father written in 1405 by Li Zhigang, which still stands in Kunyang. The descent from Sayyid Ajall is a later family tradition."},
      "In 1381 the new Ming dynasty sent an army to take Yunnan, one of the last regions held by Mongol loyalists. His father died around then. The boy, about ten, was captured and castrated, as was common for captured boys meant for palace service.",
      "He was sent to the household of Zhu Di, Prince of Yan, a son of the Ming founder, who guarded the northern frontier at Beiping, today's Beijing. He grew up in the prince's army camps.",
      {t:"Later accounts describe him as very tall, with a booming voice and a stride like a tiger's.", lab:"likely", why:"The description comes from a 17th-century collection of stories, not from records of his own time. Treat it as legend with a possible core."}
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Civil war, 1399 to 1402. When the old emperor died, the throne passed to his grandson. Zhu Di rebelled against his nephew, and Ma He fought for him. Zhu Di took Nanjing in 1402 and made himself the Yongle Emperor.",
      {t:"A new name, 1404. The emperor gave him the surname Zheng, reportedly for his part in a battle at a place called Zhenglunba near Beijing, and made him a senior palace eunuch.", lab:"likely", why:"The grant of the name is recorded. The link to the battle is a traditional explanation."},
      {t:"The first voyage, 1405 to 1407. The fleet sailed with about 62 large ships and around 27,800 men, by way of Champa (in today's Vietnam), Java and Sumatra to Calicut on India's south-west coast.", lab:"likely", why:"The numbers are from the official History of Ming (completed 1739). Other Ming records give slightly different counts."},
      "Pirates, 1407. On the way home, at Palembang in Sumatra, the fleet fought the Chinese pirate chief Chen Zuyi. Ming records say about 5,000 of his men were killed. Chen was taken to Nanjing and executed.",
      "War in Ceylon, 1411. On the third voyage, the ruler of Kotte in Ceylon (Sri Lanka) attacked the fleet. Zheng He's troops captured him and his family and took them to China. The emperor later sent them home and chose a new king.",
      "Arabia and Africa, 1413 to 1422. The fourth to sixth voyages went further west, to Hormuz at the mouth of the Persian Gulf, to Aden, and down the East African coast to Mogadishu and Malindi.",
      "The voyages stop, 1424. Yongle died, and his son ended the expeditions as too expensive. The next emperor, Xuande, ordered one last voyage in 1430.",
      {t:"The last voyage, 1431 to 1433. Before sailing, Zheng He set up two stone inscriptions listing the voyages and thanking the sea goddess Tianfei for safe passage. Some of his men visited Mecca. He died around 1433, probably near Calicut on the way home.", lab:"likely", why:"The inscriptions, at Liujiagang and Changle, survive and are our best first-hand record. The place and manner of his death are not recorded clearly; his tomb in Nanjing is thought to be empty."}
    ]},
    {k:"works", h:"The voyages", ps:[
      "The fleets visited about 30 states around the Indian Ocean. They brought silk, porcelain, lacquer and paper money, and came back with pepper, gems, rare woods, medicines and animals.",
      "Their purpose was political more than commercial: to show off the power of the new emperor and bring foreign rulers into the Chinese tribute system, in which they sent gifts and envoys and received honours and trading rights.",
      {t:"The giraffe, 1414. Envoys from Bengal brought a giraffe, which had come there from Malindi in East Africa. At court it was hailed as a qilin, a lucky animal of legend, and the painter Shen Du recorded it. Malindi sent another the next year.", lab:"verified", why:"The giraffes are in Ming records and in Shen Du's surviving poem and painting. The picture at the top of this page is a later copy after his painting."},
      "Malacca. The fleets used the port of Malacca, on the Malay peninsula, as a base and storehouse. Ming backing helped its ruler stay independent of Siam, and Malacca grew into the greatest trading port of South-East Asia.",
      "Ma Huan, a Muslim interpreter who sailed on three voyages, wrote a book about the lands they visited, Yingya Shenglan, 'The Overall Survey of the Ocean's Shores'. It describes markets, money, food, customs and religions from Java to Mecca."
    ]},
    {k:"people", h:"His people", ps:[
      "The Yongle Emperor (1360 to 1424) usurped the throne, moved the capital to Beijing and built the Forbidden City there. The voyages were his project.",
      "Ma Huan (about 1380 to 1460), the interpreter, spoke Arabic and probably Persian. Fei Xin and Gong Zhen, two other men from the fleet, also wrote accounts.",
      "Parameswara, the founder of Malacca, sailed to China with the fleet in 1411 with his wife and over 500 followers to meet the emperor."
    ]},
    {k:"world", h:"The world around him", ps:[
      "In Europe, Portuguese ships were only beginning to edge down the coast of Africa; they captured Ceuta, in Morocco, in 1415. Vasco da Gama arrived at Calicut in 1498, 65 years after Zheng He's last visit, with four ships.",
      "Joan of Arc was burned at Rouen in 1431, the year Zheng He set sail for the last time.",
      "In Samarkand, Timur (Tamerlane) died in 1405 while marching to invade China, the year the first fleet sailed."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "After the voyages, the Ming turned inland, spending on the northern frontier and the Great Wall. Private sea trade was restricted for over a century.",
      "He is honoured in South-East Asia, where temples called Sam Poh or Sanbao, after his title, stand in Malacca, Semarang in Java and elsewhere. In China, 11 July is National Maritime Day in his memory.",
      "Modern China often presents the voyages as proof that it explored without conquering. The record is more mixed: the fleets were armed and did fight, though they did not set up colonies."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"His treasure ships were about 130 metres long, five times the size of Columbus's.", lab:"disputed", t:"The History of Ming gives 44 zhang by 18 zhang, roughly 130 by 55 metres. Many naval historians doubt wooden ships that size could sail, and suggest the biggest were perhaps 60 to 75 metres. They were still far bigger than Columbus's ships, which were under 30 metres."},
      {c:"He discovered America in 1421.", lab:"myth", t:"This comes from Gavin Menzies' 2002 book 1421. Historians have found no evidence for it, and the fleets' known routes were all in Asia, the Indian Ocean and East Africa."},
      {c:"His voyages were purely peaceful.", lab:"myth", t:"They were mostly diplomatic, but the fleets carried soldiers and fought at least three times: against pirates at Palembang, against the king of Kotte in Ceylon, and in a succession war in Sumatra."},
      {c:"A Ming princess, Hang Li Po, came with him to marry the Sultan of Malacca.", lab:"myth", t:"She appears in the Malay Annals, a court chronicle written much later, and is set in the reign of Sultan Mansur Shah, decades after Zheng He died. No Ming record mentions her. She is a cherished legend in Malacca, where a well is named after her."},
      {c:"The Ming burned his records on purpose.", lab:"disputed", t:"A later story says the official Liu Daxia hid or destroyed the voyage files around 1477 to stop new expeditions. The documents are certainly lost, but the story is told in sources written long after."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"History of Ming (Ming Shi), chapter 304, biography of Zheng He, Chinese text on Wikisource (public domain)", u:"https://zh.wikisource.org/wiki/明史/卷304"},
      {n:"Ma Huan, Yingya Shenglan (1451), Chinese text on Wikisource (public domain)", u:"https://zh.wikisource.org/wiki/瀛涯勝覽"},
      {n:"W. P. Groeneveldt, Notes on the Malay Archipelago and Malacca, Compiled from Chinese Sources (1876), public domain"},
      {n:"The Liujiagang (1431) and Changle (1431) inscriptions, as translated in J. J. L. Duyvendak, 'The True Dates of the Chinese Maritime Expeditions', T'oung Pao (1938)"},
      {n:"Further reading: Edward L. Dreyer, Zheng He: China and the Oceans in the Early Ming Dynasty (2007)"},
      {n:"Further reading: Louise Levathes, When China Ruled the Seas (1994)"}
    ]}
  ]
},

"marie-curie": {
  hero: "curie",
  kw: ["radium","polonium","radioactivity","Pierre Curie","Nobel","Becquerel","Sorbonne","Irène","Joliot-Curie","petites Curies@turns","X-ray","Langevin","Panthéon","notebooks@legacy","Warsaw","Skłodowska","Sklodowska"],
  lede: "A Polish governess who saved for years to study in Paris, named radioactivity, found two new elements in a leaking shed, and is still the only person to win Nobel Prizes in two different sciences.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Maria Skłodowska was born in Warsaw in 1867, when Poland was ruled by Russia and women could not go to university there. She went to Paris at 24 and studied physics and mathematics at the Sorbonne.",
      "With her husband Pierre Curie she discovered two new elements, polonium and radium, in 1898, and she coined the word 'radioactivity'. She won the Nobel Prize in Physics in 1903, shared with Pierre and Henri Becquerel, and the Nobel Prize in Chemistry in 1911 on her own.",
      "In the First World War she set up mobile X-ray units for the French army and drove one herself. She died in 1934, very probably from years of exposure to radiation, which nobody then understood."
    ]},
    {k:"early", h:"Early life", ps:[
      "She was the youngest of five children of two teachers. Her eldest sister Zofia died of typhus when Maria was eight, and her mother died of tuberculosis when she was ten.",
      "Russian rule meant Polish history and language were suppressed in schools. She finished secondary school first in her class at 15, then studied in the 'Flying University', a secret, moving night school that admitted women.",
      {t:"She made a pact with her sister Bronisława: Maria would work as a governess and send money while Bronisława studied medicine in Paris, and then Bronisława would help her in turn. Maria spent about three years as a governess in the countryside.", lab:"verified", why:"She describes the arrangement in the autobiographical notes printed in her book Pierre Curie (1923)."},
      "In 1891 she reached Paris, signed up at the Sorbonne as Marie, and lived in a cold attic room in the Latin Quarter. She came first in the physics degree exam in 1893 and second in mathematics in 1894."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Pierre, 1894. Looking for lab space, she was introduced to Pierre Curie, a physicist known for his work on crystals and magnetism. They married in July 1895 in a plain ceremony and spent their honeymoon touring France by bicycle.",
      "A puzzle, 1896. Henri Becquerel found that uranium gave off rays that could fog a photographic plate. For her doctorate Marie decided to measure these rays, using an electrometer that Pierre and his brother had invented.",
      "Something new, 1898. She found that the rays came from the atoms themselves, that thorium gave them off too, and that the uranium ore pitchblende was far more active than its uranium could explain. Something unknown was inside it. Pierre dropped his own research to join her.",
      "Two elements, 1898. In July they announced polonium, named after her occupied homeland. In December they announced radium. In the same year's papers she used the word radioactive.",
      "The shed, 1898 to 1902. To prove radium existed they had to isolate it. Working in a leaky former dissecting shed at the Paris school of physics and chemistry, she processed tonnes of pitchblende waste from a mine in Bohemia, stirring vats with an iron rod almost as tall as herself. In 1902 she had a tenth of a gram of radium chloride.",
      {t:"The first Nobel, 1903. The prize was at first meant for Pierre and Becquerel only. After the Swedish mathematician Gösta Mittag-Leffler, a member of the Academy of Sciences, warned Pierre, he insisted that Marie be included.", lab:"likely", why:"Letters between Pierre Curie and Gösta Mittag-Leffler survive in the Mittag-Leffler Institute and are cited by her biographers. Exactly how the committee changed its mind is less clear."},
      "Pierre's death, 1906. On 19 April Pierre slipped in a Paris street in the rain and was killed by a horse-drawn wagon. She took over his post and became the first woman to teach at the Sorbonne, beginning her first lecture at the exact sentence where he had stopped.",
      {t:"Scandal and a second Nobel, 1911. The press exposed her affair with the physicist Paul Langevin, who was married, and crowds gathered outside her house. In the same weeks she was awarded the Nobel Prize in Chemistry. A member of the committee wrote suggesting she stay away from the ceremony. She went to Stockholm anyway.", lab:"verified", why:"Svante Arrhenius's letter and her reply are quoted in her biographies, and her Nobel lecture of 11 December 1911 is published by the Nobel Foundation."},
      "War, 1914 to 1918. She persuaded donors to give cars, fitted them with X-ray machines and dynamos, learned to drive, and took them to the front. The French called them petites Curies. With her daughter Irène she also trained about 150 women as X-ray operators."
    ]},
    {k:"works", h:"What she found", ps:[
      "Radioactivity is a property of atoms, not a chemical reaction. That idea, which she argued from her measurements in 1898, opened the way to the discovery that atoms have parts and can change into other elements.",
      "Polonium (element 84) and radium (element 88). In 1910, with André Debierne, she isolated pure radium metal.",
      "She founded the Radium Institute in Paris, which opened in 1914 and became a world centre for physics, chemistry and the use of radiation against cancer.",
      {t:"She and Pierre chose not to patent the way they purified radium, so that anyone could use it.", lab:"verified", why:"She explains the decision in Pierre Curie (1923). The radium industry that followed made others rich while her lab struggled for money."}
    ]},
    {k:"people", h:"Her people", ps:[
      "Pierre Curie (1859 to 1906), her husband and partner in the work. Earlier, with his brother Jacques, he had discovered piezoelectricity, the effect now used in quartz watches.",
      "Irène Joliot-Curie (1897 to 1956), her elder daughter, won the 1935 Nobel Prize in Chemistry with her husband Frédéric Joliot for making artificial radioactivity. That made the Curies the family with the most Nobel Prizes.",
      "Ève Curie (1904 to 2007), her younger daughter, was a writer and journalist whose 1937 biography of her mother became a worldwide best-seller.",
      "Albert Einstein, a friend from the Solvay physics conferences, wrote to support her during the 1911 scandal and later hiked with her and the children in the Swiss Alps."
    ]},
    {k:"world", h:"The world around her", ps:[
      "In 1895, the year she married, Wilhelm Röntgen discovered X-rays. The idea of invisible rays was the most exciting thing in physics. Becquerel's discovery followed the next year, and her own work the year after that.",
      "Women in France could not vote until 1944, ten years after her death. In 1911 the French Academy of Sciences voted narrowly not to admit her.",
      "Poland, partitioned since the 1790s, became an independent country again in 1918. She helped found a Radium Institute in Warsaw, which her sister Bronisława ran."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "She was the first woman to win a Nobel Prize, the first person to win two, and is still the only person to win in two different sciences.",
      "In 1995 her remains and Pierre's were moved to the Panthéon in Paris. She was the first woman to be buried there for her own achievements.",
      {t:"Her notebooks are still radioactive. They are kept in lead-lined boxes at the National Library of France, and readers sign a waiver and wear protective clothing.", lab:"verified", why:"Radium-226 has a half-life of about 1,600 years. The Bibliothèque nationale de France holds the Curie papers and lets researchers consult them under these conditions."},
      "Element 96, curium, is named after Marie and Pierre."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"She discovered radioactivity.", lab:"myth", t:"Henri Becquerel discovered the rays from uranium in 1896. She showed what they were, found that other elements gave them off, coined the word radioactivity, and discovered polonium and radium."},
      {c:"Radiation killed her.", lab:"likely", t:"She died of aplastic anaemia, a failure of the bone marrow. Her doctors linked it to radiation, and it is very likely, but it was not proven. Her X-ray work in the war may have harmed her as much as radium."},
      {c:"She carried radium around in her pockets.", lab:"likely", t:"She wrote that the glowing tubes of radium in their workroom looked like faint fairy lights, and her daughter Ève said she kept samples in her desk and pockets. Such careless handling was normal at the time."},
      {c:"'Nothing in life is to be feared, it is only to be understood' is her quote.", lab:"disputed", t:"It is widely attributed to her, but nobody has found it in her own writings or speeches. Treat it as a saying about her, not by her."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Marie Curie, Pierre Curie, with autobiographical notes, translated by Charlotte and Vernon Kellogg (1923), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/69617"},
      {n:"Marie Curie, Radio-Active Substances, English translation of her 1903 doctoral thesis, Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/60564"},
      {n:"Marie Curie, 'Radium and the new concepts in chemistry', Nobel lecture, 11 December 1911, Nobel Foundation", u:"https://www.nobelprize.org/prizes/chemistry/1911/marie-curie/lecture/"},
      {n:"P. Curie and M. Curie, 'Sur une substance nouvelle radio-active', Comptes rendus de l'Académie des sciences, vol. 127 (July 1898), p. 175 (public domain)"},
      {n:"The Nobel Prize in Physics 1903 and in Chemistry 1911, Nobel Foundation", u:"https://www.nobelprize.org/prizes/physics/1903/summary/"},
      {n:"Further reading: Susan Quinn, Marie Curie: A Life (1995)"},
      {n:"Further reading: Ève Curie, Madame Curie (1937)"}
    ]}
  ]
},

"genghis-khan": {
  hero: "genghis",
  kw: ["Temujin","Temüjin","Mongols","Börte","Borte","Jamukha","Toghrul","Ong Khan","kurultai","Khwarazm","Otrar","Samarkand","Bukhara","Jin","Xi Xia","Western Xia","yam","Yassa","Secret History","grave@myths","1 in 200@myths","DNA@myths","Marco Polo@myths"],
  lede: "An abandoned boy who survived on roots and marmots, united the feuding peoples of the steppe, and launched the conquests that built the largest land empire in history. Where he is buried is still a mystery.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Temüjin was born around 1162 on the steppe of what is now Mongolia, the son of a minor chief. After his father was poisoned, his family was abandoned and lived in poverty.",
      "Over about 25 years of alliances, betrayals and wars he made himself master of the steppe peoples. In 1206 an assembly proclaimed him Chinggis Khan, the name the West spells Genghis.",
      "His armies then attacked northern China, Central Asia and Persia. Whole cities that resisted were destroyed. He died in 1227 on campaign. His sons and grandsons carried the empire from Korea to Hungary."
    ]},
    {k:"early", h:"Early life", ps:[
      {t:"His birth year is uncertain. Different sources give 1155, 1162 and 1167. Most modern historians use 1162.", lab:"disputed", why:"The Persian historian Rashid al-Din (about 1300) implies 1155; Chinese records imply 1162; some scholars argue for 1167. No contemporary record of his birth exists."},
      {t:"The Secret History of the Mongols says he was born clutching a blood clot the size of a knucklebone in his fist, a sign of a future conqueror.", lab:"myth", why:"This is an omen story told in the Secret History, written by Mongols in the decades after his death to glorify him."},
      "When he was about nine, his father Yesügei was poisoned by Tatars while sharing their meal on the road. The clan deserted his widow Hö'elün and her children. They lived by fishing and digging roots.",
      {t:"As a teenager he killed his half-brother Begter in a quarrel over a fish and a bird, and was scolded fiercely by his mother.", lab:"likely", why:"The story is told frankly in the Secret History, which had no reason to invent a crime against its hero. No other source mentions it."},
      "He was captured by a rival clan and held with a wooden collar locked around his neck, then escaped at night with help from a family who hid him in a cart of wool."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Börte, about 1180. He married Börte, who had been promised to him as a child. Soon after, raiders of the Merkit tribe carried her off. He won her back with help from his father's old ally Toghrul and his own blood brother, Jamukha. Her first son, Jochi, was born soon after, and doubts about who his father was dogged Jochi all his life.",
      "Rise, 1180s to 1190s. He built a following by sharing loot fairly and promoting men for loyalty and skill rather than birth. That made him popular with ordinary herders and dangerous to aristocrats, including Jamukha, who became his great rival.",
      "Victory, 1202 to 1205. He crushed the Tatars, who had killed his father, then defeated Toghrul, who had turned against him, and the Naimans. Jamukha, betrayed by his own men, was handed over and executed.",
      "Chinggis Khan, 1206. At a great assembly, a kurultai, by the Onon river, he was proclaimed ruler of all 'the people of the felt-walled tents'. The title Chinggis probably meant something like 'fierce' or 'firm', though scholars still argue about it.",
      "China, 1209 to 1215. He forced the Western Xia kingdom into submission, then invaded the Jin empire of northern China. In 1215 his army took the Jin capital, Zhongdu, today's Beijing, and burned much of it.",
      {t:"Khwarazm, 1219 to 1221. He sent a trade caravan of about 450 merchants to the empire of Khwarazm in Central Asia. The governor of Otrar killed them, and the Shah then killed or humiliated the envoys sent to complain. Chinggis invaded with perhaps 100,000 men or more. Bukhara, Samarkand, Urgench, Merv and Nishapur fell, and many of their people were massacred.", lab:"likely", why:"The Otrar killings and the war are in Persian and Mongol sources. Army sizes and death counts given by chroniclers such as Juvaini are often huge and are probably exaggerated."},
      {t:"Death, August 1227. He died during a campaign against the Western Xia, who had refused to send troops. How he died is not known.", lab:"verified", why:"The date and campaign are agreed. The Secret History says he was hurt in a fall from his horse while hunting the winter before; other accounts mention illness, an arrow or, much later, wild legends."}
    ]},
    {k:"works", h:"What he built", ps:[
      "The army was organised in units of ten, a hundred, a thousand and ten thousand. He broke up old tribes and mixed their men into new units loyal to him.",
      "He created a large personal guard, the keshig, that also trained future commanders and governors.",
      "He adopted an alphabet: a captured Uyghur scribe taught his sons to write Mongolian in the Uyghur script around 1204. The traditional Mongolian script still used in Inner Mongolia comes from it.",
      "The yam, a relay of horse stations begun in his time and built up by his son Ögedei, carried messages across the empire. Later envoys report that riders could cover about 200 kilometres a day.",
      "Different religions were left alone, and Buddhist, Daoist, Christian and Muslim clergy were exempt from some taxes, so long as they prayed for the khan.",
      {t:"He issued laws and decrees, later called the Great Yasa.", lab:"disputed", why:"No complete text survives. What we have are later quotations, some of which may have been added afterwards."}
    ]},
    {k:"people", h:"His people", ps:[
      "Börte (about 1161 to about 1230), his first and senior wife, mother of his four main heirs: Jochi, Chagatai, Ögedei and Tolui. The Secret History shows him taking her advice at key moments.",
      "Jamukha, his childhood blood brother and later his rival, whom he defeated in 1205.",
      "Subutai and Jebe, his greatest generals, rose from humble families. They led the famous raid around the Caspian Sea into Russia in 1221 to 1223.",
      "Ögedei (about 1186 to 1241), his third son, was chosen to succeed him. Ögedei's armies conquered the rest of northern China and invaded Europe."
    ]},
    {k:"world", h:"The world around him", ps:[
      "In England, King John sealed Magna Carta in 1215, the year Beijing fell to the Mongols.",
      "In Japan the first shogunate was founded in 1192. In the Middle East, Saladin had taken Jerusalem in 1187.",
      "In 1221, as Chinggis's army ravaged Central Asia, the Fifth Crusade surrendered in Egypt."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "His grandson Kublai conquered all of China and founded the Yuan dynasty. Another grandson, Hülegü, sacked Baghdad in 1258. Another, Batu, founded the Golden Horde, which dominated Russia for over two centuries.",
      "The empire let goods, people, ideas and diseases travel across Asia more freely than ever before. Marco Polo's journey was possible because of it.",
      "In Mongolia he is the founding father of the nation; his face is on the banknotes and the main airport is named after him. In Iran, Central Asia, China and Russia he is often remembered mainly as a destroyer."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"His tomb has been found.", lab:"myth", t:"Nobody knows where he is buried. Later stories say the funeral escort killed everyone they met and that horses were run over the grave to hide it. Those tales come from much later and cannot be checked."},
      {c:"One man in 200 alive today is his descendant.", lab:"disputed", t:"A 2003 genetic study found that about 8 per cent of men in a large part of Asia share one Y-chromosome line that spread about 1,000 years ago. Linking it to Chinggis Khan is an educated guess; his own DNA has never been tested."},
      {c:"His wars killed 40 million people.", lab:"disputed", t:"Losses were enormous, especially in northern China and Iran, but medieval figures are unreliable and population records are patchy. Modern estimates for the whole Mongol era vary hugely."},
      {c:"Marco Polo met Genghis Khan.", lab:"myth", t:"Marco Polo was born in 1254, 27 years after Chinggis died. He served Kublai Khan, Chinggis's grandson."},
      {c:"His name means 'universal ruler'.", lab:"disputed", t:"That was a popular explanation for a long time. Many scholars now think chinggis meant 'fierce' or 'firm'. It is still argued."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"The Secret History of the Mongols (about 1228 or later), translated by Igor de Rachewiltz, shorter version edited by John C. Street (2015), free to read (CC BY-NC-ND 4.0), Western Washington University", u:"https://cedar.wwu.edu/cedarbooks/4/"},
      {n:"The Journey of William of Rubruck to the Eastern Parts of the World, 1253 to 55, with two accounts of the earlier journey of John of Pian de Carpine, translated by W. W. Rockhill (1900), Internet Archive (public domain)", u:"https://archive.org/details/journeyofwilliam00ruys"},
      {n:"The Travels of Marco Polo, translated by Henry Yule (1871, revised 1903), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/10636"},
      {n:"Zerjal and others, 'The Genetic Legacy of the Mongols', American Journal of Human Genetics (2003)"},
      {n:"Further reading: Paul Ratchnevsky, Genghis Khan: His Life and Legacy (1991)"},
      {n:"Further reading: Timothy May, The Mongol Conquests in World History (2012)"}
    ]}
  ]
},

"hokusai": {
  hero: "great-wave",
  kw: ["Great Wave","Under the Wave off Kanagawa","Mount Fuji","Thirty-six Views","Red Fuji","Fine Wind, Clear Morning","Hokusai Manga","manga","woodblock","ukiyo-e","Prussian blue","Ōi","Oi","Gakyō Rōjin","tsunami@myths","Edo","Japonisme"],
  lede: "A woodblock artist who changed his name about thirty times, made his most famous picture in his seventies, and said he hoped to be a real painter by the age of 110.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Katsushika Hokusai was born in Edo, today's Tokyo, in 1760, and worked for about 70 years as a painter, printmaker and book illustrator.",
      "His series Thirty-six Views of Mount Fuji, published from around 1830 when he was about 70, includes Under the Wave off Kanagawa, now one of the most recognised images in the world.",
      "He died in 1849, aged 88, still working. His prints and sketchbooks reached Europe after Japan opened to trade in the 1850s and inspired Monet, Degas, Van Gogh and Debussy."
    ]},
    {k:"early", h:"Early life", ps:[
      {t:"He was born in the ninth month of 1760 in the Honjo district of Edo, east of the Sumida river. He was probably adopted as a boy by Nakajima Ise, a mirror-maker to the shogun's household.", lab:"likely", why:"The birth date comes from his own later statements and early biographies. Whether Nakajima was his adoptive or natural father is not certain."},
      "As a teenager he worked in a lending library and learned to carve woodblocks, the skilled job of cutting a drawing into cherry wood so it could be printed.",
      "In 1778, at about 18, he joined the studio of Katsukawa Shunshō, a leading designer of prints of kabuki actors, and published his first actor prints the next year under the name Shunrō."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Going his own way, 1790s. After Shunshō died, he left the Katsukawa school and studied other styles, including Chinese painting and the Western perspective seen in Dutch prints. He made money from surimono, luxurious privately printed cards for poetry clubs.",
      {t:"The giant Daruma, 1804. At a temple festival in Edo he painted a portrait of the Buddhist teacher Bodhidharma on paper the size of about 120 tatami mats, using brooms and buckets of ink, while crowds watched from above.", lab:"likely", why:"The event is described by people of his time and in the 1893 biography by Iijima Kyoshin. Exact sizes vary between accounts."},
      "Hokusai Manga, from 1814. He published the first volume of sketchbooks full of people, animals, ghosts, plants and everyday life, meant as a model book for students. Fifteen volumes appeared in the end, the last after his death. 'Manga' here meant something like 'random sketches'.",
      "Thirty-six Views of Mount Fuji, about 1830 to 1832. Published by Nishimuraya Yohachi, the series shows Fuji from many places and seasons, behind fishermen, travellers, coopers and workmen. It was so popular that ten more views were added. It made strong use of Prussian blue, a synthetic pigment newly cheap in Japan.",
      {t:"One Hundred Views of Mount Fuji, 1834. In the afterword of this picture book he wrote that he had been drawing since he was six, that nothing he made before 70 was worth much, and that if he lived to 110 every dot and line would be alive. He signed it Gakyō Rōjin Manji, 'the old man mad about painting'.", lab:"verified", why:"The afterword is printed in the book itself; copies are in the British Museum and many other collections. This is a summary, not a word-for-word translation."},
      "Old age, 1830s and 1840s. A fire is said to have destroyed many of his drawings, famine hit Japan, and he lived very simply, moving house constantly. He kept painting, often with his daughter Ōi, until his death on the 18th day of the 4th month of 1849."
    ]},
    {k:"works", h:"The work", img:"great-wave", ps:[
      "Under the Wave off Kanagawa shows three fast boats carrying fish to market, with their rowers ducking under a huge wave. Mount Fuji, the highest mountain in Japan, sits small in the distance, as if it were another wave.",
      "Fine Wind, Clear Morning, known as Red Fuji, from the same series, shows the mountain turned red by early sunlight in late summer.",
      "He illustrated novels, including Takizawa Bakin's long adventure stories, and made print series of waterfalls, bridges and ghosts.",
      "His later paintings on silk and paper, many of tigers, dragons, and the phoenix ceiling in the Ganshō-in temple at Obuse, were made in his eighties."
    ]},
    {k:"people", h:"His people", ps:[
      "Katsushika Ōi (about 1800 to about 1866), his third daughter, was a fine painter herself. She lived with him in his last years and almost certainly worked on some paintings signed with his name.",
      "Katsukawa Shunshō (1726 to 1793), his first teacher.",
      "Takizawa Bakin (1767 to 1848), the best-selling novelist whose books he illustrated, until the two fell out.",
      {t:"Utagawa Hiroshige (1797 to 1858), the younger master of landscape prints, whose Fifty-three Stations of the Tōkaidō competed with Hokusai's Fuji views.", lab:"verified", why:"Both series and their publishers are well documented."}
    ]},
    {k:"world", h:"The world around him", ps:[
      "He lived his whole life under the Tokugawa shoguns, when Japan was closed to almost all foreigners except a few Dutch and Chinese traders at Nagasaki.",
      "Edo was one of the largest cities in the world, with perhaps a million people, and woodblock prints were cheap: a print from the Fuji series cost about the same as a large bowl of noodles.",
      "He was 16 when the United States declared independence and was in his fifties when Napoleon fell. Beethoven was ten years younger than him and died 22 years earlier."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      {t:"In September 1888 Van Gogh wrote to his brother Theo about Hokusai, repeating Theo's words that 'these waves are claws, the boat is caught in them'.", lab:"verified", why:"Letter 676, about 8 September 1888; the phrase is Theo's, quoted by Vincent. Published by the Van Gogh Museum."},
      "In 1905 Claude Debussy had the Wave printed on the cover of the first edition of his orchestral piece La Mer, 'The Sea'.",
      "The Wave is now printed on Japan's 1,000 yen note, introduced in 2024, and turns up on everything from passports to emojis."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"The Great Wave shows a tsunami.", lab:"myth", t:"It is a large wave far out at sea, often described as a storm or rogue wave. A tsunami is barely visible in deep water and only rises near the shore."},
      {c:"The Great Wave is a painting.", lab:"myth", t:"It is a woodblock print. Hokusai drew the design, then carvers and printers working for the publisher produced it, and thousands of impressions were sold. Around a hundred early impressions are known in museums today, in varying condition."},
      {c:"Hokusai was his only name.", lab:"myth", t:"He used about thirty art names in his life, including Shunrō, Sōri, Taitō, Iitsu and Manji, often selling a name to a pupil when he moved on."},
      {c:"He moved house 93 times.", lab:"likely", t:"The number comes from early biographies and may be rounded or embellished, but people of his time agree he moved constantly, partly to avoid cleaning."},
      {c:"His last words were: 'Five more years and I could become a real painter.'", lab:"likely", t:"The line, with 'If heaven would grant me ten more years' before it, comes from the 1893 biography by Iijima Kyoshin, based on people who knew him. It fits his afterword of 1834."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Edmond de Goncourt, Hokousaï (1896, in French), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/18724"},
      {n:"C. J. Holmes, Hokusai (1898), Internet Archive (public domain)", u:"https://archive.org/details/hokusai00holm"},
      {n:"Hokusai, Fugaku hyakkei (One Hundred Views of Mount Fuji), 1834, afterword (public domain)"},
      {n:"Vincent van Gogh to Theo van Gogh, letter 676, about 8 September 1888, Van Gogh Museum letters edition", u:"https://vangoghletters.org/vg/letters/let676/letter.html"},
      {n:"Further reading: Timothy Clark (ed.), Hokusai: Beyond the Great Wave, British Museum (2017)"},
      {n:"Further reading: Christine M. E. Guth, Hokusai's Great Wave (2015)"}
    ]}
  ]
},

"wu-zetian": {
  hero: "wu-zetian",
  kw: ["Wu Zhao","Empress Wu","Zhou dynasty","Gaozong","Taizong","Tang","Luoyang","Longmen","Qianling","blank stele@legacy","Di Renjie","informers","bronze box","peonies@myths","Empress Wang","daughter@myths","曌"],
  lede: "A minor consort of one emperor who became the empress of the next, then the only woman in China's long history to rule as emperor in her own name. Almost everything we know was written by men who hated the idea.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Wu Zhao, later called Wu Zetian, was born in 624 under the Tang dynasty. She entered the palace as a junior consort of the emperor Taizong, then became the wife and empress of his son, Gaozong.",
      "As Gaozong's health failed she ran the government beside him, then for her sons after his death. In 690 she declared her own Zhou dynasty and ruled as emperor until she was forced out in 705, aged about 81.",
      "She was ruthless with rivals and used informers and terror. She also widened the civil service exams, promoted able officials, and kept the empire stable and growing. Historians still argue about how to weigh the two."
    ]},
    {k:"early", h:"Early life", ps:[
      "Her father, Wu Shihuo, was a wealthy timber merchant who backed the founder of the Tang dynasty and was rewarded with high office. Her mother came from the old Yang aristocracy.",
      {t:"At about 13 she was chosen for Emperor Taizong's palace as a cairen, a low-ranking consort. Later stories say that when Taizong asked how to tame a wild horse, she replied she would need an iron whip, a hammer and a dagger.", lab:"likely", why:"Her entry to the palace is recorded. The horse story is in the Zizhi Tongjian, a history finished about 380 years later, which reports it as something she told later."},
      {t:"When Taizong died in 649, his consorts without children were sent to a Buddhist convent. Within a few years she was back in the palace as a consort of the new emperor, his son Gaozong, which many Confucian writers later saw as a scandal.", lab:"likely", why:"The return to the palace is certain. The convent part comes from later histories and some historians think it has been tidied up or dramatised."}
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Empress, 655. Gaozong deposed his wife, Empress Wang, and made Wu empress, over the protests of senior ministers. Wang and another consort, Xiao, were imprisoned and killed soon after.",
      {t:"The histories say the two women were beaten, had their hands and feet cut off, and were thrown into a vat of wine on Wu's orders.", lab:"disputed", why:"The detail appears in the Old and New Books of Tang, written centuries later by historians hostile to her. That they were killed is accepted; how is uncertain."},
      "Power behind the throne, 660 to 683. Gaozong suffered from strokes or a similar illness from about 660, and Wu took over much of the daily government. From 674 they were known together as the Heavenly Emperor and Heavenly Empress, and officials called them 'the two sages'.",
      "Mother of emperors, 683 to 690. When Gaozong died, their son Zhongzong took the throne, but she deposed him after about six weeks and installed another son, Ruizong, who had no real power. Rebellions by Tang princes were crushed.",
      "Emperor, 690. She proclaimed a new dynasty, the Zhou, and took the title huangdi, emperor, the first and only woman to do so. She moved the main court to Luoyang.",
      "The terror. To find enemies she had bronze boxes set up where anyone could drop in accusations, and she rewarded informers. Officials such as Lai Junchen and Zhou Xing ran a secret police that tortured and killed hundreds of officials and members of the Tang family. Both fell in turn: Zhou Xing was exiled and murdered on the road, and Lai Junchen was executed.",
      "Fall, 705. When she was ill and over 80, ministers led by Zhang Jianzhi staged a coup, killed her favourites the Zhang brothers, and forced her to hand the throne back to Zhongzong. The Tang dynasty was restored, and she died at the end of the year."
    ]},
    {k:"works", h:"What she did", ps:[
      "She expanded the civil service examinations, which let men from outside the old aristocracy into government, and is credited with holding a palace examination in person.",
      "She promoted capable officials, including the chief minister Di Renjie, later the hero of Chinese detective stories and of Robert van Gulik's Judge Dee novels.",
      {t:"She was a great patron of Buddhism. The giant seated Buddha at the Fengxian cave at Longmen, near Luoyang, about 17 metres tall, was finished in her time, and an inscription says she gave 20,000 strings of cash from her cosmetics allowance towards it.", lab:"likely", why:"The inscription was carved in 722, after her death. The donation is accepted by most historians, but the Buddha was commissioned by Gaozong."},
      "She created about a dozen new Chinese characters, including one for her own name, Zhao, written with the sun and moon above the sky. Most were dropped after her reign.",
      "Tang armies held and at times lost ground in Central Asia and Korea during her rule. The empire's population and economy kept growing."
    ]},
    {k:"people", h:"Her people", ps:[
      "Emperor Taizong (598 to 649), one of China's most admired rulers, whose palace she first entered.",
      "Emperor Gaozong (628 to 683), her husband, who relied on her more and more as his health failed.",
      "Shangguan Wan'er (664 to 710), whose family Wu had destroyed, became her secretary and one of the great poets and literary judges of the age.",
      "Princess Taiping (about 665 to 713), her clever and powerful daughter, who helped overthrow Empress Wei in 710 and was forced to kill herself in 713."
    ]},
    {k:"world", h:"The world around her", ps:[
      "Tang China was the largest and richest state in the world, with its capital Chang'an perhaps the biggest city on Earth.",
      "The Prophet Muhammad died in 632, when she was a child. During her reign the Umayyad caliphs ruled from Damascus, and Arab armies reached Central Asia and North Africa.",
      "In Japan, the first permanent capital at Fujiwara was built in the 690s on a Chinese model, while she ruled in Luoyang."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      {t:"She was buried with Gaozong at Qianling, near Xi'an, beside a tall stone tablet with no inscription. Some say she wanted her deeds to speak for themselves; others say her successors could not agree on what to write.", lab:"disputed", why:"The blank stele is real. Every explanation for it is a later theory."},
      "For more than a thousand years Confucian historians presented her as the model of a woman who should never have ruled. Since the 20th century many historians have seen her as an able ruler judged by a harsher standard than male emperors who did the same things.",
      "She is the subject of countless operas, novels, films and television dramas in China."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"She strangled her own baby daughter to frame the empress.", lab:"disputed", t:"The story is told in later histories, especially the Zizhi Tongjian (1084), written by her critics. The baby's death is recorded; that Wu killed her is not proven, and some historians think the tale was invented or improved to blacken her."},
      {c:"She ordered all flowers to bloom in winter, and banished the peonies to Luoyang when they refused.", lab:"myth", t:"This is a folk legend, later used in the novel Flowers in the Mirror (1827). Luoyang is in fact famous for its peonies."},
      {c:"She was the only woman ever to rule China.", lab:"myth", t:"She was the only woman to rule as emperor in her own name. Others held real power as regents or empress dowagers, including Empress Lü of the Han and, much later, Cixi of the Qing."},
      {c:"The portrait at the top of this page shows her face.", lab:"myth", t:"It is an imagined portrait painted about a thousand years after her death. No portrait from her lifetime survives."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Old Book of Tang (Jiu Tangshu, 945), basic annals of Empress Wu, Chinese text on Wikisource (public domain)", u:"https://zh.wikisource.org/wiki/舊唐書/卷6"},
      {n:"New Book of Tang (Xin Tangshu, 1060) and Sima Guang, Zizhi Tongjian (1084), Chinese texts on Wikisource (public domain)", u:"https://zh.wikisource.org/wiki/資治通鑑"},
      {n:"Herbert A. Giles, A Chinese Biographical Dictionary (1898), entry 'Wu Hou', public domain"},
      {n:"Further reading: N. Harry Rothschild, Wu Zhao: China's Only Woman Emperor (2008)"},
      {n:"Further reading: Charles Benn, China's Golden Age: Everyday Life in the Tang Dynasty (2002)"}
    ]}
  ]
},

"tubman": {
  hero: "tubman",
  kw: ["Underground Railroad","Araminta","Minty","Moses@turns","Combahee","John Brown","William Still","Thomas Garrett","Fugitive Slave Act","St. Catharines","Auburn","Maryland","Dorchester","bounty@myths","quilt@myths","Sarah Bradford","pension"],
  lede: "Born enslaved in Maryland, she escaped alone in 1849, then went back about thirteen times to lead others out, and later guided an armed raid that freed more than 700 people in a single night.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Araminta Ross was born into slavery in Dorchester County, Maryland, around 1822. A blow to the head as a girl left her with seizures and visions for the rest of her life.",
      "In 1849 she escaped to Philadelphia. Over the next eleven years she went back about 13 times and brought out about 70 people, mostly family and friends, and gave directions to about 70 more. She never lost anyone.",
      "In the Civil War she worked for the Union Army as a nurse, scout and spy, and helped lead the Combahee River Raid in 1863. She spent her last decades in Auburn, New York, caring for the poor and old, and died in 1913."
    ]},
    {k:"early", h:"Early life", ps:[
      {t:"She was probably born in early 1822. The accounts of Anthony Thompson, who enslaved her father, show a payment to a midwife for her mother, Rit, that year.", lab:"likely", why:"The record was found by the historian Kate Clifford Larson. Tubman herself gave different years; like most enslaved people she was not told her birth date."},
      "Her parents, Ben Ross and Harriet 'Rit' Green, were enslaved by different men. Edward Brodess, who owned Rit and the children, sold three of Araminta's sisters away to the Deep South. They were never seen by the family again.",
      "From about age six she was hired out to other households: to check muskrat traps in icy rivers, to mind a baby through the night, to work in the fields. She was whipped often and kept her scars for life.",
      {t:"As a teenager, she was in a dry-goods store when an overseer threw a two-pound iron weight at another enslaved man who had run off. It hit her in the head. For the rest of her life she had seizures, sudden sleep and vivid dreams, which she believed were messages from God.", lab:"verified", why:"She described the injury to several interviewers, including Sarah Bradford in 1869. Modern writers think she had a form of epilepsy, but that is a diagnosis made long after."},
      "Around 1844 she married John Tubman, a free Black man, and took her mother's first name, Harriet."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Escape, 1849. Brodess died that year, and his widow planned to sell slaves to pay debts. In the autumn Harriet set off alone, walking about 90 miles to Pennsylvania, mostly at night, helped by Quakers and free Black families along the way.",
      {t:"A reward notice dated 3 October 1849 offered 50 dollars for 'Minty' if caught in Maryland, or 100 dollars if caught out of state.", lab:"verified", why:"The notice, placed by Eliza Brodess in the Cambridge Democrat, survives. It also lists her brothers Ben and Henry, who had set off with her and turned back."},
      "The first rescues, 1850. The Fugitive Slave Act of 1850 let slave catchers seize escaped people in free states. That December, Harriet went back to Baltimore and brought out her niece Kessiah and Kessiah's two children, the first of many trips.",
      {t:"Her husband, 1851. She went back for John Tubman, only to find he had married another woman and would not come.", lab:"verified", why:"The story is in Bradford's book (1869) and in her own later interviews."},
      "Canada, 1850s. Because the new law made the North unsafe, she led people all the way to St. Catharines in Canada West, now Ontario, where she lived for several years.",
      "Her parents, 1857. She rescued her elderly parents, who could no longer walk far, by rigging up a horse-drawn cart.",
      {t:"John Brown, 1858. She met the radical abolitionist John Brown, who called her 'General Tubman' and hoped she would recruit men for his raid on Harpers Ferry. She was ill when it happened in 1859 and did not take part.", lab:"verified", why:"Brown's letters use the nickname. Her illness at the time is reported by those around her."},
      "The Civil War, 1862 to 1865. She went to the Union-held Sea Islands of South Carolina. She nursed soldiers and freed people, and organised a network of scouts and river pilots.",
      {t:"The Combahee River Raid, 2 June 1863. Guided by her scouts, Union gunboats with Black soldiers of the 2nd South Carolina Volunteers under Colonel James Montgomery steamed up the Combahee River, burned plantations, and took more than 700 enslaved people to freedom.", lab:"verified", why:"Reports in the Boston Commonwealth (July 1863) and Union army records describe the raid and her role in it."}
    ]},
    {k:"works", h:"What she did", ps:[
      "She planned rescues carefully: she left on Saturday nights, since runaway notices could not be printed until Monday, and used spirituals as signals.",
      {t:"She carried a revolver, for slave catchers and, by her own account, to stop any frightened escaper from turning back and betraying the group.", lab:"likely", why:"Bradford and others report this from her own telling. There is no record that she ever fired it at anyone."},
      {t:"At a meeting in 1896 she said that on her Underground Railroad she had never run her train off the track and never lost a passenger.", lab:"verified", why:"The words were reported from her speech at a women's suffrage convention in 1896. It matches all the evidence about her rescues."},
      "After the war she fought for decades for back pay and a pension for her army service. She finally got a widow's pension through her second husband, the Union veteran Nelson Davis, and from 1899 an extra amount voted by Congress.",
      "She bought land in Auburn, New York, and in 1908 opened a home for elderly and poor Black people there. She campaigned for women's right to vote."
    ]},
    {k:"people", h:"Her people", ps:[
      "William Still (1821 to 1902), of the Philadelphia Vigilance Committee, recorded many of the people she brought through, and later published those notes.",
      "Thomas Garrett (1789 to 1871), a Quaker in Wilmington, Delaware, sheltered her groups and sent them on.",
      {t:"Frederick Douglass wrote to her in 1868 that, apart from John Brown, he knew of nobody who had faced more danger and hardship to serve the enslaved.", lab:"verified", why:"His letter was printed in Bradford's book of 1869."},
      "William H. Seward, Lincoln's Secretary of State, sold her the house and land in Auburn on easy terms in 1859."
    ]},
    {k:"world", h:"The world around her", ps:[
      "About four million people were enslaved in the United States in 1860. Maryland was a border state, close to free Pennsylvania, so escapes were more possible there than in the Deep South.",
      "In 1852, Harriet Beecher Stowe's novel Uncle Tom's Cabin turned many Northerners against slavery.",
      "Slavery was abolished in the British Empire in 1834. It was abolished in the United States by the 13th Amendment in 1865."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "She died of pneumonia on 10 March 1913 in Auburn and was buried with military honours.",
      "She is one of the best-known Americans of the 19th century. Her home in Auburn and the landscape of her early life in Maryland are now national historical parks.",
      "In 2016 the US Treasury announced she would replace Andrew Jackson on the front of the 20-dollar bill. As of 2026 the new note has not been issued."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"She made 19 trips and rescued 300 people.", lab:"myth", t:"Those numbers come from Sarah Bradford's books (1869 and 1886). Research in records and letters points to about 13 trips and about 70 people led out by her, plus about 70 more she gave directions to."},
      {c:"Slaveholders offered 40,000 dollars for her capture.", lab:"myth", t:"No such reward has ever been found. The figure was invented in the 1860s. The only known reward notice for her offered up to 100 dollars, in 1849."},
      {c:"She said: 'I freed a thousand slaves. I could have freed a thousand more if only they knew they were slaves.'", lab:"myth", t:"No source from her lifetime contains these words. They appear only decades after her death, and historians have found no source for them."},
      {c:"Quilts with secret patterns guided escapers on the Underground Railroad.", lab:"myth", t:"The idea comes from a 1999 book based on one family's oral story. Historians have found no evidence for quilt codes in the 19th-century record."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Sarah H. Bradford, Scenes in the Life of Harriet Tubman (1869), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/57821"},
      {n:"Sarah H. Bradford, Harriet, the Moses of Her People (1886), Documenting the American South, University of North Carolina (public domain)", u:"https://docsouth.unc.edu/neh/harriet/menu.html"},
      {n:"William Still, The Underground Rail Road (1872), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/15263"},
      {n:"Reward notice for Minty, Ben and Harry, Cambridge Democrat, 3 October 1849, Bucktown Village Foundation collection"},
      {n:"Further reading: Kate Clifford Larson, Bound for the Promised Land: Harriet Tubman, Portrait of an American Hero (2004)"},
      {n:"Further reading: Catherine Clinton, Harriet Tubman: The Road to Freedom (2004)"}
    ]}
  ]
},

"moses": {
  hero: "",
  kw: ["Exodus","Ten Commandments","Sinai","burning bush","plagues","Passover","Red Sea","Sea of Reeds","Pharaoh","Torah","Musa","Mount Nebo","golden calf","Aaron","Miriam","Merneptah@early","horns@myths","Ramesses@myths"],
  lede: "The prophet who, in the Hebrew Bible, leads the Israelites out of slavery in Egypt and receives the Law on Mount Sinai. He is honoured by Jews, Christians and Muslims. Historians cannot confirm he lived, but the story he stands for has shaped half the world.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Moses is the central human figure of the Torah, the first five books of the Hebrew Bible. In its story he is born to an enslaved Hebrew family in Egypt, raised in Pharaoh's household, called by God, and leads his people out of Egypt and through the desert for forty years.",
      "On Mount Sinai he receives the Ten Commandments and the Law, and he dies within sight of the Promised Land. Judaism calls him Moshe Rabbenu, 'Moses our teacher'. In Christianity he is the great lawgiver, and in Islam he is Musa, one of the most important prophets.",
      "Historians have found no evidence outside the Bible for Moses or for the Exodus as described. Many think the story grew from older memories and was written down and shaped over centuries. This chapter keeps the two apart: what historians can say, and what the tradition teaches."
    ]},
    {k:"early", h:"What historians can say", ps:[
      {t:"No inscription, papyrus or object from ancient Egypt mentions Moses or a mass escape of Hebrew slaves.", lab:"verified", why:"Egyptian records of the New Kingdom (about 1550 to 1070 BC) are rich, and scholars have searched them for over a century. Silence does not prove the story false, but it means it cannot be confirmed."},
      {t:"The earliest mention of 'Israel' as a people outside the Bible is on a stone set up by Pharaoh Merneptah around 1208 BC, which boasts of defeating Israel in Canaan.", lab:"verified", why:"The Merneptah Stele was found in 1896 at Thebes and is in the Egyptian Museum in Cairo."},
      {t:"His name is probably Egyptian. 'Mose' means 'is born' or 'son', as in the pharaohs' names Thutmose and Ramesses. The Bible gives it a Hebrew meaning, 'drawn out' of the water.", lab:"likely", why:"This is the view of most Egyptologists and biblical scholars. A few argue for a purely Hebrew origin."},
      {t:"The Bible says 600,000 men left Egypt, which with families would be two million people or more. Archaeologists have found no trace of such a crowd in the Sinai desert, and the number is far larger than Egypt's whole army.", lab:"verified", why:"The figure is in Exodus 12:37. The lack of archaeological evidence is accepted by most archaeologists, including Israeli ones such as Israel Finkelstein."},
      {t:"Many scholars think a smaller group may have left Egypt, and that its memory merged with the history of tribes already in Canaan to become the story of all Israel.", lab:"disputed", why:"This is one widely held view, not a proven fact. Others think the story is mostly a later national epic, and traditional scholars accept the biblical account as history."},
      {t:"Tradition holds that Moses wrote the Torah. Most modern scholars think it was put together from several sources over centuries and reached its final form around the 6th or 5th century BC, after the Babylonian exile.", lab:"disputed", why:"How and when the Torah was composed is one of the most debated questions in biblical studies. Orthodox Judaism and many Christians hold to Mosaic authorship."}
    ]},
    {k:"turns", h:"The story as the tradition tells it", ps:[
      {t:"Birth. A new pharaoh, fearing the growing number of Hebrews, enslaves them and orders every Hebrew baby boy to be thrown into the Nile. Moses' mother, Jochebed, of the tribe of Levi, hides him for three months, then sets him in a basket of reeds among the rushes. Pharaoh's daughter finds him and raises him as her own.", lab:"tradition", why:"Exodus chapters 1 and 2; her name is given in Exodus 6:20."},
      {t:"Exile. As a grown man he sees an Egyptian beating a Hebrew slave, kills the Egyptian and flees to Midian. There he marries Zipporah, daughter of the priest Jethro, and becomes a shepherd.", lab:"tradition", why:"Exodus chapter 2."},
      {t:"The burning bush. On Mount Horeb God speaks to him from a bush that burns but is not consumed, reveals the divine name, and sends him back to Egypt to say to Pharaoh, 'Let my people go.'", lab:"tradition", why:"Exodus chapters 3 and 4. The divine name is written YHWH in Hebrew; Jews traditionally do not pronounce it."},
      {t:"The plagues. Pharaoh refuses, and ten plagues strike Egypt: blood, frogs, lice, flies, cattle disease, boils, hail, locusts, darkness, and the death of the firstborn. The Israelites mark their doors with lamb's blood and are passed over. Jews remember this every year at Passover.", lab:"tradition", why:"Exodus chapters 7 to 12."},
      {t:"The sea. Pharaoh lets them go, then chases them. The waters part for the Israelites and close over the Egyptian chariots. Moses and his sister Miriam lead the people in songs of victory.", lab:"tradition", why:"Exodus chapters 14 and 15. The Hebrew is Yam Suph, often translated 'Red Sea' and by many scholars 'Sea of Reeds'."},
      {t:"Sinai. At Mount Sinai God gives the Ten Commandments, written on two stone tablets, and the wider Law. While Moses is on the mountain the people make a golden calf to worship. He breaks the tablets in anger and later receives new ones.", lab:"tradition", why:"Exodus chapters 19, 20 and 32 to 34; Deuteronomy chapter 5."},
      {t:"The wilderness. For forty years the people wander in the desert, fed with manna. Moses leads, judges and pleads with God for them.", lab:"tradition", why:"Exodus, Numbers and Deuteronomy."},
      {t:"Death. At 120, Moses climbs Mount Nebo, in today's Jordan, sees the Promised Land across the Jordan River, and dies there. 'No man knoweth of his sepulchre unto this day.'", lab:"tradition", why:"Deuteronomy chapter 34."},
      {t:"In the Qur'an, Musa is named more often than any other prophet. It tells of his rescue as a baby, the burning bush, his confrontation with Pharaoh and the parting of the sea, with its own details and emphases.", lab:"tradition", why:"For example Qur'an, suras 20 (Ta-Ha) and 28 (Al-Qasas)."}
    ]},
    {k:"works", h:"Teachings", ps:[
      {t:"The Ten Commandments: to worship one God only, to make no idols, not to misuse God's name, to keep the Sabbath, to honour father and mother, and not to murder, commit adultery, steal, lie about others or covet.", lab:"tradition", why:"Exodus 20:1-17 and Deuteronomy 5:6-21. Jews, Catholics and Protestants number them slightly differently."},
      "The Sabbath, a weekly day of rest for everyone in a household, including servants, foreigners and animals, is one of the oldest ideas in the Torah and the model for the seven-day week with a day off.",
      {t:"Laws to protect the weak: 'And a stranger shalt thou not wrong, neither shalt thou oppress him; for ye were strangers in the land of Egypt.'", lab:"tradition", why:"Exodus 22:20 in Jewish Bibles (JPS 1917), 22:21 in Christian ones; the idea is repeated many times in the Torah."},
      "The covenant: the idea that God made a binding agreement with a whole people, not just with a king. It runs through Judaism, and through Christian and Islamic thought."
    ]},
    {k:"people", h:"His people", ps:[
      {t:"Aaron, his older brother, who speaks for him before Pharaoh and becomes the first high priest of Israel.", lab:"tradition", why:"Exodus chapters 4 and 28."},
      {t:"Miriam, his sister, a prophet who watches over the baby in the basket and leads the women in song after the sea crossing.", lab:"tradition", why:"Exodus chapters 2 and 15."},
      {t:"Zipporah, his wife, and Jethro, his father-in-law, who advises him to share the work of judging the people.", lab:"tradition", why:"Exodus chapters 2 and 18."},
      {t:"Joshua, his assistant, who leads the people into Canaan after his death.", lab:"tradition", why:"Deuteronomy chapter 34 and the Book of Joshua."}
    ]},
    {k:"world", h:"The world around the story", ps:[
      "The story is set in Egypt's New Kingdom, the age of the great pharaohs who built the temples of Karnak and Abu Simbel, between about 1550 and 1070 BC. The Bible does not name the pharaoh.",
      "Egyptian records do show that people from Canaan, called Asiatics, lived and worked in Egypt, some as slaves or forced labourers. The city of Pi-Ramesses, built by Ramesses II in the Nile delta, may be the 'Raamses' of Exodus 1:11.",
      "In the same centuries, the bronze-age world of the eastern Mediterranean collapsed around 1200 BC, and new peoples, including the Israelites, appear in the hill country of Canaan."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "The Exodus is the founding story of the Jewish people. Passover, one of the oldest Jewish festivals, retells it every spring around a family table.",
      "The Ten Commandments became a moral foundation for Christianity, and are echoed in the Qur'an's ethical teachings.",
      "Enslaved African Americans sang of Moses and Pharaoh in spirituals such as 'Go Down, Moses'. Harriet Tubman was called the Moses of her people, and Martin Luther King Jr. said the night before his death that he had been to the mountaintop and seen the promised land."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"Moses had horns.", lab:"myth", t:"Exodus 34:29 says his face shone when he came down the mountain. The Hebrew word, karan, can mean 'shine' or 'grow horns', and Jerome's Latin translation (around 400) chose horns. That is why Michelangelo's statue of Moses in Rome has two small horns."},
      {c:"The pharaoh of the Exodus was Ramesses II.", lab:"disputed", t:"The Bible never names him. Ramesses II became the favourite candidate because of the city of Raamses and because of films such as The Ten Commandments (1956). Others have proposed different kings, and many historians think the question cannot be answered."},
      {c:"Archaeology has proven the Exodus happened.", lab:"myth", t:"Claims about chariot wheels in the Red Sea and similar finds have not stood up. No evidence of a mass Exodus has been found."},
      {c:"Archaeology has proven the Exodus never happened.", lab:"myth", t:"The lack of evidence for a huge migration is real, but a small group would leave little trace. Historians can say the story as written is not supported, not that every part of it is invented."},
      {c:"He crossed the Red Sea.", lab:"disputed", t:"The Hebrew Yam Suph most likely means 'Sea of Reeds', which some place in the marshy lakes of the north-eastern Nile delta. The Greek translation of the Bible, made in the 3rd century BC, called it the Red Sea, and the name stuck."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"The Holy Scriptures according to the Masoretic Text, Jewish Publication Society (1917), Wikisource (public domain)", u:"https://en.wikisource.org/wiki/Bible_(Jewish_Publication_Society_1917)"},
      {n:"The King James Bible (1611), Project Gutenberg (public domain): Exodus, Numbers, Deuteronomy", u:"https://www.gutenberg.org/ebooks/10"},
      {n:"Flavius Josephus, Antiquities of the Jews, books 2 to 4, translated by William Whiston (1737), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/2848"},
      {n:"The Meaning of the Glorious Koran, translated by Marmaduke Pickthall (1930), public domain: suras 20 and 28", u:"https://quran-archive.org/marmaduke-pickthall"},
      {n:"The Merneptah Stele (about 1208 BC), Egyptian Museum, Cairo"},
      {n:"Further reading: Israel Finkelstein and Neil Asher Silberman, The Bible Unearthed (2001)"},
      {n:"Further reading: Jan Assmann, Moses the Egyptian (1997)"}
    ]}
  ]
},

"buddha": {
  hero: "",
  kw: ["Buddha","Siddhartha","Gautama","Shakyamuni","Lumbini","Bodh Gaya","bodhi tree","Sarnath","Kushinagar","enlightenment","nirvana","Four Noble Truths","Eightfold Path","Middle Way","dharma","sangha","Ashoka@legacy","four sights@turns","laughing Buddha@myths"],
  lede: "A man of the Shakya clan in the foothills of the Himalayas who left home to find an end to suffering, and after his awakening taught for forty-five years. Around half a billion people follow his path today.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Siddhartha Gautama was born in Lumbini, in today's Nepal, into the Shakya clan, probably in the 5th century BC. 'Buddha' is not his name but a title, meaning 'the awakened one'.",
      "Buddhist tradition says he grew up in comfort, left home at 29 to seek the cause of suffering, and after years of hard ascetic practice reached enlightenment under a tree at Bodh Gaya, aged 35. He then taught across the Ganges plain for forty-five years and died at Kushinagar at 80.",
      "Most historians accept that he was a real person, though the details of his life were written down centuries later. His teaching spread across Asia and is followed today by roughly 500 million people."
    ]},
    {k:"early", h:"What historians can say", ps:[
      {t:"Almost all historians think the Buddha was a real teacher who founded a community of monks and nuns in north-east India.", lab:"verified", why:"The early texts are full of real places, kings and clans that fit what is known of the region, and the Buddhist community is attested within a few centuries by inscriptions."},
      {t:"His dates are uncertain. The old tradition gives about 563 to 483 BC; many scholars now place his death around 400 BC, give or take a few decades.", lab:"disputed", why:"Different Buddhist traditions count from different chronologies. The later dating comes from studies such as those of Heinz Bechert and Richard Gombrich."},
      {t:"About 249 BC, the emperor Ashoka visited Lumbini and set up a stone pillar whose inscription says 'Here the Buddha, the sage of the Shakyas, was born.'", lab:"verified", why:"The pillar was rediscovered in 1896 and still stands at Lumbini. The inscription is in Brahmi script."},
      {t:"His teachings were memorised and recited by monks for centuries. According to Sri Lankan chronicles they were first written down, in the Pali language, in the 1st century BC.", lab:"likely", why:"The chronicles say this. Some Buddhist manuscripts found in Gandhara, in today's Pakistan, date from around the 1st century BC to the 1st century AD and are among the oldest known."},
      {t:"The Shakyas were probably governed by a council of leading men rather than a king. His father may have been one of those leaders rather than a great king.", lab:"likely", why:"The early texts describe the Shakyas as a clan with an assembly. The image of a grand palace and a royal father was built up in later biographies."}
    ]},
    {k:"turns", h:"The story as the tradition tells it", ps:[
      {t:"Birth. His mother, Queen Maya, dreamed of a white elephant entering her side. She gave birth to him standing under a sal tree in the Lumbini garden and died seven days later. He was raised by her sister, Mahapajapati.", lab:"tradition", why:"Told in later biographies such as the Buddhacarita of Ashvaghosha (1st or 2nd century AD) and the Jataka introduction."},
      {t:"A sheltered life. A seer predicted he would become either a great king or a great holy man. His father, Suddhodana, kept him in luxury inside the palace. He married Yasodhara and they had a son, Rahula.", lab:"tradition", why:"Buddhacarita and the Pali commentaries."},
      {t:"The four sights. Riding out, he saw an old man, a sick man, a corpse and a calm wandering holy man. Shocked by old age, sickness and death, he left home in the night at 29 to seek a way beyond suffering.", lab:"tradition", why:"In the early Pali canon this story is told of an earlier Buddha, Vipassi (Mahapadana Sutta); later biographies tell it of Siddhartha. The early texts simply say he went forth while his parents wept."},
      {t:"The Middle Way. For six years he studied with teachers and then fasted almost to death. He realised that self-torture led nowhere, just as luxury did, and accepted a bowl of rice and milk from a young woman named Sujata.", lab:"tradition", why:"The Pali canon (for example the Mahasaccaka Sutta, Majjhima Nikaya 36) describes the fasting and its rejection."},
      {t:"Awakening. Sitting under a pipal tree at Bodh Gaya, he resolved not to rise until he understood. Through the night he resisted the tempter Mara and saw the nature of suffering and its end. He was 35. A descendant of that tree still grows there.", lab:"tradition", why:"Pali canon and later biographies. The Mahabodhi Temple at Bodh Gaya is a UNESCO World Heritage Site."},
      {t:"The first sermon. At the Deer Park at Sarnath, near Varanasi, he taught five former companions the Four Noble Truths. Buddhists call this 'setting the wheel of the Dharma in motion'.", lab:"tradition", why:"The Dhammacakkappavattana Sutta (Samyutta Nikaya 56.11)."},
      {t:"Forty-five years of teaching. He walked between towns and kingdoms such as Magadha and Kosala, teaching people of every class. He founded the sangha, the community of monks, and later, at Mahapajapati's request, an order of nuns.", lab:"tradition", why:"The Vinaya, the monastic rules of the Pali canon, tells how the nuns' order was founded."},
      {t:"Death. At about 80 he fell ill after a meal given by Cunda, a metalworker, and died lying on his right side between two sal trees at Kushinagar. His last words were that all conditioned things pass away, and that his followers should work out their liberation with diligence.", lab:"tradition", why:"The Mahaparinibbana Sutta (Digha Nikaya 16). What the meal was, pork or a kind of mushroom, has been argued over for two thousand years."}
    ]},
    {k:"works", h:"Teachings", ps:[
      {t:"The Four Noble Truths: life involves suffering or dissatisfaction (dukkha); it arises from craving; it can end; and the way to end it is the Noble Eightfold Path.", lab:"tradition", why:"Dhammacakkappavattana Sutta."},
      {t:"The Eightfold Path: right view, intention, speech, action, livelihood, effort, mindfulness and concentration. It is often grouped as wisdom, ethics and meditation.", lab:"tradition", why:"Dhammacakkappavattana Sutta and many other discourses."},
      {t:"Impermanence and not-self: everything changes, and there is no fixed, unchanging self to cling to. Karma, intentional action, shapes future lives, and the goal is nirvana, the 'blowing out' of craving and the end of rebirth.", lab:"tradition", why:"Taught throughout the Pali canon, for example the Anattalakkhana Sutta (Samyutta Nikaya 22.59)."},
      {t:"He did not teach about a creator god and told followers to test his teaching by their own experience rather than accept it on authority. Buddhists honour him as a teacher, not as a god who created the world.", lab:"tradition", why:"Kalama Sutta (Anguttara Nikaya 3.65). Buddhist texts do mention gods, but not a creator."},
      {t:"The Five Precepts for lay followers: not to kill, steal, engage in sexual misconduct, lie, or take intoxicants.", lab:"tradition", why:"Found throughout the Pali canon."}
    ]},
    {k:"people", h:"His people", ps:[
      {t:"Ananda, his cousin and attendant for many years, famous for his memory. Tradition says he recited the Buddha's sermons at the First Council after his death.", lab:"tradition", why:"Pali canon and the Vinaya account of the First Council."},
      {t:"Sariputta and Moggallana, his two chief disciples, known for wisdom and for meditative power.", lab:"tradition", why:"Pali canon."},
      {t:"Mahapajapati Gotami, his aunt and foster mother, the first Buddhist nun.", lab:"tradition", why:"Vinaya, Cullavagga 10."},
      {t:"King Bimbisara of Magadha, an early patron who gave the community a bamboo grove near Rajagaha.", lab:"tradition", why:"Vinaya, Mahavagga 1."}
    ]},
    {k:"world", h:"The world around him", ps:[
      "The Ganges plain was growing rich with cities, trade and new kingdoms. Many wandering teachers rejected the authority of the Brahmin priests, among them Mahavira, founder of Jainism, who lived at about the same time.",
      "If the traditional dates are right, Confucius was teaching in China and Pythagoras in the Greek world during his life. If the later dates are right, he was closer in time to Socrates.",
      "Persia's Achaemenid Empire ruled up to the Indus river. Alexander the Great reached India in 326 BC, between about 75 and 160 years after his death, depending on the dating."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "Emperor Ashoka (ruled about 268 to 232 BC) turned to Buddhism after a bloody war and sent teachers abroad. Buddhism spread to Sri Lanka, then along the Silk Roads to China, Korea and Japan, and by sea to South-East Asia, and later to Tibet.",
      "It grew into several great traditions: Theravada in Sri Lanka and South-East Asia, Mahayana in East Asia, and Vajrayana in Tibet and the Himalayas.",
      "Buddhism almost vanished from India itself by the 13th century, but it has revived there since the 20th century, especially after B. R. Ambedkar led hundreds of thousands of Dalits to convert in 1956.",
      "Mindfulness practices that come from Buddhist meditation are now used in hospitals and schools around the world."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"The fat, laughing Buddha is the Buddha.", lab:"myth", t:"That figure is Budai, a Chinese monk of the 10th century linked in folklore with Maitreya, the Buddha to come. Siddhartha is shown slim, sitting in meditation."},
      {c:"Buddhists worship the Buddha as God.", lab:"myth", t:"Buddhists revere him and make offerings before his images, but see him as the fully awakened teacher, not a creator god. Many Mahayana Buddhists also revere him as far more than an ordinary human being."},
      {c:"'What you think, you become' and many other popular Buddha quotes are his words.", lab:"myth", t:"Many quotes shared online are not found in any Buddhist scripture. The opening verses of the Dhammapada say something related, that mind shapes experience, in quite different words."},
      {c:"He was a prince of a great kingdom.", lab:"disputed", t:"Later biographies made his father a great king. The early texts suggest the Shakyas were a small clan republic under the shadow of the kingdom of Kosala."},
      {c:"He was born in India.", lab:"disputed", t:"He was born at Lumbini, which is in today's Nepal, just north of the Indian border. He taught and died in what is now India. In his day the whole region was called India, so both statements are made in good faith."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Buddhist Suttas, translated by T. W. Rhys Davids, Sacred Books of the East vol. 11 (1881), including the Dhammacakkappavattana and Mahaparinibbana Suttas (public domain)"},
      {n:"The Dhammapada, translated by F. Max Müller, Sacred Books of the East vol. 10 (1881), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/2017"},
      {n:"Ashvaghosha, The Buddha-karita, translated by E. B. Cowell, Sacred Books of the East vol. 49 (1894) (public domain)"},
      {n:"Henry Clarke Warren, Buddhism in Translations (1896), Project Gutenberg (public domain)"},
      {n:"SuttaCentral: the Pali discourses with English translations by Bhikkhu Sujato, released into the public domain (CC0)", u:"https://suttacentral.net"},
      {n:"Further reading: Richard Gombrich, Theravada Buddhism (2nd ed., 2006)"},
      {n:"Further reading: John S. Strong, The Buddha: A Beginner's Guide (2009)"}
    ]}
  ]
},

"jesus": {
  hero: "",
  kw: ["Christ","Jesus of Nazareth","Nazareth","Bethlehem","Galilee","Jerusalem","Gospels","disciples","apostles","Peter","Mary","Joseph","Mary Magdalene@myths","John the Baptist","Pontius Pilate","Pilate","crucifixion","resurrection","Easter","Christmas@myths","Last Supper","Sermon on the Mount","parables","Isa","Tacitus@early","Josephus@early","wise men@myths"],
  lede: "A Jewish teacher and healer from Galilee who was crucified by the Romans around AD 30. His followers proclaimed that he had risen from the dead, and the faith built on him became the largest in the world.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Jesus of Nazareth was born around 6 to 4 BC and grew up in Galilee, in the north of today's Israel, under Roman rule. He was a Jew, spoke Aramaic, and was known as a teacher, healer and prophet who preached the coming of the kingdom of God.",
      "After a short public career, perhaps one to three years, he was arrested in Jerusalem at Passover and crucified on the orders of the Roman governor Pontius Pilate, around AD 30 or 33.",
      "Christians believe he is the Son of God, that he rose from the dead, and that through him people are saved. Muslims honour him as Isa, a great prophet and the Messiah, born of the Virgin Mary, but not divine. Judaism does not regard him as the Messiah. Historians study him as a figure of first-century Judaism."
    ]},
    {k:"early", h:"What historians can say", ps:[
      {t:"Nearly all historians of the period, whatever their own beliefs, agree that Jesus existed, that he was baptised by John the Baptist, and that he was crucified under Pontius Pilate.", lab:"verified", why:"This is the near-universal view in academic study of the New Testament and of Roman Judaea, including among Jewish and non-religious scholars such as Paula Fredriksen and Bart Ehrman."},
      {t:"The Roman historian Tacitus, writing around AD 116, says that 'Christus', from whom the Christians took their name, 'suffered the extreme penalty during the reign of Tiberius at the hands of one of our procurators, Pontius Pilatus'.", lab:"verified", why:"Tacitus, Annals 15.44. Tacitus was hostile to Christians, so he had no reason to invent this."},
      {t:"The Jewish historian Josephus, writing around AD 93, mentions 'James, the brother of Jesus who was called Christ', and has a longer passage about Jesus.", lab:"likely", why:"Josephus, Antiquities 20.200 and 18.63-64. Most scholars accept the James passage as genuine. The longer passage seems to have been added to by later Christian copyists, though many think a shorter original lies beneath it."},
      {t:"Pontius Pilate was the Roman prefect of Judaea from about AD 26 to 36. A stone with his name and title was found at Caesarea in 1961.", lab:"verified", why:"The Pilate Stone is in the Israel Museum, Jerusalem."},
      {t:"The earliest Christian writings are the letters of Paul, from the AD 50s. The four Gospels were written about 40 to 70 years after Jesus' death; most scholars date Mark around AD 70, Matthew and Luke in the 80s, and John in the 90s.", lab:"likely", why:"These are mainstream scholarly dates. Some scholars date them earlier; traditional views link them closely to apostles and their companions."},
      {t:"Historians use these texts to reconstruct his life but generally cannot confirm or rule out the miracles and the resurrection, which are matters of faith rather than historical method.", lab:"verified", why:"This is a standard methodological point in historical Jesus research."}
    ]},
    {k:"turns", h:"The story as the tradition tells it", ps:[
      {t:"Birth. The angel Gabriel tells Mary, a young woman of Nazareth engaged to Joseph, that she will bear a son by the Holy Spirit. Jesus is born in Bethlehem and laid in a manger. Shepherds come, told by angels, and magi from the east follow a star.", lab:"tradition", why:"Luke chapters 1 and 2 and Matthew chapters 1 and 2 tell different parts of the story. Mark and John have no birth story."},
      {t:"Baptism and testing. As an adult Jesus is baptised by John in the Jordan River. A voice from heaven calls him 'my beloved Son'. He then fasts forty days in the desert and resists the devil's temptations.", lab:"tradition", why:"Mark 1, Matthew 3 and 4, Luke 3 and 4."},
      {t:"Galilee. He calls twelve disciples, among them the fishermen Peter, Andrew, James and John. He teaches in synagogues and in the open air, heals the sick, drives out demons, eats with outcasts, and tells parables such as the Good Samaritan and the Prodigal Son.", lab:"tradition", why:"The Synoptic Gospels (Matthew, Mark, Luke)."},
      {t:"The Sermon on the Mount. He blesses the poor, the meek and the peacemakers, teaches the Lord's Prayer, and tells his followers to love their enemies and turn the other cheek.", lab:"tradition", why:"Matthew chapters 5 to 7; a shorter version in Luke 6."},
      {t:"Jerusalem. He enters the city on a donkey as crowds wave palm branches, and drives the money-changers out of the Temple courts.", lab:"tradition", why:"All four Gospels."},
      {t:"The Last Supper. At a final meal with his disciples he breaks bread and shares wine, calling them his body and blood. Christians repeat this as Communion or the Eucharist.", lab:"tradition", why:"Mark 14, Matthew 26, Luke 22, and Paul's first letter to the Corinthians, chapter 11, the earliest written account."},
      {t:"Arrest and crucifixion. Judas Iscariot betrays him. He is arrested at night in Gethsemane, questioned by the high priest, and handed to Pilate, who has him crucified as 'King of the Jews'. He dies on the cross and is buried in a rock tomb.", lab:"tradition", why:"All four Gospels. The crucifixion itself is also accepted by historians; see above."},
      {t:"Resurrection. On the third day, women led by Mary Magdalene find the tomb empty. The Gospels and Paul report that the risen Jesus appeared to his followers, and Acts says that after forty days he ascended to heaven.", lab:"tradition", why:"The four Gospels, 1 Corinthians 15, and Acts 1. Christians celebrate this at Easter."},
      {t:"The Qur'an honours Isa as a prophet and Messiah, tells of his miraculous birth to Maryam (Mary), and of his miracles, but teaches that he was not God's son and was not killed on the cross; rather, God raised him up.", lab:"tradition", why:"Qur'an, for example sura 19 (Maryam) and 4:157-158."}
    ]},
    {k:"works", h:"Teachings", ps:[
      {t:"The two great commandments: love God with all your heart, soul and mind, and love your neighbour as yourself. Both come from the Hebrew Bible.", lab:"tradition", why:"Mark 12:28-31, quoting Deuteronomy 6:5 and Leviticus 19:18."},
      {t:"The kingdom of God, which he said was near or already beginning, a world turned upside down in which 'the last will be first'.", lab:"tradition", why:"For example Mark 1:15 and Matthew 20:16."},
      {t:"Forgiveness without limit: not seven times, but seventy-seven times.", lab:"tradition", why:"Matthew 18:21-22."},
      {t:"Care for the poor, the sick, prisoners and strangers: 'because you did it to one of the least of these my brothers, you did it to me'.", lab:"tradition", why:"Matthew 25:31-46."},
      "Historians see much of his teaching as part of Jewish debates of his day, about the Law, the Temple, purity and the coming of God's rule."
    ]},
    {k:"people", h:"His people", ps:[
      {t:"Mary, his mother, honoured by Christians, and as Maryam by Muslims; she is the only woman named in the Qur'an.", lab:"tradition", why:"The Gospels; Qur'an sura 19."},
      {t:"Peter, the leader of the twelve, who denies knowing Jesus three times on the night of his arrest, and later leads the early church. Catholic tradition holds he was the first bishop of Rome.", lab:"tradition", why:"The Gospels and Acts. That Peter died in Rome is an early tradition accepted by many historians."},
      {t:"Mary Magdalene, a follower from Galilee who stands by the cross and is the first to find the empty tomb.", lab:"tradition", why:"All four Gospels."},
      "John the Baptist, a fiery Jewish prophet who baptised Jesus. Herod Antipas, ruler of Galilee, had him executed. Josephus also writes about him.",
      "Paul of Tarsus, who never met Jesus in life, persecuted early Christians, then became the great missionary to non-Jews. His letters are the oldest Christian writings."
    ]},
    {k:"world", h:"The world around him", ps:[
      "He was born under Augustus, the first Roman emperor, and died under Tiberius. Galilee was ruled by Herod Antipas, a son of Herod the Great, and Judaea by a Roman governor.",
      "The Temple in Jerusalem, rebuilt on a grand scale by Herod the Great, was the centre of Jewish worship. The Romans destroyed it in AD 70, about forty years after his death.",
      "Crucifixion was a common Roman punishment for rebels, slaves and bandits, meant to be slow and public."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "Christianity spread across the Roman Empire despite persecution. Emperor Constantine legalised it in 313, and by 380 it was the empire's official religion.",
      "Today about 2.3 billion people, nearly a third of humanity, are Christians, in Catholic, Orthodox, Protestant and many other churches. It is the world's largest religion.",
      "The calendar most of the world uses counts years from an estimate of his birth, worked out by the monk Dionysius Exiguus in 525. He got it a few years wrong.",
      "His life and death are among the most often shown in art and music, from Byzantine icons to Bach's St Matthew Passion."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"Jesus was born on 25 December in the year 1.", lab:"myth", t:"The Gospels give no date. The earliest record of Christmas on 25 December is from Rome in AD 336. And since Matthew places his birth under Herod the Great, who died in 4 BC, he was probably born around 6 to 4 BC. There is no year 0."},
      {c:"Three wise men visited the baby Jesus.", lab:"myth", t:"Matthew mentions magi from the east and three gifts: gold, frankincense and myrrh. He never says how many there were, nor calls them kings. The number three and their names came later."},
      {c:"Mary Magdalene was a prostitute.", lab:"myth", t:"The Gospels never say so. The idea comes from a sermon by Pope Gregory the Great in 591, which merged her with other women in the Gospels. The Catholic Church withdrew the link in 1969."},
      {c:"Jesus never existed.", lab:"myth", t:"A few writers argue this, but it is rejected by nearly all historians of the period. They point to Paul's letters, written within about 25 years, which mention his brother James, and to Josephus and Tacitus."},
      {c:"He was a carpenter.", lab:"likely", t:"Mark 6:3 calls him a tekton, a Greek word for a builder or craftsman who might work in wood or stone. Carpenter is a fair translation, but builder is just as possible."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"The King James Bible (1611), Project Gutenberg (public domain): the four Gospels, Acts and Paul's letters", u:"https://www.gutenberg.org/ebooks/10"},
      {n:"The World English Bible, a modern translation in the public domain", u:"https://ebible.org/web/"},
      {n:"Tacitus, Annals 15.44, translated by Alfred John Church and William Jackson Brodribb (1876), MIT Internet Classics Archive (public domain translation)", u:"https://classics.mit.edu/Tacitus/annals.html"},
      {n:"Flavius Josephus, Antiquities of the Jews 18.63-64 and 20.200, translated by William Whiston (1737), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/2848"},
      {n:"The Meaning of the Glorious Koran, translated by Marmaduke Pickthall (1930), public domain: suras 3, 4 and 19", u:"https://quran-archive.org/marmaduke-pickthall"},
      {n:"Further reading: E. P. Sanders, The Historical Figure of Jesus (1993)"},
      {n:"Further reading: Paula Fredriksen, Jesus of Nazareth, King of the Jews (1999)"}
    ]}
  ]
},

"muhammad": {
  hero: "",
  kw: ["Prophet Muhammad","Nabi Muhammad","Rasulullah","Islam","Muslim","Qur'an","Quran","Koran","Mecca","Makkah","Medina","Madinah","Hijra","Hijrah","Kaaba","Khadija","Abu Bakr","Ali","Aisha@myths","Fatima","Gabriel","Jibril","Hira","Badr","Uhud","Five Pillars","Night Journey","Isra and Mi'raj","Quraysh","images@myths","sword@myths"],
  lede: "The Prophet of Islam, born in Mecca around 570, who Muslims believe received the Qur'an from God through the angel Gabriel over twenty-three years. Muslims say 'peace be upon him' after his name. Within a century of his death, his message had spread from Spain to Central Asia.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Muhammad ibn Abdullah was born in Mecca, in western Arabia, around AD 570, into the Hashim clan of the Quraysh tribe. He was orphaned young, became a trusted merchant, and married Khadija, a widow who ran her own trading business.",
      "Around 610, at about 40, he began to proclaim messages that Muslims believe were revealed by God through the angel Gabriel. He called the people of Mecca to worship one God and to care for the poor. Facing persecution, he and his followers moved to Medina in 622, an event called the Hijra that begins the Islamic calendar.",
      "From Medina he led the Muslim community through war and diplomacy, and in 630 entered Mecca peacefully. He died in Medina in 632. For Muslims he is the final prophet, whose example, the Sunnah, guides daily life. Today about two billion people are Muslim.",
      "This chapter uses no pictures of the Prophet, following the practice of most Muslims."
    ]},
    {k:"early", h:"What historians can say", ps:[
      {t:"The broad outline of his life is accepted by historians: his birth in Mecca, his preaching there, the move to Medina in 622, the conflict with Mecca, its surrender in 630 and his death in 632.", lab:"verified", why:"These events are consistent across Muslim sources and fit the rapid rise of a new Arabian state recorded by outsiders in the 630s."},
      {t:"A Christian text written around 634, the Doctrina Jacobi, mentions a prophet who had appeared among the Arabs. A Syriac chronicle by Thomas the Presbyter, from about 640, names 'Muhammad' and records a battle in 634.", lab:"verified", why:"These are among the earliest non-Muslim references, collected in Robert Hoyland's Seeing Islam as Others Saw It (1997)."},
      {t:"Leaves of a Qur'an manuscript held by the University of Birmingham were radiocarbon-dated in 2015 to between about 568 and 645, making them among the oldest known. The text matches the Qur'an read today.", lab:"verified", why:"Tests by the University of Oxford's radiocarbon unit, announced by the University of Birmingham in 2015."},
      {t:"Muslim tradition holds that the Qur'an was gathered into one standard written text under the third caliph, Uthman, around 650.", lab:"likely", why:"This is the traditional account, and most historians accept it. A few scholars have argued for a later date, but early manuscripts like the Birmingham leaves support an early fixed text."},
      {t:"The detailed biographies, the Sira, were written down later. The best known, by Ibn Ishaq (died about 767), survives in the edition of Ibn Hisham (died about 833). The great collections of his sayings, the Hadith, were compiled in the 9th century.", lab:"verified", why:"Dates are standard. Muslim scholars developed careful methods, isnad criticism, for checking chains of transmission."},
      {t:"Historians debate how much of the detail in the Sira can be confirmed, given the gap of more than a century. Most accept its main framework while treating individual stories with care.", lab:"disputed", why:"Positions range from scholars who rely broadly on the Muslim sources, such as W. Montgomery Watt, to sceptics such as Patricia Crone."}
    ]},
    {k:"turns", h:"The story as the tradition tells it", ps:[
      {t:"Birth and childhood. His father, Abdullah, died before he was born, and his mother, Amina, when he was six. He was raised by his grandfather Abd al-Muttalib and then his uncle Abu Talib. As a boy he spent time with a Bedouin foster family in the desert, with his nurse Halima.", lab:"tradition", why:"Ibn Ishaq's Sira, as edited by Ibn Hisham."},
      {t:"The Trustworthy. He grew up to work in caravan trade and was known as al-Amin, 'the trustworthy'. Khadija, a wealthy merchant, hired him and then proposed marriage. Tradition says she was about 40 and he 25. They were married for about 25 years, until her death, and he took no other wife while she lived.", lab:"tradition", why:"Ibn Ishaq. Her age is the traditional figure; some reports give a younger age."},
      {t:"The first revelation, about 610. While meditating in the cave of Hira, on a mountain near Mecca, he was overwhelmed by the angel Gabriel, who commanded 'Read!' or 'Recite!'. These are the opening words of sura 96. Shaken, he went home to Khadija, who comforted him and became the first to believe.", lab:"tradition", why:"Sahih al-Bukhari, the book of the beginning of revelation; Qur'an 96:1-5."},
      {t:"Preaching in Mecca, 610 to 622. He called people to worship the one God, Allah, to give up idols, to look after orphans and the poor, and to prepare for the Day of Judgement. Some, including his cousin Ali, his friend Abu Bakr and the freed slave Zayd, followed him. Mecca's leaders, guardians of the Kaaba and its idols, turned against him. Weaker believers such as the enslaved Bilal were tortured.", lab:"tradition", why:"Ibn Ishaq and the Meccan suras of the Qur'an."},
      {t:"Abyssinia, about 615. Some Muslims took refuge with the Christian king of Abyssinia (Ethiopia), who protected them.", lab:"tradition", why:"Ibn Ishaq."},
      {t:"The Year of Sorrow, 619. Khadija and Abu Talib died. Muslim tradition tells of the Night Journey, the Isra and Mi'raj, in which he was carried to Jerusalem and up through the heavens, where the five daily prayers were given.", lab:"tradition", why:"Qur'an 17:1 and the Hadith collections. Muslims differ on whether it was a bodily journey or a vision; most hold it was bodily."},
      {t:"The Hijra, 622. Invited by tribes of Yathrib, a town about 340 kilometres to the north, he and his followers emigrated there, escaping a plot on his life. The town became Madinat al-Nabi, 'the city of the Prophet', or Medina.", lab:"tradition", why:"Ibn Ishaq; the date is accepted by historians as the start of the Islamic calendar, fixed under the caliph Umar."},
      {t:"Medina and war with Mecca, 622 to 630. He drew up an agreement among Medina's Muslims, Jews and Arab tribes, often called the Constitution of Medina. The Muslims fought Mecca at Badr (624, a victory), Uhud (625, a costly setback) and the Trench (627). Two Jewish tribes of Medina were expelled after disputes. A third, the Banu Qurayza, was accused of siding with the besiegers at the Trench; by the judgement of an arbiter, Sa'd ibn Mu'adh, its men were executed.", lab:"tradition", why:"Ibn Ishaq and al-Waqidi. The numbers and details of the Qurayza episode are debated by historians, and Muslim scholars have discussed it at length."},
      {t:"Mecca, 630. After the truce of Hudaybiyya (628) broke down, he marched on Mecca with about 10,000 followers. The city surrendered with very little fighting, and he pardoned most of his former enemies. The idols in the Kaaba were destroyed, and it was rededicated to the one God.", lab:"tradition", why:"Ibn Ishaq."},
      {t:"Farewell, 632. He led the pilgrimage to Mecca and gave a final sermon at Mount Arafat, reminding believers that all are equal before God and to treat women well. He fell ill back in Medina and died on 8 June 632 in the room of his wife Aisha, where he is buried, now within the Prophet's Mosque.", lab:"tradition", why:"Ibn Ishaq and the Hadith collections. The year 632 is accepted by most historians; the day is the traditional date."}
    ]},
    {k:"works", h:"Teachings", ps:[
      {t:"Tawhid, the oneness of God: 'Say: He is God, the One.' This is the heart of Islam.", lab:"tradition", why:"Qur'an, sura 112."},
      {t:"The Five Pillars: the declaration of faith (shahada), five daily prayers (salat), giving to the poor (zakat), fasting in Ramadan (sawm), and the pilgrimage to Mecca (hajj) for those who can.", lab:"tradition", why:"The 'Hadith of Gabriel' in Sahih Muslim, and many verses of the Qur'an."},
      {t:"He is the last in a line of prophets that includes Abraham, Moses and Jesus, sent with the same essential message. The Qur'an calls him 'the Seal of the Prophets'.", lab:"tradition", why:"Qur'an 33:40."},
      {t:"Justice and charity: care for orphans, widows, travellers and the poor, honesty in trade, and kindness to parents.", lab:"tradition", why:"For example Qur'an 2:177, 17:23-24 and 107."},
      "His sayings and actions, the Sunnah, are the second source of Islamic law and ethics after the Qur'an, covering everything from prayer to manners at the table."
    ]},
    {k:"people", h:"His people", ps:[
      {t:"Khadija bint Khuwaylid, his first wife, the first believer and his greatest support.", lab:"tradition", why:"Ibn Ishaq; Sahih al-Bukhari."},
      {t:"Fatima, their daughter (the youngest of four in the Sunni account), married to Ali. All of his descendants come through her.", lab:"tradition", why:"Ibn Ishaq."},
      "Abu Bakr, his closest friend, who travelled with him on the Hijra and became the first caliph after his death.",
      "Ali ibn Abi Talib, his cousin and son-in-law, the fourth caliph. Shia Muslims hold that Ali should have succeeded him directly. That disagreement is the root of the Sunni and Shia division.",
      "Aisha, daughter of Abu Bakr, his wife in Medina, who became one of the most important sources of Hadith and a political leader after his death.",
      "Bilal ibn Rabah, a formerly enslaved Ethiopian, freed by Abu Bakr, who became the first muezzin, calling Muslims to prayer."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Arabia lay between two exhausted superpowers, the Byzantine (Eastern Roman) Empire and Sasanian Persia, which fought a devastating war from 602 to 628.",
      "Mecca was a trading and pilgrimage town. The Kaaba held many idols, and tribes made truce months to visit it. Jews and Christians lived in Arabia, especially in Yathrib and in the south.",
      "In China the Tang dynasty had just been founded, in 618. Wu Zetian, later China's only woman emperor, was a child of about eight when he died."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "Within a hundred years of his death, the caliphs who followed him ruled from Spain and Morocco to Central Asia and the Indus valley. Arabic became a language of science, law and literature from the Atlantic to India.",
      "Islam reached South-East Asia mainly through traders and Sufi teachers, not armies. Indonesia, which no Arab army ever reached, has the largest Muslim population of any country, and Islam is the official religion of Malaysia.",
      "Today about two billion people, a quarter of humanity, are Muslims. Every year millions perform the hajj, and millions more visit his mosque in Medina.",
      "Muslims honour his name with a blessing, often written as 'peace be upon him' or with the symbol ﷺ."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"Islam forbids any picture of the Prophet, according to the Qur'an.", lab:"disputed", t:"The Qur'an has no verse about it. The practice of not depicting him comes from Hadith and long tradition, to avoid any risk of idol worship. Some Persian and Ottoman manuscripts did show him, often with his face veiled. Most Muslims today regard any image of him as deeply disrespectful, and this museum follows that."},
      {c:"Islam was spread only by the sword.", lab:"myth", t:"The early conquests were military, but conquered peoples were mostly not forced to convert, and many lands stayed majority Christian, Jewish or Zoroastrian for centuries. In Africa and South-East Asia Islam spread mostly through trade, marriage and teachers."},
      {c:"Muslims worship Muhammad, and are 'Mohammedans'.", lab:"myth", t:"Muslims worship God alone and regard the Prophet as a human messenger. The old Western word 'Mohammedan' is considered wrong and offensive by Muslims."},
      {c:"Aisha was nine when the marriage began.", lab:"disputed", t:"Reports in Sahih al-Bukhari and Sahih Muslim, attributed to Aisha herself, give six at the engagement and nine at the marriage. Most classical scholars accepted them. Some modern Muslim scholars argue from other reports and chronology that she was older. Historians note that marriage customs in 7th-century Arabia, as in much of the world then, were very different from today's."},
      {c:"His coffin floats in the air by magnets.", lab:"myth", t:"This was a medieval European legend. He is buried in the ground, in the room where he died, beside Abu Bakr and Umar, inside the Prophet's Mosque in Medina."}
    ]},
    {k:"sources", h:"Sources", src:[
      
      {n:"The Meaning of the Glorious Koran, translated by Marmaduke Pickthall (1930), public domain", u:"https://quran-archive.org/marmaduke-pickthall"},
      {n:"Ibn Hisham, al-Sira al-Nabawiyya (9th century, based on Ibn Ishaq), Arabic text (public domain)"},
      {n:"Sahih al-Bukhari (9th century), Arabic text (public domain); link to sunnah.com for reference only", u:"https://sunnah.com/bukhari"},
      {n:"University of Birmingham, 'Birmingham Qur'an manuscript dated among the oldest in the world' (2015)", u:"https://www.birmingham.ac.uk/facilities/cadbury/TheBirminghamQuranManuscript"},
      {n:"Further reading: Martin Lings, Muhammad: His Life Based on the Earliest Sources (1983)"},
      {n:"Further reading: Jonathan A. C. Brown, Muhammad: A Very Short Introduction (2011)"},
      {n:"Further reading: Robert G. Hoyland, Seeing Islam as Others Saw It (1997)"}
    ]}
  ]
},

"confucius": {
  hero: "",
  kw: ["Kongzi","Kong Qiu","Analects","Lunyu","junzi","ren","li","filial piety","Lu","Zigong","Yan Hui","Mencius","golden rule@works","Confucianism","Qufu"],
  lede: "A minor official from the small state of Lu who failed to win the job he wanted, spent years wandering with his students, and died thinking he had achieved little. His conversations became the most influential book in East Asian history.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Kong Qiu, honoured as Kongzi, 'Master Kong', and known in the West as Confucius, lived from about 551 to 479 BC in the state of Lu, in today's Shandong province in eastern China.",
      "He taught that good government starts with good people: rulers and officials who are humane, honest and correct in their conduct, and families bound by respect and care. He accepted students whatever their background.",
      "He wrote no book himself. His students and their students collected his sayings in the Analects. From the Han dynasty onwards, his teaching became the official philosophy of the Chinese state for about two thousand years and shaped Korea, Japan and Vietnam too."
    ]},
    {k:"early", h:"Early life", ps:[
      {t:"He was born around 551 BC near Qufu in Lu. His father, Shuliang He, was an old soldier of a minor noble family who died when the boy was about three, and he grew up poor with his mother.", lab:"likely", why:"These details come from Sima Qian's biography in the Records of the Grand Historian (about 94 BC), written four centuries later. The broad picture is accepted; the details are uncertain."},
      {t:"'At fifteen, I had my mind bent on learning,' he said later. As a young man he worked as a keeper of granaries and of livestock.", lab:"verified", why:"Analects 2.4 for the learning; Mencius 5B.5 for his early jobs. Both are early texts, though written down after his death."},
      "Lu was one of many states into which China was divided under the weakening Zhou kings. Its own duke had little power; three great noble families ran it."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Teacher, from his twenties or thirties. He began taking students, charging whatever they could afford. 'I have never refused instruction to anyone who brought a bundle of dried meat,' he said (Analects 7.7).",
      {t:"Office in Lu, about 500 BC. He held posts in the Lu government, reportedly rising to Minister of Crime.", lab:"disputed", why:"Sima Qian and the Zuo Zhuan report it, but scholars disagree on how high he really rose."},
      {t:"Wandering, about 497 to 484 BC. Disappointed with Lu's rulers, he left with a group of students and travelled for about 13 years among the states of Wei, Song, Chen, Cai and others, hoping a ruler would put his ideas into practice. None did. He was in danger more than once and at one point ran out of food.", lab:"likely", why:"The travels are described in the Analects and by Sima Qian. Their route and dates are reconstructed."},
      "Home, 484 BC. He returned to Lu in his late sixties and spent his last years teaching. His son Kong Li and his favourite student Yan Hui died before him. Yan Hui's death made him cry out that heaven had destroyed him (Analects 11.9).",
      "Death, 479 BC. He died at about 72 and was buried north of Qufu, where the Kong family cemetery still lies."
    ]},
    {k:"works", h:"The teaching", ps:[
      {t:"Ren, humaneness or goodness: the central virtue. Asked what it meant, he said, 'Love others.'", lab:"verified", why:"Analects 12.22."},
      {t:"The rule of reciprocity: 'What you do not want done to yourself, do not do to others.'", lab:"verified", why:"Analects 15.24, and again in 12.2. Often compared with the Golden Rule."},
      "Li, ritual and proper conduct: the courtesies and ceremonies that hold families and states together, practised sincerely rather than for show.",
      "The junzi, the 'exemplary person': originally 'a lord's son', he turned it into a moral title anyone could earn by character and learning, not birth.",
      "Rectifying names: things should be what they are called. A ruler should act as a ruler, a father as a father, a son as a son (Analects 12.11).",
      "Government by virtue, not punishment: if you lead people with laws and punishments they will avoid trouble but feel no shame; lead them with virtue and ritual and they will correct themselves (Analects 2.3)."
    ]},
    {k:"people", h:"His people", ps:[
      "Yan Hui, his most gifted and beloved student, poor and happy with a bowl of rice and a gourd of water, who died young.",
      "Zilu, a bold former soldier who argued with him openly and later died in a palace coup in Wei.",
      "Zigong, a clever diplomat and merchant who became rich and, tradition says, mourned at his grave for six years.",
      "Mencius (about 372 to 289 BC), who lived a century later, became the second great Confucian teacher and argued that human nature is good."
    ]},
    {k:"world", h:"The world around him", ps:[
      "This was China's Spring and Autumn period, when hundreds of years of feudal order were breaking down into wars between states. Soon after his death came the even bloodier Warring States period.",
      "Laozi, the legendary founder of Daoism, is said to have met him, but whether Laozi was a real person is uncertain.",
      "In India the Buddha and Mahavira were teaching at roughly the same time, and in Greece Pythagoras and Heraclitus."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "In 213 BC Qin Shi Huang's government ordered many books burned, Confucian classics among them. The next dynasty, the Han, made Confucian learning the basis for training officials.",
      "From the 600s to 1905 China's civil service exams tested candidates on the Confucian classics. For thirteen centuries, educated men across China memorised his words.",
      "His descendants, the Kong family, kept records for more than 80 generations. Their family tree is one of the longest known.",
      "Today Confucian ideas about family, education and respect for elders still shape life in China, Korea, Japan, Vietnam, Singapore and Chinese communities everywhere."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"'Confucius say...' jokes quote him.", lab:"myth", t:"These one-liners are an American joke format from the 1930s and 1940s. Real sayings from the Analects are usually short dialogues with students."},
      {c:"He wrote the Analects.", lab:"myth", t:"He wrote nothing that survives for certain. The Analects were compiled by his students and later followers over perhaps two centuries."},
      {c:"He edited the Five Classics, including the Book of Songs and the Spring and Autumn Annals.", lab:"disputed", t:"Tradition says he edited or wrote them. Modern scholars think his role, if any, was much smaller."},
      {c:"Confucianism is a religion with Confucius as its god.", lab:"disputed", t:"He talked little about gods or the afterlife: 'While you do not know life, how can you know about death?' (Analects 11.12). But he was honoured in temples with rituals for centuries, so whether Confucianism counts as a religion is still argued."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"The Analects (Lunyu), Chinese text on Wikisource (public domain). Quotations follow Legge's translation; passage numbers follow the common modern numbering, and Legge's differ slightly", u:"https://zh.wikisource.org/wiki/論語"},
      {n:"The Chinese Classics, vol. 1: Confucian Analects, translated by James Legge (1861, revised 1893), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/3330"},
      {n:"Sima Qian, Records of the Grand Historian (Shiji), chapter 47, the Hereditary House of Confucius, Chinese text on Wikisource (public domain)", u:"https://zh.wikisource.org/wiki/史記/卷047"},
      {n:"The Works of Mencius, translated by James Legge (public domain)"},
      {n:"Further reading: Annping Chin, The Authentic Confucius (2007)"},
      {n:"Further reading: Michael Nylan and Thomas Wilson, Lives of Confucius (2010)"}
    ]}
  ]
},

"socrates": {
  hero: "",
  kw: ["Athens","Plato","Xenophon","Apology","hemlock","Socratic method","gadfly","daimonion","oracle of Delphi","Xanthippe","Alcibiades","Aristophanes","The Clouds","unexamined life@works","I know that I know nothing@myths"],
  lede: "A stonemason's son who walked barefoot around Athens asking people questions they could not answer. He wrote nothing, was put to death by his own city, and became the founding figure of Western philosophy.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Socrates lived in Athens from about 470 to 399 BC, during its golden age and its long war with Sparta. He served as a soldier, refused to write books, and spent his life questioning people in the streets, gymnasiums and markets.",
      "He claimed to know nothing and to be wiser than others only because he knew it. His questioning embarrassed powerful men and charmed young ones.",
      "In 399 BC an Athenian jury found him guilty of not honouring the city's gods, bringing in new gods, and corrupting the young. He was sentenced to death and drank poison hemlock in prison, aged about 70."
    ]},
    {k:"early", h:"Early life", ps:[
      "His father, Sophroniscus, was a stonemason or sculptor, and his mother, Phaenarete, a midwife. He later compared himself to a midwife who helps others give birth to ideas.",
      {t:"He fought as a heavily armed infantryman in at least three battles of the Peloponnesian War: Potidaea, Delium and Amphipolis. At Potidaea he saved the life of the young Alcibiades, and at Delium he retreated calmly while the army fled.", lab:"likely", why:"These stories come from Plato's Symposium and Laches, written by an admirer. Most historians accept the campaigns."},
      "He was famously ugly, with a snub nose and bulging eyes, went barefoot even in winter, and was poor. His wife was Xanthippe, and they had three sons."
    ]},
    {k:"turns", h:"Turning points", ps:[
      {t:"The oracle. His friend Chaerephon asked the oracle at Delphi whether anyone was wiser than Socrates. The answer was no. Socrates said he set out to prove the oracle wrong by questioning people who seemed wise, and found that they only thought they knew.", lab:"likely", why:"Told in Plato's Apology (21a). Some scholars think Plato shaped or invented the story."},
      "Mocked on stage, 423 BC. The comic playwright Aristophanes put him in The Clouds as a fraud running a 'thinkery' who teaches students to win dishonest arguments. Socrates later said this caricature had poisoned opinion against him.",
      "Standing alone, 406 BC. Serving on the council when the Assembly wanted to try the generals of the battle of Arginusae as a group, which was illegal, he alone of the presiding councillors opposed it. Six generals were executed anyway.",
      "Refusing the Thirty, 404 BC. After Athens lost the war, a pro-Spartan junta, the Thirty Tyrants, ordered him and four others to arrest an innocent man, Leon of Salamis, for execution. The others went. Socrates went home.",
      "Trial, 399 BC. Three citizens, Meletus, Anytus and Lycon, charged him with impiety and corrupting the young. Many Athenians remembered that Alcibiades, who had betrayed Athens, and Critias, leader of the Thirty, had been among his followers. A jury of about 500 citizens found him guilty by a narrow margin.",
      {t:"The sentence. Asked to propose a penalty, he first suggested free meals for life as a public benefactor, then a fine of 30 minae, guaranteed by Plato and other friends. The jury chose death, by a larger margin than had convicted him.", lab:"likely", why:"Plato's Apology and Diogenes Laertius. Plato was present at the trial."},
      "Death. A sacred ship's voyage to Delos delayed the execution by a month. His friend Crito arranged an escape, but Socrates refused, saying he would not break the city's laws. He drank the hemlock among his friends."
    ]},
    {k:"works", h:"His ideas", ps:[
      "The Socratic method: asking a series of questions that test someone's definition of justice, courage or piety until its contradictions show. The goal is not to win but to find out what is true.",
      {t:"'The unexamined life is not worth living for a human being.'", lab:"verified", why:"Plato, Apology 38a. As with all his words, this is Plato's account of what he said."},
      "Virtue is knowledge: nobody does wrong willingly; people do wrong because they mistake what is good for them.",
      "Care for the soul matters more than wealth, fame or the body. It is better to suffer injustice than to do it.",
      "His daimonion, an inner voice that he said warned him against doing things, never urged him on."
    ]},
    {k:"people", h:"His people", ps:[
      "Plato (about 427 to 347 BC), his most famous follower, wrote dozens of dialogues starring Socrates and founded the Academy. Most of what we 'know' about Socrates comes through him.",
      "Xenophon (about 430 to 354 BC), soldier and writer, wrote his own memoirs and his own Apology of Socrates, which sometimes differ from Plato's.",
      "Alcibiades (about 450 to 404 BC), brilliant, handsome and reckless, who loved Socrates, switched sides to Sparta, and helped ruin Athens.",
      "Xanthippe, his wife, became a byword for a nagging wife in later stories, which may be unfair; in Plato's Phaedo she simply grieves."
    ]},
    {k:"world", h:"The world around him", ps:[
      "He grew up while Pericles built the Parthenon, completed in 432 BC. Athens was a direct democracy for its male citizens and ruled an empire of island allies.",
      "The Peloponnesian War with Sparta lasted from 431 to 404 BC. A plague killed perhaps a quarter of Athens' people in 430 to 426 BC, Pericles among them.",
      "In China, Confucius had died about nine years before Socrates was born."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "His student Plato taught Aristotle, who taught Alexander the Great. Almost all Greek philosophy after him counts him as its starting point; philosophers before him are still called 'Presocratics'.",
      "His trial became a symbol of free thought against the state, invoked by thinkers from the Renaissance to Martin Luther King Jr., who cited him in his Letter from Birmingham Jail (1963).",
      "Law schools and classrooms still use 'Socratic' questioning."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He said 'I know that I know nothing.'", lab:"myth", t:"That neat phrase is not in Plato. In the Apology (21d) he says that he does not think he knows what he does not know, which is subtler. The slogan is a later summary."},
      {c:"We know exactly what Socrates thought.", lab:"myth", t:"He wrote nothing. Plato, Xenophon and Aristophanes portray him differently, and Plato often put his own ideas into Socrates' mouth. This is called the 'Socratic problem'."},
      {c:"He died peacefully as the hemlock numbed him from the feet up.", lab:"disputed", t:"That is Plato's account in the Phaedo. Some doctors have argued poison hemlock usually causes convulsions; others think the plant species and dose could produce what Plato describes."},
      {c:"Athens executed him for teaching philosophy.", lab:"disputed", t:"The charge was impiety and corrupting the young, but politics mattered. Many jurors connected him with Critias and Alcibiades, who had harmed Athens, and an amnesty of 403 BC barred prosecuting political crimes directly."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Plato, Apology, translated by Benjamin Jowett (1871), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/1656"},
      {n:"Plato, Crito, translated by Benjamin Jowett, Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/1657"},
      {n:"Xenophon, The Memorabilia, translated by H. G. Dakyns (1897), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/1177"},
      {n:"Aristophanes, The Clouds (423 BC), public domain English translations"},
      {n:"Diogenes Laertius, Lives of the Eminent Philosophers, book 2, translated by C. D. Yonge (1853), public domain"},
      {n:"Further reading: Emily Wilson, The Death of Socrates (2007)"},
      {n:"Further reading: Paul Johnson, Socrates: A Man for Our Times (2011)"}
    ]}
  ]
},

"alexander": {
  hero: "",
  kw: ["Macedon","Macedonia","Philip II","Olympias","Aristotle","Bucephalus","Gordian knot","Granicus","Issus","Gaugamela","Darius III","Persepolis","Alexandria","Siwa","Porus","Hydaspes","Hephaestion","Roxana","Babylon","Hellenistic"],
  lede: "A king at twenty who never lost a battle, conquered the Persian Empire, reached India, founded cities across three continents, and died in Babylon at thirty-two without naming an heir.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Alexander III of Macedon was born in 356 BC, son of King Philip II, and tutored by Aristotle. He became king at 20 when his father was murdered in 336 BC.",
      "In eleven years of campaigning he defeated the Persian Empire, the largest state in the world, and led his army from Greece through Egypt, Mesopotamia, Iran and Central Asia to the Punjab in today's Pakistan.",
      "He died in Babylon in June 323 BC, aged 32. His generals fought over his empire and split it into kingdoms that spread Greek language and culture from Egypt to Afghanistan for three centuries."
    ]},
    {k:"early", h:"Early life", ps:[
      "He was born in Pella, the Macedonian capital, in July 356 BC. His mother, Olympias, was a princess of Epirus who, ancient writers say, claimed he was the son of Zeus.",
      {t:"As a boy he tamed the great horse Bucephalus, which nobody else could ride, by turning it to face the sun so it could not see its own shadow. Bucephalus carried him into battle for years.", lab:"likely", why:"Plutarch tells the story about 400 years later. The horse was real; the details may be embellished."},
      "From about age 13, Aristotle taught him and other noble boys at Mieza for three years. Alexander kept a copy of Homer's Iliad, annotated by Aristotle, under his pillow on campaign, according to Plutarch.",
      "At 18 he commanded the cavalry on the left wing at the battle of Chaeronea in 338 BC, where Philip defeated Athens and Thebes and became master of Greece."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "King, 336 BC. Philip was stabbed to death by one of his own bodyguards during his daughter's wedding celebrations. Alexander secured the throne, had rivals killed, and in 335 BC destroyed the rebel city of Thebes, sparing only its temples and the poet Pindar's house.",
      "Into Asia, 334 BC. He crossed the Hellespont with about 37,000 men and won his first battle against Persian forces at the river Granicus.",
      {t:"The Gordian knot, 333 BC. At Gordium a legend said whoever untied a famous knot would rule Asia. Alexander cut it with his sword, or by some accounts pulled out the pin that held it.", lab:"likely", why:"Both versions are in the ancient sources (Arrian quotes Aristobulus for the pin). The visit is accepted."},
      "Issus, 333 BC. He defeated the Persian king Darius III, who fled, leaving his mother, wife and daughters behind. Alexander treated them with respect.",
      "Egypt, 332 to 331 BC. After a seven-month siege of Tyre, he entered Egypt, where the Persians were unpopular, and was welcomed as pharaoh. He founded Alexandria and visited the oracle of Ammon at Siwa in the desert, which reportedly greeted him as son of the god.",
      "Gaugamela, 331 BC. Near today's Mosul in Iraq he broke Darius's huge army. Babylon and Susa surrendered. At Persepolis, the Persian royal palace was burned in 330 BC, whether by drunken accident or as revenge for Persia's burning of Athens in 480 BC.",
      "Central Asia, 329 to 327 BC. Darius had been murdered in 330 BC by his own satrap Bessus. Alexander spent three hard years fighting in Bactria and Sogdiana, today's Afghanistan, Uzbekistan and Tajikistan, and married Roxana, a Bactrian noblewoman.",
      "India and turning back, 326 BC. He defeated King Porus at the Hydaspes river, in a battle that included war elephants. Bucephalus died there. At the river Hyphasis his exhausted army refused to go further, and he turned back.",
      "Death, 323 BC. After a terrible march through the Gedrosian desert and the death of his closest friend Hephaestion, he returned to Babylon. He fell ill after a banquet and died after about eleven days, on 10 or 11 June 323 BC."
    ]},
    {k:"works", h:"What he did", ps:[
      "He fought four great pitched battles and many sieges, and never lost a battle he commanded. His army combined the Macedonian phalanx, armed with 5.5-metre pikes, with heavy cavalry that he often led in person.",
      {t:"He founded many cities, a good number named Alexandria. Alexandria in Egypt became the greatest city of the Mediterranean and home of the famous Library.", lab:"likely", why:"Plutarch says he founded over 70 cities, which modern historians think is an exaggeration; maybe a dozen to twenty are certain."},
      "He tried to blend Macedonian and Persian rule: he wore some Persian royal dress, used Persian officials, and in 324 BC held a mass wedding at Susa where he and about 80 officers married Persian noblewomen. Many Macedonians resented it.",
      "He was also brutal: he massacred or enslaved the populations of cities that resisted, such as Tyre and Gaza, and in a drunken rage killed his friend Cleitus, who had saved his life at the Granicus."
    ]},
    {k:"people", h:"His people", ps:[
      "Philip II (382 to 336 BC), his father, who built the army Alexander used and made Macedon the strongest power in Greece.",
      "Olympias (about 375 to 316 BC), his fierce and ambitious mother, who was killed in the wars after his death.",
      "Hephaestion (about 356 to 324 BC), his closest friend since boyhood. When Hephaestion died, Alexander was devastated.",
      "Ptolemy (about 367 to 282 BC), one of his generals, who took Egypt after his death and founded the dynasty that ended with Cleopatra."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Athens was still a great city of learning: Aristotle opened his school, the Lyceum, there in 335 BC. The orator Demosthenes spent his career warning Athens against Macedon.",
      "In China the Warring States were fighting; the state of Qin was rising and would unite China a century later.",
      "In India, soon after he left, Chandragupta Maurya founded the Maurya Empire, which took over the lands Alexander had conquered in the north-west."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "His generals, the Diadochi or 'successors', fought for 40 years and divided the empire into the kingdoms of the Ptolemies in Egypt, the Seleucids in Asia and the Antigonids in Macedon.",
      "Greek became the common language of the eastern Mediterranean for centuries. The New Testament was later written in it.",
      "He became a legend everywhere: the Alexander Romance was translated into dozens of languages, and he appears as a hero in Persian poetry, and some Qur'an commentators identify him with the figure Dhul-Qarnayn. In Iran's Zoroastrian tradition he is remembered as 'the accursed' who burned Persepolis.",
      "Julius Caesar is said to have wept at a statue of Alexander, because by Caesar's age Alexander had conquered the world."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He wept because there were no more worlds to conquer.", lab:"myth", t:"No ancient source says so. Plutarch tells a different story: he wept on hearing that there were infinite worlds, because he had not yet conquered even one. The popular version comes much later."},
      {c:"He was poisoned.", lab:"disputed", t:"Some ancient writers claimed poison, and modern theories include malaria, typhoid, alcohol-related illness and a rare nerve disorder. Nobody knows. Sources written soon after say it was a fever."},
      {c:"His body lay uncorrupted for days.", lab:"disputed", t:"Plutarch and Curtius say his body did not decay for days in the Babylon heat. Some doctors have suggested he was deeply paralysed rather than dead at first. It cannot be checked."},
      {c:"His tomb in Alexandria has been found.", lab:"myth", t:"Ptolemy hijacked his body and buried it in Egypt, finally in Alexandria, where Augustus and other Romans visited it. It disappeared by about AD 400, and despite many searches, it has never been found."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Arrian, The Anabasis of Alexander, translated by E. J. Chinnock (1884), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/46976"},
      {n:"Plutarch, Life of Alexander, in Plutarch's Lives, Dryden translation revised by A. H. Clough, Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/674"},
      {n:"Quintus Curtius Rufus, History of Alexander, and Diodorus Siculus, book 17 (public domain translations)"},
      {n:"Further reading: Robin Lane Fox, Alexander the Great (1973)"},
      {n:"Further reading: Paul Cartledge, Alexander the Great: The Hunt for a New Past (2004)"}
    ]}
  ]
},

"qin-shi-huang": {
  hero: "",
  kw: ["Ying Zheng","First Emperor","Qin","Terracotta Army","terracotta warriors","Great Wall@works","Li Si","burning of books@turns","scholars buried@myths","Legalism","Xianyang","mercury@legacy","immortality@turns","Xu Fu","Jing Ke","unification"],
  lede: "A boy king who conquered six rival kingdoms, called himself the First Emperor, made China use one script, one currency and one set of weights, and was buried with an army of clay soldiers. His dynasty lasted fifteen years.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Ying Zheng was born in 259 BC and became king of Qin, a tough state in China's north-west, at 13. Between 230 and 221 BC his armies conquered the six other great states of the Warring States period.",
      "In 221 BC he took a new title, Shi Huangdi, 'First Emperor'. He standardised writing, coins, weights and measures, and even cart axle widths, and divided the land into centrally governed commanderies.",
      "He ruled harshly, burned books and used forced labour on a vast scale. He died in 210 BC while searching for immortality. Within four years of his death, rebellions destroyed his dynasty. The name China probably comes from Qin."
    ]},
    {k:"early", h:"Early life", ps:[
      "He was born in Handan, capital of the rival state of Zhao, where his father, a Qin prince, was living as a hostage. His father became king of Qin in 250 BC and died three years later.",
      {t:"Sima Qian reports a rumour that his real father was the rich merchant Lü Buwei, who had given his concubine to the prince. Lü became chief minister of Qin.", lab:"disputed", why:"Sima Qian wrote over a century later, under the Han dynasty that had replaced Qin. Many historians think the story was spread to discredit the First Emperor."},
      "He became king in 246 BC, aged 13, with Lü Buwei ruling for him. In 238 BC he took power himself, crushed a revolt by his mother's lover Lao Ai, and soon removed Lü Buwei, who later killed himself."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Conquest, 230 to 221 BC. Qin's armies, rewarded for each enemy head taken, conquered Han (230), Zhao (228), Wei (225), Chu (223), Yan (222) and Qi (221).",
      {t:"The assassin, 227 BC. Jing Ke, sent by the crown prince of Yan, came to court with a map that hid a poisoned dagger. He grabbed the king's sleeve and lunged, but the king pulled free, ran round a pillar, finally drew his long sword and wounded him. Jing Ke was killed.", lab:"likely", why:"Sima Qian tells the story in vivid detail in his chapter on assassins. The attempt is accepted; the details are a dramatic retelling."},
      "First Emperor, 221 BC. He rejected the title 'king' as too small, abolished the old feudal states, and ruled through officials he appointed and could dismiss, advised by his chancellor Li Si.",
      "Unifying, 221 to 210 BC. One script, the small seal script, replaced the varied scripts of the old states. Coins, weights, measures and axle widths were standardised. Thousands of kilometres of roads and canals were built.",
      {t:"The burning of the books, 213 BC. On Li Si's advice he ordered histories of other states, the Book of Songs and the Book of Documents in private hands to be burned, except copies in the imperial library and books on medicine, divination and farming.", lab:"verified", why:"Sima Qian quotes Li Si's memorial. How completely it was carried out is debated."},
      "The search for eternal life. He sent the magician Xu Fu with ships and, according to Sima Qian, thousands of young men and women to find the islands of the immortals in the eastern sea. Xu Fu came back empty-handed, sailed again, and never returned.",
      "Death, 210 BC. He died on a tour of the east, aged 49. Li Si and the eunuch Zhao Gao hid his death, carrying his body back in a carriage with carts of salted fish to cover the smell, and forged orders that made his younger son emperor and forced the elder son to kill himself.",
      "Collapse, 209 to 206 BC. Revolts broke out within a year. Zhao Gao had Li Si executed, and the dynasty fell in 206 BC. The Han dynasty, founded in 202 BC, kept much of his system."
    ]},
    {k:"works", h:"What he built", ps:[
      "The empire's administrative system: 36 commanderies, later more, governed by salaried officials. It became the model for Chinese government for two thousand years.",
      "Walls: he ordered existing northern walls joined and extended against the Xiongnu nomads, using huge numbers of conscripts. Most of the Great Wall visible today is much later, from the Ming dynasty.",
      "The Lingqu canal, in today's Guangxi, linked two river systems and is still in use.",
      {t:"His tomb complex near Xi'an, worked on for decades by perhaps 700,000 labourers. In 1974 farmers digging a well found the Terracotta Army: about 8,000 life-size clay soldiers, with horses and chariots, guarding the tomb from the east.", lab:"likely", why:"The labour figure is from Sima Qian. The soldiers are a UNESCO World Heritage Site; the estimate of 8,000 comes from excavation of the three main pits."}
    ]},
    {k:"people", h:"His people", ps:[
      "Li Si (about 280 to 208 BC), his chancellor, a student of the philosopher Xunzi and a champion of Legalism, the doctrine of strict laws and harsh punishments.",
      "Lü Buwei (died 235 BC), the merchant who became chief minister and sponsored an encyclopedia of knowledge.",
      "Meng Tian, the general who led 300,000 men against the Xiongnu and directed wall-building in the north. He was forced to commit suicide after the emperor's death.",
      "Fusu, his eldest son, who criticised his harshness and was sent to the frontier, then tricked into suicide by a forged order."
    ]},
    {k:"world", h:"The world around him", ps:[
      "In the Mediterranean, Rome and Carthage were fighting the Second Punic War (218 to 201 BC); Hannibal crossed the Alps with elephants in 218 BC.",
      "In India the Maurya Empire, having reached its height under Ashoka, was declining.",
      "Archimedes was killed at Syracuse in 212 BC, a year after the burning of the books."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "For two thousand years Confucian historians remembered him as the model tyrant. In the 20th century Mao Zedong praised him as a unifier and compared himself to him.",
      {t:"His own burial mound has never been opened. Sima Qian wrote that it contained a model of the empire with rivers of mercury. Soil tests over the mound in 1981 and 2003 found unusually high levels of mercury.", lab:"likely", why:"The soil studies are published; whether they show rivers of mercury inside the tomb cannot be confirmed without excavating it, which China has decided not to do for now."},
      "The words for China in many languages, China, Chine, Cina, probably come from Qin, through Sanskrit Cīna."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He buried 460 Confucian scholars alive.", lab:"disputed", t:"Sima Qian says that in 212 BC he had 460 scholars executed, the word often read as 'buried alive'. Some historians think they were mainly magicians who had failed to find immortality potions, and that the story grew later to make him the enemy of Confucianism."},
      {c:"He built the Great Wall.", lab:"myth", t:"He linked and extended earlier walls, mostly of rammed earth, far north of today's famous sections. The brick and stone wall tourists visit is mostly from the Ming dynasty, about 1,700 years later."},
      {c:"Every terracotta soldier has a different face.", lab:"likely", t:"Faces were made from a limited number of moulds and then individually finished, so they vary a lot. Whether every single one is unique has never been proven."},
      {c:"He died from mercury pills taken to live forever.", lab:"disputed", t:"Sima Qian does not give a cause of death. Later writers suggested elixirs, and mercury was used in Chinese alchemy, but there is no direct evidence."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Sima Qian, Records of the Grand Historian (Shiji), chapter 6, Basic Annals of the First Emperor of Qin, Chinese text on Wikisource (public domain)", u:"https://zh.wikisource.org/wiki/史記/卷006"},
      {n:"Sima Qian, Shiji, chapter 87 (Li Si) and chapter 86 (assassins, including Jing Ke), Chinese text on Wikisource (public domain)", u:"https://zh.wikisource.org/wiki/史記/卷087"},
      {n:"Emperor Qinshihuang's Mausoleum Site Museum, Xi'an", u:"https://www.bmy.com.cn"},
      {n:"Further reading: Frances Wood, The First Emperor of China (2007)"},
      {n:"Further reading: Derk Bodde, China's First Unifier (1938)"}
    ]}
  ]
},

"joan-of-arc": {
  hero: "",
  kw: ["Jeanne d'Arc","Maid of Orléans","Orléans","Domrémy","Charles VII","Reims","coronation","Hundred Years' War","voices","Saint Michael","Saint Catherine","Saint Margaret","Burgundians","Compiègne","Rouen","Cauchon","trial","burned@turns","men's clothing","rehabilitation","saint@legacy"],
  lede: "A peasant teenager who said saints told her to save France, talked her way to the heir to the throne, broke the siege of Orléans and saw him crowned. At nineteen she was burned as a heretic by a church court; twenty-five years later another court cleared her.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Joan was born around 1412 in Domrémy, a village in north-eastern France, during the Hundred Years' War between England and France. From about 13 she said she heard the voices of saints.",
      "In 1429, aged about 17, she persuaded Charles, the uncrowned heir to the French throne, to send her with an army to relieve the besieged city of Orléans. She succeeded in nine days, and two months later Charles was crowned at Reims.",
      "Captured in 1430, she was sold to the English and tried for heresy by a church court in Rouen. She was burned at the stake on 30 May 1431. A new trial in 1456 overturned the verdict, and in 1920 the Catholic Church made her a saint."
    ]},
    {k:"early", h:"Early life", ps:[
      "Her parents, Jacques d'Arc and Isabelle Romée, were farmers with about 50 acres. She spun wool, sewed, and looked after animals, and could not read or write.",
      "Domrémy was on the border between lands loyal to the French heir and lands held by the Burgundians, who were allied with England. The village was raided at least once while she was a girl.",
      {t:"At about 13, in her father's garden, she heard a voice she later identified as Saint Michael, and then Saints Catherine and Margaret. They told her to be good, and later to go to France and help the heir.", lab:"verified", why:"This is what she told her judges in 1431, in the trial record. Whether the voices came from God, from illness or from her own mind is a question of belief and cannot be settled by historians."}
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Vaucouleurs, 1428 to 1429. She asked Robert de Baudricourt, the local captain, for an escort to the heir. He laughed and sent her home. She came back, and in February 1429 he gave in.",
      {t:"Later stories say he was convinced when she correctly predicted a French defeat near Orléans.", lab:"disputed", why:"The prediction story is not in the trial records; it appears in chronicles written decades later."},
      "Chinon, February to March 1429. After an 11-day ride through enemy country, dressed in men's clothes, she met Charles at the castle of Chinon. Churchmen at Poitiers examined her for three weeks and found nothing bad in her.",
      "Orléans, April to May 1429. The city had been under siege by the English since October 1428. Joan arrived with a relief convoy, rallied the soldiers, and was hit by an arrow between neck and shoulder at the fort of Les Tourelles. On 8 May the English withdrew.",
      "Patay and Reims, June to July 1429. At Patay the French cavalry smashed an English army, the first big French victory in years. Joan then pushed Charles to march through enemy territory to Reims, where French kings were traditionally crowned. He was crowned Charles VII on 17 July, with Joan beside him holding her banner.",
      "Paris and setbacks, 1429 to 1430. An attack on Paris failed and she was wounded in the thigh. The king made truces and her campaigns faltered.",
      "Capture, May 1430. Defending Compiègne, she was pulled from her horse by Burgundian soldiers. No attempt by Charles VII to ransom or rescue her is recorded. The Burgundians sold her to the English for 10,000 livres.",
      {t:"Trial, January to May 1431. In Rouen she was tried by a church court led by Pierre Cauchon, Bishop of Beauvais, a supporter of the English. Questioned for months, alone and without a lawyer, she answered with striking wit. Asked whether she was in God's grace, a trap either way, she replied: 'If I am not, may God put me there; and if I am, may God so keep me.'", lab:"verified", why:"The answer is in the official trial record, which survives in Latin and in parts of the French minutes."},
      "Death, 30 May 1431. After signing an abjuration under threat of burning, she went back to wearing men's clothing within days. Witnesses at the retrial said her women's clothes had been taken away and that she feared assault by her guards. Judged a relapsed heretic, she was burned in the Old Market square of Rouen. She asked for a cross to be held up before her and called on Jesus as she died. She was about 19."
    ]},
    {k:"works", h:"What she did", ps:[
      "She turned around the morale of the French side at a moment when Charles's cause seemed lost. Her presence at Orléans, Patay and Reims is widely seen as a main reason those campaigns succeeded, though at Patay the fighting was over before she reached it.",
      {t:"She was not the commander in charge. Experienced captains, such as the Duke of Alençon and the Bastard of Orléans, led the armies, but they often followed her urging to attack.", lab:"likely", why:"Their own testimony at the 1456 retrial describes her role in councils and in the fighting. They were testifying in her favour, so may have shaped their memories."},
      "She carried a banner rather than fighting with her sword, she said, so as not to kill anyone, and she wrote (through scribes) to the English commanders telling them to go home.",
      "The coronation at Reims gave Charles VII the legitimacy of an anointed king, which mattered enormously in medieval eyes. The French went on to drive the English out of almost all of France by 1453."
    ]},
    {k:"people", h:"Her people", ps:[
      "Charles VII (1403 to 1461), the heir she led to his coronation, who abandoned her after her capture but later ordered the inquiry that led to her rehabilitation.",
      "Jean, Bastard of Orléans, later Count of Dunois, the commander at Orléans, who became one of her firmest supporters.",
      "Pierre Cauchon (1371 to 1442), the bishop who ran her trial, remembered in France as a villain.",
      "Isabelle Romée, her mother, who campaigned for years to clear her daughter's name and lived to see it done."
    ]},
    {k:"world", h:"The world around her", ps:[
      "The Hundred Years' War had been going on since 1337. In 1420 the Treaty of Troyes had named England's King Henry V heir to the French throne, cutting out Charles.",
      "In the same years the Chinese admiral Zheng He was making his last voyage; it set sail in 1431, the year she died.",
      "In Florence, Brunelleschi was building the great dome of the cathedral, and Gutenberg was a young man in Mainz."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "In 1456 a papal court at the request of her family declared the 1431 trial unjust and void. Over 100 witnesses, from childhood friends to soldiers, gave evidence that survives.",
      "The Catholic Church beatified her in 1909 and canonised her in 1920. She is one of the patron saints of France.",
      "Writers from Shakespeare (who made her a witch in Henry VI) to Voltaire, Schiller, Mark Twain and George Bernard Shaw have retold her story. In France she has been claimed by the left, the right, the Church and the Republic."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"Her surname was 'of Arc', and she came from a town called Arc.", lab:"myth", t:"She called herself Jehanne la Pucelle, 'Joan the Maid'. Her father's name was written d'Arc or Darc; no link to a place called Arc has been proven."},
      {c:"She was a soldier who killed many enemies.", lab:"myth", t:"She said at her trial she carried her banner in battle, 'so as to avoid killing anyone', and had never killed anyone. She was wounded several times."},
      {c:"She was burned for being a witch.", lab:"myth", t:"The final charge was relapsed heresy. Witchcraft accusations were raised early in the trial but dropped. Wearing men's clothing again was treated as the sign of relapse."},
      {c:"Her heart survived the fire and her ashes are kept in Chinon.", lab:"myth", t:"Her ashes were thrown into the Seine. A jar of supposed relics found in Paris in 1867 was tested in 2007 and turned out to contain an Egyptian mummy's remains and a cat bone."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Jules Quicherat (ed.), Procès de condamnation et de réhabilitation de Jeanne d'Arc (1841 to 1849), the trial records, public domain"},
      {n:"T. Douglas Murray (ed.), Jeanne d'Arc, Maid of Orleans, Deliverer of France, the trial and rehabilitation records in translation (1902), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/57389"},
      {n:"Further reading: Régine Pernoud and Marie-Véronique Clin, Joan of Arc: Her Story (1999)"},
      {n:"Further reading: Helen Castor, Joan of Arc: A History (2014)"}
    ]}
  ]
},

"ibn-battuta": {
  hero: "",
  kw: ["Rihla","Tangier","Mecca","hajj","Delhi","Muhammad bin Tughluq","Maldives","Calicut","Quanzhou","Zaytun","Mali","Timbuktu","Mansa Sulayman","Ibn Juzayy","Black Death@turns","Golden Horde","Constantinople","qadi"],
  lede: "A young legal scholar from Tangier who set out for Mecca at 21 and came home nearly 30 years later, having travelled perhaps 120,000 kilometres across most of the Muslim world and beyond. He then dictated one of the greatest travel books ever made.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Abu Abdallah Muhammad Ibn Battuta was born in Tangier, Morocco, in 1304 into a Berber family of legal scholars. In 1325 he left home to make the pilgrimage to Mecca.",
      "He kept going. Over the next 29 years he travelled through North Africa, Arabia, Persia, Anatolia, the Russian steppe, Central Asia, India, the Maldives, Sri Lanka, South-East Asia, and he said China, and finally across the Sahara to the empire of Mali.",
      "Back in Morocco, the sultan had him dictate his story to a scholar, Ibn Juzayy. The result, known as the Rihla ('The Journey'), finished in 1355, is a priceless picture of the 14th-century world, with some parts that historians doubt."
    ]},
    {k:"early", h:"Early life", ps:[
      "He was born on 24 February 1304, according to his own account. His family were Lawata Berbers, and several relatives served as qadis, Islamic judges.",
      "He studied Maliki law, the school followed in North Africa, as was expected of a young man of his background. That training was his passport: across the Muslim world, a scholar could find hospitality, patrons and jobs.",
      {t:"He left Tangier on 13 or 14 June 1325, alone, at 21. 'I set out alone, having neither fellow-traveller to cheer me, nor caravan,' he recalled, and he wept at leaving his parents.", lab:"verified", why:"This is in the opening of the Rihla, in his own telling (quoted here in Gibb's translation). Both his parents had died by the time he returned."}
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Egypt and Mecca, 1325 to 1327. He crossed North Africa, saw Alexandria and Cairo, the greatest city of the Islamic world, travelled through Syria and joined the hajj caravan to Mecca in 1326. Instead of going home, he went on to Iraq and Persia.",
      "Arabia and East Africa, 1328 to 1330. He sailed down the Red Sea and the East African coast to Mogadishu, Mombasa and Kilwa, then round Arabia to Oman and the Persian Gulf.",
      "Anatolia and the steppe, 1330 to 1333. He crossed Anatolia, then the Black Sea to the lands of the Golden Horde, the Mongol khanate of Russia. He says he travelled with a Byzantine princess, a wife of the khan Özbeg, to Constantinople.",
      "Delhi, 1334 to 1341. He reached India, where Sultan Muhammad bin Tughluq, famous for generosity and for terrible cruelty, made him a qadi of Delhi with a large salary. He lived richly, fell into debt, and at one point feared execution when the sultan turned on one of his friends.",
      "Shipwreck and the Maldives, 1341 to 1345. The sultan sent him as ambassador to China, but the fleet was wrecked off Calicut. Afraid to return to Delhi, he went to the Maldives, where he served as a judge, married several local women, and tried to make women cover up more, with little success.",
      {t:"China, 1345 to 1346. He says he sailed via Sri Lanka, Bengal and Sumatra to Quanzhou (which Arabs called Zaytun), and visited Guangzhou and possibly Beijing.", lab:"disputed", why:"His descriptions of China are thin and sometimes muddled, and some scholars think he never went further than southern China, or at all. Others accept the Quanzhou visit."},
      "The Black Death, 1348. Returning west, he passed through Syria and Egypt as the plague swept through. He describes 2,400 people dying in a single day in Damascus. He learned his mother had died of it.",
      "Home, and Mali, 1349 to 1354. He reached Fez in 1349, visited Granada in Muslim Spain, then in 1351 crossed the Sahara to the empire of Mali, visiting Mansa Sulayman's court and Timbuktu, and returned in 1354."
    ]},
    {k:"works", h:"The Rihla", ps:[
      "The full title means 'A Gift to Those Who Contemplate the Wonders of Cities and the Marvels of Travelling'. It was written down by Ibn Juzayy, a young scholar from Granada, between 1354 and 1355, on the orders of Sultan Abu Inan of Morocco.",
      {t:"Some passages were copied from earlier travel writers, especially Ibn Jubayr's 12th-century account of Arabia and Syria.", lab:"verified", why:"Scholars have matched long passages word for word. Ibn Juzayy likely added them to fill gaps in what was dictated from memory."},
      "Its value lies in details: the price of food, how people dressed and greeted each other, court ceremonies, the coconut trade, how Malian women had a freedom that shocked him, how yogis in Delhi seemed to float in the air, how sultans gave gifts.",
      {t:"Modern estimates of his route come to about 117,000 kilometres (73,000 miles). No one can measure it, but it was further than any known traveller before the age of steam.", lab:"likely", why:"The figure is a modern reconstruction from his route, not a number he gave."}
    ]},
    {k:"people", h:"His people", ps:[
      "Ibn Juzayy (1321 to 1357), the scribe and editor who shaped the Rihla's elegant prose.",
      "Muhammad bin Tughluq (ruled 1325 to 1351), the brilliant, unpredictable Sultan of Delhi who employed him for years.",
      "Mansa Sulayman of Mali, brother of the famously rich Mansa Musa, whose court he found impressive and whose gifts he found stingy.",
      "Many wives and children along the way, most of whom he left behind; he mentions them in passing."
    ]},
    {k:"world", h:"The world around him", ps:[
      "His life overlapped with Marco Polo's in only one way: Polo died in 1324, the year before he set out. Both described the Mongol world, from opposite directions.",
      "Mansa Musa of Mali had made his famous hajj through Cairo in 1324, spending so much gold that he is said to have depressed its value there for years.",
      "In Europe, Dante had just died (1321), and the Black Death that Ibn Battuta saw in Syria was killing a third or more of Europe's people."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "The Rihla was little known in Europe until manuscripts reached scholars in the 19th century. A full French translation by Defrémery and Sanguinetti appeared in 1853 to 1858.",
      "Today it is a key source for the history of the Maldives, Mali, Anatolia, the Delhi Sultanate and the Swahili coast, places where few other written accounts survive.",
      "Morocco honours him widely, and Tangier claims his tomb, though nobody knows where he is buried. A crater on the Moon is named after him, as is a shopping mall in Dubai."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"Everything in the Rihla is his eyewitness account.", lab:"myth", t:"Parts were copied from Ibn Jubayr and other writers, some journeys, like a trip to Bulgar in the far north, are probably invented, and dates often do not fit together. Most of it, though, matches other sources well."},
      {c:"He travelled further than anyone before him.", lab:"likely", t:"No pre-modern traveller is known to have covered more ground. Comparisons are rough because no one kept count."},
      {c:"He went to China.", lab:"disputed", t:"He says so, and some details of Quanzhou fit. But his China chapter is vague, and some historians think it is borrowed from merchants' tales."},
      {c:"He travelled alone.", lab:"myth", t:"He left Tangier alone, but almost always travelled with caravans, servants, slaves and companions, often with a large household."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Ibn Battuta, Rihla, edited and translated into French by C. Defrémery and B. R. Sanguinetti, Voyages d'Ibn Batoutah (1853 to 1858), 4 volumes, public domain"},
      {n:"The Travels of Ibn Batuta, translated by Samuel Lee (1829), public domain"},
      {n:"Ibn Battuta, Travels in Asia and Africa 1325 to 1354, selections translated by H. A. R. Gibb (1929), Fordham Medieval Sourcebook (free to read)", u:"https://sourcebooks.web.fordham.edu/source/batuta.asp"},
      {n:"Further reading: Ross E. Dunn, The Adventures of Ibn Battuta (1986)"},
      {n:"Further reading: Tim Mackintosh-Smith, Travels with a Tangerine (2001)"}
    ]}
  ]
},

"mozart": {
  hero: "",
  kw: ["Wolfgang","Amadeus","Salzburg","Leopold","Nannerl","Vienna","Constanze","Don Giovanni","The Marriage of Figaro","Figaro","The Magic Flute","Requiem","Così fan tutte","Köchel","Salieri@myths","Haydn","Colloredo","Mozart effect@myths","Prague"],
  lede: "A child star who toured Europe's courts at six, wrote more than 600 works, broke with his employer to go freelance in Vienna, and died at 35 leaving his Requiem unfinished.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Wolfgang Amadeus Mozart was born in Salzburg in 1756, the son of Leopold Mozart, a court violinist and composer. He was performing for emperors at six and writing symphonies at eight.",
      "After years in the service of Salzburg's prince-archbishop, he moved to Vienna in 1781 to work as a freelance pianist, teacher and composer. There he wrote his greatest operas, The Marriage of Figaro, Don Giovanni, Così fan tutte and The Magic Flute, along with piano concertos, symphonies and chamber music.",
      "He died in Vienna on 5 December 1791, aged 35, probably of an illness with fever and swelling. He left more than 600 works, catalogued by Ludwig von Köchel in 1862, which is why his pieces carry 'K.' numbers."
    ]},
    {k:"early", h:"Early life", ps:[
      "He was born on 27 January 1756 and baptised Joannes Chrysostomus Wolfgangus Theophilus. He later used the Latin form of Theophilus, Amadeus, now and then; he usually signed 'Wolfgang Amadè'.",
      "His sister Maria Anna, called Nannerl, four and a half years older, was also a brilliant keyboard player. Leopold taught them both and published a famous violin method the year Wolfgang was born.",
      {t:"From 1762 the family toured: Munich, Vienna, then a three-and-a-half-year grand tour to Paris, London and the Netherlands. In Vienna, the six-year-old jumped onto Empress Maria Theresa's lap and kissed her.", lab:"likely", why:"The tours are fully documented in Leopold's letters. The lap story is in a letter from Leopold."},
      "In London, in 1764 and 1765, he met Johann Christian Bach, Johann Sebastian's youngest son, who played with him on his knee, and wrote his first symphonies.",
      "In Italy, 1769 to 1773, he was knighted by the Pope and wrote operas for Milan."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Salzburg and frustration, 1773 to 1781. He worked for the new prince-archbishop, Hieronymus Colloredo, who paid him little and allowed him few trips. On a job-hunting tour to Mannheim and Paris in 1777 to 1779, his mother, who travelled with him, died in Paris.",
      {t:"The kick, 1781. Called to Vienna with the archbishop's household, he quarrelled with Colloredo and resigned. The archbishop's steward, Count Arco, showed him out with a kick in the backside.", lab:"verified", why:"Mozart describes it himself in a letter to his father of 9 June 1781."},
      "Marriage, 1782. He married Constanze Weber, against his father's wishes. They had six children; only two sons survived infancy.",
      "Success, 1782 to 1786. His German opera The Abduction from the Seraglio was a hit in 1782. He gave subscription concerts, playing his own piano concertos, and earned well. Joseph Haydn told Leopold in 1785 that his son was the greatest composer he knew.",
      "Figaro and Don Giovanni, 1786 to 1787. With the librettist Lorenzo Da Ponte he wrote The Marriage of Figaro (1786), based on a banned French play, and Don Giovanni (1787), premiered in Prague, where audiences adored him.",
      "Harder years, 1788 to 1790. War with Turkey hit Vienna's musical life. He wrote begging letters to his friend Michael Puchberg, but also his last three symphonies, in about six weeks in summer 1788.",
      "The last year, 1791. He wrote The Magic Flute for a popular theatre, La clemenza di Tito for a coronation in Prague, a clarinet concerto, and began a Requiem commissioned anonymously by Count Walsegg. He fell ill in November and died early on 5 December."
    ]},
    {k:"works", h:"The work", ps:[
      "Opera: The Marriage of Figaro, Don Giovanni and Così fan tutte, all with Da Ponte, and The Magic Flute, a magical comedy in German. They are among the most performed operas in the world.",
      "Piano concertos: 27, many written to perform himself in Vienna, which shaped the form for Beethoven and after.",
      "Symphonies: about 41 numbered, ending with No. 40 in G minor and No. 41, 'Jupiter', in 1788.",
      "Chamber music, sonatas, masses and the Requiem, which was completed after his death by his pupil Franz Xaver Süssmayr, at Constanze's request.",
      {t:"He wrote fast. His own catalogue, begun in 1784, lists pieces in the order he finished them.", lab:"verified", why:"His handwritten thematic catalogue survives in the British Library."}
    ]},
    {k:"people", h:"His people", ps:[
      "Leopold Mozart (1719 to 1787), his father, teacher, manager and fierce critic, whose letters to and from Wolfgang are the main record of his life.",
      "Nannerl Mozart (1751 to 1829), his sister, a prodigy herself, whose career was cut short because she was a woman; she married, moved to nearby St Gilgen, and returned to Salzburg as a widow.",
      "Constanze Mozart (1762 to 1842), his wife, who after his death protected his manuscripts, sold them carefully, and married a Danish diplomat who wrote an early major biography of him.",
      "Joseph Haydn (1732 to 1809), friend and mentor, to whom Mozart dedicated six string quartets."
    ]},
    {k:"world", h:"The world around him", ps:[
      "He lived in the Age of Enlightenment. Emperor Joseph II, an Enlightenment reformer, allowed Figaro to be staged even though the play mocked aristocrats.",
      "The American Declaration of Independence came in 1776, when he was 20. The French Revolution began in 1789, two years before his death.",
      "Beethoven, almost 15 years younger, came to Vienna from Bonn in 1787 hoping to study with him, but had to go home after a few weeks when his mother fell ill."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "He wrote in every form of his time and excelled in all, which few composers have done before or since.",
      "His music is the backbone of the classical repertoire, from student piano pieces to the opera house. Salzburg, which he was glad to leave, now celebrates him with a festival every summer.",
      "Peter Shaffer's play Amadeus (1979) and Miloš Forman's 1984 film made him a pop-culture figure, and also spread several myths about him."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"Salieri poisoned him.", lab:"myth", t:"Rumours of poison began soon after his death and fixed on Salieri in the 1820s, and Pushkin turned them into a short play in 1830, which inspired Amadeus. Salieri denied it, there is no evidence, and the two men worked together; Salieri even attended The Magic Flute with Mozart, who was pleased with his praise."},
      {c:"He was buried in a pauper's grave.", lab:"myth", t:"He had a common grave, which was the normal, inexpensive burial for ordinary Viennese under Joseph II's rules, not a pauper's. The exact spot is unknown."},
      {c:"He died penniless.", lab:"disputed", t:"He earned well in good years and was in debt in the late 1780s, but his income was rising again in 1791. He spent freely, so he was short of money, not destitute."},
      {c:"Playing Mozart makes babies smarter.", lab:"myth", t:"The 'Mozart effect' came from a 1993 study showing a small, short-lived improvement in one spatial task in college students. It was never about babies, and later studies failed to show a lasting effect."},
      {c:"He wrote music perfectly without corrections.", lab:"myth", t:"Some of his manuscripts are very clean, but sketches and drafts with corrections survive, especially for complex works."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"The Letters of Wolfgang Amadeus Mozart (1769 to 1791), translated by Lady Wallace (1866), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/5307"},
      {n:"Otto Jahn, Life of Mozart, translated by Pauline Townsend (1882), public domain"},
      {n:"Neue Mozart-Ausgabe (Digital Mozart Edition), Mozarteum Foundation Salzburg (free to view)", u:"https://dme.mozarteum.at"},
      {n:"Further reading: Maynard Solomon, Mozart: A Life (1995)"},
      {n:"Further reading: Jan Swafford, Mozart: The Reign of Love (2020)"}
    ]}
  ]
},

"darwin": {
  hero: "",
  kw: ["Beagle","Galápagos","Galapagos","finches@myths","natural selection","evolution","On the Origin of Species","Origin of Species","Descent of Man","Down House","Emma","Wallace","Huxley","Wilberforce","survival of the fittest@myths","tortoises","barnacles","earthworms"],
  lede: "A young man who dropped medical school, sailed round the world for five years, then spent twenty years quietly gathering evidence before publishing the idea that all living things share common ancestors, shaped by natural selection.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Charles Darwin was born in Shrewsbury, England, in 1809 into a wealthy family of doctors and pottery manufacturers. From 1831 to 1836 he sailed around the world as a naturalist on HMS Beagle.",
      "Back home, he worked out the theory of evolution by natural selection: living things vary, more are born than survive, and those with useful variations are more likely to survive and pass them on. Over vast time, this creates new species.",
      "He published On the Origin of Species in 1859, after Alfred Russel Wallace reached the same idea independently. The book transformed biology. He died in 1882 and was buried in Westminster Abbey."
    ]},
    {k:"early", h:"Early life", ps:[
      "He was born on 12 February 1809, the same day as Abraham Lincoln. His grandfathers were the doctor and poet Erasmus Darwin, who had speculated about evolution, and the potter Josiah Wedgwood.",
      "His mother died when he was eight. At school he collected beetles, shells and minerals and was considered ordinary.",
      {t:"At 16 he went to Edinburgh to study medicine, but could not bear surgery without anaesthetic. His father then sent him to Cambridge to become a clergyman. There the botanist John Stevens Henslow became his mentor.", lab:"verified", why:"Darwin describes all this in his Autobiography, written for his family in 1876."}
    ]},
    {k:"turns", h:"Turning points", ps:[
      "The Beagle, 1831 to 1836. Henslow recommended him as a gentleman companion and naturalist for Captain Robert FitzRoy on a survey voyage. He was 22. He was often seasick, but spent most of the five years ashore in South America, collecting fossils, rocks, plants and animals.",
      "The Galápagos, 1835. He spent five weeks on these Pacific islands. He noticed that the mockingbirds differed from island to island, and the vice-governor told him he could tell which island a tortoise came from by its shell.",
      "The idea, 1837 to 1838. Back in England, experts told him his Galápagos birds were distinct species. In July 1837 he began a notebook on 'transmutation' and drew a branching tree with the words 'I think'. In 1838, reading Thomas Malthus on population, he saw how competition could drive natural selection.",
      "Twenty quiet years, 1839 to 1858. He married his cousin Emma Wedgwood in 1839, moved to Down House in Kent, and suffered long bouts of illness. He studied barnacles for eight years, bred pigeons and wrote to correspondents worldwide, building his case. His beloved daughter Annie died in 1851, aged ten, which deepened his loss of faith.",
      "Wallace, 1858. Alfred Russel Wallace, collecting in the Malay Archipelago, sent Darwin an essay with the same theory. Friends arranged for both men's work to be read together at the Linnean Society on 1 July 1858.",
      "On the Origin of Species, 1859. Published on 24 November, its first printing of 1,250 copies was taken up by booksellers on the first day. It went through six editions in his lifetime.",
      "Debate, 1860. At a meeting in Oxford, Bishop Samuel Wilberforce mocked the theory and Thomas Henry Huxley defended it. Darwin was away, ill, at a water-cure clinic.",
      "Humans, 1871. In The Descent of Man he argued that humans too had evolved, probably in Africa, and explained differences between the sexes by sexual selection."
    ]},
    {k:"works", h:"The work", ps:[
      "The Voyage of the Beagle (1839), his journal of the voyage, was a bestseller in its own right.",
      "On the Origin of Species (1859): the case for common descent and natural selection, built from thousands of observations, including on domestic animals, fossils and geography.",
      "The Descent of Man (1871) and The Expression of the Emotions in Man and Animals (1872), one of the first books with photographs.",
      "Books on orchids, climbing plants, carnivorous plants and, his last, earthworms (1881), which showed how worms slowly build soil. It sold better at first than the Origin."
    ]},
    {k:"people", h:"His people", ps:[
      "Emma Darwin (1808 to 1896), his wife, a devout Christian who worried about his loss of faith but supported his work and nursed him. They had ten children.",
      "Alfred Russel Wallace (1823 to 1913), co-discoverer of natural selection, who stayed generous to Darwin all his life and called his own book Darwinism.",
      "Thomas Henry Huxley (1825 to 1895), 'Darwin's bulldog', who fought his public battles.",
      "Joseph Dalton Hooker (1817 to 1911), botanist and his closest scientific confidant, one of the first people he told about his theory, in 1844."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Britain was at the height of its empire and industrial power. The Beagle's job was to chart coastlines for the Royal Navy and for trade.",
      "Geology had just shown the Earth was very old; Charles Lyell's Principles of Geology, which Darwin read on the Beagle, was crucial to his thinking.",
      "Gregor Mendel published his pea experiments on heredity in 1866. Darwin never knew of them, and the link between the two was made only in the 20th century."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "Evolution by natural selection, combined with genetics, is the foundation of modern biology. 'Nothing in biology makes sense except in the light of evolution,' the geneticist Theodosius Dobzhansky wrote in 1973.",
      "His ideas were misused by others to justify racism and 'social Darwinism', which Darwin did not invent, though some of his own views on race reflected the prejudices of his time.",
      "Down House is now a museum, and his notebooks, letters and collections are digitised and free to read online."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"Darwin's finches made him think of evolution on the spot.", lab:"myth", t:"He did not label his finches by island and did not realise their importance until the ornithologist John Gould studied them in London in 1837. The mockingbirds and tortoises struck him more at the time."},
      {c:"He said 'survival of the fittest'.", lab:"likely", t:"The phrase was coined by Herbert Spencer in 1864. Darwin adopted it in the fifth edition of the Origin (1869) as another name for natural selection. 'Fittest' means best suited to the environment, not strongest."},
      {c:"He said humans descended from monkeys.", lab:"myth", t:"He argued that humans and apes share a common ancestor, not that humans came from living monkeys."},
      {c:"He renounced evolution on his deathbed.", lab:"myth", t:"The story was spread by an evangelist, Lady Hope, in 1915. His children, who were with him, said it never happened."},
      {c:"He came up with evolution.", lab:"myth", t:"The idea of evolution was older, including his grandfather Erasmus and the French naturalist Lamarck. Darwin's contribution was the mechanism, natural selection, and the mass of evidence."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Charles Darwin, On the Origin of Species (1859), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/1228"},
      {n:"Charles Darwin, The Voyage of the Beagle (Journal of Researches), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/3704"},
      {n:"The Autobiography of Charles Darwin, edited by Francis Darwin (1887), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/2010"},
      {n:"Darwin Correspondence Project, University of Cambridge (free to read)", u:"https://www.darwinproject.ac.uk"},
      {n:"Further reading: Janet Browne, Charles Darwin: Voyaging (1995) and The Power of Place (2002)"}
    ]}
  ]
},

"lincoln": {
  hero: "",
  kw: ["Abe","Honest Abe","log cabin","Illinois","Springfield","Mary Todd","Douglas","debates","Republican","Civil War","Emancipation Proclamation","Gettysburg Address","Gettysburg","13th Amendment","Thirteenth Amendment","Ford's Theatre","John Wilkes Booth","assassination","Grant","Frederick Douglass@people"],
  lede: "A frontier boy with less than a year of schooling who taught himself law, rose to the presidency as the country broke apart, led the Union through civil war, moved to end slavery, and was shot five days after the war was won.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Abraham Lincoln was born in a log cabin in Kentucky in 1809 and grew up on frontier farms in Indiana. He became a lawyer and politician in Illinois.",
      "He was elected the 16th President of the United States in 1860 on a platform of stopping slavery from spreading. Eleven Southern states left the Union and the Civil War began in April 1861.",
      "He issued the Emancipation Proclamation in 1863, gave the Gettysburg Address, won re-election in 1864, and pushed the 13th Amendment abolishing slavery through Congress. He was assassinated on 14 April 1865 and died the next morning."
    ]},
    {k:"early", h:"Early life", ps:[
      "He was born on 12 February 1809 near Hodgenville, Kentucky, to Thomas and Nancy Lincoln, poor farmers. The family moved to Indiana when he was seven.",
      "His mother died when he was nine. His father remarried, and his stepmother, Sarah Bush Johnston, encouraged his reading.",
      {t:"He had, by his own estimate, less than a year of formal schooling in total. He read whatever he could borrow: the Bible, Aesop's Fables, Pilgrim's Progress, a life of George Washington.", lab:"verified", why:"Lincoln wrote this in a short autobiography for a campaign biography in 1860."},
      "In 1831 he settled in New Salem, Illinois, working as a storekeeper, postmaster and surveyor. He served briefly as a militia captain in the Black Hawk War of 1832 and saw no combat."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Law and politics, 1834 to 1849. He was elected to the Illinois legislature in 1834, taught himself law, and moved to Springfield in 1837. He married Mary Todd in 1842. He served one term in Congress, from 1847 to 1849, where he opposed the Mexican War.",
      "Back in the fight, 1854. The Kansas-Nebraska Act allowed slavery into new territories if settlers voted for it. Outraged, Lincoln returned to politics and joined the new Republican Party.",
      {t:"The Lincoln-Douglas debates, 1858. Running for the Senate against Stephen Douglas, he held seven debates across Illinois. He lost the election but became nationally known. He had said that 'a house divided against itself cannot stand'.", lab:"verified", why:"His 'House Divided' speech, 16 June 1858, quoting the Gospels (Mark 3:25)."},
      "President, 1860. With the Democrats split, he won the presidency with about 40 per cent of the popular vote and almost none in the South. Before he took office, seven Southern states seceded and formed the Confederacy.",
      "War, April 1861. Confederate guns fired on Fort Sumter in Charleston harbour. Lincoln called for troops. Four more states seceded.",
      "Emancipation, 1862 to 1863. After the Union victory at Antietam, he issued a preliminary proclamation; on 1 January 1863 the Emancipation Proclamation declared enslaved people in the rebelling states free and allowed Black men to join the Union army. About 180,000 did.",
      {t:"Gettysburg, November 1863. At the dedication of a cemetery for soldiers killed in the battle of Gettysburg he spoke for about two minutes, about a nation 'conceived in Liberty' and a 'new birth of freedom', ending with 'government of the people, by the people, for the people'.", lab:"verified", why:"Five manuscript copies survive in his hand, with small differences between them."},
      "Re-election and the 13th Amendment, 1864 to 1865. With General Ulysses S. Grant's victories, he won re-election in November 1864. In January 1865 the House passed the 13th Amendment abolishing slavery, after intense lobbying by his administration.",
      "Victory and death, April 1865. General Lee surrendered on 9 April. On 14 April, Good Friday, at Ford's Theatre in Washington, the actor and Confederate sympathiser John Wilkes Booth shot him in the back of the head. He died at 7.22 the next morning, aged 56."
    ]},
    {k:"works", h:"What he did", ps:[
      "He held the Union together through a war that killed over 600,000 soldiers, roughly as many as in all other American wars up to Vietnam combined.",
      "He moved from opposing the spread of slavery to ending it, through the Emancipation Proclamation and the 13th Amendment, ratified in December 1865 after his death.",
      {t:"He suspended habeas corpus, the right to challenge imprisonment in court, in parts of the country, and thousands of civilians were arrested without trial during the war.", lab:"verified", why:"The suspension and the arrests are well documented, including the federal court case Ex parte Merryman (1861), in which Chief Justice Taney, sitting as a circuit judge, ruled against him and Lincoln ignored the ruling."},
      "His speeches, especially the Gettysburg Address and the Second Inaugural ('With malice toward none, with charity for all'), are among the most admired in the English language."
    ]},
    {k:"people", h:"His people", ps:[
      "Mary Todd Lincoln (1818 to 1882), his wife, from a slaveholding Kentucky family. Three of their four sons died before adulthood; Willie died in the White House in 1862.",
      {t:"Frederick Douglass (1818 to 1895), the abolitionist, met him three times at the White House and pushed him to move faster on emancipation and equal pay for Black soldiers. Douglass later called him 'preeminently the white man's President' but also praised his growth.", lab:"verified", why:"Douglass's 'Oration in Memory of Abraham Lincoln' (1876)."},
      "Ulysses S. Grant (1822 to 1885), the general whose persistence won the war.",
      "William H. Seward (1801 to 1872), his rival for the nomination who became his Secretary of State; he was stabbed in a separate attack on the night Lincoln was shot and survived."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Charles Darwin was born on exactly the same day, 12 February 1809. Darwin's Origin of Species came out the year before Lincoln was elected.",
      "Russia freed its serfs in 1861, the year the Civil War began. Britain had abolished slavery in its empire in 1834.",
      "Victoria was Queen of Britain, and Britain stayed neutral, partly because the Emancipation Proclamation made it hard to support a slave state."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "He is often ranked by historians as the greatest American president. The Lincoln Memorial in Washington, dedicated in 1922, was where Martin Luther King Jr. gave his 'I Have a Dream' speech in 1963.",
      "His views on race changed over time. In 1858 he said he did not support social and political equality for Black people. By 1865 he publicly supported the vote for some Black men, which is the speech that made Booth decide to kill him.",
      "His face is on the US penny and the five-dollar bill, and carved into Mount Rushmore."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"The Emancipation Proclamation freed all the slaves.", lab:"myth", t:"It applied only in states in rebellion, not in loyal slave states like Kentucky and Maryland. It freed people as Union armies advanced. Slavery was abolished everywhere by the 13th Amendment in 1865."},
      {c:"He wrote the Gettysburg Address on the back of an envelope on the train.", lab:"myth", t:"He drafted it in Washington and revised it in Gettysburg. The surviving copies are on ordinary paper."},
      {c:"He fought the war to end slavery from the start.", lab:"myth", t:"His first aim was to save the Union. In 1862 he wrote to the editor Horace Greeley that if he could save the Union without freeing any slave he would do it. But he was already drafting the Emancipation Proclamation."},
      {c:"He was born in a log cabin.", lab:"verified", t:"He was. The cabin displayed at his birthplace memorial in Kentucky, though, is a symbolic one; its logs are not from the original."},
      {c:"'You can fool all the people some of the time...' is his line.", lab:"disputed", t:"It is widely credited to him, but it does not appear in his speeches or writings and was first attributed to him decades after his death."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Speeches and Letters of Abraham Lincoln, 1832 to 1865, edited by Merwin Roe (1907), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/14721"},
      {n:"Collected Works of Abraham Lincoln, edited by Roy P. Basler, University of Michigan digital library (free to read)", u:"https://quod.lib.umich.edu/l/lincoln/"},
      {n:"Frederick Douglass, Oration in Memory of Abraham Lincoln (1876), public domain"},
      {n:"Further reading: David Herbert Donald, Lincoln (1995)"},
      {n:"Further reading: Eric Foner, The Fiery Trial: Abraham Lincoln and American Slavery (2010)"}
    ]}
  ]
},

"gandhi": {
  hero: "",
  kw: ["Mohandas","Mahatma","Bapu","satyagraha","nonviolence","ahimsa","South Africa","Pietermaritzburg","Salt March","Dandi","Quit India","spinning wheel","khadi","Champaran","Kasturba","Nehru","Jinnah","Partition","Godse","assassination","fasts"],
  lede: "A shy lawyer thrown off a train in South Africa who turned peaceful mass disobedience into a weapon, led India's struggle against British rule, and was shot by a Hindu nationalist five months after independence.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Mohandas Karamchand Gandhi was born in 1869 in Porbandar, in western India. He studied law in London and spent 21 years in South Africa, where he developed satyagraha, 'holding firmly to truth', a method of nonviolent resistance.",
      "Back in India from 1915, he led mass campaigns against British rule: non-cooperation, the Salt March of 1930 and the Quit India movement of 1942. He lived simply, spun his own cloth and fasted for causes. People called him Mahatma, 'great soul'.",
      "India became independent on 15 August 1947 but was partitioned with terrible violence. On 30 January 1948 Gandhi was shot dead in Delhi by Nathuram Godse, a Hindu nationalist."
    ]},
    {k:"early", h:"Early life", ps:[
      "He was born on 2 October 1869. His father was chief minister of the small princely state of Porbandar. His mother was deeply religious and fasted often, which influenced him.",
      "At 13 he was married to Kasturbai Makhanji Kapadia, who was 14, in an arranged marriage. They had four sons.",
      {t:"At 18 he sailed to London to study law, promising his mother to avoid meat, alcohol and women. He joined the London Vegetarian Society and first read the Bhagavad Gita, in English.", lab:"verified", why:"Described in his autobiography, The Story of My Experiments with Truth (1927 to 1929)."},
      "Back in India in 1891, he failed as a lawyer: in his first case he was too nervous to speak."
    ]},
    {k:"turns", h:"Turning points", ps:[
      {t:"The train, 1893. Working for an Indian firm in South Africa, he was thrown off a train at Pietermaritzburg for refusing to leave a first-class carriage reserved for whites. He spent a cold night in the station and decided to fight the injustice.", lab:"verified", why:"His own account in the autobiography. He told this as the turning point of his life."},
      "South Africa, 1893 to 1914. He organised Indians against discriminatory laws, founded a newspaper and two communal farms, and in 1906 led the first mass satyagraha against a law requiring Indians to register and carry passes. He was jailed several times.",
      "Return to India, 1915. He toured the country by third-class railway, then led local campaigns for indigo farmers in Champaran (1917) and mill workers in Ahmedabad (1918).",
      "Non-cooperation, 1920 to 1922. After troops under a British general shot dead hundreds of unarmed people at Amritsar in 1919, he called for Indians to boycott British goods, courts and schools. When a crowd killed 22 policemen at Chauri Chaura in 1922, he called the movement off. He was then jailed for six years and served two.",
      "The Salt March, 1930. British law taxed salt and forbade Indians to make it. He walked about 390 kilometres from his ashram near Ahmedabad to the sea at Dandi with 78 followers, and on 6 April picked up a lump of natural salt. Tens of thousands followed and were arrested, including him.",
      "London, 1931. He attended a Round Table Conference in London, dressed in his loincloth and shawl, and visited cotton workers in Lancashire who had lost jobs because of the Indian boycott. They cheered him.",
      "Quit India, 1942. During the Second World War he demanded that Britain leave India immediately. He and the whole Congress leadership were arrested. Kasturba died in detention in 1944.",
      "Independence and partition, 1947. Britain agreed to leave, but India was divided into India and Pakistan. Gandhi opposed partition. As up to a million people died in religious violence, he walked through riot areas and fasted to stop killings in Calcutta and Delhi.",
      "Death, 30 January 1948. On his way to evening prayers at Birla House in Delhi, he was shot three times at close range by Nathuram Godse, who blamed him for being too soft on Muslims and Pakistan. He was 78."
    ]},
    {k:"works", h:"His ideas", ps:[
      "Satyagraha: resisting injustice openly and without violence, accepting punishment, and trying to convert the opponent rather than defeat them.",
      "Ahimsa, non-harm, drawn from Hindu and Jain teaching, and influenced by Tolstoy's writings, with whom he corresponded, and by the Sermon on the Mount.",
      "Swadeshi and swaraj: self-reliance and self-rule. He spun cotton daily on a charkha, a spinning wheel, and urged Indians to wear khadi, homespun cloth, instead of British imports. The wheel was on the flag of the independence movement.",
      "He campaigned against untouchability, calling Dalits 'Harijans', 'children of God', a name many Dalits later rejected as patronising."
    ]},
    {k:"people", h:"His people", ps:[
      "Kasturba Gandhi (1869 to 1944), his wife, who joined his campaigns and went to jail herself.",
      "Jawaharlal Nehru (1889 to 1964), his chosen political heir and India's first Prime Minister.",
      "Muhammad Ali Jinnah (1876 to 1948), once a Congress ally, who led the Muslim League and founded Pakistan.",
      {t:"B. R. Ambedkar (1891 to 1956), leader of the Dalits and chief architect of India's constitution, who clashed with him sharply over how to end caste oppression.", lab:"verified", why:"Their disputes, including over separate electorates in 1932, are well documented in both men's writings."}
    ]},
    {k:"world", h:"The world around him", ps:[
      "He was born four years after the American Civil War ended and died three years after the Second World War. Tolstoy, whom he admired, died in 1910.",
      "The British Raj ruled about 300 million people with a few thousand British officials and an army largely of Indian soldiers.",
      "Charlie Chaplin met him in London in 1931 and asked about his objection to machines."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "His methods inspired Martin Luther King Jr. and the American civil rights movement, Nelson Mandela's early campaigns, and peaceful protests around the world.",
      "His birthday, 2 October, is a national holiday in India and the UN's International Day of Non-Violence.",
      {t:"He was nominated for the Nobel Peace Prize five times but never received it. Later members of the Nobel committee have publicly regretted it.", lab:"verified", why:"Nobelprize.org, 'Mahatma Gandhi, the Missing Laureate' (Øyvind Tønnesson, 1999); the committee's secretary Geir Lundestad called it the greatest omission in the prize's history in 2006."},
      "He is also criticised: for his early views on Black Africans in South Africa, his treatment of his wife and family, his sexual 'experiments' in old age, and his approach to caste. Historians weigh these alongside his achievements."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He said 'Be the change you wish to see in the world.'", lab:"myth", t:"That phrase does not appear in his writings. He wrote something related in 1913: that if we could change ourselves, the tendencies in the world would also change. The bumper-sticker version is a later paraphrase."},
      {c:"He alone won India's independence.", lab:"myth", t:"Many movements and leaders, including revolutionaries, the Indian National Army, naval mutinies in 1946, and Britain's exhaustion after the Second World War, all played a part."},
      {c:"'Mahatma' was his name.", lab:"myth", t:"It is an honorific meaning 'great soul', popularised around 1915; the poet Rabindranath Tagore is often credited, though it was used earlier. He said he disliked it."},
      {c:"His last words were 'Hé Ram' ('Oh God').", lab:"disputed", t:"This is the traditional account and is carved on his memorial at Raj Ghat. Some people who were there said he said nothing, or could not hear. Historians remain divided."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"M. K. Gandhi, An Autobiography, or The Story of My Experiments with Truth, translated by Mahadev Desai (1927 to 1929), Standard Ebooks (public domain in the United States)", u:"https://standardebooks.org/ebooks/mahatma-gandhi/the-story-of-my-experiments-with-truth/mahadev-desai"},
      {n:"M. K. Gandhi, Indian Home Rule (Hind Swaraj) (1909), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/40461"},
      {n:"The Collected Works of Mahatma Gandhi, Publications Division, Government of India, hosted on the Gandhi Heritage Portal of the Sabarmati Ashram Trust (free to read online)", u:"https://www.gandhiheritageportal.org"},
      {n:"Further reading: Ramachandra Guha, Gandhi Before India (2013) and Gandhi: The Years That Changed the World (2018)"},
      {n:"Further reading: Judith M. Brown, Gandhi: Prisoner of Hope (1989)"}
    ]}
  ]
}
});
