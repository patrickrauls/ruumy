const router = require('express').Router();

const docs = {
    title: 'ruumy',
    docs: 'format'
}
router.get('/', (req, res) => {
    console.log('get index!');
    res.status(200).json(docs)
})

module.exports = router;