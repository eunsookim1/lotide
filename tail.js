const tail = function(array) {
  
  let tailedArray = array.slice(1);
  console.log(tailedArray);
  return tailedArray;
};

module.exports = tail;



// Create a function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.

// My function should not modify the array that is passed in.
// My function should return a new array.

// Write a test case to make sure that the original array is not modified.




// const tail2 = function(array) {
//   let tailedArray = [];
//   for (let i = 1; i < array.length; i++) {
//     tailedArray.push(array[i]);
//   }
//   console.log(tailedArray);
//   return tailedArray;
// };




