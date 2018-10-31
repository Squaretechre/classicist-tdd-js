const { expect } = require('chai');
const getEvensFrom = require('../evens-array')

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

  it('returns only even numbers when given array with odds and evens', () => {
    const numbers = [4, 6, 7, 9, 99, 9900, 467999900]
    expect(getEvensFrom(numbers)).to.eql([4,6,9900,467999900])
  });
});