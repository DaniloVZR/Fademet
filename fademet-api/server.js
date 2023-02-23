const express = require('express');
const cors = require('cors')
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/api/contact', (req, res) => {
  const { name, subject, email, message } = req.body;

  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 'danilodgeg@gmail.com',
  //     pass: 'profeso1'
  //   }
  // });

  var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ee892c79ae23dd",
      pass: "967afa2ac219f4"
    }
  });

  const mailOptions = {
    from: email,
    to: 'daniloud2809@gmail.com',
    subject: `Mensaje de ${name}: ${subject}`,
    text: `${message}`,
    html: `
      <h2>${subject}</h2>
      <h4>${message}</h4>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el correo electrónico');
    } else {
      console.log(`Correo electrónico enviado: ${info.response}`);
      res.status(200).send('Correo electrónico enviado con éxito');
    }
  });
});

app.listen(3001, () => console.log('Servidor iniciado en el puerto 3001'));