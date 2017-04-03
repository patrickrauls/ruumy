require('dotenv').config();

//modules
const express = require('express'),
    fs = require('fs'),
    https = require('https'),
    body_parser = require('body-parser'),
    redis = require('redis'),
    session = require('express-session'),
    connect_redis = require('connect-redis'),
    path = require('path'),
    helmet = require('helmet'),
    cors = require('cors');

//methods
const app = express(),
    json_parser = body_parser.json(),
    client = redis.createClient(),
    RedisStore = connect_redis(session);

//server
https.createServer({
    cert: fs.readFileSync(process.env.CERT),
    key: fs.readFileSync(process.env.KEY)
}, app).listen(8000);

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
app.set('trust proxy', 1);
app.use(session({
    secret: process.env.SESSION_SECRET,
    cookie: {
        store: new RedisStore({
            host: process.env.SESSION_HOST,
            port: process.env.SESSION_PORT,
            client: client
        }),
    },
    secure: true,
    resave: false,
    saveUninitialized: true
}))
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