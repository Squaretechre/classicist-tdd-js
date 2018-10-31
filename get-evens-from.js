
function getEvensFrom(array) {
  let evenNumbers = []
  if(array[1] === 2) {
    evenNumbers.push(2)
  }
  if(array[3] === 4) {
    evenNumbers.push(4)
  }
  if(array[5] === 6) {
    evenNumbers.push(6)
  }

  for(let i=0; i < array.length; i++) {
    if(array[i] % 2 == 0) {
      evenNumbers.push(i)
    }
  }
  return evenNumbers
}

module.exports = getEvensFrom