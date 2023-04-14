const findKeyByValue = function(shows, showValue) {
  for (let show in shows) {
    if (shows[show] === showValue) {
      return show;
    }
  }
};

module.exports = findKeyByValue;

// Test code:
// const bestTVShowsByGenre = {
//   // eslint-disable-next-line camelcase
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// const assertEqual = require('./assertEqual');
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);