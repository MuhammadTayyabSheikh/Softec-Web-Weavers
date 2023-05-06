const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  // items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true }],
  items: [
    {
      item: {
        title: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      }
    }],
  status: { type: String, required: true, enum: ['pending', 'delivered', 'cancelled'], default: 'pending' },
  address: { type: String, required: true },
  paymentMethod: { type: String, required: true, enum: ['cash', 'card'], default: 'cash' },
}, {
  timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;