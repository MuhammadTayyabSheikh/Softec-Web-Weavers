const seedAdmin = require('./seedAdmin');
const connectDB = require('../utils/connectDB');

const seed = async () => {
  try {
    await connectDB();

    await seedAdmin();
  } catch (error) {
    console.log(error.message);
  } finally {
    process.exit(0);
  }
};

seed();
