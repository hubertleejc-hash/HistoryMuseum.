/* Contemporaries: deep layer. Van Gogh's full story, Beethoven's story and fact sheet,
   cause-and-effect chains, curated quiz questions. Loaded after content.js.
   Labels: verified | likely | disputed | myth */
(function(H){

/* extra people, place and connections for the Van Gogh story */
H.countries.switzerland = {n:"Switzerland", blurb:"A small mountain country of several languages. Einstein worked out special relativity here while working in the patent office in Bern."};
H.events.forEach(e => { if (e.id === "relativity") e.c = "switzerland"; });
const ein = H.people.find(p => p.id === "einstein"); if (ein && !ein.c.includes("switzerland")) ein.c.push("switzerland");
H.people.push(
  {id:"theo-van-gogh", n:"Theo van Gogh", b:1857, d:1891, f:"art", c:["netherlands","france"], bio:"Vincent's younger brother, an art dealer in Paris. He sent Vincent money for ten years and kept his letters. He died six months after Vincent."},
  {id:"johanna-van-gogh-bonger", n:"Johanna van Gogh-Bonger", b:1862, d:1925, f:"writing", c:["netherlands"], bio:"Theo's wife. After both brothers died, she exhibited Vincent's paintings, published his letters in 1914 and did more than anyone to make him famous."}
);
H.connections.push(
  ["van-gogh","theo-van-gogh","family","Brothers. Vincent wrote him hundreds of letters, and Theo paid Vincent's way from 1880 until Vincent's death."],
  ["theo-van-gogh","johanna-van-gogh-bonger","partners","Married in Amsterdam in April 1889. Their son, born in January 1890, was named Vincent after his uncle."],
  ["van-gogh","johanna-van-gogh-bonger","family","His sister-in-law. They met when Vincent stayed with her and Theo in Paris in May 1890, and she visited him in Auvers that June."],
  ["gauguin","theo-van-gogh","worked","Theo sold Gauguin's paintings at the gallery he ran in Paris and paid for Gauguin to join Vincent in Arles in 1888."],
  ["theo-van-gogh","monet","worked","In 1888 Theo's gallery bought and showed ten of Monet's new paintings of Antibes."],
  ["monet","rodin","friends","They held a joint exhibition in Paris in 1889 and stayed friends."],
  ["monet","cezanne","friends","Both showed at the first Impressionist exhibition in 1874. Cezanne visited Monet at Giverny in 1894."],
  ["rodin","matisse","met","The young Matisse showed Rodin his drawings around 1899. Rodin was not impressed, and Matisse did not go back."],
  ["picasso","kahlo","met","Picasso admired Kahlo's work when she exhibited in Paris in 1939 and gave her a pair of earrings."],
  ["tchaikovsky","tolstoy","met","They met in Moscow in 1876. Tchaikovsky wrote that Tolstoy wept listening to the slow movement of his First String Quartet."],
  ["tchaikovsky","brahms","met","They met in Leipzig on New Year's Day 1888. They got on personally but disliked each other's music."],
  ["robert-schumann","mendelssohn","friends","Close friends in Leipzig in the 1830s and 1840s. Mendelssohn conducted the premiere of Schumann's First Symphony in 1841."],
  ["helen-keller","chaplin","met","Keller visited Chaplin's film studio in Hollywood in 1919, and they were photographed together."],
  ["newton","voltaire","influenced","Voltaire attended Newton's funeral in London in 1727 and later made his ideas popular in France."]
);
H.connLab = Object.assign(H.connLab || {}, {"rodin|matisse":["likely","Known from Matisse's own account years later."], "tchaikovsky|tolstoy":["verified","Tchaikovsky described the evening in his diary and letters."]});
H.works.forEach(w => {
  if (w.id === "starry-night") { w.t = "Painted in June 1889 at the asylum in Saint-Rémy. The view east from his bedroom window gave him the hills; the village and the big cypress are partly imagined. In a letter that autumn he seems to call it a failure."; }
  if (w.id === "war-and-peace") { w.t = "Follows Russian families through Napoleon's invasion of 1812. One of the longest famous novels ever written."; }
  if (w.id === "nutcracker") { w.t = "A Christmas ballet that was not a hit at first. Today it is one of the most performed ballets in the world."; }
  if (w.id === "great-wave") { w.t = "A woodblock print, so it was printed in large numbers and sold cheaply. Mount Fuji sits tiny under the wave. Prints like it inspired Van Gogh and Monet."; }
  if (w.id === "eroica") { w.lab = "likely"; w.why = "The tearing story comes from his pupil Ferdinand Ries. A surviving copy of the score shows Bonaparte's name scratched out so hard it left a hole."; }
});
H.works.push(
  {id:"potato-eaters", n:"The Potato Eaters", by:"van-gogh", y:1885, k:"painting", where:"Van Gogh Museum, Amsterdam", lab:"verified", t:"A dark painting of a peasant family eating by lamplight in Nuenen. Vincent thought it was his best work so far. His friend Anthon van Rappard criticised it harshly, and the friendship ended."},
  {id:"gachet", n:"Portrait of Dr Gachet", by:"van-gogh", y:1890, k:"painting", where:"Private collection", lab:"verified", t:"The doctor who looked after Vincent in Auvers in his last weeks. In 1990 one version sold for 82.5 million dollars, then the highest price ever paid for a painting."},
  {id:"red-vineyard", n:"The Red Vineyard", by:"van-gogh", y:1888, k:"painting", where:"Pushkin Museum, Moscow", lab:"verified", t:"Bought in 1890 by the Belgian painter Anna Boch for 400 francs. It is the one sale of a Van Gogh painting in his lifetime that is fully documented."}
);

/* ---------- stories with three reading levels ---------- */
H.stories = {
  "van-gogh": {
    t2: [
      "Vincent van Gogh was born in 1853 in a Dutch village, the son of a pastor. He tried being an art dealer, a teacher and a preacher, and it went badly each time. At 27 he decided to become an artist, with almost no training.",
      "His younger brother Theo, an art dealer in Paris, sent him money for the rest of his life. In ten years Vincent made about 860 paintings, most of them in his last five. In Paris he found bright color and Japanese prints. In the south of France he painted the Sunflowers, the Café Terrace and, from a hospital window, The Starry Night.",
      "He also lived with serious mental illness. In December 1888 he cut off his ear. In July 1890 he died of a gunshot wound, aged 37, having sold very little.",
      "He became famous because of someone most people have never heard of: Theo's widow, Johanna van Gogh-Bonger. Theo died six months after Vincent, and she spent the next 34 years showing Vincent's paintings and publishing his letters."
    ],
    t10: [
      {h:"False starts", p:"At 16 Vincent joined the art dealers Goupil and Co., working in The Hague, London and Paris. He was dismissed in 1876. He tried teaching in England, then preaching to coal miners in the Borinage in Belgium, where he gave away his own things and was let go again. In 1880, aged 27, he decided to become an artist."},
      {h:"Theo", p:"Theo, four years younger, had stayed in the art trade and done well. From 1880 he sent Vincent a monthly allowance, and Vincent sent back letters and drawings. More than 800 of Vincent's letters survive, most of them to Theo. They are why we know so much about what he thought."},
      {h:"Learning to paint", p:"He taught himself, with some help from his cousin by marriage, the painter Anton Mauve. His early work is dark and earthy. The Potato Eaters (1885), a peasant family eating by lamplight, was his first big ambition."},
      {h:"Paris, 1886 to 1888", p:"He moved in with Theo in Paris and saw the Impressionists. His palette exploded with color. He and Theo collected Japanese woodblock prints, and he copied two of Hiroshige's in oil."},
      {h:"Arles, 1888", p:"He moved south to Arles, rented the Yellow House and dreamed of an artists' colony. He painted the Sunflowers to decorate the room for Paul Gauguin, who came in October. They argued, and on 23 December, after a quarrel, Vincent cut off his ear and gave it to a young woman at a local brothel. He was taken to hospital the next day."},
      {h:"Saint-Rémy, 1889", p:"In May 1889 he chose to enter the asylum at Saint-Rémy. Between attacks he kept painting, about 150 paintings in a year, including The Starry Night, painted in June from memory of the view from his window."},
      {h:"Auvers, 1890", p:"In May 1890 he moved to Auvers-sur-Oise near Paris, watched over by Dr Paul Gachet. He painted at astonishing speed, around 70 paintings in about 70 days. On 27 July he was shot in the chest, most likely by his own hand, and he died two days later with Theo beside him."},
      {h:"How he became famous", p:"Theo died in January 1891. His widow Johanna was left with a baby and hundreds of paintings that almost nobody wanted. She lent them to exhibitions, sold them one at a time to the right collectors, and in 1914 published Vincent's letters. By the time she died in 1925, Van Gogh was one of the most famous painters in the world."}
    ],
    deep: [
      {h:"Did he really sell only one painting?", lab:"disputed", p:"The Red Vineyard, bought by Anna Boch in 1890 for 400 francs, is the only sale of a painting that is fully documented. There are records and hints of a few other sales and swaps, so \"only one, ever\" is too strong. The point stands: he earned almost nothing from his art.", why:"Sales would show up in Theo's accounts and in Vincent's letters. One is clear, a few others are partial or uncertain."},
      {h:"The ear", lab:"verified", p:"For decades many books said he cut off only part of his earlobe. In 2016 the researcher Bernadette Murphy found a drawing by his doctor, Félix Rey, showing the cut went through almost the whole left ear. She also identified the young woman he gave it to as a maid at the brothel, Gabrielle Berlatier.", why:"The doctor's own sketch was made for the American writer Irving Stone in 1930 and is now public. The woman's identity rests on Murphy's archive work and is labelled likely, not certain."},
      {h:"What was his illness?", lab:"disputed", p:"His doctors at the time thought he had a form of epilepsy. Modern experts have suggested bipolar disorder, borderline personality disorder and other conditions, made worse by heavy drinking (including absinthe), poor eating and exhaustion. There is no agreed answer.", why:"Diagnosing someone from letters 130 years later is guesswork. The symptoms are well described; the cause is not."},
      {h:"How did he die?", lab:"disputed", p:"The traditional account is that he shot himself in the fields near Auvers and walked back to his inn. He told those around him he had done it himself. In 2011 the biographers Steven Naifeh and Gregory White Smith argued that a local teenager may have shot him by accident. Researchers at the Van Gogh Museum answered that the evidence still points to suicide, and most experts agree.", why:"No gun was found at the time and nobody saw it happen, which leaves room for doubt. His own statements and his illness are why most experts accept suicide."},
      {h:"Johanna's campaign", lab:"verified", p:"Jo, as she was called, ran a boarding house in Bussum to support her son while managing the collection. She organised shows, including a huge one at the Stedelijk Museum in Amsterdam in 1905 with nearly 500 works. In 1914 she published the letters in three volumes and had Theo's body moved to lie beside Vincent's in Auvers. She was translating the letters into English when she died in 1925.", why:"Her account books, her diary and her published memoir of Vincent survive and have been studied in detail."},
      {h:"Afterlife", lab:"verified", p:"Her son, also named Vincent, set up a foundation to keep the collection together. The Van Gogh Museum opened in Amsterdam in 1973. In 1990 the Portrait of Dr Gachet sold for 82.5 million dollars, a record at the time.", why:"Museum records and public auction results."}
    ],
    check: [
      {n:"The letters, with notes, from the Van Gogh Museum", u:"https://vangoghletters.org"},
      {n:"Van Gogh Museum, Amsterdam", u:"https://www.vangoghmuseum.nl"},
      {n:"Johanna van Gogh-Bonger, memoir in The Letters (1914)"},
      {n:"Steven Naifeh and Gregory White Smith, Van Gogh: The Life (2011)"},
      {n:"Bernadette Murphy, Van Gogh's Ear (2016)"}
    ]
  },
  "beethoven": {
    t2: [
      "Ludwig van Beethoven was born in Bonn in December 1770. His father, a singer at court, pushed him hard as a child prodigy. At 21 he moved to Vienna, studied briefly with Haydn, and became the most exciting pianist in the city.",
      "In his late twenties he began to lose his hearing. In 1802 he wrote a letter to his brothers, now called the Heiligenstadt Testament, admitting he had thought about ending his life and had decided to live for his art.",
      "He kept composing as he went deaf: the Fifth Symphony, the Moonlight Sonata, his only opera Fidelio, and the Ninth Symphony, premiered in 1824 when he could not hear the applause. He died in Vienna in March 1827, aged 56, and thousands of people followed his funeral."
    ],
    t10: [], deep: [], check: [{n:"Beethoven-Haus Bonn", u:"https://www.beethoven.de"}]
  }
};

/* ---------- fact sheets for the in-character chat ---------- */
H.sheets = {
  "beethoven": [
    ["verified","Born in Bonn, baptised 17 December 1770. His exact birthday is not recorded."],
    ["verified","His father Johann was a court singer who drank heavily and drilled him at the keyboard as a boy."],
    ["verified","Moved to Vienna in 1792 and studied with Joseph Haydn. He also took lessons from Salieri and Albrechtsberger."],
    ["disputed","He may have met Mozart on a short visit to Vienna in 1787. The famous story of Mozart praising him comes from later, unreliable sources."],
    ["verified","His hearing began to fail in his late twenties. By his last years he was almost completely deaf and used conversation books, where visitors wrote what they wanted to say."],
    ["verified","In 1802 he wrote the Heiligenstadt Testament, a letter to his brothers about his deafness and despair, saying only his art held him back from ending his life."],
    ["likely","He dedicated his Third Symphony to Napoleon, then angrily removed the name when Napoleon made himself emperor in 1804 (from his pupil Ferdinand Ries; the scratched-out title page survives)."],
    ["verified","Wrote 9 symphonies, 32 piano sonatas, 5 piano concertos, 16 string quartets and one opera, Fidelio."],
    ["verified","The Fifth Symphony premiered in December 1808 in a cold, four-hour concert in Vienna."],
    ["verified","The name Moonlight Sonata was given by the critic Ludwig Rellstab after Beethoven's death. Beethoven called it Sonata quasi una fantasia."],
    ["verified","Wrote a passionate letter in 1812 to an unnamed Immortal Beloved. Who she was is unknown; Antonie Brentano is a leading candidate (disputed)."],
    ["verified","Met Goethe in the spa town of Teplitz in 1812. They admired each other's work but did not get along well."],
    ["disputed","The story that he refused to step aside for the imperial family while walking with Goethe comes from Bettina von Arnim and may be invented."],
    ["verified","Never married. Fought a long, bitter legal battle for guardianship of his nephew Karl, who attempted suicide in 1826 and survived."],
    ["likely","Moved house very often in Vienna, dozens of times."],
    ["disputed","Said to count exactly 60 coffee beans per cup. The source is his secretary Anton Schindler, who is known to have invented or altered stories."],
    ["verified","At the Ninth Symphony premiere in May 1824 he could not hear the applause; a singer turned him around to see it."],
    ["verified","Had wealthy patrons, including Archduke Rudolph, Prince Lobkowitz and Prince Kinsky, who paid him a yearly income from 1809 to keep him in Vienna."],
    ["verified","Died in Vienna on 26 March 1827, aged 56, most likely of liver disease. Thousands attended his funeral; Franz Schubert was a torchbearer."],
    ["likely","A witness, Anselm Hüttenbrenner, said there was a thunderstorm at the moment he died."],
    ["myth","The idea that he was totally deaf when he wrote all his famous works is wrong: much of his music before 1815 was written while he could still hear partly."]
  ],
  "van-gogh": [
    ["verified","Born 30 March 1853 in Zundert, Netherlands, son of a pastor."],
    ["verified","Worked for the art dealers Goupil and Co. from age 16 in The Hague, London and Paris, and was dismissed in 1876."],
    ["verified","Worked as a lay preacher among coal miners in the Borinage, Belgium, and was let go."],
    ["verified","Decided to become an artist in 1880, aged 27. His brother Theo supported him with money from then on."],
    ["verified","More than 800 of his letters survive, most to Theo."],
    ["verified","Painted The Potato Eaters in Nuenen in 1885."],
    ["verified","Lived with Theo in Paris 1886 to 1888, met Impressionist painters, and collected Japanese prints."],
    ["verified","Moved to Arles in February 1888 and rented the Yellow House. Painted Sunflowers to decorate Gauguin's room."],
    ["verified","Paul Gauguin stayed with him in Arles for about nine weeks from October 1888."],
    ["verified","On 23 December 1888, after a quarrel with Gauguin, he cut off almost all of his left ear."],
    ["verified","Entered the asylum at Saint-Rémy in May 1889 and painted The Starry Night there in June 1889."],
    ["verified","Moved to Auvers-sur-Oise in May 1890, under the care of Dr Paul Gachet, and painted around 70 works in about 70 days."],
    ["disputed","Died on 29 July 1890, two days after being shot. Most experts accept suicide; a 2011 theory says a teenager shot him by accident."],
    ["disputed","Often said to have sold only one painting, The Red Vineyard. It is the only fully documented sale, but there may have been a few others."],
    ["verified","Made about 860 paintings in about ten years."],
    ["verified","Theo died in January 1891. Theo's widow Johanna made Vincent famous by exhibiting his work and publishing his letters in 1914."]
  ]
};

/* ---------- cause-and-effect chains ---------- */
H.chains = [
  {id:"japan-paris", n:"From American warships to Van Gogh's Japanese prints", lede:"How a naval visit to Tokyo Bay ended up in The Starry Night's brushwork.", steps:[
    {y:1853, ev:"perry-japan", lab:"verified", t:"American warships under Commodore Perry force Japan to open its ports."},
    {y:1867, lab:"verified", t:"Japan sends art and crafts to the World's Fair in Paris. French artists go wild for Japanese prints, a craze soon called Japonisme."},
    {y:1868, ev:"meiji-restoration", lab:"verified", t:"The Meiji Restoration opens Japan to the world, and cheap woodblock prints flow to Europe."},
    {y:1887, w:"flowering-plum", lab:"verified", t:"In Paris, Vincent and Theo collect hundreds of prints. Vincent copies Hiroshige's Plum Park in oil."},
    {y:1888, lab:"verified", t:"Vincent moves to Arles hoping to find a southern Japan. He writes to Theo that the countryside seems as beautiful as Japan."},
    {y:1889, w:"starry-night", lab:"likely", t:"The swirling sky of The Starry Night is often compared to Hokusai's Great Wave. The bold outlines and flat color owe a lot to Japanese prints, though Vincent never said so about this painting.", why:"The influence of Japanese prints on his style is documented in his letters; a direct link to The Great Wave is an art historian's reading."}
  ]},
  {id:"print-war", n:"The printing press and a war of religion", lede:"A new machine spread one monk's complaints across Europe, and Europe split.", steps:[
    {y:1455, ev:"gutenberg-bible", lab:"likely", t:"Gutenberg prints his Bible with movable metal type in Mainz.", why:"Copies survive; the exact year is around 1454 to 1455."},
    {y:1500, lab:"likely", t:"Printers are working in hundreds of European towns, and books get far cheaper.", why:"Historians count presses from surviving early books; the exact number depends on the method."},
    {y:1517, ev:"reformation", lab:"verified", t:"Martin Luther writes his 95 Theses against the sale of indulgences. Printed copies spread across Germany within weeks."},
    {y:1517, lab:"disputed", t:"Did he nail them to the church door in Wittenberg? The story first appears after his death, so historians still argue about it.", why:"Luther himself never described nailing them up. The account comes from his colleague Philip Melanchthon, who was not in Wittenberg at the time."},
    {y:1618, ev:"thirty-years-war", lab:"verified", t:"Tensions between Catholic and Protestant states help set off the Thirty Years' War."},
    {y:1648, lab:"verified", t:"The Peace of Westphalia ends the war and confirms that each ruler can set their state's religion, now including Calvinist rulers."}
  ]},
  {id:"sarajevo", n:"One shot in Sarajevo", lede:"How one assassination led, step by step, to two world wars.", steps:[
    {y:1914, lab:"verified", t:"On 28 June, Gavrilo Princip shoots Archduke Franz Ferdinand, heir to the Austro-Hungarian throne, in Sarajevo."},
    {y:1914, ev:"ww1", lab:"verified", t:"Alliances pull the great powers in one after another. By August, Europe is at war."},
    {y:1919, lab:"verified", t:"The Treaty of Versailles makes Germany accept blame, give up land and pay reparations."},
    {y:1929, ev:"great-depression", lab:"verified", t:"The Great Depression hits Germany hard. Millions lose their jobs."},
    {y:1933, lab:"verified", t:"Hitler becomes chancellor of Germany, promising to undo Versailles."},
    {y:1939, ev:"ww2", lab:"likely", t:"Germany invades Poland and the Second World War begins. How much Versailles caused it is still debated.", why:"Most historians see Versailles and the Depression as major causes, but not the only ones."}
  ]},
  {id:"columbian", n:"Columbus and the chili pepper", lede:"One voyage reshuffled the food, animals and diseases of the whole planet.", steps:[
    {y:1492, ev:"columbus-1492", lab:"verified", t:"Columbus reaches the Caribbean, looking for a route to Asia."},
    {y:1500, lab:"verified", t:"Plants, animals and germs start crossing the Atlantic both ways. The historian Alfred Crosby later named it the Columbian Exchange."},
    {y:1520, lab:"verified", t:"Smallpox, brought from Europe, sweeps through the Aztec capital and kills a huge share of its people."},
    {y:1521, ev:"aztec-fall", lab:"verified", t:"Weakened by the epidemic, Tenochtitlan falls to the Spanish and their Indigenous allies."},
    {y:1550, lab:"verified", t:"Portuguese traders carry chili peppers from the Americas to India and Southeast Asia. Over the next centuries chili becomes central to Indian, Thai and Malaysian cooking."},
    {y:1750, lab:"likely", t:"Potatoes in Europe and maize and sweet potatoes in China help populations grow fast.", why:"The link between new crops and population growth is widely accepted, but how big the effect was is debated."}
  ]}
];

/* ---------- curated quiz questions (every answer explained) ---------- */
H.quiz = [
  {q:"Which is closer in time to Cleopatra: the building of the Great Pyramid, or the Moon landing?", o:["The Great Pyramid","The Moon landing"], a:1, why:"The pyramid was built around 2560 BC, about 2,500 years before Cleopatra died in 30 BC. The Moon landing in 1969 came about 2,000 years after her.", links:["p:cleopatra","e:great-pyramid","e:moon-landing"]},
  {q:"Was Oxford University already teaching when the Aztecs founded Tenochtitlan?", o:["Yes","No"], a:0, why:"Teaching at Oxford is recorded by 1096. Tenochtitlan was founded in 1325, more than 200 years later.", links:["e:oxford-teaching","e:tenochtitlan"]},
  {q:"Was Van Gogh still alive when Nintendo was founded?", o:["Yes","No"], a:0, why:"Nintendo started in Kyoto in September 1889, making playing cards. Van Gogh died in July 1890.", links:["p:van-gogh","e:nintendo-founded"]},
  {q:"Abraham Lincoln and Charles Darwin were born...", o:["The same day","Ten years apart","A century apart"], a:0, why:"Both were born on 12 February 1809, Lincoln in Kentucky and Darwin in Shrewsbury, England.", links:["p:lincoln","p:darwin"]},
  {q:"Did Shakespeare live to see work start on the Taj Mahal?", o:["Yes","No"], a:1, why:"Shakespeare died in 1616. Work on the Taj Mahal began around 1632.", links:["p:shakespeare","e:taj-mahal"]},
  {q:"Which came first: the founding of Penang, or the French Revolution?", o:["Penang","The French Revolution"], a:0, why:"Francis Light founded the British settlement on Penang in 1786. The French Revolution began in 1789.", links:["e:penang-founded","e:french-revolution"]},
  {q:"Did Beethoven ever have lessons with Mozart?", o:["Yes, for years","Probably not","Definitely not"], a:1, why:"This one is honestly uncertain. Beethoven visited Vienna in 1787 hoping to study with Mozart, but there is no reliable evidence that lessons happened. He did study with Haydn from 1792.", links:["p:beethoven","p:mozart","p:haydn"], lab:"disputed"},
  {q:"Who made Van Gogh famous after he died?", o:["Paul Gauguin","His sister-in-law Johanna","The Louvre"], a:1, why:"Johanna van Gogh-Bonger, Theo's widow, inherited the paintings, exhibited them for decades and published his letters in 1914.", links:["p:johanna-van-gogh-bonger","p:van-gogh"]},
  {q:"Where did Van Gogh paint The Starry Night?", o:["In a Paris studio","In an asylum in Saint-Rémy","In Amsterdam"], a:1, why:"He painted it in June 1889 at the asylum of Saint-Paul-de-Mausole in Saint-Rémy, from memory of the view from his window.", links:["p:van-gogh"]},
  {q:"Did Marie Antoinette say \"Let them eat cake\"?", o:["Yes","There's no evidence she did"], a:1, why:"Rousseau wrote the line about \"a great princess\" in a book he wrote when Marie Antoinette was a child in Austria. Nobody recorded her saying it.", links:[], lab:"myth"},
  {q:"Did Einstein fail math at school?", o:["Yes","No"], a:1, why:"He mastered calculus before 15. At 16 he failed the general part of a university entrance exam while scoring well in math and physics.", links:["p:einstein"], lab:"myth"},
  {q:"How did the swirl of Japanese prints reach Van Gogh?", o:["He visited Japan","Japan opened to trade and prints flooded Paris","Gauguin brought them from Tahiti"], a:1, why:"After Japan opened its ports in the 1850s, Japanese prints became a craze in Paris. Vincent and Theo collected hundreds of them.", links:["e:perry-japan","p:hiroshige","p:van-gogh"]}
];

})(window.HISTORY);
