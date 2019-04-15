require('dotenv').config()
const express = require('express')

const port = process.env.PORT || 8080;
const isProd = process.env.NODE_ENV === 'production'

const app = express()
const router = require('./app/router')

require('./services/middleware')(app, express)

router.forEach(route => {
  app.use(route.path, route.middleware, route.handler)
})

app.all('/', (req, res) => {
  res.status(200).json({message: 'Hello TicTacToe AI API v1'})
})

app.use((req, res, next) => {
  if( res.locals.found !== undefined ) {
    return res.status(200).json(res.locals.data)
  }
  const { NotFoundError } = require('./app/errors')
  next(new NotFoundError('Resource Not Found'))
})


app.use((err, req, res, next) => {
  if (err.handler !== undefined) {
    return err.handler(res)
  }
  res.status(err.status || 500);

  if (isProd) {
    res.json({
      message: err.message,
      error: {}
    })
  } else {
    res.json({
      message: err.message,
      error: err.stack
    })
  }
})

app.listen(port, () => {
  console.log(`Api server start at localhost:${port}`)
})