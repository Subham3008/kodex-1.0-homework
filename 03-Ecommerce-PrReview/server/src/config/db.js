const mongoose = require("mongoose")

const connectDB = async () => {
  try {

    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connect to DB");

  } catch (err) {
    console.log("Error from DB", err);
  }
}

module.exports = connectDB