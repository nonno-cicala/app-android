module.exports = [
  {
    path: '/api/ai',
    middleware: [],
    handler: require('./ai')()
  }
]