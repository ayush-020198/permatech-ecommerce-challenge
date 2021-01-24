const Order = require('../models/order');

const order1 = new Order({
    customerID: "600d260f96257f1e0acd941c",
    status: "Processing",
    productsOrdered: [{
        _id: '600d660bf045f76e4ad0c0bb',
        name: 'Google-Home',
        quantity: 2
    },
    {
        _id: '600d660bf045f76e4ad0c0bd',
        name: 'Alexa',
        quantity: 1
    }]
})

const order2 = new Order({
    customerID: "600d260f96257f1e0acd941c",
    status: "Processing",
    productsOrdered: [{
        _id: '600d660bf045f76e4ad0c0bd',
        name: 'Alexa',
        quantity: 3
    },{
        _id: '600d660bf045f76e4ad0c0bb',
        name: 'Google-Home',
        quantity: 2
    }]
})

const order3 = new Order({
    customerID: "600d260f96257f1e0acd941d",
    status: "Processing",
    productsOrdered: [{
        _id: "600d660bf045f76e4ad0c0bf",
        name: 'MSI Laptop',
        quantity: 1
    },{
        _id: "600d660bf045f76e4ad0c0c1",
        name: 'Macbook Pro',
        quantity: 1
    }]
})

const order4 = new Order({
    customerID: "600d260f96257f1e0acd941d",
    status: "Processing",
    productsOrdered: [{
        _id: "600d660bf045f76e4ad0c0c2",
        name: 'Samsung Galaxy S10',
        quantity: 3
    },{
        _id: "600d660bf045f76e4ad0c0be",
        name: 'Xbox',
        quantity: 1
    }]
})

const defaultOrders = [order1, order2, order3, order4];

module.exports = {
    defaultOrders
}