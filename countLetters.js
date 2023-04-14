const countLetters = function(string) {
  let result = {};
  for (let letter of string) {
    if (letter !== " ") {
      if (result.letter) {
        result.letter += 1;
      } else {
        result.letter = 1;
      }
    }
  }
  return result;
};

const letters = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };

module.exports = countLetters;
module.exports = letters;

// TEST CODE
// console.log(countLetters("lighthouse in the house"));
// assertEqual(letters["l"], 1); // => should PASS