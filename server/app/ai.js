const express = require('express')
const router = express.Router()
const { blind, master, human } = require('../lib/ai')

const movement = [
  (req, res, next) => {
    if (!req.body.level) return next(new Error('No level setted'))
    if (!req.body.board) return next(new Error('No board setted'))
    const { level, board } = req.body
    const m = level === 'blind'
      ? blind(board)
      : level === 'human'
        ? human(board)
        : master(board)
    res.locals.found = true
    res.locals.data = m
    next()
  }
]

module.exports = () => {
  router.post('/move', movement)
  return router
}
