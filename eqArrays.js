let eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    // console.log(false);
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      // console.log(false);
      return false;
    }
  }
  // console.log(true);
  return true;
};

module.exports = eqArrays;