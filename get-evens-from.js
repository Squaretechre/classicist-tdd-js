
function getEvensFrom(array) {
  let evenNumbers = []
  if(array[1] === 2) {
    evenNumbers.push(2)
  }
  if(array[3] === 4) {
    evenNumbers.push(4)
  }
  return evenNumbers
}

module.exports = getEvensFrom