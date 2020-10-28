const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertation Failed: ${actual} !== ${expected}`);
  }
};
assertEqual;


const countLetters = function(sentence) {
  const answer = {};
  for (const letter of sentence) {
    if (answer[letter]) {
      answer[letter] += 1;
    } else if (letter === ' ') {
      let x = 1;
      x;
    } else {
      answer[letter] = 1;
    }
  }
  return answer;
};

console.log(countLetters('lighthouse in the house'));