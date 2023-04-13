const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// Test Code:
middle([1]); // => []
middle([1, 2]); // => []

middle([1, 2, 3]); // => [2]  3/2 = 1.5 (index = 1)

middle([1, 2, 3, 4, 5]); // => [3] | 5/2 = 2.5 -> 2 use math.round()

middle([1, 2, 3, 4]); // => [2, 3] |  4/2 = 2 -> 1, 2 array[1] , [2]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4] | 6/2 -> 3 -> array [3], [4]

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);