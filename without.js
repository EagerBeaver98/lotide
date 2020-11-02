const without = function(array, remove) {
  let final = [];
  for (let x = 0; x < remove.length; x++) {
    for (let y = 0; y < array.length; y++) {
      if (array[y] !== remove[x]) {
        final.push(array[y]);
      }
    }
  }
  return final;
};

module.exports = without;