const head = require('../head');
const assert = require('chai').assert;

// console.log(assertEqual(head([5,6,7]), 5));
// console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));

describe('#head', () => {
  it('return 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it('returns 5 for [5]', () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("return 5 from [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  it("returns 'Hello' from ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), "Hello");
  });
});