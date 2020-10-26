const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertation Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  return array[0];
};


console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));