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
}

});
