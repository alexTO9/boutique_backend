// Import necessary modules and dependencies
const express = require('express');
const router = express.Router();
const productService = require('../services/productService');

// Route to create a new product
router.post('/api/products', async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get all products
router.get('/api/products', async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get a specific product by SKU
router.get('/api/products/:sku', async (req, res) => {
  try {
    const product = await productService.getProductBySku(req.params.sku);
    if (product == null) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to update a specific product by SKU
router.put('/api/products/:sku', async (req, res) => {
  try {
    const product = await productService.updateProduct(req.params.sku, req.body);
    if (product == null) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to delete a specific product by SKU
router.delete('/api/products/:sku', async (req, res) => {
  try {
    const product = await productService.deleteProduct(req.params.sku);
    if (product == null) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
