const Product = require('../models/product');

const getAllProducts = async () => {
  return await Product.find();
};

const getProductBySku = async (sku) => {
  return await Product.findOne({ sku });
};

const createProduct = async (productData) => {
  const product = new Product(productData);
  await product.save();
  return product;
};

const updateProduct = async (sku, updates) => {
  return await Product.findOneAndUpdate({ sku }, updates, { new: true });
};

const deleteProduct = async (sku) => {
  return await Product.findOneAndDelete({ sku });
};

module.exports = {
  getAllProducts,
  getProductBySku,
  createProduct,
  updateProduct,
  deleteProduct
};
