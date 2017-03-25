const express = require('express'),
    router = express.Router();

const products = [
    {
        title: 'ruumy',
        stock: 25,
        quantity: 1,
        price: 7,
        featured: true
    },
    {
        title: 'large',
        stock: 2,
        quantity: 1,
        price: 9
    },
    {
        title: 'small',
        stock: 0,
        quantity: 1,
        price: 5
    }
]
router.get('/', (req, res) => {
    res.status(200).json(products)
})

module.exports = router;