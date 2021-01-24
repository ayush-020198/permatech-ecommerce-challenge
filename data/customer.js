const Customer = require('../models/customer');

const customer1 = new Customer({
    name: "Ayush",
    email: "ayush123@gmail.com"
})

const customer2 = new Customer({
    name: "Aman",
    email: "aman123@gmail.com"
})

const defaultCustomers = [customer1, customer2];

module.exports = {
    defaultCustomers
}