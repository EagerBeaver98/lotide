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


module.exports = countOnly;