const Product = require('../models/product');

const product1 = new Product({
    name: "Google-Home"
})

const product2 = new Product({
    name: "Google-Phone"
})

const product3 = new Product({
    name: "Alexa",
})

const product4 = new Product({
    name: "PS5",
})

const product5 = new Product({
    name: "Xbox",
})

const product6 = new Product({
    name: "MSI Laptop",
})

const product7 = new Product({
    name: "Asus Laptop",
})

const product8 = new Product({
    name: "Macbook Pro",
})

const product9 = new Product({
    name: "Samsung Galaxy S10",
})

const product10 = new Product({
    name: "Fitbit Smart Watch",
})

const defaultProducts = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10]

module.exports = {
    defaultProducts
}