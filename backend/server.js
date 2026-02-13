require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/quotes", require("./routes/quoteRoutes"));

app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT}`)
);