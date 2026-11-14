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
},

"galileo": {
  hero: "",
  kw: ["telescope","Jupiter's moons","Medicean stars","Sidereal Messenger","Sidereus Nuncius","Venus phases","sunspots","Dialogue","Two Chief World Systems","Inquisition","Copernicus","heliocentrism","Pisa","Leaning Tower@myths","pendulum","Two New Sciences","Urban VIII","Eppur si muove@myths","Maria Celeste","Arcetri"],
  lede: "A professor who turned a Dutch toy into a scientific instrument, saw mountains on the Moon and moons around Jupiter, argued that the Earth moves, and was forced by the Inquisition to say it does not.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Galileo Galilei was born in Pisa in 1564 and taught mathematics at the universities of Pisa and Padua. He studied falling bodies, pendulums and motion through experiments and mathematics.",
      "In 1609 he built a telescope and turned it on the sky. What he saw, published in 1610, made him famous across Europe and convinced him that Copernicus was right: the Earth goes round the Sun.",
      "In 1633 the Roman Inquisition found him 'vehemently suspect of heresy' for his book defending that view. He was made to recant and spent his last eight years under house arrest near Florence, where he wrote his greatest work on motion. He died in 1642."
    ]},
    {k:"early", h:"Early life", ps:[
      "He was born on 15 February 1564, the eldest child of Vincenzo Galilei, a lute player and music theorist who experimented with strings and tuning.",
      "He began studying medicine at Pisa, switched to mathematics, and left without a degree. In 1589 he became a mathematics lecturer at Pisa, and in 1592 moved to Padua, in the Republic of Venice, where he spent what he called the best 18 years of his life.",
      "He never married, but had three children with Marina Gamba in Padua. His daughters became nuns. The elder, Virginia, who took the name Suor Maria Celeste, wrote him loving letters that survive."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "The telescope, 1609. Hearing of a Dutch spyglass, he worked out how to make one and improved it to magnify about 8 times, and later 20. He presented one to the Venetian Senate, which doubled his salary.",
      {t:"The Sidereal Messenger, March 1610. In a short book he reported mountains and craters on the Moon, countless stars invisible to the naked eye in the Milky Way, and four moons circling Jupiter, which he named the Medicean Stars after the Grand Duke of Tuscany.", lab:"verified", why:"Sidereus Nuncius (1610), available in English translation on Project Gutenberg."},
      "Florence, 1610. The Grand Duke made him court mathematician and philosopher. That year he also saw the phases of Venus, which showed that Venus orbits the Sun, and soon after he studied sunspots.",
      "First warning, 1616. The Church's Congregation of the Index declared the idea that the Earth moves 'false and contrary to Scripture' and suspended Copernicus's book until corrected. Cardinal Bellarmine told Galileo not to hold or defend it.",
      "The Dialogue, 1632. Encouraged when his friend Maffeo Barberini became Pope Urban VIII, he wrote the Dialogue Concerning the Two Chief World Systems. In it a character named Simplicio, who defends the old view, repeats an argument the Pope had suggested. The Pope was furious.",
      "Trial, 1633. Aged 69, he was tried by the Inquisition in Rome. On 22 June he knelt and abjured, saying he 'abandoned the false opinion' that the Sun is the centre of the world. He was sentenced to imprisonment, changed to house arrest at his villa at Arcetri, near Florence.",
      "Last work, 1638. Going blind, he finished Two New Sciences, on the strength of materials and the laws of motion, which was smuggled out and printed in the Netherlands. He died on 8 January 1642."
    ]},
    {k:"works", h:"The work", ps:[
      "Falling bodies: he showed, by rolling balls down slopes, that falling objects accelerate evenly, and that the distance grows with the square of the time.",
      "Projectiles follow a parabola, he showed, combining steady sideways motion with accelerating fall.",
      "Pendulums: he noticed that a pendulum's swing takes about the same time whatever its width, an idea later used in pendulum clocks.",
      "Astronomy: Jupiter's moons, Venus's phases, sunspots and lunar mountains broke the old belief in a perfect, unchanging heaven centred on the Earth.",
      "Method: he argued in The Assayer (1623) that the book of the universe is written in the language of mathematics, and that experiment and measurement should settle questions about the physical world."
    ]},
    {k:"people", h:"His people", ps:[
      "Suor Maria Celeste (1600 to 1634), his daughter, whose 124 surviving letters to him show their close bond. She died soon after his trial.",
      "Pope Urban VIII (1568 to 1644), once his admirer, who felt betrayed by the Dialogue.",
      "Johannes Kepler (1571 to 1630), the German astronomer who supported his discoveries and worked out that planets move in ellipses, something Galileo never accepted.",
      "Vincenzo Viviani and Evangelista Torricelli, young assistants in his last years; Torricelli went on to invent the barometer."
    ]},
    {k:"world", h:"The world around him", ps:[
      "He was born the same year as Shakespeare and died the year Isaac Newton was born (by the old English calendar).",
      "The Catholic Counter-Reformation was answering Protestantism by tightening control of ideas. In 1600 the philosopher Giordano Bruno was burned in Rome for heresy.",
      "The Thirty Years' War was raging in Germany during his trial."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "He is often called the father of modern physics and of the scientific method, along with Newton, who built on his laws of motion.",
      "The Church removed the Dialogue from its list of banned books in 1835. In 1992 Pope John Paul II formally acknowledged that the Church had erred in condemning him.",
      "The four large moons of Jupiter are called the Galilean moons, and NASA's spacecraft to Jupiter in 1989 was named Galileo."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He dropped two balls from the Leaning Tower of Pisa.", lab:"disputed", t:"The story comes from his assistant Viviani, writing after his death. Galileo never mentions it himself. Some historians think it was a thought experiment; his real evidence came from balls rolling down slopes."},
      {c:"He muttered 'And yet it moves' after recanting.", lab:"myth", t:"The phrase 'Eppur si muove' first appears in print in 1757, more than a century later. A painting carrying the words, once dated to the 1640s, is now doubted. Saying it in front of the Inquisition would have been suicidal."},
      {c:"He invented the telescope.", lab:"myth", t:"Dutch spectacle-makers made the first ones in 1608. He greatly improved it and was the first to use it to make major discoveries in astronomy."},
      {c:"He was tortured and thrown into a dungeon.", lab:"myth", t:"He was threatened with torture, as procedure required, but not tortured. He was held in comfortable rooms during the trial and then under house arrest."},
      {c:"He was the first to say the Earth goes round the Sun.", lab:"myth", t:"Copernicus published that in 1543, and the Greek astronomer Aristarchus had proposed it around 270 BC. Galileo provided strong new evidence and championed it."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Galileo Galilei, The Sidereal Messenger (Sidereus Nuncius, 1610), translated by Edward Stafford Carlos (1880), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/46036"},
      {n:"Galileo Galilei, Dialogues Concerning Two New Sciences (1638), translated by Henry Crew and Alfonso de Salvio (1914), Internet Archive (public domain)", u:"https://archive.org/details/dialoguesconcern00gali_0"},
      {n:"The sentence and abjuration of 1633, in the trial documents, public domain"},
      {n:"Further reading: Dava Sobel, Galileo's Daughter (1999)"},
      {n:"Further reading: J. L. Heilbron, Galileo (2010)"}
    ]}
  ]
},

"newton": {
  hero: "",
  kw: ["Isaac Newton","gravity","apple@myths","Principia","laws of motion","calculus","Leibniz@people","Opticks","prism","reflecting telescope","Royal Mint","Royal Society","Woolsthorpe","Cambridge","plague","alchemy","Halley","Hooke","standing on the shoulders of giants@myths"],
  lede: "A farmer's son who, in two plague years at home, began calculus, the theory of colours and the idea of universal gravitation. His Principia explained the motions of the planets and the tides with one set of laws.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Isaac Newton was born on Christmas Day 1642 (by the old English calendar) at Woolsthorpe in Lincolnshire. He studied and then taught at Trinity College, Cambridge, for over 30 years.",
      "He discovered that white light is made of colours, built the first practical reflecting telescope, invented calculus (as did Leibniz, separately), and in his Principia (1687) set out the three laws of motion and the law of universal gravitation.",
      "Later he ran the Royal Mint in London, hunted down counterfeiters, and was President of the Royal Society. He also spent decades on alchemy and Bible prophecy. He died in 1727 and was buried in Westminster Abbey."
    ]},
    {k:"early", h:"Early life", ps:[
      "His father, a farmer who could not sign his name, died three months before he was born. Born early, he was so small that his mother said he could have fitted into a quart pot.",
      "When he was three his mother remarried and left him with his grandmother. He resented it bitterly; in a list of his sins, written at 19, he confessed to 'threatening my father and mother Smith to burn them and the house over them'.",
      "At King's School in Grantham he built model windmills, water clocks and sundials. His mother took him out to run the farm, which he was hopeless at, and his schoolmaster persuaded her to send him to Cambridge in 1661."
    ]},
    {k:"turns", h:"Turning points", ps:[
      {t:"The plague years, 1665 to 1667. When plague closed Cambridge, he went home to Woolsthorpe. There, in his early twenties, he worked out the basics of calculus, experimented with prisms, and began thinking about gravity reaching to the Moon. He later called it 'the prime of my age for invention'.", lab:"likely", why:"His notebooks from those years survive. The way he later described them, as a single burst of genius, was partly shaped in old age during his quarrel with Leibniz."},
      "Lucasian professor, 1669. At 26 he became professor of mathematics at Cambridge. In 1668 he had built a reflecting telescope, using a mirror instead of lenses; it got him elected to the Royal Society in 1672.",
      "Light and colour, 1672. His paper showing that white light splits into a spectrum of colours, and that the colours do not change when split again, sparked bitter arguments with Robert Hooke.",
      "Halley's question, 1684. The astronomer Edmond Halley visited him to ask what path a planet would follow if pulled by a force falling off with the square of the distance. Newton said at once: an ellipse. He had worked it out but lost the paper. Halley urged him to write it up.",
      "Principia, 1687. Three years later came the Philosophiae Naturalis Principia Mathematica, 'Mathematical Principles of Natural Philosophy', paid for by Halley. It explained planetary orbits, the tides, the paths of comets and the motion of falling objects with the same laws.",
      "London and the Mint, 1696 to 1727. He became Warden, then Master, of the Royal Mint, oversaw the recoinage of England's money, and personally pursued counterfeiters, some of whom were hanged. He was President of the Royal Society from 1703 and was knighted in 1705."
    ]},
    {k:"works", h:"The work", ps:[
      "The three laws of motion: an object keeps moving at a steady speed unless a force acts; force equals mass times acceleration; every action has an equal and opposite reaction.",
      "Universal gravitation: every mass attracts every other with a force proportional to their masses and falling off with the square of the distance between them.",
      "Calculus, which he called fluxions, the mathematics of change, used today in every branch of science and engineering.",
      "Opticks (1704): experiments on light and colour, and questions about the nature of light that guided physics for a century.",
      {t:"He also wrote over a million words on alchemy and on the prophecies of Daniel and Revelation, and privately rejected the doctrine of the Trinity, which could have cost him his post.", lab:"verified", why:"His manuscripts, sold at auction in 1936, are now largely digitised by the Newton Project and Cambridge University Library."}
    ]},
    {k:"people", h:"His people", ps:[
      "Edmond Halley (1656 to 1742), who coaxed the Principia out of him and used his laws to predict the return of the comet named after him.",
      "Robert Hooke (1635 to 1703), brilliant rival who claimed credit for the inverse-square law. Newton struck references to him from the Principia.",
      {t:"Gottfried Wilhelm Leibniz (1646 to 1716), who invented calculus independently and published first, in 1684. The Royal Society, under Newton's presidency, issued a report in 1712 accusing Leibniz of plagiarism; Newton secretly wrote much of it.", lab:"verified", why:"Newton's drafts of the report survive. Historians now agree both men invented calculus independently."},
      "Catherine Barton, his niece, who kept house for him in London and was admired by Voltaire and Jonathan Swift."
    ]},
    {k:"world", h:"The world around him", ps:[
      "He was born during the English Civil War and lived through the Great Plague (1665), the Great Fire of London (1666) and the Glorious Revolution of 1688, when he briefly sat in Parliament.",
      "In China, the Kangxi Emperor, who reigned from 1661 to 1722, was learning Western mathematics from Jesuit teachers.",
      "Bach and Handel were born in 1685, two years before the Principia."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "Newtonian mechanics remained the foundation of physics for over 200 years and still works for almost every everyday purpose, from bridges to spaceflight. Einstein's relativity refined it at very high speeds and strong gravity.",
      {t:"The poet Alexander Pope wrote his epitaph: 'Nature and Nature's laws lay hid in night: God said, Let Newton be! and all was light.'", lab:"verified", why:"Pope's epitaph, written about 1730."},
      "The unit of force, the newton, is named after him."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"An apple fell on his head.", lab:"myth", t:"He did tell friends in old age that seeing an apple fall in the garden at Woolsthorpe set him thinking about gravity, as his friend William Stukeley recorded. Nobody says it hit him on the head."},
      {c:"'If I have seen further it is by standing on the shoulders of giants' was a humble tribute.", lab:"disputed", t:"He wrote it in a letter to Hooke of February 1676 (dated 1675 in the old calendar). The phrase was already old, from Bernard of Chartres in the 12th century. Some historians read it as a sly dig at Hooke, who was short; others think it was sincere."},
      {c:"He discovered gravity.", lab:"myth", t:"People always knew things fall. He discovered that the same force holds the Moon and planets in orbit, and gave its mathematical law."},
      {c:"He went mad from mercury poisoning.", lab:"disputed", t:"He had a breakdown in 1693, and tests on his hair in the 1970s found high mercury, from alchemy. Whether mercury caused the breakdown, or overwork and stress did, is debated."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Isaac Newton, Philosophiae Naturalis Principia Mathematica (Latin, 1687 and later editions), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/28233"},
      {n:"Isaac Newton, Opticks (1704, 4th edition 1730), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/33504"},
      {n:"The Newton Project, University of Oxford: his manuscripts transcribed (free to read)", u:"https://www.newtonproject.ox.ac.uk"},
      {n:"William Stukeley, Memoirs of Sir Isaac Newton's Life (1752), public domain"},
      {n:"Further reading: Richard S. Westfall, Never at Rest (1980)"},
      {n:"Further reading: James Gleick, Isaac Newton (2003)"}
    ]}
  ]
},

"einstein": {
  hero: "",
  kw: ["relativity","E=mc2","E = mc²","special relativity","general relativity","photoelectric effect","Nobel","patent office","Bern","miracle year","annus mirabilis","Mileva Marić","Princeton","Roosevelt letter@turns","atomic bomb@myths","eclipse 1919","quantum","failed maths@myths","brain"],
  lede: "A patent clerk who, in one year, explained light as particles, proved atoms exist and rewrote space and time. Ten years later his theory of gravity bent starlight, and he became the most famous scientist on Earth.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Albert Einstein was born in Ulm, Germany, in 1879 and grew up in Munich. Unable to find an academic post, he worked at the Swiss patent office in Bern.",
      "In 1905, his 'miracle year', he published four papers: on light quanta, on Brownian motion, on special relativity, and the one with E = mc². In 1915 he completed general relativity, a new theory of gravity as curved space-time. He won the 1921 Nobel Prize in Physics.",
      "A Jew and a pacifist, he left Germany when the Nazis came to power in 1933 and settled at Princeton in the United States. He warned President Roosevelt in 1939 that Germany might build an atomic bomb. He died in 1955."
    ]},
    {k:"early", h:"Early life", ps:[
      "He was born on 14 March 1879 into a non-observant Jewish family. His father and uncle ran an electrical firm.",
      {t:"At about five he was fascinated by a compass his father showed him: something invisible was moving the needle. At 12 he devoured a geometry book he called his 'holy little geometry book'.", lab:"verified", why:"Both are in his 'Autobiographical Notes' (1949)."},
      "He disliked the drill of German schools and left his Munich school at 15 without a diploma, joining his family in Italy. He finished school in Aarau, Switzerland, and studied physics at the Zurich Polytechnic, graduating in 1900.",
      "There he met Mileva Marić, the only woman in his class. They had a daughter, Lieserl, in 1902, before marrying; what happened to her is unknown. They married in 1903 and had two sons."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "The patent office, 1902 to 1909. As a 'technical expert, third class', he examined inventions and thought about physics in his spare time, discussing it with friends who called themselves the Olympia Academy.",
      "The miracle year, 1905. He proposed that light comes in packets (quanta), which explained the photoelectric effect; showed how the jiggling of pollen grains proves atoms exist; published special relativity, in which the speed of light is the same for everyone and time and space depend on how you move; and derived that mass and energy are equivalent, E = mc².",
      "Professor, 1909 to 1914. He held posts in Zurich and Prague, and in 1914 moved to Berlin. His marriage broke down; he later married his cousin Elsa.",
      "General relativity, 1915. After years of struggle he presented the field equations of general relativity in November 1915, describing gravity as the curving of space and time by mass and energy.",
      "The eclipse, 1919. British expeditions led by Arthur Eddington measured starlight bending around the Sun during a solar eclipse, as he predicted. The Times headline 'Revolution in Science' made him world-famous overnight.",
      {t:"The Nobel Prize, 1921 (awarded 1922). He won 'for his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect', not for relativity, which the committee still found too controversial.", lab:"verified", why:"The Nobel Foundation's official citation."},
      "Exile, 1933. When Hitler came to power he was in the United States. He never returned to Germany, renounced his membership of the Prussian Academy, and joined the Institute for Advanced Study in Princeton. Nazi students burned books including his.",
      {t:"The letter, 1939. A letter signed by Einstein, drafted with the physicist Leo Szilard, warned President Roosevelt that Germany might build a uranium bomb and urged American research. It helped lead to the Manhattan Project.", lab:"verified", why:"The letter, dated 2 August 1939, is held by the Franklin D. Roosevelt Presidential Library."},
      "Last years. He spent decades seeking a unified field theory, without success, campaigned for nuclear disarmament and civil rights, and declined an offer in 1952 to become President of Israel. He died in Princeton on 18 April 1955, aged 76."
    ]},
    {k:"works", h:"The work", ps:[
      "Special relativity (1905): moving clocks run slow, moving objects shrink in length, and nothing goes faster than light.",
      "E = mc²: a small amount of mass holds an enormous amount of energy. It explains how the Sun shines.",
      "General relativity (1915): gravity is the curvature of space-time. It predicted the bending of light, black holes, and gravitational waves, which were first detected in 2015.",
      "Quantum theory: his light quanta helped found it, though he never accepted its randomness, famously objecting that God 'does not play dice'."
    ]},
    {k:"people", h:"His people", ps:[
      {t:"Mileva Marić (1875 to 1948), his first wife and fellow student, a physicist. When they divorced in 1919 he promised her the money from any future Nobel Prize, and the money did go to her and their sons, though partly through investments.", lab:"verified", why:"The divorce agreement and later transfers are documented in the Collected Papers of Albert Einstein."},
      "Elsa Einstein (1876 to 1936), his cousin and second wife, who managed his fame.",
      "Michele Besso, his closest friend and sounding board at the patent office, the only person thanked in the 1905 relativity paper.",
      "Niels Bohr (1885 to 1962), his great friend and opponent in the decades-long debate over quantum mechanics."
    ]},
    {k:"world", h:"The world around him", ps:[
      "He was born the year Edison demonstrated his light bulb, and died the year the first nuclear power stations were being built.",
      "He lived through both world wars, the rise of Nazism and the start of the Cold War. Many of his relatives who stayed in Europe were murdered in the Holocaust.",
      "Marie Curie was a friend; they took a hiking holiday together in the Swiss Alps in 1913 with their children."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "Relativity underpins modern astronomy and cosmology, and GPS satellites must correct their clocks for both special and general relativity to work.",
      "Time magazine named him Person of the Century in 1999.",
      {t:"After his death the pathologist Thomas Harvey removed his brain without the family's prior permission and kept it for decades. Studies of it have found little that is clearly meaningful.", lab:"verified", why:"Harvey later received his son's approval. Several studies have been published since 1985; their findings are disputed."}
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He failed maths at school.", lab:"myth", t:"He excelled at maths and had mastered calculus by about 15. The myth may come from a Swiss grading scale where 6 was best, or from his failing the general part of the Polytechnic entrance exam at 16, though he did very well in maths and physics."},
      {c:"He helped build the atomic bomb.", lab:"myth", t:"He signed the 1939 letter but was not part of the Manhattan Project; he was refused a security clearance. He later said signing the letter was 'one great mistake' of his life."},
      {c:"He said 'Insanity is doing the same thing over and over and expecting different results.'", lab:"myth", t:"There is no evidence he said it. It first appears in the 1980s, in recovery-group literature."},
      {c:"Mileva Marić secretly did the work for relativity.", lab:"disputed", t:"Their early letters show they discussed physics together, and some writers argue she contributed. Most historians find no evidence she co-authored the 1905 papers."},
      {c:"He was a poor student who could not speak until late.", lab:"disputed", t:"He did start talking late, as his family recalled. He was not a poor student, just impatient with rote learning."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Albert Einstein, Relativity: The Special and General Theory, translated by Robert W. Lawson (1920), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/5001"},
      {n:"The Collected Papers of Albert Einstein, Digital Einstein Papers, Princeton University Press and Caltech ", u:"https://einsteinpapers.press.princeton.edu"},
      {n:"Einstein to F. D. Roosevelt, 2 August 1939, Franklin D. Roosevelt Presidential Library"},
      {n:"The Nobel Prize in Physics 1921, Nobel Foundation", u:"https://www.nobelprize.org/prizes/physics/1921/einstein/facts/"},
      {n:"Further reading: Walter Isaacson, Einstein: His Life and Universe (2007)"},
      {n:"Further reading: Abraham Pais, 'Subtle is the Lord...': The Science and the Life of Albert Einstein (1982)"}
    ]}
  ]
},

"elizabeth-i": {
  hero: "",
  kw: ["Virgin Queen","Gloriana","Tudor","Anne Boleyn","Henry VIII","Mary I","Mary, Queen of Scots","Spanish Armada","Armada","Tilbury","heart and stomach of a king","Drake","Raleigh","Dudley","Walsingham","Cecil","Elizabethan","Golden Age","Essex"],
  lede: "A princess declared illegitimate at two, imprisoned in the Tower as a young woman, who became queen at 25, never married, survived plots and an invasion, and ruled England for 44 years.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Elizabeth was born in 1533, the daughter of Henry VIII and his second wife, Anne Boleyn, who was beheaded when Elizabeth was two. She became queen in 1558 after the deaths of her half-brother Edward VI and half-sister Mary I.",
      "She restored a moderate Protestant Church of England, kept her country mostly at peace for decades, and refused every offer of marriage. In 1588 her navy and the weather defeated the Spanish Armada.",
      "Her reign saw Shakespeare, Marlowe and Spenser, and the first English voyages around the world. It also saw harsh persecution of Catholics, the execution of her cousin Mary, Queen of Scots, and the brutal conquest of Ireland. She died in 1603, the last of the Tudors."
    ]},
    {k:"early", h:"Early life", ps:[
      "She was born on 7 September 1533 at Greenwich Palace. Henry VIII had broken with the Pope to marry her mother, hoping for a son. In May 1536 Anne Boleyn was executed on charges of adultery and treason that most historians think were invented.",
      "Declared illegitimate, she was still raised as a royal child and given an excellent education. She learned Latin, Greek, French and Italian, and her tutor Roger Ascham praised her quick mind.",
      "Under her Catholic half-sister Mary I, she was suspected of involvement in Wyatt's rebellion of 1554 and held in the Tower of London for two months, then under house arrest. She expected to be executed."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Queen, 1558. Mary died on 17 November 1558. Elizabeth was 25. She chose William Cecil as her chief adviser; he served her for 40 years.",
      "The religious settlement, 1559. Parliament made her Supreme Governor of a Protestant Church of England, with a prayer book and some traditional forms that many Catholics could accept.",
      "Marriage question, 1560s to 1580s. Parliament begged her to marry and produce an heir. Suitors included Philip II of Spain, Archduke Charles of Austria and the French Duke of Anjou. Her favourite was Robert Dudley, Earl of Leicester; when his wife Amy Robsart died after a fall down stairs in 1560, the scandal ended any hope of marrying him.",
      "Excommunication, 1570. Pope Pius V declared her a heretic and released Catholics from obeying her. Catholic priests became suspected traitors, and about 180 Catholics were executed during her reign.",
      "Mary, Queen of Scots, 1568 to 1587. Her Catholic cousin, who had a strong claim to succeed her, fled Scotland to England in 1568 and was held captive for 19 years, the focus of plots to kill Elizabeth. After the Babington plot was uncovered by the spymaster Francis Walsingham, Mary was tried and beheaded in February 1587. Elizabeth claimed the warrant had been sent against her wishes.",
      {t:"The Armada, 1588. Philip II sent about 130 ships to escort an invasion army from the Netherlands. English fireships broke their formation off Calais, and storms wrecked many ships as they fled round Scotland and Ireland. At Tilbury, Elizabeth told her troops: 'I know I have the body but of a weak and feeble woman; but I have the heart and stomach of a king, and of a king of England too.'", lab:"likely", why:"The speech survives in a version written down by Leonel Sharp, who was there, in a letter of 1623 or later. Historians mostly accept its substance."},
      "Last years, 1590s to 1603. War with Spain dragged on, harvests failed, and the conquest of Ireland grew bloodier. Her last favourite, the Earl of Essex, led a failed rebellion in 1601 and was executed. She died on 24 March 1603, aged 69, and was succeeded by Mary's son, James VI of Scotland."
    ]},
    {k:"works", h:"What she did", ps:[
      "She held England together through religious conflict that tore apart France and the Netherlands, though at a heavy cost to Catholics and to Ireland.",
      "She managed her image carefully: portraits, progresses through the country, and the cult of the Virgin Queen, Gloriana, married to her kingdom.",
      "She backed privateers such as Francis Drake, who sailed round the world from 1577 to 1580 and raided Spanish treasure, and allowed early ventures in North America. Walter Raleigh named Virginia after her.",
      "She also profited from and licensed John Hawkins's slave-trading voyages of the 1560s, England's first involvement in the Atlantic slave trade.",
      "Her famous 'Golden Speech' to Parliament in 1601 told them: 'Though God hath raised me high, yet this I count the glory of my crown, that I have reigned with your loves.'"
    ]},
    {k:"people", h:"Her people", ps:[
      "William Cecil, Lord Burghley (1520 to 1598), her chief minister for 40 years.",
      "Robert Dudley, Earl of Leicester (1532 to 1588), her lifelong favourite. She kept his last letter to her in a box by her bed, marked 'his last letter'.",
      "Francis Walsingham (about 1532 to 1590), her spymaster, who ran agents across Europe and cracked the codes in the Babington plot.",
      "Mary, Queen of Scots (1542 to 1587), her cousin, rival and prisoner, whom she never met."
    ]},
    {k:"world", h:"The world around her", ps:[
      "Shakespeare wrote most of his plays in her reign; his company performed before her at court.",
      "In India, Akbar was ruling the Mughal Empire (1556 to 1605), almost exactly her years. In Japan, Tokugawa Ieyasu won the battle of Sekigahara in 1600.",
      "The East India Company was founded by her charter on 31 December 1600."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "Her reign is remembered as England's Golden Age, a story first built by Protestant writers after her death and still powerful today.",
      "She showed that a woman could rule alone, at a time when many, including the Scottish preacher John Knox, wrote that female rule was against nature.",
      "Historians now also stress the darker side: religious persecution, poverty in the 1590s, and the devastation of Ireland."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"She was a virgin all her life.", lab:"disputed", t:"Nobody can know. She called herself a virgin, and enemies spread rumours about Dudley. There is no evidence either way."},
      {c:"Walter Raleigh laid his cloak over a puddle for her.", lab:"myth", t:"The story first appears in Thomas Fuller's History of the Worthies of England in 1662, nearly 60 years after her death."},
      {c:"She wore white lead make-up to hide smallpox scars.", lab:"likely", t:"She had smallpox in 1562, and white lead-based make-up was fashionable at court. That she used it heavily to hide scars is plausible but based on later accounts."},
      {c:"The Armada was destroyed by the English navy alone.", lab:"myth", t:"English ships and fireships disrupted it, but most Spanish losses came from storms and shipwrecks on the voyage home. A medal struck in the Netherlands read 'God blew, and they were scattered.'"}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Elizabeth I, speeches and letters, including the Tilbury speech (1588) and the Golden Speech (1601), public domain"},
      {n:"William Camden, Annales: The True and Royall History of the Famous Empresse Elizabeth (1615, English 1625), public domain"},
      {n:"The National Archives, Kew: Elizabethan state papers (free catalogue)", u:"https://www.nationalarchives.gov.uk"},
      {n:"Further reading: Anne Somerset, Elizabeth I (1991)"},
      {n:"Further reading: John Guy, Elizabeth: The Forgotten Years (2016)"}
    ]}
  ]
},

"michelangelo": {
  hero: "",
  kw: ["Buonarroti","David","Pietà","Pieta","Sistine Chapel","ceiling","Last Judgment","Creation of Adam","Moses@works","St Peter's","dome","Julius II","Medici","Lorenzo","Florence","Rome","Vasari","Condivi","sonnets","Vittoria Colonna","Raphael","Leonardo@people"],
  lede: "A sculptor who said he was not a painter, painted the Sistine Chapel ceiling anyway, carved David from a block others had abandoned, and was still designing the dome of St Peter's at 88.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Michelangelo Buonarroti was born in 1475 near Arezzo, in the Republic of Florence, and trained in Florence. He considered himself above all a sculptor, though he was also a painter, architect and poet.",
      "His Pietà in St Peter's (finished about 1499) and his David in Florence (1501 to 1504) made him famous before he was 30. For Pope Julius II he painted the ceiling of the Sistine Chapel from 1508 to 1512, and decades later the Last Judgment on its altar wall.",
      "He worked for seven popes, lived mostly in Rome from 1534, and died there in 1564, aged 88, as chief architect of the new St Peter's Basilica."
    ]},
    {k:"early", h:"Early life", ps:[
      "He was born on 6 March 1475 at Caprese. His father, Ludovico, was briefly the town's magistrate. His mother died when he was six.",
      {t:"As a baby he was put out to nurse with a stonecutter's wife in Settignano. He later joked that he had drawn in the hammer and chisel with his nurse's milk.", lab:"likely", why:"Vasari reports the remark in his Lives (1568). He knew Michelangelo personally, but the line may be polished."},
      "At 13 he was apprenticed to the painter Domenico Ghirlandaio. Soon after, he joined the sculpture school in Lorenzo de' Medici's garden, and lived in the Medici household, eating at Lorenzo's table with poets and philosophers.",
      {t:"A fellow student, Pietro Torrigiano, punched him in the face during an argument and broke his nose, leaving it flattened for life.", lab:"verified", why:"Torrigiano boasted of it himself to Benvenuto Cellini, who recorded it in his autobiography."}
    ]},
    {k:"turns", h:"Turning points", ps:[
      "The Pietà, 1498 to 1499. In Rome, aged about 23, he carved Mary holding the dead Christ across her lap, for a French cardinal's tomb. It is the only work he ever signed, on the strap across Mary's chest.",
      "David, 1501 to 1504. Back in Florence, he was given a tall block of marble that two other sculptors had started on and abandoned decades before. From it he carved a 5-metre David, shown before his fight with Goliath. The city set it outside the town hall as a symbol of the Republic.",
      "Julius II's tomb, from 1505. The warrior Pope Julius II commissioned a huge tomb with 40 statues. Funding was cut, the project shrank over 40 years, and his biographer Condivi called it 'the tragedy of the tomb'. Its best-known figure is his Moses, now in San Pietro in Vincoli in Rome.",
      "The Sistine ceiling, 1508 to 1512. Julius then made him paint the chapel ceiling, about 500 square metres, though he protested he was a sculptor. He covered it with the Creation, the story of Noah, prophets and sibyls, including the Creation of Adam, working with assistants on a scaffold he designed.",
      "Florence and the Medici, 1516 to 1534. He designed the Medici Chapel and its tombs, and the Laurentian Library. During the siege of Florence in 1529 to 1530 he designed its fortifications for the Republic against the Medici, then went into hiding when they won.",
      "The Last Judgment, 1536 to 1541. Settled in Rome for good, he painted the altar wall of the Sistine Chapel with a vast, swirling Last Judgment. Its many nude figures scandalised some churchmen; after his death another painter, Daniele da Volterra, added drapery and was nicknamed 'the breeches maker'.",
      "St Peter's, 1546 to 1564. At 71 he became chief architect of the new St Peter's Basilica and redesigned it, including its great dome, finished after his death. He refused payment, saying he worked for the love of God. He died on 18 February 1564."
    ]},
    {k:"works", h:"The work", ps:[
      "Sculpture: the Pietà, David, Moses, the Medici tombs, the unfinished 'Prisoners' or 'Slaves' who seem to struggle out of the stone, and the Rondanini Pietà he was carving days before he died.",
      "Painting: the Sistine ceiling and the Last Judgment, the Doni Tondo, and the frescoes of the Pauline Chapel.",
      "Architecture: the Medici Chapel, the Laurentian Library, the Campidoglio square in Rome and the dome of St Peter's.",
      "Poetry: about 300 poems and sonnets survive, many to the nobleman Tommaso dei Cavalieri and to the poet Vittoria Colonna."
    ]},
    {k:"people", h:"His people", ps:[
      "Lorenzo de' Medici (1449 to 1492), the Florentine ruler who took him into his household as a teenager.",
      "Pope Julius II (1443 to 1513), his most demanding patron, with whom he quarrelled, fled and reconciled.",
      {t:"Leonardo da Vinci, 23 years older, his rival. In 1503 and 1504 Florence commissioned both to paint battle scenes in the same council hall; neither was finished. Their contemporaries reported open scorn between them.", lab:"likely", why:"The commissions are documented. The insults come from an anonymous early biography (the Anonimo Gaddiano)."},
      "Vittoria Colonna (1490 to 1547), poet and religious reformer, his close friend in later life, to whom he wrote some of his finest poems."
    ]},
    {k:"world", h:"The world around him", ps:[
      "He was 17 when Columbus reached the Americas and 42 when Luther posted his theses in 1517. Rome was sacked by imperial troops in 1527.",
      "Raphael painted the School of Athens next door in the Vatican while Michelangelo was on the Sistine scaffold. In it, the brooding figure of Heraclitus is often thought to be a portrait of Michelangelo.",
      "He died in the year Shakespeare and Galileo were born."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "He was the first artist to have two biographies published in his lifetime, by Giorgio Vasari (1550) and Ascanio Condivi (1553). Contemporaries called him 'il Divino', the divine one.",
      "His muscular, twisting figures shaped Mannerist and Baroque art, and later sculptors such as Rodin.",
      "The Sistine Chapel, restored from 1980 to 1994, is visited by millions every year; the restoration revealed bright colours under centuries of grime."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He painted the Sistine ceiling lying on his back.", lab:"myth", t:"He painted standing up, bending backwards, on a scaffold he designed. He wrote a comic poem about the pain in his neck and back, with a sketch of himself reaching up."},
      {c:"He worked entirely alone.", lab:"myth", t:"He had assistants to grind colours, plaster and transfer drawings, though he painted most of the figures himself and dismissed many helpers."},
      {c:"He hit the knee of his Moses and said 'Why don't you speak?'", lab:"myth", t:"A charming legend with no source from his time."},
      {c:"His Pietà was mistaken for another sculptor's work, so he carved his name on it.", lab:"likely", t:"Vasari tells this story. The signature is real; the reason he gives is plausible but unconfirmed."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Ascanio Condivi, The Life of Michelagnolo Buonarroti (1553), translated by Charles Holroyd (1903), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/19332"},
      {n:"Giorgio Vasari, Lives of the Most Excellent Painters, Sculptors and Architects (1568), translated by Gaston du C. de Vere (1912 to 1915), public domain"},
      {n:"The Sonnets of Michael Angelo Buonarroti, translated by John Addington Symonds (1878), public domain"},
      {n:"Vatican Museums: the Sistine Chapel", u:"https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/cappella-sistina/tour-virtuale.html"},
      {n:"Further reading: William E. Wallace, Michelangelo: The Artist, the Man, and His Times (2010)"}
    ]}
  ]
},

"akbar": {
  hero: "",
  kw: ["Mughal","Jalal-ud-din","Humayun","Babur","Bairam Khan","Panipat","Fatehpur Sikri","Agra","Ibadat Khana","Din-i Ilahi","sulh-i kull","jizya","Birbal@myths","Tansen","Abu'l Fazl","Akbarnama","Rajputs","Jodha@myths","Chittor","mansabdari"],
  lede: "A boy who became emperor at thirteen and never learned to read, yet built the Mughal Empire across most of northern India, hosted debates between religions, and abolished the tax on non-Muslims.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Jalal-ud-din Muhammad Akbar was born in 1542 in Umerkot, in Sindh, while his father, the Mughal emperor Humayun, was in flight from his enemies. He came to the throne in 1556, aged 13.",
      "Over nearly 50 years he expanded the Mughal Empire from a shaky foothold around Delhi and Agra to most of the Indian subcontinent north of the Godavari river, and built an administration that lasted for generations.",
      "A Muslim ruler of a mostly Hindu land, he married Rajput princesses, gave Hindus high office, abolished the jizya tax on non-Muslims and promoted a policy of 'peace with all'. He died in 1605."
    ]},
    {k:"early", h:"Early life", ps:[
      "His grandfather Babur, from Central Asia, descended from Timur and Genghis Khan, had founded the Mughal dynasty in India in 1526. His father Humayun lost the empire to the Afghan Sher Shah Suri in 1540 and spent 15 years in exile.",
      "Akbar was born on 15 October 1542. As a toddler he was captured by his uncle Kamran, Humayun's rival brother, and is said to have been exposed on the walls of Kabul during a siege.",
      {t:"He never learned to read or write, though he had a huge library read to him and an astonishing memory.", lab:"likely", why:"Contemporary accounts, including Jesuit visitors, say so. Some historians think he may have had dyslexia; that is a modern guess."}
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Emperor, 1556. Humayun reconquered Delhi in 1555, then died months later after falling down the stairs of his library. Akbar, 13, was proclaimed emperor, with the general Bairam Khan as regent.",
      "Panipat, 1556. At the second battle of Panipat, the Mughals defeated Hemu, a Hindu general who had taken Delhi. Hemu was hit in the eye by an arrow, captured and beheaded.",
      "Ruling alone, 1560. At 17 Akbar dismissed Bairam Khan and took power himself.",
      "The Rajputs, 1562 onwards. He married a princess of Amber (Jaipur), daughter of Raja Bharmal, and brought Rajput rulers into the empire as allies and generals. Those who resisted were crushed.",
      {t:"At Chittor in 1568, after a long siege, he ordered a massacre; his own court historian put the dead at about 30,000.", lab:"likely", why:"The figure is from the Akbarnama. Modern historians accept a massacre but cannot check the number."},
      "Abolishing the jizya, 1564. He ended the tax paid by non-Muslims, and also the tax on Hindu pilgrims.",
      "Fatehpur Sikri, 1571 to 1585. He built a new red sandstone capital near the shrine of the Sufi saint Salim Chishti, who had foretold the birth of his heir. It was abandoned after about 15 years.",
      {t:"The House of Worship, from 1575. In the Ibadat Khana at Fatehpur Sikri he held debates between Sunni and Shia scholars, Hindus, Jains, Zoroastrians and Jesuit priests from Goa.", lab:"verified", why:"Described by Abu'l Fazl and by the Jesuit Antonio Monserrate, who took part."},
      "Expansion, 1572 to 1601. He conquered Gujarat, Bengal, Kashmir, Sindh and parts of the Deccan.",
      "Death, 1605. His last years were troubled by his son Salim's rebellion. Akbar died in Agra on 27 October 1605. Salim succeeded him as Jahangir."
    ]},
    {k:"works", h:"What he did", ps:[
      "The mansabdari system ranked every officer by the number of horsemen he had to supply, and paid them in revenue or salary, with promotions decided by the emperor. It held the empire together.",
      "His finance minister Raja Todar Mal surveyed the land and set taxes based on average crops and prices over ten years.",
      "Sulh-i kull, 'peace with all': a policy of tolerance between religions, though rebellion was punished harshly.",
      {t:"In 1582 he promoted a set of spiritual practices for a small circle of courtiers, later called Din-i Ilahi, 'divine faith'.", lab:"disputed", why:"Critics such as the courtier Badauni said he founded a new religion. Most historians now see it as a discipleship order of loyal nobles rather than a religion."},
      "He was a great patron: painting workshops illustrated the Hamzanama in about 1,400 large paintings, the Mahabharata was translated into Persian, and the singer Tansen performed at his court."
    ]},
    {k:"people", h:"His people", ps:[
      "Bairam Khan, his guardian and regent, dismissed in 1560 and murdered on the way to Mecca.",
      "Abu'l Fazl (1551 to 1602), his friend and historian, author of the Akbarnama, killed in an ambush arranged by Prince Salim.",
      "Raja Man Singh of Amber, a Rajput general who led Mughal armies across India.",
      "Mariam-uz-Zamani, his Rajput wife from Amber and mother of Jahangir."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Elizabeth I reigned in England from 1558 to 1603, almost exactly his years. Shah Abbas the Great ruled Persia, and the Ottoman Empire under Suleiman the Magnificent was at its height when he was young.",
      "Portuguese traders controlled Goa and much of India's sea trade. The English East India Company was chartered in 1600, five years before his death.",
      "In Japan, Hideyoshi and then Tokugawa Ieyasu were unifying the country."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "His grandson Shah Jahan built the Taj Mahal, and the empire he built lasted, in some form, until 1857.",
      "He is remembered in India as a model of tolerance, and is one of only a few rulers to be called 'the Great'. Critics point to his massacres and to how much power stayed with a Muslim and Rajput elite.",
      "His tomb at Sikandra, near Agra, which he began himself, is one of the great Mughal monuments."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"Jodha Bai was his beloved Rajput queen.", lab:"myth", t:"His Rajput wife from Amber is called Mariam-uz-Zamani in Mughal records. The name 'Jodha Bai' was attached to her by later writers, notably James Tod in 1829, and was popularised by films."},
      {c:"Birbal outwitted him in funny stories.", lab:"myth", t:"Birbal was a real courtier and friend, killed in battle in 1586. The witty 'Akbar and Birbal' tales are folklore collected much later."},
      {c:"He founded a new religion that many followed.", lab:"disputed", t:"Din-i Ilahi had only about 18 known members and disappeared after his death. Many historians doubt it was meant as a religion."},
      {c:"He was illiterate, so he was uneducated.", lab:"myth", t:"He could not read, but he was deeply learned through listening, debated theology and philosophy, and knew poetry by heart."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Abu'l Fazl, The Akbarnama, volume 2, translated by Henry Beveridge, Digital Library of India via Internet Archive (public domain)", u:"https://archive.org/details/in.ernet.dli.2015.82733"},
      {n:"Abu'l Fazl, The Ain-i-Akbari, translated by H. Blochmann and H. S. Jarrett (1873 to 1894), public domain"},
      {n:"Antonio Monserrate, The Commentary of Father Monserrate on His Journey to the Court of Akbar, translated by J. S. Hoyland (1922), public domain"},
      {n:"Further reading: Abraham Eraly, The Mughal Throne (2003)"},
      {n:"Further reading: Ira Mukhoty, Akbar: The Great Mughal (2020)"}
    ]}
  ]
},

"kahlo": {
  hero: "",
  kw: ["Frida","Diego Rivera","Casa Azul","Blue House","Coyoacán","self-portrait","The Two Fridas","bus accident","polio","Trotsky@people","Surrealism@myths","Tehuana","unibrow","Louvre","Mexican Revolution","The Broken Column"],
  lede: "A teenager crushed in a bus accident who taught herself to paint in a body cast, married Mexico's most famous muralist twice, and made unflinching self-portraits that turned her into a global icon long after her death.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Magdalena Carmen Frida Kahlo y Calderón was born in 1907 in Coyoacán, then a village outside Mexico City, in the house her family painted blue, the Casa Azul.",
      "Polio as a child and a terrible bus accident at 18 left her in pain for life. She began painting while bedridden and made about 200 works, around a third of them self-portraits, about her body, her marriage, her Mexican identity and her suffering.",
      "She married the muralist Diego Rivera in 1929, divorced him in 1939 and remarried him in 1940. She had her first solo show in Mexico only in 1953, the year before her death at 47. Since the 1980s she has become one of the best-known artists in the world."
    ]},
    {k:"early", h:"Early life", ps:[
      {t:"She was born on 6 July 1907, but later gave her birth year as 1910, the year the Mexican Revolution began, to tie herself to modern Mexico.", lab:"verified", why:"Her birth certificate gives 1907. She herself told the story of choosing 1910."},
      "Her father, Guillermo Kahlo, was a German-born photographer; her mother, Matilde Calderón, was Mexican, of Indigenous and Spanish descent.",
      "At six she had polio, which left her right leg thinner. She wore long skirts and later traditional dresses partly to hide it.",
      "In 1922 she was one of the first girls admitted to the elite National Preparatory School in Mexico City, and planned to study medicine."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "The accident, 17 September 1925. A wooden bus she was riding collided with a tram. A metal handrail pierced her pelvis. She broke her spine, collarbone, ribs, pelvis and right leg. She was 18.",
      "Painting in bed, 1925 to 1926. Confined for months in a plaster corset, she painted with a mirror fixed above her bed. Her first self-portrait, in a velvet dress, was a gift to her boyfriend.",
      "Diego Rivera, 1928 to 1929. She showed her paintings to Rivera, almost 21 years older and Mexico's most famous artist, who encouraged her. They married in August 1929. Her mother called it a marriage between an elephant and a dove.",
      "The United States, 1930 to 1933. She went with Rivera to San Francisco, Detroit and New York, where he painted murals. In Detroit she had a miscarriage and painted Henry Ford Hospital (1932), one of her most raw works.",
      "Paris and New York, 1938 to 1939. André Breton, leader of the Surrealists, called her art 'a ribbon around a bomb'. She had a solo show in New York in 1938, and in Paris in 1939 the French state bought her self-portrait The Frame, the first work by a 20th-century Mexican artist to enter a major European museum collection (it is now in the Centre Pompidou).",
      "Divorce and remarriage, 1939 to 1940. Rivera had affairs, including with her sister Cristina; she had her own with men and women. They divorced in 1939, when she painted The Two Fridas, and remarried in December 1940.",
      "Last years, 1940s to 1954. Her health worsened; she had many operations on her spine and wore steel and plaster corsets, painted in The Broken Column (1944). In 1953 her right leg was amputated below the knee. She came to her first solo show in Mexico in her bed, brought by ambulance. She died at the Casa Azul on 13 July 1954."
    ]},
    {k:"works", h:"The work", ps:[
      "Self-portraits: she said she painted herself 'because I am so often alone and because I am the subject I know best'.",
      "The Two Fridas (1939): two versions of herself, one in European dress and one in Tehuana dress, holding hands, their hearts exposed and joined by a vein.",
      "The Broken Column (1944): her body split open to show a crumbling stone column in place of her spine, and nails piercing her skin.",
      "She drew on Mexican folk art, retablos (small devotional paintings on tin), pre-Columbian imagery and Catholic symbols, and dressed in Tehuana clothing from Oaxaca as a statement of Mexican identity."
    ]},
    {k:"people", h:"Her people", ps:[
      "Diego Rivera (1886 to 1957), her husband, the great muralist, who called her the first woman in the history of art to treat with absolute frankness themes that affect only women.",
      {t:"Leon Trotsky (1879 to 1940), the exiled Russian revolutionary, lived in the Casa Azul from 1937 to 1939, and they had a brief affair. He was murdered in Mexico City in 1940.", lab:"likely", why:"The stay is documented. The affair is accepted by most biographers from letters and later testimony."},
      "Guillermo Kahlo, her father, whose photographs of her as a child and young woman are a key record of her life.",
      "Cristina Kahlo, her younger sister, who cared for her and whose affair with Rivera hurt her deeply."
    ]},
    {k:"world", h:"The world around her", ps:[
      "She grew up during the Mexican Revolution (1910 to 1920) and the cultural movement after it that celebrated Indigenous and popular Mexico.",
      "She was a member of the Mexican Communist Party and remained politically active; her last public appearance was at a protest in 1954, in a wheelchair.",
      "Picasso, Kandinsky and Duchamp admired her work in Paris in 1939."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "The Casa Azul has been the Frida Kahlo Museum since 1958.",
      "After a biography by Hayden Herrera (1983) and later the film Frida (2002), she became a feminist, Mexican and LGBT icon, and her face appears on everything from posters to dolls, which critics call 'Fridamania'.",
      "Her painting El sueño (La cama) sold in 2025 for 54.7 million US dollars, then the most ever paid at auction for a work by a woman.",
      {t:"Her works are protected in Mexico as national artistic monuments, and their copyright there lasts until 2054. This museum does not show pictures of her paintings.", lab:"verified", why:"Mexican copyright lasts 100 years after the author's death. In countries with a 70-year term, her works entered the public domain in 2025."}
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"She was a Surrealist.", lab:"disputed", t:"Breton claimed her for Surrealism, and she showed with them. She rejected the label: 'I never painted dreams. I painted my own reality.'"},
      {c:"She was born in 1910.", lab:"myth", t:"She was born in 1907 and chose to say 1910, the year the Revolution began."},
      {c:"Her last diary entry was 'I hope the exit is joyful, and I hope never to return.'", lab:"verified", t:"That entry (in Spanish, 'Espero alegre la salida y espero no volver jamás'; our translation) is in her diary, written days before her death. Whether her death was accidental or not is debated; the official cause was a pulmonary embolism."},
      {c:"She painted to express only pain.", lab:"myth", t:"Many of her works are still lifes full of fruit, portraits of friends and political images. Her last painting, a watermelon still life, is inscribed 'Viva la Vida'."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Museo Frida Kahlo (the Casa Azul), Coyoacán, Mexico City", u:"https://www.museofridakahlo.org.mx"},
      {n:"Guillermo Kahlo's photographs of Frida (1910s to 1930s), many in the public domain"},
      {n:"The Diary of Frida Kahlo: An Intimate Self-Portrait (published 1995; free only to cite, not to copy)"},
      {n:"Further reading: Hayden Herrera, Frida: A Biography of Frida Kahlo (1983)"},
      {n:"Further reading: Gannit Ankori, Frida Kahlo (2013)"}
    ]}
  ]
},

"tolstoy": {
  hero: "",
  kw: ["War and Peace","Anna Karenina","Yasnaya Polyana","Sevastopol","Sofia","Sophia Tolstaya","Christianity","non-violence","The Kingdom of God Is Within You","Gandhi@people","excommunicated","Astapovo","Death of Ivan Ilyich","Confession","peasants","Resurrection"],
  lede: "A count who gambled and soldiered in his youth, wrote War and Peace and Anna Karenina, then turned against his own art, his wealth and the Church, and died at a railway station after running away from home at 82.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Count Lev Nikolayevich Tolstoy was born in 1828 on his family's estate, Yasnaya Polyana, south of Moscow. He served in the army in the Caucasus and the Crimean War and began writing in his twenties.",
      "In the 1860s and 1870s he wrote War and Peace and Anna Karenina, two novels often ranked among the greatest ever written.",
      "Around 1880 a spiritual crisis led him to a radical Christianity based on the Sermon on the Mount: non-violence, simple living, no private property. It made him a world figure, got him excommunicated by the Russian Orthodox Church, and tore his family apart. He died in 1910."
    ]},
    {k:"early", h:"Early life", ps:[
      "He was born on 9 September 1828 (28 August in Russia's old calendar). His mother died when he was nearly two and his father when he was eight; relatives raised him.",
      "He studied oriental languages and then law at Kazan University, did badly, and left without a degree in 1847 to run his estate, where he tried, and failed, to improve the lives of his serfs.",
      "His diaries of these years record gambling debts, drinking, visits to prostitutes and endless resolutions to do better."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "The army, 1851 to 1856. He joined his brother in the Caucasus and wrote his first book, Childhood (1852). In the Crimean War he served as an artillery officer in the siege of Sevastopol, and his Sevastopol Sketches made him famous.",
      "Schools and travel, 1857 to 1862. He travelled in Europe, saw a public execution in Paris that horrified him, and opened a school for peasant children at Yasnaya Polyana.",
      "Marriage, 1862. At 34 he married Sofia Behrs, 18. He gave her his diaries to read, including his past affairs. They had 13 children, of whom eight survived childhood. Sofia copied out his manuscripts by hand, War and Peace several times.",
      "War and Peace, 1863 to 1869. Set during Napoleon's wars with Russia from 1805 to 1812, it follows several families through love, battle and the burning of Moscow, and argues that history is made by countless ordinary people, not great men.",
      "Anna Karenina, 1873 to 1877. Its famous first line says that happy families are all alike, and every unhappy family is unhappy in its own way. It sets Anna's doomed love affair against Levin's search for meaning on his estate.",
      "Crisis, about 1879 to 1882. Despite fame, wealth and family, he felt life had no meaning and hid ropes and guns to avoid suicide. He described this in A Confession. He found an answer in Christ's teaching, stripped of Church doctrine and miracles.",
      "Prophet, 1880s to 1900s. He gave up meat, alcohol and tobacco, worked in the fields, renounced the copyrights to his later works, and wrote The Kingdom of God Is Within You (1894), arguing for non-violent resistance. Pilgrims came from around the world.",
      "Excommunication, 1901. The Holy Synod of the Russian Orthodox Church declared he had fallen away from the Church, after his novel Resurrection mocked its rituals.",
      "Flight and death, 1910. After years of bitter quarrels with Sofia over his diaries, his will and his copyrights, he left home secretly before dawn on 28 October (old calendar), aged 82. He fell ill with pneumonia on the train and died at the station of Astapovo on 7 November 1910 (20 November in the new calendar). Sofia was kept from his bedside until he was unconscious."
    ]},
    {k:"works", h:"The work", ps:[
      "War and Peace (1869): about 580 characters, battles from Austerlitz to Borodino, and the inner lives of Pierre, Natasha and Prince Andrei.",
      "Anna Karenina (1878): often called the greatest novel ever written.",
      "Short novels and stories: The Death of Ivan Ilyich (1886), The Kreutzer Sonata (1889), Hadji Murat (published 1912).",
      "Essays and religious writing: A Confession, What Is Art?, and The Kingdom of God Is Within You.",
      "He also wrote primers and stories for peasant children, and campaigned for famine relief in 1891 to 1892."
    ]},
    {k:"people", h:"His people", ps:[
      "Sofia Tolstaya (1844 to 1919), his wife, manager of the estate and his publishing, his copyist, and in later years his anguished opponent. Her own diaries tell her side.",
      "Vladimir Chertkov (1854 to 1936), his devoted disciple, whom Sofia saw as a rival for his love and his papers.",
      {t:"Mahatma Gandhi, who corresponded with him in 1909 and 1910 and called his South African community Tolstoy Farm. Tolstoy's last long letter, written two months before his death, was to Gandhi.", lab:"verified", why:"The letters are published in Gandhi's Collected Works and in Tolstoy's correspondence."},
      "Anton Chekhov, who visited him and admired him enormously."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Russia freed its serfs in 1861. He lived through the reigns of four tsars and the revolution of 1905.",
      "Dostoevsky, his great contemporary, never met him, though both wanted to.",
      "Darwin's Origin of Species came out in 1859, Marx's Capital in 1867, two years before War and Peace was finished."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "His ideas of non-violent resistance influenced Gandhi and, through him, Martin Luther King Jr.",
      "He was nominated for the Nobel Prize in Literature several times and the Peace Prize too, and never won either.",
      "Yasnaya Polyana is now a museum, and his grave there, a simple mound of earth with no cross, is visited by thousands."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"War and Peace is mostly about war.", lab:"myth", t:"Much of it is about families, love, faith and peace-time society. It also contains long essays on the philosophy of history."},
      {c:"He wrote War and Peace alone.", lab:"disputed", t:"He wrote it, but Sofia copied the drafts out repeatedly, made fair copies for the printers and managed its publication. Her role was enormous."},
      {c:"He gave away all his wealth.", lab:"myth", t:"He wanted to. In 1883 he gave Sofia power of attorney over his affairs, in 1891 he renounced copyright to works written after 1881, and in 1892 he divided his property among her and the children. The family kept the estate."},
      {c:"Tolstoy had no humour.", lab:"myth", t:"His early stories and novels are often very funny, and visitors described him as lively and teasing."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Leo Tolstoy, War and Peace, translated by Louise and Aylmer Maude, Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/2600"},
      {n:"Leo Tolstoy, Anna Karenina, translated by Constance Garnett (1901), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/1399"},
      {n:"Leo Tolstoy, A Confession (1882) and The Kingdom of God Is Within You (1894), public domain translations"},
      {n:"Aylmer Maude, The Life of Tolstoy (1908 to 1910), public domain"},
      {n:"Further reading: Rosamund Bartlett, Tolstoy: A Russian Life (2010)"}
    ]}
  ]
},

"marco-polo": {
  hero: "",
  kw: ["Venice","Kublai Khan","Khanbaliq","Xanadu","Shangdu","Silk Road","Travels","Il Milione","Rustichello","Genoa","prison","pasta@myths","Great Wall@myths","paper money","Hangzhou","Quinsai","Niccolò","Maffeo"],
  lede: "A Venetian merchant's son who spent 24 years in Asia, much of it serving Kublai Khan, then told his story in a Genoese prison to a writer of romances. Europe called it 'the Million' and half believed it.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Marco Polo was born in Venice around 1254. In 1271, at 17, he set out with his father Niccolò and uncle Maffeo, merchants who had already been to the court of the Mongol ruler Kublai Khan.",
      "They reached Kublai's summer capital, Shangdu (Xanadu), around 1275. Marco says he served the Khan for about 17 years, travelling on missions across China and beyond. The Polos returned to Venice by sea in 1295.",
      "Captured in a war with Genoa, he dictated his travels to a fellow prisoner, Rustichello of Pisa. The book, known as The Description of the World or Il Milione, became one of the most widely read books of medieval Europe. He died in Venice in 1324."
    ]},
    {k:"early", h:"Early life", ps:[
      "Venice was a merchant republic whose ships traded across the Mediterranean and the Black Sea. The Polos were a family of traders with a house in Constantinople and a trading post in the Crimea.",
      "When Marco was a small child, his father and uncle travelled east to trade and ended up, by chance, at Kublai Khan's court. They came back in 1269 carrying a letter from the Khan to the Pope, asking for a hundred learned Christians.",
      "Marco's mother had died while they were away. He met his father for the first time, as far as we know, when he was about 15."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Departure, 1271. The three Polos left with letters from the new Pope, Gregory X, and two friars, who soon turned back in fear. They crossed Armenia, Persia and Afghanistan, then the Pamir mountains and the Taklamakan desert.",
      {t:"Arrival, about 1275. After three and a half years on the road they reached Kublai at Shangdu. Marco says the Khan took a liking to him and sent him on missions because he learned languages quickly and reported on the customs of distant places.", lab:"likely", why:"This is Marco's own account. No Chinese record names him, though some details he gives about Yuan officials and taxes match Chinese sources."},
      "Years in China, about 1275 to 1291. He describes Kublai's capital Khanbaliq (Beijing), the great southern city of Quinsai (Hangzhou), paper money, coal (black stones that burn), the postal relay stations, and the Grand Canal. He claims to have governed the city of Yangzhou for three years, a claim most historians doubt.",
      {t:"The voyage home, 1291 to 1295. The Polos sailed as escorts for a Mongol princess, Kököchin, travelling to marry the Ilkhan of Persia. The voyage, via Sumatra, Sri Lanka and India, took about two years, and many of the 600 passengers died.", lab:"likely", why:"A Persian historian, Rashid al-Din, and a Chinese document both name the three envoys who escorted the princess, matching Marco's account. Neither names the Polos, and the passenger numbers are Marco's own."},
      {t:"Prison and the book, about 1298 to 1299. Back in Venice, Marco was captured in a war against Genoa, by tradition while serving on a galley. In prison he met Rustichello, who wrote down his stories in a French mixed with Italian.", lab:"likely", why:"The book's own prologue says it was written in a Genoese prison in 1298. The details of his capture come from later writers and do not agree."},
      "Last years. Released in 1299, he married Donata Badoer, had three daughters, and lived as a wealthy merchant in Venice until his death in January 1324. In his will he freed a Tartar servant named Peter."
    ]},
    {k:"works", h:"The book", ps:[
      "It is less a travel diary than a description of the world as far as Japan, which Marco called Cipangu and never visited. It covers geography, trade goods, customs, wonders and the power and riches of Kublai Khan.",
      "No original manuscript survives. About 150 manuscripts in many languages differ from one another, sometimes a lot, because copyists cut, added and translated.",
      {t:"Christopher Columbus owned a printed Latin copy and wrote notes in its margins. He hoped to reach the lands it described by sailing west.", lab:"verified", why:"Columbus's annotated copy is in the Biblioteca Colombina in Seville."}
    ]},
    {k:"people", h:"His people", ps:[
      "Niccolò and Maffeo Polo, his father and uncle, who made the first journey east and took him on the second.",
      "Kublai Khan (1215 to 1294), grandson of Genghis Khan, founder of the Yuan dynasty in China, whom Marco served.",
      "Rustichello of Pisa, a writer of Arthurian romances, who shaped the book and added some of its romantic flourishes."
    ]},
    {k:"world", h:"The world around him", ps:[
      "The Mongol Empire, the largest land empire in history, made it possible to travel safely from the Black Sea to China, the 'Pax Mongolica'.",
      "Dante, born about 1265, was his younger contemporary in Italy. Ibn Battuta set out from Tangier in 1325, the year after Marco died.",
      "The Mamluks took Acre, the last crusader city in the Holy Land, in 1291, the year the Polos left China."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "The book shaped European maps of Asia for two centuries and inspired explorers, including Columbus.",
      "The name 'the Million' may come from his nickname, perhaps for the millions he spoke of, or from a family name, Emilione.",
      "Venice's international airport is named after him."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He brought pasta from China to Italy.", lab:"myth", t:"Pasta was known in Italy before he returned. The story was spread by an American pasta trade magazine in 1929."},
      {c:"He never went to China at all.", lab:"disputed", t:"Some historians argued this, noting that he never mentions tea, chopsticks, foot-binding or the Great Wall. Most now think he did go, since many details he gives match Chinese and Persian records."},
      {c:"He described the Great Wall.", lab:"myth", t:"He did not mention it. The great stone walls seen today were built later, under the Ming, and in his time the old earth walls were not a notable sight on his route."},
      {c:"On his deathbed he said: 'I did not tell half of what I saw.'", lab:"tradition", t:"The line comes from Jacopo d'Acqui, a Dominican friar writing some years after his death, who said Marco told friends this. It cannot be checked further."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"The Travels of Marco Polo, translated by Henry Yule, revised by Henri Cordier (1903), volume 1, Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/10636"},
      {n:"The Travels of Marco Polo, Yule and Cordier, volume 2, Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/12410"},
      {n:"Further reading: Frances Wood, Did Marco Polo Go to China? (1995)"},
      {n:"Further reading: Hans Ulrich Vogel, Marco Polo Was in China (2013)"}
    ]}
  ]
},

"charlemagne": {
  hero: "",
  kw: ["Charles the Great","Carolus Magnus","Karl der Grosse","Franks","Carolingian","Aachen","Pope Leo III","emperor 800","Christmas Day 800","Saxons","Verden","Roland","Roncevaux","Einhard","Alcuin","Carolingian minuscule","Harun al-Rashid@people","elephant","Abul-Abbas","Holy Roman Empire"],
  lede: "A Frankish king who fought for over thirty years to build an empire across Western Europe, was crowned emperor in Rome on Christmas Day 800, and pushed a revival of learning even though he never managed to learn to write well.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Charles, later called Charlemagne ('Charles the Great'), was born around 748, the son of Pepin the Short, king of the Franks. He became king in 768, at first sharing the kingdom with his brother Carloman, who died in 771.",
      "Through almost constant war he conquered the Lombards in Italy, the Saxons in Germany, Bavaria and the Avars, and fought in Spain. His realm stretched from the Pyrenees to the Elbe and from the North Sea to central Italy.",
      "On Christmas Day 800, Pope Leo III crowned him emperor in Rome, the first in the West for over 300 years. He made Aachen his capital, gathered scholars to his court and died there in 814."
    ]},
    {k:"early", h:"Early life", ps:[
      {t:"His birth year is uncertain: 742, 747 and 748 have all been proposed. His biographer Einhard admitted he knew nothing of Charlemagne's childhood.", lab:"disputed", why:"Einhard's Life of Charlemagne, chapter 4. A note in an early annal points to 748, which most historians now prefer."},
      "His father Pepin had deposed the last Merovingian king in 751 with the Pope's blessing, founding the Carolingian dynasty.",
      "In 754 Pope Stephen II anointed Pepin and his sons, including the young Charles, at the abbey of Saint-Denis near Paris."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Sole king, 771. When his brother Carloman died, Charles took his lands, and Carloman's widow and sons fled to the Lombards in Italy.",
      "Italy, 773 to 774. At the Pope's request he invaded the Lombard kingdom, besieged Pavia and took the title King of the Lombards.",
      {t:"Roncevaux, 778. Returning from a failed campaign in Spain, his rearguard was ambushed in the Pyrenees by Basques and wiped out. Among the dead was Roland, prefect of the Breton March, later the hero of the epic Song of Roland, which turned the Basques into Muslims.", lab:"verified", why:"Einhard, chapter 9, and the revised version of the Royal Frankish Annals (the original version leaves the defeat out). The Song of Roland was written about 300 years later."},
      {t:"The Saxon wars, 772 to 804. Thirty years of campaigns forced the pagan Saxons to accept Frankish rule and Christianity. In 782 at Verden, after a revolt, he had about 4,500 Saxon prisoners beheaded in a single day, according to the royal annals.", lab:"likely", why:"The Royal Frankish Annals give the figure. A few historians have suggested a copying error, but most accept a mass execution."},
      "Emperor, 800. Pope Leo III, attacked and nearly blinded by enemies in Rome, fled to Charles for protection. Charles came to Rome to restore him, and on Christmas Day, as he rose from prayer in St Peter's, Leo placed a crown on his head and the crowd hailed him as emperor.",
      "Last years, 806 to 814. He planned to divide the empire among his sons, but two died. In 813 he crowned his surviving son Louis himself, at Aachen. He died on 28 January 814, aged about 66, and was buried in his chapel at Aachen."
    ]},
    {k:"works", h:"What he did", ps:[
      "He governed through counts in every district and sent pairs of royal inspectors, the missi dominici, to check on them.",
      "He issued capitularies, written decrees on everything from church discipline to the running of royal farms.",
      {t:"He gathered scholars from across Europe: Alcuin of York, Paul the Deacon from Italy, Theodulf from Spain. Monasteries copied ancient Latin texts, and many Roman works survive only because Carolingian scribes copied them.", lab:"verified", why:"Most surviving manuscripts of many classical authors date from the 9th century, as studies of manuscript history show."},
      "Carolingian minuscule, a clear new script with lower-case letters and spaces between words, spread from his court. Our lower-case printed letters descend from it.",
      "He built the Palatine Chapel at Aachen, modelled on churches in Ravenna, which still stands inside Aachen Cathedral."
    ]},
    {k:"people", h:"His people", ps:[
      "Einhard (about 775 to 840), a courtier who wrote his biography, modelled on Suetonius's lives of the Roman emperors.",
      "Alcuin of York (about 735 to 804), an English scholar who ran the palace school and later the abbey of Tours.",
      {t:"Harun al-Rashid, the Abbasid caliph in Baghdad, exchanged embassies with him and sent him an elephant named Abul-Abbas, which arrived in 802 and died in 810.", lab:"verified", why:"Reported in the Royal Frankish Annals and by Einhard. No Arabic source mentions the embassies."},
      "He married at least four times and had several concubines and about 18 children. He kept his daughters at court and did not let them marry."
    ]},
    {k:"world", h:"The world around him", ps:[
      "The Abbasid Caliphate in Baghdad and the Byzantine Empire in Constantinople were far richer than his realm. In 797 the Byzantine Empress Irene became the first woman to rule there alone, which helped the Pope argue the imperial throne was empty.",
      "Vikings began raiding England in 793, with the attack on Lindisfarne, and soon reached his coasts.",
      "In China the Tang dynasty was still ruling. In Japan the capital moved to Heian (Kyoto) in 794."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "His empire split among his grandsons by the Treaty of Verdun in 843, roughly into the lands that became France, Germany and a middle strip between them.",
      "The title of emperor in the West continued, becoming the Holy Roman Empire, which lasted until 1806.",
      "Both France and Germany claim him as a founder, and he is called the 'Father of Europe'. The Charlemagne Prize, awarded by the city of Aachen since 1950, honours work for European unity."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He could not read.", lab:"disputed", t:"Einhard says he spoke Latin well, understood Greek, and kept writing tablets under his pillow to practise writing, but started too late and did not succeed well. He could probably read; he struggled to write."},
      {c:"The Pope surprised him with the crown.", lab:"disputed", t:"Einhard says he would not have gone to church that day had he known what the Pope planned. Most historians think the coronation was agreed in advance, and Einhard was showing his modesty."},
      {c:"He was unusually tall.", lab:"likely", t:"Einhard calls him tall. A 2010 study of a shin bone from his tomb estimated about 1.84 metres, very tall for his time, though not the giant of later legend."},
      {c:"His beard was long and white.", lab:"myth", t:"Einhard does not mention a beard, and coins show him with a moustache. The 'emperor with the flowing beard' comes from the Song of Roland and later art."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Einhard and Notker the Stammerer, Early Lives of Charlemagne, translated by A. J. Grant (1905), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/48870"},
      {n:"Royal Frankish Annals (about 741 to 829), public domain translations"},
      {n:"The Song of Roland, translated by C. K. Scott Moncrieff (1919), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/391"},
      {n:"Further reading: Rosamond McKitterick, Charlemagne: The Formation of a European Identity (2008)"},
      {n:"Further reading: Johannes Fried, Charlemagne (2016)"}
    ]}
  ]
},

"rembrandt": {
  hero: "",
  kw: ["Rembrandt van Rijn","Night Watch","self-portraits","Leiden","Amsterdam","Saskia","Titus","Hendrickje","chiaroscuro","etching","bankruptcy","Anatomy Lesson","Dutch Golden Age","Jewish Bride","Rijksmuseum","Syndics"],
  lede: "A miller's son from Leiden who became the most sought-after painter in Amsterdam, went bankrupt, outlived his wife, his partner and his son, and painted himself about forty times, tracing his own ageing face with brutal honesty.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Rembrandt Harmenszoon van Rijn was born in Leiden in 1606, during the Dutch Republic's Golden Age. By his late twenties he was the leading portrait painter in Amsterdam.",
      "He painted portraits, Bible stories, history scenes and landscapes, and made some of the greatest etchings ever produced. His use of light and shadow, and his insight into people, set him apart.",
      "Money troubles led to bankruptcy in 1656. He lost his house and collection, and his wife, his partner Hendrickje and his son Titus all died before him. He died in Amsterdam in 1669, aged 63."
    ]},
    {k:"early", h:"Early life", ps:[
      "He was born on 15 July 1606, the ninth child of a miller whose windmill stood on the Rhine at Leiden, and a baker's daughter.",
      "He was enrolled at Leiden University at 14 but left to train as a painter, first in Leiden and then for six months in Amsterdam with Pieter Lastman, a painter of history scenes.",
      {t:"Back in Leiden, he shared a studio with the painter Jan Lievens. A visiting statesman, Constantijn Huygens, praised both young men and helped Rembrandt win commissions from the Prince of Orange.", lab:"verified", why:"Huygens wrote about them in his Latin autobiography of about 1630."}
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Amsterdam, 1631. He moved to Amsterdam and worked with the art dealer Hendrick Uylenburgh. The Anatomy Lesson of Dr Nicolaes Tulp (1632), a group portrait of surgeons around a corpse, made his name.",
      "Saskia, 1634. He married Uylenburgh's cousin Saskia van Uylenburgh, daughter of a wealthy family. Three of their four children died in infancy; only Titus, born 1641, survived.",
      "The house, 1639. He bought a grand house on the Jodenbreestraat, now the Rembrandt House Museum, for 13,000 guilders, mostly on credit, and filled it with art, armour, shells and curiosities.",
      {t:"The Night Watch and Saskia's death, 1642. He finished his huge group portrait of a civic militia company, now called The Night Watch. That same year Saskia died, aged 29.", lab:"verified", why:"Dates from the documents; the painting is dated 1642."},
      "Hendrickje, 1640s to 1663. Hendrickje Stoffels, his housekeeper, became his partner. Saskia's will would have cut his income if he remarried, so they never married. In 1654 the church council summoned her and rebuked her for living with Rembrandt unmarried; the record uses the word 'whoredom'. They had a daughter, Cornelia.",
      "Bankruptcy, 1656. He could not pay his debts, including what he still owed on the house. His collection and then the house were sold at auction between 1656 and 1658. Hendrickje and Titus set up an art business that employed him so his creditors could not take his paintings.",
      "Last years. Hendrickje died in 1663, probably of plague, and Titus in 1668. Rembrandt died on 4 October 1669 and was buried in an unmarked rented grave in the Westerkerk."
    ]},
    {k:"works", h:"The work", ps:[
      "About 80 self-portraits in paint, etching and drawing, from a curly-haired young man to the lined, frank faces of his last years.",
      "The Night Watch (1642): its real title names Captain Frans Banninck Cocq and his militia company. It shows them moving out, in dramatic light, instead of lined up in rows.",
      "Etchings such as the Hundred Guilder Print and The Three Crosses, which he reworked again and again.",
      "Late works such as The Jewish Bride and The Return of the Prodigal Son, painted with thick, rough paint that his critics found unfinished."
    ]},
    {k:"people", h:"His people", ps:[
      "Saskia van Uylenburgh (1612 to 1642), his wife, whom he drew and painted many times.",
      "Titus van Rijn (1641 to 1668), his son, who appears in several tender portraits.",
      "Hendrickje Stoffels (1626 to 1663), his partner, probably the model for some of his most intimate paintings.",
      "Pupils including Gerrit Dou, Ferdinand Bol, Govert Flinck and Carel Fabritius, who may have taught Vermeer, though that is unproven."
    ]},
    {k:"world", h:"The world around him", ps:[
      "The Dutch Republic, newly independent from Spain, was the richest trading nation in Europe, with the Dutch East India Company trading from Japan to South Africa.",
      "Middle-class Dutch buyers wanted portraits, landscapes and still lifes, creating one of the first open art markets. Vermeer, in Delft, was a younger contemporary.",
      "His neighbourhood was Amsterdam's Jewish quarter, home to refugees from Spain and Portugal, and he drew and painted his neighbours."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "He is considered the greatest painter of the Dutch Golden Age. The Rembrandt Research Project, from 1968, spent decades sorting real Rembrandts from his pupils' work.",
      "The Night Watch is the centrepiece of the Rijksmuseum, where Operation Night Watch, from 2019, studied and restored it in public view.",
      "In 2019, 350 years after his death, the Rijksmuseum showed all its Rembrandts together for the first time: 22 paintings, 60 drawings and more than 300 prints."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"The Night Watch shows a night scene.", lab:"myth", t:"It is set in daylight. Darkened varnish made it look like night, and it got its nickname in the late 18th century."},
      {c:"The Night Watch ruined his career because the sitters hated it.", lab:"myth", t:"There is no evidence the militia company was unhappy. His money problems came from overspending and a changing market."},
      {c:"He died a forgotten pauper.", lab:"disputed", t:"He was poor and in debt, but still received commissions and visitors, including Cosimo de' Medici, the future Grand Duke of Tuscany, in 1667."},
      {c:"The Man with the Golden Helmet is one of his greatest works.", lab:"myth", t:"Once his most famous painting in Berlin, it was reattributed in 1985 to his circle, not Rembrandt himself."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Rijksmuseum, Amsterdam: collection and research (free to view)", u:"https://www.rijksmuseum.nl/en"},
      {n:"Rembrandt House Museum, Amsterdam", u:"https://www.rembrandthuis.nl/en/"},
      {n:"Émile Michel, Rembrandt: His Life, His Work, and His Time (1894), public domain"},
      {n:"Further reading: Simon Schama, Rembrandt's Eyes (1999)"},
      {n:"Further reading: Gary Schwartz, The Rembrandt Book (2006)"}
    ]}
  ]
},

"bach": {
  hero: "",
  kw: ["Johann Sebastian Bach","Leipzig","St Thomas","Thomaskantor","cantatas","St Matthew Passion","Mass in B minor","Brandenburg Concertos","Well-Tempered Clavier","Goldberg Variations","Art of Fugue","organ","Toccata and Fugue@myths","Weimar","Köthen","Arnstadt","Lübeck","Buxtehude","Mendelssohn@legacy","Anna Magdalena","Voyager@legacy"],
  lede: "An orphan from a family of musicians who spent his whole life in a small corner of Germany as an organist and church music director, wrote over a thousand works, and was nearly forgotten before being hailed as the greatest composer of all.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Johann Sebastian Bach was born in Eisenach, in Thuringia, in 1685, into a family that had produced musicians for generations. Orphaned at ten, he was raised by his elder brother.",
      "He worked as an organist and court musician in Arnstadt, Mühlhausen, Weimar and Köthen, and from 1723 until his death as cantor of St Thomas's School and music director for the churches of Leipzig.",
      "He wrote cantatas, Passions, the Mass in B minor, concertos, keyboard music and organ works. He was respected as an organist in his lifetime, but his music fell out of fashion after his death in 1750 until a revival in the 19th century."
    ]},
    {k:"early", h:"Early life", ps:[
      "He was born on 21 March 1685 (by the calendar then used in Protestant Germany), the youngest of eight children of Johann Ambrosius Bach, a town musician.",
      "His mother died in 1694 and his father the next year. He moved to Ohrdruf to live with his brother Johann Christoph, an organist, who taught him keyboard.",
      {t:"Just before he turned 15 he travelled about 350 kilometres north to Lüneburg, probably on foot, to take up a choral scholarship at St Michael's School.", lab:"likely", why:"The move is recorded in school registers and in the Obituary (1754) by his son C. P. E. Bach and pupil J. F. Agricola. That he walked is an inference from his poverty; no source says so."}
    ]},
    {k:"turns", h:"Turning points", ps:[
      {t:"Lübeck, 1705. As a young organist in Arnstadt, he got four weeks' leave to hear the great organist Dieterich Buxtehude in Lübeck, about 400 kilometres away, and stayed nearly four months. His employers were not pleased.", lab:"verified", why:"The Arnstadt consistory's minutes of February 1706 record their complaint."},
      "Weimar, 1708 to 1717. As court organist and later concertmaster he wrote many of his great organ works. When he tried to leave for a better job in Köthen, the Duke had him jailed for nearly a month for insisting.",
      "Köthen, 1717 to 1723. The prince there loved music but belonged to a church that wanted plain worship, so Bach wrote instrumental music, including the Brandenburg Concertos and the first book of The Well-Tempered Clavier.",
      "Loss and remarriage, 1720 to 1721. Returning from a journey, he found his first wife, Maria Barbara, dead and already buried. In 1721 he married Anna Magdalena Wilcke, a singer. He had 20 children in total, of whom 10 survived to adulthood.",
      "Leipzig, 1723 to 1750. He became cantor of St Thomas's, responsible for music in the city's main churches. In his first years he wrote a new cantata nearly every week, and the St John and St Matthew Passions. He often clashed with the town council, who had wanted a more famous composer, Telemann.",
      {t:"Potsdam, 1747. King Frederick the Great gave him a theme to improvise on. Bach later wrote it out as The Musical Offering and sent it to the king.", lab:"verified", why:"Reported in newspapers at the time and in the dedication of the published work."},
      "Death, 1750. His eyesight failed, and two operations by a travelling English eye surgeon, John Taylor, left him nearly blind and weak. He died on 28 July 1750."
    ]},
    {k:"works", h:"The work", ps:[
      "About 200 surviving church cantatas, the St Matthew Passion (1727) and St John Passion (1724), the Christmas Oratorio and the Mass in B minor.",
      "The Brandenburg Concertos (dedicated 1721), violin and keyboard concertos, and orchestral suites.",
      "Keyboard works: The Well-Tempered Clavier, two books of 24 preludes and fugues in every key, the Goldberg Variations and the unfinished Art of Fugue.",
      "Solo works for violin and cello, among the most demanding and admired in the repertoire.",
      "He signed many sacred scores 'S.D.G.', Soli Deo Gloria, 'to God alone the glory'."
    ]},
    {k:"people", h:"His people", ps:[
      "Anna Magdalena Bach (1701 to 1760), his second wife, a professional singer who copied many of his scores.",
      "His sons Wilhelm Friedemann, Carl Philipp Emanuel and Johann Christian were all famous composers. In their day they were better known than their father.",
      "Georg Philipp Telemann, a friend and godfather to C. P. E. Bach, the most famous German composer of the time.",
      "Handel, born the same year about 130 kilometres away. The two never met, though Bach tried twice."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Germany was a patchwork of hundreds of states, each with its own court and church. Lutheran music was central to worship.",
      "Vivaldi in Venice and Handel in London were his great contemporaries; Bach arranged several of Vivaldi's concertos.",
      "Isaac Newton died in 1727, the year of the St Matthew Passion."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "After his death his music was studied by experts, including Mozart and Beethoven, but rarely performed.",
      "In 1829 the 20-year-old Felix Mendelssohn conducted the St Matthew Passion in Berlin, its first major public performance since Bach's death, starting a Bach revival.",
      "In 1977 his music was included on the Golden Record sent into space aboard the Voyager probes: the first movement of Brandenburg Concerto No. 2, and pieces for violin and keyboard."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He was forgotten completely until Mendelssohn.", lab:"myth", t:"Musicians never forgot him; Mozart, Beethoven and others studied his keyboard works. The public, though, rarely heard his music."},
      {c:"The famous Toccata and Fugue in D minor is certainly by Bach.", lab:"disputed", t:"It survives only in later copies, and some scholars think it was written by someone else or is an arrangement."},
      {c:"He was a solemn church musician who wrote only sacred music.", lab:"myth", t:"He loved coffee, wrote a comic 'Coffee Cantata', played in Leipzig's coffeehouse concerts and ran a busy household. He also had a temper: at 20 he drew his sword when a student bassoonist he had insulted attacked him in the street with a stick."},
      {c:"The only authentic portrait shows him holding a puzzle canon.", lab:"likely", t:"Elias Gottlob Haussmann's portraits of 1746 and 1748 are the only ones widely accepted as showing him from life."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Johann Nikolaus Forkel, Johann Sebastian Bach: His Life, Art, and Work (1802), translated by Charles Sanford Terry (1920), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/35041"},
      {n:"Philipp Spitta, Johann Sebastian Bach: His Work and Influence on the Music of Germany, translated by Clara Bell and J. A. Fuller-Maitland (1884), public domain"},
      {n:"C. P. E. Bach and J. F. Agricola, Obituary of J. S. Bach (1754), public domain"},
      {n:"Bach-Archiv Leipzig and Bach Digital: his manuscripts online (free to view)", u:"https://www.bach-digital.de"},
      {n:"Further reading: Christoph Wolff, Johann Sebastian Bach: The Learned Musician (2000)"},
      {n:"Further reading: John Eliot Gardiner, Music in the Castle of Heaven (2013)"}
    ]}
  ]
},

"catherine-the-great": {
  hero: "",
  kw: ["Sophie of Anhalt-Zerbst","Peter III","coup","1762","Orlov","Potemkin","Nakaz","Instruction","Pugachev","Crimea","Partitions of Poland","Hermitage","Voltaire","Diderot","Smolny","smallpox","inoculation","Enlightenment","Potemkin villages@myths","horse@myths"],
  lede: "A minor German princess who married into the Russian royal family, overthrew her own husband, and ruled the largest empire on earth for 34 years, writing to Voltaire about reason while her empire kept millions of serfs in bondage.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Catherine was born Sophie Friederike Auguste of Anhalt-Zerbst in Stettin, Prussia (today Szczecin, Poland), in 1729. At 14 she was brought to Russia to marry the heir to the throne, the future Peter III.",
      "In 1762, months after Peter became emperor, she led a coup with the guards regiments and took the throne for herself. Peter died in custody eight days later, almost certainly killed by his guards.",
      "She ruled until her death in 1796. Russia gained Crimea, the northern Black Sea coast and much of Poland, and she made her court a centre of Enlightenment art, letters and collecting. She is the only Russian ruler after Peter I to be called 'the Great'."
    ]},
    {k:"early", h:"Early life", ps:[
      "Her father was a Prussian general and minor prince. Her mother was ambitious and well connected, and her French governess gave her a love of books and conversation.",
      "Empress Elizabeth of Russia chose her as a bride for her nephew Peter in 1744. Sophie converted to Russian Orthodoxy, took the name Ekaterina (Catherine), and worked hard at Russian.",
      {t:"The marriage, in 1745, was unhappy. In her memoirs she describes Peter as childish, playing with toy soldiers in their bedroom, and herself spending years reading Voltaire, Montesquieu and Tacitus.", lab:"likely", why:"Her memoirs are the main source and were written partly to justify the coup, so their picture of Peter is one-sided."},
      "Her son Paul, the heir, was born in 1754. Empress Elizabeth took him away to raise herself."
    ]},
    {k:"turns", h:"Turning points", ps:[
      {t:"The coup, June 1762. Peter III, emperor since January, made peace with Prussia, Russia's enemy, and was rumoured to plan to divorce Catherine. With the Orlov brothers and the guards regiments she declared herself empress in St Petersburg. Peter abdicated.", lab:"verified", why:"The coup and abdication are recorded in official documents and many eyewitness letters."},
      {t:"Peter's death, July 1762. He died in custody at Ropsha, officially of 'haemorrhoidal colic'. Most historians believe he was killed by his guards, led by Alexei Orlov. Whether Catherine ordered it is unknown.", lab:"disputed", why:"A letter said to be from Orlov admitting the killing survives only as a later copy, and its authenticity is debated."},
      "The Instruction (Nakaz), 1767. She wrote a long guide for a commission to reform Russia's laws, borrowing heavily from Montesquieu and the Italian jurist Beccaria. It argued against torture and for equality before the law. The commission met, debated for a year and a half, and was dissolved without producing a new code.",
      "Inoculation, 1768. She had the English doctor Thomas Dimsdale inoculate her and her son against smallpox, a risky procedure, to set an example for her subjects.",
      "Pugachev's Rebellion, 1773 to 1775. A Cossack, Yemelyan Pugachev, claimed to be the dead Peter III and led a huge rising of Cossacks, serfs and peoples of the Volga and Urals. It was crushed and Pugachev was executed in Moscow.",
      "Crimea, 1783. After wars with the Ottoman Empire, Russia annexed the Crimean Khanate. Her partner and minister Grigory Potemkin built new towns and the Black Sea fleet at Sevastopol.",
      "The Partitions of Poland, 1772, 1793 and 1795. With Prussia, and in 1772 and 1795 also Austria, she divided Poland-Lithuania until it disappeared from the map.",
      "Death, November 1796. She died of a stroke at the Winter Palace, aged 67, and was succeeded by her son Paul."
    ]},
    {k:"works", h:"What she built and wrote", ps:[
      "The Hermitage. She bought whole collections of paintings from across Europe, starting in 1764, and housed them beside the Winter Palace. It is now one of the largest museums in the world.",
      "The Smolny Institute (1764), the first state school for girls in Russia.",
      "Letters. She corresponded with Voltaire for about 15 years and with the German writer Friedrich Melchior Grimm for decades. She bought Diderot's library when he needed money, paid him to keep it, and invited him to St Petersburg.",
      "Her own writing: the Instruction, plays, children's stories for her grandsons, satirical journalism and her memoirs, which were first published in 1859."
    ]},
    {k:"people", h:"Her people", ps:[
      "Peter III (1728 to 1762), her husband, emperor for six months.",
      "Grigory Orlov (1734 to 1783), her lover and an organiser of the coup, father of her son Alexei Bobrinsky.",
      "Grigory Potemkin (1739 to 1791), her partner, general and governor of the south, possibly her secret husband.",
      "Paul I (1754 to 1801), her son and successor, who resented her and was himself killed in a palace coup.",
      "Princess Ekaterina Dashkova (1743 to 1810), friend and fellow plotter, later head of the Academy of Sciences, the first woman in the world to lead one."
    ]},
    {k:"world", h:"The world around her", ps:[
      "Most Russians were serfs, bound to the land and to their owners. Under Catherine serfdom grew, spreading into Ukraine, and she gave hundreds of thousands of state peasants to her favourites.",
      "Elsewhere in Europe the Enlightenment was questioning kings and churches. During her reign the American colonies won independence and the French Revolution began, which turned her firmly against radical ideas.",
      "Her contemporaries on thrones included Frederick the Great of Prussia and Maria Theresa of Austria."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "Russia's borders grew by about 520,000 square kilometres in her reign. Odessa, Sevastopol and other southern cities were founded or rebuilt then.",
      "She is remembered as an 'enlightened despot', a ruler who admired reform but kept absolute power and expanded serfdom.",
      "The Hermitage's collections, built on her purchases, remain her most visible gift to the world."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"She died having sex with a horse.", lab:"myth", t:"She died after a stroke, in bed, a day after collapsing. The horse story is a slander spread after her death, with no evidence."},
      {c:"She died on the toilet.", lab:"disputed", t:"She was found collapsed in her dressing room or closet. Some accounts mention a commode. She died the next day in bed."},
      {c:"Potemkin built fake villages to fool her on her 1787 tour of Crimea.", lab:"disputed", t:"The story comes from rumours spread by his enemies and by foreign diplomats. Towns were spruced up for her visit, as for any royal tour, but historians find no evidence of painted fronts with nothing behind."},
      {c:"She had hundreds of lovers.", lab:"myth", t:"Historians count about a dozen favourites over 44 years, usually one at a time. The exaggeration began with enemies and foreign gossip."},
      {c:"She freed the serfs.", lab:"myth", t:"She discussed reform but extended serfdom. Russian serfs were freed only in 1861, by Alexander II."},
      {c:"She was Russian.", lab:"myth", t:"She was German-born with not a drop of Russian blood, but she made a point of speaking Russian, keeping Orthodox rites, and presenting herself as a Russian ruler."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Memoirs of the Empress Catherine II, written by herself, with a preface by Alexander Herzen (English translation 1859), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/46407"},
      {n:"Catherine II, The Instruction (Nakaz) of 1767, English translation by Michael Tatischeff (1768), public domain"},
      {n:"William Tooke, The Life of Catharine II, Empress of Russia (1798), public domain"},
      {n:"State Hermitage Museum, St Petersburg: history of the collection", u:"https://www.hermitagemuseum.org/"},
      {n:"Further reading: Isabel de Madariaga, Russia in the Age of Catherine the Great (1981)"},
      {n:"Further reading: Robert K. Massie, Catherine the Great: Portrait of a Woman (2011)"}
    ]}
  ]
},

"jane-austen": {
  hero: "",
  kw: ["Pride and Prejudice","Sense and Sensibility","Emma","Persuasion","Mansfield Park","Northanger Abbey","Steventon","Chawton","Bath","Winchester","Cassandra","By a Lady","Elizabeth Bennet","Mr Darcy","free indirect","Regency","writing desk","Lefroy@myths","Prince Regent"],
  lede: "A clergyman's daughter who wrote six novels at a small table in a busy family house, published them without her name, and turned the comedy of courtship and money into the modern novel.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Jane Austen was born on 16 December 1775 at Steventon rectory in Hampshire, England, the seventh of eight children of the Reverend George Austen and his wife Cassandra.",
      "Her four novels published in her lifetime, Sense and Sensibility (1811), Pride and Prejudice (1813), Mansfield Park (1814) and Emma (1815), appeared as 'By a Lady' or 'By the Author of...'. Northanger Abbey and Persuasion came out just after her death.",
      "She never married. She died in Winchester on 18 July 1817, aged 41, and is buried in Winchester Cathedral."
    ]},
    {k:"early", h:"Early life", ps:[
      "Steventon rectory was full of boys: her father took in pupils to make ends meet. The family read novels aloud, which some respectable households thought frivolous, and put on plays in the barn.",
      "Jane and her only sister Cassandra were sent briefly to schools in Oxford, Southampton and Reading. Otherwise she was taught at home and read freely in her father's library of about 500 books.",
      "From about age 12 she wrote comic stories, plays and parodies for her family, later copied into three notebooks she called Volume the First, Second and Third. They survive."
    ]},
    {k:"turns", h:"Turning points", ps:[
      {t:"Tom Lefroy, 1796. She flirted at local balls with a young Irishman, Tom Lefroy, and wrote to Cassandra joking about it. According to later family accounts his relatives sent him away, since he could not afford to marry a woman with no money.", lab:"likely", why:"Her letters of January 1796 mention him. The reason he left comes from family recollections written down decades later. Lefroy, in old age, reportedly said he had loved her, 'but it was a boyish love'."},
      "First drafts, 1795 to 1799. She wrote early versions of Sense and Sensibility (as Elinor and Marianne), Pride and Prejudice (as First Impressions) and Northanger Abbey (as Susan). Her father offered First Impressions to a publisher in 1797, who declined without reading it.",
      "Bath, 1801. Her father retired and moved the family to Bath. She wrote little there.",
      "A proposal, 1802. Harris Bigg-Wither, a wealthy younger brother of friends, proposed. She accepted, then withdrew her acceptance the next morning.",
      "Her father's death, 1805. Jane, Cassandra and their mother depended on the brothers for money and moved between lodgings.",
      "Chawton, 1809. Her brother Edward, adopted by rich relatives, gave them a cottage in Chawton, Hampshire. There she revised her early novels and wrote three more.",
      "Publication, 1811 to 1815. Her brother Henry, a banker, handled publishers. Sense and Sensibility made her about £140; Pride and Prejudice sold its copyright for £110.",
      "Illness and death, 1816 to 1817. She fell ill, possibly with Addison's disease or a lymphoma, and moved to Winchester for treatment. She left Sanditon, a new novel, unfinished."
    ]},
    {k:"works", h:"The work", ps:[
      "Sense and Sensibility (1811): two sisters, one restrained and one passionate, lose their home and face heartbreak.",
      "Pride and Prejudice (1813): Elizabeth Bennet and Mr Darcy misjudge each other. Its opening line about a single man with a good fortune is one of the most quoted in English.",
      "Mansfield Park (1814), Emma (1815), and Northanger Abbey and Persuasion (published December 1817, dated 1818).",
      "She perfected 'free indirect speech', slipping into a character's thoughts without quotation marks, so readers see the world through a heroine's mistakes.",
      "About 160 letters to Cassandra and others survive. Cassandra burned many more in the 1840s, long after Jane's death."
    ]},
    {k:"people", h:"Her people", ps:[
      "Cassandra Austen (1773 to 1845), her sister and closest friend, an amateur artist who made the only certain portraits of her.",
      "Henry Austen (1771 to 1850), her brother, banker and literary agent, who revealed her name in a 'Biographical Notice' after her death.",
      "Francis and Charles Austen, brothers who served in the Royal Navy in the wars against Napoleon. Both became admirals, and the navy shapes Persuasion.",
      "James Edward Austen-Leigh (1798 to 1874), her nephew, who wrote the first full memoir of her in 1869."
    ]},
    {k:"world", h:"The world around her", ps:[
      "Britain was at war with France for most of her adult life, from 1793 to 1815. Officers and sailors fill her novels, though battles stay offstage.",
      "Women of her class could rarely earn money or inherit land. Marriage was a financial decision, which is why money is counted so precisely in her books.",
      "Her contemporaries included Walter Scott, who praised her 'exquisite touch', and the poets Wordsworth, Byron and Keats. The Prince Regent was a fan, and she reluctantly dedicated Emma to him."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "Her novels have been in print continuously since 1833 and have been adapted for film and television countless times.",
      "Her lively, ironic style and focus on ordinary lives shaped the novel that followed, from George Eliot to today.",
      "Her portrait appeared on the Bank of England £10 note from 2017."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"She hid her writing under a blotter when a creaking door warned her someone was coming.", lab:"disputed", t:"This comes from her nephew's memoir of 1869, written decades later. It may be family legend; her family knew perfectly well that she wrote."},
      {c:"She was a sweet, quiet spinster.", lab:"myth", t:"Her letters are sharp, funny and sometimes cruel. Her family softened her image after her death."},
      {c:"Tom Lefroy was the great love of her life.", lab:"disputed", t:"It was a brief flirtation over a few weeks in 1796. Films have built a romance on very little evidence."},
      {c:"Her novels made her rich and famous.", lab:"myth", t:"She earned about £600 to £700 in her lifetime and her name was unknown to most readers until after she died."},
      {c:"She was killed by arsenic poisoning.", lab:"disputed", t:"The idea was raised in 2011 and again in 2017, when the British Library tested spectacles thought to be hers. It has not convinced medical historians, and arsenic was then a common ingredient in medicines. Her symptoms fit an illness such as Addison's disease or lymphoma."},
      {c:"Her books are just romances.", lab:"myth", t:"They are comedies of manners about money, class, family and judgement. Critics from Walter Scott onward have praised their realism and moral seriousness."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Jane Austen, Pride and Prejudice (1813), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/1342"},
      {n:"Jane Austen, Emma (1815), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/158"},
      {n:"The Letters of Jane Austen, selected from Lord Brabourne's edition by Sarah Chauncey Woolsey, writing as Susan Coolidge (1892), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/42078"},
      {n:"James Edward Austen-Leigh, A Memoir of Jane Austen (1869), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/17797"},
      {n:"William and Richard Arthur Austen-Leigh, Jane Austen: Her Life and Letters, a Family Record (1913), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/22536"},
      {n:"Further reading: Claire Tomalin, Jane Austen: A Life (1997)"},
      {n:"Further reading: Deirdre Le Faye, A Chronology of Jane Austen and Her Family (2006)"}
    ]}
  ]
},

"douglass": {
  hero: "",
  kw: ["Frederick Bailey","slavery","Maryland","Baltimore","Covey","escape","1838","Anna Murray","Narrative","North Star","abolition","Garrison","What to the Slave","Fourth of July","Lincoln","Civil War","54th Massachusetts","Cedar Hill","photograph","suffrage","Seneca Falls"],
  lede: "Born into slavery in Maryland, he taught himself to read, fought back against a slave-breaker, escaped disguised as a sailor, and became the most powerful voice against slavery in America, and the most photographed American of his century.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Frederick Douglass was born Frederick Augustus Washington Bailey on a plantation in Talbot County, Maryland, probably in February 1818. He was enslaved.",
      "In 1838, aged about 20, he escaped to New York, took the name Douglass, and soon became a lecturer for the anti-slavery movement. His Narrative of the Life of Frederick Douglass (1845) became a bestseller.",
      "He published newspapers, met President Lincoln, recruited Black soldiers in the Civil War, and later served as US Marshal and as minister to Haiti. He died at his home in Washington, DC, on 20 February 1895."
    ]},
    {k:"early", h:"Early life", ps:[
      "He did not know his birthday. 'I have no accurate knowledge of my age,' he wrote, explaining that enslavers kept that knowledge from the people they owned. He later chose 14 February.",
      "He was separated from his mother, Harriet Bailey, as an infant, and saw her only a few times, at night. He was raised by his grandmother, Betsy Bailey. His father was white, possibly his enslaver.",
      "At about eight he was sent to Baltimore to serve the Auld family. Sophia Auld began to teach him the alphabet until her husband forbade it, saying learning would 'spoil' him. Douglass wrote that this showed him reading was 'the pathway from slavery to freedom', and he taught himself with help from white boys in the street.",
      "With money from shining shoes he bought a copy of The Columbian Orator, a schoolbook of speeches, and studied its arguments about liberty."
    ]},
    {k:"turns", h:"Turning points", ps:[
      {t:"Covey, 1834. Sent to Edward Covey, known as a 'slave-breaker', he was beaten weekly until, at about 16, he fought back. Covey never whipped him again. Douglass called it the turning point of his life: 'You have seen how a man was made a slave; you shall see how a slave was made a man.'", lab:"likely", why:"The account is Douglass's own, from his Narrative. No independent record exists, but it fits what is known about Covey."},
      "Escape, 3 September 1838. Working in the Baltimore shipyards, he borrowed the papers of a free Black sailor, dressed in a sailor's outfit, and took trains and a ferry to New York. Anna Murray, a free Black woman who had helped pay for the trip, joined him and they married.",
      "First speech, 1841. At an anti-slavery meeting in Nantucket he spoke about his life. William Lloyd Garrison heard him, and the Massachusetts Anti-Slavery Society hired him as a lecturer.",
      "The Narrative, 1845. Because audiences doubted that such an eloquent speaker had been enslaved, he published his life story with real names and places. It made him famous but put him at risk of capture, so he sailed to Britain and Ireland, where supporters bought his freedom in 1846.",
      "The North Star, 1847. Back in the United States, he moved to Rochester, New York, and started his own newspaper against Garrison's advice. By 1851 the two had split over whether the Constitution could be used against slavery.",
      "'What to the Slave Is the Fourth of July?', 1852. In Rochester he gave his most famous speech, telling a white audience that their celebration of liberty was, to the enslaved, 'a sham'.",
      "The Civil War, 1861 to 1865. He pressed Lincoln to make the war about ending slavery and to enlist Black soldiers. Two of his sons, Lewis and Charles, enlisted in the 54th Massachusetts Regiment. He met Lincoln at the White House in 1863, 1864 and 1865.",
      "Later life. He served as US Marshal for the District of Columbia (1877), Recorder of Deeds, and minister to Haiti (1889 to 1891). Anna died in 1882 and in 1884 he married Helen Pitts, a white activist, which caused a scandal."
    ]},
    {k:"works", h:"The work", ps:[
      "Three autobiographies: Narrative of the Life of Frederick Douglass, an American Slave (1845), My Bondage and My Freedom (1855) and Life and Times of Frederick Douglass (1881, revised 1892).",
      "The Heroic Slave (1853), a novella about a real ship revolt.",
      "Newspapers: The North Star, Frederick Douglass' Paper and Douglass' Monthly.",
      "Thousands of speeches. He was one of the most celebrated orators of his age.",
      "He sat for at least 160 photographs, more than any other American of his time, deliberately showing a dignified Black man to counter racist caricatures."
    ]},
    {k:"people", h:"His people", ps:[
      "Anna Murray Douglass (about 1813 to 1882), his wife, who helped fund his escape and kept their home a stop on the Underground Railroad.",
      "William Lloyd Garrison (1805 to 1879), abolitionist publisher, his early mentor and later rival.",
      "Harriet Tubman, who led people out of slavery and whom he praised in an 1868 letter.",
      "Susan B. Anthony and Elizabeth Cady Stanton. Douglass spoke for women's right to vote at the Seneca Falls Convention in 1848.",
      "John Brown, the radical abolitionist, who tried to recruit him for the raid on Harpers Ferry in 1859. Douglass refused."
    ]},
    {k:"world", h:"The world around him", ps:[
      "About four million people were enslaved in the United States in 1860. The Fugitive Slave Act of 1850 meant even escaped people in the North could be seized and sent back.",
      "Britain had passed its act abolishing slavery in most of its empire in 1833, and his lecture tour there drew large, sympathetic crowds.",
      "After the war, the 13th, 14th and 15th Amendments ended slavery, granted citizenship and gave Black men the vote, but by his death those rights were being stripped away in the South."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "His Narrative remains one of the most read books in American history and a founding text of African American literature.",
      "His house at Cedar Hill in Washington, DC, is a national historic site.",
      "He is remembered not only as an abolitionist but as a campaigner for women's rights, Irish freedom and equal rights for all."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He was taught to read by his enslavers.", lab:"myth", t:"Sophia Auld taught him only the alphabet before her husband stopped her. He taught himself the rest, often in secret."},
      {c:"Lincoln and Douglass were allies from the start.", lab:"myth", t:"Douglass sharply criticised Lincoln's slow move toward emancipation. Their respect grew during the war."},
      {c:"He escaped via the Underground Railroad.", lab:"disputed", t:"He escaped alone by train and boat. In New York he was helped by David Ruggles, part of the network, and he later aided it himself."},
      {c:"He was born in 1817.", lab:"myth", t:"Douglass himself believed this, and older books repeat it. His enslaver's records, found in the 20th century, give February 1818."},
      {c:"He took the name Douglass from a famous Scottish family.", lab:"likely", t:"A friend suggested it from Walter Scott's poem The Lady of the Lake, where the Douglas family are heroes. He added an extra 's'."},
      {c:"He was buried in Washington.", lab:"myth", t:"He died in Washington but is buried in Mount Hope Cemetery in Rochester, New York, beside Anna."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Frederick Douglass, Narrative of the Life of Frederick Douglass, an American Slave (1845), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/23"},
      {n:"Frederick Douglass, My Bondage and My Freedom (1855), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/202"},
      {n:"Frederick Douglass, Life and Times of Frederick Douglass (1881/1892), public domain"},
      {n:"Frederick Douglass Papers, Library of Congress (free to view)", u:"https://www.loc.gov/collections/frederick-douglass-papers/"},
      {n:"Frederick Douglass National Historic Site, National Park Service", u:"https://www.nps.gov/frdo/"},
      {n:"Further reading: David W. Blight, Frederick Douglass: Prophet of Freedom (2018)"}
    ]}
  ]
},

"tesla": {
  hero: "",
  kw: ["Smiljan","Croatia","Serbian","Graz","Prague","Budapest","Edison","AC","alternating current","induction motor","Westinghouse","War of the Currents","Niagara Falls","Tesla coil","Colorado Springs","Wardenclyffe","radio","Marconi","pigeon","New Yorker Hotel","My Inventions","death ray@myths"],
  lede: "A Serbian priest's son who saw machines in his mind before he built them, gave the world the alternating-current motor and the system behind today's power grid, and died alone in a New York hotel room, broke and feeding pigeons.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Nikola Tesla was born on 10 July 1856 in Smiljan, a village in the Military Frontier of the Austrian Empire, today in Croatia. His parents were Serbs and his father was an Orthodox priest.",
      "He moved to the United States in 1884, briefly worked for Thomas Edison, then patented the AC induction motor in 1888. With George Westinghouse he helped win the 'War of the Currents' that made alternating current the world's standard.",
      "He experimented with high voltages, wireless power and radio, but his grand projects failed for lack of money. He died in the Hotel New Yorker on 7 January 1943, aged 86."
    ]},
    {k:"early", h:"Early life", ps:[
      "He wrote that his mother, Đuka, who could not read, invented household tools and recited long poems from memory, and that he got his inventiveness from her.",
      {t:"As a child he had vivid visions he could not control. He learned to build machines in his imagination in such detail that, he said, he could test them in his mind before making them.", lab:"likely", why:"This is from his own autobiography, My Inventions (1919), written when he was 62."},
      "He studied engineering at the Polytechnic in Graz, Austria, but gambled, lost his scholarship and never graduated. In Graz he watched a professor's DC machine spark and became convinced a motor could run without the sparking commutator.",
      {t:"In Budapest in 1882, walking in a park and reciting Goethe, he says the solution came to him in a flash: a rotating magnetic field made by alternating currents. He drew it in the sand with a stick.", lab:"likely", why:"His own later account. It is consistent with his patents but cannot be independently checked."}
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Paris and New York, 1882 to 1885. He worked for Edison's company in Paris, then sailed to New York in 1884 and joined Edison's works. He left within about six months after a dispute over pay.",
      "Ditch-digging, 1886 to 1887. A first company dropped him. He worked as a labourer for a time before new backers set up the Tesla Electric Company.",
      "The AC patents, 1888. He received patents for the induction motor and AC power system and lectured on them to the American Institute of Electrical Engineers. George Westinghouse bought the patents.",
      "The War of the Currents. Edison's companies promoted direct current and warned that AC was deadly. AC won because it could be sent long distances. Westinghouse lit the Chicago World's Fair with it in 1893, and in 1896 the Niagara Falls power station began sending AC power to Buffalo.",
      "Fire, 1895. His New York laboratory burned down, destroying years of work.",
      "Colorado Springs, 1899 to 1900. In a mountain lab he built giant coils that threw artificial lightning, trying to send power through the earth.",
      "Wardenclyffe, 1901 to 1906. With money from the banker J. P. Morgan he built a tower on Long Island for worldwide wireless communication and power. Morgan withdrew; Marconi's simpler radio crossed the Atlantic in 1901; the tower was abandoned and demolished in 1917.",
      "Last decades. He lived in a series of New York hotels, often unable to pay, made announcements of new inventions, and cared for pigeons. From 1934 the Westinghouse company paid his hotel bills."
    ]},
    {k:"works", h:"The work", ps:[
      "The AC induction motor and polyphase system, the basis of how electricity is generated and delivered today.",
      "The Tesla coil (1891), a transformer that makes very high voltages at high frequency, used in early radio and still seen in demonstrations.",
      "Radio-controlled boat, shown in New York in 1898, a forerunner of remote control.",
      "About 300 patents worldwide. My Inventions, his autobiography, was serialised in Electrical Experimenter magazine in 1919.",
      "The unit of magnetic flux density, the tesla, was named after him in 1960."
    ]},
    {k:"people", h:"His people", ps:[
      "Thomas Edison (1847 to 1931), his first American employer and the champion of direct current.",
      "George Westinghouse (1846 to 1914), the industrialist who bought his patents and backed AC.",
      "J. P. Morgan (1837 to 1913), the banker who funded and then abandoned Wardenclyffe.",
      "Mark Twain, a friend who visited his lab in the 1890s and was photographed there.",
      "Robert and Katharine Johnson, editor and his wife, his closest friends in New York."
    ]},
    {k:"world", h:"The world around him", ps:[
      "He lived through the electrification of cities: when he arrived in New York, most streets were still lit by gas; when he died, electric light and motors were everywhere.",
      "Inventors raced for patents and investors. Fame and money often went to those who could build businesses, not only to those with ideas.",
      "His homeland was ruled by Austria-Hungary in his youth and became part of Yugoslavia after the First World War."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "His AC system runs almost every power grid on earth.",
      "In 1943, months after his death, the US Supreme Court struck down most of Marconi's key radio tuning patent, finding that Oliver Lodge, John Stone Stone and Tesla had got there first.",
      "The Nikola Tesla Museum in Belgrade holds his papers and ashes. He became a pop-culture hero, the lonely genius ahead of his time."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"Edison promised him $50,000 and then said it was a joke.", lab:"disputed", t:"Tesla told this story decades later. There is no record from Edison's side, and Edison was not involved day-to-day in that work."},
      {c:"He invented radio, and Marconi stole it.", lab:"disputed", t:"Several inventors contributed. The 1943 Supreme Court case concerned specific patent claims, not who invented radio, and historians credit many people."},
      {c:"He built a death ray.", lab:"myth", t:"In the 1930s he announced a particle-beam weapon he called 'teleforce', but no working device has ever been found."},
      {c:"He offered free wireless power for the world.", lab:"disputed", t:"Wardenclyffe was meant to be a business, mainly for communication. Wireless power at a distance has never been shown to work as he described."},
      {c:"He was ignored in his lifetime.", lab:"myth", t:"In the 1890s he was a celebrity, on magazine covers and lecturing across Europe. He received the Edison Medal in 1917."},
      {c:"His papers were seized by the government.", lab:"verified", t:"After his death the Office of Alien Property took his belongings. An engineer, John G. Trump, examined them and reported nothing dangerous. Most were sent to Belgrade in 1952."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Nikola Tesla, My Inventions (1919), Wikisource (public domain)", u:"https://en.wikisource.org/wiki/My_Inventions"},
      {n:"Thomas Commerford Martin, The Inventions, Researches and Writings of Nikola Tesla (1894), public domain"},
      {n:"Nikola Tesla, US Patent 381,968, Electro-Magnetic Motor (1888), public domain"},
      {n:"Nikola Tesla Museum, Belgrade", u:"https://tesla-museum.org/en/"},
      {n:"Further reading: W. Bernard Carlson, Tesla: Inventor of the Electrical Age (2013)"},
      {n:"Further reading: Marc J. Seifer, Wizard: The Life and Times of Nikola Tesla (1996)"}
    ]}
  ]
},

"julius-caesar": {
  hero: "",
  kw: ["Rome","Roman Republic","Gaul","Gallic Wars","Rubicon","civil war","Pompey","Crassus","First Triumvirate","Cleopatra","dictator","Ides of March","Brutus","Cassius","calendar","Julian calendar","Commentaries","Vercingetorix","Alesia","Et tu, Brute@myths","Caesarean@myths"],
  lede: "A Roman aristocrat who conquered Gaul, crossed the Rubicon with his army, made himself dictator for life, and was stabbed to death in the Senate. His name became the word for emperor in Latin, German and Russian.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Gaius Julius Caesar was born in Rome in July 100 BCE into an old but not rich patrician family.",
      "He rose through Roman politics, allied with Pompey and Crassus, and from 58 to 50 BCE conquered Gaul, roughly today's France and Belgium. His own account of the war survives.",
      "In 49 BCE he led his army across the Rubicon river into Italy, starting a civil war. He won, became dictator, reformed the calendar, and was assassinated on 15 March 44 BCE by senators who feared he would be king."
    ]},
    {k:"early", h:"Early life", ps:[
      "His family claimed descent from Venus through Aeneas's son Iulus, but had little money or recent power. His aunt Julia was married to Gaius Marius, the great general of the popular faction.",
      "As a young man he defied the dictator Sulla, who ordered him to divorce his wife Cornelia, the daughter of Sulla's enemy. He refused and fled Rome until relatives won him a pardon.",
      {t:"Pirates. Around 75 BCE he was captured by pirates. He laughed when they asked a ransom of 20 talents, told them to ask 50, joked that he would crucify them, and after his release raised ships, caught them and did so.", lab:"likely", why:"Told by Plutarch and Suetonius, writing about 150 years later. The capture is generally accepted; the details are polished storytelling."}
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Climbing the ladder, 69 to 60 BCE. He held the offices of quaestor, aedile and praetor, borrowed huge sums to put on public games, and was elected Pontifex Maximus, Rome's chief priest, in 63 BCE.",
      "The First Triumvirate, 60 BCE. He made a private alliance with Pompey, Rome's most famous general, and Crassus, its richest man. As consul in 59 BCE he pushed through their laws, ignoring his co-consul's objections. Pompey married his daughter Julia.",
      "Gaul, 58 to 50 BCE. As governor he fought the Helvetii, Germanic tribes and the Gauls, crossed the Rhine, and twice landed in Britain. In 52 BCE the Gallic leader Vercingetorix united the tribes; Caesar besieged him at Alesia and he surrendered.",
      {t:"The Rubicon, January 49 BCE. The Senate ordered him to give up his army. Crossing the small river Rubicon into Italy with troops was treason. He crossed, reportedly saying 'the die is cast'.", lab:"likely", why:"The crossing is certain. The words are reported by Suetonius and Plutarch; Plutarch says he spoke them in Greek; the phrase is known from the playwright Menander."},
      "Civil war, 49 to 45 BCE. He defeated Pompey at Pharsalus in Greece in 48 BCE. Pompey fled to Egypt and was murdered there. Caesar followed, became involved in an Egyptian royal war and sided with Cleopatra. He then defeated King Pharnaces in Asia Minor and Pompey's supporters in Africa and Spain.",
      "Dictator, 49 to 44 BCE. He was named dictator several times from 49 BCE, for ten years in 46 BCE, and in early 44 BCE for life. He reformed the calendar, enlarged the Senate, gave citizenship to provincials and pardoned many enemies.",
      {t:"The Ides of March, 44 BCE. A group of senators, said to number more than 60, led by Marcus Brutus and Gaius Cassius, stabbed him 23 times at a Senate meeting in the Theatre of Pompey. He fell at the foot of Pompey's statue.", lab:"verified", why:"The date and place are recorded by many ancient writers; Suetonius reports the 23 wounds from a doctor's examination."}
    ]},
    {k:"works", h:"What he wrote and changed", ps:[
      "Commentaries on the Gallic War and on the Civil War, written in clear, plain Latin in the third person ('Caesar ordered...'). They are still used to teach Latin and are a skilful piece of self-promotion.",
      "The Julian calendar, in force from 45 BCE: 365 days with a leap day every four years, worked out with the Alexandrian astronomer Sosigenes. With a small fix in 1582, it is the calendar the world uses today.",
      "The month of July is named after him."
    ]},
    {k:"people", h:"His people", ps:[
      "Pompey the Great (106 to 48 BCE), ally, son-in-law and then enemy.",
      "Marcus Licinius Crassus (about 115 to 53 BCE), the rich ally who funded him and died fighting the Parthians.",
      "Cleopatra VII of Egypt (69 to 30 BCE), his lover, who had a son, Caesarion, whom she said was his.",
      "Marcus Tullius Cicero, the great orator, who admired his writing and disliked his politics.",
      "Marcus Brutus, whom he had pardoned and favoured, and who helped kill him.",
      "Octavian (later Augustus), his great-nephew, adopted in his will as his son and heir."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Rome was a republic ruled by elected officials and a Senate of aristocrats, but its armies had become loyal to their generals rather than to the state. Civil wars between strongmen had begun before Caesar was born.",
      "The Gallic war killed and enslaved huge numbers. Ancient writers claim a million dead and a million enslaved; the figures are not reliable, but the destruction was immense.",
      "In China, the Han dynasty ruled; the historian Sima Qian had recently finished his great history."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "His heir Octavian won the next civil war and became Augustus, the first emperor. The republic did not return.",
      "His family name became a title. 'Caesar' passed into German as Kaiser and into Russian as tsar.",
      "Shakespeare's Julius Caesar (1599) shaped how English speakers picture him and Brutus."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"His last words were 'Et tu, Brute?'", lab:"myth", t:"That Latin line comes from later drama, made famous by Shakespeare. Suetonius says he died silent, adding that some reported he said in Greek 'You too, child?' to Brutus."},
      {c:"He was born by Caesarean section.", lab:"myth", t:"His mother Aurelia lived for decades after his birth, which would have been almost impossible after such an operation in Roman times. The name's origin is uncertain."},
      {c:"He was an emperor.", lab:"myth", t:"He was dictator, not emperor. The first emperor was his heir Augustus."},
      {c:"Brutus was his son.", lab:"myth", t:"Caesar had an affair with Brutus's mother Servilia, and ancient gossip suggested this. Brutus was born about 85 BCE, when Caesar was only about 15, so most historians doubt it."},
      {c:"He was warned to 'beware the Ides of March'.", lab:"likely", t:"Suetonius and Plutarch say a seer named Spurinna warned him of danger lasting until the Ides of March. The exact phrase is Shakespeare's."},
      {c:"He said 'I came, I saw, I conquered' about Gaul.", lab:"myth", t:"He wrote 'veni, vidi, vici' after a quick victory over King Pharnaces of Pontus at Zela in 47 BCE."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Julius Caesar, De Bello Gallico and Other Commentaries, translated by W. A. McDevitte (19th century; Everyman's Library edition), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/10657"},
      {n:"Suetonius, The Lives of the Twelve Caesars: Julius, translated by J. C. Rolfe (1914), public domain"},
      {n:"Plutarch, Life of Caesar, translated by John Dryden and revised by A. H. Clough (1859), public domain"},
      {n:"Further reading: Adrian Goldsworthy, Caesar: Life of a Colossus (2006)"}
    ]}
  ]
},

"plato": {
  hero: "",
  kw: ["Athens","Socrates","Academy","Republic","dialogues","Forms","philosopher-king","cave","Allegory of the Cave","Symposium","Apology","Phaedo","Atlantis","Syracuse","Dionysius","Aristotle","platonic love@myths","wrestler@myths"],
  lede: "A wealthy Athenian who watched his teacher Socrates be put to death, then spent fifty years writing dialogues in which Socrates keeps asking questions. He founded the Academy, and nearly every philosopher since has been answering him.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Plato was born in Athens around 428 to 427 BCE into an aristocratic family, during the long war between Athens and Sparta.",
      "As a young man he followed the philosopher Socrates. After Athens executed Socrates in 399 BCE, Plato travelled, then founded a school, the Academy, around 387 BCE.",
      "About 35 dialogues have come down under his name. Everything he is known to have written survives, though a few of the dialogues are probably not his. Socrates is usually the main speaker. He died in Athens around 348 to 347 BCE."
    ]},
    {k:"early", h:"Early life", ps:[
      "His mother's family was related to the lawgiver Solon. Two of his relatives, Critias and Charmides, were leading figures under the Thirty Tyrants, a brutal pro-Spartan regime that ruled Athens briefly in 404 to 403 BCE.",
      {t:"In the Seventh Letter, Plato says he hoped to go into politics, but was disgusted first by the Thirty and then by the restored democracy that executed Socrates.", lab:"disputed", why:"Whether Plato wrote the Seventh Letter is debated, though many scholars accept it."},
      "His real name may have been Aristocles. 'Plato' may have been a nickname, perhaps meaning 'broad'."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Socrates' trial, 399 BCE. Socrates was convicted of impiety and corrupting the young and was made to drink hemlock. Plato's Apology gives his version of Socrates' defence speech; the Phaedo describes his last day. Plato says he himself was ill and absent.",
      "Travels, about 399 to 387 BCE. He is said to have visited Megara, Egypt, Cyrene and southern Italy, where he met followers of Pythagoras. He went to Syracuse in Sicily and befriended Dion, the brother-in-law of its ruler.",
      "The Academy, about 387 BCE. He set up a school in a grove sacred to the hero Akademos, outside Athens. It taught mathematics and philosophy for centuries and gave us the word 'academy'.",
      {t:"Syracuse again, 367 and 361 BCE. Invited to educate the young ruler Dionysius II, he hoped to make a philosopher-king. It failed: Dion was exiled and Plato was held almost as a prisoner before being allowed home.", lab:"likely", why:"Mainly from the Seventh Letter, whose authorship is debated, but other ancient writers confirm the visits."}
    ]},
    {k:"works", h:"The work", ps:[
      "The Republic: a long conversation about justice, which imagines an ideal city ruled by philosophers. It includes the Allegory of the Cave, in which prisoners mistake shadows on a wall for reality.",
      "Early dialogues such as the Euthyphro and Apology, where Socrates questions people about piety, courage or virtue and shows they do not know what they think they know.",
      "The Symposium, a drinking party at which guests give speeches in praise of love, and the Phaedo, on the immortality of the soul.",
      "The theory of Forms: the idea that perfect, unchanging patterns (Justice, Beauty, the Circle) are more real than the changing things we see.",
      "The Timaeus and Critias, which contain the story of Atlantis."
    ]},
    {k:"people", h:"His people", ps:[
      "Socrates (about 470 to 399 BCE), his teacher, who wrote nothing. We know him mostly through Plato and Xenophon.",
      "Aristotle (384 to 322 BCE), who studied at the Academy for about 20 years and then disagreed with much of what Plato taught.",
      "Dion of Syracuse, his friend and student, who later seized power in Syracuse and was murdered.",
      "His brothers Glaucon and Adeimantus, who are Socrates' main partners in the Republic."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Athens lost the Peloponnesian War to Sparta in 404 BCE. Its democracy, restored afterwards, was proud and suspicious, which helps explain Socrates' trial.",
      "Greek mathematics was flourishing, and Plato valued it as training for thinking about unchanging truths.",
      "In China, the age of the Warring States was producing its own philosophers, among them Mencius, a younger contemporary."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "The philosopher Alfred North Whitehead wrote in 1929 that European philosophy is 'a series of footnotes to Plato'.",
      "His ideas passed into early Christian, Jewish and Islamic thought, through writers such as Augustine and al-Farabi, and were revived in Renaissance Florence.",
      "The Academy lasted, in various forms, until the 1st century BCE; a later Platonic school in Athens was closed in 529 CE."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"'Platonic love' means love without desire, as Plato taught.", lab:"myth", t:"In the Symposium love begins with desire for a beautiful person and rises toward love of beauty itself. The modern phrase comes from Renaissance Florence."},
      {c:"Atlantis was a real place Plato recorded.", lab:"myth", t:"Atlantis appears only in his Timaeus and Critias as a story to illustrate his ideas. No ancient source before him mentions it."},
      {c:"Plato was a wrestler.", lab:"disputed", t:"Diogenes Laertius, writing about 600 years later, says he wrestled and got his nickname that way. It may be true, but the source is late."},
      {c:"The Socrates of the dialogues is the real Socrates.", lab:"disputed", t:"Scholars agree that Plato increasingly put his own ideas in Socrates' mouth, especially in later dialogues. How much of the early Socrates is real is debated."},
      {c:"Plato wanted to ban all poets.", lab:"disputed", t:"In the Republic he would exclude poetry that imitates bad characters or tells false stories about gods, but allows hymns and praise of good men."},
      {c:"Above the Academy's door was written 'Let no one ignorant of geometry enter'.", lab:"tradition", t:"The inscription is first reported many centuries later, by writers of late antiquity. It may be legend."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Plato, The Republic, translated by Benjamin Jowett (1871), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/1497"},
      {n:"Plato, Apology, translated by Benjamin Jowett, Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/1656"},
      {n:"Plato, Symposium, translated by Benjamin Jowett, Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/1600"},
      {n:"Plato, Phaedo, translated by Benjamin Jowett, Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/1658"},
      {n:"Diogenes Laertius, Lives of Eminent Philosophers, Book III (about 3rd century CE), public domain translations"},
      {n:"Further reading: Stanford Encyclopedia of Philosophy, 'Plato' (free online)", u:"https://plato.stanford.edu/entries/plato/"}
    ]}
  ]
},

"murasaki": {
  hero: "",
  kw: ["Tale of Genji","Genji","Heian","Kyoto","Heian-kyo","Empress Shoshi","Fujiwara no Michinaga","diary","kana","hiragana","court lady","Sei Shonagon","Pillow Book","Ishiyama-dera","first novel@myths","Lady Murasaki"],
  lede: "A court lady in 11th-century Kyoto, known only by a nickname, who wrote The Tale of Genji: 54 chapters of love, politics and loss that many call the world's first novel.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Murasaki Shikibu was born around 973 to 978 in Heian-kyo, today's Kyoto, the capital of Japan. Her real name is unknown. 'Murasaki' comes from a character in her book, and 'Shikibu' from her father's post in the Ministry of Ceremonial.",
      "She wrote The Tale of Genji, the story of a gifted, handsome son of an emperor and his loves, and of the generation after him. It was being read at court by about 1008.",
      "She served as a lady-in-waiting to Empress Shōshi and kept a diary of court life. She probably died around 1014 or later; the date is uncertain."
    ]},
    {k:"early", h:"Early life", ps:[
      "Her father, Fujiwara no Tametoki, came from a minor branch of the powerful Fujiwara clan and was a scholar of Chinese and a poet. Her mother died when she was young.",
      {t:"In her diary she says that when her brother was being taught Chinese classics, she learned them faster by listening, and her father sighed that it was a pity she was not born a boy.", lab:"verified", why:"Her own diary records this, and it reflects the belief that Chinese learning was for men."},
      "Around 998 she married Fujiwara no Nobutaka, an older official. They had a daughter, Kenshi, later known as the poet Daini no Sanmi. Nobutaka died in 1001, probably in an epidemic."
    ]},
    {k:"turns", h:"Turning points", ps:[
      {t:"Widowhood and writing, about 1001 to 1005. Many scholars think she began The Tale of Genji in the years after her husband's death, circulating chapters among friends.", lab:"likely", why:"There is no direct record of when she started. The timing is inferred from her diary and from when the book was known at court."},
      "Court service, about 1005 or 1006. She joined the household of Empress Shōshi, daughter of Fujiwara no Michinaga, the most powerful man in Japan. Michinaga likely wanted a famous writer to add lustre to his daughter's court.",
      "The diary, 1008 to 1010. Her diary describes the birth of Shōshi's son, the future emperor, court ceremonies, and her own loneliness and doubts. It mentions people at court reading and copying Genji.",
      "Last years. After the emperor's death in 1011 she seems to have stayed with Shōshi. Records of her stop after about 1014; she may have died then or lived some years more."
    ]},
    {k:"works", h:"The work", ps:[
      "The Tale of Genji (Genji monogatari): 54 chapters, over a thousand pages in translation, with about 400 characters and nearly 800 poems. It follows Prince Genji, the 'Shining Prince', and then his descendants.",
      "It was written in Japanese with the kana syllabary, the script women used, rather than in Chinese, the language of official men's writing.",
      "The Diary of Lady Murasaki, a sharp picture of court life. In it she criticises other writers, including Sei Shōnagon, author of The Pillow Book.",
      "A collection of her poems, the Murasaki Shikibu shū."
    ]},
    {k:"people", h:"Her people", ps:[
      "Empress Shōshi (988 to 1074), whom she served and taught Chinese poetry in secret.",
      "Fujiwara no Michinaga (966 to 1028), regent in all but name, her patron.",
      "Sei Shōnagon, lady-in-waiting to the rival Empress Teishi, whose Pillow Book is the other great work of the period.",
      "Izumi Shikibu, poet and fellow lady-in-waiting, praised and criticised in Murasaki's diary.",
      "Her daughter Kenshi, known as Daini no Sanmi, a poet whose verses appear in famous anthologies."
    ]},
    {k:"world", h:"The world around her", ps:[
      "The Heian period (794 to 1185) was a time of peace at court, where rank, beauty, poetry and good taste ruled. Aristocrats exchanged poems as a normal way of courting and conversing.",
      "Noblewomen lived mostly behind screens and curtains, yet women wrote much of the period's greatest literature.",
      "In the same years the Song dynasty ruled China, and in England Æthelred the Unready faced Viking raids."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "Genji has been read, copied, illustrated and commented on for a thousand years. The 12th-century Genji picture scrolls are a national treasure of Japan.",
      "It shaped Japanese ideas of beauty, especially mono no aware, a gentle sadness at the passing of things.",
      "Her portrait appears on the 2,000-yen note, issued in 2000."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"The Tale of Genji is the world's first novel.", lab:"disputed", t:"It is often called that, and it is the earliest long prose fiction with deep psychological characters. Others point to ancient Greek and Roman novels, or argue the word 'novel' does not fit."},
      {c:"Murasaki was her real name.", lab:"myth", t:"It is a nickname, probably from Genji's beloved Murasaki. Her personal name was not recorded, as was common for women of her time."},
      {c:"She wrote Genji while gazing at the moon at Ishiyama-dera temple.", lab:"tradition", t:"A legend from the 14th century. The temple still shows 'Murasaki's room', but there is no early evidence."},
      {c:"She wrote all 54 chapters herself.", lab:"disputed", t:"Most scholars think so, but some argue the last ten chapters, set after Genji's death, were by another hand."},
      {c:"She and Sei Shōnagon were bitter rivals who knew each other.", lab:"disputed", t:"Murasaki criticised her harshly in her diary, but Sei Shōnagon had probably left court before Murasaki arrived. There is no evidence they met."},
      {c:"No one knows when she died.", lab:"verified", t:"True. Dates proposed range from about 1014 to about 1031."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Murasaki Shikibu, Genji Monogatari (first 17 chapters), translated by Suematsu Kenchō (1882), public domain"},
      {n:"Diaries of Court Ladies of Old Japan, translated by Annie Shepley Omori and Kochi Doi (1920), public domain"},
      {n:"Tokugawa Art Museum (Nagoya) and Gotoh Museum (Tokyo): Genji picture scrolls (12th century)"},
      {n:"Further reading: Richard Bowring, Murasaki Shikibu: The Tale of Genji (2004)"},
      {n:"Further reading: Royall Tyler, The Tale of Genji (translation, 2001)"}
    ]}
  ]
},

"li-bai": {
  hero: "",
  kw: ["Li Po","Tang dynasty","poetry","Chang'an","moon","wine","Quiet Night Thought","Emperor Xuanzong","Hanlin Academy","Du Fu","An Lushan Rebellion","Daoism","immortal","Sichuan","drowned@myths","Banished Immortal"],
  lede: "The 'Banished Immortal' of Chinese poetry: a wandering swordsman, drinker and Daoist dreamer whose short poem about moonlight by his bed is learned by nearly every child in China.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Li Bai (also written Li Po) was born in 701, probably in Suyab in Central Asia (in today's Kyrgyzstan), and grew up in Sichuan in western China.",
      "He wandered much of his life, wrote poems that circulated widely, and served briefly at the court of Emperor Xuanzong in Chang'an around 742 to 744.",
      "Caught up in the An Lushan Rebellion, he was exiled, then pardoned. He died in 762. About a thousand of his poems survive."
    ]},
    {k:"early", h:"Early life", ps:[
      {t:"His family said they descended from an exiled branch of the royal Li clan who had lived in Central Asia. They moved to Sichuan when he was about five.", lab:"disputed", why:"The family story comes from prefaces written by relatives. His birthplace has also been claimed for Sichuan itself."},
      "As a youth he read widely, studied swordsmanship and Daoism, and lived for a time in the mountains with a hermit, taming birds.",
      "At about 24 he left Sichuan to travel down the Yangtze River, and he never went back."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Wandering, 720s to 740s. He travelled across central and eastern China, married into the family of a former chief minister, and sought patrons by sending poems to officials.",
      {t:"Court, about 742 to 744. Recommended by the Daoist Wu Yun and the poet He Zhizhang, who called him a 'banished immortal', he was summoned to the capital Chang'an and placed in the Hanlin Academy to write for the emperor.", lab:"likely", why:"Recorded in Tang sources and his own poems, though details grew into legend."},
      "Leaving court, 744. He was soon dismissed or chose to leave, perhaps after offending powerful eunuchs. He resumed his travels and met Du Fu in 744; they spent time together and exchanged poems.",
      "The An Lushan Rebellion, 755. A rebel general sacked the capital. Li Bai joined the staff of Prince Li Lin, who was then declared a rebel by his brother, the new emperor. Li Bai was arrested.",
      "Exile and pardon, 758 to 759. He was sentenced to exile in Yelang in the far south-west. On the way, a general amnesty freed him.",
      "Death, 762. He died at Dangtu, in today's Anhui province, in the house of a relative who collected his poems."
    ]},
    {k:"works", h:"The work", ps:[
      "'Quiet Night Thought' (Jing ye si): four lines about moonlight on the floor, which looks like frost, and a traveller looking up at the moon and down, thinking of home.",
      "'Drinking Alone by Moonlight': he raises his cup to the moon, and with his shadow they make a party of three.",
      "Poems of farewell, of mountains and rivers, of friendship and of the troubles of soldiers and abandoned wives, often in old ballad forms with free, flowing lines.",
      "Unlike the careful Du Fu, he is admired for seeming effortless and spontaneous, a voice of freedom and imagination."
    ]},
    {k:"people", h:"His people", ps:[
      "Du Fu (712 to 770), the younger poet who met him in 744 and wrote many poems about missing him. Together they are China's two greatest poets.",
      "He Zhizhang (659 to 744), the elder poet and official who gave him his nickname.",
      "Emperor Xuanzong (reigned 712 to 756), patron of the arts, whose long reign ended in rebellion.",
      "Meng Haoran, a poet friend, to whom Li Bai wrote a famous farewell at the Yellow Crane Tower."
    ]},
    {k:"world", h:"The world around him", ps:[
      "The Tang dynasty was at its height in the early 8th century. Chang'an was perhaps the largest city in the world, home to merchants and envoys from Persia, Central Asia, Japan and Korea.",
      "Poetry was part of the civil service examinations, and officials were expected to write well. Li Bai never took the exam.",
      "The An Lushan Rebellion (755 to 763) killed or displaced millions and ended the Tang golden age."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "His poems are among the most read in Chinese, and 'Quiet Night Thought' is taught in primary schools.",
      "Ezra Pound's Cathay (1915), loose versions based on Ernest Fenollosa's notes, introduced him to English readers. Gustav Mahler set German versions of his poems in Das Lied von der Erde (1908 to 1909).",
      "Tang poetry became a model for poets in Japan, Korea and Vietnam."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He drowned trying to embrace the moon's reflection in a river.", lab:"myth", t:"A charming legend that appeared after his death. Early sources say he died of illness at Dangtu."},
      {c:"He was always drunk.", lab:"disputed", t:"He wrote often and joyfully about wine, and friends teased him about it. Drinking was also a poetic theme, so his poems should not be read as a diary."},
      {c:"He wrote poems instantly, without revising.", lab:"tradition", t:"Stories say he wrote brilliant verses while drunk at court. Almost nothing in his own handwriting survives, so we cannot tell how he worked."},
      {c:"The emperor's favourite eunuch had to pull off Li Bai's boots.", lab:"tradition", t:"A famous story that the powerful eunuch Gao Lishi was made to remove his boots, and took revenge. It appears in later sources and is probably legend."},
      {c:"He was born in Sichuan.", lab:"disputed", t:"China often names Jiangyou in Sichuan. Most scholars accept that he was born in Central Asia and moved to Sichuan as a child."},
      {c:"English translations show his poems as he wrote them.", lab:"myth", t:"Classical Chinese is very compact and leaves tense and subject open. Every translation, including Pound's, makes choices the original does not."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Shigeyoshi Obata, The Works of Li Po, the Chinese Poet (1922), public domain in the US"},
      {n:"L. Cranmer-Byng, A Lute of Jade: Selections from the Classical Poets of China (1909), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/390"},
      {n:"Herbert A. Giles, A History of Chinese Literature (1901), public domain"},
      {n:"Ezra Pound, Cathay (1915), public domain"},
      {n:"Further reading: Arthur Waley, The Poetry and Career of Li Po (1950)"},
      {n:"Further reading: Stephen Owen, The Great Age of Chinese Poetry: The High T'ang (1981)"}
    ]}
  ]
},
"dante": {
  hero: "",
  kw: ["Divine Comedy","Inferno","Purgatorio","Paradiso","Beatrice","Florence","Guelphs","Ghibellines","exile","Virgil","Ravenna","Vita Nuova","terza rima","Italian language","Boniface VIII","Abandon all hope@works","nine circles"],
  lede: "A Florentine politician exiled from his city for life, who wrote a poem in which he walks through Hell, Purgatory and Heaven, meeting popes, lovers and his old enemies, and in doing so shaped the Italian language.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Dante Alighieri was born in Florence in 1265, into a family of minor nobility.",
      "He fell in love as a boy with Beatrice Portinari, who died young; she became the guiding figure of his poetry. He took part in Florentine politics until 1302, when his faction lost and he was exiled under sentence of death.",
      "In exile he wrote the Commedia, later called the Divine Comedy, a journey through the afterlife in 100 cantos. He died in Ravenna in 1321."
    ]},
    {k:"early", h:"Early life", ps:[
      "His mother died when he was young and his father when he was a teenager. He was betrothed at about 12 to Gemma Donati, whom he married; they had at least three children.",
      {t:"In his Vita Nuova he says he first saw Beatrice when they were both about nine, and again nine years later, when she greeted him in the street. She married another man and died in 1290, aged 24.", lab:"likely", why:"Dante's own account, shaped as poetry. The early biographer Boccaccio identified her as Beatrice Portinari, and most scholars accept this."},
      "He studied rhetoric and philosophy, wrote love poetry in the new 'sweet new style' with his friend Guido Cavalcanti, and fought as a cavalryman at the Battle of Campaldino in 1289."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Politics, 1295 to 1301. He joined a guild so he could hold office and in 1300 served as one of Florence's six priors. Florence's ruling Guelph party had split into Whites and Blacks; Dante was a White, wary of Pope Boniface VIII's ambitions.",
      "Exile, 1302. While he was away on an embassy to Rome, the Blacks seized power with papal backing. Dante was fined and banished, then sentenced to be burned alive if he returned. He never saw Florence again.",
      "Wandering, 1302 to about 1318. He lived at the courts of patrons such as the Scaligeri of Verona, wrote treatises in Latin, and began the Commedia around 1307.",
      "Hope in an emperor, 1310 to 1313. He wrote letters urging the Holy Roman Emperor Henry VII to restore order in Italy. Henry died in 1313.",
      "Ravenna and death, 1318 to 1321. He settled in Ravenna under Guido Novello da Polenta, finished the Paradiso, and died, probably of malaria, in September 1321, returning from an embassy to Venice."
    ]},
    {k:"works", h:"The work", ps:[
      "The Divine Comedy: Inferno, Purgatorio and Paradiso, 100 cantos in all. Guided by the Roman poet Virgil and then by Beatrice, Dante travels down through nine circles of Hell, up the mountain of Purgatory, and through the heavens to a vision of God.",
      "It is written in terza rima, linked three-line stanzas he invented, and in the Tuscan vernacular rather than Latin.",
      "Above the gate of Hell is the warning, in Longfellow's translation: 'All hope abandon, ye who enter in!'",
      "La Vita Nuova (about 1294), poems and prose about his love for Beatrice; De vulgari eloquentia, a Latin defence of writing in everyday Italian; and Monarchia, on the powers of emperor and pope."
    ]},
    {k:"people", h:"His people", ps:[
      "Beatrice Portinari (1266 to 1290), his love and muse.",
      "Gemma Donati, his wife, who stayed in Florence during his exile. He never mentions her in his writing.",
      "Guido Cavalcanti (about 1255 to 1300), his 'first friend' and fellow poet, exiled in 1300 by a council that included Dante.",
      "Pope Boniface VIII, his enemy, for whom the Inferno reserves a place among corrupt popes.",
      "Giovanni Boccaccio (1313 to 1375), who wrote his first biography and first called the poem 'divine'."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Florence was a booming city of bankers and wool merchants, torn by feuds between families and parties.",
      "Popes and emperors competed for power in Italy. Guelphs broadly backed the pope and Ghibellines the emperor.",
      "Giotto was painting in Florence, Marco Polo had just returned to Venice, and the papacy moved to Avignon in 1309."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "His Tuscan became the basis of standard Italian, and he is called the father of the Italian language.",
      "The Comedy has inspired artists from Botticelli and Michelangelo to William Blake, Gustave Doré, Rodin's Gates of Hell and Liszt.",
      "Florence revoked his sentence of exile in 2008. His tomb remains in Ravenna, which has refused to give his bones back."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"Dante invented the idea of the nine circles of Hell.", lab:"likely", t:"The detailed structure is his, but he drew on Aristotle's ethics, Virgil's underworld, and medieval Christian visions of the afterlife."},
      {c:"He called it the Divine Comedy.", lab:"myth", t:"He called it the Commedia. Boccaccio added 'divine', and a Venetian edition of 1555 made it the title."},
      {c:"Beatrice was purely symbolic.", lab:"disputed", t:"A few scholars have argued so, but most accept she was a real woman, Beatrice Portinari, whom Dante transformed into a symbol."},
      {c:"Dante wrote his great poem in Latin.", lab:"myth", t:"He chose the everyday Tuscan of Florence so that more people could read it. Only his treatises, such as Monarchia, are in Latin."},
      {c:"Dante wrote it to take revenge on his enemies.", lab:"disputed", t:"He did place enemies in Hell, but also friends and people he admired, and the poem's main concern is moral and spiritual."},
      {c:"His bones have rested undisturbed in his tomb since 1321.", lab:"myth", t:"Franciscan friars hid them in 1519 to stop Florence taking them. They were found in 1865 during building work and returned to his tomb in Ravenna."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Dante, The Divine Comedy, translated by Henry Wadsworth Longfellow (1867), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/1004"},
      {n:"Dante, The Divine Comedy, translated by Henry Francis Cary (1814), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/8800"},
      {n:"Dante, La Vita Nuova, translated by Dante Gabriel Rossetti (1861), public domain"},
      {n:"Giovanni Boccaccio, Life of Dante (about 1350s), translated by Philip Henry Wicksteed (1898), public domain"},
      {n:"Further reading: Barbara Reynolds, Dante: The Poet, the Political Thinker, the Man (2006)"}
    ]}
  ]
},

"gutenberg": {
  hero: "",
  kw: ["printing press","movable type","Mainz","Strasbourg","Bible","42-line Bible","B42","Fust","Schöffer","indulgences","goldsmith","ink","press","incunabula","lawsuit","1455","Bi Sheng@myths","Korea@myths","Jikji"],
  lede: "A goldsmith from Mainz who worked out how to cast metal letters by the thousand, ink them and press them onto paper, and printed a Bible so beautiful that 49 copies are still treasured. He lost his workshop doing it.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Johannes Gensfleisch zur Laden zum Gutenberg was born in Mainz, Germany, around 1400. The exact year is unknown.",
      "Working in Strasbourg and then Mainz, he developed a system of printing with movable metal type: a hand mould for casting letters, a metal alloy, oil-based ink and a screw press.",
      "His great work was the 42-line Bible, finished around 1454 to 1455. He lost control of his workshop to his investor Johann Fust and died in Mainz in 1468."
    ]},
    {k:"early", h:"Early life", ps:[
      "His father was a patrician and merchant in Mainz, and possibly involved with the archbishop's mint, which may be where Johannes learned metalwork.",
      "His family was forced out of Mainz in political conflicts between patricians and guilds in 1411 and 1428.",
      "Little is known of his youth. Records show him in Strasbourg by 1434."
    ]},
    {k:"turns", h:"Turning points", ps:[
      {t:"Strasbourg, 1430s. He trained partners in polishing gems and making metal mirrors to sell to pilgrims at Aachen. A lawsuit of 1439, after a partner died, mentions a press, lead, and mysterious 'forms', which suggests early printing experiments.", lab:"likely", why:"The 1439 court records survive. They do not describe printing outright, and historians read them as evidence of secret work."},
      "Back in Mainz, by 1448. He borrowed money from a relative and, in 1450, 800 guilders from the merchant Johann Fust, then another 800, to set up a printing workshop.",
      "First printing, early 1450s. The workshop printed short Latin grammars and, in 1454 to 1455, letters of indulgence for the Church, small forms with blanks for names and dates.",
      {t:"The Bible, about 1455. The 42-line Bible appeared in about 180 copies, some on paper and some on vellum. In March 1455 the future Pope Pius II wrote that he had seen pages in Frankfurt, so clean and correct that one could read them without glasses.", lab:"verified", why:"His letter of 12 March 1455 survives."},
      "The lawsuit, 1455. Fust sued for repayment with interest. The court ruled for Fust, who took over much of the equipment and, with Gutenberg's skilled assistant Peter Schöffer, ran a successful printing business.",
      "Last years. Gutenberg may have run a smaller press. In 1465 the Archbishop of Mainz gave him a court title with a yearly allowance of grain, wine and clothing. He died on 3 February 1468."
    ]},
    {k:"works", h:"The work", ps:[
      "The hand mould: an adjustable tool that let a worker cast thousands of identical letters quickly from a metal matrix.",
      "Type metal, a mix of lead, tin and antimony that melts easily and hardens fast; oil-based ink that sticks to metal; and a press adapted from those used for wine and paper.",
      "The 42-line Bible (B42), in two volumes with about 1,280 pages, set in a Gothic type based on scribes' handwriting. 49 copies survive, about 21 complete.",
      "He signed none of his work. Everything is attributed to him from documents and later testimony."
    ]},
    {k:"people", h:"His people", ps:[
      "Johann Fust (about 1400 to 1466), merchant and investor, who won the lawsuit and took over the business.",
      "Peter Schöffer (about 1425 to 1503), his apprentice, who married Fust's daughter and became a leading printer. Their Mainz Psalter of 1457 is the first book with a printed date.",
      "Andreas Dritzehn and his brothers, partners in Strasbourg, whose lawsuit preserved the first hints of his work."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Before printing, books in Europe were copied by hand and were rare and expensive. Paper had become cheaper, and literacy was growing in towns.",
      "Printing spread fast after him: by 1500 there were presses in about 250 European cities and perhaps 20 million printed books in circulation.",
      "In 1453 Constantinople fell to the Ottomans, and printed pamphlets soon carried the news and calls for crusade."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "Printing helped spread the Renaissance, Martin Luther's Reformation and the Scientific Revolution, because ideas could be copied exactly and widely.",
      "Movable-type printing in Europe stayed essentially as he designed it for about 350 years.",
      "The Gutenberg Museum in Mainz holds two copies of his Bible. Project Gutenberg, the free online library, is named after him."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"Gutenberg invented printing.", lab:"myth", t:"Woodblock printing was used in China from at least the 7th century. Bi Sheng made movable clay type around the 1040s, and Korea printed with metal type by 1377 (the Jikji). Gutenberg's achievement was a practical system for mass printing with metal type."},
      {c:"His Bible was the first book printed in Europe.", lab:"myth", t:"Smaller items, such as grammars, calendars and indulgences, were printed in his workshop earlier."},
      {c:"Gutenberg knew about Korean printing.", lab:"disputed", t:"There is no evidence of contact. Most historians think he developed his method independently."},
      {c:"He died poor and forgotten.", lab:"disputed", t:"He lost his business to Fust, but the archbishop's pension in 1465 suggests he was honoured and comfortable."},
      {c:"The famous portraits show what he looked like.", lab:"myth", t:"All portraits of him were made long after his death. No likeness from his lifetime survives."},
      {c:"He printed exactly 180 Bibles.", lab:"likely", t:"About 180 is the usual estimate, perhaps 135 on paper and 45 on vellum, based on surviving copies and paper stocks."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Gutenberg Bible, Library of Congress copy on vellum (free to view online)"},
      {n:"Gutenberg Bible, British Library (free to view)"},
      {n:"Enea Silvio Piccolomini (later Pius II), letter to Cardinal Juan de Carvajal, 12 March 1455, public domain"},
      {n:"Theodore Low De Vinne, The Invention of Printing (1876), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/51034"},
      {n:"Gutenberg Museum, Mainz", u:"https://www.mainz.de/microsite/gutenberg-museum/"},
      {n:"Further reading: John Man, The Gutenberg Revolution (2002)"}
    ]}
  ]
},

"columbus": {
  hero: "",
  kw: ["Cristoforo Colombo","Cristóbal Colón","Genoa","1492","Santa María","Niña","Pinta","Ferdinand and Isabella","Spain","Bahamas","Guanahani","Hispaniola","Taíno","Indies","Columbian exchange","flat earth@myths","Columbus Day","Indigenous Peoples' Day"],
  lede: "A Genoese sailor who was wrong about the size of the earth, sailed west to reach Asia, and landed instead in the Caribbean in 1492, beginning European conquest of the Americas and a catastrophe for the people who already lived there.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Christopher Columbus (Cristoforo Colombo in Italian, Cristóbal Colón in Spanish) was born in Genoa around 1451.",
      "Backed by Queen Isabella and King Ferdinand of Spain, he sailed west in 1492 and landed in the Bahamas on 12 October. He made four voyages to the Caribbean and Central and South America, always believing he was near Asia.",
      "As governor of Hispaniola his rule was brutal, and he was arrested and sent home in chains in 1500. He died in Valladolid, Spain, in 1506."
    ]},
    {k:"early", h:"Early life", ps:[
      "His father was a wool weaver. He went to sea young and sailed the Mediterranean and the Atlantic.",
      {t:"In 1476, according to his son, his ship was sunk off Portugal and he swam ashore. He settled in Lisbon, where his brother Bartholomew made maps, and married Filipa Moniz, from a family of Portuguese navigators.", lab:"likely", why:"From his son Ferdinand's biography and his own writings. Some details are hard to check."},
      "He sailed to the Gold Coast of Africa and, he claimed, to Iceland. He read Marco Polo and the geographer Pierre d'Ailly, writing notes in the margins."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "The plan, 1480s. He calculated that Asia lay only about 4,500 kilometres west of the Canary Islands. The real distance to Japan is about 19,000. Portuguese experts rejected his plan, and so at first did a Spanish commission.",
      "Agreement, April 1492. After Spain conquered Granada, the last Muslim kingdom in Spain, Isabella and Ferdinand agreed. They promised him the titles Admiral of the Ocean Sea and governor of any lands he found, plus a tenth of the profits.",
      {t:"First voyage, 1492 to 1493. The Santa María, Niña and Pinta left Palos on 3 August. On 12 October a lookout sighted an island the Taíno people called Guanahani, which Columbus named San Salvador. He went on to Cuba and Hispaniola.", lab:"verified", why:"From the summary of his log made by Bartolomé de las Casas and from his letter of 1493."},
      "The first encounters. His log describes the Taíno as gentle and generous, and in the same breath says they would make good servants and could easily be conquered. He took several of them back to Spain.",
      "Second voyage, 1493 to 1496. He returned with 17 ships and about 1,200 men to found a colony on Hispaniola. Settlers demanded gold and labour from the Taíno, and he sent hundreds of Taíno to Spain to be sold as slaves.",
      "Third voyage and arrest, 1498 to 1500. In 1498 he reached the coast of Venezuela, his first sight of the mainland. Complaints of his harsh, chaotic government led the monarchs to send an investigator, Francisco de Bobadilla, who shipped Columbus and his brothers back to Spain in chains. He was freed but lost the governorship.",
      "Fourth voyage and death, 1502 to 1506. He explored the coast of Central America, was stranded on Jamaica for a year, and returned ill. He died in Valladolid on 20 May 1506, still claiming he had reached Asia."
    ]},
    {k:"works", h:"What he left", ps:[
      "His letter of 1493 announcing the discovery, printed in many editions across Europe within months.",
      "His log of the first voyage, which survives only as a summary by Bartolomé de las Casas.",
      "The Book of Privileges, copies of the contracts granting his titles, and the Book of Prophecies, in which he linked his voyages to the Bible and the end of the world."
    ]},
    {k:"people", h:"His people", ps:[
      "Isabella I of Castile (1451 to 1504) and Ferdinand II of Aragon (1452 to 1516), his royal sponsors.",
      "Bartholomew and Diego Columbus, his brothers, who helped govern Hispaniola.",
      "Ferdinand Columbus (1488 to 1539), his son, who wrote his biography and built a great library in Seville.",
      "Bartolomé de las Casas (1484 to 1566), a priest whose father sailed with Columbus, who preserved his log and became the great critic of Spanish cruelty to Indigenous peoples.",
      "Martín Alonso Pinzón, captain of the Pinta, whose ship first sighted land."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Portugal was exploring the African coast for a sea route to India; Bartolomeu Dias rounded the Cape of Good Hope in 1488 and Vasco da Gama reached India in 1498.",
      "Asian spices and silk reached Europe through Muslim and Venetian middlemen, and the Atlantic kingdoms wanted a direct sea route of their own.",
      "In 1492, the same year he sailed, Spain expelled its Jews. The Caribbean islands were home to Taíno, Kalinago and other peoples, perhaps hundreds of thousands on Hispaniola alone."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "His voyages linked Europe, Africa and the Americas permanently. Plants, animals and diseases crossed in both directions, in what historians call the Columbian exchange.",
      "Within a few decades the Taíno population of Hispaniola collapsed, from disease, forced labour and violence.",
      "Once celebrated as a hero, he is now debated. Some US states and cities replaced Columbus Day with Indigenous Peoples' Day."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"People in 1492 thought the earth was flat.", lab:"myth", t:"Educated Europeans had known it was round since ancient Greece. The argument was about its size, and Columbus's critics were right that he had it far too small."},
      {c:"He discovered America.", lab:"myth", t:"Millions of people already lived there, and Norse sailors reached Newfoundland around 1000 CE. He was the first to start lasting contact between Europe and the Americas."},
      {c:"He landed on the mainland of what is now the United States.", lab:"myth", t:"He never reached it. He explored the Caribbean, including Puerto Rico, and the coasts of Central America and Venezuela."},
      {c:"Isabella pawned her jewels to pay for the voyage.", lab:"myth", t:"A later legend. The money came mainly from royal officials, Italian bankers in Seville, and Columbus's own backers."},
      {c:"He was secretly Spanish, Portuguese or Jewish.", lab:"disputed", t:"Many theories exist. Documents including his own will say he was born in Genoa, and most historians accept that."},
      {c:"His crew mutinied and he promised to turn back.", lab:"likely", t:"In early October 1492 the crews grew afraid. The log records the men's complaints on 10 October. Later witnesses described an agreement with the Pinzón brothers to keep sailing a few more days."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Select Letters of Christopher Columbus, translated and edited by R. H. Major (1847), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/77820"},
      {n:"The Journal of Christopher Columbus (during his first voyage), translated by Clements R. Markham (1893), public domain"},
      {n:"Christopher Columbus, letter announcing the discovery (1493), translations in public domain"},
      {n:"Bartolomé de las Casas, A Short Account of the Destruction of the Indies (1552), public domain translations"},
      {n:"Washington Irving, A History of the Life and Voyages of Christopher Columbus (1828), public domain (note: romanticised)"},
      {n:"Further reading: Samuel Eliot Morison, Admiral of the Ocean Sea (1942)"},
      {n:"Further reading: Laurence Bergreen, Columbus: The Four Voyages (2011)"}
    ]}
  ]
},

"copernicus": {
  hero: "",
  kw: ["Mikołaj Kopernik","Toruń","Frombork","Frauenburg","heliocentric","sun-centred","De revolutionibus","On the Revolutions","Ptolemy","Rheticus","Osiander","Commentariolus","canon","Warmia","Galileo","Kepler","deathbed@myths","Copernican revolution"],
  lede: "A church canon, doctor and astronomer from Royal Prussia in the Polish kingdom who quietly worked out that the earth turns and circles the sun, held back his book for decades, and is said to have received the first printed copy on the day he died.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Nicolaus Copernicus (Mikołaj Kopernik in Polish) was born in Toruń, in Royal Prussia under the Polish crown, on 19 February 1473.",
      "He studied in Kraków and Italy, then spent most of his life as a canon of Frombork Cathedral in Warmia, working as an administrator, doctor and economist as well as an astronomer.",
      "His book On the Revolutions of the Heavenly Spheres (1543) argued that the earth and planets go around the sun. He died in Frombork on 24 May 1543."
    ]},
    {k:"early", h:"Early life", ps:[
      "His father, a copper merchant, died when he was about ten. His mother's brother, Lucas Watzenrode, who became Prince-Bishop of Warmia, raised him and paid for his education.",
      "He studied at the University of Kraków from 1491, where astronomy and mathematics were strong.",
      "From 1496 he studied church law in Bologna, where he lodged with the astronomer Domenico Maria Novara and helped with observations, then medicine in Padua. He took a doctorate in canon law at Ferrara in 1503."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Canon of Frombork. His uncle secured him a post as canon, giving a lifelong income. He served as his uncle's secretary and doctor until 1510, then lived at Frombork, with a tower near the cathedral as his workplace.",
      {t:"The Commentariolus, about 1510 to 1514. He circulated a short handwritten outline among friends, setting out seven assumptions, including that the sun is near the centre of the universe and that the earth turns daily on its axis.", lab:"verified", why:"Copies of the manuscript survive. A Kraków scholar's library list of 1514 describes a manuscript that matches it."},
      "Administration and war. He managed the chapter's lands, resettled peasants on abandoned farms, and in 1520 to 1521 helped defend Olsztyn Castle against the Teutonic Knights.",
      "Money. He wrote a treatise on coinage in 1526, arguing that debased coins drive good coins out of circulation, an idea later called Gresham's law.",
      "Rheticus, 1539. A young Lutheran mathematician, Georg Joachim Rheticus, came to study with him for two years. He published a summary of the theory in 1540 and persuaded Copernicus to publish the full book.",
      {t:"Publication and death, 1543. On the Revolutions was printed in Nuremberg. Copernicus had a stroke late in 1542 and, according to a friend's letter, saw the finished book only on the day he died.", lab:"likely", why:"From a letter by his friend Tiedemann Giese. It is a single, sympathetic account."}
    ]},
    {k:"works", h:"The work", ps:[
      "On the Revolutions of the Heavenly Spheres (De revolutionibus orbium coelestium, 1543), in six books, with tables of planetary positions.",
      "It replaced Ptolemy's earth-centred system with one in which the earth spins daily and, like the other planets, circles the sun yearly. That explained why planets sometimes seem to move backwards.",
      "He kept the ancient idea of perfect circles, so his system still needed small extra circles (epicycles) and was not more accurate than Ptolemy's.",
      "An unsigned preface added by the Lutheran theologian Andreas Osiander told readers the theory was only a convenient way to calculate, not a claim about reality. Copernicus did not write it."
    ]},
    {k:"people", h:"His people", ps:[
      "Lucas Watzenrode (1447 to 1512), his uncle, protector and patron.",
      "Georg Joachim Rheticus (1514 to 1574), his only pupil, who brought the book to print.",
      "Tiedemann Giese (1480 to 1550), Bishop of Chełmno, his close friend who urged him to publish.",
      "Anna Schilling, his housekeeper. In 1539 the bishop ordered him to dismiss her, apparently suspecting an improper relationship."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Columbus reached the Americas when Copernicus was 19, showing that ancient geography could be wrong.",
      "The Reformation began in 1517. Martin Luther is reported to have mocked the idea of a moving earth in table talk.",
      "Printing made it possible for his book, with its detailed tables, to reach astronomers across Europe."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "Tycho Brahe, Kepler and Galileo built on his work. Kepler's ellipses and Newton's gravity eventually made the sun-centred system both accurate and explained.",
      "'Copernican revolution' now means any change that overturns a basic assumption.",
      "In 2005 remains were found under the floor of Frombork Cathedral, and in 2008 DNA tests identified them as his. He was reburied there with honours in 2010. Element 112 was named copernicium in 2010."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He was persecuted by the Church.", lab:"myth", t:"He was a canon and dedicated his book to Pope Paul III. The Catholic Church suspended the book only in 1616, 73 years later, during the Galileo controversy, pending corrections."},
      {c:"He was the first to say the earth goes around the sun.", lab:"myth", t:"The Greek astronomer Aristarchus of Samos proposed it around 270 BCE. Copernicus knew of this and worked out the idea in full mathematical detail."},
      {c:"He delayed publishing because he feared the Church.", lab:"disputed", t:"In his preface he says he feared ridicule. He also may have been perfecting his tables. Historians weigh these reasons differently."},
      {c:"His system was more accurate than Ptolemy's.", lab:"myth", t:"Because he kept circular orbits, his predictions were about as accurate as the old system's. Its advantage was that one scheme explained the order of the planets and their backward loops."},
      {c:"He was German, not Polish.", lab:"disputed", t:"He was born in a German-speaking city under the Polish king, wrote in Latin and German, and was loyal to the Polish crown. Modern national labels do not fit neatly."},
      {c:"He saw his printed book on his deathbed.", lab:"likely", t:"His friend Giese, who was not there, says so in a letter written weeks later. It is plausible but cannot be confirmed."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Nicolaus Copernicus, De revolutionibus orbium coelestium (1543), original Latin edition, public domain"},
      {n:"Copernicus, De revolutionibus, autograph manuscript, Jagiellonian Library, Kraków (digitised, free to view)"},
      {n:"Further reading: Owen Gingerich, The Book Nobody Read (2004)"},
      {n:"Further reading: Dava Sobel, A More Perfect Heaven (2011)"}
    ]}
  ]
},
"washington": {
  hero: "",
  kw: ["Mount Vernon","Virginia","surveyor","French and Indian War","Continental Army","Valley Forge","Delaware crossing","Trenton","Yorktown","Constitution","first president","Farewell Address","Martha","enslaved","cherry tree@myths","wooden teeth@myths","Cincinnatus"],
  lede: "A Virginia planter and surveyor who led a ragged army to victory over Britain, then did something kings rarely did: gave up power, twice. He also held hundreds of people in slavery, and freed only in his will those he owned himself.",
  sections: [
    {k:"short", h:"In short", ps:[
      "George Washington was born on 22 February 1732 in Westmoreland County, Virginia, a British colony, into a family of planters.",
      "He commanded the Continental Army in the American Revolutionary War from 1775 to 1783, presided over the convention that wrote the US Constitution in 1787, and served two terms as the first President of the United States, from 1789 to 1797.",
      "He died at his estate, Mount Vernon, on 14 December 1799. In his will he ordered that the enslaved people he owned himself be freed after his wife's death."
    ]},
    {k:"early", h:"Early life", ps:[
      "His father died when he was 11, ending hopes of an education in England. He learned surveying and at 17 became surveyor of Culpeper County.",
      "His half-brother Lawrence, whom he admired, owned Mount Vernon. In 1751 George travelled with him to Barbados, where he caught smallpox, which left him immune.",
      "He inherited enslaved people at 11, from his father's estate. By his death, 317 enslaved people lived at Mount Vernon, of whom 123 belonged to him."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Frontier war, 1753 to 1758. As a young Virginia militia officer he carried a warning to the French in the Ohio valley. In 1754 his men ambushed a French party, helping spark the Seven Years' War. He surrendered Fort Necessity, survived General Braddock's disastrous defeat in 1755, and commanded Virginia's forces.",
      "Planter and politician, 1759 to 1774. He married the wealthy widow Martha Dandridge Custis, enlarged Mount Vernon, and sat in Virginia's House of Burgesses, where he came to oppose British taxes.",
      "Commander, 1775. The Continental Congress chose him to command the new army besieging British-held Boston. The British left Boston in March 1776.",
      {t:"Crossing the Delaware, 25 to 26 December 1776. After losing New York, he led his army across the icy Delaware River at night and surprised the Hessian garrison at Trenton, then won again at Princeton, reviving the cause.", lab:"verified", why:"Recorded in his own letters and many officers' accounts."},
      "Valley Forge, winter 1777 to 1778. His army camped through a hard winter with little food and clothing; perhaps 2,000 died of disease. The Prussian officer von Steuben drilled the survivors into a professional force.",
      "Yorktown, 1781. With the French army and navy he trapped General Cornwallis at Yorktown, Virginia. The British surrender effectively ended the war; peace came in 1783.",
      "Resignation, 1783. He returned his commission to Congress and went home, an act admired across Europe. King George III reportedly said that if he did so, he would be the greatest man in the world.",
      "President, 1789 to 1797. Elected unanimously, he set precedents for the new office, kept the US out of war between Britain and France, and stepped down after two terms. His Farewell Address warned against political parties and foreign entanglements."
    ]},
    {k:"works", h:"What he left", ps:[
      "The precedent of two terms, followed by every president until Franklin Roosevelt and written into the Constitution in 1951.",
      "The Farewell Address (1796), still read aloud in the US Senate every year.",
      "Tens of thousands of letters and his diaries, published in a large scholarly edition that is free to read online.",
      "His will, which freed the 123 people he owned, provided for elderly freed people, and required that children be taught to read and write. The people Martha controlled from her first husband's estate were not freed."
    ]},
    {k:"people", h:"His people", ps:[
      "Martha Washington (1731 to 1802), his wife and partner.",
      "The Marquis de Lafayette, a young French volunteer whom he treated almost as a son.",
      "Alexander Hamilton, his aide in the war and his Treasury Secretary, and Thomas Jefferson, his Secretary of State.",
      "William Lee, an enslaved man who was his valet throughout the war, freed in his will.",
      "Ona Judge, an enslaved woman who escaped from his household in Philadelphia in 1796 and refused to return."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Britain's 13 colonies stretched along the Atlantic coast. Native American nations held most of the land beyond the Appalachians.",
      "Slavery was legal in all 13 colonies at the start of the war; about one in five Americans was enslaved.",
      "The French Revolution began in his first year as president, dividing Americans."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "He is called the 'Father of His Country'. The capital city, a state, and countless towns bear his name.",
      "His peaceful handover of power to John Adams in 1797 set a model for republics.",
      "Historians now also study him as an enslaver, and Mount Vernon tells the stories of the enslaved community."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"As a boy he confessed to cutting down a cherry tree: 'I cannot tell a lie.'", lab:"myth", t:"Invented by the writer Mason Locke Weems in the 1806 edition of his popular biography."},
      {c:"He had wooden teeth.", lab:"myth", t:"His dentures were made of ivory, metal, animal teeth and human teeth. His accounts record that in 1784 he bought teeth from enslaved people, possibly for this purpose."},
      {c:"He threw a silver dollar across the Potomac.", lab:"myth", t:"A legend; the Potomac at Mount Vernon is over a kilometre wide, and the United States minted no silver dollars until 1794. An older family story has him throwing a stone across the much narrower Rappahannock."},
      {c:"John Hanson, not Washington, was the first President of the United States.", lab:"myth", t:"Hanson was a President of the Congress under the Articles of Confederation, in 1781 to 1782. That was a presiding officer with no executive power, and others had chaired Congress before him. Washington was the first to hold the office of President of the United States."},
      {c:"He freed all the enslaved people at Mount Vernon.", lab:"myth", t:"He freed only those he owned outright, after Martha's death. Martha freed them early, in 1801. The 'dower' slaves remained enslaved and passed to her heirs."},
      {c:"He prayed in the snow at Valley Forge.", lab:"tradition", t:"A famous image based on a story told years later. There is no contemporary evidence."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"George Washington, State of the Union Addresses, Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/5010"},
      {n:"George Washington, Farewell Address (1796), Avalon Project, Yale Law School", u:"https://avalon.law.yale.edu/18th_century/washing.asp"},
      {n:"George Washington Papers, Library of Congress (free to view)"},
      {n:"Founders Online, National Archives: the Papers of George Washington (free to view)", u:"https://founders.archives.gov/"},
      {n:"Mount Vernon Ladies' Association: Washington and slavery"},
      {n:"Further reading: Ron Chernow, Washington: A Life (2010)"}
    ]}
  ]
},

"franklin": {
  hero: "",
  kw: ["Philadelphia","Boston","printer","Poor Richard","almanac","kite","lightning","lightning rod","electricity","bifocals","Franklin stove","Declaration of Independence","France","Paris","Treaty of Paris","Constitution","Autobiography","abolition","Silence Dogood","key@myths","turkey@myths"],
  lede: "A runaway printer's apprentice who became America's most famous scientist, wrote its funniest sayings, charmed France into backing the Revolution, and signed every one of its founding documents.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Benjamin Franklin was born in Boston on 17 January 1706, the 15th of 17 children of a soap and candle maker.",
      "He ran away to Philadelphia at 17, became a successful printer and publisher, and retired at 42 to study science and serve the public. His experiments showed that lightning is electricity.",
      "He helped draft the Declaration of Independence, won the French alliance, negotiated the peace with Britain, and sat in the Constitutional Convention. He died in Philadelphia on 17 April 1790, aged 84."
    ]},
    {k:"early", h:"Early life", ps:[
      "He had only two years of school. At 12 he was apprenticed to his brother James, a printer.",
      "At 16 he secretly wrote letters to James's newspaper as 'Silence Dogood', a middle-aged widow. They were printed and admired until he revealed he was the author.",
      "In 1723 he broke his apprenticeship and ran away. In his Autobiography he describes arriving in Philadelphia, dirty and tired, walking up Market Street with a roll of bread under each arm."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Printer, 1728 to 1748. He set up his own shop, bought the Pennsylvania Gazette, and from 1732 published Poor Richard's Almanack, full of sayings such as 'Early to bed and early to rise, makes a man healthy, wealthy and wise'.",
      "Civic projects. He helped found a lending library (1731), a volunteer fire company, the American Philosophical Society, an academy that became the University of Pennsylvania, and a hospital.",
      {t:"Electricity, 1746 to 1752. His experiments led him to name positive and negative charge and to invent the lightning rod. In June 1752, by the usual account, he flew a kite in a storm and drew sparks from a key on the string.", lab:"likely", why:"Franklin's own short account of October 1752 describes the experiment without a date. The date and details come from Joseph Priestley's account of 1767, based on Franklin's information. The only witness was his son."},
      "London, 1757 to 1775. He lived mostly in England as an agent for Pennsylvania and other colonies. He argued against the Stamp Act before Parliament in 1766. In 1774 he was humiliated before the Privy Council over leaked letters, and turned firmly against Britain.",
      "Independence, 1775 to 1776. Back in Philadelphia, he served in the Continental Congress and on the committee that drafted the Declaration of Independence, making small edits to Jefferson's draft.",
      "France, 1776 to 1785. In a fur cap and plain clothes he became a celebrity in Paris. He won the treaty of alliance of 1778, which brought French money, troops and ships, and helped negotiate the Treaty of Paris (1783), in which Britain recognised independence.",
      "Last years, 1785 to 1790. He served as President of Pennsylvania, attended the Constitutional Convention in 1787, and became president of the Pennsylvania Abolition Society. In 1790 he petitioned Congress to end slavery."
    ]},
    {k:"works", h:"What he made and wrote", ps:[
      "The lightning rod, the Franklin stove, bifocal glasses, a flexible urinary catheter, and the glass armonica, a musical instrument Mozart wrote for.",
      "He charted the Gulf Stream for ship captains and refused to patent his inventions, saying people should share in each other's discoveries.",
      "His Autobiography, begun in 1771 and unfinished at his death, one of the most famous American life stories.",
      "Poor Richard's Almanack, essays, hoaxes and satires, and a huge correspondence."
    ]},
    {k:"people", h:"His people", ps:[
      "Deborah Read Franklin (about 1708 to 1774), his common-law wife, who ran his business while he was in London. He was abroad when she died.",
      "William Franklin, his son, royal governor of New Jersey, who stayed loyal to Britain. They never reconciled.",
      "Sarah Franklin Bache, his daughter, who led women's fundraising for the army.",
      "Thomas Jefferson, John Adams and George Washington, fellow founders.",
      "Joseph Priestley and other British scientists, friends in the Royal Society."
    ]},
    {k:"world", h:"The world around him", ps:[
      "His life spanned the colonial age and the founding of the United States. Philadelphia grew into the largest city in British North America.",
      "The Enlightenment prized reason, science and self-improvement, and Franklin became its best-known American face.",
      "Franklin himself owned enslaved people for decades and printed advertisements for slave sales, before later turning against slavery."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "He is the only person who signed the Declaration of Independence, the treaty of alliance with France, the Treaty of Paris and the US Constitution.",
      "His face is on the US $100 bill. Institutions he started, from the library to the university, still exist.",
      "He left money in his will to Boston and Philadelphia to be invested for 200 years, funding loans and a technical school."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"Lightning struck his kite and he discovered electricity.", lab:"myth", t:"Electricity was already known. If lightning had struck the kite he might have been killed. He drew charge from the storm cloud, showing lightning is electrical."},
      {c:"He wanted the turkey as America's national bird.", lab:"myth", t:"In a 1784 letter to his daughter he joked that the bald eagle was 'a bird of bad moral character' and the turkey 'more respectable'. He never formally proposed it."},
      {c:"He invented daylight saving time.", lab:"myth", t:"In a 1784 satirical letter he suggested Parisians save candles by getting up earlier, woken by cannons. He never proposed changing the clocks; that idea came from others more than a century later."},
      {c:"He was president of the United States.", lab:"myth", t:"He was never president, though he was President of Pennsylvania's executive council."},
      {c:"He said 'Beer is proof that God loves us.'", lab:"myth", t:"He wrote something similar about wine and rain turning into wine in vineyards. The beer version is a modern misquote."},
      {c:"He invented the lightning rod.", lab:"verified", t:"Yes, and he published how to install one in Poor Richard's Almanack in 1753."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Benjamin Franklin, The Autobiography (edited by Charles W. Eliot, Harvard Classics, 1909), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/148"},
      {n:"Founders Online, National Archives: the Papers of Benjamin Franklin (free to view)", u:"https://founders.archives.gov/"},
      {n:"Joseph Priestley, The History and Present State of Electricity (1767), public domain"},
      {n:"Benjamin Franklin, Experiments and Observations on Electricity (1751), public domain"},
      {n:"Further reading: Walter Isaacson, Benjamin Franklin: An American Life (2003)"}
    ]}
  ]
},

"dickens": {
  hero: "",
  kw: ["Portsmouth","London","blacking factory","Marshalsea","debtors' prison","Pickwick","Oliver Twist","A Christmas Carol","Scrooge","David Copperfield","Bleak House","Great Expectations","A Tale of Two Cities","serial","public readings","Ellen Ternan","Staplehurst","Gad's Hill","Boz"],
  lede: "A boy who pasted labels on shoe-polish jars while his father sat in debtors' prison, and grew up to be the most famous novelist in the world, giving us Scrooge, Oliver Twist and a word, 'Dickensian', for the poverty he never forgot.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Charles Dickens was born on 7 February 1812 in Portsmouth, England, the second of eight children of John Dickens, a navy pay clerk.",
      "After a hard childhood he became a reporter. The Pickwick Papers (1836 to 1837) made him famous at 24, and for over 30 years he published novels in monthly or weekly parts that readers waited for eagerly.",
      "He edited magazines, campaigned on social issues, and gave hugely popular public readings. He died at his home, Gad's Hill Place in Kent, on 9 June 1870 and is buried in Westminster Abbey."
    ]},
    {k:"early", h:"Early life", ps:[
      "His early childhood in Chatham, Kent, was happy; he read his father's novels again and again.",
      {t:"In 1824, aged 12, he was sent to work at Warren's Blacking warehouse by the Thames, pasting labels on pots of boot polish. Days later his father was jailed for debt in the Marshalsea prison, where his mother and the younger children went to live with him.", lab:"verified", why:"Dickens wrote about it in a fragment of autobiography given to his friend John Forster, published after his death."},
      "His father inherited money and was released after a few months, but Charles stayed at the warehouse for a while longer. He told almost no one; his own children learned of it only from Forster's biography.",
      "He went back to school, then worked as a law clerk, learned shorthand and became a parliamentary reporter."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Boz, 1833 to 1836. He published sketches of London life under the pen name 'Boz', collected as Sketches by Boz.",
      "Pickwick, 1836. Hired to write text for comic sporting illustrations, he took over the project. The Pickwick Papers became a sensation once the cockney servant Sam Weller appeared. That year he married Catherine Hogarth.",
      "Oliver Twist and Nicholas Nickleby, 1837 to 1839. He attacked workhouses and cruel schools.",
      "America, 1842. He toured the United States, was mobbed by admirers, and angered his hosts by complaining about pirated editions and slavery.",
      "A Christmas Carol, December 1843. He wrote it in about six weeks and published it at his own expense. It sold out by Christmas Eve.",
      "David Copperfield and the great novels, 1849 to 1861. David Copperfield, his favourite, drew on his own boyhood. Bleak House, Little Dorrit, A Tale of Two Cities and Great Expectations followed.",
      {t:"Separation, 1858. He separated from Catherine, the mother of his ten children, and publicly blamed her. He had begun a secret relationship with a young actress, Ellen Ternan.", lab:"likely", why:"The separation and his public statements are documented. The nature of his bond with Ternan rests on indirect evidence, because letters were destroyed, but most biographers accept that she was his lover."},
      "Staplehurst and the readings, 1865 to 1870. He survived a train crash in which ten people died, and tended the injured. He threw himself into exhausting reading tours in Britain and America, which hastened his death from a stroke at 58. He left The Mystery of Edwin Drood unfinished."
    ]},
    {k:"works", h:"The work", ps:[
      "15 novels, including Oliver Twist (1838), A Christmas Carol (1843), David Copperfield (1850), Bleak House (1853), A Tale of Two Cities (1859) and Great Expectations (1861).",
      "Unforgettable characters: Scrooge, Fagin, Mr Micawber, Miss Havisham, Uriah Heep, the Artful Dodger.",
      "Magazines he edited, Household Words and All the Year Round, where he serialised his own work and others'.",
      "He wrote in instalments, often only a few weeks ahead, reacting to readers' responses."
    ]},
    {k:"people", h:"His people", ps:[
      "Catherine Dickens (1815 to 1879), his wife of 22 years.",
      "Ellen Ternan (1839 to 1914), the actress who was his companion in his last 12 years.",
      "John Forster (1812 to 1876), his closest friend and first biographer.",
      "Wilkie Collins, novelist and collaborator.",
      "Angela Burdett-Coutts, the banking heiress and philanthropist with whom he ran Urania Cottage, a home for women leaving prostitution."
    ]},
    {k:"world", h:"The world around him", ps:[
      "London grew from about 1 million to over 3 million people in his lifetime, with terrible slums, cholera and child labour.",
      "The New Poor Law of 1834 forced the poor into workhouses, which he attacked in Oliver Twist.",
      "Railways, cheap printing and rising literacy created a huge new reading public for serial fiction."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "His books have never been out of print and have been adapted thousands of times.",
      "A Christmas Carol helped shape the modern idea of Christmas as a time of family and charity.",
      "His fiction helped push reforms of schools, prisons, courts and sanitation."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"Dickens invented Christmas.", lab:"myth", t:"Christmas customs were already reviving. A Christmas Carol popularised a warm, generous family Christmas, but trees and cards had other sources."},
      {c:"He was paid by the word, so he padded his books.", lab:"myth", t:"He was paid by the instalment, not the word. Serial publication did shape his long, many-plotted structure."},
      {c:"He made up the name Scrooge from a gravestone misread as 'mean man'.", lab:"myth", t:"A story claims he misread 'meal man' as 'mean man' on an Edinburgh grave. It surfaced only in recent decades; no letter or diary of Dickens mentions it, and no record of such a gravestone has been found."},
      {c:"He wrote A Christmas Carol to pay off debts.", lab:"likely", t:"He needed money at the time, and he hoped it would sell well. In fact his first profits were disappointing because of its expensive production."},
      {c:"He was a model family man.", lab:"myth", t:"He cultivated that image, but treated his wife cruelly in their separation and hid his relationship with Ellen Ternan."},
      {c:"Crowds on the New York docks shouted to arriving ships: 'Is Little Nell dead?'", lab:"tradition", t:"A much-repeated story about the last instalments of The Old Curiosity Shop in 1841. It shows how eagerly readers followed him, but it comes from later retellings; no report from the time is known."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Charles Dickens, A Christmas Carol (1843), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/46"},
      {n:"Charles Dickens, Great Expectations (1861), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/1400"},
      {n:"Charles Dickens, Oliver Twist (1838), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/730"},
      {n:"John Forster, The Life of Charles Dickens (1872 to 1874), public domain"},
      {n:"Charles Dickens Museum, London"},
      {n:"Further reading: Claire Tomalin, Charles Dickens: A Life (2011)"}
    ]}
  ]
},

"nightingale": {
  hero: "",
  kw: ["Lady with the Lamp","Crimean War","Scutari","nursing","Notes on Nursing","statistics","rose diagram","polar area","sanitation","St Thomas'","Nightingale School","Florence","Embley","Mary Seacole","Sidney Herbert","Royal Statistical Society","bedridden"],
  lede: "A wealthy Victorian woman who defied her family to become a nurse, made the Crimean War's army hospitals cleaner, and then, from her bed, used charts and statistics to reform hospitals across the British Empire.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Florence Nightingale was born on 12 May 1820 in Florence, Italy, and named after the city. Her rich English parents were on a long tour of Europe.",
      "She trained as a nurse against her family's wishes, and in 1854 led a team of nurses to the British army hospital at Scutari (Üsküdar, in Istanbul) during the Crimean War. A report in The Times described her night rounds with a little lamp, and a poem by Longfellow in 1857 made her 'the Lady with the Lamp'.",
      "Back in Britain, often ill and bedridden, she campaigned for decades for army health, hospital design, nurse training and public health in India. She died in London on 13 August 1910, aged 90."
    ]},
    {k:"early", h:"Early life", ps:[
      "Her father taught her and her sister Parthenope at home: languages, history, philosophy and mathematics, which she loved.",
      {t:"In 1837, aged 16, she felt she had received a call from God to do some service, though she did not yet know what.", lab:"verified", why:"She wrote of it in private notes years later, giving the date as 7 February 1837."},
      "Nursing was seen as low work for poor women, and her family opposed it fiercely. In 1851 she trained for three months at the Lutheran deaconess institute at Kaiserswerth, Germany.",
      "In 1853 she became superintendent of a women's hospital in Harley Street, London."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Scutari, 1854. Reports in The Times on the suffering of wounded soldiers caused outrage. Her friend Sidney Herbert, Secretary at War, asked her to lead 38 nurses to the Barrack Hospital at Scutari. They arrived in November 1854.",
      "The hospital. It was overcrowded, filthy, and short of beds, food, soap and bandages. She organised supplies, laundries and kitchens, and made night rounds with a lamp. Soldiers revered her.",
      {t:"Death rates. The death rate at Scutari was very high in her first winter there. It fell sharply after a Sanitary Commission arrived in March 1855 and flushed out the sewers and improved ventilation.", lab:"verified", why:"From the army's own figures, which she later analysed. She came to accept that poor sanitation, not only lack of care, had caused most deaths."},
      "Illness, 1855 onward. She caught a severe fever in Crimea, likely brucellosis, which may explain chronic illness for decades. After 1857 she rarely left her rooms.",
      "Statistics and the Royal Commission, 1857 to 1858. She worked with the statistician William Farr to show that soldiers died far more of disease than wounds, using her famous 'rose' or polar-area diagrams. She pressed for the Royal Commission on army health, appointed in 1857, and supplied much of its evidence.",
      "The Nightingale School, 1860. With money raised in her honour she founded a training school for nurses at St Thomas' Hospital, London, the model for modern nursing schools.",
      "Later work. She advised on hospitals worldwide and spent years on sanitation and famine in India. In 1907 she became the first woman awarded the Order of Merit."
    ]},
    {k:"works", h:"What she made and wrote", ps:[
      "Notes on Nursing (1859), a short, practical book about fresh air, light, cleanliness, quiet and diet, read by families as well as nurses.",
      "Notes on Hospitals (1859), on hospital design: wards with windows on both sides and cross-ventilation.",
      "Polar-area diagrams showing causes of death month by month, among the first famous uses of charts to persuade policy-makers.",
      "About 14,000 surviving letters and many reports."
    ]},
    {k:"people", h:"Her people", ps:[
      "Sidney Herbert (1810 to 1861), politician and friend who sent her to Scutari and worked with her on army reform.",
      "William Farr (1807 to 1883), statistician and her collaborator.",
      "Parthenope Nightingale, her sister, with whom she had a difficult relationship.",
      "Mary Seacole (1805 to 1881), a Jamaican-born nurse and businesswoman who ran a 'British Hotel' for soldiers near the front. Nightingale was cool towards her.",
      "Alexis Soyer, the celebrity chef who reorganised the army's kitchens at Scutari."
    ]},
    {k:"world", h:"The world around her", ps:[
      "The Crimean War (1853 to 1856) pitted Britain, France and the Ottoman Empire against Russia. It was one of the first wars reported quickly by telegraph and by newspaper correspondents on the spot.",
      "Women of her class were expected to marry and not to work. She turned down a long courtship from Richard Monckton Milnes.",
      "The germ theory of disease was being developed by Pasteur and others; she long believed in 'miasma', bad air, as the cause."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "She made nursing a respected profession for women. International Nurses Day is held on her birthday, 12 May.",
      "Her use of statistics and diagrams influenced public health and data visualisation. She was the first woman elected a Fellow of the Royal Statistical Society, in 1858.",
      "The Florence Nightingale Museum stands at St Thomas' Hospital in London."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"She was a gentle angel who just comforted the dying.", lab:"myth", t:"She was a tough administrator, campaigner and statistician who fought the army bureaucracy."},
      {c:"Deaths at Scutari fell because of her nursing.", lab:"disputed", t:"Her organisation helped, but the big drop came after the Sanitary Commission's work on drains and ventilation in 1855."},
      {c:"She was an invalid who did little after Crimea.", lab:"myth", t:"She did her most influential work in the next 50 years, mostly from her bed or sofa, through letters, reports and visitors."},
      {c:"She opposed Mary Seacole.", lab:"disputed", t:"She wrote privately and unkindly about Seacole, but did not campaign against her. Seacole praised her in her memoir."},
      {c:"She invented the pie chart.", lab:"myth", t:"William Playfair made pie charts in 1801. She popularised the polar-area diagram, now often called a 'coxcomb'."},
      {c:"The lamp she carried was the kind shown in pictures.", lab:"myth", t:"Pictures usually show an Aladdin-style oil lamp. She carried a Turkish folding lantern with a candle inside; one is kept at the Florence Nightingale Museum."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Florence Nightingale, Notes on Nursing: What It Is, and What It Is Not (1859/1860), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/12439"},
      {n:"Florence Nightingale, Notes on Matters Affecting the Health, Efficiency and Hospital Administration of the British Army (1858), public domain"},
      {n:"Sir Edward Cook, The Life of Florence Nightingale (1913), public domain"},
      {n:"Florence Nightingale Museum, London"},
      {n:"Further reading: Mark Bostridge, Florence Nightingale: The Woman and Her Legend (2008)"}
    ]}
  ]
},
"pasteur": {
  hero: "",
  kw: ["germ theory","pasteurisation","fermentation","rabies","vaccine","Joseph Meister","anthrax","Pouilly-le-Fort","chirality","crystals","silkworm","spontaneous generation","swan-neck flask","Pasteur Institute","Dole","Arbois","Koch","Lister","microbes"],
  lede: "A tanner's son from eastern France who showed that microbes cause fermentation and disease, gave his name to the heating of milk, and in 1885 risked a rabies vaccine barely tested even on animals on a bitten nine-year-old boy, who lived.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Louis Pasteur was born on 27 December 1822 in Dole, in the Jura region of France, and grew up in Arbois, where his father was a tanner.",
      "A chemist by training, he discovered molecular 'handedness' in crystals, showed that living microbes cause fermentation and spoilage, and helped prove that germs cause infectious disease.",
      "He developed vaccines against chicken cholera, anthrax and rabies. The Pasteur Institute opened in Paris in 1888. He died near Paris on 28 September 1895."
    ]},
    {k:"early", h:"Early life", ps:[
      "As a boy he was a keen painter of pastel portraits of family and neighbours, and only an average student at first.",
      "He studied at the École Normale Supérieure in Paris and took his doctorate in 1847.",
      {t:"Crystals, 1848. Studying tartaric acid, he noticed that crystals of one form came in two mirror-image shapes. He separated them by hand under a microscope and showed they turned polarised light in opposite directions. It founded the study of molecular asymmetry.", lab:"verified", why:"Published in 1848 and confirmed by the physicist Jean-Baptiste Biot, who had him repeat it in front of him."},
      "In 1849 he married Marie Laurent, who became his assistant and secretary. Three of their five children died in childhood, at least two of them of typhoid, which made fighting disease personal for him."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Fermentation, 1857 to 1860s. Asked by a Lille distiller about spoiled alcohol, he showed that fermentation is the work of living yeast and that other microbes cause souring.",
      {t:"Spontaneous generation, 1859 to 1864. Many scientists thought life arose on its own in broth. Pasteur boiled broth in flasks with long, swan-shaped necks that let in air but trapped dust. The broth stayed clear unless the neck was broken.", lab:"verified", why:"Described in his 1861 paper and lectures. Some of his original flasks are still sterile and on display at the Pasteur Institute."},
      "Pasteurisation, 1860s. He found that gently heating wine to about 55 degrees Celsius killed spoilage microbes without ruining the taste. The method was later applied to beer and milk.",
      "Silkworms, 1865 to 1870. He spent five years helping save France's silk industry by identifying diseased silkworm eggs. In 1868 a stroke left his left side partly paralysed.",
      "Vaccines, 1879 to 1881. He found that aged cultures of chicken cholera protected hens. In May 1881, at Pouilly-le-Fort, he publicly vaccinated sheep against anthrax; the vaccinated ones survived exposure and the others died.",
      {t:"Rabies, July 1885. Joseph Meister, nine, had been badly bitten by a rabid dog. Pasteur, not a doctor, had doctors give him 13 injections of a vaccine from dried rabbit spinal cord. The boy did not develop rabies.", lab:"verified", why:"Recorded by Pasteur and the doctors involved. His notebooks, opened in the 1970s, show he had tested the vaccine on fewer animals than he implied in public."},
      "The Pasteur Institute, 1888. Funded by public subscription, it opened in Paris and became a world centre for research. He was buried in a crypt there."
    ]},
    {k:"works", h:"The work", ps:[
      "Germ theory: with Robert Koch and others, he showed that specific microbes cause specific diseases.",
      "Pasteurisation, still used for milk and juice worldwide.",
      "Vaccines against chicken cholera, anthrax, swine erysipelas and rabies. He used the word 'vaccine' for all of them, honouring Edward Jenner's smallpox work.",
      "Studies on Wine (1866), Studies on Beer (1876) and work on silkworm disease."
    ]},
    {k:"people", h:"His people", ps:[
      "Marie Pasteur (1826 to 1910), his wife and close collaborator.",
      "Émile Roux (1853 to 1933), his chief assistant, who did much of the rabies work and later developed diphtheria treatment.",
      "Robert Koch (1843 to 1910), the German bacteriologist and his great rival.",
      "Joseph Lister, the British surgeon who applied Pasteur's ideas to make surgery antiseptic, and wrote to thank him.",
      "Joseph Meister, the rabies patient, who later worked as caretaker at the Pasteur Institute."
    ]},
    {k:"world", h:"The world around him", ps:[
      "France lost the Franco-Prussian War in 1871. Pasteur returned an honorary degree from Bonn in protest, and the rivalry with German science, including Koch, was partly patriotic.",
      "Before germ theory, many doctors blamed disease on bad air or imbalance, and surgeons operated in unwashed coats.",
      "Industry was growing fast, and his work began with practical problems from brewers, winemakers and farmers."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "Germ theory transformed medicine, surgery, food safety and public health.",
      "The Pasteur Institute network today has over 30 institutes worldwide.",
      "Streets and schools across France and the former French empire bear his name."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"Pasteur discovered germs.", lab:"myth", t:"Microbes were first seen by Antonie van Leeuwenhoek in the 1670s. Pasteur helped show what they do."},
      {c:"Pasteur invented vaccination.", lab:"myth", t:"Edward Jenner developed smallpox vaccination in 1796. Pasteur created the first vaccines made in a laboratory by weakening germs."},
      {c:"On his deathbed he admitted Béchamp was right that germs don't matter.", lab:"myth", t:"A quote often circulated online ('the microbe is nothing, the terrain is everything') has no reliable source."},
      {c:"His public demonstrations were completely honest.", lab:"myth", t:"His notebooks show that at Pouilly-le-Fort he used a vaccine weakened with a chemical, prepared by his assistants Chamberland and Roux and close to his rival Toussaint's method, not the oxygen method he implied."},
      {c:"He was a medical doctor.", lab:"myth", t:"He was a chemist with no medical degree, which is why doctors gave the rabies injections."},
      {c:"Pasteurisation sterilises food.", lab:"myth", t:"It kills most harmful microbes but not all. Pasteurised milk still needs refrigeration."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"René Vallery-Radot, The Life of Pasteur, translated by Mrs R. L. Devonshire (1902, 1920 edition), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/60956"},
      {n:"Louis Pasteur, Studies on Fermentation (1876, English 1879), public domain"},
      {n:"Pasteur's laboratory notebooks, Bibliothèque nationale de France (free to view)"},
      {n:"Institut Pasteur, Paris (official site)", u:"https://www.pasteur.fr/en"},
      {n:"Further reading: Gerald L. Geison, The Private Science of Louis Pasteur (1995)"}
    ]}
  ]
},

"monet": {
  hero: "",
  kw: ["Impressionism","Impression, Sunrise","Le Havre","Boudin","Argenteuil","Camille","Giverny","water lilies","Nymphéas","haystacks","Rouen Cathedral","series","Japanese bridge","Orangerie","Clemenceau","cataracts","en plein air","Renoir","Salon"],
  lede: "A caricaturist from Le Havre who took his easel outdoors to catch the light, whose painting of a misty harbour gave Impressionism its name, and who spent his last thirty years painting the water-lily pond he built.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Claude Monet was born in Paris on 14 November 1840 and grew up in the port of Le Havre, Normandy.",
      "He became a leader of the painters later called Impressionists, who painted outdoors in quick, broken brushstrokes to capture light and atmosphere. His Impression, Sunrise gave the movement its name in 1874.",
      "From 1883 he lived at Giverny, where he made a garden and water-lily pond that he painted for decades. He died there on 5 December 1926."
    ]},
    {k:"early", h:"Early life", ps:[
      "As a teenager in Le Havre he sold caricatures of local people for 10 to 20 francs each.",
      {t:"The landscape painter Eugène Boudin persuaded him to paint outdoors. Monet later said it was as if a veil had been torn from his eyes.", lab:"likely", why:"Monet's own account, given many years later in interviews."},
      "He studied in Paris, met Pierre-Auguste Renoir, Alfred Sisley and Frédéric Bazille at the studio of Charles Gleyre, and served briefly in the army in Algeria."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Camille, 1865 to 1879. Camille Doncieux became his model and partner; they married in 1870. They were often desperately poor. He painted her in Women in the Garden and many other works. She died in 1879, aged 32, and he painted her on her deathbed.",
      "London, 1870 to 1871. Fleeing the Franco-Prussian War, he painted the Thames and saw works by Turner and Constable. He met the dealer Paul Durand-Ruel, who would support the Impressionists.",
      {t:"The first exhibition, 1874. Tired of rejections by the official Salon, Monet and friends held their own show in the photographer Nadar's former studio. The critic Louis Leroy mocked Monet's Impression, Sunrise and called the group 'Impressionists'. They adopted the name.", lab:"verified", why:"Leroy's review in Le Charivari, 25 April 1874, survives."},
      "Giverny, 1883. He rented, then bought, a house in the village of Giverny with Alice Hoschedé, whom he married in 1892, and their combined eight children.",
      "The series, 1890s. He painted the same subject again and again at different times and weather: Haystacks, Poplars, Rouen Cathedral and, from 1899, the Houses of Parliament in London. The series sold very well and made him rich.",
      "The water garden, 1893 onward. He diverted a stream to make a lily pond with a Japanese-style footbridge and painted it about 250 times.",
      "Last years. Alice died in 1911 and his son Jean in 1914. Cataracts clouded his vision and changed his colours. Encouraged by his friend, the prime minister Georges Clemenceau, he painted huge water-lily panels as a gift to France after the First World War."
    ]},
    {k:"works", h:"The work", ps:[
      "Impression, Sunrise (1872), the harbour at Le Havre in mist, now in the Musée Marmottan Monet, Paris.",
      "Women in the Garden (1866), The Magpie (1869), Poppies (1873) and Woman with a Parasol (1875).",
      "The series: Haystacks (1890 to 1891), Rouen Cathedral (1892 to 1894) and the Houses of Parliament (1900 to 1905).",
      "The Water Lilies (Nymphéas), including the giant panels installed in two oval rooms of the Musée de l'Orangerie in Paris in 1927."
    ]},
    {k:"people", h:"His people", ps:[
      "Camille Doncieux (1847 to 1879), his first wife and favourite model.",
      "Alice Hoschedé (1844 to 1911), his second wife.",
      "Pierre-Auguste Renoir, with whom he painted side by side at La Grenouillère in 1869.",
      "Georges Clemenceau (1841 to 1929), French prime minister and close friend.",
      "Paul Durand-Ruel, the dealer who sold Impressionism to America."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Paris was rebuilt with wide boulevards under Napoleon III. Railways took Parisians to the countryside and the coast, which the Impressionists painted.",
      "Paint in tin tubes, from the 1840s, made outdoor painting easy.",
      "Japanese prints flooded Paris after Japan opened to trade; Monet collected over 200 of them, by Hokusai, Hiroshige and others."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "Impressionism changed painting, and his late water lilies are seen as a step toward abstract art.",
      "His house and gardens at Giverny are open to visitors.",
      "His paintings are among the most valuable in the world: one of his Haystacks sold for about $110 million in 2019."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He painted everything outdoors, start to finish.", lab:"myth", t:"He started outdoors but often finished in the studio, especially the series and the big water lilies."},
      {c:"He was always rich and successful.", lab:"myth", t:"He was very poor in the 1860s and 1870s, begging friends for loans. Success came in the late 1880s."},
      {c:"His late blurry style was only because of cataracts.", lab:"disputed", t:"Cataracts changed how he saw colour, and he had surgery in 1923. But he was already moving toward looser painting before."},
      {c:"Impressionism was named in praise.", lab:"myth", t:"It started as a sneer by a critic."},
      {c:"Monet and Manet were the same person.", lab:"myth", t:"Édouard Manet was a different, older painter, sometimes confused with him. At first Manet was annoyed by the similar name."},
      {c:"He destroyed paintings he disliked.", lab:"verified", t:"He slashed or burned canvases he was unhappy with, including about 15 water-lily paintings in 1908."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Georges Clemenceau, Claude Monet: les Nymphéas (1928, in French), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/75353"},
      {n:"Wynford Dewhurst, Impressionist Painting: Its Genesis and Development (1904), public domain"},
      {n:"Louis Leroy, 'L'Exposition des impressionnistes', Le Charivari, 25 April 1874, public domain"},
      {n:"Art Institute of Chicago: Monet works, open access (CC0)"},
      {n:"Fondation Claude Monet, Giverny", u:"https://fondation-monet.com/en/"},
      {n:"Further reading: Paul Hayes Tucker, Claude Monet: Life and Art (1995)"}
    ]}
  ]
},

"victoria": {
  hero: "",
  kw: ["Kensington Palace","Albert","Prince Albert","Great Exhibition","Balmoral","Osborne","Empress of India","Diamond Jubilee","widow","Disraeli","Gladstone","Abdul Karim","John Brown","grandmother of Europe","haemophilia","Victorian","We are not amused@myths","journal"],
  lede: "An 18-year-old who became queen in 1837, married her cousin Albert for love, wore black for forty years after he died, and reigned over an empire covering a quarter of the world for 63 years, longer than any British monarch before her.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Victoria was born at Kensington Palace, London, on 24 May 1819, the only child of Prince Edward, Duke of Kent, a son of George III.",
      "She became queen on 20 June 1837 at 18. She married Prince Albert of Saxe-Coburg and Gotha in 1840; they had nine children, whose marriages linked her to most royal houses of Europe.",
      "Albert's death in 1861 plunged her into long mourning. She was proclaimed Empress of India in 1876 and celebrated Golden and Diamond Jubilees. She died at Osborne House on the Isle of Wight on 22 January 1901."
    ]},
    {k:"early", h:"Early life", ps:[
      "Her father died when she was eight months old. Her German-born mother and her adviser Sir John Conroy raised her under the strict 'Kensington System', so she never slept alone or walked downstairs without holding someone's hand.",
      "She kept a journal from the age of 13 until just before her death, filling over 120 volumes.",
      {t:"Woken early on 20 June 1837, she learned that her uncle William IV had died and she was queen. She noted that she received the news, and later her prime minister, alone, without her mother.", lab:"verified", why:"Recorded in her own journal for that day."}
    ]},
    {k:"turns", h:"Turning points", ps:[
      "The young queen, 1837 to 1840. She relied on the Whig prime minister Lord Melbourne as mentor. In the 'Bedchamber Crisis' of 1839 she refused to change her ladies-in-waiting for a new Tory government.",
      {t:"Marriage, 1840. As queen, she proposed to Albert, her first cousin. They married on 10 February 1840; she wore white, helping make white wedding dresses fashionable.", lab:"verified", why:"From her journal and court records. Her dress survives in the Royal Collection."},
      "Albert's partnership, 1840 to 1861. Albert became her chief adviser. He organised the Great Exhibition of 1851 in the Crystal Palace. They built family homes at Osborne and Balmoral.",
      "Assassination attempts. She survived at least seven attempts, the first in 1840, often by disturbed young men with pistols.",
      "Widowhood, 1861. Albert died, probably of typhoid or a chronic illness, on 14 December 1861, aged 42. She withdrew from public life for years and wore black for the rest of her life. Republican feeling grew.",
      "Empress, 1876. Prime Minister Benjamin Disraeli, whom she liked, passed an act making her Empress of India.",
      "Jubilees, 1887 and 1897. Her Golden and Diamond Jubilees were huge imperial celebrations, and she became a symbol of the British Empire."
    ]},
    {k:"works", h:"What she left", ps:[
      "Her journals and many thousands of letters, edited and published in part, including nine volumes of The Letters of Queen Victoria.",
      "Leaves from the Journal of Our Life in the Highlands (1868), a bestseller about her Scottish holidays.",
      "The model of a modern constitutional monarch, who advised and warned but did not govern.",
      "Her name for an age: the Victorian era."
    ]},
    {k:"people", h:"Her people", ps:[
      "Prince Albert (1819 to 1861), her husband.",
      "Her nine children, including Victoria, German Empress, and Edward VII, who succeeded her.",
      "Lord Melbourne, Benjamin Disraeli and William Gladstone, her prime ministers. She adored Disraeli and disliked Gladstone.",
      "John Brown, her Scottish servant and close companion after Albert's death.",
      "Abdul Karim, 'the Munshi', an Indian servant who taught her Urdu and became a trusted secretary, to the fury of her household."
    ]},
    {k:"world", h:"The world around her", ps:[
      "In her reign Britain became the world's greatest industrial and imperial power, with railways, telegraph and factories.",
      "Its empire grew to cover about a quarter of the world's land, including India after the 1857 uprising, much of Africa, and settlements in Australia, Canada and New Zealand. For many colonised peoples it meant conquest and famine.",
      "At home, the vote was gradually extended to more men; women did not get it during her lifetime."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "Her 63 years and 7 months were the longest British reign until Elizabeth II passed her in 2015.",
      "Her grandchildren reigned in Britain and Germany and were consorts on the thrones of Russia, Norway, Greece, Romania and Spain, earning her the name 'grandmother of Europe'.",
      "She carried the gene for haemophilia, which passed to royal families including Russia's."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"She said 'We are not amused.'", lab:"tradition", t:"The line comes from second-hand anecdotes with no firm source. Her granddaughter Princess Alice said the queen told her she had never said it, and her journals show a lively sense of humour."},
      {c:"She was always gloomy and stern.", lab:"myth", t:"As a young woman she loved dancing, opera and riding. Her image as a grim widow came from her long mourning."},
      {c:"She was the first to wear a white wedding dress.", lab:"myth", t:"Others had worn white before, but her wedding made it fashionable."},
      {c:"She refused to believe lesbians existed, so it was not made illegal.", lab:"myth", t:"There is no evidence of this. Laws against sex between women were never proposed in her reign."},
      {c:"She was thoroughly English by descent.", lab:"myth", t:"Her mother was German, and her father's family, the Hanoverians, was largely German by descent. She was born and raised in England, often spoke German with Albert, and thought of herself as British."},
      {c:"She married John Brown in secret.", lab:"myth", t:"Rumours spread in her lifetime. There is no reliable evidence."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Queen Victoria, Leaves from the Journal of Our Life in the Highlands, edited by Arthur Helps (1868), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/66173"},
      {n:"The Letters of Queen Victoria, edited by A. C. Benson and Viscount Esher (1907), public domain"},
      {n:"Queen Victoria's Journals, Royal Archives and Bodleian Libraries (online)"},
      {n:"Royal Collection Trust: Queen Victoria", u:"https://www.rct.uk/"},
      {n:"Further reading: Julia Baird, Victoria the Queen (2016)"}
    ]}
  ]
},

"andersen": {
  hero: "",
  kw: ["Odense","Copenhagen","fairy tales","The Little Mermaid","The Ugly Duckling","The Emperor's New Clothes","The Snow Queen","The Little Match Girl","The Princess and the Pea","The Tinderbox","Royal Theatre","Jonas Collin","Dickens","Jenny Lind","travel","shoemaker"],
  lede: "A shoemaker's son from Odense who went to Copenhagen at 14 to be a star, failed as a singer, dancer and actor, and found fame instead with fairy tales such as The Ugly Duckling, read in more languages than almost any other book.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Hans Christian Andersen was born on 2 April 1805 in Odense, Denmark. His father was a poor shoemaker, his mother a washerwoman.",
      "He moved to Copenhagen at 14, struggled for years, and with the help of patrons got an education. He wrote novels, poems, plays and travel books, but became world famous for his 156 fairy tales and stories, published from 1835 to 1872.",
      "He never married. He died in Copenhagen on 4 August 1875, aged 70, a national hero."
    ]},
    {k:"early", h:"Early life", ps:[
      "His family lived in one room. His father read him The Arabian Nights and built him a toy theatre. His father died in 1816, after serving as a soldier.",
      "He left school early, worked briefly in a cloth mill and a tobacco factory, and spent his time making puppet shows and singing.",
      {t:"In 1819, aged 14, he went to Copenhagen with a little money, determined to become famous. A fortune-teller, he said, had told his mother that Odense would one day be lit up in his honour.", lab:"likely", why:"From his autobiography, The Fairy Tale of My Life, which tells his life as a fairy tale and must be read with care."}
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Struggle, 1819 to 1822. He tried to join the Royal Theatre as a singer, dancer and actor. His voice broke and he was let go.",
      "School, 1822 to 1828. Jonas Collin, a director of the Royal Theatre, obtained a royal grant to send him to grammar school in Slagelse. Aged 17 among younger boys, he was bullied by the headmaster.",
      "First success, 1829 to 1835. A comic travel fantasy, A Walk from Holmen's Canal to Amager, sold well. His novel The Improvisatore (1835), set in Italy, made his name across Europe.",
      "Fairy Tales, 1835. His first small booklet, Fairy Tales Told for Children, included The Tinderbox and The Princess and the Pea. Critics were unimpressed at first.",
      "The great tales, 1836 to 1848. The Little Mermaid and The Emperor's New Clothes (1837), The Ugly Duckling (1843), The Snow Queen (1844) and The Little Match Girl (1845) followed.",
      "Travel. He made about 30 trips abroad, visiting Italy, Greece, Turkey, Spain and Britain. In 1857 he stayed with Charles Dickens for five weeks, far longer than Dickens wanted.",
      "Fame and death, 1867 to 1875. Odense made him an honorary citizen in 1867 and lit up the town for him, as the fortune-teller had foretold. He was badly hurt in a fall from bed in 1872, never fully recovered, and died of liver cancer in 1875 at the home of friends."
    ]},
    {k:"works", h:"The work", ps:[
      "156 fairy tales and stories, including The Little Mermaid, The Ugly Duckling, The Emperor's New Clothes, The Snow Queen, The Little Match Girl, The Steadfast Tin Soldier, Thumbelina and The Nightingale.",
      "Unlike the Brothers Grimm, who collected folk tales, he invented most of his, giving them a personal, often bittersweet voice.",
      "Novels, plays, poems, travel books, and three autobiographies.",
      "Delicate paper cut-outs, which he made while telling stories to children."
    ]},
    {k:"people", h:"His people", ps:[
      "Jonas Collin (1776 to 1861), his patron and father figure, and Collin's son Edvard, whom Andersen loved and who kept him at arm's length.",
      "Jenny Lind (1820 to 1887), the 'Swedish Nightingale', the singer he loved; she thought of him as a brother.",
      "Charles Dickens, whose friendship ended after Andersen's long visit.",
      "Riborg Voigt, an early love, whose letter was found in a pouch on his chest when he died."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Denmark lost Norway in 1814 and Schleswig-Holstein in 1864, but enjoyed a 'Golden Age' of culture in Copenhagen, with the philosopher Kierkegaard and the sculptor Thorvaldsen.",
      "Romanticism celebrated folk tradition and childhood imagination.",
      "Children's books were becoming a market of their own."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "His tales are translated into more than 125 languages.",
      "The Little Mermaid statue in Copenhagen harbour, unveiled in 1913, is a symbol of Denmark. His birthday, 2 April, is International Children's Book Day.",
      "The Hans Christian Andersen Award, given since 1956, is the leading international prize for children's literature."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He collected traditional folk tales, like the Grimms.", lab:"myth", t:"A few early tales retell folk stories he heard as a child, but most are his own inventions."},
      {c:"The Little Mermaid has a happy ending.", lab:"myth", t:"In his story she fails to win the prince and turns into sea foam, then becomes a daughter of the air who may earn a soul. The happy ending is from later adaptations."},
      {c:"The Ugly Duckling is about his own life.", lab:"likely", t:"He is reported to have said as much himself, and readers have long seen it so."},
      {c:"He was afraid of being buried alive.", lab:"verified", t:"He sometimes left a note by his bed saying 'I only seem dead', so no one would bury him by mistake."},
      {c:"He was the son of a king.", lab:"myth", t:"A theory claims he was a secret royal child. There is no evidence; parish records name his parents."},
      {c:"He wrote only for children.", lab:"myth", t:"He wanted adults to read his tales too, and many carry irony and sorrow aimed at older readers."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Hans Christian Andersen, Andersen's Fairy Tales, Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/1597"},
      {n:"Hans Christian Andersen, The True Story of My Life, translated by Mary Howitt (1847), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/7007"},
      {n:"Hans Christian Andersen Centre, University of Southern Denmark", u:"https://andersen.sdu.dk/"},
      {n:"H. C. Andersen Museum, Odense"},
      {n:"Further reading: Jackie Wullschlager, Hans Christian Andersen: The Life of a Storyteller (2000)"}
    ]}
  ]
},

"aristotle": {
  hero: "",
  kw: ["Stagira","Macedon","Plato","Academy","Lyceum","Peripatetic","Alexander the Great","logic","syllogism","biology","Lesbos","Nicomachean Ethics","Politics","Poetics","Metaphysics","golden mean","four causes","The Philosopher","heavy objects@myths"],
  lede: "A doctor's son from northern Greece who studied with Plato for twenty years, tutored the young Alexander the Great, and then tried to understand everything: logic, animals, stars, ethics, politics, poetry. For two thousand years scholars simply called him 'the Philosopher'.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Aristotle was born in 384 BCE in Stagira, a small Greek town in Chalcidice, near the kingdom of Macedon.",
      "At about 17 he went to Athens and studied at Plato's Academy for some 20 years. He later tutored the young Alexander of Macedon, then founded his own school in Athens, the Lyceum, in 335 BCE.",
      "He wrote on almost every field of knowledge. About a third of his work survives, mostly as lecture notes. He died in Chalcis, on the island of Euboea, in 322 BCE."
    ]},
    {k:"early", h:"Early life", ps:[
      "His father, Nicomachus, was physician to King Amyntas III of Macedon, the grandfather of Alexander. Both parents died when he was young, and a guardian, Proxenus, raised him.",
      "In Athens he became the best-known student of Plato's Academy.", {t:"Plato is said to have called him 'the mind' of the school.", lab:"tradition", why:"The nickname comes from biographies written many centuries later."},
      "When Plato died in 347 BCE, the Academy passed to Plato's nephew Speusippus. Aristotle left Athens, perhaps also because anti-Macedonian feeling was rising there."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Assos and Lesbos, 347 to 343 BCE. He lived at the court of Hermias, ruler of Atarneus in Asia Minor, and married his niece or adopted daughter Pythias. On the island of Lesbos, with his student Theophrastus, he studied sea creatures in the lagoon of Pyrrha.",
      {t:"Tutor to Alexander, 343 to about 340 BCE. King Philip II invited him to teach his teenage son Alexander at Mieza, in Macedon.", lab:"likely", why:"Reported by Plutarch and other later writers. The tutoring is generally accepted, though we know little about what he taught."},
      "The Lyceum, 335 BCE. Back in Athens, he taught at a gymnasium sacred to Apollo Lyceus. His followers were called Peripatetics, probably after the school's covered walkway, the peripatos; a later tradition says he taught while walking. He collected a large library and specimens.",
      "Flight, 323 BCE. When Alexander died, Athenians turned against Macedonians. Accused of impiety, Aristotle left for Chalcis, reportedly saying he would not let Athens 'sin twice against philosophy', recalling Socrates. He died there the next year."
    ]},
    {k:"works", h:"The work", ps:[
      "Logic: the Organon, which set out the syllogism, the first formal logic. The textbook example, added by later tradition, runs: 'All men are mortal; Socrates is a man; so Socrates is mortal'.",
      "Nature: Physics, On the Heavens and On the Soul. He described four kinds of cause for anything: what it is made of, its form, what made it, and its purpose.",
      "Biology: History of Animals and Parts of Animals, describing hundreds of species from careful observation, including how octopuses mate and how a chick develops in the egg.",
      "Ethics and politics: the Nicomachean Ethics, on happiness as a life of virtue, with virtue as a mean between extremes, and the Politics, comparing constitutions of Greek cities.",
      "The Poetics, on tragedy, plot and catharsis, and the Rhetoric, on persuasion."
    ]},
    {k:"people", h:"His people", ps:[
      "Plato (about 428 to 347 BCE), his teacher, whose theory of Forms he rejected.",
      "Alexander the Great (356 to 323 BCE), his pupil.",
      "Theophrastus (about 371 to 287 BCE), his student and successor at the Lyceum, the founder of botany.",
      "Pythias, his wife, and after her death Herpyllis, his companion and mother of his son Nicomachus."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Philip II of Macedon conquered Greece, and Alexander went on to conquer the Persian Empire. Aristotle's world shifted from independent city-states to great kingdoms.",
      "Yet in the Politics he still treated the city-state as the natural form of community.",
      "He accepted slavery as natural for some people and treated women as inferior, views common in his time and long challenged since."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "His works were preserved and studied in Arabic by scholars such as al-Farabi, Avicenna and Averroes, then returned to Latin Europe in the 12th and 13th centuries.",
      "Thomas Aquinas combined his philosophy with Christian theology. Dante called him 'the master of those who know'.",
      "His physics was overturned in the Scientific Revolution, but his logic, ethics and biology are still studied."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"No one questioned his idea that heavier objects fall faster until Galileo.", lab:"myth", t:"He did teach that heavier bodies fall faster. But John Philoponus in the 6th century, and medieval and Renaissance thinkers after him, had challenged it long before Galileo."},
      {c:"He believed women have fewer teeth than men.", lab:"verified", t:"He wrote it in History of Animals. Bertrand Russell later mocked him for not simply counting."},
      {c:"He taught Alexander to conquer the world.", lab:"myth", t:"There is no evidence he influenced Alexander's conquests, and the two seem to have grown apart after Alexander had Aristotle's relative Callisthenes arrested in 327 BCE."},
      {c:"His surviving works are polished books.", lab:"myth", t:"What survives are mostly lecture notes and treatises for his school. His polished dialogues for the public, praised by Cicero, are lost."},
      {c:"His manuscripts were lost in a cellar for centuries.", lab:"disputed", t:"The ancient geographer Strabo says they were hidden in a cellar in Scepsis and recovered in the 1st century BCE. Historians debate how much this story matters."},
      {c:"He thought the brain was for cooling the blood.", lab:"verified", t:"Yes. He believed the heart was the seat of thought and the brain cooled it."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Aristotle, The Nicomachean Ethics, translated by D. P. Chase (1847; Everyman edition 1911), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/8438"},
      {n:"Aristotle, Politics, translated by William Ellis (1912 edition), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/6762"},
      {n:"Aristotle, Poetics, translated by S. H. Butcher (1895), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/1974"},
      {n:"Diogenes Laertius, Lives of Eminent Philosophers, Book V (about 3rd century CE), public domain translations"},
      {n:"Further reading: Stanford Encyclopedia of Philosophy, 'Aristotle' (free online)", u:"https://plato.stanford.edu/entries/aristotle/"},
      {n:"Further reading: Armand Marie Leroi, The Lagoon: How Aristotle Invented Science (2014)"}
    ]}
  ]
},

"archimedes": {
  hero: "",
  kw: ["Syracuse","Sicily","Eureka","bath","crown","buoyancy","lever","Give me a place to stand","pi","circle","sphere and cylinder","Archimedes screw","claw","siege","Marcellus","Second Punic War","palimpsest","Method","death ray@myths","mirrors@myths"],
  lede: "The greatest mathematician of the ancient world, who worked out the value of pi, the volume of a sphere and the law of the lever, built war machines that held off the Roman army, and was killed, the story goes, while drawing circles in the sand.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Archimedes was born around 287 BCE in Syracuse, a Greek city on the island of Sicily. His father, Phidias, was an astronomer.",
      "He studied geometry, mechanics and hydrostatics, wrote at least ten surviving works, and invented machines for his city's king, Hiero II.",
      "During the Second Punic War, Syracuse sided with Carthage. When Rome finally took the city in 212 BCE, a Roman soldier killed him, against the orders of the Roman general Marcellus."
    ]},
    {k:"early", h:"Early life", ps:[
      "Little is known of his youth. He may have studied in Alexandria, the great centre of Greek learning in Egypt, because he wrote letters to mathematicians there, including Eratosthenes.",
      "He may have been related to King Hiero II, according to Plutarch.",
      "He dedicated his work The Sand-Reckoner to Hiero's son Gelon."
    ]},
    {k:"turns", h:"Turning points", ps:[
      {t:"The crown, and 'Eureka!'. Hiero suspected a goldsmith had mixed silver into a gold crown. Archimedes, noticing the water rise as he stepped into a bath, realised he could compare volumes of water displaced, and ran home naked shouting 'Eureka!' ('I have found it!').", lab:"tradition", why:"The story comes from the Roman architect Vitruvius, writing about 200 years later. Archimedes' own On Floating Bodies uses a different, more precise principle."},
      {t:"Moving the ship. To show the power of levers and pulleys, he is said to have moved a fully loaded ship single-handed, and to have told Hiero: 'Give me a place to stand, and I will move the earth.'", lab:"tradition", why:"Reported by Plutarch and Pappus of Alexandria centuries later. The quotation exists in several versions."},
      "The siege of Syracuse, 214 to 212 BCE. When the Romans attacked, his machines defended the walls: catapults of different ranges and the 'claw', a crane that hooked Roman ships, lifted them and dropped them. The Roman army gave up assault and blockaded the city instead.",
      {t:"His death, 212 BCE. After the Romans entered Syracuse during a festival, a soldier found him absorbed in a geometry problem. In the best-known version he told the soldier not to disturb his circles, and was killed.", lab:"likely", why:"Ancient writers agree he was killed by a soldier, against Marcellus's orders. The 'circles' detail varies between Livy, Plutarch and Valerius Maximus."}
    ]},
    {k:"works", h:"The work", ps:[
      "On the Measurement of a Circle: he showed that pi lies between 3 10/71 and 3 1/7 using polygons with 96 sides.",
      "On the Sphere and Cylinder: a sphere has two-thirds the volume and surface area of the cylinder that encloses it. He asked for this to be carved on his tomb.",
      "On the Equilibrium of Planes, setting out the law of the lever, and On Floating Bodies, with the principle that a floating body displaces its own weight of fluid.",
      "The Sand-Reckoner, in which he invented a system for naming enormous numbers and estimated how many grains of sand would fill the universe.",
      "The Method, which shows how he used ideas close to modern calculus. It was known only from the Archimedes Palimpsest, a 10th-century copy scraped and overwritten with prayers, rediscovered in 1906."
    ]},
    {k:"people", h:"His people", ps:[
      "Hiero II (ruled about 270 to 215 BCE), king of Syracuse, his patron.",
      "Eratosthenes of Cyrene (about 276 to 194 BCE), the scholar in Alexandria who measured the earth, and to whom he sent The Method.",
      "Conon of Samos, an astronomer friend in Alexandria, whose death he mourned.",
      "Marcus Claudius Marcellus, the Roman general who besieged Syracuse and is said to have grieved at his death."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Syracuse was one of the largest Greek cities, caught between the rising powers of Rome and Carthage.",
      "Alexandria under the Ptolemies had the famous Library and Museum, where Euclid had worked a generation earlier.",
      "In China, the Qin dynasty unified the country in 221 BCE, a decade before his death."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "He is counted with Newton and Gauss among the greatest mathematicians of all time.",
      "In 75 BCE the Roman orator Cicero found his neglected tomb near Syracuse, recognising it by the carved sphere and cylinder.",
      "The Archimedes screw, a spiral pump for lifting water, is still used. The Fields Medal, mathematics' top prize, carries his portrait."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He set Roman ships on fire with mirrors.", lab:"myth", t:"The first hints of a fire weapon come about 350 years after his death, and mirrors are named only by still later writers. Modern tests suggest it would be very hard to do. The earliest sources mention only the claw and catapults."},
      {c:"He invented the Archimedes screw.", lab:"disputed", t:"It is named after him and Diodorus credits him, but similar devices may have existed earlier in Egypt or Assyria."},
      {c:"He ran naked through the streets shouting 'Eureka!'.", lab:"tradition", t:"A famous story with no evidence closer than two centuries after him."},
      {c:"His last words were 'Do not disturb my circles.'", lab:"tradition", t:"Versions of the line appear in later sources, often in Latin. It may be legend."},
      {c:"He discovered pi.", lab:"myth", t:"Babylonians and Egyptians used approximate values earlier. He found the first rigorous method for calculating it."},
      {c:"His most important work was lost forever.", lab:"myth", t:"The Method was hidden under prayers in the Palimpsest. Modern imaging in 1999 to 2008 revealed most of its text."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"The Works of Archimedes, edited by T. L. Heath (1897), public domain"},
      {n:"T. L. Heath, Archimedes (1920), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/35550"},
      {n:"Archimedes, Geometrical Solutions Derived from Mechanics (the Method), edited by J. L. Heiberg, translated by Lydia G. Robinson (1909), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/7825"},
      {n:"Plutarch, Life of Marcellus, translated by John Dryden, revised by A. H. Clough, public domain"},
      {n:"Vitruvius, The Ten Books on Architecture, Book IX, translated by Morris Hicky Morgan (1914), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/20239"},
      {n:"The Archimedes Palimpsest project, Walters Art Museum (images released openly)"},
      {n:"Further reading: Reviel Netz and William Noel, The Archimedes Codex (2007)"}
    ]}
  ]
},

"augustus": {
  hero: "",
  kw: ["Octavian","Octavius","Julius Caesar","heir","Mark Antony","Cleopatra","Actium","Second Triumvirate","princeps","Pax Romana","Res Gestae","Livia","Agrippa","Tiberius","marble","August","Ara Pacis","Prima Porta","Virgil","emperor"],
  lede: "A sickly 18-year-old who inherited Julius Caesar's name, out-fought and out-thought every rival, and became Rome's first emperor while insisting he had restored the republic. He boasted that he found Rome a city of brick and left it marble.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Gaius Octavius was born in Rome on 23 September 63 BCE. His mother Atia was the niece of Julius Caesar.",
      "Caesar adopted him in his will, and after Caesar's murder in 44 BCE he fought a long series of civil wars, finally defeating Mark Antony and Cleopatra at Actium in 31 BCE.",
      "In 27 BCE the Senate gave him the name Augustus, 'the revered one'. He ruled as first citizen, princeps, for 40 years, ushering in the Pax Romana, and died at Nola on 19 August 14 CE."
    ]},
    {k:"early", h:"Early life", ps:[
      "His father, a wealthy man from the town of Velletri, died when he was four. Caesar took an interest in him, and in 45 BCE he joined Caesar on campaign in Spain.",
      "He was often ill, and ancient writers describe him as short and not strong, but determined and calculating.",
      "He was studying at Apollonia, across the Adriatic, when news came that Caesar had been killed and that he had been named Caesar's son and heir."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Caesar's heir, 44 BCE. Against his family's advice, he went to Rome, took the name Gaius Julius Caesar, and raised an army from Caesar's veterans with his own money.",
      "The Second Triumvirate, 43 BCE. He joined Mark Antony and Lepidus. They proscribed their enemies, posting lists of men who could be killed; the orator Cicero was among the victims.",
      "Philippi, 42 BCE. Their armies defeated Brutus and Cassius, Caesar's assassins, in Greece.",
      "Actium, 31 BCE. Antony had allied with and married Cleopatra of Egypt. Octavian's admiral Marcus Agrippa defeated them in a sea battle off western Greece. Antony and Cleopatra killed themselves in Alexandria in 30 BCE, and Egypt became Roman.",
      {t:"The 'restored republic', 27 BCE. He announced he was handing power back to the Senate and people. In return the Senate gave him the name Augustus and command of key provinces and most of the army.", lab:"verified", why:"Recorded in his own Res Gestae and in Cassius Dio. Historians agree the 'restoration' was a careful cover for his power."},
      "Peace and building. He reorganised the army and taxes, rebuilt temples, roads and aqueducts, and supported writers such as the poets Virgil and Horace and the historian Livy. The Ara Pacis, Altar of Peace, was dedicated in 9 BCE.",
      "The Varian disaster, 9 CE. Three Roman legions were destroyed in the Teutoburg Forest in Germany. Suetonius says Augustus beat his head against a door, crying 'Quintilius Varus, give me back my legions!'",
      "Succession and death. His heirs kept dying, including his grandsons Gaius and Lucius. He finally adopted his stepson Tiberius, who succeeded him in 14 CE."
    ]},
    {k:"works", h:"What he left", ps:[
      "The Res Gestae Divi Augusti, 'The Deeds of the Divine Augustus', his own account of his life, set up in bronze at his mausoleum. A nearly complete copy survives on a temple wall in Ankara, Turkey.",
      "The Prima Porta statue, a famous image of him as an ideal, youthful general.",
      "The month of August, named after him in 8 BCE.",
      "The Roman imperial system, which lasted in the West for nearly 500 years and in the East much longer."
    ]},
    {k:"people", h:"His people", ps:[
      "Livia Drusilla (58 BCE to 29 CE), his wife for over 50 years and a powerful adviser.",
      "Marcus Agrippa (about 63 to 12 BCE), his general, admiral, builder and son-in-law.",
      "Gaius Maecenas, his friend and adviser, patron of poets.",
      "Julia, his only child, whom he exiled in 2 BCE for adultery.",
      "Mark Antony (83 to 30 BCE), ally turned rival."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Rome had been torn by civil war for almost a century. Many Romans welcomed peace even at the cost of liberty.",
      "Under Augustus the Roman Empire reached from Spain to Syria and from the Rhine to Egypt, about 50 to 60 million people.",
      "Jesus of Nazareth was born late in his reign; Luke's Gospel ties the birth to a census ordered by Augustus, though historians debate that census and its date."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "He created the role of Roman emperor, and his name Augustus became a title for later rulers.",
      "The two centuries of relative peace that followed are called the Pax Romana.",
      "The words 'Augustan' and 'Augustan age' describe a golden age of literature and order."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He called himself emperor.", lab:"myth", t:"He avoided titles like king or dictator and called himself princeps, 'first citizen'. 'Emperor' comes from imperator, a title for a victorious general, which he did use as part of his name."},
      {c:"He said 'I found Rome a city of bricks and left it a city of marble.'", lab:"likely", t:"Suetonius reports he boasted this. It may be close to his words, and his building programme was enormous."},
      {c:"August has 31 days because he stole a day from February.", lab:"myth", t:"This story was invented in the Middle Ages. August already had 31 days under Julius Caesar's calendar."},
      {c:"Livia poisoned his heirs and then him.", lab:"disputed", t:"Tacitus and Cassius Dio repeat rumours of poisoned figs. There is no solid evidence; historians are sceptical."},
      {c:"His last words were about acting.", lab:"likely", t:"Suetonius says he asked friends whether he had played his part well in the comedy of life, and asked for applause."},
      {c:"He was a hero of peace from the start.", lab:"myth", t:"As a young triumvir he was ruthless, ordering proscriptions and executions. His later image as a peacemaker was carefully built."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Augustus, Res Gestae Divi Augusti, translated by Frederick W. Shipley (1924), public domain"},
      {n:"Suetonius, The Lives of the Twelve Caesars: Augustus, translated by Alexander Thomson, revised by T. Forester (1890s), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/6400"},
      {n:"Cassius Dio, Roman History, Books 45 to 56, public domain translations"},
      {n:"Ara Pacis Museum, Rome", u:"https://www.arapacis.it/en"},
      {n:"Further reading: Adrian Goldsworthy, Augustus: First Emperor of Rome (2014)"}
    ]}
  ]
},

"marcus-aurelius": {
  hero: "",
  kw: ["Meditations","Stoic","Stoicism","emperor","Antoninus Pius","Hadrian","Lucius Verus","Antonine Plague","Marcomannic Wars","Danube","Commodus","Faustina","equestrian statue","Capitoline","philosopher-king","Epictetus","Gladiator@myths"],
  lede: "The most powerful man in the world, who spent his nights in army camps on the Danube writing private notes to himself about patience, death and doing his duty. He never meant them to be read; we call them the Meditations.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Marcus Annius Verus was born in Rome on 26 April 121 CE into a wealthy family of Spanish origin.",
      "The emperor Hadrian noticed him as a boy and arranged that he be adopted by the next emperor, Antoninus Pius. Marcus became emperor in 161 CE, at first sharing power with his adoptive brother Lucius Verus.",
      "His reign was marked by plague and war on the frontiers. He died, probably near Vindobona (Vienna) or Sirmium, on 17 March 180 CE, and was succeeded by his son Commodus."
    ]},
    {k:"early", h:"Early life", ps:[
      "His father died when he was about three, and he was raised by his mother and grandfather. In the first book of the Meditations he thanks each of them for what they taught him.",
      "Hadrian called him 'Verissimus', 'most truthful'. From about the age of twelve, according to the Historia Augusta, he dressed simply and slept on the ground, practising a philosopher's self-discipline.",
      "His teachers included Marcus Cornelius Fronto, a famous orator whose letters with Marcus survive, and the Stoic Junius Rusticus, who lent him the discourses of Epictetus."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Adoption, 138 CE. Hadrian adopted Antoninus Pius on condition that Antoninus adopt Marcus and Lucius. Marcus married Antoninus's daughter Faustina in 145 CE; they had at least 13 children, many of whom died young.",
      "Emperor, 161 CE. On Antoninus's death, Marcus insisted Lucius share power, the first time Rome had two equal emperors.",
      "War with Parthia, 161 to 166 CE. Lucius led a war in the East that captured the Parthian capital. Returning soldiers seem to have brought back the Antonine Plague, probably smallpox, which killed millions across the empire.",
      "The northern wars, 166 to 180 CE. Germanic peoples, the Marcomanni and Quadi, and the Sarmatians crossed the Danube and even reached Italy. Marcus spent much of his last twelve years on campaign. Lucius died in 169 CE.",
      {t:"The Meditations, 170s CE. In camp he wrote in Greek short notes 'to himself', reminding himself to be fair, patient and unafraid of death. A note between Books 1 and 2 reads 'Among the Quadi, on the Granua'.", lab:"verified", why:"The headings in the manuscripts place parts of the work in his campaign camps."},
      "Revolt, 175 CE. Avidius Cassius, governor of Syria, declared himself emperor on a false rumour of Marcus's death. He was killed by his own officers within three months. Marcus is said to have burned his letters unread to avoid knowing who had supported him.",
      "Death, 180 CE. He died of illness, perhaps the plague, on campaign. Commodus, who had been co-emperor since 177, succeeded him."
    ]},
    {k:"works", h:"The work", ps:[
      "The Meditations, 12 books of private reflections, probably not written for publication. They became one of the most read works of philosophy.",
      "Key Stoic ideas: we control only our own judgements and actions; we should do our duty to others as parts of one whole; death is natural and nothing to fear.",
      "His letters with Fronto, rediscovered in a palimpsest in the 19th century, show him as a warm young student who complains about his lessons.",
      "The bronze equestrian statue of him on the Capitoline Hill in Rome, the only large bronze horseman to survive from ancient Rome, spared because people thought it showed the Christian emperor Constantine."
    ]},
    {k:"people", h:"His people", ps:[
      "Antoninus Pius (86 to 161 CE), his adoptive father, whose calm he admired most.",
      "Faustina the Younger (about 130 to 175 CE), his wife, who died on campaign with him in the East.",
      "Lucius Verus (130 to 169 CE), co-emperor.",
      "Commodus (161 to 192 CE), his son and successor, whose cruel, chaotic reign ended in murder.",
      "Galen, the great Greek physician, who served as his doctor."
    ]},
    {k:"world", h:"The world around him", ps:[
      "The Roman Empire was at its largest under the emperors before him, but pressures on its borders were growing.",
      "Christians were a small, distrusted minority. Some were persecuted in his reign, notably at Lyon in 177 CE.",
      "Roman envoys, claiming to come from 'Andun', perhaps Antoninus or Marcus, reached the Han court in China in 166 CE, according to Chinese records."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "He is counted as the last of the 'five good emperors', a label that goes back to Machiavelli. Edward Gibbon saw his death as the end of Rome's golden age.",
      "The Meditations are still read for guidance by soldiers, statesmen and ordinary people, and have helped a modern revival of Stoic ideas.",
      "Plato's dream of a philosopher-king is often said to have come closest to reality in him."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He was murdered by Commodus, as in the film Gladiator.", lab:"myth", t:"He died of illness, perhaps plague. Commodus was already co-emperor; there was no plan to give power back to the Senate."},
      {c:"He wrote the Meditations as a book for others.", lab:"myth", t:"They are private notes, addressed to himself. How they survived and were published is unknown."},
      {c:"He was a gentle pacifist.", lab:"myth", t:"He spent most of his reign at war and his column in Rome shows brutal scenes of the northern campaigns."},
      {c:"He persecuted Christians.", lab:"disputed", t:"Persecutions happened in his reign under existing laws, but there is no evidence he launched a new policy against them."},
      {c:"His troops were saved by a miraculous rainstorm.", lab:"tradition", t:"The 'Rain Miracle' around 172 CE appears on his column. Pagan writers credited an Egyptian magician; Christian writers credited the prayers of Christian soldiers."},
      {c:"Faustina was unfaithful and plotted against him.", lab:"disputed", t:"Hostile later sources spread such stories. In the Meditations he thanks the gods for a wife so obedient, affectionate and sincere."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Marcus Aurelius, Meditations, translated by Meric Casaubon (1634), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/2680"},
      {n:"Marcus Aurelius, Thoughts, translated by George Long (1862), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/15877"},
      {n:"Historia Augusta, Life of Marcus Aurelius (4th century, unreliable in places), public domain translations"},
      {n:"Cassius Dio, Roman History, Books 71 and 72, public domain translations"},
      {n:"Further reading: Anthony Birley, Marcus Aurelius: A Biography (1987)"}
    ]}
  ]
},
"du-fu": {
  hero: "",
  kw: ["Tu Fu","Tang dynasty","poet-historian","Sage of Poetry","Chang'an","An Lushan Rebellion","Spring View","Chengdu","thatched cottage","Li Bai","Ballad of the Army Carts","Kuizhou","Yangtze","exam","famine","regulated verse"],
  lede: "A failed examination candidate who lived through the collapse of the Tang golden age and wrote it all down in verse: soldiers marched to war, children starved, a nation broken while 'mountains and rivers remain'. China calls him the Sage of Poetry.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Du Fu was born in 712 near Luoyang, in Henan, into a family of scholar-officials. His grandfather Du Shenyan was a well-known poet.",
      "He failed the imperial examination, struggled for years to win a post, and was caught up in the An Lushan Rebellion of 755, which tore China apart.",
      "He spent his last years as a wandering refugee, partly in Chengdu and on the Yangtze River, and died in 770 on a boat in Hunan. About 1,400 of his poems survive."
    ]},
    {k:"early", h:"Early life", ps:[
      "His mother died when he was young, and he was raised partly by an aunt.",
      "He said he was writing poems at seven. As a young man he travelled widely in eastern China.",
      {t:"In 735 or 736 he failed the jinshi examination. In 747 he failed again, in a special examination in which the chief minister Li Linfu passed no one.", lab:"likely", why:"From his own later poems and the official Tang histories, which differ on details and dates."}
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Li Bai, 744. He met the older poet Li Bai, travelled with him and wrote a dozen poems about him over the years. Li Bai wrote few about Du Fu.",
      "Chang'an, 746 to 755. He lived poor in the capital, presenting poems to the emperor in hopes of an office. He finally got a minor post in 755.",
      {t:"The rebellion, 755 to 757. The general An Lushan rebelled and captured Chang'an. Du Fu, trying to reach the new emperor, was caught and held in the occupied city. There he wrote 'Spring View', which opens with the nation broken while mountains and rivers remain.", lab:"verified", why:"The poem is dated by its content and by his collected works. His captivity is recorded in the Tang histories."},
      "Escape and dismissal, 757 to 759. He escaped to the emperor's court and was made a Reminder, an adviser, but was soon demoted for defending a dismissed minister. In 759, amid famine, he left office for good.",
      "Chengdu, 760 to 765. With help from friends he built a thatched cottage outside Chengdu in Sichuan and wrote some of his most peaceful poems about his garden and family.",
      "The river years, 765 to 770. He drifted down the Yangtze, lived two years at Kuizhou in the Three Gorges, and wrote dense, sad, autumnal poems. Ill with lung disease and deaf in one ear, he died on a boat near Tanzhou (Changsha)."
    ]},
    {k:"works", h:"The work", ps:[
      "'Ballad of the Army Carts': families weeping as conscripts march to endless frontier wars.",
      "'Spring View' (Chun wang): the capital in ruins, his hair too thin to hold a hatpin.",
      "'Autumn Meditations', a sequence of eight poems written at Kuizhou, often called the summit of Chinese regulated verse.",
      "He mastered the strict eight-line 'regulated verse' (lüshi) form and was called the 'poet-historian' because his poems record the events and suffering of his age."
    ]},
    {k:"people", h:"His people", ps:[
      "Li Bai (701 to 762), the poet he admired most.",
      "Yan Wu, governor in Sichuan, his patron in Chengdu.",
      "His wife, née Yang, and their children; one young son starved to death in 755, which he wrote about.",
      "Gao Shi and Cen Shen, poet friends who also served the Tang."
    ]},
    {k:"world", h:"The world around him", ps:[
      "He was born at the start of Emperor Xuanzong's brilliant reign and lived to see its ruin.",
      "The An Lushan Rebellion and its aftermath may have cut China's registered population by tens of millions, though much of that may be lost records rather than deaths.",
      "The Abbasid caliphate defeated a Tang army at the Battle of Talas in 751, marking the western limit of Tang power."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "Little noticed in his lifetime, he was raised up after his death, especially by Song-dynasty critics, as China's greatest poet.",
      "Du Fu's Thatched Cottage in Chengdu is now a museum and park.",
      "He is admired for compassion as well as craft: a poet who wrote about ordinary people's suffering."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He died from eating too much beef and wine after a long hunger.", lab:"tradition", t:"The official Tang histories tell this story, set at Leiyang after a flood cut him off. Most modern scholars doubt it and think he died of long illness on his boat."},
      {c:"He and Li Bai were close lifelong friends.", lab:"disputed", t:"They spent time together in 744 and 745. Du Fu kept writing about Li Bai; we have little sign the feeling was equal."},
      {c:"He was famous in his lifetime.", lab:"myth", t:"Anthologies of his time hardly include him. His fame grew after his death."},
      {c:"He was always poor.", lab:"disputed", t:"Partly. His family had status and he held minor posts, but he struggled for money most of his life, and wrote about borrowing and hunger."},
      {c:"His poems are mainly political.", lab:"myth", t:"He wrote about war and politics, but also about his children, friends, rain, birds, illness and old age."},
      {c:"He was the official historian of the Tang.", lab:"myth", t:"'Poet-historian' is a later nickname for how his poems record events. He held no historian's post."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Herbert A. Giles, Chinese Poetry in English Verse (1898), public domain"},
      {n:"L. Cranmer-Byng, A Lute of Jade (1909), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/390"},
      {n:"Florence Ayscough and Amy Lowell, Fir-Flower Tablets (1921), Project Gutenberg (public domain in the US)", u:"https://www.gutenberg.org/ebooks/48222"},
      {n:"New Book of Tang and Old Book of Tang, biographies of Du Fu, classical Chinese texts (public domain)"},
      {n:"Chinese Text Project: Du Fu poems in the original (free online)", u:"https://ctext.org/"},
      {n:"Further reading: William Hung, Tu Fu: China's Greatest Poet (1952)"},
      {n:"Further reading: Stephen Owen, The Poetry of Du Fu (2016, open access)"}
    ]}
  ]
},

"kublai-khan": {
  hero: "",
  kw: ["Khubilai","Genghis Khan","grandson","Mongol","Yuan dynasty","Khanbaliq","Dadu","Beijing","Shangdu","Xanadu","Southern Song","Xiangyang","Japan invasions","kamikaze","Marco Polo","paper money","Chabi","Ariq Böke","Grand Canal","Phags-pa","Coleridge"],
  lede: "A grandson of Genghis Khan who conquered all of China, founded the Yuan dynasty, built the city that became Beijing, and ruled the largest empire of his age, yet failed twice to conquer Japan when storms wrecked his fleets.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Kublai (Khubilai) was born on 23 September 1215, a son of Tolui, the youngest son of Genghis Khan, and of Sorghaghtani Beki, a Christian princess of the Kerait people.",
      "In 1260 he was proclaimed Great Khan of the Mongols, won a civil war with his brother, and in 1271 declared the Yuan dynasty in China. By 1279 he had conquered the Southern Song, uniting China for the first time in more than three centuries.",
      "He ruled from Khanbaliq (Dadu, modern Beijing) and his summer capital Shangdu (Xanadu). He died on 18 February 1294."
    ]},
    {k:"early", h:"Early life", ps:[
      "His mother was one of the most capable women of the Mongol empire. She managed her lands in northern China wisely, protected farmers, and had her sons taught about Chinese ways.",
      {t:"As a boy of about nine he went on his first hunt, and Genghis Khan himself smeared the fat of his kill on his finger, a Mongol rite.", lab:"likely", why:"Reported in Rashid al-Din's Persian history of the Mongols, written about 1300."},
      "He gathered Chinese advisers, Buddhist monks and Confucian scholars at his camp in the 1240s, unusual for a Mongol prince."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Governor of northern China, 1251. His brother Möngke became Great Khan and gave him lands in north China. Kublai built a city that became Shangdu.",
      "Great Khan, 1260. After Möngke died, Kublai was proclaimed khan by his supporters, and his younger brother Ariq Böke by others in Mongolia. Kublai won by 1264, but the western khanates no longer obeyed him fully.",
      "Yuan, 1271. He took a Chinese dynastic name, Yuan, meaning 'origin', and moved his capital to Dadu, a new city he built beside the ruins of the Jin capital.",
      "The Song conquest, 1268 to 1279. His armies besieged the river fortress of Xiangyang for five years, finally breaking its walls with counterweight catapults built by Muslim engineers from Persia. The Song capital Hangzhou fell in 1276, and the last Song forces were destroyed at sea in 1279.",
      {t:"Japan, 1274 and 1281. Two huge invasion fleets failed. The second, perhaps over 100,000 men, was wrecked by a typhoon. The Japanese called the storms kamikaze, 'divine winds'.", lab:"likely", why:"Recorded in Japanese and Chinese sources. The numbers are disputed; shipwrecks found off Takashima confirm the fleet."},
      "Other campaigns. Wars in Vietnam, Champa, Burma and Java mostly failed or brought only tribute.",
      "Last years. His wife Chabi died in 1281 and his son and heir Zhenjin in 1285. Kublai grew obese, drank heavily, and suffered from gout. He was succeeded by his grandson Temür."
    ]},
    {k:"works", h:"What he built", ps:[
      "Dadu (Khanbaliq), the planned capital whose layout shaped central Beijing.",
      "An extension of the Grand Canal toward Dadu, to bring grain from the south.",
      "Paper money (chao) used across his empire, which amazed Marco Polo.",
      "The 'Phags-pa script, created by his Tibetan Buddhist adviser to write all the languages of the empire."
    ]},
    {k:"people", h:"His people", ps:[
      "Chabi (died 1281), his chief wife and close adviser, a devout Buddhist.",
      "Sorghaghtani Beki (died 1252), his mother.",
      "Ariq Böke, his brother and rival.",
      "'Phags-pa Lama (1235 to 1280), Tibetan Buddhist teacher and adviser.",
      "Marco Polo, the Venetian who served him for about 17 years, by his own account."
    ]},
    {k:"world", h:"The world around him", ps:[
      "The Mongol empire stretched from Korea to the borders of Hungary, but it was splitting into four khanates: the Yuan, the Golden Horde, the Chagatai Khanate and the Ilkhanate in Persia.",
      "Trade and travel across Eurasia were easier than ever before, along the Silk Roads and by sea.",
      "Under the Yuan, Chinese society was ranked: Mongols first, then Central and West Asians, then northern Chinese, then southern Chinese."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "He reunited China, and Beijing has been its capital for most of the time since.",
      "The Yuan dynasty fell to the Ming in 1368, less than 75 years after his death.",
      "Samuel Taylor Coleridge's poem 'Kubla Khan' (written about 1797, published 1816), begun after reading about Xanadu, made his name famous in English."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He was a barbarian who destroyed Chinese culture.", lab:"myth", t:"He used Chinese institutions, supported Confucian rites and drama, and patronised Buddhism, though he kept Mongols at the top."},
      {c:"He converted to Christianity.", lab:"myth", t:"He asked the Pope for teachers through the Polos, but was most drawn to Tibetan Buddhism."},
      {c:"The kamikaze winds alone saved Japan.", lab:"disputed", t:"Japanese defenders and a coastal wall held back the invaders for weeks before the storm, and the Mongol ships may have been poorly built river boats."},
      {c:"Xanadu was a fantasy.", lab:"myth", t:"Shangdu was a real city. Its ruins in Inner Mongolia are a UNESCO World Heritage Site."},
      {c:"He spoke Chinese fluently.", lab:"disputed", t:"There is no clear evidence. He worked through interpreters and advisers."},
      {c:"He ruled the whole Mongol Empire.", lab:"myth", t:"He held the title of Great Khan, but the western khanates largely went their own way after 1260."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Marco Polo, The Travels, translated by Henry Yule (1871, revised by Henri Cordier 1903), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/10636"},
      {n:"Rashid al-Din, Compendium of Chronicles (about 1300), public domain in the original"},
      {n:"History of Yuan (Yuanshi, 1370), classical Chinese text (public domain)"},
      {n:"Samuel Taylor Coleridge, 'Kubla Khan' (written about 1797, published 1816), public domain"},
      {n:"Further reading: Morris Rossabi, Khubilai Khan: His Life and Times (1988)"}
    ]}
  ]
},

"machiavelli": {
  hero: "",
  kw: ["The Prince","Florence","Medici","Soderini","Cesare Borgia","republic","Discourses on Livy","virtù","fortuna","exile","torture","strappado","Sant'Andrea","Mandragola","Art of War","militia","Machiavellian","ends justify the means@myths"],
  lede: "A Florentine diplomat who watched Cesare Borgia carve out a state, lost his job when the Medici returned, was tortured, and in exile wrote The Prince, a short handbook on power so blunt that his name became an insult.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Niccolò Machiavelli was born in Florence on 3 May 1469 into an old but modest family.",
      "From 1498 to 1512 he served the Florentine republic as a senior official and diplomat, meeting kings, popes and Cesare Borgia. When the Medici family returned to power in 1512 he was dismissed, then jailed and tortured.",
      "In exile on his farm he wrote The Prince (1513), the Discourses on Livy, plays and a history of Florence. He died in Florence on 21 June 1527."
    ]},
    {k:"early", h:"Early life", ps:[
      "His father Bernardo was a lawyer who loved books but had little money. He kept a diary recording how he earned a copy of Livy's history of Rome by compiling an index for its printer.",
      "Niccolò learned Latin and read the Roman historians. Little else is known about his youth.",
      "He watched the friar Girolamo Savonarola dominate Florence after the Medici were expelled in 1494, and saw him burned in 1498. He later noted that Savonarola failed because he was an 'unarmed prophet'."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Secretary, 1498. Weeks after Savonarola's death, he became head of the Second Chancery, handling war and foreign affairs.",
      "Missions abroad. He went on embassies to King Louis XII of France, the Emperor Maximilian, Pope Julius II and others, sending sharp reports back to Florence.",
      {t:"Cesare Borgia, 1502 to 1503. He spent months with Cesare, the Pope's son, who was conquering a state in central Italy. He watched Cesare lure rebel captains to Senigallia and have them strangled, and admired his ruthlessness and speed.", lab:"verified", why:"His dispatches from the time survive."},
      "The militia, 1506 to 1509. Distrusting hired mercenaries, he organised a citizen militia for Florence, which helped recapture Pisa in 1509.",
      {t:"Fall, 1512 to 1513. A Spanish army sacked nearby Prato and the Medici returned. He was dismissed. In February 1513 his name was found on a list of suspected plotters. He was arrested and given six drops of the strappado, a torture by rope, but confessed nothing. He was freed in an amnesty when Giovanni de' Medici became Pope Leo X.", lab:"verified", why:"Court records and his own letters and sonnets from prison."},
      {t:"Exile and The Prince, 1513. Living on his farm at Sant'Andrea in Percussina, he wrote to his friend Francesco Vettori that in the evenings he put on fine clothes and entered the courts of the ancients to talk with them. That year he wrote The Prince, dedicated to the Medici.", lab:"verified", why:"His letter of 10 December 1513 to Vettori survives."},
      "Later years. He wrote the comedy La Mandragola, the Discourses and The Art of War, and was commissioned by the Medici to write the Florentine Histories. When the Medici fell again in 1527, the republicans distrusted him. He died weeks later."
    ]},
    {k:"works", h:"The work", ps:[
      "The Prince (written 1513, printed 1532): how new princes win and keep power. It argues a ruler must be willing to act against mercy and faith when necessary, and that it is safer to be feared than loved, if one cannot be both.",
      "Discourses on the First Ten Books of Livy: a long defence of republics, arguing that a free people with good laws and its own army is strongest.",
      "La Mandragola (about 1518), a sharp, funny comedy still performed.",
      "Key ideas: virtù (the skill and boldness to shape events) against fortuna (luck), which he compared to a flooding river that can be held back by dykes."
    ]},
    {k:"people", h:"His people", ps:[
      "Piero Soderini, head of the Florentine republic, his boss and patron.",
      "Cesare Borgia (1475 to 1507), the model for parts of The Prince.",
      "Francesco Vettori and Francesco Guicciardini, friends and fellow political thinkers.",
      "Lorenzo di Piero de' Medici, to whom The Prince was finally dedicated.",
      "Marietta Corsini, his wife, mother of their six children."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Italy was divided into rival states and invaded again and again by France and Spain from 1494 on.",
      "Florence was the city of Leonardo and Michelangelo; Machiavelli once worked with Leonardo on a plan to divert the Arno river.",
      "The Prince ends with a call for a leader to unite Italy and free it from the 'barbarians'."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "The Prince was placed on the Catholic Church's Index of banned books in 1559. 'Machiavellian' came to mean cunning and deceitful.",
      "He is now seen as a founder of modern political science, for describing how politics works rather than how it ought to work.",
      "His tomb is in the Church of Santa Croce in Florence."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He said 'The ends justify the means.'", lab:"myth", t:"He never wrote those words. He wrote that in judging princes, people look at results; the slogan simplifies that."},
      {c:"He admired tyrants.", lab:"disputed", t:"The Prince gives advice to new rulers, but in the Discourses he clearly prefers republics. Some readers since Rousseau have even read The Prince as a satire."},
      {c:"The Prince was written for a broad audience.", lab:"myth", t:"It was a gift to the Medici, partly in hope of a job. It circulated in manuscript and was printed only after his death."},
      {c:"He was an atheist.", lab:"disputed", t:"He criticised the Church's politics fiercely, but scholars disagree about his private beliefs. According to his son, he made a deathbed confession."},
      {c:"He was a cold man.", lab:"myth", t:"His letters are warm, funny and rude, full of jokes, gossip and love affairs."},
      {c:"'Old Nick', meaning the devil, comes from his name.", lab:"myth", t:"The link began as a joke in Samuel Butler's poem Hudibras (1678). The nickname is recorded only from the 1600s and its real origin is unknown; dictionaries do not trace it to him."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Niccolò Machiavelli, The Prince, translated by W. K. Marriott (1908), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/1232"},
      {n:"Niccolò Machiavelli, Discourses on the First Decade of Titus Livius, translated by Ninian Hill Thomson (1883), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/10827"},
      {n:"Niccolò Machiavelli, letter to Francesco Vettori, 10 December 1513, public domain"},
      {n:"Pasquale Villari, The Life and Times of Niccolò Machiavelli, translated by Linda Villari (1878 to 1883), public domain"},
      {n:"Further reading: Maurizio Viroli, Niccolò's Smile (2000)"}
    ]}
  ]
},

"cervantes": {
  hero: "",
  kw: ["Don Quixote","Sancho Panza","windmills","La Mancha","Lepanto","Algiers","captive","ransom","tax collector","prison","Exemplary Novels","Alcalá de Henares","Madrid","one-handed@myths","Shakespeare@myths","first modern novel","Avellaneda"],
  lede: "A wounded soldier who spent five years as a captive in Algiers, failed at almost everything else, and then, in his late fifties, wrote Don Quixote, the story of a mad old gentleman who charges at windmills, and, many say, invented the modern novel.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Miguel de Cervantes Saavedra was born in Alcalá de Henares, near Madrid, in 1547, probably on 29 September. His father was a struggling barber-surgeon.",
      "He fought in the Battle of Lepanto in 1571, where his left hand was crippled, and was captured by Barbary pirates in 1575, spending five years as a captive in Algiers.",
      "Back in Spain he worked as a tax and supply collector and was jailed more than once. Don Quixote, Part One (1605), made him famous. Part Two appeared in 1615. He died in Madrid on 22 April 1616."
    ]},
    {k:"early", h:"Early life", ps:[
      "His family moved often around Spain in search of work, and his father was jailed for debt.",
      "In Madrid he studied with the humanist Juan López de Hoyos, who published some of his first poems in 1569.",
      {t:"In 1569 he left for Italy. A warrant from the same year orders the arrest of a Miguel de Cervantes for wounding a man in a duel; he may have fled because of it.", lab:"disputed", why:"The warrant exists, but historians are not sure it refers to him."},
      "In Rome he served Cardinal Giulio Acquaviva, then enlisted in the Spanish infantry in Italy."
    ]},
    {k:"turns", h:"Turning points", ps:[
      {t:"Lepanto, 7 October 1571. Ill with fever, he insisted on fighting aboard the galley Marquesa in the great sea battle where a Holy League fleet defeated the Ottomans. He was shot twice in the chest and once in the left hand, which he could never use again. He was proud of it all his life.", lab:"verified", why:"Recorded in service certificates and in his own prologues."},
      "Captivity, 1575 to 1580. Sailing home with letters of recommendation, his ship was captured by Barbary corsairs. The letters made his captors think he was important, so they set a high ransom. He tried to escape four times and was not executed, perhaps because he was valuable.",
      "Ransom, 1580. Trinitarian friars paid 500 gold escudos, raised largely by his family, for his release.",
      "Failure and debt, 1580s and 1590s. He wrote plays and a pastoral novel, La Galatea (1585), with little success. He married Catalina de Salazar in 1584. From 1587 he requisitioned grain and oil for the Spanish Armada, and later collected taxes. Accounting problems led to prison in Seville in 1597.",
      {t:"Don Quixote, 1605. Part One was published in Madrid in early 1605 and was an instant success, reprinted several times that year and soon translated.", lab:"verified", why:"The 1605 editions survive."},
      "A rival sequel and Part Two, 1614 to 1615. A writer calling himself Alonso Fernández de Avellaneda published a fake Part Two in 1614. Cervantes mocked it in his own Part Two (1615), in which characters have read Part One and the false sequel.",
      "Last years. He published the Exemplary Novels (1613) and Journey to Parnassus. He died in Madrid, perhaps of diabetes, and was buried in the Convent of the Trinitarians. His last novel, Persiles and Sigismunda, appeared after his death."
    ]},
    {k:"works", h:"The work", ps:[
      "Don Quixote (1605 and 1615): Alonso Quixano reads so many chivalry romances that he decides to become a knight-errant, Don Quixote de la Mancha, with the peasant Sancho Panza as his squire.",
      "Famous episodes: the attack on the windmills he thinks are giants, the flock of sheep he takes for an army, and his devotion to an imaginary lady, Dulcinea.",
      "The Exemplary Novels (1613): twelve short novels, among the first in Spanish.",
      "Plays, including The Siege of Numantia, and poems."
    ]},
    {k:"people", h:"His people", ps:[
      "Rodrigo de Cervantes, his brother, who fought beside him and was also captured.",
      "Catalina de Salazar y Palacios, his wife.",
      "Isabel de Saavedra, his only known child, born to Ana Franca de Rojas (also called Ana de Villafranca).",
      "Lope de Vega, Spain's most successful playwright and his rival.",
      "The Count of Lemos, patron to whom he dedicated Part Two."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Spain under Philip II was the greatest power in Europe, with an empire in the Americas, but it was frequently bankrupt.",
      "Christian and Ottoman powers fought for the Mediterranean, and thousands of Christians and Muslims were held captive for ransom in Algiers and elsewhere.",
      "Shakespeare was his contemporary. Spain's 'Golden Age' of literature included Lope de Vega, Quevedo and Góngora."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "Don Quixote is often called the first modern novel and is one of the most translated books in the world.",
      "Spanish is called 'the language of Cervantes', and Spain's top literary prize is the Cervantes Prize.",
      "In 2015 researchers identified bone fragments in the Trinitarian convent in Madrid that probably include his."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He lost his hand at Lepanto.", lab:"myth", t:"His left hand was crippled, not cut off. He was called 'el manco de Lepanto', the maimed man of Lepanto."},
      {c:"He died on the same day as Shakespeare.", lab:"myth", t:"Both deaths are dated 23 April 1616, but Spain used the Gregorian calendar and England the Julian, so they died about ten days apart. Cervantes probably died on the 22nd and was buried on the 23rd."},
      {c:"He wrote Don Quixote in prison.", lab:"disputed", t:"In his prologue he says the book was born in a prison. It may mean his time in Seville jail, or it may be a figure of speech."},
      {c:"Don Quixote is a children's story about a silly knight.", lab:"myth", t:"It is long, comic and deeply serious, playing with reality, fiction and authorship."},
      {c:"He made a lot of money from Don Quixote.", lab:"myth", t:"He sold the rights and remained poor, depending on patrons."},
      {c:"Lope de Vega and he were friends.", lab:"myth", t:"They were on good terms early on, but became bitter rivals and exchanged insults in print."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Miguel de Cervantes, Don Quixote, translated by John Ormsby (1885), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/996"},
      {n:"Miguel de Cervantes, Exemplary Novels, translated by Walter K. Kelly (1855; reprinted 1881), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/14420"},
      {n:"Biblioteca Virtual Miguel de Cervantes (free online)", u:"https://www.cervantesvirtual.com/"},
      {n:"James Fitzmaurice-Kelly, The Life of Miguel de Cervantes Saavedra (1892), public domain"},
      {n:"Further reading: Jean Canavaggio, Cervantes (1990)"}
    ]}
  ]
},
"kepler": {
  hero: "",
  kw: ["Weil der Stadt","Tübingen","Graz","Prague","Tycho Brahe","Rudolf II","Mars","ellipse","laws of planetary motion","Astronomia nova","Harmonices Mundi","Rudolphine Tables","Mysterium Cosmographicum","Platonic solids","witch trial","mother","Linz","optics","Somnium","horoscope"],
  lede: "A sickly, short-sighted German mathematician who wrestled for years with the orbit of Mars, threw out two thousand years of perfect circles, and found that planets move in ellipses. He also had to defend his own mother at a witch trial.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Johannes Kepler was born on 27 December 1571 in Weil der Stadt, a small free imperial city in south-west Germany (now in Baden-Württemberg).",
      "A Lutheran who trained for the church, he became a teacher of mathematics in Graz, then assistant and successor to the Danish astronomer Tycho Brahe as Imperial Mathematician in Prague.",
      "Using Tycho's observations, he discovered three laws of planetary motion. He died in Regensburg on 15 November 1630 while travelling to collect unpaid salary."
    ]},
    {k:"early", h:"Early life", ps:[
      "His father was a mercenary soldier who left the family when Johannes was a teenager and never returned. His mother Katharina was an innkeeper's daughter and herbalist.",
      "Smallpox in childhood left him with weak eyesight and crippled hands.",
      {t:"At six his mother took him up a hill to see the great comet of 1577, and at nine he was called outdoors to see a lunar eclipse. He remembered both all his life.", lab:"verified", why:"He mentions both in his own writings."},
      "He won scholarships and studied at the University of Tübingen, where his teacher Michael Maestlin privately taught him Copernicus's sun-centred system."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Graz, 1594. Instead of becoming a pastor, he was sent to teach mathematics in Graz, Austria. Part of his job was making yearly astrological calendars.",
      "The Cosmic Mystery, 1596. He proposed that the distances of the six known planets were set by nesting the five perfect Platonic solids inside each other. It was wrong, but it made him known and led him to Tycho.",
      "Prague, 1600. Forced out of Graz because he was Protestant, he joined Tycho Brahe, who had the most accurate observations in the world but guarded them closely.",
      "Imperial Mathematician, 1601. Tycho died suddenly in October 1601, and Kepler succeeded him in the service of Emperor Rudolf II, gaining access to Tycho's data.",
      {t:"The war on Mars, 1601 to 1605. He spent years trying to fit Mars's orbit to circles. A difference of eight minutes of arc between his best circle and Tycho's data convinced him circles were wrong. He found the orbit was an ellipse.", lab:"verified", why:"He describes his long struggle in detail in Astronomia nova (1609)."},
      "Linz, 1612 to 1626. After Rudolf's fall he moved to Linz. His first wife and a young son had died in 1611, shortly before the move.",
      "His mother's trial, 1615 to 1621. Katharina Kepler was accused of witchcraft by neighbours. Johannes wrote her defence and travelled to attend. She was held for over a year and threatened with torture, but released in October 1621. She died in April 1622.",
      "The Rudolphine Tables, 1627. He finally published tables of planetary positions based on his laws, far more accurate than any before."
    ]},
    {k:"works", h:"The work", ps:[
      "First law: planets move in ellipses with the sun at one focus.",
      "Second law: a line from the sun to a planet sweeps out equal areas in equal times, so planets move faster when closer to the sun.",
      "Third law (1619): the square of a planet's orbital period is proportional to the cube of its average distance from the sun.",
      "Books: Astronomia nova (1609), Harmonices Mundi (1619), Epitome of Copernican Astronomy (1618 to 1621), and Dioptrice (1611), on lenses and the telescope.",
      "Somnium, a story of a journey to the Moon, published after his death and sometimes called the first science fiction."
    ]},
    {k:"people", h:"His people", ps:[
      "Tycho Brahe (1546 to 1601), the great observer whose data made his laws possible.",
      "Michael Maestlin (1550 to 1631), his teacher.",
      "Galileo Galilei, with whom he corresponded. He supported Galileo's telescope discoveries in 1610, though Galileo ignored his ellipses.",
      "Barbara Müller and later Susanna Reuttinger, his wives.",
      "Katharina Kepler, his mother."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Religious conflict shaped his life. As a Lutheran he was expelled from Graz and later left Linz as pressure on Protestants grew, and the Thirty Years' War (1618 to 1648) raged during his last years.",
      "Witch trials were at a peak in parts of Germany.",
      "The telescope was invented in 1608, and Galileo used it in 1609 to 1610."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "His laws let Newton develop his law of universal gravitation, published in 1687.",
      "He made astronomy a physical science, asking what force moves the planets, not just describing their paths.",
      "NASA's Kepler space telescope (2009 to 2018) discovered thousands of planets around other stars."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"Kepler murdered Tycho Brahe to get his data.", lab:"myth", t:"Tests on Tycho's remains, exhumed in 2010, found no lethal mercury. He probably died of a bladder or kidney problem."},
      {c:"He believed in astrology.", lab:"disputed", t:"He cast horoscopes for money and believed the heavens influence the earth, but he mocked much of the astrology of his day."},
      {c:"His laws came from a flash of insight.", lab:"myth", t:"They came from years of calculation, false starts and errors, which he recorded openly."},
      {c:"He discovered gravity.", lab:"myth", t:"He suggested a force from the sun moved the planets, a magnetic one. Newton later explained gravity."},
      {c:"His mother was burned as a witch.", lab:"myth", t:"She was imprisoned and threatened with torture, but freed in 1621, largely thanks to her son's defence."},
      {c:"The Somnium was a harmless fantasy.", lab:"disputed", t:"Kepler thought a manuscript copy of it, in which the narrator's mother is a wise woman, was used as evidence against his own mother."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Walter W. Bryant, Kepler (1920), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/12406"},
      {n:"Johannes Kepler, Astronomia nova (1609), original Latin edition, public domain"},
      {n:"Johannes Kepler, Harmonices Mundi (1619), original Latin edition, public domain"},
      {n:"Further reading: Max Caspar, Kepler (English translation 1959)"},
      {n:"Further reading: Ulinka Rublack, The Astronomer and the Witch (2015)"}
    ]}
  ]
},

"vermeer": {
  hero: "",
  kw: ["Delft","Girl with a Pearl Earring","The Milkmaid","View of Delft","The Art of Painting","camera obscura","ultramarine","lapis lazuli","Catharina Bolnes","Guild of St Luke","Mauritshuis","Rijksmuseum","Sphinx of Delft","Thoré-Bürger","Van Meegeren","forgeries","light"],
  lede: "A Delft innkeeper's son who painted only about 35 surviving pictures, quiet rooms where light falls through a window onto a woman reading, pouring milk, or turning toward us with a pearl at her ear. He died in debt and was nearly forgotten for two hundred years.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Johannes Vermeer was baptised in Delft, in the Dutch Republic, on 31 October 1632.",
      "He became a master in the painters' Guild of St Luke in 1653 and spent his whole life in Delft, painting slowly and in small numbers. About 34 to 37 paintings are accepted as his.",
      "He died in Delft in December 1675, aged 43, leaving his wife and 11 children deep in debt."
    ]},
    {k:"early", h:"Early life", ps:[
      "His father, Reynier Jansz, was a silk weaver, innkeeper and art dealer, who ran an inn called Mechelen on Delft's market square.",
      "Nothing is known about whom he trained with. Suggestions include Carel Fabritius, a pupil of Rembrandt, who died in the Delft gunpowder explosion of 1654.",
      "In April 1653 he married Catharina Bolnes, from a wealthier Catholic family. He probably converted to Catholicism, and the couple lived with her mother, Maria Thins."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Master painter, 1653. He joined the Guild of St Luke and was later elected one of its heads several times.",
      "Early works, about 1655 to 1657. He began with large history and religious scenes, such as Christ in the House of Martha and Mary, then turned to quiet scenes of daily life.",
      {t:"The mature works, about 1657 to 1670. The Milkmaid, View of Delft, Woman in Blue Reading a Letter, Girl with a Pearl Earring and The Art of Painting date from these years.", lab:"likely", why:"Few of his works are dated, so the order is worked out from style and technique."},
      "A patron. The Delft collector Pieter van Ruijven and his wife seem to have bought many of his paintings; about 20 Vermeers were in their family's collection when it was auctioned in 1696.",
      {t:"The disaster year, 1672. France invaded the Dutch Republic, and the art market collapsed. Vermeer could not sell paintings. His wife later said that the strain made him fall into a frenzy, and within a day and a half he was dead.", lab:"verified", why:"From Catharina Bolnes's statement to the High Court of Holland in 1677."},
      "Death, 1675. He was buried in the Old Church in Delft on 15 December. His widow gave paintings to the baker to settle a large bread bill."
    ]},
    {k:"works", h:"The work", ps:[
      "The Milkmaid (about 1658), Rijksmuseum, Amsterdam: a maid pouring milk in a sunlit kitchen.",
      "View of Delft (about 1660 to 1661), Mauritshuis, The Hague, which the writer Marcel Proust called the most beautiful painting in the world.",
      "Girl with a Pearl Earring (about 1665), Mauritshuis: not a portrait but a tronie, a study of a face in costume.",
      "The Art of Painting (about 1666 to 1668), Kunsthistorisches Museum, Vienna, which he kept until his death and his widow then tried to save from creditors.",
      "He used costly natural ultramarine, made from lapis lazuli, even in shadows, and tiny dots of light-coloured paint (pointillés) to make surfaces sparkle."
    ]},
    {k:"people", h:"His people", ps:[
      "Catharina Bolnes (about 1631 to 1688), his wife.",
      "Maria Thins, his mother-in-law, with whom they lived.",
      "Pieter van Ruijven (1624 to 1674), his main patron.",
      "Antonie van Leeuwenhoek, the Delft microscope pioneer, born the same month. He was appointed trustee of Vermeer's bankrupt estate in 1676; there is no proof they were friends."
    ]},
    {k:"world", h:"The world around him", ps:[
      "The Dutch Republic was the richest trading nation in Europe. Prosperous households bought paintings for their homes.",
      "Delft was famous for its blue-and-white pottery, Delftware.",
      "Rembrandt was working in Amsterdam, and Pieter de Hooch painted similar domestic scenes in Delft."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "He was rediscovered in the 1860s by the French critic Théophile Thoré-Bürger, who called him 'the Sphinx of Delft'.",
      "The Rijksmuseum's exhibition of 2023 gathered 28 of his paintings and sold out.",
      "His fame drew forgers. Han van Meegeren sold fake Vermeers, including one to the Nazi leader Hermann Göring, and in 1945 proved they were fakes by painting another under guard."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"Girl with a Pearl Earring is a portrait of his maid.", lab:"myth", t:"The idea comes from a 1999 novel. No one knows who modelled; it is a tronie, an imaginary face study."},
      {c:"He traced his paintings using a camera obscura.", lab:"disputed", t:"Some effects suggest he knew optical devices. There is no documentary evidence, and experts disagree about how much, if at all, he used one."},
      {c:"The 'pearl' is a pearl.", lab:"disputed", t:"Some argue it is too large to be a real pearl and may be polished tin or glass. It is painted with just a few strokes."},
      {c:"He was unknown in his lifetime.", lab:"myth", t:"He was respected in Delft and led the painters' guild. He was forgotten outside the Netherlands after his death."},
      {c:"He painted only about 35 pictures in his life.", lab:"disputed", t:"About 34 to 37 surviving paintings are accepted as his, but old records mention others now lost. He probably finished no more than two or three a year."},
      {c:"We know what he looked like.", lab:"disputed", t:"No certain self-portrait exists. The man at the left in The Procuress may be him."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Rijksmuseum, Amsterdam: Vermeer works, open access images", u:"https://www.rijksmuseum.nl/en"},
      {n:"Mauritshuis, The Hague: Girl with a Pearl Earring and View of Delft", u:"https://www.mauritshuis.nl/en/"},
      {n:"Essential Vermeer (free online resource)"},
      {n:"Théophile Thoré-Bürger, 'Van der Meer de Delft', Gazette des Beaux-Arts (1866), public domain"},
      {n:"Further reading: John Michael Montias, Vermeer and His Milieu (1989)"}
    ]}
  ]
},

"louis-xiv": {
  hero: "",
  kw: ["Sun King","Versailles","Fronde","Mazarin","absolutism","L'état c'est moi@myths","Colbert","Hall of Mirrors","Edict of Nantes","revocation","Huguenots","War of the Spanish Succession","ballet","Madame de Maintenon","Montespan","Marly","Vauban","Académie"],
  lede: "A king who came to the throne at four, was chased from Paris by rebels as a boy, and spent the next sixty years making sure that would never happen again, ruling as the Sun King from the dazzling palace of Versailles for 72 years.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Louis was born at the château of Saint-Germain-en-Laye on 5 September 1638 to Louis XIII and Anne of Austria, after 23 years of childless marriage. He was called Louis-Dieudonné, 'God-given'.",
      "He became king at four in 1643. After the death of his chief minister, Cardinal Mazarin, in 1661, he ruled personally, keeping power in his own hands.",
      "He built Versailles, made France the leading power in Europe, fought long wars, and drove out the Protestants. He died at Versailles on 1 September 1715, after the longest reign of any major European monarch, 72 years."
    ]},
    {k:"early", h:"Early life", ps:[
      "His mother ruled as regent with Cardinal Mazarin, an Italian-born churchman, as chief minister.",
      {t:"The Fronde, 1648 to 1653. Nobles and the Paris parlement rebelled against Mazarin. In January 1649 the royal family fled Paris at night. In 1651 a crowd forced its way into his bedroom to make sure he had not fled again. The fright stayed with him.", lab:"verified", why:"Recorded by many contemporaries, including the memoirs of Madame de Motteville."},
      "He loved dancing and appeared in court ballets. In the Ballet Royal de la Nuit (1653) he danced the rising sun, the image he made his own."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Marriage, 1660. He married his cousin Maria Theresa, daughter of Philip IV of Spain, as part of a peace treaty.",
      "Ruling alone, 1661. After Mazarin died, Louis told his ministers he would be his own first minister. He arrested his rich finance minister Nicolas Fouquet and relied on Jean-Baptiste Colbert, who reorganised taxes, industry and the navy.",
      "Versailles, 1660s to 1682. He turned his father's hunting lodge into a vast palace and moved the court and government there in 1682. Nobles were expected to live at court, competing for his favour in elaborate rituals.",
      "Wars of glory, 1667 to 1697. He fought Spain in the Spanish Netherlands, the Dutch Republic and coalitions of European powers, gaining territory on France's northern and eastern borders. Vauban built a ring of fortresses.",
      {t:"The revocation, 1685. By the Edict of Fontainebleau he revoked the Edict of Nantes, which had tolerated Protestants. Around 200,000 Huguenots fled to England, the Dutch Republic, Prussia and beyond, despite a ban on leaving.", lab:"verified", why:"The edict survives. The number of refugees is a historians' estimate, generally 150,000 to 200,000."},
      "Madame de Maintenon. After Maria Theresa died in 1683, he secretly married Françoise d'Aubigné, Madame de Maintenon, the pious former governess of his children by his mistress Madame de Montespan.",
      "The War of the Spanish Succession, 1701 to 1714. His grandson Philip became King of Spain, and most of Europe went to war to stop France and Spain uniting. Defeats and a terrible winter in 1709 brought famine. Philip kept Spain, but France was exhausted.",
      "Death, 1715. His son, grandson and eldest great-grandson died before him. He was succeeded by a five-year-old great-grandson, Louis XV."
    ]},
    {k:"works", h:"What he left", ps:[
      "The Palace of Versailles, with its Hall of Mirrors (1678 to 1684) and gardens by André Le Nôtre.",
      "Patronage of the arts: the playwrights Molière and Racine, the composer Lully, academies of science, painting and music, and the Paris Observatory.",
      "A strong central state, with officials called intendants sent from Paris to govern the provinces.",
      "Les Invalides in Paris, a home for wounded soldiers."
    ]},
    {k:"people", h:"His people", ps:[
      "Anne of Austria (1601 to 1666), his mother, and Cardinal Mazarin (1602 to 1661), his teacher in politics.",
      "Jean-Baptiste Colbert (1619 to 1683), minister of finance.",
      "Madame de Montespan, his mistress for over a decade, and Madame de Maintenon, his second wife.",
      "Louis, the Grand Dauphin, his only surviving legitimate son, who died in 1711.",
      "The Duke of Saint-Simon, a courtier whose memoirs give a sharp, hostile picture of his court."
    ]},
    {k:"world", h:"The world around him", ps:[
      "France had about 20 million people, the largest population in western Europe.",
      "His long reign saw the rise of Britain and the Dutch as sea powers, and of Austria and Prussia.",
      "French became the language of European courts and diplomacy."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "He became the model of the absolute monarch, copied by rulers from Spain to Russia, who built their own Versailles.",
      "His wars and spending left France heavily in debt, a problem that helped lead to the French Revolution in 1789.",
      "Versailles is now a museum and a UNESCO World Heritage Site."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He said 'L'État, c'est moi' ('I am the State').", lab:"myth", t:"There is no reliable evidence he said it. On his deathbed he reportedly said, 'I am going, but the State will always remain.'"},
      {c:"He never bathed.", lab:"myth", t:"He washed, swam and had baths built at Versailles, though bathing was less common than today."},
      {c:"The Man in the Iron Mask was his twin brother.", lab:"myth", t:"A real masked prisoner existed, but there is no evidence he was related to the king. Voltaire hinted he was an older brother, and Alexandre Dumas turned him into a twin. The mask was probably black velvet."},
      {c:"Versailles had no toilets.", lab:"myth", t:"It had many close-stools and, under later kings, a few flushing toilets, though sanitation was poor and corridors sometimes used as latrines."},
      {c:"He was a tyrant who ignored all advice.", lab:"disputed", t:"He held power closely but worked long hours with ministers in council. His later wars show how hard it was to know when to stop."},
      {c:"He was very tall, helped by high heels.", lab:"disputed", t:"His real height is uncertain: the often-quoted 1.63 metres is poorly documented, and estimates from his armour and clothes run much higher. He did wear red-heeled shoes, a fashion he restricted to nobles admitted at court."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Duc de Saint-Simon, Memoirs of Louis XIV and His Court and of the Regency, Complete, Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/3875"},
      {n:"Voltaire, The Age of Louis XIV (1751), public domain translations"},
      {n:"Louis XIV, Mémoires for the Instruction of the Dauphin (1660s), public domain"},
      {n:"Palace of Versailles: history", u:"https://en.chateauversailles.fr/"},
      {n:"Further reading: Philip Mansel, King of the World: The Life of Louis XIV (2019)"}
    ]}
  ]
},

"peter-the-great": {
  hero: "",
  kw: ["Tsar","Russia","Grand Embassy","Saardam","Deptford","shipbuilding","navy","Great Northern War","Poltava","Charles XII","St Petersburg","beard tax","Table of Ranks","Westernisation","Alexei","Catherine I","Kunstkamera","Bronze Horseman","Azov","emperor"],
  lede: "A two-metre-tall tsar who worked incognito as a ship's carpenter in Holland, cut off his nobles' beards, beat Sweden, and built a new capital on a swamp by the Baltic so Russia would face Europe. His own son died in prison after being tortured on his orders.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Peter Alexeyevich was born in Moscow on 9 June 1672 (30 May in the old Russian calendar), the son of Tsar Alexis and his second wife, Natalya Naryshkina.",
      "He became co-tsar at ten in 1682 and ruled alone from 1696. He travelled in western Europe, built a navy, won the Great Northern War against Sweden, and founded St Petersburg in 1703.",
      "He forced sweeping changes on Russia's army, government, church and dress. In 1721 he took the title Emperor. He died in St Petersburg on 8 February 1725 (28 January old style)."
    ]},
    {k:"early", h:"Early life", ps:[
      {t:"In 1682, aged ten, he watched a revolt of the Streltsy, Moscow's musketeers, in which some of his mother's relatives and advisers were thrown onto pikes before his eyes.", lab:"likely", why:"Described by contemporaries. Historians link his later hatred of the Streltsy and possibly a facial twitch to this."},
      "His half-sister Sophia then ruled as regent, while Peter and his sickly half-brother Ivan V were co-tsars.",
      "He grew up largely outside the court, in a village near Moscow, playing war games with real soldiers and befriending foreigners in Moscow's German Quarter, who taught him mathematics, sailing and gunnery.",
      "In 1689 he took power from Sophia and sent her to a convent."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Azov, 1695 to 1696. His first attack on the Ottoman fortress of Azov failed. He built a river fleet over one winter and took it in 1696.",
      {t:"The Grand Embassy, 1697 to 1698. He travelled through Europe with a large delegation, supposedly incognito as 'Peter Mikhailov'. He worked as a shipwright in the Dutch East India Company yards in Amsterdam and studied shipbuilding at Deptford, near London.", lab:"verified", why:"Many Dutch and English records describe his visit, including damage his party did to John Evelyn's house in Deptford."},
      "The Streltsy and the beards, 1698. He rushed home to crush another Streltsy revolt, executing over a thousand. On return he personally cut off the beards of his nobles, and later taxed those who kept them.",
      "The Great Northern War, 1700 to 1721. He went to war with Sweden for access to the Baltic. After a crushing defeat at Narva (1700), he rebuilt the army.",
      "St Petersburg, 1703. He founded a fortress at the mouth of the Neva and made the city his capital in 1712. Tens of thousands of forced labourers worked on it in harsh conditions.",
      "Poltava, 1709. He defeated King Charles XII of Sweden in Ukraine, turning Russia into a great power. Peace came in 1721 with Russia holding the Baltic coast.",
      {t:"Alexei, 1718. His son and heir Alexei, who opposed his reforms, fled abroad. Lured back, he was tried for treason, tortured and died in prison.", lab:"verified", why:"Court records survive. Whether Peter ordered his death directly is unclear."},
      "Death, 1725. He died probably of a urinary or kidney illness without naming an heir. His second wife, born a peasant in Livonia and once a servant, became Empress Catherine I."
    ]},
    {k:"works", h:"What he built and changed", ps:[
      "The Russian navy, starting almost from nothing.",
      "St Petersburg, Russia's 'window on Europe', with the Peter and Paul Fortress and the Kunstkamera, Russia's first museum, founded in 1714, opened to the public in 1719 and including his collection of curiosities.",
      "The Table of Ranks (1722), letting men rise by service rather than birth.",
      "Reforms of the calendar, alphabet, dress, schools and the church, which he placed under a state body called the Holy Synod."
    ]},
    {k:"people", h:"His people", ps:[
      "Catherine I (1684 to 1727), his second wife and successor.",
      "Alexander Menshikov, his closest friend, who rose from humble origins to be prince and governor of St Petersburg.",
      "Alexei Petrovich (1690 to 1718), his son.",
      "Franz Lefort, a Swiss officer who was his early companion and adviser.",
      "Charles XII of Sweden (1682 to 1718), his great enemy."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Russia was vast but cut off from western Europe, with no warm-water port and an army of old-style forces.",
      "Most Russians were serfs. His reforms increased their burden through taxes and conscription.",
      "Louis XIV ruled France, and the Ottoman Empire still held the shores of the Black Sea."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "Russia became a major European power, and St Petersburg was its capital until 1918.",
      "The Bronze Horseman, a statue of him commissioned by Catherine the Great, stands by the Neva and inspired Pushkin's poem.",
      "Russians have argued ever since whether he saved or betrayed Russia's traditions."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He was 2 metres tall.", lab:"likely", t:"Contemporary measurements put him at about 2.03 metres. He was famous for his height, though his hands and feet were small."},
      {c:"His Grand Embassy was secret and nobody recognised him.", lab:"myth", t:"His incognito fooled almost no one. Everyone knew the giant 'Peter Mikhailov' was the tsar."},
      {c:"He founded St Petersburg on empty land.", lab:"myth", t:"The area had small Finnish and Swedish settlements, including a Swedish fortress, Nyenskans."},
      {c:"He wrote a will telling Russia to conquer the world.", lab:"myth", t:"The so-called Testament of Peter the Great was a forgery, probably drafted in the 1790s and first published in France in 1812."},
      {c:"He loved pulling teeth.", lab:"verified", t:"He practised dentistry on courtiers. A collection of teeth he pulled is in the Kunstkamera."},
      {c:"He personally beheaded rebels.", lab:"disputed", t:"Contemporary diplomats reported he took part in executions in 1698. Details are uncertain."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Voltaire, The History of the Russian Empire under Peter the Great, translated by Tobias Smollett, Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/42540"},
      {n:"Jacob Abbott, History of Peter the Great (1859), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/21889"},
      {n:"Johann Georg Korb, Diary of an Austrian Secretary of Legation at the Court of Czar Peter the Great (1700, English 1863), public domain"},
      {n:"Kunstkamera, Peter the Great Museum of Anthropology and Ethnography, St Petersburg"},
      {n:"Further reading: Robert K. Massie, Peter the Great: His Life and World (1980)"},
      {n:"Further reading: Lindsey Hughes, Russia in the Age of Peter the Great (1998)"}
    ]}
  ]
},
"voltaire": {
  hero: "",
  kw: ["François-Marie Arouet","Paris","Bastille","England","Letters on the English","Émilie du Châtelet","Cirey","Frederick the Great","Candide","Ferney","Calas","Écrasez l'infâme","tolerance","Enlightenment","Philosophical Dictionary","Newton","Lisbon earthquake","I disapprove of what you say@myths","cultivate our garden"],
  lede: "The sharpest wit of the Enlightenment: twice jailed in the Bastille, exiled to England, friend and then enemy of a king, he wrote the satire Candide and spent his old age fighting for victims of religious injustice. 'Crush the infamous thing,' he signed his letters.",
  sections: [
    {k:"short", h:"In short", ps:[
      "François-Marie Arouet was born in Paris on 21 November 1694, the son of a lawyer. He adopted the pen name Voltaire in 1718.",
      "He wrote plays, poems, histories, philosophical tales and over 20,000 letters, attacking intolerance, superstition and the power of the Church. His books were often banned and burned.",
      "He spent much of his life outside Paris, at Cirey, in Prussia, and finally at Ferney on the Swiss border. He returned to Paris in triumph in 1778 and died there on 30 May, aged 83."
    ]},
    {k:"early", h:"Early life", ps:[
      "He was educated by Jesuits at the Collège Louis-le-Grand, where he learned Latin and the art of argument.",
      "His father wanted him to be a lawyer; he wanted to write. He became known in Paris society for clever, cutting verses.",
      {t:"The Bastille, 1717. Accused of writing verses mocking the Regent, he was jailed for 11 months. He used the time to write his first tragedy, Oedipe, which was a great success in 1718.", lab:"verified", why:"Prison and police records survive."}
    ]},
    {k:"turns", h:"Turning points", ps:[
      "The Rohan affair, 1726. After he traded insults with a nobleman, the Chevalier de Rohan, Rohan's servants beat him. When he sought a duel, he was put back in the Bastille and then allowed to go to England.",
      "England, 1726 to 1728. He learned English, met writers and thinkers, attended Isaac Newton's funeral, and admired English freedom of religion and the press.",
      {t:"Letters on the English, 1733 to 1734. His book praising English Quakers, Locke, Newton and religious tolerance was published in English and then French. In France it was condemned and burned, and a warrant was issued for his arrest.", lab:"verified", why:"The order of the Paris parlement of June 1734 survives."},
      "Cirey, 1734 to 1749. He lived with the brilliant mathematician Émilie du Châtelet at her château in Champagne. Together they studied Newton's physics; she later translated Newton's Principia into French.",
      "Prussia, 1750 to 1753. He accepted King Frederick the Great's invitation to Potsdam. They quarrelled, and Frederick's agents briefly held Voltaire at Frankfurt on his way out.",
      "Lisbon and Candide, 1755 to 1759. The earthquake that destroyed Lisbon in 1755 led him to attack the idea that 'all is for the best'. Candide (1759), a short satirical novel, mocks that optimism.",
      {t:"The Calas affair, 1762 to 1765. Jean Calas, a Protestant of Toulouse, was tortured and executed for supposedly murdering his son to stop him becoming Catholic. Voltaire campaigned for three years until the verdict was overturned and the family compensated.", lab:"verified", why:"Court decisions and Voltaire's Treatise on Tolerance (1763) survive."},
      "Last return, 1778. After 28 years away he went back to Paris for the premiere of his last play, Irène, and was crowned with laurel at the theatre. He died weeks later. Refused church burial in Paris, he was buried secretly at an abbey; in 1791 the revolutionaries moved him to the Panthéon."
    ]},
    {k:"works", h:"The work", ps:[
      "Candide (1759), which ends with the advice that 'we must cultivate our garden'.",
      "Letters on the English (1733), Treatise on Tolerance (1763) and the Philosophical Dictionary (1764).",
      "Histories, including The Age of Louis XIV (1751) and a history of Peter the Great's Russia.",
      "About 50 plays, once considered his greatest work, now rarely staged.",
      "A vast correspondence with kings, empresses including Catherine the Great, scientists and friends."
    ]},
    {k:"people", h:"His people", ps:[
      "Émilie du Châtelet (1706 to 1749), his partner and intellectual equal.",
      "Frederick the Great of Prussia, his admirer and later adversary.",
      "Catherine the Great of Russia, his correspondent for 15 years, who bought his library after his death.",
      "Marie-Louise Denis, his niece, companion and housekeeper in his last decades.",
      "Jean-Jacques Rousseau, whom he mocked and who came to hate him."
    ]},
    {k:"world", h:"The world around him", ps:[
      "France was an absolute monarchy with a powerful Catholic Church. Protestants had no legal rights after 1685.",
      "The Enlightenment spread through salons, cafés, academies and the Encyclopédie, edited by Diderot, to which Voltaire contributed.",
      "Censorship was strict, so many books, including his, were printed in Holland or Geneva and smuggled into France."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "He became a symbol of free thought, religious tolerance and freedom of speech.",
      "The French Revolution claimed him as a forerunner. His heart is kept in the National Library of France.",
      "'Voltairean' still means sceptical, witty and anticlerical."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He said 'I disapprove of what you say, but I will defend to the death your right to say it.'", lab:"myth", t:"Those words were written by Evelyn Beatrice Hall in a 1906 biography to sum up his attitude."},
      {c:"He was an atheist.", lab:"myth", t:"He was a deist, believing in a creator God but rejecting organised religion and miracles. He even built a church at Ferney, inscribed 'Deo erexit Voltaire'."},
      {c:"He predicted the Bible would vanish within a century of his death.", lab:"myth", t:"A popular story, often with the claim that his house became a Bible society. There is no reliable source for either."},
      {c:"He wrote Candide in three days.", lab:"tradition", t:"An old anecdote with no firm source. He probably worked on it over months in 1758."},
      {c:"He was a champion of equality for all.", lab:"disputed", t:"He fought religious persecution, but he distrusted the common people, admired enlightened kings, and wrote antisemitic and racist passages."},
      {c:"He drank 40 cups of coffee a day.", lab:"tradition", t:"A frequently repeated claim with no solid contemporary source, though he did love coffee."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Voltaire, Candide (1759), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/19942"},
      {n:"Voltaire, Letters on England, edited by Henry Morley, Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/2445"},
      {n:"Voltaire, A Philosophical Dictionary, Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/18569"},
      {n:"S. G. Tallentyre (Evelyn Beatrice Hall), The Friends of Voltaire (1906), public domain"},
      {n:"Further reading: Roger Pearson, Voltaire Almighty (2005)"}
    ]}
  ]
},

"handel": {
  hero: "",
  kw: ["Georg Friedrich Händel","Halle","Hamburg","Italy","Hanover","London","George I","Water Music","Music for the Royal Fireworks","Messiah","Hallelujah","Dublin","oratorio","opera","Rinaldo","Zadok the Priest","Foundling Hospital","Brook Street","blind","Westminster Abbey","stand up@myths"],
  lede: "A German composer who made his name in Italy, settled in London, wrote Italian operas for the English until they went out of fashion, then turned to oratorios in English, and wrote Messiah in just over three weeks.",
  sections: [
    {k:"short", h:"In short", ps:[
      "George Frideric Handel (Georg Friedrich Händel) was born in Halle, then in Brandenburg-Prussia (now Saxony-Anhalt, Germany), on 23 February 1685, the same year as Johann Sebastian Bach.",
      "After working in Hamburg and Italy, he became Kapellmeister to the Elector of Hanover and moved to London, where he stayed when the Elector became King George I. He became a British subject in 1727.",
      "He wrote over 40 operas, about 25 oratorios including Messiah (1741), and the Water Music and Music for the Royal Fireworks. He died in London on 14 April 1759 and is buried in Westminster Abbey."
    ]},
    {k:"early", h:"Early life", ps:[
      "His father, a barber-surgeon in his sixties, wanted him to study law and opposed music.",
      {t:"As a boy he is said to have practised secretly on a clavichord smuggled into the attic. On a visit to the Duke of Saxe-Weissenfels, his organ playing impressed the Duke, who persuaded his father to let him study music.", lab:"tradition", why:"From John Mainwaring's biography of 1760, the first book-length biography of a composer, based partly on Handel's own stories in old age."},
      "He studied with Friedrich Wilhelm Zachow, organist of Halle's main church, and briefly enrolled at the university."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Hamburg, 1703 to 1706. He played violin and harpsichord in the opera orchestra. A quarrel with the composer Johann Mattheson ended in a sword duel in 1704; by Mattheson's own account, a coat button stopped his blade.",
      "Italy, 1706 to 1710. In Florence, Rome, Naples and Venice he wrote operas, cantatas and oratorios. His opera Agrippina was a hit in Venice in 1709.",
      "London, 1710 to 1711. On leave from Hanover, he presented Rinaldo, the first Italian opera written for London, with live birds released on stage.",
      "A new king, 1714. His employer, the Elector of Hanover, became George I of Britain. Handel, who had overstayed his leave, was soon back in royal favour.",
      {t:"Water Music, 1717. On 17 July 1717 the king took a barge trip on the Thames, and about 50 musicians played Handel's new suites from another boat. The king had them played three times.", lab:"verified", why:"Reported in a newspaper, the Daily Courant, and in a Prussian diplomat's dispatch."},
      "Opera wars, 1719 to 1741. He ran companies staging Italian opera with star singers. Rival companies, the craze for The Beggar's Opera (1728) and huge costs ruined them. He lost large sums, though he was never actually bankrupt, and suffered what was probably a stroke in 1737.",
      "Messiah, 1741 to 1742. With a text compiled from the Bible by Charles Jennens, he wrote Messiah in about 24 days, from 22 August to 14 September 1741. It premiered in Dublin on 13 April 1742 at a charity concert.",
      "Last years. His English oratorios, such as Judas Maccabaeus, made him famous and wealthy. From 1750 he gave annual performances of Messiah for the Foundling Hospital. Blind in his last years after failed eye operations, he still played the organ in concerts."
    ]},
    {k:"works", h:"The work", ps:[
      "Messiah (1741), whose 'Hallelujah' chorus is among the most performed pieces of music in the world.",
      "Oratorios: Israel in Egypt, Saul, Samson, Judas Maccabaeus, Solomon, Theodora and Jephtha.",
      "Operas, including Rinaldo, Giulio Cesare and Alcina.",
      "Zadok the Priest (1727), written for George II's coronation and sung at every British coronation since.",
      "Water Music (1717) and Music for the Royal Fireworks (1749), whose rehearsal drew about 12,000 people and stopped traffic on London Bridge."
    ]},
    {k:"people", h:"His people", ps:[
      "Charles Jennens, who compiled the words of Messiah.",
      "George I and George II, his royal patrons.",
      "Senesino and Francesca Cuzzoni, star singers of his operas; he is said to have threatened to drop Cuzzoni out of a window.",
      "John Christopher Smith, his copyist and manager, and his son of the same name, who helped him when he went blind.",
      "Johann Sebastian Bach, born the same year about 130 kilometres away. They never met."
    ]},
    {k:"world", h:"The world around him", ps:[
      "London was growing into the largest city in Europe, with a lively public concert life and a new middle-class audience.",
      "The Hanoverian kings brought German connections to the British throne.",
      "Public charity, such as the Foundling Hospital for abandoned children, was a new fashion that his concerts supported."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "Messiah has been performed every year since his death, often by huge choirs.",
      "Haydn, after hearing Handel festivals in London, wrote The Creation. Beethoven called Handel the greatest composer who ever lived.",
      "His house at 25 Brook Street, London, is now the museum Handel Hendrix House; Jimi Hendrix lived next door two centuries later."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"Audiences stand for the 'Hallelujah' chorus because George II stood up at the London premiere.", lab:"tradition", t:"The only source is a letter written 37 years later, and there is no evidence the king attended. The custom is real; its origin is uncertain."},
      {c:"He wrote the Water Music to win back the king's favour.", lab:"myth", t:"The story comes from Mainwaring. Handel was already back in favour by 1714 to 1715."},
      {c:"He wrote Messiah in a fever of inspiration, weeping.", lab:"tradition", t:"He wrote it fast, but borrowed some music from his earlier works. The weeping story was told much later."},
      {c:"He and Bach were close.", lab:"myth", t:"They never met. Bach tried twice to visit him, but missed him each time."},
      {c:"Messiah was a Christmas work.", lab:"myth", t:"It premiered in April 1742, just after Easter, and Handel performed it in Lent. Christmas performances became a later tradition."},
      {c:"He was operated on by the same eye surgeon as Bach.", lab:"likely", t:"The travelling English eye surgeon John Taylor operated on Bach and, by his own account, on Handel too. Neither regained his sight. Handel was already going blind before any operation."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"John Mainwaring, Memoirs of the Life of the Late George Frederic Handel (1760), public domain"},
      {n:"W. S. Rockstro, The Life of George Frederick Handel (1883), public domain"},
      {n:"Romain Rolland, Handel, translated by A. Eaglefield Hull (1916), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/39671"},
      {n:"Handel's autograph scores, British Library (free to view)"},
      {n:"Handel Hendrix House, London (museum)", u:"https://handelhendrix.org/"},
      {n:"Further reading: Donald Burrows, Handel (1994)"}
    ]}
  ]
},

"james-cook": {
  hero: "",
  kw: ["Captain Cook","Yorkshire","Whitby","Endeavour","Resolution","Transit of Venus","Tahiti","New Zealand","Botany Bay","Great Barrier Reef","Australia","Antarctic Circle","scurvy","sauerkraut","Hawaii","Kealakekua Bay","Northwest Passage","Joseph Banks","Tupaia","Harrison chronometer"],
  lede: "A farm labourer's son who learned his seamanship on coal ships, then made three great voyages across the Pacific, mapped New Zealand and eastern Australia, crossed the Antarctic Circle, and was killed in Hawaii. For the peoples he met, his arrival marked the beginning of colonisation.",
  sections: [
    {k:"short", h:"In short", ps:[
      "James Cook was born on 27 October 1728 (7 November new style) in Marton, Yorkshire, England. His father was a Scottish farm labourer.",
      "He learned navigation on North Sea coal ships, joined the Royal Navy in 1755, and made his name charting the St Lawrence River and Newfoundland.",
      "He led three voyages to the Pacific between 1768 and 1779. He was killed at Kealakekua Bay, Hawaii, on 14 February 1779."
    ]},
    {k:"early", h:"Early life", ps:[
      "His father's employer paid for some schooling. At 16 he worked for a grocer in the fishing village of Staithes.",
      "At 18 he was apprenticed to John Walker, a Quaker shipowner of Whitby, sailing collier ships carrying coal down the coast to London. He studied mathematics and navigation in his free time.",
      "In 1755, when war with France was coming, he left a promising merchant career to join the navy as an able seaman."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Canada, 1758 to 1767. In the Seven Years' War he helped chart the St Lawrence for the attack on Quebec (1759). He then surveyed the coast of Newfoundland with such accuracy that his charts were used for over a century.",
      {t:"First voyage, 1768 to 1771. Commanding HMS Endeavour, he took astronomers to Tahiti to observe the Transit of Venus in 1769. Secret orders then sent him to look for a southern continent. He charted both islands of New Zealand and the east coast of Australia, landing at Botany Bay in April 1770.", lab:"verified", why:"From his own journal and the Admiralty's orders, which survive."},
      "The reef, June 1770. Endeavour struck the Great Barrier Reef and nearly sank. The crew spent seven weeks repairing it at the site of today's Cooktown, where they had extended contact with the Guugu Yimithirr people.",
      "Second voyage, 1772 to 1775. In HMS Resolution he sailed farther south than anyone before, crossing the Antarctic Circle and proving that no great habitable southern continent existed. He tested a copy of John Harrison's marine chronometer, which let sailors find longitude.",
      "Scurvy. On his voyages few men died of scurvy. He insisted on clean ships, fresh food and sauerkraut, though the real cure, vitamin C from citrus, was not understood.",
      "Third voyage, 1776 to 1779. Searching for a Northwest Passage from the Pacific, he reached Hawaii in 1778, the first known European visit, and sailed along the coast of North America to the Bering Strait.",
      {t:"Death, 1779. Back in Hawaii, after a ship's boat was stolen, Cook tried to take the chief Kalaniʻōpuʻu hostage. In the fight on the shore he was stabbed and killed, along with four marines and more than a dozen Hawaiians.", lab:"verified", why:"Many eyewitness accounts from the crew survive, though they differ on details."}
    ]},
    {k:"works", h:"What he left", ps:[
      "Charts of New Zealand, eastern Australia, Newfoundland and much of the Pacific, of remarkable accuracy.",
      "His journals, published in edited form after each voyage and widely read.",
      "Scientific collections and records made by the naturalists Joseph Banks and Daniel Solander, and drawings by artists such as Sydney Parkinson and William Hodges.",
      "Proof that sailors could stay healthy on very long voyages."
    ]},
    {k:"people", h:"His people", ps:[
      "Elizabeth Batts (1742 to 1835), his wife. They had six children, all of whom died before her; he spent most of their marriage at sea.",
      "Joseph Banks (1743 to 1820), the wealthy naturalist on the first voyage.",
      "Tupaia, a Tahitian navigator and priest who joined Endeavour, drew a chart of over 70 Pacific islands from his own knowledge, and interpreted in New Zealand. He died in Batavia in 1770.",
      "William Bligh, sailing master on the third voyage, later captain of the Bounty."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Britain and France competed for empire and knowledge after the Seven Years' War.",
      "The Pacific was home to many peoples with their own great navigating traditions, including Polynesians who had settled islands across thousands of kilometres.",
      "The American Revolution was being fought during his third voyage."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "His voyages opened the Pacific to European trade and settlement. Britain sent a convict fleet to Botany Bay in 1788 and founded a penal colony nearby at Sydney Cove.",
      "For Aboriginal Australians, Māori and Pacific Islanders his arrival is remembered as the beginning of invasion, disease and loss of land, and his statues are now debated.",
      "Endeavour was scuttled off Newport, Rhode Island, in 1778. Australian researchers say they have identified its wreck there, though not all experts agree."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"Cook discovered Australia.", lab:"myth", t:"Aboriginal people had lived there for at least 50,000 years, and Dutch sailors charted parts of its northern and western coasts from 1606. Cook charted the east coast."},
      {c:"Hawaiians thought Cook was the god Lono.", lab:"disputed", t:"Historians fiercely debate this. The anthropologist Marshall Sahlins argued yes; Gananath Obeyesekere argued it was a European myth."},
      {c:"Cook was eaten by Hawaiians.", lab:"myth", t:"His body was treated as that of a high chief: the flesh was removed and the bones kept. Some remains were returned to his crew."},
      {c:"He sailed around the world three times.", lab:"myth", t:"He made three great voyages, but only the first two circled the globe. He died on the third, which his crew completed."},
      {c:"He was a captain on his first voyage.", lab:"myth", t:"He was a lieutenant. He was promoted to commander in 1771 and captain in 1775."},
      {c:"He was the first to cure scurvy.", lab:"myth", t:"James Lind had shown in 1747 that citrus helped. Cook's success came from many measures together."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Captain Cook's Journal During His First Voyage Round the World, edited by W. J. L. Wharton (1893), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/8106"},
      {n:"The Three Voyages of Captain Cook Round the World, Vol. I, edited by John Hawkesworth, Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/56196"},
      {n:"National Library of Australia: Endeavour journal (digitised, free to view)"},
      {n:"Royal Museums Greenwich: Cook voyages collections"},
      {n:"Further reading: J. C. Beaglehole, The Life of Captain James Cook (1974)"},
      {n:"Further reading: Anne Salmond, The Trial of the Cannibal Dog (2003)"}
    ]}
  ]
},

"jefferson": {
  hero: "",
  kw: ["Monticello","Virginia","Declaration of Independence","all men are created equal","Paris","Secretary of State","Hamilton","president","Louisiana Purchase","Lewis and Clark","University of Virginia","religious freedom","Sally Hemings","slavery","John Adams","Fourth of July","Notes on the State of Virginia","embargo"],
  lede: "The Virginia planter who wrote 'all men are created equal' while enslaving more than 600 people across his lifetime. Author of the Declaration of Independence, third president, founder of a university, and a man of contradictions Americans still argue over.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Thomas Jefferson was born on 13 April 1743 (2 April old style) at Shadwell, Virginia, a British colony, into a family of planters.",
      "At 33 he drafted the Declaration of Independence. He later served as governor of Virginia, minister to France, the first Secretary of State, vice president, and the third President of the United States, from 1801 to 1809.",
      "He founded the University of Virginia and died at his home, Monticello, on 4 July 1826, the 50th anniversary of the Declaration, a few hours before John Adams."
    ]},
    {k:"early", h:"Early life", ps:[
      "His father, Peter Jefferson, was a surveyor and planter who died when Thomas was 14, leaving him land and enslaved people.",
      "He studied at the College of William and Mary and then law with George Wythe. He read widely in philosophy, science and classics.",
      "In 1768 he began building Monticello on a mountaintop on his land, a project he worked on, rebuilt and changed for over 40 years."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Revolution, 1774 to 1775. His pamphlet A Summary View of the Rights of British America made him known. He was sent to the Continental Congress.",
      {t:"The Declaration, June to July 1776. A committee chose him to draft it. Congress cut about a quarter of his text, including a passage blaming the King for the slave trade. It was adopted on 4 July 1776.", lab:"verified", why:"His rough draft survives in the Library of Congress, with edits by Adams, Franklin and Congress."},
      "Virginia, 1776 to 1781. He wrote the Virginia Statute for Religious Freedom (adopted 1786). As governor he fled Monticello just ahead of British cavalry in 1781, an episode critics used against him.",
      "Loss, 1782. His wife Martha died after childbirth. Of their six children only two daughters lived to adulthood.",
      "France, 1784 to 1789. As American minister in Paris, he saw the start of the French Revolution. His enslaved cook James Hemings trained in French cooking, and Sally Hemings, his late wife's enslaved half-sister, came to Paris.",
      "Secretary of State, 1790 to 1793. He clashed with Alexander Hamilton over the power of the federal government, and the two sides became the first American political parties.",
      "President, 1801 to 1809. In 1803 he bought the vast Louisiana Territory from Napoleon, doubling the size of the country, and sent Lewis and Clark to explore it. His trade embargo of 1807 against Britain and France was a failure.",
      "Last years. He founded the University of Virginia, which opened in 1825, and renewed his friendship with John Adams through letters. He died deeply in debt; most of the people he enslaved were sold after his death."
    ]},
    {k:"works", h:"What he wrote and built", ps:[
      "The Declaration of Independence (1776), whose second paragraph begins 'We hold these truths to be self-evident, that all men are created equal'.",
      "The Virginia Statute for Religious Freedom, a model for the First Amendment.",
      "Notes on the State of Virginia (1785), his only book, which includes his argument against slavery and his racist speculations about Black people.",
      "Monticello and the University of Virginia, which he designed.",
      "Over 18,000 letters. His library became the core of the Library of Congress after the British burned the first one in 1814."
    ]},
    {k:"people", h:"His people", ps:[
      "Martha Wayles Skelton Jefferson (1748 to 1782), his wife.",
      "Sally Hemings (about 1773 to 1835), an enslaved woman at Monticello. Most historians now accept that he fathered her six children, four of whom survived to adulthood and gained their freedom.",
      "John Adams, ally, rival and finally friend.",
      "James Madison, his closest political partner and successor as president.",
      "Alexander Hamilton, his great opponent."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Virginia's wealth rested on tobacco grown by enslaved Africans and their descendants. About 40 percent of Virginians were enslaved.",
      "The Enlightenment ideas of natural rights that he expressed came from writers such as John Locke.",
      "His presidency coincided with the Napoleonic Wars in Europe and the Haitian Revolution, which he regarded with fear."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "The words of the Declaration have been used by many, including abolitionists, suffragists and Martin Luther King Jr., to demand that America live up to them.",
      "His face is carved on Mount Rushmore and appears on the US nickel.",
      "Monticello now tells the stories of the enslaved families who lived there, including the Hemingses."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"Jefferson freed the people he enslaved.", lab:"myth", t:"He freed only seven people, all members of the Hemings family, two in his lifetime and five in his will. Around 130 were sold after his death to pay his debts."},
      {c:"The Sally Hemings story is just a rumour.", lab:"myth", t:"A DNA study in 1998, together with historical evidence, convinced most historians, including the Thomas Jefferson Foundation, that he was the father of her children."},
      {c:"He wrote the Declaration alone.", lab:"myth", t:"He wrote the first draft himself, but Adams, Franklin and Congress made many changes."},
      {c:"He and Adams both died on 4 July 1826.", lab:"verified", t:"Yes. Adams's last words reportedly included 'Thomas Jefferson survives', not knowing Jefferson had died hours earlier."},
      {c:"He made a Bible of his own by cutting the miracles out.", lab:"verified", t:"He cut and pasted passages of the Gospels to make The Life and Morals of Jesus of Nazareth, now called the Jefferson Bible."},
      {c:"He wrote that 'the tree of liberty must be refreshed from time to time with the blood of patriots and tyrants'.", lab:"verified", t:"The words are his, from a private letter of 13 November 1787 to William Stephens Smith about Shays's Rebellion. They were not a public statement or a speech."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"The Declaration of Independence (1776), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/1"},
      {n:"The Writings of Thomas Jefferson, Vol. 1 (Autobiography), edited by H. A. Washington (1853), Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/45847"},
      {n:"Thomas Jefferson, Notes on the State of Virginia (1785), public domain"},
      {n:"Founders Online, National Archives: the Papers of Thomas Jefferson (free to view)", u:"https://founders.archives.gov/"},
      {n:"Thomas Jefferson Foundation, Monticello", u:"https://www.monticello.org/"},
      {n:"Further reading: Annette Gordon-Reed, The Hemingses of Monticello (2008)"}
    ]}
  ]
},

"cicero": {
  hero: "",
  kw: ["Marcus Tullius Cicero","Arpinum","orator","Catiline","consul","63 BCE","Verres","Pompey","Caesar","Mark Antony","Philippics","letters","Atticus","republic","new man","proscription","Latin prose","On Duties","Tiro"],
  lede: "A small-town 'new man' who talked his way to the top of Rome, crushed a conspiracy as consul, wrote the Latin that schoolchildren learned for two thousand years, and was killed for his speeches against Mark Antony. His severed hands were nailed up in the Forum.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Marcus Tullius Cicero was born on 3 January 106 BCE in Arpinum, a hill town south-east of Rome, into a well-off family that had never held high office.",
      "He became Rome's greatest lawyer and orator and was elected consul in 63 BCE, when he exposed the conspiracy of Catiline.",
      "He tried to defend the republic through the civil wars of Caesar and Pompey. After Caesar's murder he attacked Mark Antony in a series of speeches and was killed on Antony's orders on 7 December 43 BCE."
    ]},
    {k:"early", h:"Early life", ps:[
      "His father sent him and his brother Quintus to Rome to study law, rhetoric and Greek philosophy.",
      "He served briefly in the army during the Social War (91 to 88 BCE), but had no taste for soldiering.",
      {t:"His first big case, in 80 BCE, defended Sextus Roscius against a murder charge brought by allies of the dictator Sulla's powerful freedman. Winning it was a bold act.", lab:"verified", why:"His speech, Pro Roscio Amerino, survives."},
      "He then spent two years studying in Athens and Rhodes, improving his voice and style."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Verres, 70 BCE. He prosecuted Gaius Verres, the corrupt governor of Sicily. His evidence was so crushing that Verres fled into exile after the first hearing. The case made Cicero the leading advocate in Rome.",
      {t:"Consul and Catiline, 63 BCE. As consul he revealed a plot by the bankrupt aristocrat Lucius Sergius Catilina to seize power. In the Senate he opened his first speech against Catiline with the famous question 'How long, Catiline, will you abuse our patience?' Five conspirators were executed without trial on his authority.", lab:"verified", why:"The four Catilinarian speeches survive, and the historian Sallust wrote an account of the conspiracy."},
      "Exile, 58 to 57 BCE. The populist tribune Clodius passed a law against anyone who had executed citizens without trial. Cicero fled to Greece and his house was destroyed. He was recalled 18 months later.",
      "Civil war, 49 to 47 BCE. He reluctantly joined Pompey against Caesar, then accepted Caesar's pardon after Pompey's defeat.",
      "Philosophy and grief, 46 to 44 BCE. Shut out of politics and devastated by the death of his daughter Tullia in 45 BCE, he wrote most of his philosophical works in about two years.",
      {t:"The Philippics and death, 44 to 43 BCE. After Caesar's murder he led the Senate against Mark Antony in fourteen speeches he called Philippics. When Antony, Octavian and Lepidus formed the Second Triumvirate, Cicero was on the list of the proscribed. Soldiers caught him near his villa at Formiae; he leaned out of his litter and offered his neck.", lab:"likely", why:"The death scene is described by Plutarch, Livy (quoted by Seneca the Elder) and Appian, who agree on the main points."}
    ]},
    {k:"works", h:"The work", ps:[
      "58 surviving speeches, including those against Verres, against Catiline and against Antony.",
      "Philosophical works: On Duties, On the Nature of the Gods, On Old Age, On Friendship, the Tusculan Disputations and On the Republic.",
      "Rhetoric: On the Orator and Brutus, about how to speak well.",
      "Over 900 letters, to his friend Atticus, his brother and others, which give the most vivid picture of daily politics in any ancient society.",
      "He brought Greek philosophy into Latin, coining words such as qualitas (quality) and humanitas."
    ]},
    {k:"people", h:"His people", ps:[
      "Titus Pomponius Atticus, his closest friend, to whom he wrote hundreds of letters.",
      "Terentia, his wife for 30 years, and Tullia, his beloved daughter.",
      "Tiro, his enslaved secretary, later freed, who is credited with inventing a shorthand system and with helping to publish his letters.",
      "Pompey and Julius Caesar, the great men he tried to steer.",
      "Mark Antony, his final enemy, and Octavian, who let him die."
    ]},
    {k:"world", h:"The world around him", ps:[
      "The Roman Republic was breaking down under ambitious generals, mob violence and civil war.",
      "As a 'new man' (novus homo), the first of his family in the Senate, he was always somewhat looked down on by the old aristocracy.",
      "In his lifetime Rome annexed Syria and conquered Gaul. Egypt stayed independent until 30 BCE, after his death."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "His Latin became the model of classical prose. Renaissance humanists such as Petrarch, who rediscovered his letters to Atticus in 1345, revered him.",
      "His ideas on natural law, duty and the republic influenced thinkers from Augustine to John Locke and the American founders.",
      "His name is still a byword for eloquence."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"His name means 'chickpea'.", lab:"verified", t:"Plutarch says an ancestor had a cleft in his nose like a chickpea (cicer). Friends urged him to change it; he said he would make it famous."},
      {c:"He was a firm, brave hero of the republic.", lab:"disputed", t:"He was brave at the end, but his letters show him vain, hesitant and changing sides. Historians judge him very differently."},
      {c:"The executions of 63 BCE were legal.", lab:"disputed", t:"The Senate passed an emergency decree and debated the case, but Roman citizens had a right of appeal, which was denied. This was the charge that sent him into exile."},
      {c:"Fulvia stabbed his tongue with a hairpin.", lab:"tradition", t:"Cassius Dio, writing over 200 years later, says Antony's wife did this to his severed head. It may be embellishment."},
      {c:"He invented 'Lorem ipsum'.", lab:"myth", t:"Lorem ipsum is scrambled text from his On the Ends of Good and Evil, made by later printers. He wrote the original, not the gibberish."},
      {c:"He was a lifelong enemy of Caesar.", lab:"myth", t:"They were on friendly terms for long periods, exchanged letters and admired each other's writing. Cicero was not part of the plot to kill Caesar, though he welcomed it."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Cicero, Orations, translated by C. D. Yonge (1856), public domain"},
      {n:"Cicero, Letters to Atticus and others, translated by Evelyn S. Shuckburgh (1899 to 1900), public domain"},
      {n:"Cicero, On Duties, translated by Walter Miller (1913), public domain in the US"},
      {n:"Plutarch, Life of Cicero, translated by John Dryden and revised by A. H. Clough, public domain"},
      {n:"Further reading: Anthony Everitt, Cicero: The Life and Times of Rome's Greatest Politician (2001)"}
    ]}
  ]
},

"sima-qian": {
  hero: "",
  kw: ["Shiji","Records of the Grand Historian","Han dynasty","Emperor Wu","Grand Historian","Sima Tan","Li Ling","castration","letter to Ren An","biographies","annals","Confucius","First Emperor","Xiongnu","historiography","Chang'an"],
  lede: "The father of Chinese history, who chose castration rather than death so he could finish his father's great book, and wrote the Records of the Grand Historian: some 2,500 years in 130 chapters, told through the lives of emperors, rebels, assassins and merchants.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Sima Qian was born around 145 BCE (some say 135 BCE) near Longmen, in today's Shaanxi province, China.",
      "He succeeded his father Sima Tan as Grand Historian (taishi ling) at the court of Emperor Wu of the Han dynasty, an office in charge of astronomy, the calendar and records.",
      "In 99 BCE he defended a defeated general and was sentenced to death. He accepted castration instead and spent his remaining years finishing the Shiji. He probably died around 86 BCE."
    ]},
    {k:"early", h:"Early life", ps:[
      "He wrote that at ten he could read texts in the old script, and that he studied with leading Confucian scholars.",
      {t:"At about 20 he travelled across China, visiting places linked to the legendary emperor Yu, to Confucius, and to the founders of the Han, collecting stories and seeing the land for himself.", lab:"verified", why:"He describes these journeys in his autobiographical postface to the Shiji."},
      "He then joined the court as a gentleman attendant and went on missions to the south-west."
    ]},
    {k:"turns", h:"Turning points", ps:[
      {t:"His father's charge, 110 BCE. Sima Tan, dying, wept and made his son promise to complete the history he had begun. Sima Qian became Grand Historian in 108 BCE.", lab:"verified", why:"Described by Sima Qian himself in the postface."},
      "The calendar, 104 BCE. He helped reform the Han calendar, the Taichu calendar.",
      {t:"The Li Ling affair, 99 BCE. The general Li Ling surrendered to the Xiongnu after a desperate fight against huge odds. When Sima Qian spoke in his defence, the furious emperor had him charged with deceiving the throne. Unable to pay to escape punishment, he chose castration over death.", lab:"verified", why:"From his own letter to Ren An and the History of the Han, written nearly two centuries later."},
      "Finishing the book. He was later made palace secretary (zhongshu ling), close to the emperor, and continued writing.",
      {t:"The letter to Ren An, about 93 or 91 BCE. In a famous letter to a condemned friend, he explained that he endured shame because death would have left his work unfinished, and that a man's death can be 'heavier than Mount Tai or lighter than a feather'.", lab:"likely", why:"The letter is preserved in the History of the Han. Its date and some details are debated."}
    ]},
    {k:"works", h:"The work", ps:[
      "The Shiji (Records of the Grand Historian): 130 chapters and about 526,000 characters, covering Chinese history from the legendary Yellow Emperor to his own time.",
      "It is organised in five parts: basic annals of rulers, tables, treatises on topics such as music, rivers and economics, hereditary houses of noble families, and 70 'arrayed traditions', mostly biographies.",
      "The biographies include not only kings and generals but assassins, wandering knights, jesters, merchants and foreign peoples like the Xiongnu.",
      "It gives our main account of the First Emperor of Qin and of the rise of the Han."
    ]},
    {k:"people", h:"His people", ps:[
      "Sima Tan (died 110 BCE), his father, who began the history.",
      "Emperor Wu of Han (reigned 141 to 87 BCE), his ruler and punisher.",
      "Li Ling, the general he defended.",
      "Ren An, the friend to whom he wrote his famous letter.",
      "His grandson Yang Yun, who helped make the Shiji public."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Emperor Wu's reign was one of the most powerful in Chinese history. He made Confucianism the official philosophy, fought the Xiongnu nomads, and sent Zhang Qian west, opening routes that became the Silk Road.",
      "In Rome, the Gracchi brothers' reforms and Marius's career were happening at the same time.",
      "History-writing in China before him consisted mostly of court chronicles."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "The Shiji is the first of China's 24 official dynastic histories and the model for the rest.",
      "Its lively storytelling made it a source for plays, novels and idioms that are still used in China.",
      "He is often compared to Herodotus as a 'father of history'."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"Everything in the Shiji is reliable history.", lab:"myth", t:"He used oral tales, legends and earlier texts, and sometimes reports speeches no one could have recorded. He also noted where his sources disagreed."},
      {c:"He wrote the Shiji alone.", lab:"disputed", t:"His father began it, and some chapters were lost and later filled in by others, such as Chu Shaosun."},
      {c:"He hated Emperor Wu and wrote to attack him.", lab:"disputed", t:"He criticised Wu's wars and superstition in subtle ways, but scholars debate how far the book is a protest."},
      {c:"His birth year is certain.", lab:"myth", t:"Commentators give 145 or 135 BCE, and the question is still argued."},
      {c:"He was a Confucian.", lab:"disputed", t:"He admired Confucius deeply, but also praised Daoist ideas and people Confucians disapproved of, like merchants and knights-errant."},
      {c:"The Shiji was published in his lifetime.", lab:"myth", t:"He hid one copy and kept one in the capital, and it was made public by his grandson after his death."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Sima Qian, Shiji, original classical Chinese text, Chinese Text Project (public domain)", u:"https://ctext.org/shiji"},
      {n:"Sima Qian, Letter to Ren An, in the History of the Han (Hanshu), public domain"},
      {n:"Herbert A. Giles, A History of Chinese Literature (1901), public domain"},
      {n:"Édouard Chavannes, Les Mémoires historiques de Se-ma Ts'ien (1895 to 1905, French), public domain"},
      {n:"Further reading: Burton Watson, Ssu-ma Ch'ien: Grand Historian of China (1958)"}
    ]}
  ]
},

"harun-al-rashid": {
  hero: "",
  kw: ["Abbasid","caliph","Baghdad","Round City","Arabian Nights","Thousand and One Nights","Barmakids","Ja'far","Zubaida","Charlemagne","elephant","Abul-Abbas","water clock","Byzantium","Nikephoros","Raqqa","House of Wisdom","al-Amin","al-Ma'mun","Islamic Golden Age"],
  lede: "The caliph of Baghdad at the height of its glory, remembered from The Thousand and One Nights wandering his city in disguise. The real Harun ruled a vast empire, fought Byzantium, sent an elephant to Charlemagne, and destroyed the family of ministers who had raised him.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Harun al-Rashid was born around 763 or 766, probably in Rayy, near today's Tehran, a son of the Abbasid caliph al-Mahdi and al-Khayzuran, a former enslaved woman from Yemen who became very powerful.",
      "He became caliph in 786, ruling an empire from North Africa to Central Asia. His reign is often seen as the high point of the Abbasid caliphate.",
      "He died on 24 March 809 at Tus, in Khorasan, on campaign against a rebellion. Civil war between his sons followed."
    ]},
    {k:"early", h:"Early life", ps:[
      "He was raised by Yahya ibn Khalid, of the Barmakid family, a Persian Buddhist-descended family of administrators from Balkh, whom Harun called 'father'.",
      {t:"As a young prince he led expeditions against the Byzantine Empire, reaching the Bosporus in 782. His father gave him the title al-Rashid, 'the rightly guided'.", lab:"verified", why:"Recorded by the historian al-Tabari and in Byzantine chronicles, which describe the tribute the Empress Irene agreed to pay."},
      "His elder brother al-Hadi became caliph in 785 and tried to remove Harun from the succession, but died suddenly in 786."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Caliph, 786. He made Yahya the Barmakid his chief minister, and Yahya's sons Ja'far and al-Fadl held great power. Their rule brought efficient government and patronage of learning.",
      "Pilgrimage and war. He made the pilgrimage to Mecca many times and led or sent campaigns against Byzantium almost every year.",
      {t:"Charlemagne, 797 to 802. He exchanged embassies with Charlemagne. His gifts included an elephant named Abul-Abbas, which reached Aachen in 802, and later, according to Frankish annals, a remarkable water clock with mechanical horsemen.", lab:"verified", why:"Recorded in the Royal Frankish Annals and Einhard. Arabic sources do not mention the embassies."},
      {t:"The fall of the Barmakids, 803. Suddenly Harun had Ja'far executed and the rest of the family imprisoned and their wealth seized. Why is unknown.", lab:"disputed", why:"Later stories blame a secret marriage between Ja'far and Harun's sister Abbasa, but historians think Harun more likely resented their power and wealth."},
      "Raqqa. From 796 he lived much of the time at Raqqa on the Euphrates, closer to the Byzantine frontier, rather than in Baghdad.",
      "Nikephoros, 803 to 806. When the Byzantine emperor Nikephoros refused to pay tribute, Harun invaded Anatolia with a large army and forced him to pay again.",
      "Succession and death. He divided the empire between his sons al-Amin and al-Ma'mun and had the agreement hung in the Kaaba. He died at Tus in 809, and civil war broke out between the brothers in 811."
    ]},
    {k:"works", h:"What he left", ps:[
      "Baghdad at its peak: perhaps the largest city in the world, a centre of trade, scholarship, poetry and music.",
      "Patronage of scholars, poets such as Abu Nuwas, and musicians such as Ibrahim al-Mawsili.",
      "The beginnings of the translation of Greek, Persian and Indian works into Arabic, which flourished under his son al-Ma'mun at the House of Wisdom.",
      "Hospitals, mosques and wells along the pilgrim road to Mecca, many built by his wife Zubaida."
    ]},
    {k:"people", h:"His people", ps:[
      "Al-Khayzuran (died 789), his mother, a powerful political figure.",
      "Zubaida bint Ja'far (died 831), his wife, famous for her wealth and charity, including the 'Zubaida trail' of wells to Mecca.",
      "Yahya and Ja'far the Barmakids, his ministers.",
      "Abu Nuwas, the brilliant, scandalous poet of his court.",
      "Charlemagne, with whom he exchanged gifts."
    ]},
    {k:"world", h:"The world around him", ps:[
      "The Abbasid caliphate had overthrown the Umayyads in 750 and founded Baghdad in 762. It drew on Persian traditions of government.",
      "In the west, an Umayyad emir ruled Spain from Córdoba, independent of Baghdad.",
      "Paper-making, learned from China, spread through the empire; the first paper mill in Baghdad is said to date from his reign."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "The Thousand and One Nights turned him into a legendary figure of fairy-tale splendour and justice.",
      "His reign is remembered as the start of the Islamic Golden Age of science and learning.",
      "His grave lies within the shrine of Imam Reza in Mashhad, Iran. The imam was buried next to him in 818."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He walked Baghdad at night in disguise to see how his people lived.", lab:"tradition", t:"This is a favourite story in The Thousand and One Nights. No early historian reports it."},
      {c:"The Thousand and One Nights was written in his time.", lab:"myth", t:"The collection grew over centuries from Persian, Indian and Arab tales. Many stories set in his court were added long after."},
      {c:"He sent Charlemagne the keys of the Holy Sepulchre.", lab:"disputed", t:"Frankish sources say the Patriarch of Jerusalem sent them. Whether Harun was involved is unclear."},
      {c:"He was a gentle, wise ruler.", lab:"disputed", t:"He was pious and generous to scholars, but could be ruthless, as the Barmakids learned."},
      {c:"He founded the House of Wisdom.", lab:"disputed", t:"A palace library existed under him, but the House of Wisdom as a great centre of translation is linked mainly to his son al-Ma'mun."},
      {c:"The water clock he sent amazed the Franks because they had never seen a clock.", lab:"myth", t:"The Franks had sundials and water clocks. It was the mechanical show of figures and bells that impressed them."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Al-Tabari, History of the Prophets and Kings (about 915), public domain in the original"},
      {n:"Royal Frankish Annals (entries for 801, 802 and 807), public domain translations"},
      {n:"Einhard, Life of Charlemagne, chapter 16, in Early Lives of Charlemagne, translated by A. J. Grant, Project Gutenberg (public domain)", u:"https://www.gutenberg.org/ebooks/48870"},
      {n:"The Book of the Thousand Nights and a Night, translated by Richard Burton (1885), public domain"},
      {n:"Further reading: Hugh Kennedy, When Baghdad Ruled the Muslim World (2005)"}
    ]}
  ]
},

"su-shi": {
  hero: "",
  kw: ["Su Dongpo","Song dynasty","Meishan","Sichuan","Wang Anshi","New Policies","Crow Terrace","poetry trial","Huangzhou","Red Cliff","Hangzhou","Su Causeway","West Lake","Dongpo pork","Hainan","calligraphy","ci","Su Zhe","Su Xun"],
  lede: "A brilliant Song-dynasty official, poet, painter, calligrapher and cook, exiled three times for speaking his mind, who turned every banishment into poems about moonlight, wine and friendship. Chinese readers still love him as Su Dongpo.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Su Shi was born on 8 January 1037 in Meishan, Sichuan, into a literary family. His father Su Xun and brother Su Zhe were also famous writers.",
      "He passed the highest civil service exam in 1057, placed near the top, and served in posts across China. His opposition to the reformer Wang Anshi's New Policies got him tried and exiled.",
      "Recalled, exiled again and sent as far as Hainan Island, he died in Changzhou on 24 August 1101 while returning from his last exile."
    ]},
    {k:"early", h:"Early life", ps:[
      "His mother, Cheng, taught him at home; his father travelled to study. Su Shi read the classics and histories from a young age.",
      {t:"In 1057 he and his brother passed the jinshi exam. The examiner Ouyang Xiu, the leading writer of the age, was so struck by his essay that he said he must step aside to let this young man rise.", lab:"likely", why:"Ouyang Xiu's remark is reported in Song-dynasty sources and in letters, though wording varies."},
      "His mother died that same year, and he went home for mourning. His first wife, Wang Fu, died in 1065; ten years later he wrote a famous poem about dreaming of her."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "The New Policies, 1069 onwards. The chief minister Wang Anshi began sweeping reforms of taxes, loans and the army. Su Shi wrote against them and asked for posts away from the capital, serving in Hangzhou, Mizhou and Xuzhou.",
      {t:"The Crow Terrace trial, 1079. Officials accused him of mocking the emperor in his poems. He was arrested, held in the Censorate (nicknamed the Crow Terrace) for over 100 days, and expected to die. He was spared and exiled to Huangzhou.", lab:"verified", why:"Records of the case, including the poems used as evidence, survive."},
      "Huangzhou, 1080 to 1084. Poor, he farmed a plot on an eastern slope and took the name Dongpo, 'Eastern Slope'. There he wrote the two Prose Poems on the Red Cliff and the song 'Remembering the Past at Red Cliff'.",
      "Return and Hangzhou, 1085 to 1091. When the reformers fell, he was recalled and promoted, but he also criticised the anti-reformers for undoing good laws. As governor of Hangzhou he dredged West Lake and built the long causeway still called the Su Causeway.",
      "Last exiles, 1094 to 1100. When the reformers returned, he was exiled to Huizhou in the far south and then to Hainan Island, the edge of the empire. There he taught local students.",
      "Death, 1101. Pardoned by a new emperor, he started north but fell ill and died in Changzhou."
    ]},
    {k:"works", h:"The work", ps:[
      "About 2,700 poems and 300 ci (song lyrics), including 'Prelude to Water Music' ('When will the moon be clear and bright?'), written for his brother at the Mid-Autumn Festival.",
      "The two Red Cliff prose poems (1082), meditations on time and nature written during his exile.",
      "Essays, letters and memorials to the throne.",
      "Calligraphy, such as the Cold Food Observance scroll, and ink paintings of bamboo and rocks. He argued that painting should express the artist's mind, not just copy appearance."
    ]},
    {k:"people", h:"His people", ps:[
      "Su Zhe (1039 to 1112), his brother and lifelong correspondent.",
      "Su Xun (1009 to 1066), his father, an essayist.",
      "Wang Anshi (1021 to 1086), the reformer he opposed, with whom he later had a friendly meeting.",
      "Wang Zhaoyun, his concubine and companion, who followed him into exile and died in Huizhou.",
      "Huang Tingjian and Mi Fu, poet and calligrapher friends."
    ]},
    {k:"world", h:"The world around him", ps:[
      "The Northern Song was rich, urban and inventive: printing, paper money and the compass spread, and scholar-officials chosen by exam ran the state.",
      "Court factions over reform fought bitterly, and losers were exiled.",
      "To the north the Khitan Liao and the Tangut Western Xia were powerful rivals."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "He is counted among the 'Eight Great Prose Masters of the Tang and Song' and as one of the greatest Chinese poets.",
      "His calm, humorous acceptance of hardship made him a model for later generations.",
      "Dongpo pork, a slow-braised pork belly dish, is named after him, and the Su Causeway is part of Hangzhou's West Lake World Heritage Site."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He invented Dongpo pork.", lab:"tradition", t:"He wrote a light poem about cooking pork slowly with little water in Huangzhou. The dish's link to him is old tradition."},
      {c:"The Red Cliff he wrote about was the site of the famous battle of 208.", lab:"myth", t:"Most scholars believe the battle was elsewhere. He knew this and wrote with a hint of doubt."},
      {c:"He was a total opponent of reform.", lab:"myth", t:"He opposed parts of Wang Anshi's New Policies, but later defended some of them against the conservatives."},
      {c:"He was nearly executed for his poems.", lab:"verified", t:"In 1079 he expected death and wrote farewell poems to his brother from prison."},
      {c:"He disliked exile.", lab:"disputed", t:"He suffered poverty and illness, but his writings from exile are famous for their good humour and peace of mind."},
      {c:"He was a Buddhist monk.", lab:"myth", t:"He was a Confucian official who also loved Buddhist and Daoist ideas and had monk friends."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Su Shi, collected poems and prose, original classical Chinese texts (public domain)"},
      {n:"Herbert A. Giles, Gems of Chinese Literature (1922), public domain, with prose by Su Shi"},
      {n:"History of Song (Songshi), biography of Su Shi (1345), public domain"},
      {n:"National Palace Museum, Taipei: Cold Food Observance calligraphy scroll"},
      {n:"Further reading: Ronald C. Egan, Word, Image, and Deed in the Life of Su Shi (1994)"}
    ]}
  ]
},
"magellan": {
  hero: "",
  kw: ["Fernão de Magalhães","Fernando de Magallanes","Portugal","Spain","Charles V","Spice Islands","Moluccas","Strait of Magellan","Pacific","Patagonia","mutiny","San Julián","Trinidad","Victoria","Elcano","Philippines","Cebu","Mactan","Lapulapu","Pigafetta","circumnavigation"],
  lede: "A Portuguese captain who, refused by his own king, sailed for Spain to reach the Spice Islands by going west, found the strait at the tip of South America, crossed the vast Pacific, and was killed in the Philippines. Eighteen of his men made it home, the first to sail around the world.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Ferdinand Magellan (Fernão de Magalhães in Portuguese) was born around 1480 in northern Portugal into a family of minor nobility.",
      "After years serving Portugal in India and Southeast Asia, he quarrelled with King Manuel I and offered his plan to King Charles I of Spain: to reach the Spice Islands (the Moluccas) by sailing west.",
      "He left Spain in September 1519 with five ships and about 260 men, found the strait now named after him, and crossed the Pacific. He was killed in battle on Mactan in the Philippines on 27 April 1521. One ship, the Victoria, returned to Spain in September 1522."
    ]},
    {k:"early", h:"Early life", ps:[
      "He served as a page at the Portuguese royal court in Lisbon as a boy.",
      "In 1505 he sailed to India with the fleet of Francisco de Almeida and fought in battles at Kannur and Diu.",
      {t:"He took part in the Portuguese capture of Malacca in 1511. There he acquired an enslaved man from Sumatra, whom he named Enrique, who would later serve as his interpreter.", lab:"likely", why:"From Magellan's will and Pigafetta's account. Enrique's origins are debated."},
      "Back in Portugal, he was wounded in the knee in Morocco in 1513 and walked with a limp. Accused of trading with the enemy, he was cleared, but King Manuel refused him a raise and told him he could serve whom he liked."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Spain, 1517 to 1519. He moved to Seville, married Beatriz Barbosa, and with the astronomer Rui Faleiro won the backing of the young King Charles. The Spanish believed the Moluccas might lie in their half of the world under the Treaty of Tordesillas.",
      "Departure, 20 September 1519. Five ships, the Trinidad, San Antonio, Concepción, Victoria and Santiago, left Sanlúcar de Barrameda.",
      {t:"Mutiny, April 1520. While wintering at San Julián in Patagonia, three Spanish captains rebelled. Magellan crushed the mutiny, had one captain killed, executed another, and later marooned a third with a priest.", lab:"verified", why:"Recorded by Antonio Pigafetta and in the later Spanish inquiry."},
      "The strait, October to November 1520. The Santiago had been wrecked scouting the coast in May, and the San Antonio deserted in the strait and sailed home. The three remaining ships spent 38 days threading the strait at the southern tip of South America.",
      {t:"The Pacific, November 1520 to March 1521. He named the calm ocean the Pacific. The crossing took over three months. Pigafetta says they ate biscuit powder full of worms, sawdust, rats and leather from the yards, and that many died of scurvy.", lab:"verified", why:"Pigafetta's eyewitness journal."},
      {t:"The Philippines and Mactan, March to April 1521. At Cebu, the ruler Humabon and many of his people were baptised. Magellan then attacked Lapulapu, chief of nearby Mactan, who refused to submit. With about 50 men against a far larger force, he was killed in the shallows.", lab:"verified", why:"Pigafetta was in the battle and was wounded."},
      "Home, 1522. After more losses, the Victoria, captained by Juan Sebastián Elcano, loaded cloves in the Moluccas and sailed home across the Indian Ocean. It reached Spain on 6 September 1522 with 18 men."
    ]},
    {k:"works", h:"What the voyage achieved", ps:[
      "The first circumnavigation of the earth, completed by his crew.",
      "Proof that the Pacific was enormous and that the Americas were a separate continent between Europe and Asia.",
      "The discovery of a 'lost' day: the crew found their calendar was one day behind Spain's, because they had sailed west around the world.",
      "Antonio Pigafetta's journal, the main source, with early word lists of Malay, Cebuano and other languages."
    ]},
    {k:"people", h:"His people", ps:[
      "Antonio Pigafetta (about 1491 to 1531), an Italian scholar who sailed as a passenger and wrote the voyage's history.",
      "Juan Sebastián Elcano (about 1486 to 1526), a Basque officer who had joined the mutiny, was pardoned, and led the Victoria home.",
      "Enrique of Malacca, his interpreter.",
      "Lapulapu, chief of Mactan, now honoured as the first Filipino to resist European rule.",
      "Beatriz Barbosa, his wife, who died with their son before news of the voyage reached Spain."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Portugal and Spain were racing for the spice trade. The Treaty of Tordesillas (1494) had split the newly found lands between them, but no one knew where the line fell on the far side of the globe.",
      "Cloves, nutmeg and mace grew only in a few islands of today's Indonesia and were worth fortunes in Europe.",
      "Cortés was conquering the Aztec Empire in Mexico in the same years."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "The Strait of Magellan and the Magellanic Clouds, two galaxies seen from the southern hemisphere, bear his name.",
      "Spain later colonised the Philippines, beginning in 1565.",
      "In the Philippines, Lapulapu is a national hero; the 500th anniversary in 2021 was marked as a victory of resistance."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"Magellan sailed around the world.", lab:"myth", t:"He died in the Philippines, halfway. His crew completed the voyage. He had, however, been east as far as Malacca earlier, so he had covered most of the globe's longitude in his life."},
      {c:"Enrique was the first person to go around the world.", lab:"disputed", t:"If he came from the Philippine region, he would have closed the circle when he reached Cebu. His origins are uncertain, and he vanished after Magellan's death."},
      {c:"Lapulapu personally killed Magellan.", lab:"tradition", t:"Pigafetta does not say who struck the fatal blow. Filipino tradition credits Lapulapu."},
      {c:"Magellan proved the earth was round.", lab:"myth", t:"Educated people already knew that. The voyage showed its true size and that the oceans connect."},
      {c:"The voyage was a financial disaster.", lab:"myth", t:"Despite losing four ships and most of the crew, the cloves the Victoria carried home roughly covered the cost of the whole fleet, with a small profit."},
      {c:"Patagonia means land of giants.", lab:"disputed", t:"Pigafetta described very tall people there and Magellan called them 'Patagones'. The origin of the name is debated."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Antonio Pigafetta, Magellan's Voyage Around the World, translated by James Alexander Robertson (1906), public domain"},
      {n:"The First Voyage Round the World by Magellan, translated by Lord Stanley of Alderley (Hakluyt Society, 1874), public domain"},
      {n:"Maximilianus Transylvanus, De Moluccis Insulis (1523), public domain"},
      {n:"Further reading: Laurence Bergreen, Over the Edge of the World (2003)"}
    ]}
  ]
},

"raphael": {
  hero: "",
  kw: ["Raffaello Sanzio","Urbino","Perugino","Florence","Rome","Pope Julius II","Leo X","Vatican","Stanze","School of Athens","Sistine Madonna","Madonna","cherubs","tapestries","Sistine Chapel","Fornarina","St Peter's","architect","Pantheon","High Renaissance"],
  lede: "The youngest of the three giants of the High Renaissance, a painter of serene Madonnas and of the School of Athens, who ran a huge workshop in papal Rome, was put in charge of building St Peter's, and died at 37.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Raffaello Sanzio (or Santi) was born in Urbino, Italy, in 1483, probably on 6 April. His father, Giovanni Santi, was court painter to the Duke of Urbino.",
      "He trained in central Italy, studied the work of Leonardo and Michelangelo in Florence, and in 1508 was called to Rome by Pope Julius II to paint rooms in the Vatican.",
      "In Rome he became the most fashionable artist of his day, painter and architect to two popes. He died on 6 April 1520, aged 37, and is buried in the Pantheon."
    ]},
    {k:"early", h:"Early life", ps:[
      "Urbino's court was one of the most refined in Italy. His father wrote a long poem about artists and taught him the basics.",
      "His mother died when he was eight and his father when he was 11.",
      {t:"He probably worked with the painter Pietro Perugino in Perugia. His early style is so close to Perugino's that some of their works were long confused.", lab:"likely", why:"Vasari says he was Perugino's pupil. Modern scholars think he may have been more a collaborator than a pupil."}
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Florence, 1504 to 1508. He studied Leonardo's pyramid compositions and soft shading, and Michelangelo's muscular figures. He painted a series of Madonnas, such as the Madonna of the Meadow.",
      {t:"The Vatican rooms, 1508 to 1520. Julius II gave him the decoration of his private apartments, the Stanze. In the Stanza della Segnatura he painted the School of Athens, with Plato and Aristotle at its centre.", lab:"verified", why:"Payment records and the frescoes themselves, dated by inscriptions."},
      "Rival to Michelangelo. While Michelangelo painted the Sistine ceiling nearby, Raphael's star rose. Michelangelo later complained that 'all he had of art he got from me'.",
      "Leo X, 1513 to 1520. Under the Medici pope he ran a large workshop, designed tapestries for the Sistine Chapel, painted portraits, and decorated villas.",
      "Architect of St Peter's, 1514. After Bramante's death he was made chief architect of the new St Peter's Basilica. He also oversaw ancient Roman ruins and proposed a map of ancient Rome.",
      {t:"Death, 1520. He died after a short fever on Good Friday, 6 April, his birthday. His last great painting, the Transfiguration, was placed at the head of his bier.", lab:"likely", why:"Vasari blamed excessive lovemaking; letters of the time describe a fever. The cause is unknown."}
    ]},
    {k:"works", h:"The work", ps:[
      "The School of Athens (1509 to 1511): ancient philosophers gathered in a great hall; Plato may have the face of Leonardo.",
      "The Sistine Madonna (about 1512 to 1513), with two dreamy cherubs at the bottom, now in Dresden.",
      "Portraits of Pope Julius II, Baldassare Castiglione and Leo X.",
      "Cartoons for the Sistine Chapel tapestries (1515 to 1516), seven of which are in the Victoria and Albert Museum, London.",
      "The Transfiguration (1516 to 1520), Vatican Museums."
    ]},
    {k:"people", h:"His people", ps:[
      "Pope Julius II (reigned 1503 to 1513) and Pope Leo X (reigned 1513 to 1521), his patrons.",
      "Baldassare Castiglione, his friend, author of The Book of the Courtier.",
      "Giulio Romano and Giovan Francesco Penni, assistants who inherited his workshop.",
      "Maria Bibbiena, his fiancée, niece of a cardinal; they never married.",
      "Margherita Luti, said to be his lover 'La Fornarina', the baker's daughter."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Rome under Julius II and Leo X was being rebuilt as a capital of art and power.",
      "Leonardo and Michelangelo were his great elders; with them he defines the High Renaissance.",
      "Martin Luther posted his theses in 1517, partly in protest at indulgences sold to pay for St Peter's."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "For 300 years academies taught his work as the model of perfect painting.",
      "The 19th-century Pre-Raphaelite Brotherhood took its name from rejecting that academic ideal.",
      "His tomb in the Pantheon bears an epitaph by Pietro Bembo saying that Nature feared to be outdone while he lived."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He died from too much love-making.", lab:"tradition", t:"Vasari says so, but he wrote 30 years later. A fever, perhaps malaria or pneumonia, is more likely."},
      {c:"La Fornarina was his secret wife.", lab:"tradition", t:"A romantic tradition. Some studies of the painting suggest a ring was painted over, but there is no documentary evidence of marriage."},
      {c:"Michelangelo and Raphael were bitter enemies.", lab:"disputed", t:"They were rivals, and Michelangelo resented him. Raphael admired Michelangelo and is thought to have painted him into the School of Athens as the brooding philosopher in the foreground."},
      {c:"Raphael painted all of his works himself.", lab:"myth", t:"His large workshop did much of the painting from his designs, especially after 1514."},
      {c:"He painted the Sistine Chapel.", lab:"myth", t:"Michelangelo painted the ceiling and the Last Judgement. Raphael designed tapestries hung in the chapel."},
      {c:"The cherubs from the Sistine Madonna are a separate painting.", lab:"myth", t:"They are a small detail at the bottom of a much larger altarpiece."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Giorgio Vasari, Lives of the Most Eminent Painters, Sculptors and Architects: Raphael (1550 and 1568), translated by Gaston du C. de Vere (1912 to 1915), public domain"},
      {n:"Vatican Museums: Raphael's Rooms", u:"https://www.museivaticani.va/"},
      {n:"Victoria and Albert Museum: the Raphael Cartoons"},
      {n:"National Gallery of Art, Washington: Raphael works, open access images"},
      {n:"Further reading: Roger Jones and Nicholas Penny, Raphael (1983)"}
    ]}
  ]
},

"henry-viii": {
  hero: "",
  kw: ["Tudor","six wives","Catherine of Aragon","Anne Boleyn","Jane Seymour","Anne of Cleves","Catherine Howard","Catherine Parr","Church of England","Reformation","Act of Supremacy","dissolution of the monasteries","Thomas More","Thomas Cromwell","Wolsey","Mary Rose","Field of the Cloth of Gold","Holbein","Edward VI","Elizabeth I"],
  lede: "A golden, sporty young king who became a bloated, dangerous old one. He married six times in search of a son, broke England from the Pope, closed the monasteries, and had two of his wives beheaded.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Henry Tudor was born at Greenwich Palace on 28 June 1491, the second son of King Henry VII and Elizabeth of York.",
      "He became heir when his brother Arthur died in 1502 and king in 1509, aged 17. Desperate for a male heir, he broke with the Pope to end his first marriage and made himself head of the Church of England in 1534.",
      "He married six times, executed two wives and many ministers and opponents, and died at the Palace of Whitehall on 28 January 1547. His three children, Edward VI, Mary I and Elizabeth I, all reigned after him."
    ]},
    {k:"early", h:"Early life", ps:[
      "As a younger son he received a broad education in Latin, French, theology and music. He wrote songs and played the lute.",
      "After Arthur's death he was betrothed to Arthur's widow, Catherine of Aragon, daughter of the Spanish monarchs Ferdinand and Isabella, to keep the Spanish alliance.",
      "As a young king he was tall, athletic and loved jousting, hunting and tennis. Visitors called him the handsomest prince in Christendom."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Early reign, 1509 to 1527. He married Catherine weeks after becoming king. He fought France, met the French king at the lavish Field of the Cloth of Gold (1520), and left government largely to Cardinal Thomas Wolsey. In 1521 the Pope named him Defender of the Faith for a book attacking Martin Luther.",
      "The 'Great Matter', 1527 to 1533. Catherine had a daughter, Mary, but no surviving son. Henry, in love with Anne Boleyn, sought an annulment, arguing the marriage was invalid because Catherine had been his brother's wife. The Pope, under the control of Catherine's nephew Emperor Charles V, refused.",
      {t:"The break with Rome, 1533 to 1534. He married Anne secretly in January 1533. Archbishop Thomas Cranmer annulled the first marriage. The Act of Supremacy (1534) declared the king Supreme Head of the Church of England.", lab:"verified", why:"The acts of Parliament survive."},
      "Executions, 1535 to 1536. Sir Thomas More and Bishop John Fisher were beheaded for refusing to accept the king's supremacy. Anne Boleyn, who had a daughter, Elizabeth, but no son, was accused of adultery and treason and beheaded in May 1536.",
      "The monasteries, 1536 to 1541. Thomas Cromwell closed about 800 monasteries, convents and friaries, and the Crown took their lands and treasure. A great northern rising, the Pilgrimage of Grace, was crushed.",
      "A son, 1537. Jane Seymour gave birth to Edward but died 12 days later.",
      "Last marriages, 1540 to 1547. He married Anne of Cleves and had the marriage annulled within months, then executed his fifth wife Catherine Howard for adultery in 1542. His sixth wife, Catherine Parr, outlived him. Obese and with an ulcerated leg after a jousting fall in 1536, he died at 55."
    ]},
    {k:"works", h:"What he left", ps:[
      "The Church of England, separate from Rome.",
      "The Royal Navy, much enlarged; his warship the Mary Rose sank in 1545 and was raised in 1982.",
      "Palaces such as Hampton Court, which he took from Wolsey, and Nonsuch.",
      "The Act of Union with Wales (1536) and the title King of Ireland (1541).",
      "Portraits by Hans Holbein the Younger that fixed his image as a massive, commanding figure."
    ]},
    {k:"people", h:"His people", ps:[
      "His six wives: Catherine of Aragon, Anne Boleyn, Jane Seymour, Anne of Cleves, Catherine Howard and Catherine Parr.",
      "Thomas Wolsey (about 1473 to 1530), cardinal and chief minister, who fell for failing to get the annulment.",
      "Thomas Cromwell (about 1485 to 1540), minister who engineered the break with Rome, then was beheaded.",
      "Sir Thomas More (1478 to 1535), author of Utopia, lord chancellor and martyr.",
      "Thomas Cranmer, Archbishop of Canterbury."
    ]},
    {k:"world", h:"The world around him", ps:[
      "The Protestant Reformation was spreading across Europe from 1517.",
      "His great rivals were Francis I of France and Emperor Charles V.",
      "England had about 2.5 to 3 million people, far fewer than France or Spain."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "His break with Rome shaped English religion and politics for centuries.",
      "The dissolution of the monasteries transferred huge amounts of land to the Crown and then to the gentry.",
      "Children still learn his wives' fates with the rhyme 'Divorced, beheaded, died; divorced, beheaded, survived'."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"He wrote 'Greensleeves'.", lab:"myth", t:"The song first appears in 1580, decades after his death, and its style is Elizabethan."},
      {c:"He founded Protestantism in England.", lab:"disputed", t:"He broke with the Pope but kept much Catholic belief and burned Protestants as heretics. True Protestant reform came under his son Edward VI."},
      {c:"He was always fat.", lab:"myth", t:"He stayed athletic into his forties. He grew very heavy after his jousting accident in 1536."},
      {c:"He threw chicken bones over his shoulder at banquets.", lab:"myth", t:"A popular image from films. There is no evidence; Tudor court dining had strict manners."},
      {c:"He had syphilis.", lab:"myth", t:"There is no evidence from his treatment records. Other explanations of his ill-health, such as diabetes or leg ulcers, are proposed."},
      {c:"Anne of Cleves was ugly.", lab:"disputed", t:"Henry said he did not like her. Others found her pleasant-looking, and Holbein's portrait was thought a fair likeness."}
    ]},
    {k:"sources", h:"Sources", src:[
      {n:"Letters and Papers, Foreign and Domestic, Henry VIII, calendared state papers (1862 to 1932), British History Online (free to read)"},
      {n:"Edward Hall, Hall's Chronicle (1548), public domain"},
      {n:"A. F. Pollard, Henry VIII (1902), public domain"},
      {n:"Mary Rose Museum, Portsmouth", u:"https://maryrose.org/"},
      {n:"Further reading: J. J. Scarisbrick, Henry VIII (1968)"}
    ]}
  ]
},

"tokugawa-ieyasu": {
  hero: "",
  kw: ["shogun","Edo","Tokyo","Okazaki","Mikawa","hostage","Imagawa","Oda Nobunaga","Toyotomi Hideyoshi","Sekigahara","1600","Tokugawa shogunate","Osaka","Nikko","Toshogu","William Adams","daimyo","sakoku","cuckoo"],
  lede: "A boy raised as a hostage who waited his whole life for his turn, outlasted Japan's two great unifiers, won the battle of Sekigahara, and founded a family of shoguns that kept Japan at peace for two and a half centuries.",
  sections: [
    {k:"short", h:"In short", ps:[
      "Tokugawa Ieyasu was born on 31 January 1543 at Okazaki Castle in Mikawa province, the son of a minor warlord, Matsudaira Hirotada. His childhood name was Takechiyo.",
      "He allied with Oda Nobunaga, then served Toyotomi Hideyoshi, and after Hideyoshi's death won the battle of Sekigahara in 1600. In 1603 the emperor named him shogun.",
      "He ruled from Edo (today's Tokyo), destroyed the Toyotomi at Osaka in 1615, and died at Sunpu on 1 June 1616. His family ruled Japan until 1868."
    ]},
    {k:"early", h:"Early life", ps:[
      "Japan was in the Sengoku, 'Warring States', period, with rival lords fighting for land.",
      {t:"As a child he was sent as a hostage to the powerful Imagawa clan. On the way he was seized and held by the rival Oda clan for two years, then traded to the Imagawa at Sunpu, where he spent his youth.", lab:"verified", why:"Recorded in many Japanese chronicles, including the Tokugawa family's own histories."},
      "His father died in 1549, by some accounts killed by a retainer. Ieyasu grew up learning patience and the ways of a powerful court."
    ]},
    {k:"turns", h:"Turning points", ps:[
      "Freedom, 1560. When Oda Nobunaga killed the Imagawa leader at the battle of Okehazama, Ieyasu returned to Okazaki and soon allied with Nobunaga.",
      "A new name, 1567. He took the surname Tokugawa.",
      "Mikatagahara, 1573. He suffered a terrible defeat by the warlord Takeda Shingen. A later tradition says he had a portrait painted of himself looking defeated to remind him not to be rash.",
      {t:"His son's death, 1579. Under pressure from Nobunaga, who suspected a plot, Ieyasu had his wife executed and ordered his eldest son Nobuyasu to commit suicide.", lab:"likely", why:"The event is recorded, but its causes are debated and may have been political rivalry within the Tokugawa household."},
      "Under Hideyoshi, 1584 to 1598. After Nobunaga's murder in 1582, Ieyasu fought Hideyoshi to a draw, then accepted him as overlord. In 1590 Hideyoshi moved him to the Kanto plain, where he made the small fishing town of Edo his base.",
      {t:"Sekigahara, 21 October 1600. After Hideyoshi's death, Ieyasu led the eastern army against a western coalition loyal to Hideyoshi's young son. Key western lords switched sides during the battle, giving him a decisive victory.", lab:"verified", why:"Many accounts and letters from both sides survive."},
      "Shogun, 1603. The emperor appointed him shogun. In 1605 he handed the title to his son Hidetada but kept real power.",
      "Osaka, 1614 to 1615. He besieged Osaka Castle, the stronghold of Hideyoshi's son Toyotomi Hideyori. In 1615 the castle fell and Hideyori and his mother killed themselves. He died a year later."
    ]},
    {k:"works", h:"What he built", ps:[
      "The Tokugawa shogunate, which ruled Japan from 1603 to 1868.",
      "Edo, which grew into one of the largest cities in the world and became Tokyo.",
      "A system of control over the daimyo (regional lords), including laws for warrior households and later the rule that lords spend alternate years in Edo.",
      "The Tōshō-gū shrine at Nikkō, where he is honoured as a god, first built in 1617 under his son Hidetada and rebuilt in its present lavish form by his grandson Iemitsu in 1636."
    ]},
    {k:"people", h:"His people", ps:[
      "Oda Nobunaga (1534 to 1582), his ally, the first great unifier.",
      "Toyotomi Hideyoshi (1537 to 1598), the second unifier, whom he served.",
      "Tokugawa Hidetada (1579 to 1632), his son and the second shogun.",
      "William Adams, an English pilot who reached Japan on a battered Dutch ship in 1600, whom he made an adviser and samurai, the model for the hero of the novel Shōgun.",
      "Ishida Mitsunari, leader of the western army at Sekigahara, executed after the battle."
    ]},
    {k:"world", h:"The world around him", ps:[
      "Portuguese traders and Jesuit missionaries had brought guns and Christianity to Japan from the 1540s.",
      "He tolerated Christians at first but banned Christianity from 1612, and across Japan in 1614, fearing foreign influence.",
      "The Ming dynasty ruled China, and Hideyoshi's invasions of Korea (1592 to 1598) had failed."
    ]},
    {k:"legacy", h:"Legacy", ps:[
      "The 'Great Peace' of the Edo period (1603 to 1868) saw cities, trade, kabuki theatre and woodblock prints like Hokusai's flourish.",
      "Later shoguns restricted foreign contact severely from the 1630s, a policy later called sakoku.",
      "He is remembered for patience: a Japanese saying compares the three unifiers to men waiting for a cuckoo to sing."
    ]},
    {k:"myths", h:"Myths and facts", myths:[
      {c:"Nobunaga said 'If the cuckoo will not sing, kill it'; Hideyoshi, 'make it sing'; Ieyasu, 'wait for it to sing'.", lab:"tradition", t:"These verses were composed much later, in the Edo period, to sum up their characters."},
      {c:"He closed Japan to the world.", lab:"myth", t:"He encouraged foreign trade, including with the Dutch and English. The strict closure came under his grandson Iemitsu."},
      {c:"He died from eating tempura.", lab:"disputed", t:"He fell ill after eating sea bream fried in oil, according to an old account, but probably died of stomach cancer months later."},
      {c:"Sekigahara was won by battle skill alone.", lab:"myth", t:"Secret deals made beforehand, especially the betrayal by Kobayakawa Hideaki, decided it."},
      {c:"He was a samurai from a great family.", lab:"myth", t:"His family were minor lords. He later claimed descent from the famous Minamoto clan to qualify as shogun."},
      {c:"He had a scowling portrait painted after his defeat at Mikatagahara.", lab:"disputed", t:"A portrait of him grimacing survives in Nagoya, but recent research finds that the link to the battle appears only in the 20th century."}
    ]},
    {k:"sources", h:"Sources", src:[
            {n:"James Murdoch, A History of Japan, Vol. 2 (1903), public domain"},
      {n:"William Adams, letters from Japan (1611 to 1617), public domain"},
      {n:"Nikko Toshogu Shrine, official website (in Japanese)", u:"https://www.toshogu.jp/"},
      {n:"Further reading: A. L. Sadler, The Maker of Modern Japan: The Life of Tokugawa Ieyasu (1937)"},
      {n:"Further reading: Conrad Totman, Tokugawa Ieyasu: Shogun (1983)"}
    ]}
  ]
}
});
