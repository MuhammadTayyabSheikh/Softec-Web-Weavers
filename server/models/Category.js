const mongoose = require('mongoose');
const InventoryType = require('../constants/InventoryType');

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: Object.values(InventoryType),
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
