const assertEqual = function(actual, expected) {

  let assertion = '';
  
  if (actual === expected) {
    assertion = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
     
  } else if (actual !== expected) {
    assertion = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
    
  }
  console.log(assertion);
  return assertion;
  
};

// const obj = {k1:v1,k2:v2}

// for(let x in obj){
//   // will loop through keys of an object (so here value of x
//   //would be the key of an object in each iteration)
//   if(obj[x]==show){
//     return x;
//   }
  
// }

// Generally, we use for...of loops for Arrays, Strings
// for...in loops for looping through Objects

const findKeyByValue = function(shows, showValue) 
{

  for (let show in shows) {
    if (shows[show] === showValue) {
      return show;
    } // going through each key-value
  }
  // scan the object and return the first key
  // key should contain the given value
  // if no key found, return undefined.
};

// Test code:
const bestTVShowsByGenre = {
  // eslint-disable-next-line camelcase
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);



// Lodash Library:
// _.findKey(object, [predicate=_.identity])
// method is like _.find except that it returns the key of the first element
// predicate returns truthy for instead of element itself.

// Example:

/*
let users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};

_.findKey(users, function(o) {
  return o.age < 40;
});
// => 'barney' (iteration order is not guaranteed)

_.findKey(users,{'age': 1, 'active': true });
// => 'pebbles'

// The `_.matchesProperty` iteratee shorthand.
_.findKey(users, ['active', false]);
// => 'fred'
 
// The `_.property` iteratee shorthand.
_.findKey(users, 'active');
// => 'barney'

*/