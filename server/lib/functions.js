const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x)

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x)

const trace = label => value => {
  console.log(`${label}: ${value}`)
  return value
}

const printBoard = (board) => {
  for (let index = 0; index < 3; index++) {
    console.log(board.slice(index * 3, (index + 1) * 3))
  }
}

module.exports = { compose, pipe, trace, printBoard }