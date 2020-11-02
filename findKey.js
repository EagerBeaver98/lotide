const findKey = function(object, callback) {
  const temp = Object.keys(object);
  for (let x = 0; x < temp.length; x++) {
    if (callback(object[temp[x]])) {
      console.log(temp[x]);
      break;
    }
  }
};

module.exports = findKey;