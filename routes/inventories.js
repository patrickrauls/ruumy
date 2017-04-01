const query = require('../query'),
    router = require('express').Router();

//create
router.post('/', (req, res) => {
    query.create_inventory(req.body)
        .then(inventory => {
            res.status(200).json(inventory)
        })
        .catch(console.error)
})
//read
router.get('/:id', (req, res) => {
    query.read_inventory(req.params.id)
        .then(inventory => {
            res.status(200).json(inventory)
        })
        .catch(console.error)
})
//update
router.put('/', (req, res) => {
    query.update_inventory(req.body)
        .then(inventory => {
            res.status(200).json(inventory)
        })
        .catch(console.error)
})
//delete
router.delete('/:id', (req, res) => {
    query.delete_inventory(req.params.id)
        .then(inventory => {
            res.status(200).json(inventory)
        })
        .catch(console.error)
})
//list
router.get('/', (req, res) => {
    query.list_inventories()
        .then(inventories => {
            res.status(200).json(inventories)
        })
        .catch(console.error)
})
module.exports = router;