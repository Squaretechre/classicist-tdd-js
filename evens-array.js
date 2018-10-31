
// if number is even
// if(array[5] == 6) {
   // push that number onto the evens array
//   evenNumbers.push(6)
// }

function filterEvensFrom(array) {
  let evenNumbers = []

  for(let i=0; i < array.length; i++) {
    // if number is even
    if(array[i] % 2 == 0) {
      // push that number onto the evens array
      evenNumbers.push(array[i])
    }  
  }

  return evenNumbers
}

module.exports = filterEvensFrom