const letterPosition = function(string) {
  const final = {};
  for (let x = 0; x < string.length; x++) {
    if (string[x] === ' ') {
      final;
    } else if (final[string[x]]) {
      final[string[x]].push(x);
    } else {
      final[string[x]] = [x];
    }
  }
  return final;
};

module.exports = letterPosition;