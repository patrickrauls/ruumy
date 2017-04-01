const query = require('../query'),
    router = require('express').Router();

//create
router.post('/', (req, res) => {
    query.create_cart(req.body)
        .then(cart => {
            res.status(200).json(cart)
        })
        .catch(console.error)
})
//read
router.get('/:id', (req, res) => {
    query.read_cart(req.params.id)
        .then(cart => {
            res.status(200).json(cart)
        })
        .catch(console.error)
})
//update
router.put('/', (req, res) => {
    query.update_cart(req.body)
        .then(cart => {
            res.status(200).json(cart)
        })
        .catch(console.error)
})
//delete
router.delete('/:id', (req, res) => {
    query.delete_cart(req.params.id)
        .then(cart => {
            res.status(200).json(cart)
        })
        .catch(console.error)
})
//list
router.get('/', (req, res) => {
    query.list_carts()
        .then(carts => {
            res.status(200).json(carts)
        })
        .catch(console.error)
})
module.exports = router;