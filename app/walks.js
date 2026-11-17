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
  ]}
};
