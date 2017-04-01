const query = require('../query'),
    router = require('express').Router();

//create
router.post('/', (req, res) => {
    query.create_order(req.body)
        .then(order => {
            res.status(200).json(order)
        })
        .catch(console.error)
})
//read
router.get('/:id', (req, res) => {
    query.read_order(req.params.id)
        .then(order => {
            res.status(200).json(order)
        })
        .catch(console.error)
})
//update
router.put('/', (req, res) => {
    query.update_order(req.body)
        .then(order => {
            res.status(200).json(order)
        })
        .catch(console.error)
})
//delete
router.delete('/:id', (req, res) => {
    query.delete_order(req.params.id)
        .then(order => {
            res.status(200).json(order)
        })
        .catch(console.error)
})
//list
router.get('/', (req, res) => {
    query.list_orders()
        .then(orders => {
            res.status(200).json(orders)
        })
        .catch(console.error)
})
module.exports = router;