const express = require('express');
const cors = require('cors'); 
const nodemailer = require('nodemailer'); // for sending emails
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Use the cors middleware to enable CORS
app.use(cors());

// Configure middleware to parse JSON requests
app.use(bodyParser.json());

// Set up a basic email sender using nodemailer
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password'
  }
});

// Define an API endpoint for sending emails
app.post('/contact', (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to,
    subject,
    text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
