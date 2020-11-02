const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1, 2, 3]), [2]);

describe("#middle", () => {
  it("should return [2] from [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("should return [] from [1, 2,]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("should return 2 middle values of even numbered array", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});