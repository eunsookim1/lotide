const flatten = (array) => {
  const result = [];
  array.forEach((elem) => {
    if (Array.isArray(elem)) {
      elem.forEach((nestedElem) => {
        result.push(nestedElem);
      });
    } else {
      result.push(elem);
    }
  });

  return result;
};

module.exports = flatten;


// const assertArraysEqual = require('./assertArraysEqual');
// const eqArrays = require('./eqArrays');
// flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);