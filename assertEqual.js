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
  if (array1 === array2) {
    return true;
  }
// Output: true or false
};






// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); // 🛑🛑🛑 Assertion Failed:
assertEqual(1, 1); // ✅✅✅ Assertion Passed: 1 === 1

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS