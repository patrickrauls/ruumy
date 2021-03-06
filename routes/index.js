const express = require('express'),
    query = require('../query'),
    argon2 = require('argon2'),
    crypto = require('crypto'),
    salt = Buffer.from(process.env.SALT),
    log = console.log,
    router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({ message: 'welcome to the ruumy API'})
})
router.get('/session', (req, res) => {
    req.session ?
    res.status(200).json(req.session) :
    res.status(401).send(false);
})
router.get('/login', (req, res) => {
    res.status(401).json({ message: 'Please Login'})
})
router.post('/login', (req, res) => {
    console.log('req.body', req.body)
    query.read_user({ email: req.body.email })
        .then(user => {
            log('user after read', user);
            if (user.length) {
                return Promise.all([user, argon2.verify(user[0].password, req.body.password)])
            }
            throw new Error('no records found');
            return null;
        })
        .then(match => {
            log(match);
            if (match[1]) {
                req.session.user = {
                    id: match[0][0].id,
                    email: match[0][0].email,
                    token: crypto.randomBytes(20).toString('hex')
                }
                log('req.session after created', req.session)
                res.status(200).json(req.session)
            } else if (req.session) {
                req.session.destroy(error => {
                    log('error in destroying session: ', error);
                    error ?
                        res.status(500).json({ message: error.message }) :
                        res.status(401).json({ message: 'invalid email/password pair' })
                })
            }
            else {
                log('no session destroy needed')
                res.status(401).json({ message: 'invalid email/password pair' })
            }
        })
        .catch(error => {
            log('error in reading user', error)
            error.message === 'no records found' ?
                res.status(401).json({ message: error.message }) :
                res.status(500).json({ message: error.message })
        })
})
router.get('/logout', (req, res) => {
    req.session.destroy(error => {
        error ?
            res.status(500).json({ message: error.message }) :
            res.status(200).json({ message: 'You have been logged out' })
    })
})
module.exports = router;