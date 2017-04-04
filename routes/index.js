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
            if (match[1]) {
                req.session.user = {
                    id: match[0][0].id,
                    email: match[0][0].email
                }
                res.status(200).json(req.session)
            } else {
                req.session.destroy(error => {
                    error ?
                        res.status(500).send(error) :
                        res.status(401).send('invalid email/password pair')
                })
            }
        })
        .catch(error => {
            res.status(500).json(error);
        })
})
router.get('/logout', (req, res) => {
    req.session.destroy(error => {
        error ?
            res.status(500).json(error) :
            res.status(200).json({ message: 'You have been logged out' })
    })
})
module.exports = router;