const query = require('../query'),
    router = require('express').Router();

router.get('/', (req, res) => {

})
router.post('/location_type', (req, res) => {
    query.create_location_type(title)
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

module.exports = router;