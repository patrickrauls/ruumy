const query = require('../query'),
    router = require('express').Router(),
    stripe = require('stripe')(process.env.STRIPE_SECRET);

//create
router.post('/', (req, res) => {
    if (req.session) {
        stripe.customers.create({
            email: req.session.user.email,
            source: req.body.stripeToken
        })
            .then(customer => {
                return Promise.all([
                    customer,
                    query.create_account({ id: customer.id }),
                    query.create_account_user({ account: customer.id, user: req.session.user.id })
                ])
            })
            .then(results => {
                res.status(200).json(results[1])
            })
            .catch(console.error)
    } else {
        res.status(401).redirect('/v1/login')
    }
})
//read
router.get('/:id', (req, res) => {
    if (req.session) {
        query.read_account(req.session.user.id)
            .then(account => {
                res.status(200).json(account)
            })
            .catch(console.error)
    } else {
        res.status(401).redirect('/v1/login')
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
        res.status(401).redirect('/v1/login')
    }
})
//delete
router.delete('/', (req, res) => {
    if (req.session) {
        query.delete_account(req.session.user.id)
            .then(account => {
                res.status(200).json(account)
            })
            .catch(console.error)
    } else {
        res.status(401).redirect('/v1/login')
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
        res.status(401).redirect('/v1/login')
    }
})
module.exports = router;