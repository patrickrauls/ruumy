const query = require('../query'),
    router = require('express').Router(),
    stripe = require('stripe')(process.env.STRIPE_SECRET);

//create
router.post('/', (req, res) => {
    if (req.session) {
        query.create_account(req.body)
            .then(account => {
                res.status(200).json(account)
            })
            .catch(console.error)
    } else {
        res.status(401).redirect('/')
    }
})
//read
router.get('/:id', (req, res) => {
    if (req.session) {
        query.read_account(req.session.key.id)
            .then(account => {
                res.status(200).json(account)
            })
            .catch(console.error)
    } else {
        res.status(401).redirect('/')
    }
})
//update
router.put('/', (req, res) => {
    if (req.session) {
        query.update_account(req.body)
            .then(account => {
                res.status(200).json(account)
            })
            .catch(console.error)
    } else {
        res.status(401).redirect('/')
    }
})
//delete
router.delete('/', (req, res) => {
    if (req.session) {
        query.delete_account(req.session.key.id)
            .then(account => {
                res.status(200).json(account)
            })
            .catch(console.error)
    } else {
        res.status(401).redirect('/')
    }
})
//list
router.get('/', (req, res) => {
    if (req.session) {
        query.list_accounts()
            .then(accounts => {
                res.status(200).json(accounts)
            })
            .catch(console.error)
    } else {
        res.status(401).redirect('/')
    }
})
module.exports = router;