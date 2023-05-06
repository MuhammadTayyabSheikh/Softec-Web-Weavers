const router = require('express').Router();
const authorize = require('../middlewares/authorize');

router.get('/', authorize(), (req, res) => {
  res.send('Get all queries');
});

router.get('/:id', authorize(), (req, res) => {
  res.send('Get one query');
});

router.post('/', authorize('user'), (req, res) => {
  res.send('Create a query');
});

router.put('/:id', authorize(), (req, res) => {
  res.send('Update a query');
});

router.delete('/:id', authorize('admin'), (req, res) => {
  res.send('Delete a query');
});

module.exports = router;
