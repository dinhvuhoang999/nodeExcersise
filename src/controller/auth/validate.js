const { query } = require('express-validator');

module.exports = {
  checkLogin: [
    query('username')
      .isString()
      .withMessage('username must be string')
      .isLength({ min: 3, max: 30 })
      .withMessage('username must be min 3 and max 30'),
    query('password')
      .isString()
      .withMessage('password must be string')
      .isLength({ min: 6, max: 100 })
      .withMessage('password must be min 6 and max 100')]
}