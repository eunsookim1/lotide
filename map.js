const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// EXAMPLE :
// results1 = map(words, word => word[0]); returns the first letter of each word in an array.

module.exports = map;