const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertation Failed: ${actual} !== ${expected}`);
  }
};

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

const ab = {
  a: "1",
  b: "2",
};
const ba = {
  b: "2",
  a: "1",
};
const bc = {
  b: "2",
  c: "3",
};
const abc = {
  a: "1",
  b: "2",
  c: "3",
};

// eqObjects(ab, ba);
// eqObjects(ab, abc);
// eqObjects(ab, bc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false