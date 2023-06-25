const Product = require("../models/product");
const mongoose = require("mongoose");

const getProducts = async (req, res) => {
  const products = await Product.find({}).sort({ createdAt: -1 });

  res.status(200).json(products);
};

const createProduct = async (req, res) => {
  const { name, price } = req.body;

  try {
    const product = await Product.create({ name, price });
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getProductById = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return { status: 404, error: "No such product" };
  }

  const product = await Product.findById(id);

  if (!product) {
    return { status: 400, error: "No such product" };
  }

  return { status: 200, product };
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const result = await getProductById(id);

  if (result.error) {
    return res.status(result.status).json({ error: result.error });
  }

  await Product.deleteOne({ _id: id });
  res.status(200).json(result.product);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const result = await getProductById(id);

  if (result.error) {
    return res.status(result.status).json({ error: result.error });
  }

  res.status(200).json(result.product);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const result = await getProductById(id);

  if (result.error) {
    return res.status(result.status).json({ error: result.error });
  }

  await Product.UpdateOne({ _id: id }, { ...req.body });
  res.status(200).json(result.product);
};

module.exports = {
  createProduct,
  getProduct,
  getProducts,
  deleteProduct,
  updateProduct,
};
