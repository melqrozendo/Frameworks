const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.get('/send-email', async (req, res) => {

    //chamando a dependencia e a função com suas propriedades:
    /*nodemailer.createTransport({
        //adicionar as credencias do meu servidor
        host: "smtp.example.com",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
          user: "username",
          pass: "password",
        },
      });*/

      //servidor fake mailtrap com configuraçoes SMTP
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "bd21afaef97cdc",
          pass: "0f0a7d62c656b1"
        }
      });

      //montar msg para usuario
      var message = {
        from: "programador@inbox.mailtrap.io",
        to: "melq.rozendo@inbox.mailtrap.io",
        subject: "Message title",
        text: "Plaintext version of the message",
        html: "<p>HTML version of the message</p>"
      };

      //como enviar o email, chamo as config do SMTP e a função sendMail que recebe os dados da message
    //   transport.sendMail(message);
    transport.sendMail(message, function (err) {
        if(err) return res.status(400).json({
            erro: true,
            mensagem: 'E-mail não enviado com sucesso!'
        });
    });

    return res.json({
        erro: false,
        mensagem: 'E-mail enviado com sucesso!'
    });

});

app.listen(8081, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8081");
});