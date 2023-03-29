// Output: return all the indices in the string where each character is found.
// For each letter, multiple numbers may result where the letter shows up.

const assertEqual = function(actual, expected) {

  let assertion = '';
  
  if (actual === expected) {
    assertion = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
     
  } else if (actual !== expected) {
    assertion = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
    
  }
  console.log(assertion);
  return assertion;
  
};

let eqArrays = function(array1, array2) {

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  
  let result = eqArrays(array1, array2);
  if (result) {
    
    // result === true, some values will considered true. result is a boolean, considered true.

    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
     
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    
  }
};


const letterPositions = function(string) {
  const results = {};
  // "lighthouse in the house"
  const characters = string.split(""); // converts string to an array so we can loop through each character

  // loop through each character *
  // if character is not empty and *
  // if the character does not exist in my results object *
  // add the character and the index (.push())
  // if the character does exists
  // then add the new index into the array (.push())

  // ["h", "e", "l", "l", "o"]
  // const results = { h: 0, e: 1, l: [2, 3], o: 4}; (result[characters[i]] | result.characters[i])
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
  console.log(results);
  return results;
};
  



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

// changing to primitive values for assertEquals function


assertEqual(result["l"].length, 1); // => should PASS
assertEqual(result["h"].length, 4); // => should PASS
assertEqual(result["i"][0], 1); // => should PASS
assertEqual(result["i"][1], 11); // => should PASS
assertArraysEqual(result["h"], [3, 5, 15, 18]); // => should PASS





// ==== Practice with Charlotte
// const hello = "hello";
// hello.split("");
// for (let index = 0; index < hello.length; index++) {
//   console.log("index | letter", index, hello[index]);
// }
