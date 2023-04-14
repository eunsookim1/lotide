// Output: return all the indices in the string where each character is found.
// For each letter, multiple numbers may result where the letter shows up.

// const assertEqual = require('./assertEqual');
// const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(string) {
  const results = {};
  const characters = string.split("");
  for (let i = 0; i < characters.length; i++) {
    if (characters[i] !== " ") {
      if (results[characters[i]]) { // if character exists
        results[characters[i]].push(i); // push index
      } else { // if character does not exists
        results[characters[i]] = []; // create key value
        results[characters[i]].push(i);
      }
    }
  }
  return results;
};
  
module.exports = letterPositions;


/*
const positions = {
  l: [0], // "string"
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};
*/

// When there are multiple values to a key, it goes into a [] bracket.
// Test Code:

const result = letterPositions("lighthouse in the house");
module.exports = result;
// changing to primitive values for assertEquals function

// assertEqual(result["l"].length, 1); // => should PASS
// assertEqual(result["h"].length, 4); // => should PASS
// assertEqual(result["i"][0], 1); // => should PASS
// assertEqual(result["i"][1], 11); // => should PASS
// assertArraysEqual(result["h"], [3, 5, 15, 18]); // => should PASS