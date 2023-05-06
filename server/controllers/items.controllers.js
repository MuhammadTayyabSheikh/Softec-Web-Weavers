const InventoryType = require('../constants/InventoryType');
const Item = require('../models/Item');
const Review = require('../models/Review');
const removeFiles = require('../utils/removeFiles');
const uploadFiles = require('../utils/uploadFiles');

const getItems = async (req, res) => {
  try {
    const { type } = req.params;
    const { page, pageSize, sortBy, sortDirection, search } = req.query;

    if (!Object.values(InventoryType).includes(type)) {
      return res.status(404).json({ message: 'Invalid type' });
    }

    let q = Item.find({
      type,
      $text: {
        $search: search || '',
      },
    });

    if (sortBy) {
      q = q.sort([sortBy || 'createdAt', sortDirection || 'asc']);
    }

    if (page) {
      q = q.skip(page * (pageSize || 10));
    }

    if (pageSize) {
      q = q.limit(pageSize || 10);
    }

    const items = await q.exec();

    // foreach item get Reviews
    const itemsWithReviews = await Promise.all(
      items.map(async (item) => {
        const reviews = await Review.find({ item: item._id }).exec();
        item.reviews = reviews;
        return item;
      }),
    );

    res.status(200).json({ items: itemsWithReviews });
  } catch (error) {
    console.log('items/getItems error: ', error);
    res.status(500).json({ message: error.message });
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;

    const item = Item.findById(id);

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    const reviews = await Review.find({ item: item._id }).exec();

    item.reviews = reviews;

    res.status(200).json({ item });
  } catch (error) {
    console.log('items/getItem error: ', error);
    res.status(500).json({ message: error.message });
  }
};

const createItem = async (req, res) => {
  try {
    const { type } = req.params;
    const { title, description, marketPrice, costPrice, stock, minAge } =
      req.body;

    if (!Object.values(InventoryType).includes(type)) {
      return res.status(404).json({ message: 'Invalid type' });
    }

    const image = uploadFiles(req.files.image);

    const item = await Item.create({
      type,
      title,
      description,
      marketPrice,
      costPrice,
      stock,
      minAge,
      image,
    });

    item.reviews = [];

    res.status(200).json({ item });
  } catch (error) {
    console.log('items/createItem error: ', error);
    res.status(500).json({ message: error.message });
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, marketPrice, costPrice, stock, minAge } =
      req.body;
    const { image } = req?.files;

    const item = Item.findById(id);

    if (!item) return res.status(400).json({ message: 'Item not found' });

    if (title) item.title = title;
    if (description) item.description = description;
    if (marketPrice) item.marketPrice = marketPrice;
    if (costPrice) item.costPrice = costPrice;
    if (stock) item.stock = stock;
    if (minAge) item.minAge = minAge;
    if (image) {
      await removeFiles(item.image);
      item.image = await uploadFiles(image);
    }

    await item.save();

    res.status(200).json({ item });
  } catch (error) {
    console.log('items/createItem error: ', error);
    res.status(500).json({ message: error.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.query;

    const item = await Item.findByIdAndUpdate(id, {
      isDeleted: true,
    });

    if (!item) return res.status(404).json({ message: 'Item not found' });

    return res.status(200).json('Item deleted');
  } catch (error) {
    console.log('items/deleteItem error: ', error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
