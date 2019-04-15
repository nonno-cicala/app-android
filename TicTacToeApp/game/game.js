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
      page.frame.navigate({
        moduleName: 'game/final',
        context: { text: 'X Vince' }
      })
    } else if (whoWin('O')(page.bindingContext.board)) {
      page.frame.navigate({
        moduleName: 'game/final',
        context: { text: 'O Vince' }
      })
    } else {
      page.frame.navigate({
        moduleName: 'game/final',
        context: { text: 'Pareggio' }
      })
    }
  } else {
    // AI Move
    console.log('AI Move')
    const httpModule = require('http')
    httpModule.request({
      url: 'https://cpw.sonofrio.com/ai/api/ai/move',
      //url: 'http://192.168.1.25:8080/api/ai/move',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      content: JSON.stringify({
        level: 'random',
        board: page.bindingContext.board
      })
    })
    .then(response => response.content.toJSON())
    .then(board => {
      console.log(board)
      page.bindingContext = createGameViewModel(board, nextTurn === 'X' ? 'O' : 'X')
    })
    .then(() => createBoard(page))
    .catch(e => console.log(e))
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