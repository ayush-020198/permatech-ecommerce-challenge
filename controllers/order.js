const defaultOrders = require('../data/order');
const Order = require('../models/order');

// handleOrder is used for showing all the orders 
const handleOrder = (req, res) => {
    Order.find({}, (err, foundOrders) => {
        if(foundOrders.length==0){
            Order.insertMany(defaultOrders, (err) => {
                if(err){
                    console.log(err);
                }
            });
        }
        res.json(foundOrders);
    });
}

// handleOrderByCustomerId is used for showing all the orders by customer Id
const handleOrderByCustomerId = (req, res) => {
    Order.find({customerID: req.params.id}, (err, foundOrders) => {
        if(foundOrders.length>0){
            res.json(foundOrders);
        }
    })
}

// handleNewOrder is used for posting new order
const handleNewOrder = (req, res) => {
    const customerID = req.params.id;
    const newOrder = new Order({
        customerID,
        status: "Processing",
        productsOrdered: req.body
    })
    newOrder.save();
}

module.exports = {
    handleOrder,
    handleOrderByCustomerId,
    handleNewOrder
}
