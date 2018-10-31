const { expect } = require('chai');
const filterEvensFrom = require('../evens-array')

describe('evens array', () => {
  it('returns empty array when given empty array', () => {
    expect(filterEvensFrom([])).to.eql([])
  });

  it('returns empty array when given array [1]', () => {
    expect(filterEvensFrom([1])).to.eql([])
  });

  it('returns array [2] when given array [1, 2]', () => {
    expect(filterEvensFrom([1, 2])).to.eql([2])
  });
});