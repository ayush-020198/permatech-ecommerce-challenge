const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const customer = require('./controllers/customer');
const order = require('./controllers/order');
const product = require('./controllers/product');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ecommerceDB', {useUnifiedTopology: true, useNewUrlParser: true});

app.get('/api/customer', (req, res) => {customer.handleCustomer(req, res)});

app.get('/api/order', (req, res) => {order.handleOrder(req, res)});

app.get('/api/order/:id', (req, res) => {order.handleOrderByCustomerId(req, res)});

app.post('/api/order/:id', (req, res) => {order.handleNewOrder(req, res)});

app.get('/api/product', (req, res) => {product.handleProduct(req, res)});

app.post('/api/product', (req, res) => {product.handleNewProduct(req, res)})

const PORT = 3000 || process.env.NODE;

app.listen(3000, console.log(`Server is running on PORT ${PORT}`));