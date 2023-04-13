const assertEqual = function(actual, expected) {
  
  let assertion = '';

  if (actual === expected) {
    console.log(assertion = `✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(assertion = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return assertion;
};




// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count


const countOnly = function(array, object) {
  const results = {};
  for (const element of array) {
    if (object[element]) {
      if (results[element]) {
        results[element] += 1;
      } else {
        results[element] = 1;
      }
  
    }
    console.log(results);
  }
  return results;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1); // 1 === 1
assertEqual(result1["Karima"], undefined); // no Karima thus undefined from obj
assertEqual(result1["Fang"], 2); // Fang appeared twice thus 2 === 2
assertEqual(result1["Agouhanna"], undefined); // not counting Agouhanna thus undefined === undefined