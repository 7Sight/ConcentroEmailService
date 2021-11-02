const nodemailer = require('nodemailer');

let now = new Date

let localDate = '0' + now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear() + ' ' + now.getHours() +
    ':' + now.getMinutes() + ':' + now.getSeconds()

module.exports = {

    async send(req, res) {

        try {
            const bodyReq = req.headers;

            console.log(bodyReq);

            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                secure: true,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS
                },

            })

            const emailSent = await transporter.sendMail({
                html:
                    ` Um possivel cliente ficou interessado em nossos serviços, segue os dados para contato:<br>
                <b>Nome:</b> ${bodyReq.nome} <br>
                <b>E-mail:</b> ${bodyReq.email} <br> 
                <b>Telefone:</b> ${bodyReq.telefone} <br>
                <b>Descrição:</b> ${bodyReq.texto} <br>
                <b>Data:</b> ${localDate}
                `,
                subject: "Um possivel cliente entrou em contato",
                from: "Site <site@concentrodf.com.br>",
                to: ["site@concentrodf.com.br"]

            })

            console.log(emailSent)
            return res.status(200).json({ success: 'Email enviado com sucesso!' });

        } catch (error) {

            console.log(error);
            return res.status(400).json({ error });
        }

    },

    async sendPatner(req, res) {

        try {
            const bodyReq = req.headers;

            console.log(bodyReq);

            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                secure: true,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS
                },

            })

            const emailSent = await transporter.sendMail({
                html:
                    ` Um possivel parceiro ficou interessado em nossos serviços, segue os dados para contato:<br>
                    <b>Nome:</b> ${bodyReq.nome} <br>
                    <b>E-mail:</b> ${bodyReq.email} <br> 
                    <b>Telefone:</b> ${bodyReq.telefone} <br>
                    <b>Descrição:</b> ${bodyReq.texto} <br>
                    <b>Data:</b> ${localDate}
                    `,
                subject: "Um possivel parceiro entrou em contato",
                from: "Site <site@concentrodf.com.br>",
                to: ["site@concentrodf.com.br"]

            })

            console.log(emailSent)
            return res.status(200).json({ success: 'Email enviado com sucesso!' });

        } catch (error) {
            console.log(error);
            return res.status(400).json({ error });
        }

    },

    async sendEJ(req, res) {

        try {
            const bodyReq = req.headers;

            console.log(bodyReq);

            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                secure: true,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS
                },

            })

            const emailSent = await transporter.sendMail({
                html:
                    ` Uma EJ ficou interessada em nossos serviços, segue os dados para contato:<br>
                    <b>Nome:</b> ${bodyReq.nome} <br>
                    <b>E-mail:</b> ${bodyReq.email} <br> 
                    <b>Telefone:</b> ${bodyReq.telefone} <br>
                    <b>Descrição:</b> ${bodyReq.texto} <br>
                    <b>Data:</b> ${localDate}
                    `,
                subject: "Um possivel cliente entrou em contato",
                from: "Site <site@concentrodf.com.br>",
                to: ["site@concentrodf.com.br"]

            })

            console.log(emailSent)
            return res.status(200).json({ success: 'Email enviado com sucesso!' });

        } catch (error) {
            console.log(error);
            return res.status(400).json({ error });
        }

    }

}