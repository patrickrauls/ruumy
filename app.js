require('dotenv').config();

//modules
const express = require('express'),
    fs = require('fs'),
    https = require('https'),
    body_parser = require('body-parser'),
    path = require('path'),
    helmet = require('helmet'),
    cors = require('cors');

//methods
const app = express(),
    json_parser = body_parser.json();

//server
const options = {
    cert: fs.readFileSync(__dirname + '/keys/fullchain.pem'),
    key: fs.readFileSync(__dirname + '/keys/privkey.pem')
};
https.createServer(options, app).listen(8000)

//routes
const route = require('./routes/index'),
    accounts = require('./routes/accounts'),
    carts = require('./routes/carts'),
    inventories = require('./routes/inventories'),
    locations = require('./routes/locations'),
    orders = require('./routes/orders'),
    products = require('./routes/products'),
    users = require('./routes/users');

//middleware
app.use(cors());
app.use(body_parser.urlencoded({
    extended: false
}));
app.use(json_parser);
app.use(helmet());

//routing
app.use(express.static(path.join(__dirname, '')));
app.use('/v1', route);
app.use('/v1/accounts', accounts);
app.use('/v1/carts', carts);
app.use('/v1/inventories', inventories);
app.use('/v1/locations', locations);
app.use('/v1/orders', orders);
app.use('/v1/products', products);
app.use('/v1/users', users);

//export
module.exports = app;