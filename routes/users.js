console.log('salt', process.env.SALT)
const query = require('../query'),
    argon2 = require('argon2'),
    salt = Buffer.from(new String(process.env.SALT)),
    router = require('express').Router();

//create
router.post('/', (req, res) => {
    argon2.hash(req.body.password, salt)
        .then(hash => {
            req.body.password = hash;
            return req.body;
        })
        .then(user => {
            query.create_user(user)
                .then(user => {
                    res.status(200).json(user)
                })
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
router.delete('/', (req, res) => {
    query.delete_user(req.body)
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