const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public',
 {'extensions': ['html', 'css', 'js']}
 ));
 
app.use(express.static('public/images', {extensions: ['png']}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/send', (req, res) => { // Corectăm ruta pentru cererile POST
    const { name, email, message } = req.body;
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'iancustefanteodor@gmail.com',
            pass: 'Agripina26@26',
        },
    });

    const mailOptions = {
        from: email,
        to: transporter.auth.user,
        subject: `New message from ${name}`,
        text: `Name: ${name}\nE-mail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.send('Message not sent, there was a problem!');
        } else {
            console.log('Email sent!' + info.response);
            res.send('Message sent successfully!');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
