const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {

    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
        // console.log("B", results[item]);
      } else {
        results[item] = 1;
      }
    }
    // console.log("A", results[item]);
  }
  return results;
};

module.exports = countOnly;

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

module.exports = firstNames;

// TEST CODE:
// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1); // 1 === 1
// assertEqual(result1["Karima"], undefined); // no Karima thus undefined from obj
// assertEqual(result1["Fang"], 2); // Fang appeared twice thus 2 === 2
// assertEqual(result1["Agouhanna"], undefined); // not counting Agouhanna thus undefined === undefined