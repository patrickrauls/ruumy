const express = require('express'),
    router = express.Router(),
    cors = require('cors');

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
router.get('/', cors(), (req, res) => {
    console.log('get products', res._headers);
    res.status(200).json(products);
})

module.exports = router;