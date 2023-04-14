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

module.exports = middle;

// make proper use of our brand new assertArraysEqual function to test functions like `middle` that return arrays.

// Middle function should return an array with only the middle elements of the provided array.

// Arrays with one or two elements, there is no middle, return an empty array.