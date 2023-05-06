const Category = require('../models/Category');
const Item = require('../models/Item');

const seedCategory = async () => {
  try {
    await Item.deleteMany();

    const admin = await Category.create(
      [
        {
          name: "Gaming Mouse",
          type: "GamingGear"
        },
        {
          name: "Gaming Keyboard",
          type: "GamingGear"
        },
        {
          name: "Gaming Headset",
          type: "GamingGear"
        },
        {
          name: "Gaming Chair",
          type: "GamingGear"
        },
        {
          name: "Gaming Monitor",
          type: "GamingGear"
        },
        {
          name: "Gaming Table",
          type: "GamingGear",
        },
        {
          name: "Action",
          type: "VideoGame",
        },
        {
          name: "Adventure",
          type: "VideoGame",
        },
        {
          name: "Role-playing",
          type: "VideoGame",
        },
        {
          name: "Multiplayer",
          type: "VideoGame",
        },
        {
          name: "Strategy",
          type: "VideoGame",
        },
        {
          name: "Sports",
          type: "VideoGame",
        }
      ]
    );

    console.log('category created successfully!');
  } catch (error) {
    console.log(error);
  }
};

module.exports = seedCategory;
