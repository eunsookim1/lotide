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
  let sentence = string.split(' ').join('');
  // Why can't I just use string.split(' ').join('')
  // Eliminating the white space between the letters

  for (let letter of sentence) {
    // is the variable 'letter' basically an index? string[letter]?
    if (result[letter]) {
      result[letter] += 1;
      // review above.

    } else {
      result[letter] = 1;
    }
  } return result;
};


console.log(countLetters("lighthouse in the house"));

const letters = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };
// changing to primitive values for assertEquals function

// TEST CODE
countLetters("lighthouse in the house");
assertEqual(letters["l"], 1); // => should PASS