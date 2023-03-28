// make proper use of our brand new assertArraysEqual function to test functions like `middle` that return arrays.

// Middle function should return an array with only the middle elements of the provided array.

// Arrays with one or two elements, there is no middle, return an empty array.



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


const middle = function(array) {
  
  let result = [];

  
  if (array.length < 3) {
    return result;
 
  } else if (array.length % 2 !== 0) {
    const mid = Math.trunc(array.length / 2);
    result.push(array[mid]);
  
  } else {
    const mid = array.length / 2;
    result.push(array[mid - 1], array[mid]);
  }
 
  return result;
};

// Test Code:
middle([1]); // => []
middle([1, 2]); // => []

middle([1, 2, 3]); // => [2]  3/2 = 1.5 (index = 1)

middle([1, 2, 3, 4, 5]); // => [3] | 5/2 = 2.5 -> 2 use math.round()

middle([1, 2, 3, 4]); // => [2, 3] |  4/2 = 2 -> 1, 2 array[1] , [2]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4] | 6/2 -> 3 -> array [3], [4]

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);