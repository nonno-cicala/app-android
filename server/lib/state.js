const { pipe } = require('./functions')

/**
 * Check if array elements are all equals except for empty space equality
 */
Array.prototype.equals = function () {
  if (this.every(cell => cell === ' ')) return false
  return new Set(this).size === 1
}

/**
 * Create a numeric array range from start to stop by a defined step
 */
const range = (start, stop, step) => Array.from(
  { length: (stop - start) / step +1 },
  (_, i) => start + (i * step)
)

/**
 * Check if a row is in a terminal state 
 * @param {Array} board 
 */
const rowCheck = board => row => getRow(board)(row).equals()
const getRow = board => row => range(row * 3, row * 3 + 2, 1).map(index => board[index])
const whoWinRow = board => symbol => row => getRow(board)(row).every(cell => cell === symbol)

/**
 * Check if a column is in a terminal state
 * @param {Array} board 
 */
const columnCheck = board => col => getColumn(board)(col).equals()
const getColumn = board => col => range(col, col + 6, 3).map(index => board[index])
const whoWinColumn = board => symbol => col => getColumn(board)(col).every(cell => cell === symbol)

/**
 * Check if left diagonal is in a terminal state
 * @param {Array} board 
 */
const diagonalLeftCheck = board => getDiagonalLeft(board).equals()
const getDiagonalLeft = board => range(0, board.length - 1, 4).map(index => board[index])
const whoWinDiagonalLeft = board => symbol => getDiagonalLeft(board).every(cell => cell === symbol)

/**
 * Check if right diagonal is in a terminal state
 * @param {Array} board 
 */
const diagonalRightCheck = board => getDiagonalRight(board).equals()
const getDiagonalRight = board => range(2, 6, 2).map(index => board[index])
const whoWinDiagonalRight = board => symbol => getDiagonalRight(board).every(cell => cell === symbol)

/**
 * Returns all empty cells of the given board
 * @param {Array} board 
 * @returns {Array} the empty cells
 */
const emptyCells = board => board.reduce(
  (a, c, p) => c === ' ' ? a.concat(p) : a, 
  []
)

/**
 * Check the state of the given board
 * @param {Array} board 
 * @return {Boolean} board's state
 */
const isTerminal = board => {
  if ([0, 1, 2].some(row => rowCheck(board)(row))) return true
  if ([0, 1, 2].some(col => columnCheck(board)(col))) return true
  if (diagonalLeftCheck(board)) return true
  if (diagonalRightCheck(board)) return true 
  return false
}

const whoWin = board => symbol => {
  if ([0, 1, 2].some(row => whoWinRow(board)(symbol)(row))) return true
  if ([0, 1, 2].some(col => whoWinColumn(board)(symbol)(col))) return true
  if (whoWinDiagonalLeft(board)(symbol)) return true
  if (whoWinDiagonalRight(board)(symbol)) return true
  return false
}

const countMove = board => symbol => board.reduce(
  (count, cell) => cell === symbol ? count + 1 : count,
  0
)

const turn = board => countMove(board)('X') === 0 && countMove(board)('O') === 0
  ? 'O'
  : countMove(board)('O') > countMove(board)('X') ? 'X' : 'O'

module.exports = { isTerminal, emptyCells, whoWin, countMove, turn }