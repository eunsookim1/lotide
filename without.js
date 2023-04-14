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

module.exports = without;

// Output: a new array with only source elements not present in the itemsToRemove array.

// Return the new array of filtered values.

// Test code:
// without([1, 2, 3], [1]); // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]);// => ["1", "2"]

// assertArraysEqual(without([1, 2, 3], [1]), [2,3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// assertArraysEqual([1,2,3,4,5], [1,2,3,4,5,6]);