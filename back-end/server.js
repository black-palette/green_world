require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const productsRoutes = require("./routes/products");

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.json());

app.use("/products", productsRoutes);

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

app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to the app" });
});

process.env;
