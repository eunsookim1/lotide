// TEST CODE
const {assertEqual} = require('../assertEqual');
const tail = require('../tail');


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);


// An array with only one element should yield an empty array for its tail.
// An empty array should yield an empty array for its tail.
