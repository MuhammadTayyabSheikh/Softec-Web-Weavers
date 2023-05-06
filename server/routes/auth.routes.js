const authorize = require('../middlewares/authorize');

const router = require('express').Router();

router.post('/register', (req, res) => {
  res.send('Register');
});

router.post('/login', (req, res) => {
  res.send('Login');
});

router.get('/logout', authorize(), (req, res) => {
  res.send('Logout');
});

module.exports = router;
