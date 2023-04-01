
let eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  
  let result = eqArrays(array1, array2);
  if (result) {
    
    // result === true, some values will considered true. result is a boolean, considered true.

    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
     
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    
  }
};



// Input:
// An array to map
// A callback function


const words = ['mom', 'dad', 'son', 'daugther', 'gradma'];


/*
const results1 = words.map(words, word => word[0]);
console.log(results1);


const map = function() {
  const results = [];
  return results;
};

console.log(map());



/*
const map = function(array, callback) {
  console.log('array: ', array);
  console.log('callback: ', callback);

  const results = [];
  // array.forEach((word) => {

  //   const resultWord = callback(word);

  //   results.push(resultWord);
  // });
  
  return results;

  /*
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
};
  */

/*
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
};
*/

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);


assertArraysEqual(results1, [ 'm', 'd', 's', 'd', 'g' ]);
