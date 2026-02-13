const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
  mood: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Quote", quoteSchema);