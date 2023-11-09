const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const storage = multer.memoryStorage(); // Armazenar o arquivo na memória
const upload = multer({ storage: storage });

// Chave de API do Mailchimp
const apiKey = "12cc0a102a3daa7d7576d456a71f7a63"; // Substitua pela sua chave de API

// "Data Center" do Mailchimp
const dataCenter = "us21"; // Substitua pelo seu "Data Center" do Mailchimp

app.get("/check-email/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const endpoint = `https://${dataCenter}.api.mailchimp.com/3.0/search-members?query=${encodeURIComponent(
      email
    )}`;

    const headers = {
      Authorization: `apikey ${apiKey}`,
    };

    const response = await axios.get(endpoint, { headers });

    if (response.data.exact_matches.total_items > 0) {
      return res.status(200).json({ message: "Email já cadastrado" });
    } else {
      return res.status(404).json({ message: "Email não cadastrado" });
    }
  } catch (error) {
    console.error("Erro ao verificar o email:", error);
    res.status(500).json({ error: "Erro ao verificar o email" });
  }
});

app.post("/cadastro", async (req, res) => {
  const { email, nome, telefone, mensagem } = req.body;

  try {
    const listId = "3420a22b5d"; // Substitua pelo ID da lista no Mailchimp

    // Endpoint da API do Mailchimp
    const endpoint = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${listId}/members`;

    // Configuração do cabeçalho com a chave de API do Mailchimp
    const headers = {
      Authorization: `apikey ${apiKey}`,
      "Content-Type": "application/json",
    };

    // Dados do novo contato
    const data = {
      email_address: email,
      status: "subscribed", // O status 'subscribed' adiciona o contato à lista
      merge_fields: {
        FNAME: nome,
        PHONE: telefone,
        MESSAGE: mensagem,
      },
    };

    // Enviar a solicitação POST para adicionar o contato à lista
    const response = await axios.post(endpoint, data, { headers });

    console.log("Resposta do Mailchimp:", response.data);

    res.status(200).json({ message: "Cadastro realizado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar os dados para o Mailchimp:", error);
    res.status(500).json({
      error: "Ocorreu um erro ao enviar os dados. Tente novamente mais tarde.",
    });
  }
});

/* async function enviarEmail(
  nome,
  telefone,
  email,
  tempo,
  empresas,
  representa,
  segmento,
  mensagem
) {
  try {
    let transporter = nodemailer.createTransport(
      smtpTransport({
        service: "smtp.gmail.com", // Exemplo: 'Gmail' para Gmail
        port: 465,
        secure: true,
        auth: {
          user: "draelisangelasintomas@gmail.com",
          pass: "wsuhctsbwvazelcp", // Substitua pela senha da sua conta de e-mail
        },
      })
    );
    let info = await transporter.sendMail({
      from: "draelisangelasintomas@gmail.com", // Substitua pelo seu endereço de e-mail
      to: "benolopesdias@gmail.com", // Substitua pelo endereço de e-mail do destinatário
      subject: "Assunto do E-mail",
      html: `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>email:</strong> ${email}</p>
        <p><strong>Tempo:</strong> ${tempo}</p>
        <p><strong>Empresas:</strong> ${empresas}</p>
        <p><strong>Representa:</strong> ${representa}</p>
        <p><strong>Segmento:</strong> ${segmento}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `,
    });
    /*     if (propostaFile) {
      // Se houver um arquivo de proposta, anexe-o ao e-mail
      const fileContent = propostaFile.toString("base64");

      message.attachments = [
        {
          filename: propostaName,
          content: fileContent,
        },
      ];
    } */
/*

    console.log("Email enviado com sucesso", info.messageId);
  } catch (err) {
    console.error(err);
  }
} */

async function enviarEmailBackend(
  nome,
  telefone,
  email,
  tempo,
  empresas,
  representa,
  segmento,
  mensagem,
  propostaFile,
  propostaName
) {
  try {
    // Configurações do servidor SMTP
    let transporter = nodemailer.createTransport(
      smtpTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "vendascardealempreendimentos@gmail.com",
          pass: "fcyrwldhmqmvkqqy",
        },
      })
    );

    // Corpo do e-mail
    let mailOptions = {
      from: "vendascardealempreendimentos@gmail.com",
      to: ["matheustxr.profissional@gmail.com"],
      subject: "Frutal - Mensagem do formulário da landing page",
      html: `<p>Nome: ${nome}</p>
             <p>Telefone: ${telefone}</p>
             <p>E-mail: ${email}</p>
             <p><strong>Tempo:</strong> ${tempo}</p>
             <p><strong>Empresas:</strong> ${empresas}</p>
             <p><strong>Representa:</strong> ${representa}</p>
             <p><strong>Segmento:</strong> ${segmento}</p>
             <p>Mensagem: ${mensagem}</p>`,
    };

    //teste afs

    // Verificar se um arquivo foi fornecido antes de adicionar o anexo
    if (propostaFile) {
      mailOptions.attachments = [
        {
          filename: propostaName,
          content: propostaFile.buffer, // Use o buffer do arquivo
        },
      ];
    }

    let info = await transporter.sendMail(mailOptions);

    console.log("E-mail enviado: %s", info.messageId);
  } catch (err) {
    console.error(err);
  }
}

/* app.post("/send-email", async (req, res) => {
  const { nome, email, tempo, empresas, representa, segmento, mensagem } =
    req.body;

  try {
    await enviarEmail(
      nome,
      email,
      tempo,
      empresas,
      representa,
      segmento,
      mensagem
    );
    res.status(200).json({ msg: "E-mail enviado com sucesso" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    res.status(500).json({ error: "Erro ao enviar e-mail" });
  }
}); */

app.post("/send-email", upload.single("propostaFile"), async (req, res) => {
  const {
    nome,
    telefone,
    email,
    tempo,
    empresas,
    representa,
    segmento,
    mensagem,
    propostaName,
  } = req.body;

  const propostaFile = req.file; // O arquivo enviado

  try {
    await enviarEmailBackend(
      nome,
      telefone,
      email,
      tempo,
      empresas,
      representa,
      segmento,
      mensagem,
      propostaFile,
      propostaName
    );
    res.status(200).json({ msg: "E-mail enviado com sucesso" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    res.status(500).json({ error: "Erro ao enviar e-mail" });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
