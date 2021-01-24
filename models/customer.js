const mongoose = require('mongoose');

const customerSchema = {
    name: String,
    email: String
}

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer