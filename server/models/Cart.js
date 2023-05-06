const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
    quantity: { type: Number, required: true },
    required: true
  }],
}, {
  timestamps: true,
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;