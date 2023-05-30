module.exports = {
  login: (req, res, next) => {
    try {
      console.log('check login');
      res.send('is-login')
    } catch (error) {
      // next(error);
      console.log(error);
    }
  }
}