const express = require("express");
const router = express.Router();
const {
  getRandomQuote,
  addQuote
} = require("../controllers/quoteControllers");

router.get("/:mood", getRandomQuote);
router.post("/", addQuote);

module.exports = router;