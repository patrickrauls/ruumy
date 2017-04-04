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
            return Promise.all([user, argon2.verify(user[0].password, req.body.password)])
        })
        .then(match => {
            if (match) {
                req.session.key = {
                    id: match[0][0].id,
                    token: 'something'
                }
                res.status(200).json(match)
            } else {
                let error = {
                    message: 'invalid email/password pair'
                }
                res.status(401).json(error)
            }
        })
        .catch(error => {
            res.status(500).json(error);
        })
})
module.exports = router;