const router = require('express').Router();
const controller = require('../controller/auth');
const { checkLogin } = require('../controller/auth/validate')
const { handleValidateError } = require('../middleware')

router.get('/login', checkLogin, handleValidateError, controller.login);
module.exports = router;