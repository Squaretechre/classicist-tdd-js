
function splitNums(array) {
  let numberPairsArray = []

  for(let i=0; i < array.length; i++) {
    let result = array[i] / 2
    numberPairsArray.push([Math.floor(result), Math.ceil(result)]) 
  }

  return numberPairsArray
}

module.exports = splitNums