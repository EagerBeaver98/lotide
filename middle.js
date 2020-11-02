const middle = function(array) {
  if (array.length % 2 !== 0 && array.length > 1) {
    for (let x = 0; array.length > 1; x++) {
      array.pop();
      array.shift();
    }
  } else if (array.length % 2 === 0 && array.length > 2) {
    for (let x = 0; array.length > 2; x++) {
      array.pop();
      array.shift();
    }
  } else if (array.length <= 2) {
    return [];
  }
  return array;
  
};

module.exports = middle;