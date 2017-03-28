const express = require('express'),
    router = express.Router();

const docs = {
    title: 'ruumy',
    docs: 'format'
}
router.get('/', (req, res) => {
    res.status(200).json(docs)
})

module.exports = router;