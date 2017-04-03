const express = require('express'),
    router = express.Router();


router.get('/', (req, res) => {
    req.session.redis = true;
    res.status(200).json(req.session)
})

module.exports = router;