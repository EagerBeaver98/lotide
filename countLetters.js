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

module.exports = countLetters;