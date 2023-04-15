const without = function(array1, array2) {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    if (!array2.includes(array1[i])) {
      result.push(array1[i]);
    }
  }
  return result;
};

module.exports = without;