
Array.prototype.equals = function() {
  if (this.every(cell => cell === ' ')) {
    return false
  }
  return new Set(this).size === 1
}

const validity = (x, board) => board[x] === ' '
const move = (x, board, symbol) => validity(x, board) ? [...board].fill(symbol, x, x + 1) : [...board] 
const emptyCells = board => board.reduce(function(acc, cell){
  if (cell === ' ') {
    return acc + 1
  }
  return acc
}, 0)

const range = (start, stop, step) => Array.from(
  { length: 3 },
  (_, i) => start + (i * step)
)

const checkRow = (row, board) => getRow(row, board).equals()
const whoWinRow = (row, board, symbol) => getRow(row, board).every(cell => cell === symbol)
const getRow = (row, board) => range(row * 3, row * 3 + 2, 1).map(index => board[index])
const checkCol = (col, board) => getCol(col, board).equals()
const whoWinCol = (col, board, symbol) => getCol(col, board).every(cell => cell === symbol)
const getCol = (col, board) => range(col, col + 6, 3).map(index => board[index])
const checkDRight = board => getDRight(board).equals()
const whoWinDRight = (board, symbol) => getDRight(board).every(cell => cell === symbol)
const getDRight = board => range(2, 6, 2).map(index => board[index])
const checkDLeft = board => getDLeft(board).equals()
const whoWinDLeft = (board, symbol) => getDLeft(board).every(cell => cell === symbol)
const getDLeft = board => range(0, board.length - 1, 4).map(index => board[index])

const isTerminal = board => {
  if (emptyCells(board) === 0) return true
  if ([0, 1, 2].some(row => checkRow(row, board))) return true
  if ([0, 1, 2].some(col => checkCol(col, board))) return true
  if (checkDRight(board)) return true
  if (checkDLeft(board)) return true
  return false
}

const whoWin = symbol => board => {
  if (!isTerminal(board)) return false
  if ([0, 1, 2].some(row => whoWinRow(row, board, symbol))) return true
  if ([0, 1, 2].some(col => whoWinCol(col, board, symbol))) return true
  if (whoWinDLeft(board, symbol)) return true
  if (whoWinDRight(board, symbol)) return true
  return false
}

module.exports = { move, isTerminal, whoWin }
