/* Talk in the person's own voice (record mode, no AI needed).
   Each person: hi (greeting), bye, how ("how are you?"), and lines.
   A line is [topic, keywords, what the person says, record].
   The words are written ahead of time as a faithful first-person retelling of the record they cite;
   the record is what the app shows under the answer, with its honesty label. Record pointers:
     "turns.3"      paragraph 3 of the chapter section "turns" (its label comes with it)
     "sheet.9"      line 9 of the hand-checked fact sheet (H.sheets)
     "work:<id>"    a work in H.works       "conn:<id>"  the connection to another person   "myth:<id>"  a myth in H.myths
     ["likely", "text"]  a record line written here, with its label
   Several pointers are joined with "|". A line whose record cannot be found is dropped.
   Topics the router knows: who, early, death, family, love, work, people, myth, world, legacy, like.
   Sacred people never get an entry here: the museum does not speak for them.
   More people can arrive with the online feed (feed.voice, same shape). */
window.HISTORY.voice = window.HISTORY.voice || {};
Object.assign(window.HISTORY.voice, {

"van-gogh": {
  hi: "Hello, hello! Come in out of the sun. Mind the wet canvas by the door.",
  how: "Tired, and a little restless, as always. But I worked well today, so I am content. And you?",
  bye: "Go well, my friend. Look at the stars tonight. They are never only black and white.",
  lines: [
    ["who", "who are you introduce yourself", "I'm Vincent. I failed as an art dealer, a teacher and a preacher before I picked up a brush at 27. Then I painted as if my life depended on it, about 860 paintings in ten years.", "short.0|short.1"],
    ["early", "born birth childhood young boy grow up zundert father pastor", "I was born in 1853 in Zundert, a Dutch village, a pastor's son. I was a solitary boy. I liked walking in the fields and collecting beetles and birds' nests.", "early.0|sheet.0"],
    ["life", "ear cut razor cutting december 1888 earlobe", "That was the worst night of my life. On 23 December 1888, after a quarrel with Gauguin, I cut off my left ear with a razor and gave it to a young woman at a house in town. I was very ill, and I am not proud of the fright I gave everyone.", "turns.3|sheet.9|myth:van-gogh-ear"],
    ["death", "die died death dead end shot gun auvers suicide how", "In July 1890, in Auvers, I was shot in the chest. I lived two more days, and Theo came and sat with me until the end. I was 37. People still argue about exactly what happened that day, and I won't pretend to settle it for you.", "turns.5|sheet.12"],
    ["family", "brother theo family money", "Theo, my little brother, an art dealer in Paris. From 1880 he sent me money every month, and I wrote him hundreds of letters. Without Theo there would be no Van Gogh.", "people.0|conn:theo-van-gogh"],
    ["people", "gauguin paul friend friends arles quarrel yellow house", "Gauguin came to Arles in October 1888 and stayed in my Yellow House for nine weeks. We admired each other and drove each other mad. After the night of my ear he left, and we only wrote letters after that. We never met again.", "people.1|conn:gauguin"],
    ["family", "johanna jo sister law famous", "Johanna, Theo's wife. I met her in Paris in 1890 and she came to see me in Auvers. They tell me she spent 34 years after we were gone making the world look at my paintings. I owe her everything I am now.", "people.2|conn:johanna-van-gogh-bonger"],
    ["like", "colour color colours colors yellow blue", "I never wrote down a single favourite. But look at my pictures from Arles: the Sunflowers, the Yellow House, that café under the stars. Yellow kept coming back to me there. Judge for yourself.", "work:sunflowers|[\"verified\",\"In Arles in 1888 he painted the Sunflowers, rented the Yellow House and painted the Café Terrace at Night.\"]"],
    ["work", "starry night stars sky saint remy asylum famous painting", "I painted The Starry Night in June 1889 at the asylum in Saint-Rémy, from the view from my window and from memory. And do you know, in a letter to Bernard I called it a failure.", "work:starry-night|works.3"],
    ["work", "sunflowers flowers vase", "I painted the Sunflowers in Arles to decorate the room where Gauguin would sleep. Four of them, and then I made repetitions of them.", "work:sunflowers|works.1"],
    ["work", "potato eaters nuenen dark peasants", "The Potato Eaters, 1885. A family eating by lamplight in Nuenen. I wanted it to look as if it were painted with the colour of a dusty potato. I thought it my best work so far.", "work:potato-eaters|works.0"],
    ["myth", "sold one painting only sell sale money red vineyard", "People say I sold only one painting, The Red Vineyard. It is the only sale anyone can prove: Anna Boch bought it for 400 francs. There may have been a few others, but not many. Theo paid for nearly everything.", "work:red-vineyard|sheet.13"],
    ["world", "paris japan prints japanese impressionists hiroshige", "In Paris, from 1886, I saw the Impressionists and Japanese woodblock prints. Theo and I collected hundreds of prints. My colours exploded after that.", "turns.2|world.1"],
    ["legacy", "famous now today fame museum price", "Famous? I died almost unknown. They tell me Jo showed my work to the world, that there is a museum in Amsterdam with my name, and that a portrait of Dr Gachet sold for 82.5 million dollars. I could hardly afford paint.", "legacy.0|legacy.1|legacy.2"]
  ]
},

"beethoven": {
  hi: "Eh? Hello! Speak up, or better, write it in my book. My ears are not what they were.",
  how: "My ears ring and my stomach complains, but there is music in my head, so I am well enough. Write your question down.",
  bye: "Go, then! And if you hear music somewhere, listen to it properly, for me.",
  lines: [
    ["who", "who are you introduce yourself", "Ludwig van Beethoven, from Bonn. I came to Vienna at 21, made my name as a pianist, and then as a composer, while my hearing slowly left me.", "short.0|short.1"],
    ["early", "born birth childhood young boy father bonn", "I was baptised in Bonn on 17 December 1770. My father Johann was a court singer who drank, and he drilled me hard at the keyboard. He wanted a second Mozart.", "early.0|early.1"],
    ["life", "deaf deafness hear hearing ears going deaf", "From my late twenties my hearing began to fail, slowly and then almost completely. In my last years visitors wrote to me in conversation books. About 140 of them survive.", "turns.1|turns.5|sheet.4"],
    ["life", "heiligenstadt testament despair letter", "In 1802, at Heiligenstadt, I wrote a letter to my brothers that I never sent. I admitted I had thought of ending my life. Only my art held me back. I am glad it did.", "turns.1|sheet.5"],
    ["death", "die died death dead end funeral how", "I died in Vienna on 26 March 1827, at 56, most likely of liver disease. They tell me thousands came to my funeral, and young Schubert carried a torch.", "short.2|sheet.18"],
    ["work", "ninth symphony ode joy choral applause premiere", "The Ninth, in May 1824. I stood beside the conductor beating time I could not hear. At the end someone had to turn me around so I could see the applause.", "turns.6|work:ninth"],
    ["work", "fifth symphony four notes concert", "The Fifth. Four notes, and everyone knows them. We first played it on 22 December 1808 in a freezing hall, a concert four hours long.", "works.1|work:fifth"],
    ["people", "napoleon eroica third symphony title page emperor", "I dedicated my Third Symphony to Napoleon. Then he made himself emperor, and, as my pupil Ries tells it, I struck his name from the title page in a fury.", "sheet.6|conn:napoleon"],
    ["work", "moonlight sonata", "The Moonlight Sonata? I never called it that. It was Sonata quasi una fantasia. A critic named it after moonlight on a lake, after I was gone.", "work:moonlight|works.2"],
    ["love", "immortal beloved love wife married marry woman", "I never married. In July 1812 I wrote a letter to my Immortal Beloved. I never sent it, and I did not write her name. That stays between me and her.", "turns.3|sheet.10"],
    ["family", "nephew karl family brother", "When my brother Kaspar Karl died, I fought his widow in court for years to raise my nephew Karl. It was bitter for everyone. In 1826 the boy tried to shoot himself. He survived, thank God.", "turns.4|sheet.13"],
    ["people", "goethe teplitz", "I met Goethe at Teplitz in 1812. I admired his work, and he admired mine. The man himself, we found each other difficult.", "conn:goethe|world.2"],
    ["people", "haydn teacher lessons", "Haydn taught me in Vienna. He called me the Great Mogul. We respected each other more than we liked each other.", "people.0|conn:haydn"],
    ["myth", "coffee beans sixty 60 count cup", "Sixty beans a cup? That story comes from Schindler, my secretary, and he invented or changed many stories. Believe it if you like.", "sheet.15"]
  ]
},

"napoleon": {
  hi: "You have a few minutes. Speak.",
  how: "Busy. I am always busy. What do you want to know?",
  bye: "Go. And remember: the record judges me more harshly than my bulletins did, and it is right to.",
  lines: [
    ["who", "who are you introduce yourself", "Napoleon Bonaparte. A Corsican artillery officer who rose through the Revolution, took power in 1799 and crowned himself emperor in 1804.", "short.0"],
    ["early", "born birth childhood young corsica ajaccio school", "I was born in Ajaccio on Corsica on 15 August 1769. My first language was Corsican Italian. At school in Brienne the other boys mocked my accent and my poverty, so I read.", "early.0|early.1"],
    ["death", "die died death dead end saint helena exile waterloo", "Waterloo, 18 June 1815, and then exile on Saint Helena. I died there in 1821, at 51.", "short.2|turns.7"],
    ["life", "slavery slaves haiti saint domingue toussaint", "In 1802 I restored slavery in the French colonies that still had it, and sent an army to retake Saint-Domingue. Toussaint Louverture died in my prison. My army was beaten and Haiti became free. That decision was a crime, and I will not dress it up.", "turns.5"],
    ["work", "code civil law napoleonic", "The Civil Code of 1804. Equality of men before the law, property, secular marriage. It also made wives subject to their husbands. Countries still use it.", "works.0"],
    ["life", "russia moscow 1812 winter army retreat", "In 1812 I invaded Russia with more than 400,000 men. Moscow burned, winter came, and I lost almost all of them.", "turns.6"],
    ["life", "austerlitz battle victory war wars", "Austerlitz, 1805: I crushed Austria and Russia. But my wars killed millions, and the British navy had already beaten me at sea.", "turns.6|short.1"],
    ["love", "josephine wife married marie louise son", "Joséphine, my first wife. I divorced her in 1809 because she had given me no heir, but we stayed fond of each other. Then I married Marie-Louise of Austria, who gave me a son in 1811.", "people.0"],
    ["people", "beethoven eroica", "I'm told Beethoven dedicated his Third Symphony to me, then scratched my name out when I made myself emperor. He had admired me as a hero of liberty.", "people.3|conn:beethoven"],
    ["people", "wellington", "Wellington beat my marshals in Spain and me at Waterloo. We never met face to face.", "people.2"],
    ["myth", "short height tall small", "Short? People tell that story. I was about 1.69 metres, ordinary for a Frenchman of my day. The legend comes from British cartoons and from mixing up French and English inches.", "myth:napoleon-short"]
  ]
},

"cleopatra": {
  hi: "Welcome to Alexandria. You may speak to the queen.",
  how: "I rule Egypt with Rome breathing down my neck. I am always well; I cannot afford not to be.",
  bye: "Go in peace, and remember that almost everything you read of me was written by my enemies.",
  lines: [
    ["who", "who are you introduce yourself", "Cleopatra, the seventh of that name, queen of Egypt. My family, the Ptolemies, were Macedonian Greeks who ruled Egypt for nearly three hundred years. I became queen at 18, in 51 BC.", "short.0"],
    ["early", "born birth childhood young father alexandria", "I was born in 69 BC and grew up in Alexandria, with its lighthouse and its Library. My father was Ptolemy XII, the flute player. My court spoke Greek. Plutarch says I was the first of my family to learn Egyptian, the people's language.", "early.0|early.1|early.2"],
    ["death", "die died death dead end snake asp suicide how", "In 30 BC, after Octavian took Alexandria and Antony died, I was a prisoner facing a parade through Rome in chains. I chose to die instead, with my maids Iras and Charmion. I was 39.", "turns.9|short.2"],
    ["people", "caesar julius rome", "Julius Caesar. He was 52 when we met and I was 21. He took my side in the war against my brother, and I bore a son, Caesarion. I lived in his villa in Rome until the Ides of March.", "people.0|conn:julius-caesar|turns.4"],
    ["love", "antony mark love husband children twins", "Mark Antony. He summoned me to Tarsus in 41 BC, and, as Plutarch tells it, I came up the river on a barge with purple sails. We had twins and a son, and we lost everything together.", "people.1|turns.7"],
    ["life", "carpet rug sack smuggled", "To reach Caesar past my brother's soldiers, my friend Apollodorus rowed me to the palace at dusk and carried me in, wrapped in a bedding sack. That is how Plutarch tells it.", "turns.2"],
    ["life", "actium battle war octavian augustus", "Actium, 2 September 31 BC. Octavian declared war on me, not on Antony, so it would look like a foreign war. We lost at sea.", "turns.8|conn:augustus"],
    ["family", "children son caesarion daughter selene", "My son Caesarion was killed on Octavian's orders at 17. My daughter Cleopatra Selene survived, and became a queen herself, in Mauretania.", "people.4"],
    ["work", "rule ruled egypt kingdom achievement", "I ruled for 21 years and kept Egypt free through Rome's civil wars. Mine was the last of the kingdoms of Alexander's successors to fall to Rome.", "works.0"],
    ["myth", "beautiful beauty seduce", "Beautiful? The Romans wrote me as a seductress and a monster. Plutarch says I spoke many languages. Judge me by that, not by my enemies' poems.", "works.3|early.2"]
  ]
},

"leonardo": {
  hi: "Ah, a visitor. Forgive the clutter, the notebooks get everywhere.",
  how: "Curious, as always. This morning it was the flow of water. What are you curious about?",
  bye: "Go well. Look closely at things. Everything is connected to everything else.",
  lines: [
    ["who", "who are you introduce yourself", "Leonardo, from near Vinci. A painter trained in Florence, who also filled thousands of pages on anatomy, flight, water and machines.", "short.0|short.1"],
    ["early", "born birth childhood young father mother vinci", "My grandfather wrote my birth in the family book: Saturday 15 April 1452, three hours after sunset. My father was a young notary, Ser Piero; my mother was Caterina. They never married.", "early.0|early.1"],
    ["early", "school latin education letters", "Because I was born outside marriage I could not follow my father into the notaries' guild, and I had little Latin. I called myself a man without letters.", "early.2"],
    ["death", "die died death dead end france amboise king", "In 1516 the young King Francis invited me to France. I crossed the Alps with the Mona Lisa and lived at Amboise on the Loire. I died there on 2 May 1519.", "turns.6|short.2"],
    ["work", "mona lisa lisa gherardini smile louvre", "The Mona Lisa. I began her around 1503, Lisa Gherardini, a merchant's wife. I never handed her over. I kept working on her for years and took her to France.", "work:mona-lisa|works.0|turns.5"],
    ["work", "last supper milan wall", "The Last Supper, in Milan, on a refectory wall. I tried a new technique on dry plaster, and it began to flake while I was still alive. A lesson.", "turns.3"],
    ["work", "notebooks anatomy flight fly machines inventions", "My notebooks, about 7,000 pages survive: the heart, the eye, birds' wings, water, fossils, machines. I drew the body after dissecting corpses.", "works.2"],
    ["people", "michelangelo rival", "Michelangelo, more than twenty years younger. Florence had us paint rival battle scenes in the same hall. Neither of us finished.", "people.3|conn:michelangelo"],
    ["people", "salai pupil devil", "Salaì, my little devil. He came to me at about ten and stayed some 25 years. I wrote down his thefts and lies, and the money spent on his clothes.", "people.1"],
    ["work", "horse bronze statue sforza", "The great horse for the Sforza, about seven metres tall. The clay model was made, and then the bronze went into cannons. It was never cast.", "turns.4"]
  ]
},

"shakespeare": {
  hi: "Good day to you! You've caught me between scenes.",
  how: "Well enough, thank you, though the company wants a new play by Friday.",
  bye: "Farewell. Parting is such sweet sorrow, as somebody once wrote.",
  lines: [
    ["who", "who are you introduce yourself", "Will Shakespeare of Stratford. Actor, shareholder in the Globe, and writer of some 38 plays, two long poems and a good many sonnets.", "short.0|short.1"],
    ["early", "born birth birthday childhood stratford", "The first record of me is my baptism, in Stratford on 26 April 1564. My birthday is kept on 23 April, but that's tradition, not record. My father was a glover who became the town's bailiff.", "early.0|early.1"],
    ["death", "die died death dead end how", "I died in Stratford on 23 April 1616 and was buried inside Holy Trinity Church. I was 52.", "turns.6|short.2"],
    ["family", "wife anne hathaway married children hamnet", "I married Anne Hathaway when I was 18 and she was 26. We had Susanna, then the twins, Hamnet and Judith. Hamnet died in 1596. He was eleven.", "early.3|people.0"],
    ["life", "lost years missing", "Between 1585 and 1592 I vanish from the records. Every story about those years, from poaching deer to teaching school, is guesswork.", "early.4"],
    ["work", "globe theatre fire", "The Globe! We took our old playhouse apart, carried the timbers over the Thames and built it in 1599. In 1613 a stage cannon set the thatch alight and it burned in an hour. No one died.", "turns.3|turns.5"],
    ["work", "hamlet plays tragedies macbeth romeo", "Comedies, histories, tragedies: Romeo and Juliet, Hamlet, Othello, King Lear, Macbeth, The Tempest. I borrowed nearly all my plots. What I added was the language and the people.", "works.0|works.1"],
    ["people", "marlowe christopher", "Kit Marlowe was born the same year as me and was the star when I started. He was stabbed to death in Deptford at 29.", "people.2"],
    ["people", "queen elizabeth court", "My company played for the Queen at court.", "conn:elizabeth-i"],
    ["myth", "real author authorship did you write really oxford plays", "Did I write my plays? Yes. My fellow actors put 36 of them in the First Folio in 1623, and Ben Jonson, who knew me, praised me in it.", "works.4|people.3"]
  ]
},

"marie-curie": {
  hi: "Good day. Excuse me if I keep one eye on the electrometer.",
  how: "Tired, but the measurements are going well. What would you like to know?",
  bye: "Goodbye. Nothing in life is to be feared, only understood.",
  lines: [
    ["who", "who are you introduce yourself", "Marie Curie, born Maria Skłodowska in Warsaw. With Pierre I discovered polonium and radium, and I won two Nobel Prizes, in physics and in chemistry.", "short.0|short.1"],
    ["early", "born birth childhood young warsaw poland mother", "I was born in Warsaw in 1867, the youngest of five children of two teachers. My sister Zofia died when I was eight and my mother when I was ten. Poland was ruled by Russia, and women could not go to university there.", "early.0|short.0"],
    ["early", "flying university governess sister paris sorbonne", "I studied in the Flying University, a secret night school. My sister Bronisława and I made a pact: I worked as a governess to pay for her studies in Paris, and then she helped me. I reached Paris in 1891.", "early.1|early.2|early.3"],
    ["death", "die died death dead end radiation how", "I died in 1934, very probably from all those years of radiation. We did not understand then what it was doing to us.", "short.2"],
    ["love", "pierre husband married bicycle", "Pierre. We met in 1894 when I needed space for a laboratory. We married in a plain ceremony and toured France by bicycle for our honeymoon.", "turns.0|people.0"],
    ["life", "pierre death 1906 wagon accident sorbonne lecture", "On 19 April 1906 Pierre slipped in the rain and was killed by a wagon. I took over his post and began my first lecture at the very sentence where he had stopped.", "turns.6"],
    ["work", "radium polonium discover discovery elements radioactivity", "In 1898 we announced polonium, named for my homeland, and then radium. I used the word radioactive that year. Then we spent four years in a leaky shed, stirring tonnes of ore to prove it.", "turns.3|turns.4|works.0"],
    ["work", "nobel prize prizes two", "The first Nobel in 1903, shared with Pierre and Becquerel. The story goes that at first it was meant for Pierre and Becquerel alone, until Pierre insisted I be included. The second, in chemistry, in 1911, was mine alone.", "turns.5|short.1"],
    ["life", "war x-ray petites curies cars", "In the war I fitted cars with X-ray machines, learned to drive, and took them to the front. The soldiers called them petites Curies.", "turns.8"],
    ["people", "einstein albert friend", "Albert Einstein was a friend. He stood by me during the scandal of 1911, and later we hiked in the Swiss Alps with the children.", "people.3|conn:einstein"],
    ["family", "daughter irene eve children", "My daughters, Irène and Ève. I'm told Irène won a Nobel Prize too, in 1935, with her husband, and that Ève wrote my life.", "people.1|people.2"]
  ]
},

"mozart": {
  hi: "Ah, servus! Come in, come in. Don't mind the papers, it's all music.",
  how: "Splendid, splendid! Well, the money could be better. But the music is good.",
  bye: "Adieu! Go and hear an opera. Mine, preferably.",
  lines: [
    ["who", "who are you introduce yourself", "Wolfgang Amadè Mozart, from Salzburg. I played for emperors at six and wrote symphonies at eight. In Vienna I wrote Figaro, Don Giovanni and The Magic Flute.", "short.0|short.1"],
    ["early", "born birth childhood young tour sister nannerl father", "I was born on 27 January 1756. My father Leopold taught me and my sister Nannerl, and from 1762 he took us on tour: Munich, Vienna, Paris, London.", "early.0|early.1|early.2"],
    ["early", "empress maria theresa lap kiss", "In Vienna, when I was six, I jumped onto the Empress's lap and kissed her. So they say, and I see no reason to deny it.", "early.2"],
    ["death", "die died death dead end requiem poisoned how", "I fell ill in November 1791 and died early on 5 December, at 35, probably of a fever with swelling. I left the Requiem unfinished.", "short.2|turns.6"],
    ["people", "salieri rival poison poisoned", "Salieri was a rival in Vienna, nothing more. The story that he poisoned me is a myth.", "conn:salieri|myth:mozart-poisoned"],
    ["people", "haydn friend quartets", "Haydn, my dear friend. I dedicated six string quartets to him, and he told my father I was the greatest composer he knew.", "conn:haydn|turns.3"],
    ["life", "archbishop kick salzburg colloredo", "In 1781 I quarrelled with the Archbishop and resigned. His steward, Count Arco, saw me out with a kick in the backside. From then on I worked for myself, in Vienna.", "turns.1|short.1"],
    ["love", "constanze wife married children", "I married Constanze Weber in 1782, against my father's wishes. We had six children. Only two sons lived.", "turns.2|people.2"],
    ["work", "figaro don giovanni opera operas da ponte", "With Da Ponte I wrote The Marriage of Figaro in 1786, from a banned French play, and Don Giovanni in 1787 for Prague, where they adored me.", "turns.4|work:figaro"],
    ["work", "magic flute", "The Magic Flute, 1791, for a popular theatre in Vienna. A magical comedy in German.", "work:magic-flute|turns.6"]
  ]
},

"einstein": {
  hi: "Hello, hello. Sit down. I was only thinking, which can be interrupted.",
  how: "Very well, thank you. My hair disagrees, but I don't listen to it.",
  bye: "Goodbye. Don't stop asking questions.",
  lines: [
    ["life", "nuclear weapons bomb bombs disarmament peace war", "I signed the 1939 letter that helped start America's bomb research. In my last years I campaigned for nuclear disarmament, and for civil rights.", "turns.7|turns.8"],
    ["who", "who are you introduce yourself", "Albert Einstein. I worked at a patent office in Bern while I thought about light and time. Relativity came out of that.", "short.0|short.1"],
    ["early", "born birth childhood young compass ulm munich", "I was born in Ulm on 14 March 1879 and grew up in Munich. At about five my father showed me a compass, and I was amazed that something invisible moved the needle.", "early.0|early.1|short.0"],
    ["early", "school failed maths math bad student", "I disliked the drill of German schools and left at 15 without a diploma. I finished school in Switzerland. Failing at mathematics, though? No. That one is a myth.", "early.2|myth:einstein-math"],
    ["death", "die died death dead end princeton how", "I died in Princeton in 1955. I had spent my last decades looking for a unified theory and never found it.", "turns.8|short.2"],
    ["work", "relativity e=mc2 emc2 energy mass 1905 miracle year", "1905, my miracle year. Four papers: light comes in packets, atoms exist, special relativity, and E = mc², a small mass holds an enormous energy.", "turns.1|works.1"],
    ["work", "general relativity gravity space time eclipse 1919", "In 1915 I finished general relativity: gravity is the curving of space and time. In 1919 Eddington's eclipse measurements showed starlight bending as I had said, and I woke up famous.", "turns.3|turns.4"],
    ["work", "nobel prize", "My Nobel Prize, for 1921, was for the photoelectric effect, not for relativity. The committee still found relativity too uncertain.", "turns.5"],
    ["life", "bomb atomic roosevelt letter nazis germany exile", "When Hitler came to power in 1933 I was in the United States, and I never went back to Germany. In 1939 I signed a letter to President Roosevelt warning that Germany might build a uranium bomb. It helped lead to the Manhattan Project.", "turns.6|turns.7"],
    ["love", "wife mileva elsa married", "Mileva Marić was my first wife, the only woman in my physics class. Our marriage broke down, and later I married my cousin Elsa.", "early.3|people.0|people.1"],
    ["people", "bohr quantum dice god", "Niels Bohr, my great friend and opponent. I never accepted the randomness of quantum theory. God does not play dice, I said.", "people.3|works.3"],
    ["people", "curie marie", "Marie Curie, a friend. We hiked in the Swiss Alps together in 1913.", "conn:marie-curie"]
  ]
},

"darwin": {
  hi: "Good day. Do come in. Mind the barnacles.",
  how: "My stomach troubles me, as it always does, but my mind is busy. Thank you for asking.",
  bye: "Good day to you. Look closely at the next pigeon you see.",
  lines: [
    ["who", "who are you introduce yourself", "Charles Darwin. I sailed round the world on the Beagle and spent twenty years working out evolution by natural selection.", "short.0|short.1"],
    ["early", "born birth childhood young lincoln same day", "I was born on 12 February 1809, in Shrewsbury, the very same day as Abraham Lincoln. My mother died when I was eight. At school I collected beetles and was thought quite ordinary.", "early.0|early.1"],
    ["early", "medicine edinburgh cambridge clergyman surgery", "I tried medicine at Edinburgh but could not bear surgery without anaesthetic. My father sent me to Cambridge to become a clergyman instead.", "early.2"],
    ["death", "die died death dead end westminster how", "I died in 1882 and was buried in Westminster Abbey, which would have surprised the boy who collected beetles.", "short.2"],
    ["life", "beagle voyage ship fitzroy", "I joined the Beagle at 22, from 1831 to 1836, as a naturalist and companion to Captain FitzRoy. I was often seasick, but I spent most of those five years ashore in South America.", "turns.0"],
    ["life", "galapagos finches tortoise mockingbirds islands", "The Galápagos, 1835. The mockingbirds differed from island to island, and the vice-governor could tell which island a tortoise came from by its shell.", "turns.1"],
    ["work", "origin species evolution natural selection book 1859", "On the Origin of Species came out on 24 November 1859. Living things vary, more are born than survive, and those with useful variations pass them on.", "turns.5|short.1"],
    ["people", "wallace alfred", "Alfred Russel Wallace sent me an essay in 1858 with the same theory. Our work was read together. He was generous to me all his life.", "turns.4|people.1"],
    ["love", "emma wife married children", "I married my cousin Emma Wedgwood in 1839. She was devout and worried about my loss of faith, but she supported my work. We had ten children.", "turns.3|people.0"],
    ["work", "worms earthworms last book", "My last book was on earthworms, how they slowly build the soil. It sold better at first than the Origin!", "works.3"]
  ]
},

"lincoln": {
  hi: "Good day, friend. Pull up a chair.",
  how: "Tolerable, thank you. The war weighs on me, but I'll not burden you with it.",
  bye: "Goodbye, friend. With malice toward none.",
  lines: [
    ["who", "who are you introduce yourself", "Abraham Lincoln, of Illinois. Born in a log cabin in Kentucky, a lawyer by trade, and the sixteenth President of the United States.", "short.0|short.1"],
    ["early", "born birth childhood young cabin kentucky mother school", "I was born on 12 February 1809 near Hodgenville, Kentucky, to poor farmers. My mother died when I was nine. All told, I had less than a year of schooling, so I read whatever I could borrow.", "early.0|early.1|early.2"],
    ["death", "die died death dead end shot assassinated booth theatre how", "On Good Friday, 14 April 1865, at Ford's Theatre in Washington, the actor John Wilkes Booth shot me. That was five days after General Lee surrendered.", "turns.8"],
    ["work", "emancipation proclamation slavery free slaves 13th amendment", "On 1 January 1863 the Emancipation Proclamation declared enslaved people in the rebelling states free. In January 1865 the House passed the 13th Amendment to end slavery for good.", "turns.5|turns.7|works.1"],
    ["work", "gettysburg address speech", "At Gettysburg in November 1863 I spoke for about two minutes, about a nation conceived in liberty and a new birth of freedom.", "turns.6"],
    ["life", "civil war war fort sumter union", "Confederate guns fired on Fort Sumter in April 1861 and the war began. It killed over 600,000 soldiers.", "turns.4|works.0"],
    ["life", "habeas corpus arrests", "I suspended habeas corpus in parts of the country, and thousands of civilians were arrested without trial. The record holds that against me, and it should be told.", "works.2"],
    ["people", "douglass frederick", "Frederick Douglass came to the White House three times. He pushed me to move faster on emancipation and on equal pay for Black soldiers.", "people.1|conn:douglass"],
    ["love", "wife mary todd married children sons willie", "I married Mary Todd in 1842. Three of our four sons died before they were grown. Our Willie died in the White House in 1862.", "turns.0|people.0"]
  ]
},

"gandhi": {
  hi: "Welcome. Please sit. I will keep spinning while we talk, if you don't mind.",
  how: "I am well, thank you. Simple food and a long walk keep the body in order.",
  bye: "Go in peace.",
  lines: [
    ["life", "criticised criticism africans black wife family experiments faults wrong mistakes", "I am rightly criticised too: for my early views on Black Africans in South Africa, for how I treated my wife and family, and for my experiments in old age. Weigh them alongside the rest.", "legacy.3"],
    ["who", "who are you introduce yourself", "Mohandas Gandhi. A lawyer who failed in court, who found his work in South Africa and then in the struggle to free India from British rule, without violence.", "short.0|short.1"],
    ["early", "born birth childhood young porbandar mother", "I was born on 2 October 1869 in Porbandar. My father was its chief minister. My mother was deeply religious and fasted often, and that shaped me.", "early.0"],
    ["love", "wife kasturba married marriage", "I was married at 13 to Kasturba, who was 14. We had four sons. She joined the campaigns and went to jail herself, and she died in detention in 1944.", "early.1|people.0|turns.6"],
    ["life", "train south africa thrown first class", "In 1893 in South Africa I was thrown off a train at Pietermaritzburg for refusing to leave a first-class carriage kept for whites. I spent a cold night in the station.", "turns.0"],
    ["work", "salt march dandi", "In 1930 I walked about 390 kilometres to the sea at Dandi with 78 followers, and picked up a lump of salt, against the British law.", "turns.4"],
    ["work", "satyagraha nonviolence non violence truth", "Satyagraha: resisting injustice openly and without violence, accepting the punishment, and trying to win over the opponent rather than defeat him.", "works.0"],
    ["death", "die died death dead end shot killed godse how", "On 30 January 1948, on my way to evening prayers in Delhi, I was shot by Nathuram Godse, who thought me too soft on Muslims and Pakistan. I was 78.", "turns.8|short.2"],
    ["life", "partition independence pakistan 1947", "India became free on 15 August 1947, but divided, and up to a million people died in the violence. I opposed partition.", "turns.7|short.2"],
    ["life", "untouchability caste dalits ambedkar harijan", "I campaigned against untouchability and called Dalits Harijans, children of God. Many Dalits came to reject that name as patronising, and Dr Ambedkar clashed with me sharply. He had reason to.", "works.3|people.3"],
    ["people", "tolstoy letters", "Tolstoy and I wrote to each other in 1909 and 1910 about nonviolence.", "conn:tolstoy|works.1"]
  ]
},

"galileo": {
  hi: "Welcome! Come, look through this. No, the other end.",
  how: "My eyes are failing, but my mind is not. What would you like to know?",
  bye: "Farewell. And yet it moves, as they say I said.",
  lines: [
    ["who", "who are you introduce yourself", "Galileo Galilei, of Pisa. I taught mathematics, rolled balls down slopes, and turned a telescope on the sky.", "short.0|short.1"],
    ["early", "born birth childhood young father pisa", "I was born on 15 February 1564, the eldest child of Vincenzo Galilei, a lute player who experimented with strings.", "early.0"],
    ["work", "telescope moons jupiter moon sky 1610", "In 1609 I built a telescope, and in 1610 I published what I saw: mountains on the Moon, countless stars, and four moons circling Jupiter.", "turns.0|turns.1"],
    ["life", "trial inquisition church heresy pope recant", "In 1633, aged 69, the Inquisition tried me in Rome. On 22 June I knelt and abjured the view that the Earth moves around the Sun. I spent my last years under house arrest.", "turns.5|short.2"],
    ["death", "die died death dead end blind how", "Going blind, I finished Two New Sciences, and it was smuggled out to be printed in the Netherlands. I died on 8 January 1642.", "turns.6"],
    ["family", "daughter maria celeste children", "My daughter Virginia, Suor Maria Celeste. Her letters to me survive. She died soon after my trial.", "early.2|people.0"],
    ["work", "falling bodies pisa tower drop", "I showed that falling objects speed up evenly, by rolling balls down slopes and measuring.", "works.0"],
    ["myth", "eppur si muove yet it moves", "And yet it moves? People say I muttered that after my trial. There is no record from the time that I did.", "[\"myth\",\"The words 'and yet it moves' are first reported more than a century after the trial. There is no evidence Galileo said them.\"]"],
    ["people", "kepler", "Kepler and I wrote to each other about Copernicus and the telescope. He supported my discoveries.", "conn:kepler|people.2"],
    ["people", "copernicus sun centre", "I championed Copernicus's view that the Earth goes around the Sun, and I was tried for it.", "conn:copernicus"]
  ]
},

"newton": {
  hi: "Yes? Be brief, I am in the middle of a calculation.",
  how: "Occupied. Always occupied. Ask your question.",
  bye: "Good day.",
  lines: [
    ["who", "who are you introduce yourself", "Isaac Newton. I showed that white light is made of colours, invented calculus, and set out the laws of motion and gravitation in my Principia.", "short.1"],
    ["early", "born birth childhood young father mother woolsthorpe", "I was born on Christmas Day 1642, by the old calendar, at Woolsthorpe. My father died three months before. I was so small my mother said I could have fitted in a quart pot.", "short.0|early.0"],
    ["death", "die died death dead end westminster how", "I died in 1727 and was buried in Westminster Abbey.", "short.2"],
    ["myth", "apple tree fall head gravity", "The apple? A falling apple did set me thinking about gravity, by my own account. That it hit me on the head is a later joke.", "turns.0|myth:newton-apple"],
    ["work", "laws motion three", "Three laws: a thing keeps moving unless a force acts, force is mass times acceleration, and every action has an equal and opposite reaction.", "works.0"],
    ["work", "principia halley gravity 1687", "Halley asked me what path a planet would follow under a force falling off with the square of the distance. An ellipse, I said. That became the Principia, in 1687.", "turns.3|turns.4|conn:halley"],
    ["people", "leibniz calculus who first", "Leibniz. He invented calculus separately and published first. As President of the Royal Society I saw to it that a report accused him of plagiarism. I was judge in my own case, I admit.", "people.2|conn:leibniz"],
    ["people", "hooke robert", "Hooke claimed the inverse square law was his. I struck his name out of the Principia.", "people.1|conn:hooke"],
    ["life", "mint money counterfeiters coins", "In London I ran the Royal Mint, recoined the country's money, and hunted counterfeiters myself. Some were hanged.", "turns.5"],
    ["life", "alchemy prophecy religion trinity", "I wrote over a million words on alchemy and the prophecies of Daniel. And privately I rejected the Trinity, which could have cost me my post.", "works.4"]
  ]
},

"elizabeth-i": {
  hi: "You may approach. Speak plainly; I have little patience for flattery today.",
  how: "We are well, and England is well, which is what matters.",
  bye: "You may go. We have reigned with our people's loves, and that is enough.",
  lines: [
    ["life", "ireland irish conquest", "Ireland. My armies conquered it, brutally, and in my last years it grew bloodier still. Historians now count the devastation of Ireland against me, and they are right to.", "short.2|turns.6|legacy.2"],
    ["who", "who are you introduce yourself", "Elizabeth, by the grace of God Queen of England. Daughter of Henry VIII and Anne Boleyn. I came to the throne at 25 and never married.", "short.0|short.1"],
    ["early", "born birth childhood young mother anne boleyn", "I was born at Greenwich on 7 September 1533. When I was two, my mother was executed on charges most historians think false.", "early.0"],
    ["life", "tower london prison mary sister", "Under my sister Mary I was held in the Tower for two months, suspected of plotting. I expected to die there.", "early.2"],
    ["death", "die died death dead end how", "I died on 24 March 1603, at 69, after a hard last decade: war with Spain, failed harvests, a bloodier conquest of Ireland, and the Earl of Essex's rebellion.", "turns.6"],
    ["love", "marry married marriage husband suitors dudley virgin queen", "Parliament begged me to marry. Philip of Spain, Archduke Charles, the Duke of Anjou: all asked. Robert Dudley was my favourite. I kept his last letter by my bed.", "turns.2|people.1"],
    ["life", "armada spain spanish 1588", "In 1588 Philip sent his Armada. Our fireships broke their line off Calais, and the storms did the rest.", "turns.5"],
    ["life", "mary queen scots execution cousin", "My cousin Mary, Queen of Scots, was my prisoner for 19 years and the centre of plots against my life. I had her executed in 1587. We never met.", "turns.4|people.3"],
    ["life", "catholics persecution executed", "About 180 Catholics were executed in my reign as suspected traitors. The record counts that, and so should you.", "turns.3|short.2"],
    ["family", "father henry viii", "Henry VIII was my father.", "conn:henry-viii"],
    ["people", "shakespeare plays", "Master Shakespeare's company played for me at court.", "conn:shakespeare"]
  ]
},

"michelangelo": {
  hi: "What is it? I'm working. Well, sit, then.",
  how: "My back aches from that ceiling still. Otherwise, the stone and I get along.",
  bye: "Go with God. I have marble waiting.",
  lines: [
    ["early", "teacher teachers apprentice apprenticed ghirlandaio medici lorenzo garden trained training", "At 13 I was apprenticed to the painter Ghirlandaio. Soon after, I joined the sculpture school in Lorenzo de' Medici's garden and lived in his household, eating at his table.", "early.2|people.0"],
    ["who", "who are you introduce yourself", "Michelangelo Buonarroti. A sculptor, before anything. Popes made me a painter and an architect as well.", "short.0"],
    ["early", "born birth childhood young nurse stonecutter", "I was born at Caprese on 6 March 1475. My mother died when I was six. I was nursed by a stonecutter's wife, so I drank in the hammer and chisel with her milk.", "early.0|early.1"],
    ["early", "nose broken torrigiano punch", "My nose? A fellow student, Torrigiano, punched me during an argument and broke it. It stayed flat for life.", "early.3"],
    ["death", "die died death dead end how", "I died in Rome in 1564, at 88, still chief architect of St Peter's. Days before, I was carving the Rondanini Pietà.", "short.2|works.0"],
    ["work", "david statue marble", "David, 1501 to 1504. They gave me a tall block that two other sculptors had started and abandoned. I found him in it.", "turns.1"],
    ["work", "sistine chapel ceiling paint painted", "Pope Julius made me paint the Sistine ceiling, about 500 square metres, though I told him I was a sculptor. Four years, 1508 to 1512.", "turns.3"],
    ["work", "pieta signed signature", "The Pietà in St Peter's, carved when I was about 23. It is the only work I ever signed, on the strap across Mary's chest.", "turns.0"],
    ["people", "leonardo rival", "Leonardo. Twenty-three years older than me. Florence had us paint battle scenes in the same hall. Neither was finished, and people said we scorned each other.", "people.2|conn:leonardo"],
    ["work", "dome st peter basilica architect", "At 71 I became chief architect of the new St Peter's and redesigned its dome. I refused payment.", "turns.6"]
  ]
},

"kahlo": {
  hi: "Hola! Come in, come into the Blue House. Mind the monkey.",
  how: "My back hurts, as always. But I am painting, so I am alive.",
  bye: "Adiós. Viva la vida!",
  lines: [
    ["who", "who are you introduce yourself", "Frida Kahlo, from Coyoacán, from the Blue House. I paint myself, my body and my life, because I am the subject I know best.", "short.0|works.0"],
    ["early", "born birth childhood young polio 1910", "I was born on 6 July 1907, though I liked to say 1910, the year of the Revolution. Polio at six left my right leg thinner. So, long skirts.", "early.0|early.2"],
    ["life", "accident bus tram crash injury", "On 17 September 1925 my bus hit a tram. A handrail went through my pelvis; my spine, ribs and leg were broken. I was 18, and the pain never really left.", "turns.0|short.1"],
    ["work", "painting start began bed mirror", "I started painting in bed, in a plaster corset, with a mirror fixed above me.", "turns.1"],
    ["love", "diego rivera husband married marriage divorce", "Diego. I married him in 1929, divorced him in 1939, and married him again in 1940. He had affairs, even with my sister. So did I.", "turns.2|turns.5|conn:rivera"],
    ["work", "two fridas", "The Two Fridas, 1939: one in European dress, one in Tehuana dress, holding hands, our hearts joined by a vein. I painted it the year of the divorce.", "works.1|work:two-fridas"],
    ["death", "die died death dead end leg amputated how", "In my last years I had operation after operation, and in 1953 they took my right leg below the knee. I died the next year, at 47.", "turns.6|short.2"],
    ["people", "trotsky", "Trotsky lived in my Blue House from 1937 to 1939.", "conn:trotsky|people.1"],
    ["people", "picasso earrings paris", "In Paris in 1939 Picasso admired my work and gave me a pair of earrings.", "conn:picasso"]
  ]
},

"tubman": {
  hi: "Evening. Keep your voice low, now. Sit with me.",
  how: "Tired, child, but my feet still work, and the Lord still talks to me.",
  bye: "Go on, now. Keep going. Don't ever stop.",
  lines: [
    ["who", "who are you introduce yourself", "Harriet Tubman. Born Araminta Ross, enslaved in Maryland. I got myself free, and then I went back for others.", "short.0|short.1"],
    ["early", "born birth childhood young maryland sisters sold", "I was born into slavery in Dorchester County, Maryland, around 1822. Three of my sisters were sold away to the Deep South, and we never saw them again.", "short.0|early.0|early.1"],
    ["life", "head injury weight seizures visions", "As a girl an overseer threw a two-pound iron weight at another man and it hit me in the head. All my life after, I had seizures and visions.", "early.3"],
    ["life", "escape escaped free freedom 1849 philadelphia", "In the autumn of 1849 I set out alone and walked about 90 miles to Pennsylvania, mostly at night. They put up a reward for Minty.", "turns.0|turns.1"],
    ["work", "underground railroad rescues people saved lost passenger", "I went back about 13 times and brought out about 70 people, and gave directions to about 70 more. I never ran my train off the track, and I never lost a passenger.", "short.1|works.2"],
    ["work", "plan how signals songs spirituals saturday", "I left on Saturday nights, because they couldn't print the runaway notices until Monday. And we used songs as signals.", "works.0"],
    ["life", "civil war spy scout combahee raid", "In the war I nursed, scouted and spied for the Union, and I helped lead the raid up the Combahee River on 2 June 1863.", "turns.7|turns.8|short.2"],
    ["death", "die died death dead end auburn old how", "I spent my last years in Auburn, New York, caring for the poor and old, and I died there in 1913.", "short.2|works.4"],
    ["love", "husband john tubman married", "I married John Tubman, a free man, around 1844. When I went back for him in 1851, he had taken another wife and would not come.", "early.4|turns.3"],
    ["people", "douglass frederick", "Frederick Douglass wrote to me in 1868 that, apart from John Brown, he knew nobody who had faced more danger to serve our people.", "people.2|conn:douglass"],
    ["people", "john brown general", "John Brown called me General Tubman. I was ill when he made his raid on Harpers Ferry, and I wasn't there.", "turns.6"]
  ]
},

"julius-caesar": {
  hi: "Salve. Speak, citizen. Caesar is listening.",
  how: "Caesar is well. Caesar is always well.",
  bye: "Vale. And beware the Ides of March, though I did not.",
  lines: [
    ["life", "gauls killed kill enslaved slaves gallic war dead massacre", "My war in Gaul killed and enslaved huge numbers. Writers in my time claimed a million dead and a million enslaved. Nobody can trust those figures, but the destruction was immense, and it was mine.", "world.1"],
    ["who", "who are you introduce yourself", "Gaius Julius Caesar. I conquered Gaul, crossed the Rubicon, won a civil war and became dictator of Rome.", "short.1|short.2"],
    ["early", "born birth childhood young family venus", "I was born in Rome in July 100 BC, into an old family with little money. We claimed descent from Venus.", "short.0|early.0"],
    ["life", "pirates captured ransom", "Around 75 BC pirates captured me. So the story goes: when they asked 20 talents ransom, I laughed, told them to ask 50, and joked that I would crucify them. After I was freed, I caught them and did.", "early.2"],
    ["death", "die died death dead end ides march brutus stabbed killed how", "On the Ides of March, 44 BC, senators led by Brutus and Cassius stabbed me 23 times at a meeting in Pompey's theatre. I fell at the foot of Pompey's statue.", "turns.6|short.2"],
    ["people", "brutus et tu", "Brutus. I had pardoned him and favoured him, and he helped kill me.", "people.4"],
    ["life", "rubicon die cast civil war", "In January 49 BC the Senate ordered me to give up my army. I crossed the Rubicon into Italy with my troops, which was treason. The die is cast, I reportedly said.", "turns.3"],
    ["life", "gaul gallic war vercingetorix", "From 58 to 50 BC I conquered Gaul, crossed the Rhine and landed twice in Britain. I wrote it all down myself, in the third person.", "turns.2|works.0"],
    ["work", "calendar july julian leap", "The calendar you use is mine: 365 days and a leap day, worked out with Sosigenes of Alexandria. And July is named after me.", "works.1|works.2"],
    ["people", "cleopatra", "Cleopatra. I took her side in Egypt's royal war, and she bore a son she said was mine.", "people.2|conn:cleopatra"],
    ["people", "pompey", "Pompey the Great: my ally, my son-in-law, and then my enemy.", "people.0"],
    ["family", "octavian augustus heir adopted", "I adopted my great-nephew Octavian in my will as my son and heir.", "people.5|conn:augustus"]
  ]
},

"genghis-khan": {
  hi: "You have come a long way across the steppe. Sit by the fire and speak.",
  how: "The horses are fat and the herds are well. So I am well.",
  bye: "Ride safely.",
  lines: [
    ["who", "who are you introduce yourself", "Temüjin, son of Yesügei. In 1206 the assembly named me Chinggis Khan, ruler of all the people of the felt tents.", "short.0|short.1|turns.3"],
    ["early", "born birth childhood young father poisoned", "I was born on the steppe, around 1162, though nobody wrote it down for certain. When I was about nine, Tatars poisoned my father, and our clan abandoned us. We lived on fish and roots.", "early.0|early.2"],
    ["life", "captured collar escape", "A rival clan once held me with a wooden collar locked around my neck. I escaped at night, and a family hid me in a cart of wool.", "early.4"],
    ["death", "die died death dead end how", "I died in August 1227, on campaign against the Western Xia. How I died is not known, and I will not tell you a story about it.", "turns.6"],
    ["life", "massacre killed cities destroyed war cruelty violence khwarazm", "Cities that resisted me were destroyed and many of their people killed. At Khwarazm, after they murdered my merchants, I invaded, and Bukhara, Samarkand and Merv fell. The record counts the dead, and the record is right to.", "turns.5|short.2"],
    ["love", "borte wife married", "Börte, my first wife. Raiders carried her off soon after we married, and I won her back. She bore my four heirs, and I listened to her.", "turns.0|people.0"],
    ["work", "army units organised tens thousands", "My army was built in units of ten, a hundred, a thousand and ten thousand. I broke up the old tribes and mixed their men, so they were loyal to me.", "works.0"],
    ["work", "alphabet writing script uyghur", "Around 1204 a captured Uyghur scribe taught my sons to write Mongolian in his script.", "works.2"],
    ["people", "jamukha blood brother", "Jamukha, my blood brother, then my rival. In 1205 his own men handed him over, and I had him executed.", "people.1|turns.2"],
    ["family", "kublai grandson sons", "My sons and grandsons carried the empire from Korea to Hungary. Kublai was my grandson.", "short.2|conn:kublai-khan"]
  ]
}

});
