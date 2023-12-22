// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
