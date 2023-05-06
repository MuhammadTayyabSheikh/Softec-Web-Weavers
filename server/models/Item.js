const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    marketPrice: {
      type: Number,
      required: true,
    },
    costPrice: {
      type: Number,
      required: true,
    },
    inventoryType: {
      type: String,
      required: true,
      enum: ['gamingGear', 'videoGame'],
    },
    quantity: {
      type: Number,
      required: true,
    },
    minAge: {
      type: Number,
      required: true,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
