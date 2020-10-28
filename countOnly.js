const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertation Failed: ${actual} !== ${expected}`);
  }
};


const countOnly = function(allItems, itemsToCount) {
  const final = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (final[item]) {
        final[item] += 1;
      } else {
        final[item] = 1;
      }
    }
  }
  return final;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);