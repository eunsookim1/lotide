const letterPositions = function(string) {
  const results = {};
  const characters = string.split("");
  for (let i = 0; i < characters.length; i++) {
    let key = characters[i];
    if (key !== " ") {
      if (results[key]) { // if character exists
        results[key].push(i); // push index
      } else { // if character does not exists
        results[key] = []; // create key value
        results[key].push(i);
      }
    }
  }
  return results;
};
  
module.exports = letterPositions;