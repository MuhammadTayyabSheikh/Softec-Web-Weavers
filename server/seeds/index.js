const seedAdmin = require('./seedAdmin');
const connectDB = require('../utils/connectDB');

const seed = async () => {
  connectDB();

  try {
    await seedAdmin();
  } catch (error) {
    console.log(error.message);
  }
};

seed();

process.exit(1);
