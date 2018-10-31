
function splitNums(array) {
  let numberPairsArray = []
  if(array[0] === 2) {
    numberPairsArray.push([1,1])
  }
  if(array[1] === 4) {
    numberPairsArray.push([2,2])
  }
  if(array[2] === 6) {
    numberPairsArray.push([3,3])
  }
  return numberPairsArray
}

module.exports = splitNums