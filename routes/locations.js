const query = require('../query'),
    router = require('express').Router();

//create
router.post('/', (req, res) => {
    query.create_location(req.body)
        .then(location => {
            res.status(200).json(location)
        })
        .catch(console.error)
})
//read
router.get('/:id', (req, res) => {
    query.read_location(req.params.id)
        .then(location => {
            res.status(200).json(location)
        })
        .catch(console.error)
})
//update
router.put('/', (req, res) => {
    query.update_location(req.body)
        .then(location => {
            res.status(200).json(location)
        })
        .catch(console.error)
})
//delete
router.delete('/:id', (req, res) => {
    query.delete_location(req.params.id)
        .then(location => {
            res.status(200).json(location)
        })
        .catch(console.error)
})
//list
router.get('/', (req, res) => {
    query.list_locations()
        .then(locations => {
            res.status(200).json(locations)
        })
        .catch(console.error)
})
module.exports = router;