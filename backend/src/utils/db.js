const mongoose = require('mongoose');
const colors = require('colors');


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4,
    });
    console.log('--------------------------------------------\nConnected to MongoDB\n--------------------------------------------'.cyan);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
