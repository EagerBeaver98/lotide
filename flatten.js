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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertation Passed: ${array1} === ${array2}`);
  } else {
    console.log(`Assertaion Failed: ${array1} !== ${array2}`);
  }
};

assertArraysEqual;

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

console.log(flatten([1, 2, [3, 4], 5, [6]]));