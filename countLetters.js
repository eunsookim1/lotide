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


const countLetters = function(string) {
  let result = {};
  // let sentence = string.split(' ').join('');
  // Why can't I just use string.split(' ').join('')
  // Eliminating the white space between the letters

  for (let letter of string) {
  // letter represents individual letters in a sentence for eg: "h" in the sentence "hello world"

    // elements within an iterator(letter) (strings and arrays)
    if (letter !== " ") {
      if (result.letter) {
        result.letter += 1; // updates an existing key-value pair.
        // review above.
      } else {
        result.letter = 1; // creates a key-value pair
        
      } //console.log("result", result);
    }
  }
  
  return result;
};

const letters = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };
// changing to primitive values for assertEquals function

// TEST CODE
console.log(countLetters("lighthouse in the house"));
assertEqual(letters["l"], 1); // => should PASS

/*
const person = {
  name: "ahana",
  age: 29,
  food: "ramen"
};

const key = "sport";
const key1 = "food";

console.log(person.age); // 29
console.log(person.height); // undefined
console.log(person[key]); // person.sport dot notation vs bracket notation // undefined
console.log(person[key1]); // person.food //ramen


// how to add new key value pairs to person object sport: badminton height: 152cm
// 2 ways to add a key
person.sport = "badminton";
person[key] = "badminton";

// this is not possible, you cannot use (for of) loop on objects
// for (let x of person) {
//   console.log('x', x);
// }

*/