//modules
const express = require('express'),
    body_parser = require('body-parser');

//methods
const app = express(),
    json_parser = body_parser.json();

//routes
const routes = require('./routes/index'),
    me = require('./routes/me'),
    users = require('./routes/users'),
    orders = require('./routes/orders'),
    invoices = require('./routes/invoices'),
    products = require('./routes/products'),
    inventory = require('./routes/inventory');


//middleware
app.use(json_parser);
app.use(body_parser.urlencoded({
    extended: true
}))

//routing
app.use('/', routes);
app.use('/me', me);
app.use('/users', users);
app.use('/orders', orders);
app.use('/invoices', invoices);
app.use('/products', products);
app.use('/inventory', inventory);

module.exports = app;
