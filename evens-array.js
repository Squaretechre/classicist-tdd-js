function getEvensFrom(array) {
  let evenNumbers = []

  for(let i=0; i < array.length; i++) {
    if(array[i] % 2 == 0) {
      evenNumbers.push(array[i])
    }  
  }

  return evenNumbers
}

module.exports = getEvensFrom