//modules
const express = require('express'),
    sendgrid = require('sendgrid');

//methods    
const router = express.Router(),
    helper = sendgrid.mail,
    send = sendgrid(process.env.SENDGRID_KEY);

const welcome = 'Thanks for getting in touch! We\'re making storage super easy and we\'re so excited to have you along for the ride! One of our team members will get in touch with you soon!';
router.post('/', (req, res) => {
    console.log(req.body);
    let from = new helper.Email('noreply@getruumy.com'),
        to = new helper.Email(req.body.email),
        subject = 'Storage is about to get way easier!',
        content = new helper.Content('text/plain', welcome),
        mail = new helper.Mail(from, subject, to, content),
        request = send.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: mail.toJSON()
        });
    send.API(request, (error, response) => {
        if (error) {
            console.error(error);
            res.status(400).json({ message: 'Uh oh. There was a problem with your request. Please try again later' });
        } else {
            console.log(response.statusCode);
            console.log(response.body);
            console.log(response.headers);
            res.status(200).json({ message: 'Thanks! We\'ll Be In Touch!' });
        }
    })
})

router.post('/message', (req, res) => {
    let message = req.body.message;
    res.status(200).json({ message: 'Thanks! Your Message Has Been Sent' });
})
module.exports = router;
