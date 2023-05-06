const router = require('express').Router();
const categoriesController = require('../controllers/categories.controller');

router.get('/:type', categoriesController.getCategories);

module.exports = router;
