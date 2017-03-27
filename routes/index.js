const express = require('express'),
    router = express.Router();

const docs = {
    title: 'ruumy',
    docs: 'format'
}
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
    console.log('get index!', req);
    res.status(200).json(docs)
})
router.get('/products', (req, res) => {
    console.log('get products!', req);
    res.status(200).json(products)
})

module.exports = router;