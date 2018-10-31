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

  it('returns [2] when given array [1,2,3]', () => {
    expect(getEvensFrom([1,2,3])).to.eql([2])
  });

  it('returns [2, 4] when given array [1,2,3,4]', () => {
    expect(getEvensFrom([1,2,3,4])).to.eql([2,4])
  });

  it('returns [2, 4] when given array [1,2,3,4,5]', () => {
    expect(getEvensFrom([1,2,3,4,5])).to.eql([2,4])
  });

  it('returns [2, 4, 6] when given array [1,2,3,4,5,6]', () => {
    expect(getEvensFrom([1,2,3,4,5,6])).to.eql([2,4,6])
  });
});