const express = require('express'),
    user = require('../queries/user'),
    log = console.log,
    router = express.Router();

let me;

//USER SELF CRUD////////////////////////////////////////

//C
router.post('/', (request, response) => {
    user.create(request.body)
        .then(me => {
            response.json(me);
        })
        .catch(error => {
            response.json(error);
        })
    log(request.body, request.route);
});

//R
router.get('/:id', (request, response) => {
    user.read(request.params.id)
        .then(me => {
            response.json(me);
        })
        .catch(error => {
            response.json(error);
        })
    log(request.body, request.route);
});

//U
router.patch('/:id', (request, response) => {
    user.update(request.params.id)
        .then(me => {
            response.json(me);
        })
        .catch(error => {
            response.json(error);
        })
    log(request.body, request.route);
});

//D
router.delete('/:id', (request, response) => {
    user.delete(request.params.id)
        .then(me => {
            response.json(me);
        })
        .catch(error => {
            response.json(error);
        })
    log(request.body, request.route);
});
//////////////////////////////////////////////////////
module.exports = router;
