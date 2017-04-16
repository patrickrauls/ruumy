const query = require('../query'),
    router = require('express').Router();

router.get('/', (req, res) => {

})
router.post('/location_type', (req, res) => {
    query.create_location_type(req.body)
        .then(location_type => {
            res.status(200).json(location_type)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({
                location: "admin/location_type post route",
                error
            });
        })
})
router.get('/location_type', (req, res) => {
    query.list_location_types()
        .then(location_types => {
            res.status(200).json(location_types);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error)
        })
})

module.exports = router;