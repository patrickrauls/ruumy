const query = require('../query'),
    router = require('express').Router();

//create
router.post('/', (req, res) => {
    query.create_account(req.body)
        .then(account => {
            res.status(200).json(account)
        })
        .catch(console.error)
})
//read
router.get('/:id', (req, res) => {
    query.read_account(req.params.id)
        .then(account => {
            res.status(200).json(account)
        })
        .catch(console.error)
})
//update
router.put('/', (req, res) => {
    query.update_account(req.body)
        .then(account => {
            res.status(200).json(account)
        })
        .catch(console.error)
})
//delete
router.delete('/:id', (req, res) => {
    query.delete_account(req.params.id)
        .then(account => {
            res.status(200).json(account)
        })
        .catch(console.error)
})
//list
router.get('/', (req, res) => {
    query.list_accounts()
        .then(accounts => {
            res.status(200).json(accounts)
        })
        .catch(console.error)
})
module.exports = router;