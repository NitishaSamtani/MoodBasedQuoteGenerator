const mongoose = require("mongoose");
const Quote = require("./models/Quote");
const data = require("./data/quotes.json");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

const seedData = async () => {
  try {
    await Quote.deleteMany();
    await Quote.insertMany(data.quotes);

    console.log("Quotes Seeded Successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

seedData();