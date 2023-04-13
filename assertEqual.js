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


// let eqArrays = function(array1, array2) {
//   if (array1 === array2) {
//     return true;
//   }
//   return false;
// // Output: true or false
// };

module.exports = assertEqual;

