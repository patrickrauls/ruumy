const router = require('express').Router(),
    sendgrid = require('sendgrid');

    

router.post('/', (req, res) => {
    let email = req.body.email;
    res.status(200).json({ message: 'Thanks! We\'ll Be In Touch!' });
})

router.post('/message', (req, res) => {
    let message = req.body.message;
    res.status(200).json({ message: 'Thanks! Your Message Has Been Sent' });
})
module.exports = router;