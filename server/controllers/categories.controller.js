const Category = require('../models/Category');

const getCategories = async (req, res) => {
  try {
    const { type } = req.query;

    const categories = await Category.find({
      type,
    });

    res.status(200).json({ categories });
  } catch (error) {
    console.log('categories/getCategories error: ', error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCategories,
};
