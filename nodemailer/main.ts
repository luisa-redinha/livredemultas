import nodemailer from "nodemailer";

// const PASSWORD = process.env.password;
// if (!PASSWORD)
// 	throw new Error("Could not find environment variable 'password'");

const PASSWORD ="123s"

export const sendMail = async ({
	content,
	attachments,
}: {
	content: [string, string | boolean][];
	attachments?: { name: string; content: Buffer }[];
}) => {
	const transporter = nodemailer.createTransport({
		host: "smtp-pt.securemail.pro",
		port: 465,
		secure: true,
		auth: {
			user: "geral@livredemultas.pt",
			pass: PASSWORD,
		},
	});

	const clientMail = content.find((e) => e[0] === "email");

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
				
				${content.map(
					(e) =>
						`<p>${e[0]}: ${
							typeof e[1] === "boolean"
								? e[1]
									? "Sim"
									: "Não"
								: e[1]
						}</p>`
				)}

				<h3><a href="mailto:${clientMail}">Clique aqui para responder ao cliente</a></h3>
			</body>
		</html>`,
		attachments,
	};

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
