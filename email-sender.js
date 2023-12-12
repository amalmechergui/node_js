const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'myemail@gmail.com',
    pass: 'mypassword',
  },
});

const mailOptions = {
  from: 'myemail@gmail.com',
  to: 'myfriend@gmail.com',
  subject: 'Test Email',
  text: 'This is a test ',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});