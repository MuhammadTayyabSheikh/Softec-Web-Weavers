const mongoose = require('mongoose');
const InventoryType = require('../constants/InventoryType');

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
    type: {
      type: String,
      required: true,
      enum: Object.values(InventoryType),
    },
    stock: {
      type: Number,
      required: true,
    },
    minAge: {
      type: Number,
      required: true,
      default: 0,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
