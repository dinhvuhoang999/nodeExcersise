const app = require('express')();
const router = require('./src/routes')
require('dotenv').config()

const port = process.env.PORT || 8000;
app.use(router);
app.listen(port, () => {
  console.log('port', port);
})