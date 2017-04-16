const query = require('../query'),
    router = require('express').Router();

//create
router.post('/', (req, res) => {
    query.create_cart(req.body)
        .then(cart => {
            res.status(200).json(cart)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        })
})
//read
router.get('/:id', (req, res) => {
    query.read_cart(req.params.id)
        .then(cart => {
            res.status(200).json(cart)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        })
})
//update
router.put('/', (req, res) => {
    query.update_cart(req.body)
        .then(cart => {
            res.status(200).json(cart)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        })
})
//delete
router.delete('/:id', (req, res) => {
    query.delete_cart(req.params.id)
        .then(cart => {
            res.status(200).json(cart)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        })
})
//list
router.get('/', (req, res) => {
    query.list_carts()
        .then(carts => {
            res.status(200).json(carts)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        })
})
module.exports = router;