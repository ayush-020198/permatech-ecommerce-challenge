const Customer = require('../models/customer');
const defaultCustomers = require('../data/customer');

// handleCustomer is used for showing all the customers
const handleCustomer = (req, res) => {
    Customer.find({}, (err, foundCustomers) => {
        if(foundCustomers.length==0){
            Customer.insertMany(defaultCustomers, (err) => {
                if(err){
                    console.log(err);
                }
            })
        }
        res.json(foundCustomers);
    });
}

module.exports = {
    handleCustomer
}
