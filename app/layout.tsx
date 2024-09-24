import "./main.css";

import { Metadata } from "next";
import Contacts from "./sections/Contacts";

export const metadata: Metadata = {
	title: "Livre de Multas",
	description:
		"A melhor plataforma para contestar a sua multa, e recorrer a advogados profissionais para o ajudar.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt">
			<head>
				<script
					src="https://kit.fontawesome.com/1a62655504.js"
					crossOrigin="anonymous"
				></script>
			</head>
			<body>
				<div id="bg" />
				{children}
				<Contacts />
			</body>
		</html>
	);
}
