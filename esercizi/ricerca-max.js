const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
const sortedNumbers = Array.from(numbers)
sortedNumbers.sort((a, b) => a - b)
const lastNumber = sortedNumbers[sortedNumbers.length - 1]
let maxIndices = []
numbers.forEach((n, i) => {
  if (n === lastNumber) {
    maxIndices.push(i)
  }
})

console.log(numbers, lastNumber, maxIndices)
