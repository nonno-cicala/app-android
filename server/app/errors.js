class NotFoundError extends Error{
  handler(res) {
    res.status(404)
    res.json({
      message: this.message,
      error: {}
    })
  }
}

class AuthError extends Error{
  handler(res) {
    res.status(403)
    res.json({
      message: `Auth error: ${this.message}`,
      error: {}
    })
  }
}

class LoginError extends Error{
  handler(res) {
    res.status(401)
    res.json({
      message: `Login error: ${this.message}`,
      error: { auth: false, token: null }
    })
  }
}

class StrategyError extends Error{
  hanlder(res) {
    res.status(500)
    res.json({
      message: `Unkown Price Strategy ${this.message}`,
      error: {}
    })
  }
}

module.exports = {
  'NotFoundError': NotFoundError,
  'AuthError': AuthError,
  'LoginError': LoginError,
  'StrategyError': StrategyError
}