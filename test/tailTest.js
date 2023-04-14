const assert = require('chai').assert;
const tail = require('../tail');
const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns 'Lab' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
  it("returns 'true' for (words.length, 3)", () => {
    assert.strictEqual(words.length, 3);
  });
  it("returns an empty array for ['Labs']", () => {
    assert.deepEqual(tail(['labs']), []);
  });
  it("returns an empty array for []", () => {
    assert.deepEqual(tail([]), []);
  });
});