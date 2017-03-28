const router = require('express').Router(),
    sendgrid = require('sendgrid')(process.env.EMAIL_USER, process.env.EMAIL);

    

router.post('/', (req, res) => {
    let email = req.body.email;
    sendgrid.send({
        to: email,
        from: 'noreply@getruumy.com',
        subject: 'Storage is about to become SUPER EASY',
        text: 'Thanks for signing up to get updates on ruumy. We\'re super excited to have you along for the ride! One of our team members will be in touch with you soon with updates!'
    }, (err, json) => {
        return err ? console.error(err) : console.log(json)
    })
    res.status(200).json({ message: 'Thanks! We\'ll Be In Touch!' });
})

router.post('/message', (req, res) => {
    let message = req.body.message;
    res.status(200).json({ message: 'Thanks! Your Message Has Been Sent' });
})
module.exports = router;