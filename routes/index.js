const express = require('express'),
    query = require('../query'),
    argon2 = require('argon2'),
    salt = Buffer.from(process.env.SALT),
    router = express.Router();


router.get('/', (req, res) => {
    res.status(200).send()
})
router.post('/login', (req, res) => {
    query.read_user({ email: req.body.email })
        .then(user => {
            console.log('hash', user)
            return Promise.all([user, argon2.verify(user[0].password, req.body.password)])
        })
        .then(match => {
            console.log('match', match)
        })
        .catch(console.error)
})
module.exports = router;