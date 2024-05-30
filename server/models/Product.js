const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    color: String,
    type: String,
    gender: String,
    price: Number,
    quantity: Number,
    image: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;