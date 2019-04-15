const { isTerminal, emptyCells, whoWin, countMove, turn } = require('./state')
const { pipe } = require('./functions')

/**
 * 
 * @param {Array} board 
 */
const score = board => {
  if (whoWin(board)('X')) {
    return -1000
  } else if (whoWin(board)('O')) {
    console.log(board, 1000, whoWin(board)('X'))
    return 1000
  }
  return 0
}

const move = pipe(
  emptyCells,
  positions => positions.map(
    position => board => Array.from(board, (cell, pos) => pos === position ? turn(board) : cell) 
  )
)

const nextBoards = board => move(board).map(movement => movement(board))
const minMax = (board, player) => {
  if (isTerminal(board)) {
    return score(board)
  } else {
    const movements = nextBoards(board)
    let bestMove = player === 'O' ? -1000 : 1000
    movements.forEach(next => {
      let nextPlayer = player === 'O' ? 'X' : 'O'
      let score = minMax(next, nextPlayer)
      if (nextPlayer === 'O') {
        if(score < bestMove) {
          bestMove = score
        }
      } else {
        if (score > bestMove) {
          bestMove = score
        }
      }
    })
    return bestMove
  }
}

const master = pipe(
  nextBoards,
  movements => movements.map(b => ({ score: minMax(b, 'O'), board: b })),
  choices => Array.from(choices)
    .sort((a, b) => {
      if(a.score > b.score) return -1
      else if (a.score < b.score) return 1
      else return 0
    }),
  movements => {
    console.log(movements)
    return movements
  },
  choices => choices.slice(0, 1)
    .reduce((a, c) => a.board = c.board, {})
)

const human = pipe(
  nextBoards,
  movements => movements.map(b => ({ score: minMax(b, 'O'), board: b })),
  choices => Array.from(choices).sort((a, b) => a.score - b.score),
  choices => Math.random() * 100 <= 40
    ? choices.slice(0, 1).reduce((a, c) => a.board = c.board, {})
    : choices.length >= 2 
      ? choices.slice(1, 2).reduce((a, c) => a.board = c.board, {})
      : choices.slice(0, 1).reduce((a, c) => a.board = c.board, {})
)

const blind = pipe(
  nextBoards,
  movements => movements[Math.floor(Math.random() * movements.length)]
)

module.exports = { master, blind, human }