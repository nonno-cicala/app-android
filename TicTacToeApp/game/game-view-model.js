const { fromObject } = require('tns-core-modules/data/observable')

const createGameViewModel = (board, next) => fromObject({
  board: board ? board : [' ',  ' ',  ' ',  ' ',  ' ',  ' ',  ' ',  ' ', ' '], 
  turn: next ? next : 'X'
})

module.exports = { createGameViewModel }