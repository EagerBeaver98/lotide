const findKeyByValue = function(object, value) {
  const temp = Object.keys(object);
  for (const key of temp) {
    if (value === object[key]) {
      return key;
    }
  }
};


module.exports = findKeyByValue;