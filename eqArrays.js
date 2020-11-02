const eqArrays = function(array1, array2) {
  let answer;
  for (let x = 0; x < array1.length && x < array2.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    } else {
      answer = true;
    }
  }
  return answer;
};

module.exports = eqArrays;