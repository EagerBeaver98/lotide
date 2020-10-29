const eqArrays = function(array1, array2) {
  let answer;
  for (let x = 0; x < array1.length && x < array2.length; x++) {
    if (array1[x] !== array2[x] || array1.length !== array2.length) {
      return false;
    } else {
      answer = true;
    }
  }
  return answer;
};


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const letter in object1) {
    if (Array.isArray(object1[letter]) && Array.isArray(object2[letter])) {
      if (!eqArrays(object1[letter], object2[letter])) {
        return false;
      }
    } else if (object1[letter] !== object2[letter]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Assertation passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertation failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual;