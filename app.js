require('dotenv').config();

//modules
const express = require('express'),
    body_parser = require('body-parser'),
    path = require('path'),
    cors = require('cors');

//methods
const app = express(),
    json_parser = body_parser.json();

//routes
const route = require('./routes/index'),
    products = require('./routes/products');

//middleware
app.use(cors());
app.use(body_parser.urlencoded({
    extended: false
}));
app.use(json_parser);

//routing
app.use(express.static(path.join(__dirname, '')));
app.use('/v1', route);
app.use('/v1/products', products)

//export
module.exports = app;