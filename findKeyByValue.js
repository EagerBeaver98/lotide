const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertation Failed: ${actual} !== ${expected}`);
  }
};

assertEqual;

const findKeyByValue = function(object, value) {
  const temp = Object.keys(object);
  for (const key of temp) {
    if (value === object[key]) {
      return key;
    }
  }
};


const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

findKeyByValue(bestTVShowsByGenre, "The Expanse");