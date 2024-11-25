import { ContactData } from "@/app/sections/ContactUs";
import nodemailer from "nodemailer";
import { Attachment, AttachmentLike } from "nodemailer/lib/mailer";

import { readFile, readFileSync } from "node:fs";
import EmailInfo from "@/types/EmailInfo";

const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
if (!SMTP_PASSWORD)
	throw new Error("Could not find environment variable 'SMTP_PASSWORD'");

const SMTP_PORT = process.env.SMTP_PORT;
if (!SMTP_PORT)
	throw new Error("Could not find environment variable 'SMTP_PORT'");

const SMTP_HOST = process.env.SMTP_HOST;
if (!SMTP_HOST)
	throw new Error("Could not find environment variable 'SMTP_HOST'");

const SMTP_EMAIL = process.env.SMTP_EMAIL;
if (!SMTP_EMAIL)
	throw new Error("Could not find environment variable 'SMTP_EMAIL'");

export const sendMail = async (data: EmailInfo) => {
	const transporter = nodemailer.createTransport({
		host: SMTP_HOST,
		port: Number(SMTP_PORT),
		secure: true,
		auth: {
			user: SMTP_EMAIL,
			pass: SMTP_PASSWORD,
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	const attachments: Attachment[] = [];

	if (data?.files && data.files.length > 0) {
		for (let i = 0; i < data.files?.length; i++) {
			const content = await data.files[i].arrayBuffer();

			attachments.push({
				content: Buffer.from(content),
				filename: `anexo${i + 1}`,
			});
		}
	}

	const mailOptions = {
		from: "geral@livredemultas.pt",
		to: "geral@livredemultas.pt",
		subject: "Formulário de Contacto",
		html: `<!doctype html>
				<html lang="en">
					<head>
						<meta charset="UTF-8" />
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1.0" />
					</head>
					<body>
						<h2>Formulário de Contacto</h2>
						<p>Esta é uma mensagem automática com os dados submetidos no formulário do site.</p>
					
						<p>Nome: ${data.name}</p>
						 ${data?.email && `<p>Email: ${data.email}</p>`}
						 ${data?.mobile && `<p>Tel: ${data.mobile}</p>`}
						 ${data?.info && `<p>Informação adicional: ${data.info}</p>`}
						
						${Boolean(data?.urgent) ? "<h4>Este pedido é URGENTE</h4>" : "<h4>Sem urgência</h4>"}
						
						${
							data?.email &&
							`
					<h3><a href="mailto:${data.email}">Clique aqui para responder ao cliente</a></h3>`
						}
					</body>
				</html>`,
		attachments,
	};
	console.log(data);
	return;
	try {
		const info = await transporter.sendMail(mailOptions);
		console.log("Message sent: %s", info.messageId);
		return {
			statusCode: 200,
			body: JSON.stringify({ message: "Email sent successfully" }),
		};
	} catch (error) {
		console.error("Error sending email:", error);
		return {
			statusCode: 500,
			body: JSON.stringify({
				message: "Error sending email",
			}),
		};
	}
};
