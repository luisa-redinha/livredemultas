import "./main.css";

import { AnimatePresence } from "framer-motion";
import { Metadata } from "next";
import Contacts from "./sections/Contacts";
import Script from "next/script";

export const metadata: Metadata = {
	title: "Livre de Multas",
	description:
		"A melhor plataforma para contestar a sua multa, e recorrer a advogados profissionais para o ajudar.",
	icons: "/",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt">
			<head>
				<link
					rel="icon"
					href="/favicon.png"
				/>
				<Script
					id="font-awesome"
					src="https://kit.fontawesome.com/1a62655504.js"
					crossOrigin="anonymous"
					async
				></Script>
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=AW-16743308519"
				></Script>

				<Script src="/gtag.js" />

			</head>
			<body>
				<div id="bg" />
				<AnimatePresence>{children}</AnimatePresence>
				<Contacts />
			</body>
		</html>
	);
}
