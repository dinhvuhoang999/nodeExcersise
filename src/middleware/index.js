const { query, validationResult } = require('express-validator');

module.exports = {
  handleValidateError: (req, res, next) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return res.send(`Hello, ${req.query.username}`);
    }
    res.send({ errors: result.array() });
  }
}

