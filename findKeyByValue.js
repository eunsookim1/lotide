const findKeyByValue = function(shows, showValue) {
  for (let show in shows) {
    if (shows[show] === showValue) {
      return show;
    }
  }
};

module.exports = findKeyByValue;