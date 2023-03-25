// Create a function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.

// My function should not modify the array that is passed in.
// My function should return a new array.

// Write a test case to make sure that the original array is not modified.



const tail = function(array) {
  
  let tailedArray = array.slice(1);
  console.log(tailedArray);
  return tailedArray;
};



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



// TEST CODE

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);


// An array with only one element should yield an empty array for its tail.
// An empty array should yield an empty array for its tail.
