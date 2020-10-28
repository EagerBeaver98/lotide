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





const words = ["hello", "world", "lighthouse"];

without(words, ["lighthouse"]);

assertArraysEqual(words, ["hello", "world", "lighthouse"]);