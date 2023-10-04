const Product = require('../models/Product');

// Function to create a new product
async function createProduct(req, res) {
  try {
    // const product = new Product(req.body);
const newProduct = new Product({
    sku: req.body.sku,
    title: req.body.title,
    stock: req.body.stock,
    colors: req.body.colors,
    sex: req.body.sex,
    size: req.body.size,
    line: req.body.line,
    category: req.body.category,
    regPrice: req.body.regPrice,
    season: req.body.season,
    salePrice: req.body.salePrice,
    saleStartDate: req.body.saleStartDate,
    saleEndDate: req.body.saleEndDate,
    images: req.body.images
  });

    await product.save();
    res.status(201).send(product);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

// Define a POST route for creating new products
app.post('/', (req, res) => {
    // Create a new Product instance with data from the request body
    const newProduct = new Product({
      sku: req.body.sku,
      title: req.body.title,
      stock: req.body.stock,
      colors: req.body.colors,
      sex: req.body.sex,
      size: req.body.size,
      line: req.body.line,
      category: req.body.category,
      regPrice: req.body.regPrice,
      season: req.body.season,
      salePrice: req.body.salePrice,
      saleStartDate: req.body.saleStartDate,
      saleEndDate: req.body.saleEndDate,
      images: req.body.images
    });

// Function to get all products
async function getAllProducts(req, res) {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

// Function to get a specific product by SKU
async function getProductBySku(req, res) {
  try {
    const sku = req.params.sku;
    const product = await Product.findOne({ sku: sku });
    if (!product) {
      res.status(404).send('Product not found');
    } else {
      res.status(200).send(product);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

// Function to update a specific product by SKU
async function updateProduct(req, res) {
  try {
    const sku = req.params.sku;
    const product = await Product.findOneAndUpdate({ sku: sku }, req.body, { new: true });
    if (!product) {
      res.status(404).send('Product not found');
    } else {
      res.status(200).send(product);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

// Function to delete a specific product by SKU
async function deleteProduct(req, res) {
  try {
    const sku = req.params.sku;
    const product = await Product.findOneAndDelete({ sku: sku });
    if (!product) {
      res.status(404).send('Product not found');
    } else {
      res.status(200).send(product);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductBySku,
  updateProduct,
  deleteProduct
};
