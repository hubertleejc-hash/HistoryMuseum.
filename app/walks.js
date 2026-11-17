/* Walks through real pictures: each stop is a real public-domain picture gathered by tools/scenes/scenes.py
   (credits in app/img/scenes/credits.json). "look" sums up what the place looked like that year; each stop's
   spots point only at things that can be seen in that picture, with how we know.
   x and y are fractions of the picture (0 to 1); fx/fy say which part of the picture to keep on a narrow screen. */
window.HISTORY.walks = {
"paris-1889": {y:1889, tol:12, c:"france", place:"Paris",
  look:[
    ["Buildings", "Long boulevards of cream limestone apartment blocks, five or six floors high, with iron balconies and grey zinc roofs. Baron Haussmann had rebuilt much of the city in the 1850s and 1860s. The Eiffel Tower was brand new, finished in March 1889 for the World's Fair."],
    ["Clothing", "Men in dark coats with top hats or bowler hats, most with a moustache or beard. Women in long skirts, often with a bustle at the back, fitted jackets and small hats. Workers wore blue smocks and caps."],
    ["Getting around", "Horses everywhere: two-deck horse omnibuses with seats on the roof, cabs called fiacres, carts and horse trams. There were no cars on the streets yet, and no Métro until 1900."],
    ["Light at night", "Gas lamps along the streets. Electric light was the wonder of the 1889 World's Fair: its fountains glowed with coloured electric light, and the new tower was outlined in lights for evening parties."],
    ["Signs and posters", "Shop names painted across whole facades, blue enamel street-name plates, and round Morris columns covered in theatre posters."]
  ],
  stops:[
    {pic:"paris-1889-1", name:"Boulevard Saint-Denis, by the old city gate", kind:"photograph", made:"Photographed about 1889", fx:.42,
      title:"Boulevard and Porte Saint-Denis", spots:[
      {x:.22, y:.84, t:"A horse omnibus", d:"A big public coach pulled by two or three horses, with cheaper seats up on the roof. This was how most Parisians crossed the city in 1889.", how:"You can see the passengers sitting on top. Paris counted its omnibus travellers every year in this period."},
      {x:.42, y:.42, t:"The Porte Saint-Denis", d:"A triumphal gate built in 1672 to celebrate the victories of King Louis XIV. In 1889 it was already over 200 years old, and it still stands today.", how:"It is the same arch you can visit now, on the same boulevard."},
      {x:.18, y:.33, t:"A new apartment block", d:"Cream stone, iron balconies running along whole floors, and a grey roof with little windows. Paris was rebuilt in this style in the 1850s and 1860s.", how:"This style is called Haussmann's Paris, after the official who ordered the rebuilding."},
      {x:.51, y:.66, t:"A street lamp", d:"Lamps like this burned gas, lit one by one every evening by lamplighters.", how:"Electric street lighting was only starting; most of Paris was still lit by gas in 1889."},
      {x:.63, y:.79, t:"Top hats and bowlers", d:"Almost every man wears a hat: tall silk top hats for the well-off, round bowler hats for many others. Going out bareheaded was unusual.", how:"Count the hats in the crowd: there is hardly a bare head."}]},
    {pic:"paris-1889-2", name:"Boulevard des Capucines, outside the Vaudeville theatre", kind:"painting", made:"Painted in 1889", fx:.55,
      title:"The Boulevard des Capucines and the Théâtre du Vaudeville", note:"A painting, so the colours are the painter's, but Béraud was known for showing Paris streets exactly as they looked.", spots:[
      {x:.52, y:.62, t:"Red army trousers", d:"French soldiers wore bright red wool trousers. They stayed red until 1915, when the First World War showed they were far too easy to see.", how:"The red came from madder dye; the army changed to grey-blue during the First World War."},
      {x:.26, y:.36, t:"A poster column", d:"Round columns with a little dome, covered in posters for plays and concerts. Paris put them up from 1868, and some still stand.", how:"They are called Morris columns, after the printer who held the right to use them."},
      {x:.79, y:.2, t:"The Théâtre du Vaudeville", d:"A theatre for comedies and light plays, rebuilt here on the new boulevard in 1868. In 1927 it became a cinema.", how:"Its name is written over the door."},
      {x:.76, y:.78, t:"A long skirt and fitted jacket", d:"Women wore skirts down to the ground, tight jackets, gloves and small hats. Skirts swept the wet pavement.", how:"Paintings and fashion magazines of 1889 show the same shapes."},
      {x:.89, y:.4, t:"A private carriage", d:"A coachman in a top hat waits with a carriage. Rich families kept their own; everyone else hired a cab called a fiacre.", how:"There were no cars here yet: petrol cars only began to appear on Paris roads in the early 1890s."}]},
    {pic:"paris-1889-3", name:"Under the Eiffel Tower, at the World's Fair", kind:"photograph", made:"Photographed in 1889", fx:.5,
      title:"The Central Dome seen through the base of the Eiffel Tower", spots:[
      {x:.5, y:.03, t:"72 names in gold", d:"Around the first floor, Gustave Eiffel had the names of 72 French scientists and engineers written in big letters.", how:"The names are still there today, all the way around the tower."},
      {x:.5, y:.22, t:"Brand-new iron", d:"The tower was finished in March 1889 for this fair. At 300 metres it was the tallest thing people had ever built, and many Parisians thought it ugly.", how:"Building records: it took just over two years and about 18,000 iron parts."},
      {x:.51, y:.56, t:"The Central Dome", d:"The grand entrance to the fair's exhibition halls, built for 1889 and pulled down later. Inside were machines, art and goods from all over the world.", how:"This and other photographs of the 1889 fair, now in the Library of Congress."},
      {x:.52, y:.79, t:"A chair on wheels", d:"Tired visitors could hire a rolling chair, pushed by an attendant, to get around the huge fairground.", how:"You can see one in the middle of the crowd."},
      {x:.34, y:.92, t:"Dressed up for the fair", d:"Visitors came in their best: dark suits, hats, long dresses and parasols against the sun.", how:"Over 30 million visits were counted at the fair that year."}]},
    {pic:"paris-1889-4", name:"Night at the fair, under the tower", kind:"painting", made:"Painted in 1889", fx:.5,
      title:"Night party at the World's Fair of 1889, under the Eiffel Tower", note:"A painting, so the light is the painter's view of what he saw.", spots:[
      {x:.53, y:.7, t:"Fountains of light", d:"The fountains were lit from below with electric light shining through coloured glass. Crowds came every evening to watch them change colour.", how:"The luminous fountains were one of the most famous sights of the 1889 fair."},
      {x:.33, y:.42, t:"Lights along the tower", d:"Rows of small flames outline the arch. The tower was lit up for the fair's evening parties.", how:"Painted by someone who was there, the same year."},
      {x:.47, y:.55, t:"The Central Dome at night", d:"The same dome you saw in daylight, now glowing. Electric light at night was still a wonder for most visitors.", how:"Compare it with the photograph before this one."},
      {x:.3, y:.88, t:"An evening crowd", d:"Men in top hats and women in hats with flowers and feathers. A night out at the fair was the event of the year.", how:"The fair stayed open late on party nights."}]}
  ]},
"florence-1505": {y:1505, tol:15, c:"italy", place:"Florence",
  look:[
    ["Buildings", "Stone palaces with rough, heavy blocks on the ground floor, towers of older family houses, and Brunelleschi's great dome over the cathedral, finished in 1436. The tower of the Palazzo Vecchio rose over the main square."],
    ["Clothing", "Citizens wore a long wool gown, often dark red or black, with a round cap. Young men wore short doublets and tight hose. Women wore long high-waisted gowns with sleeves that could be tied on and changed."],
    ["Getting around", "On foot through narrow paved streets. Mules and horses carried riders and goods. Four bridges crossed the Arno, and the Ponte Vecchio was lined with shops."],
    ["Light at night", "Almost dark. There were no street lamps: people carried torches or lanterns, and a bell rang the evening curfew."],
    ["News in the square", "In 1504 Michelangelo's marble David was set up outside the Palazzo Vecchio, and inside it Leonardo and Michelangelo were both painting giant battle scenes for the council hall."]
  ],
  stops:[
    {pic:"florence-1505-1", name:"Florence from the hills", kind:"painting", made:"Painted in 1887, copying a print of about 1480", fx:.5,
      title:"The \"Chain Map\" of Florence", note:"This colour copy was made in the 1800s from a famous print of Florence made about 25 years before 1505. It is the best picture we have of the whole city then.", spots:[
      {x:.505, y:.3, t:"Brunelleschi's dome", d:"The cathedral's huge brick dome, finished in 1436. It was the largest dome in the world, and it still is the largest made of brick.", how:"It towers over everything in every view of Florence from this time."},
      {x:.14, y:.45, t:"The city walls", d:"Florence was closed in by high walls with towers and gates, shut at night.", how:"Most of the walls were pulled down in the 1860s, but some gates still stand."},
      {x:.66, y:.52, t:"Bridges over the Arno", d:"Four bridges crossed the river. The Ponte Vecchio, the oldest, was lined with shops.", how:"You can count the bridges on this view."},
      {x:.2, y:.88, t:"Life on the river", d:"People fish, bathe and row boats on the Arno, which also carried goods and turned mills.", how:"The mapmaker drew everyday life along the bank."},
      {x:.9, y:.85, t:"The artist at work", d:"In the corner, the artist sits on the hill drawing the city.", how:"Artists of the time sometimes put themselves into their views like this."}]},
    {pic:"florence-1505-3", name:"Piazza Santa Trinita, by the river", kind:"painting", made:"Painted about 1483 to 1485", fx:.3,
      title:"The Resurrection of the Boy (detail), Sassetti Chapel", note:"A wall painting in the church of Santa Trinita. The story is a legend, but Ghirlandaio set it in the real square outside the church and painted real Florentines of his day watching.", spots:[
      {x:.15, y:.25, t:"Palazzo Spini", d:"A fortress-like stone palace built around 1290 for a rich banking family. In 1505 it was already 200 years old. It still stands on the same corner.", how:"The painter put the real building into the background, and you can compare it today."},
      {x:.52, y:.23, t:"Wooden canopies", d:"Small roofs over doors and windows kept rain off shoppers and goods. Streets were narrow and shaded.", how:"Florentine painters often show these canopies on houses."},
      {x:.16, y:.62, t:"Red gowns and round caps", d:"Grown citizens wore a long gown with a round cap. Red cloth was costly and showed rank.", how:"These men are portraits of real Florentines of the 1480s."},
      {x:.3, y:.76, t:"Sleeves tied on", d:"Young women wore long gowns with separate sleeves, laced on so the white shirt puffed out between. Unmarried girls wore their hair loose.", how:"Look at the laces at the shoulder and elbow of the girl in blue."},
      {x:.9, y:.42, t:"A rider in the square", d:"Horses and mules were the fastest way to travel. Wheeled carriages were rare in city streets.", how:"In the distance a man rides across the square."}]},
    {pic:"florence-1505-2", name:"Piazza della Signoria, the main square", kind:"painting", made:"Painted about 1498", fx:.55,
      title:"Piazza della Signoria in 1498 (detail)", note:"A detail of a painting of the friar Savonarola's execution in this square. This part leaves the execution out and shows the square and its people.", spots:[
      {x:.76, y:.2, t:"Where David would stand", d:"A bronze statue stood here by the palace door. In 1504 Michelangelo's marble David was set up in this spot, and Florentines came to stare at it.", how:"City records describe moving the David to the palace door in 1504."},
      {x:.16, y:.25, t:"The lion of Florence", d:"A stone lion holding the city's shield, called the Marzocco. It was the symbol of the free city.", how:"Donatello carved the Marzocco in about 1420; a copy stands in the square today."},
      {x:.45, y:.27, t:"The city's rulers", d:"On the raised platform in front of the palace stand the city's officials, in long red and black gowns.", how:"The Palazzo Vecchio was the seat of the government of Florence."},
      {x:.37, y:.8, t:"Gowns and caps", d:"Grown men wear long wool gowns and round caps. The young man next to them wears a short tunic, tight coloured hose and a sword.", how:"Florentine paintings and laws about clothing of the time describe the same dress."},
      {x:.18, y:.8, t:"Writing on the picture", d:"The words say the friar died here on 23 May. This is how we know which day the painting shows.", how:"Savonarola was executed in this square on 23 May 1498."}]}
  ]},
"london-1851": {y:1851, tol:8, c:"uk", place:"London",
  look:[
    ["Buildings", "Brick terraces and grand stone streets like Regent Street, built in the 1810s and 1820s. For the Great Exhibition a giant hall of iron and glass, the Crystal Palace, went up in Hyde Park in a few months."],
    ["Clothing", "Men in dark frock coats and tall top hats. Women in wide, bell-shaped skirts over layers of petticoats, with shawls and bonnets. Poor workers wore patched coats and caps."],
    ["Getting around", "Horse buses, two-wheeled hansom cabs, carts and a lot of walking. Railways had spread across Britain in the 1840s; the first Underground line opened only in 1863."],
    ["Light at night", "Gas lamps on the main streets. At home people used candles and oil lamps."],
    ["Street life", "Sellers everywhere: coffee stalls, pie men, flower girls. With about 2.3 million people, London was the biggest city in the world."]
  ],
  stops:[
    {pic:"london-1851-1", name:"Regent Street", kind:"photograph", made:"Photographed between about 1850 and 1880", fx:.35,
      title:"Regent Street, looking towards the Duke of York Column", note:"Half of a stereo photograph. Its museum dates it only roughly, so it may be some years after 1851.", spots:[
      {x:.55, y:.47, t:"The Duke of York Column", d:"A tall column in memory of a son of King George III, finished in 1834.", how:"It still stands at the end of Waterloo Place."},
      {x:.13, y:.4, t:"A grand shopping street", d:"Regent Street was planned by the architect John Nash as a smart street of shops with columns and stone fronts.", how:"Most of these buildings were replaced in the 1920s, so photographs are how we know them."},
      {x:.62, y:.79, t:"A hansom cab", d:"A light two-wheeled cab. The driver sat high up at the back, and the passenger rode in front, out of the mud.", how:"Joseph Hansom patented the design in 1834."},
      {x:.46, y:.66, t:"Gas lamps", d:"Lamp posts burned coal gas piped under the street, and lamplighters lit them every evening.", how:"London's streets had been lit by gas since the 1810s."}]},
    {pic:"london-1851-2", name:"A coffee stall before dawn", kind:"print", made:"Printed in 1851, copied from a photograph", fx:.5,
      title:"The London Coffee-stall", note:"An engraving from Henry Mayhew's book London Labour and the London Poor. Photographs could not yet be printed in books, so an engraver copied one by hand.", spots:[
      {x:.45, y:.47, t:"Hot coffee on wheels", d:"Before dawn, coffee stalls served workers on their way to work: a cup of coffee and a slice of bread for a penny or two.", how:"Mayhew interviewed coffee-stall keepers for his 1851 book about London's street people."},
      {x:.6, y:.37, t:"A battered top hat", d:"Even working men wore top hats, often old and second-hand.", how:"You can see top hats on rich and poor alike in London pictures of the 1850s."},
      {x:.87, y:.48, t:"A shawl and bonnet", d:"Working women wrapped up in a big wool shawl, with a bonnet tied under the chin.", how:"The engraving was copied from a real photograph."},
      {x:.5, y:.93, t:"From a photograph", d:"The words under the picture say it was copied from a daguerreotype, an early kind of photograph, made by Richard Beard.", how:"Beard opened London's first photography studio in 1841."}]},
    {pic:"london-1851-3", name:"The Crystal Palace in Hyde Park", kind:"photograph", made:"Photographed in 1851", fx:.6,
      title:"The Great Exhibition building, north-west corner", spots:[
      {x:.6, y:.42, t:"Iron and glass", d:"The Crystal Palace was put together from mass-made iron parts and about 300,000 panes of glass, in around five months.", how:"It was designed by Joseph Paxton, who had built giant greenhouses."},
      {x:.6, y:.17, t:"Flags along the roof", d:"Flags for the countries that sent their inventions, machines and art. More than six million visits were counted.", how:"The official records of the Exhibition."},
      {x:.25, y:.85, t:"One of the first photographs", d:"This picture was taken by William Henry Fox Talbot, one of the inventors of photography.", how:"Talbot announced his way of making photographs on paper in 1839."}]},
    {pic:"london-1851-4", name:"Opening day, 1 May 1851", kind:"painting", made:"Painted in 1851", fx:.55,
      title:"The opening of the Great Exhibition, 1 May 1851", note:"A watercolour by an artist who drew the event, so the colours are his.", spots:[
      {x:.6, y:.62, t:"The Queen opens the fair", d:"Queen Victoria and Prince Albert opened the Great Exhibition. Albert had helped to plan it.", how:"Victoria wrote in her diary that it was one of the greatest and most glorious days of their lives."},
      {x:.18, y:.6, t:"The Crystal Fountain", d:"A fountain made of pink and clear glass, about 8 metres high, stood at the centre of the hall.", how:"It was made by the glassmakers F. and C. Osler of Birmingham."},
      {x:.6, y:.3, t:"Trees indoors", d:"The hall was built right over full-grown elm trees in Hyde Park, so they stood inside the glass.", how:"That is why the middle of the building had a tall curved roof."},
      {x:.5, y:.93, t:"Bonnets and wide skirts", d:"Women in their best: bonnets, shawls and huge skirts. Men in dark coats.", how:"The painter was there to record the day."}]}
  ]},
"vienna-1791": {y:1791, tol:8, c:"austria", place:"Vienna",
  look:[
    ["Buildings", "A city inside walls, packed with tall stone houses, baroque churches and palaces, with the spire of St Stephen's Cathedral above everything. Outside the walls lay a wide open strip, then the suburbs."],
    ["Clothing", "Men in knee breeches, long coats, three-cornered hats and powdered or tied-back hair. Women in long full gowns, with tall hairstyles and hats."],
    ["Getting around", "On foot, in sedan chairs carried by two men, in private carriages or in hired cabs called Fiaker."],
    ["Light at night", "Oil lamps on posts and house walls. Vienna had public street lamps from the late 1600s."],
    ["Music in the air", "Mozart's opera The Magic Flute opened in a theatre just outside the walls in September 1791, and he died in Vienna that December."]
  ],
  stops:[
    {pic:"vienna-1791-1", name:"Vienna from the Belvedere palace", kind:"painting", made:"Painted between 1758 and 1761", fx:.25,
      title:"Vienna seen from the Belvedere", note:"About 30 years before 1791, but the skyline barely changed in that time.", spots:[
      {x:.205, y:.12, t:"St Stephen's Cathedral", d:"The cathedral's south tower is 136 metres tall. It was finished in 1433 and was the city's landmark for centuries.", how:"It still stands at the heart of Vienna."},
      {x:.45, y:.5, t:"A prince's garden", d:"The Belvedere gardens were laid out in the 1710s and 1720s for Prince Eugene of Savoy, a famous general.", how:"The gardens and both palaces can be visited today."},
      {x:.33, y:.8, t:"Strolling in the garden", d:"Elegant visitors walk the paths in long coats, gowns and hats.", how:"Bellotto painted Vienna for the empress Maria Theresa, with great attention to detail."}]},
    {pic:"vienna-1791-2", name:"The Kohlmarkt", kind:"print", made:"Printed in 1786", fx:.45,
      title:"The Kohlmarkt in Vienna", note:"A hand-coloured engraving made five years before 1791.", spots:[
      {x:.5, y:.4, t:"Charcoal Market", d:"The street's name means charcoal market. By the 1780s it was one of the smartest shopping streets, close to the emperor's palace.", how:"The Kohlmarkt is still a luxury shopping street."},
      {x:.15, y:.85, t:"Shops at street level", d:"Shops filled the ground floors, with signs and awnings over the windows. Families lived on the floors above.", how:"Schütz drew the real buildings, many of which still stand."},
      {x:.6, y:.62, t:"Carriages in the street", d:"Coaches and cabs squeezed through narrow streets among people on foot.", how:"Vienna's hired cabs, the Fiaker, had run since the late 1600s."},
      {x:.55, y:.88, t:"Three-cornered hats", d:"Men wore three-cornered hats, long coats and knee breeches. Women wore wide gowns.", how:"Fashion prints of the 1780s show the same style."}]},
    {pic:"vienna-1791-3", name:"Michaelerplatz, by the palace", kind:"print", made:"Printed in the late 1700s", fx:.6,
      title:"Michaelerplatz in Vienna", spots:[
      {x:.08, y:.3, t:"St Michael's Church", d:"The church that gave the square its name, once the parish of the imperial court.", how:"It still stands on the square."},
      {x:.75, y:.5, t:"The palace and the court theatre", d:"The emperor's palace, the Hofburg, rose here, and beside it stood the court theatre, the Burgtheater. Mozart's The Marriage of Figaro had its first performance there in 1786.", how:"The old Burgtheater on this square was pulled down in 1888."},
      {x:.62, y:.63, t:"A carriage arrives", d:"Carriages brought nobles to the palace and the theatre.", how:"Schütz drew the traffic of the square as well as its buildings."}]},
    {pic:"vienna-1791-4", name:"The Hoher Markt", kind:"print", made:"Printed in 1793", fx:.55,
      title:"The Hoher Markt in Vienna", spots:[
      {x:.57, y:.4, t:"The Wedding Fountain", d:"A tall baroque fountain showing the wedding of Mary and Joseph, finished in 1732.", how:"It still stands in the square."},
      {x:.36, y:.7, t:"Vienna's oldest square", d:"A market since the Middle Ages. Under it lie the ruins of the Roman fort of Vindobona.", how:"Archaeologists found the Roman buildings beneath the square."},
      {x:.75, y:.88, t:"Fashion of the 1790s", d:"Long coats, hats and full gowns, with children and dogs out in the square.", how:"Printed only two years after 1791."}]}
  ]},
"edo-1831": {y:1831, tol:6, c:"japan", place:"Edo (Tokyo)",
  look:[
    ["Buildings", "Low wooden houses and shops with tiled roofs, and rows of white fireproof storehouses along the canals. The shogun's castle stood at the centre."],
    ["Clothing", "Everyone wore kimono. Samurai carried two swords; townspeople wore cotton kimono with straw sandals or wooden clogs, and straw hats against sun and rain."],
    ["Getting around", "On foot over hundreds of bridges, by boat along the canals, or carried in a small palanquin. Wheeled carriages for people were almost unknown."],
    ["Light at night", "Paper lanterns at doors and shops, and a hand lantern for anyone walking after dark."],
    ["City life", "About a million people lived in Edo, one of the largest cities in the world. Japan was closed to almost all foreigners."]
  ],
  stops:[
    {pic:"edo-1831-1", name:"Nihonbashi, the heart of the city", kind:"woodblock print", made:"Printed about 1830", fx:.4,
      title:"Nihonbashi in Edo, from Thirty-six Views of Mount Fuji", note:"A colour woodblock print by Hokusai, the artist of The Great Wave.", spots:[
      {x:.32, y:.37, t:"The shogun's castle", d:"Edo Castle, home of the shogun, the military ruler of Japan.", how:"Its moats and walls still surround the Imperial Palace in Tokyo."},
      {x:.15, y:.31, t:"Mount Fuji", d:"Japan's sacred mountain, about 100 kilometres away, could be seen from the city on clear days.", how:"Hokusai put Fuji into every picture in this series."},
      {x:.2, y:.47, t:"Fireproof storehouses", d:"Merchants kept their goods in thick white plaster storehouses, because fires often swept through the wooden city.", how:"Edo had so many great fires that people called them the flowers of Edo."},
      {x:.6, y:.62, t:"Boats on the canal", d:"Rice, fish, wood and other goods came into the city by boat.", how:"Canals linked the bay to the markets."}]},
    {pic:"edo-1831-2", name:"The Mitsui shop at Surugachō", kind:"woodblock print", made:"Printed about 1830", fx:.45,
      title:"Mitsui shop at Surugachō in Edo", spots:[
      {x:.87, y:.2, t:"Roofers at work", d:"Workmen repair the tiled roof of the shop.", how:"Hokusai loved to show people at work."},
      {x:.33, y:.12, t:"A kite in the sky", d:"Flying kites was a favourite pastime, especially around New Year.", how:"Kites appear in many Edo prints."},
      {x:.24, y:.85, t:"A famous shop", d:"This was Echigoya, the Mitsui family's cloth shop, where customers paid a fixed price in cash. It grew into the Mitsukoshi department store.", how:"Mitsukoshi still stands on the same spot in Tokyo."},
      {x:.5, y:.55, t:"Fuji between the roofs", d:"The street was laid out so Mount Fuji appeared at its end.", how:"Hokusai framed the mountain between the shop roofs."}]},
    {pic:"edo-1831-3", name:"Morning at Nihonbashi bridge", kind:"woodblock print", made:"Printed about 1833", fx:.5,
      title:"Nihonbashi: Morning View, from Fifty-three Stations of the Tōkaidō", note:"By Hiroshige, two years after 1831.", spots:[
      {x:.6, y:.4, t:"A lord's procession", d:"Every other year each lord had to travel to Edo with a long procession of servants. Here one sets out at dawn.", how:"This rule, called sankin-kōtai, lasted until 1862."},
      {x:.25, y:.12, t:"Standards held high", d:"The procession carries tall feathered standards to show whose lord is passing.", how:"Hiroshige drew the real gear of these processions."},
      {x:.17, y:.62, t:"Fish sellers", d:"Nihonbashi had Edo's fish market. Sellers carried fish in tubs hanging from a pole on their shoulders.", how:"The fish market stayed at Nihonbashi until 1923."},
      {x:.86, y:.4, t:"A neighbourhood gate", d:"Wooden gates closed off each neighbourhood at night.", how:"Guards opened them only for people with a good reason."}]},
    {pic:"edo-1831-4", name:"A sudden shower at Nihonbashi", kind:"woodblock print", made:"Printed 1833 to 1834", fx:.65,
      title:"Sunshower at Nihonbashi", spots:[
      {x:.66, y:.6, t:"Rain gear", d:"Straw raincoats, umbrellas of oiled paper and big straw hats kept people dry.", how:"Hiroshige was famous for his rain."},
      {x:.5, y:.5, t:"A wooden bridge", d:"Nihonbashi was a wooden arched bridge, rebuilt many times after fires.", how:"The stone bridge there today dates from 1911."},
      {x:.9, y:.5, t:"Boats waiting", d:"Boats crowd the river near the market.", how:"Goods for the markets came in by water."}]}
  ]},
"newyork-1905": {y:1905, tol:6, c:"usa", place:"New York",
  look:[
    ["Buildings", "The first skyscrapers: steel frames, elevators and 20 or more floors, like the Flatiron Building of 1902. Below them, brownstone houses and crowded brick tenements."],
    ["Clothing", "Men in suits with bowler hats or straw boaters. Women in long skirts, high-necked blouses and large hats."],
    ["Getting around", "Electric streetcars, trains on elevated tracks above the street, horse carts and cabs, and a few early cars. The first subway line opened in October 1904."],
    ["Light at night", "Electric signs and lights along Broadway, nicknamed the Great White Way. Many homes still used gas light."],
    ["Who lived there", "About four million people. Around a million immigrants a year were arriving in the United States, most through Ellis Island."]
  ],
  stops:[
    {pic:"newyork-1905-1", name:"Broadway, north from 39th Street", kind:"photograph", made:"Photographed in 1905", fx:.45,
      title:"Broadway, looking north from 39th Street", spots:[
      {x:.5, y:.3, t:"The Times Tower", d:"The new home of the New York Times. The square in front of it was renamed Times Square in 1904.", how:"The tower still stands, now covered in giant screens."},
      {x:.3, y:.85, t:"An electric streetcar", d:"Streetcars ran on rails in the road, powered by electricity.", how:"Most of New York's streetcars were gone by the 1950s."},
      {x:.15, y:.45, t:"The Metropolitan Opera House", d:"The old Met opera house stood on this block of Broadway from 1883 to 1966.", how:"Photographs like this are how we know it."},
      {x:.6, y:.82, t:"Crowds on the sidewalk", d:"Men in hats and women in long skirts on their way to shops and theatres.", how:"Count the hats: nearly everyone wears one."}]},
    {pic:"newyork-1905-2", name:"The Flatiron Building after a snowstorm", kind:"photograph", made:"Photographed about 1905", fx:.35,
      title:"Flatiron Building after a snowstorm", spots:[
      {x:.38, y:.3, t:"The Flatiron Building", d:"Finished in 1902, 22 floors on a steel frame. Its triangle shape fits the corner where Broadway crosses Fifth Avenue.", how:"It is still one of New York's most famous buildings."},
      {x:.86, y:.7, t:"Horse cabs in the snow", d:"Horses still pulled most cabs and wagons.", how:"There were far more horses than cars in New York in 1905."},
      {x:.22, y:.72, t:"Walking through the snow", d:"After a storm, people walked in paths cut through the drifts in Madison Square.", how:"The photograph was taken right after the snow."}]},
    {pic:"newyork-1905-3", name:"Herald Square and Macy's", kind:"photograph", made:"Photographed in 1905", fx:.4,
      title:"Herald Square, facing Macy's, with the elevated railroad", spots:[
      {x:.35, y:.42, t:"Macy's", d:"The store moved to this corner in 1902 and was one of the biggest shops in the world.", how:"Macy's is still here today."},
      {x:.75, y:.88, t:"The elevated railway", d:"Trains ran on iron tracks above the street, rattling past upstairs windows.", how:"This line, the Sixth Avenue El, was taken down in 1938 and 1939."},
      {x:.87, y:.62, t:"The Herald building", d:"The newspaper building that gave the square its name.", how:"It was pulled down in 1921."},
      {x:.6, y:.72, t:"Streetcars and wagons", d:"Streetcars, horse wagons and people all share the street.", how:"Look closely: there are almost no cars."}]},
    {pic:"newyork-1905-4", name:"Mulberry Street", kind:"photograph", made:"Photographed about 1900", fx:.5,
      title:"Mulberry Street", note:"A few years before 1905; the street looked much the same.", spots:[
      {x:.4, y:.72, t:"A street market", d:"Pushcarts sold fruit, vegetables, fish and clothes right in the street.", how:"The city counted thousands of licensed pushcarts."},
      {x:.8, y:.35, t:"Tenements", d:"Five- and six-storey brick buildings with fire escapes on the front. Whole families lived in two or three small rooms.", how:"Photographers and reformers of the time recorded these crowded homes."},
      {x:.17, y:.46, t:"Little Italy", d:"Mulberry Street was the heart of New York's Italian neighbourhood.", how:"Italian shops and restaurants still line the street."},
      {x:.6, y:.9, t:"Children everywhere", d:"With tiny homes, children played and worked in the street.", how:"You can see dozens of them in this one photograph."}]}
  ]},
"kaifeng-1120": {y:1120, tol:40, c:"china", place:"Kaifeng",
  look:[
    ["Buildings", "Wooden buildings with tiled roofs, restaurants and wine shops with flags, and a high wall with big gate towers. Kaifeng was the capital of the Song dynasty."],
    ["Clothing", "Long robes with wide sleeves for officials and scholars; short jackets and trousers for porters and boatmen; cloth caps and straw hats."],
    ["Getting around", "Boats and barges on the river, carrying grain to the capital. On land: donkeys, camels, ox carts, sedan chairs and wheelbarrows."],
    ["Light at night", "Oil lamps and lanterns. Kaifeng's night markets stayed busy long after dark."],
    ["City life", "Perhaps a million people lived in and around the city, one of the largest in the world. In 1127 it fell to invaders from the north."]
  ],
  stops:[
    {pic:"kaifeng-1120-1", name:"Boats on the Bian river", kind:"scroll painting", made:"Painted in the early 1100s", fx:.45,
      title:"Along the River During the Qingming Festival (detail)", note:"Details from a famous handscroll by Zhang Zeduan, more than five metres long.", spots:[
      {x:.45, y:.55, t:"Grain barges", d:"Big boats brought rice and grain along the canal to feed the capital.", how:"Records of the time describe hundreds of grain boats a year."},
      {x:.4, y:.12, t:"Riverside restaurants", d:"Inns and eating houses lined the bank, for boatmen and travellers.", how:"Zhang Zeduan painted every shop and sign along the river."},
      {x:.2, y:.68, t:"Pulling with ropes", d:"Boatmen used poles and long ropes to move heavy boats.", how:"You can see the lines stretched from the boats."}]},
    {pic:"kaifeng-1120-2", name:"The Rainbow Bridge", kind:"scroll painting", made:"Painted in the early 1100s", fx:.45,
      title:"Along the River During the Qingming Festival (detail): the Rainbow Bridge", spots:[
      {x:.45, y:.3, t:"A bridge with no pillars", d:"A wooden arch bridge with no posts in the water, so big boats could pass underneath. Stalls crowd both sides.", how:"Song-dynasty builders made these from interlocking timbers."},
      {x:.72, y:.5, t:"Busy river traffic", d:"Boats crowd the water near the bridge, and people on the bridge lean over to watch.", how:"The scroll is famous for this busy scene."},
      {x:.12, y:.78, t:"Stalls and umbrellas", d:"Traders sell food and goods under big umbrellas.", how:"Every stall in the painting is different."}]},
    {pic:"kaifeng-1120-3", name:"The city gate", kind:"scroll painting", made:"Painted in the early 1100s", fx:.35,
      title:"Along the River During the Qingming Festival (detail): the city gate", spots:[
      {x:.3, y:.15, t:"The gate tower", d:"A tall wooden tower on a thick earth wall guarded the way into the capital.", how:"Kaifeng's old walls have been dug up by archaeologists."},
      {x:.6, y:.75, t:"Townspeople", d:"Officials in long robes, workers in short jackets, and riders all pass along the road.", how:"The painter showed over 800 people in the whole scroll."}]}
  ]}

};
