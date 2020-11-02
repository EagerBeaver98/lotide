const flatten = function(array) {
  let final = [];
  for (let x = 0; x < array.length; x++) {
    if (Array.isArray(array[x])) {
      for (let y = 0; y < array[x].length; y++) {
        final.push(array[x][y]);
      }
    } else {
      final.push(array[x]);
    }
  }
  return final;
};

module.exports = flatten;