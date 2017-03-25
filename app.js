//modules
const express = require('express'),
    body_parser = require('body-parser');

//methods
const app = express(),
    json_parser = body_parser.json();

//routes
const route = require('./routes/index'),
    products = require('./routes/products');

//middleware
app.use(body_parser.urlencoded({
    extended: false
}));
app.use(json_parser);

//routing
app.use('/', route);
app.use('/products', products);

//export
module.exports = app;