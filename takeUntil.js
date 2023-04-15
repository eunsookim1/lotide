const takeUntil = function(array, callback) {
  let result = [];
  for (const element of array) {
    if (!callback(element)) { // the order of the conditions can be reversed.
      result.push(element);
    } else {
      return result;
    }
  }
};

module.exports = takeUntil;