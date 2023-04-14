const eqArrays = require('./eqArrays');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let assertion = '';
  
  if (eqObjects(actual, expected)) {
    assertion = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    assertion = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
    // why is it console.logging [object object]? ==> Object output issue.
   
  }
  console.log(assertion);
  return assertion;
  
};

let eqObjects = function(obj1, obj2) {
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    const value1 = obj1[key];
    const value2 = obj2[key];
    
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

module.exports = assertObjectsEqual;
module.exports = eqObjects;


// Input: Take two objects
// Output: console.log an appropriate message

// List of Objects:
const shirtObject = {
  color: "red",
  size: "medium"
};
const anotherShirtObject = {
  size: "medium",
  color: "red"
};
const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long"
};
const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long"
};
const multiColorShirtObject = {
  colors: ["red", "blue"],
  size: "medium"
};
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "orange"]
};


// Test Codes:
// assertObjectsEqual(shirtObject, anotherShirtObject);
// assertObjectsEqual(shirtObject, longSleeveShirtObject);

// (eqObjects(shirtObject , anotherShirtObject)); // => true
// assertEquals(eqObjects(shirtObject , anotherShirtObject), true);

// eqObjects(shirtObject , longSleeveShirtObject); // => false
// assertEquals(eqObjects(shirtObject , longSleeveShirtObject), false);


// eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

/*
assertEquals(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

assertEquals(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false
*/

// Array checks using simple === will always return false. So in the case of comparing multiColorShirtObject and anotherMultiColorShirtObject, it will return false not because they contain arrays with different values, but simply becasue they are >>`two separate arrays`<< no matter what. This is why we need to implement eqArrays.