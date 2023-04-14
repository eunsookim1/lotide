const takeUntil = function(array, callback) {
  let result = [];
  for (const element of array) {
    if (!callback(element)) { // the order of the conditions can be reversed.
      result.push(element);
    } else {
      return result;
    }
  }
  return result;
};

module.exports = takeUntil;

// TEST CODE:
// const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('./assertArraysEqual);
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5]; // ==> [ 1, 2, 5, 7, 2 ]
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---'); // ==> --

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]; // ==> [ 'I\'ve', 'been', 'to', 'Hollywood' ]
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);


// assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
// assertArraysEqual(takeUntil(data2,x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

