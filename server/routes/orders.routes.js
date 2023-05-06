const router = require('express').Router();
const authorize = require('../middlewares/authorize');

router.get('/', authorize(), (req, res) => {
  res.send('Get all orders');
});

router.get('/:id', authorize(), (req, res) => {
  res.send('Get one order');
});

router.put('/:id', authorize(), (req, res) => {
  res.send('Update an order');
});

router.delete('/:id', authorize('admin'), (req, res) => {
  res.send('Delete an order');
});

router.post('/review', authorize('user'), (req, res) => {
  res.send('Create a review');
});

module.exports = router;
