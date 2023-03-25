// output: first element of the array
// output: undefined if the array is empty
//

let head = function(array) {
  let num = array[0];
  if (array.length > 0) {
    console.log(num);
    return num;
  } else {
    console.log(undefined);
    return undefined;
  }
};

//

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


// TEST CODE:
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([]), 5);