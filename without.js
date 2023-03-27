const without = function(array1, array2) {
  let result = [];

  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      // do nothing
    } else {
      result.push(array1[i]);
    }
  }

  return result;
};

// Question: what if array2.length > array1.length? and the different value[i] is beyond the last index of array1?

let eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

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

// Output: a new array with only source elements not present in the itemsToRemove array.

// Return the new array of filtered values.

// Test code:
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]);// => ["1", "2"]

assertArraysEqual(without([1, 2, 3], [1]), [2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual([1,2,3,4,5], [1,2,3,4,5,6]);