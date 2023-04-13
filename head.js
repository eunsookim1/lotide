let head = function(array) {
  let num = array[0];
  if (array.length > 0) {
    console.log(num);
    return num;
  }
};

module.exports = head;


// output: first element of the array
// output: undefined if the array is empty

// const {assertEqual} = require('./assertEqual');
// const importedFunctions = require('./assertEqual');
// const assertEqual1 = importedFunctions.assertEqual;
