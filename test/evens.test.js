const { expect } = require('chai');
const getEvensFrom = require('../get-evens-from')

describe('evens array', () => {
  it('returns empty array when given empty array', () => {
    expect(getEvensFrom([])).to.eql([])
  });
});