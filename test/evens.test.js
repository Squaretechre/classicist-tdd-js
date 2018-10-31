const { expect } = require('chai');
const getEvensFrom = require('../get-evens-from')

describe('evens array', () => {
  it('returns empty array when given empty array', () => {
    expect(getEvensFrom([])).to.eql([])
  });

  it('returns empty array when given array with 1', () => {
    expect(getEvensFrom(1)).to.eql([])
  });

  it('returns [2] when given array [1,2]', () => {
    expect(getEvensFrom([1,2])).to.eql([2])
  });
});