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
    cert: fs.readFileSync(__dirname + './sslcert/fullchain.pem'),
    key: fs.readFileSync(__dirname + './sslcert/privkey.pem')
};
https.createServer(options, app).listen(8000)

//routes
const route = require('./routes/index'),
    products = require('./routes/products'),
    email = require('./routes/email');

//middleware
app.use(cors());
app.use(body_parser.urlencoded({
    extended: false
}));
app.use(json_parser);

//routing
app.use(helmet());
app.use(express.static(path.join(__dirname, '')));
app.use('/v1', route);
app.use('/v1/email', email);
app.use('/v1/products', products)

//export
module.exports = app;