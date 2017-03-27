const express = require('express'),
    router = express.Router();

const products = [
    {
        title: 'ruumy',
        price: 7,
        description: '2.5 cubic feet of storage'
    },
    {
        title: 'small box',
        price: 5,
        description: '12 X 12 X 18'
    },
    {
        title: 'large box',
        price: 9,
        description: '18 X 18 X 24'
    }
]
router.get('/', (req, res) => {
    res.headers = {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
    }
    console.log('get products', req);
    res.status(200).json(products);
})

module.exports = router;