const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: String,
    name: String
}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product