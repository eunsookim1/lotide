const flatten = (array) => {
  const result = [];
  array.forEach((elem) => {
    if (Array.isArray(elem)) {
      elem.forEach((nestedElem) => {
        result.push(nestedElem);
      });
    } else {
      result.push(elem);
    }
  });

  return result;
};

module.exports = flatten;