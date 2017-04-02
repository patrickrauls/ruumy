const query = require('../query'),
    router = require('express').Router();

//create
router.post('/', (req, res) => {
    console.log('req.body', req.body)
    query.create_user(req.body)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(console.error)
})
//read
router.get('/:id', (req, res) => {
    query.read_user(req.params.id)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(console.error)
})
//update
router.put('/', (req, res) => {
    query.update_user(req.body)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(console.error)
})
//delete
router.delete('/:id', (req, res) => {
    query.delete_user(req.params.id)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(console.error)
})
//list
router.get('/', (req, res) => {
    query.list_users()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(console.error)
})
module.exports = router;