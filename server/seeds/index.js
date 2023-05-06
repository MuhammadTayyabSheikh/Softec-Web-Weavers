const seedAdmin = require('./seedAdmin');
const connectDB = require('../utils/connectDB');
const seedItem = require('./seedItem');
const seedCategory = require('./seedCategory');

const seed = async () => {
  try {
    await connectDB();

    // await seedAdmin();
    // await seedItem();
    await seedCategory();
  } catch (error) {
    console.log(error.message);
  } finally {
    process.exit(0);
  }
};

seed();
