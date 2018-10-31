const { expect } = require('chai');
const filterEvensFrom = require('../evens-array')

describe('evens array', () => {
  it('returns empty array when given empty array', () => {
    expect(filterEvensFrom([])).to.eql([])
  });
});