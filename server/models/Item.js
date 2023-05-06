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
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
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

const addServerUrl = (image) => {
  if (!image.startsWith('http')) {
    return `${process.env.SERVER_URL}/${image}`;
  }

  return image;
};

userSchema.pre('find', function (next) {
  this.image = addServerUrl(this.image);
  return next();
});

userSchema.pre('findOne', function (next) {
  this.image = addServerUrl(this.image);
  return next();
});

userSchema.pre('findOneAndUpdate', function (next) {
  this.image = addServerUrl(this.image);
  return next();
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
