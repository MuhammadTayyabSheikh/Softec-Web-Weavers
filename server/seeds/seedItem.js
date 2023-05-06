const Item = require('../models/Item');

const seedItem = async () => {
  try {
    await Item.deleteMany();

    const admin = await Item.create(
      [
        {
          title: "The Legend of Zelda: Breath of the Wild",
          description: "An action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles.",
          image: "https://assets-prd.ignimgs.com/2022/06/14/zelda-breath-of-the-wild-1655249167687.jpg",
          marketPrice: 59.99,
          costPrice: 30.00,
          type: "VideoGame",
          stock: 50,
          minAge: 0,
          isDeleted: false,
          category: 'action'
        },
        {
          title: "Super Mario Odyssey",
          description: "A 3D platform game developed and published by Nintendo for the Nintendo Switch.",
          image: "https://assets-prd.ignimgs.com/2022/06/14/zelda-breath-of-the-wild-1655249167687.jpg",
          marketPrice: 59.99,
          costPrice: 25.00,
          type: "VideoGame",
          stock: 30,
          minAge: 0,
          isDeleted: false,
          category: 'action'
        },
        {
          title: "Red Dead Redemption 2",
          description: "A Western action-adventure game developed and published by Rockstar Games for the PlayStation 4, Xbox One, and PC.",
          image: "https://assets-prd.ignimgs.com/2022/06/14/zelda-breath-of-the-wild-1655249167687.jpg",
          marketPrice: 59.99,
          costPrice: 35.00,
          type: "VideoGame",
          stock: 20,
          minAge: 18,
          isDeleted: false,
          category: 'adventure'
        },
        {
          title: "The Last of Us Part II",
          description: "An action-adventure game developed by Naughty Dog and published by Sony Interactive Entertainment for the PlayStation 4.",
          image: "https://assets-prd.ignimgs.com/2022/06/14/zelda-breath-of-the-wild-1655249167687.jpg",
          marketPrice: 59.99,
          costPrice: 40.00,
          type: "VideoGame",
          stock: 10,
          minAge: 18,
          isDeleted: false,
          category: 'adventure'
        },

        {
          title: "Logitech G Pro X Headset",
          description: "Professional gaming headset with Blue VO!CE mic technology and premium audio drivers",
          image: "https://thumbs.dreamstime.com/b/gaming-keyboard-rgb-light-white-mechanical-backlight-212226943.jpg",
          marketPrice: 129.99,
          costPrice: 89.99,
          type: "GamingGear",
          stock: 50,
          minAge: 0,
          isDeleted: false,
          category: 'strategy'
        }, 
        {
          title: "Razer DeathAdder V2 Gaming Mouse",
          description: "Ultra-fast and accurate gaming mouse with customizable Chroma RGB lighting",
          image: "https://thumbs.dreamstime.com/b/gaming-keyboard-rgb-light-white-mechanical-backlight-212226943.jpg",
          marketPrice: 69.99,
          costPrice: 49.99,
          type: "GamingGear",
          stock: 30,
          minAge: 0,
          isDeleted: false,
          category: 'strategy'
        }, {
          title: "HyperX Cloud II Gaming Headset",
          description: "Comfortable and durable gaming headset with 7.1 surround sound",
          image: "https://thumbs.dreamstime.com/b/gaming-keyboard-rgb-light-white-mechanical-backlight-212226943.jpg",
          marketPrice: 99.99,
          costPrice: 79.99,
          type: "GamingGear",
          stock: 20,
          minAge: 0,
          isDeleted: false,
          category: 'Gamming mouse'
        },
        {
          title: "Logitech G502 HERO High Performance Gaming Mouse",
          description: "Advanced gaming mouse with HERO 25K sensor and customizable weights",
          image: "https://thumbs.dreamstime.com/b/gaming-keyboard-rgb-light-white-mechanical-backlight-212226943.jpg",
          marketPrice: 79.99,
          costPrice: 59.99,
          type: "GamingGear",
          stock: 25,
          minAge: 0,
          isDeleted: false,
          category: 'Gamming mouse'
        }, {
          title: "SteelSeries Apex Pro TKL Mechanical Gaming Keyboard",
          description: "High-performance gaming keyboard with customizable OLED display and adjustable actuation",
          image: "https://thumbs.dreamstime.com/b/gaming-keyboard-rgb-light-white-mechanical-backlight-212226943.jpg",
          marketPrice: 179.99,
          costPrice: 139.99,
          type: "GamingGear",
          stock: 10,
          minAge: 0,
          isDeleted: false,
          category: 'gaming headset'
        }, {
          title: "ASUS ROG Strix Scope RGB Mechanical Gaming Keyboard",
          description: "Compact and durable gaming keyboard with Cherry MX RGB switches and customizable lighting",
          image: "https://thumbs.dreamstime.com/b/gaming-keyboard-rgb-light-white-mechanical-backlight-212226943.jpg",
          marketPrice: 149.99,
          costPrice: 119.99,
          type: "GamingGear",
          stock: 15,
          minAge: 0,
          isDeleted: false,
          category: 'gaming headset'
        }, {
          title: "Super Mario Odyssey",
          description: "A 3D platform game developed and published by Nintendo for the Nintendo Switch.",
          image: "https://assets-prd.ignimgs.com/2022/06/14/zelda-breath-of-the-wild-1655249167687.jpg",
          marketPrice: 59.99,
          costPrice: 25,
          type: "VideoGame",
          stock: 30,
          minAge: 0,
          isDeleted: false,
          category: 'sports'
        }, {
          title: "The Last of Us Part II",
          description: "An action-adventure game developed by Naughty Dog and published by Sony Interactive Entertainment for the PlayStation 4.",
          image: "https://assets-prd.ignimgs.com/2022/06/14/zelda-breath-of-the-wild-1655249167687.jpg",
          marketPrice: 59.99,
          costPrice: 40,
          type: "VideoGame",
          stock: 10,
          minAge: 18,
          isDeleted: false,
          category: 'sports'
        }, {
          title: "The Legend of Zelda: Breath of the Wild",
          description: "An action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles.",
          image: "https://assets-prd.ignimgs.com/2022/06/14/zelda-breath-of-the-wild-1655249167687.jpg",
          marketPrice: 59.99,
          costPrice: 30,
          type: "VideoGame",
          stock: 50,
          minAge: 0,
          isDeleted: false,
          category: 'multiplayer'
        }, {
          title: "Red Dead Redemption 2",
          description: "A Western action-adventure game developed and published by Rockstar Games for the PlayStation 4, Xbox One, and PC.",
          image: "https://assets-prd.ignimgs.com/2022/06/14/zelda-breath-of-the-wild-1655249167687.jpg",
          marketPrice: 59.99,
          costPrice: 35,
          type: "VideoGame",
          stock: 20,
          minAge: 18,
          isDeleted: false,
          category: 'multiplayer'
        }]
    );

    console.log('Item created successfully!');
  } catch (error) {
    console.log(error);
  }
};

module.exports = seedItem;
