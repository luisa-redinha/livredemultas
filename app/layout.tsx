import "./main.css";

import { AnimatePresence } from "framer-motion";
import { Metadata } from "next";
import Contacts from "./sections/Contacts";

export const metadata: Metadata = {
	title: "Livre de Multas",
	description:
		"A melhor plataforma para contestar a sua multa, e recorrer a advogados profissionais para o ajudar.",
		icons:"/"
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
					async
				></script>
			</head>
			<body>
				<div id="bg" />
				<AnimatePresence>{children}</AnimatePresence>
				<Contacts />
			</body>
		</html>
	);
}
