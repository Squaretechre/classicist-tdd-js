/*
### splitNums()

Write a function that takes an array of numbers and returns 
a new array of arrays containing the numbers split in two. 

Even numbers should return a pair of the halved number; 

odd numbers should return the integer either side of the halved number.

```js
const numbers = [4, 6, 7, 9, 99]

splitNums(numbers) // [[2, 2], [3, 3], [3, 4], [4, 5], [49, 50]]
*/

const { expect } = require('chai');
const splitNums = require('../split-nums')

describe('splitNums', () => {
  it('returns empty array when given empty array', () => {
    expect(splitNums([])).to.eql([])
  });

  it('returns [1,1] when give an array containing 2', () => {
    expect(splitNums([2])).to.eql([[1,1]])
  });

  it('returns [[1,1], [2,2], [3,3]] when give an array containing [2,4,6]', () => {
    expect(splitNums([2,4,6])).to.eql([[1,1], [2,2], [3,3]])
  });

  it('returns [[50,50], [20,20], [30,30]] when give an array containing [100, 40, 60]', () => {
    expect(splitNums([100,40,60])).to.eql([[50,50], [20,20], [30,30]])
  });

  it('returns [[1,2]] when give an array containing [3]', () => {
    expect(splitNums([3])).to.eql([[1,2]])
  });

  it('returns [[2, 2], [3, 3], [3, 4], [4, 5], [49, 50]] when give an array containing [4, 6, 7, 9, 99]', () => {
    expect(splitNums([4, 6, 7, 9, 99])).to.eql([[2, 2], [3, 3], [3, 4], [4, 5], [49, 50]])
  });
});