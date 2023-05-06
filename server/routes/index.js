const router = require('express').Router();
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const categoriesRoutes = require('./categories.routes');
const itemsRoutes = require('./items.routes');
const ordersRoutes = require('./orders.routes');
const queriesRoutes = require('./queries.routes');

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/categories', categoriesRoutes);
router.use('/items', itemsRoutes);
router.use('/orders', ordersRoutes);
router.use('/queries', queriesRoutes);

module.exports = router;
