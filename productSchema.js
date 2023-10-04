// product schema v1

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  sku: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  colors: {
    type: String,
    // enum: [
    //   "rosa",
    //   "azul",
    //   "amarillo",
    //   "rojo",
    //   "morado",
    //   "verde",
    //   "naranja",
    //   "negro",
    //   "blanco",
    //   "gris",
    //   "varios"
    // ],
    required: true,
  },
  sex: {
    type: String,
    // enum: ["nino", "nina", "unisex"],
    required: true,
  },
  size: {
    type: String,
    // enum: [
    //   "Prematuro",
    //   "RN",
    //   "0m",
    //   "0-3m",
    //   "3-6m",
    //   "6-9",
    //   "9-12m",
    //   "12-18m",
    //   "18-24m",
    //   "24m",
    //   "3m",
    //   "6m",
    //   "9m",
    //   "12m",
    //   "18m",
    //   "24m",
    //   "1",
    //   "2",
    //   "3",
    //   "1a",
    //   "2a",
    //   "3a",
    //   "4a",
    //   "6a",
    //   "8a",
    //   "3x",
    // ],
    required: true,
  },
  line: {
    type: String,
    enum: ["linea_bebe", "linea_infantil"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    // enum: ["set de 1 pieza", "set de 2 piezas", "mamelucos", "toallas", "vestidos"],
    required: true,
  },
  regPrice: {
    // type: mongoose.Types.Decimal128,
    // min: 0,
    // max: 9999,
    type: String,
    required: true,
  },
  season: {
    type: String,
    enum: ["primavera-verano", "otono-invierno"],
    required: true,
  },
  salePrice: {
    type: mongoose.Types.Decimal128,
    min: 0,
    max: 99,
    required: false,
  },
  saleStartDate: {
    type: Date,
    required: false,
  },
  saleEndDate: {
    type: Date,
    required: false,
  },
  images: {
    type: String,
  },
});

// The next line is how we specify the name of the Collection in the arlekindb
module.exports = mongoose.model('Product', productSchema, 'spring02');