const takeUntil = function(array, callback) {
  const result = [];
  for (let x of array) {
    if (!callback(x)) {
      result.push(x);
    } else {
      return result;
    }
  }
  return result;
};

module.exports = takeUntil;