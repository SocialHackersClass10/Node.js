const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');


const app = express();
let port = 3000;

//View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('contact', { layout: false });
});

app.post('/send', (req, res) => {
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact details</h3>
    <ul>
    <li>${req.body.name}</li>
    <li>${req.body.company}</li>
    <li>${req.body.email}</li>
    <li>${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'someone@email.com',
            pass: '123789'
        }
    });


    let mailOptions = {
        from: '"Node Tester 👻" <nodetester@email.com>', // sender address
        to: "test@domain.com", // list of receivers
        subject: "Node contact request", // Subject line
        text: "Hello world?", // plain text body
        html: output // html body
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return console.log(err);
        }
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
    )

    res.render('contact', { layout: false, msg: 'Email has been sent' });
})

app.listen(port, () => console.log(`SERVER RUNNING ON ${port}.`));