const router = require('express').Router();
const authorize = require('../middlewares/authorize');

router.get('/:type', (req, res) => {
  res.send('Get items');
});

router.get('/:id', (req, res) => {
  res.send('Get item');
});

router.post('/:type', authorize('admin'), (req, res) => {
  res.send('Create item');
});

router.put('/:id', authorize('admin'), (req, res) => {
  res.send('Update item');
});

router.delete('/:id', authorize('admin'), (req, res) => {
  res.send('Delete item');
});

module.exports = router;
