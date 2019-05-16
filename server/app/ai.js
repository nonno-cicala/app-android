const express = require('express')
const router = express.Router()
const { blind, master, human } = require('../lib/ai')

const movement = [
  (req, res, next) => {
    if (!req.body.level) return next(new Error('No level set'))
    if (!req.body.board) return next(new Error('No board set'))
    const { level, board } = req.body
    const m = level === 'random'
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
