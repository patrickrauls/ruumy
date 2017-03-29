//modules
const express = require('express'),
    sendgrid = require('sendgrid');

//methods    
const router = express.Router(),
    helper = sendgrid.mail,
    send = sendgrid(process.env.SENDGRID_KEY);

const welcome = `Hey there!

Thanks for getting in touch! You're going places and we're excited to be along for the ride. Whether it's a study abroad in Salamanca, a quick trip to Salt Lake, or a reunion at home in Springfield, rest assured that your belongings are safe and accessible the moment you get back. 

As we prepare for the summer break at DU, here are some things you can do to stay ahead of the rush:
 
 
Check your email! We'll make sure to keep you in the know with important dates and other information to make this transition easier.
Ask questions! We're here to help. If ever you have a question about this process just let us know with a simple email. We're happy to talk.
Make a plan! Moving can be a pain. It only makes it worse if you don't know where you're going or when. We'll keep you updated with important dates, use them to plan!
 
 
We're looking forward to meeting you this year. Don't be afraid to say hi!

Go PIOS!

The RUUMY Team`;

router.post('/', (req, res) => {
    let from = new helper.Email('nathan@getruumy.com'),
        to = new helper.Email(req.body.email),
        subject = 'Storage is about to get way easier!',
        content = new helper.Content('text/plain', welcome),
        mail = new helper.Mail(from, subject, to, content);
    mail.from_email.name = 'Nathan @ RUUMY';
    // mail.template_id = 'b9cb617c-3d9b-440c-8e79-bad6f6e8db6f';
    let request = send.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });
    console.log('mail', mail)
    send.API(request, (error, response) => {
        if (error) {
            console.error(error);
            res.status(400).json({ message: 'Uh oh. There was a problem with your request. Please try again later' });
        } else {
            res.status(200).json({ message: 'Thanks! We\'ll Be In Touch!' });
        }
    })
})

router.post('/message', (req, res) => {
    let message = req.body.message;
    res.status(200).json({ message: 'Thanks! Your Message Has Been Sent' });
})
module.exports = router;
