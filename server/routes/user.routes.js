const router = require('express').Router();
const authorize = require('../middlewares/authorize');

router.get('/me', authorize(), (req, res) => {
  res.send('Me');
});

router.get('/favorites', authorize('user'), (req, res) => {
  res.send('Favorites');
});

router.post('/favorites', authorize('user'), (req, res) => {
  res.send('Add to favorites');
});

router.delete('/favorites/:id', authorize('user'), (req, res) => {
  res.send('Remove from favorites');
});

router.get('/cart', authorize('user'), (req, res) => {
  res.send('Cart');
});

router.put('/cart', authorize('user'), (req, res) => {
  res.send('Update cart');
});

router.post('/cart/checkout', authorize('user'), (req, res) => {
  res.send('Checkout');
});

router.get('/blacklist', authorize('admin'), (req, res) => {
  res.send('Get all blacklisted users');
});

router.post('/blacklist', authorize('admin'), (req, res) => {
  res.send('Create a blacklisted user');
});

router.put('/blacklist/:id', authorize('admin'), (req, res) => {
  res.send('Update a blacklisted user');
});

router.delete('/blacklist/:id', authorize('admin'), (req, res) => {
  res.send('Delete a blacklisted user');
});

module.exports = router;
