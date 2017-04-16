const query = require('../query'),
    router = require('express').Router();

//create
router.post('/', (req, res) => {
    query.create_product(req.body)
        .then(product => {
            res.status(200).json(product)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        })
})
//read
router.get('/:id', (req, res) => {
    query.read_product(req.params.id)
        .then(product => {
            res.status(200).json(product)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        })
})
//update
router.put('/', (req, res) => {
    query.update_product(req.body)
        .then(product => {
            res.status(200).json(product)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        })
})
//delete
router.delete('/:id', (req, res) => {
    query.delete_product(req.params.id)
        .then(product => {
            res.status(200).json(product)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        })
})
//list
router.get('/', (req, res) => {
    query.list_products()
        .then(products => {
            res.status(200).json(products)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        })
})
module.exports = router;