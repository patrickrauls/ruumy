const express = require('express'),
    query = require('../query'),
    argon2 = require('argon2'),
    salt = Buffer.from(process.env.SALT),
    log = console.log,
    router = express.Router();


router.get('/', (req, res) => {
    res.status(200).send()
})
router.post('/login', (req, res) => {
    query.read_user({ email: req.body.email })
        .then(user => {
            log('user after read', user);
            if (user.length) {
                return Promise.all([user, argon2.verify(user[0].password, req.body.password)])
            }
            res.status(401).send('invalid email/password pair')
            throw new Error({'message': 'no emails'});
        })
        .then(match => {
            log(match);
            if (match[1]) {
                req.session.user = {
                    id: match[0][0].id,
                    email: match[0][0].email
                }
                log('req.session after created', req.session)
                res.status(200).json(req.session)
            } else if (req.session) {
                req.session.destroy(error => {
                    log('error in destroying session')
                    error ?
                        res.status(500).json(error) :
                        res.status(401).send('invalid email/password pair')
                })
            }
            else {
                log('no session destroy needed')
                res.status(401).send('invalid email/password pair')
            }
        })
        .catch(error => {
            log('error in reading user', error)
            res.status(500).send(error);
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