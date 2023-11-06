const express = require("express"); //backend geral
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer"); //integração smtp email
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

//teste mais u

app.post("/enviar-email", async (req, res) => {
  const { nome, email, telefone, mensagem, assunto } = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "contatopets@petsmellon.com.br",
      pass: "Patense2438",
    },
  });

  let info = await transporter.sendMail({
    from: "contatopets@petsmellon.com.br",
    to: ["vendas@farol.ind.br"],
    subject: "Contato pelo Site Farol",
    html: `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Assunto:</strong> ${assunto}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `,
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`RODANDO NA PORTA ${port}`);
});
