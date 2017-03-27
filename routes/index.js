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
    console.log('index.js res.header()._headers:', res.header()._headers);
    res.status(200).json(docs)
})

module.exports = router;