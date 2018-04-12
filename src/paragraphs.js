const paragraphs = ['I am a movie fanatic. When friends want to know what picture won the Oscar in 1980 or who played the police chief in Jaws, they ask me. My friends, though, have stopped asking me if I want to go out to the movies.',
  'After arriving home from the movies one night, I decided that I was not going to be a moviegoer anymore. I was tired of the problems involved in getting to the movies and dealing with the theater itself and some of the patrons.',
  'Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a blender. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky.',
  'Oceans and lakes have much in common, but they are also quite different. Both are bodies of water, but oceans are very large bodies of salt water, while lakes are much smaller bodies of fresh water. Lakes are usually surrounded by land, while oceans are what surround continents.',
  'Last year was the first time I had ever been the new kid at school. For the first four days, I was completely alone. I don’t think I even spoke to a single person. Finally, at lunch on the fifth day, Karen Watson walked past her usual table and sat down right next to me.',
  'People often install a kitty door, only to discover that they have a problem. The problem is their cat will not use the kitty door. There are several common reasons why cats won’t use kitty doors. First, they may not understand how a kitty door works.',
  'Last week we installed a kitty door so that our cat could come and go as she pleases. Unfortunately, we ran into a problem. Our cat was afraid to use the kitty door. We tried pushing her through, and that caused her to be even more afraid.',
  'Here is the perfect system for cleaning your room. First, move all of the items that do not have a proper place to the center of the room. Get rid of at least five things that you have not used within the last year.',
  'My hometown is famous for several amazing natural features. First, it is noted for the Wheaton River, which is very wide and beautiful. Also, on the other side of the town is Wheaton Hill, which is unusual because it is very steep.',
];


function chooseRndParagraph() {
  const placeholderArray = [];
  const min = 0;
  let max = paragraphs.length;
  placeholderArray.push(paragraphs[Math.floor(Math.random() * (max - min)) + min]);
  placeholderArray[0] = placeholderArray[0].replace(/[`´’]/g, "'");
  return placeholderArray;
}


export default chooseRndParagraph;