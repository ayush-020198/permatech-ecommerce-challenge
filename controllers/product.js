const defaultProducts = require('../data/product');
const Product = require('../models/product');


// handleProduct is used for showing all the products 
const handleProduct = (req, res) => {
    Product.find({}, (err, foundProducts) => {
        if(foundProducts.length==0){
            Product.insertMany(defaultProducts, (err) => {
                if(err){
                    console.log(err);
                }
            });
        }
        res.json(foundProducts);
    });
}

// handleNewProduct is used for posting new products 
const handleNewProduct = (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
    });

    newProduct.save();
}

module.exports = {
    handleProduct,
    handleNewProduct
}