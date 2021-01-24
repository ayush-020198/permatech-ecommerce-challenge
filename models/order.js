const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    },
    status: String,
    productsOrdered: [{
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
        name: String,
        quantity: Number
    }],
    time: {
        type: Date,
        default: Date.now
    },
    name: String
},
{
    timestamps: true
})

const Order = mongoose.model("Order", orderSchema);

module.exports = Order