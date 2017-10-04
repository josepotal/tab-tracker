const AuthenticationControlller = require('../controllers/AuthenticationController')

module.exports = (app) => {
  app.post('/register', AuthenticationControlller.register)
}
