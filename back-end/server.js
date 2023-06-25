require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const productsRoutes = require("./routes/products");

app.use(cors());
app.use(express.json());

app.use("/products", productsRoutes);

app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to the app" });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

process.env;
