const { createGameViewModel } = require('./game-view-model')
const { StackLayout } = require('tns-core-modules/ui/layouts/stack-layout')
const { move, isTerminal, whoWin } = require('../lib/state')

const onMove = function (args) {
  const cell = args.object
  const board = move(
    cell.index,
    cell.bindingContext.board,
    cell.bindingContext.turn
  )
  const nextTurn = cell.bindingContext.turn === 'X' ? 'O' : 'X'
  const page = cell.parent.parent
  page.bindingContext = createGameViewModel(board, nextTurn)
  createBoard(page)
  if (isTerminal(page.bindingContext.board)) {
    if(whoWin('X')(page.bindingContext.board)) {
      alert('X Vince')
    } else if (whoWin('O')(page.bindingContext.board)) {
      alert('O Vince')
    } else {
      alert('Pareggio')
    }
  }
}

const createBoard = page => {
  const vm = page.bindingContext
  const boardContainer = page.getViewById('game-board')
  boardContainer.removeChildren()
  for(let i = 0; i < vm.board.length; i++) {
    const classes = [ 
      i % 2 === 0 ? 'even' : 'odd', 
      vm.board[i] !== ' ' ? vm.board[i] : '' 
    ]
    const stack = new StackLayout()
    stack.col = i % 3
    stack.row = Math.floor(i / 3)
    stack.index = i
    stack.class = classes.join(' ')
    stack.addEventListener('tap', onMove)
    boardContainer.addChild(stack)
  }
}

const onNavigatingTo = function (args)  {
  const page = args.object
  page.bindingContext = createGameViewModel()
  createBoard(page)
}

const onAddGame = function (args) {
  const button = args.object
  button.showModal(
    'game/addgame-root',
    {},
    () => { console.log('Modal closed') },
    false
  )
}

module.exports = { onAddGame, onNavigatingTo }