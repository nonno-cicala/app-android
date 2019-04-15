const bodyParser = require('body-parser')
const path = require('path')
const compression = require('compression')
const errorHandler = require('errorhandler')
const morgan = require('morgan')

module.exports = (app, express) => {
  const isProd = process.env.NODE_ENV === 'production'
  if (!isProd) {
    app.use(errorHandler())
  } 
  app.use(compression())

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(morgan('combined'))
}