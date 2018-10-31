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

  // stay testing evens behaviour
  it('returns array [2, 4] when given array [1, 2, 3, 4]', () => {
    expect(filterEvensFrom([1, 2, 3, 4])).to.eql([2, 4])
  });

  it('returns array [2, 4, 6] when given array [1, 2, 3, 4, 5, 6]', () => {
    expect(filterEvensFrom([1, 2, 3, 4, 5, 6])).to.eql([2, 4, 6])
  });
});