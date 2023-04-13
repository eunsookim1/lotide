const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); // 🛑🛑🛑 Assertion Failed:
assertEqual(1, 1); // ✅✅✅ Assertion Passed: 1 === 1

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS