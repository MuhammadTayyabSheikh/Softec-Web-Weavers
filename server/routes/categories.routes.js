const router = require('express').Router();
const authorize = require('../middlewares/authorize');

router.get('/:type', (req, res) => {
  res.send('Get categories');
});

router.post('/:type', authorize('admin'), (req, res) => {
  res.send('Create category');
});

router.put('/:type/:id', authorize('admin'), (req, res) => {
  res.send('Update category');
});

router.delete('/:type/:id', authorize('admin'), (req, res) => {
  res.send('Delete category');
});

module.exports = router;
