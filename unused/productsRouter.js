const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Route to create a new product
router.post('/api/products/new', productsController.createProduct);

// Route to get all products
router.get('/api/products', productsController.getAllProducts);

// Route to get a specific product by SKU
router.get('/api/products/:sku', productsController.getProductBySku);

// Route to update a specific product by SKU
router.put('/api/products/:sku', productsController.updateProduct);

// Route to delete a specific product by SKU
router.delete('/api/products/:sku', productsController.deleteProduct);

module.exports = router;
