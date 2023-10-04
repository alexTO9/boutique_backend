const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  sku: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  stock: { type: Number, required: true },
  colors: [{ type: String }],
  sex: { type: String },
  size: { type: String },
  line: { type: String },
  category: { type: String },
  regPrice: { type: Number },
  season: { type: String },
  salePrice: { type: Number },
  saleStartDate: { type: Date },
  saleEndDate: { type: Date },
  images: [{ type: String }]
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
