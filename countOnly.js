// Helping an event planner who is planning a conference.
// They have a list of all the attendees, but they need to count the # of times certain names appear on the list. Want to make sure the VIP guests are attended properly.


// Items in our case will be limited to strings.

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




// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count


const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    // inside the loop,
    // increment the counter for each item:
    // set a property with tht string key to:
    // the value that was already there (or zero if nothing there) with 1 added to it.
    
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
  
    }
    console.log(item);
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