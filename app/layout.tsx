import "./main.css";

import { AnimatePresence } from "framer-motion";
import { Metadata } from "next";
import Contacts from "./sections/Contacts";
import Script from "next/script";
import IndexableContent from "./sections/IndexableContent";

export const metadata: Metadata = {
	title: "Livre de Multas",
	description:
		"A melhor plataforma para contestar a sua multa, e recorrer a advogados profissionais para o ajudar.",
	icons: [
		{
			rel: "icon",
			type: "image/ico",
			sizes: "32x32",
			url: "https://livredemultas.pt/favicon.ico",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "100x100",
			url: "https://livredemultas.pt/favicon.png",
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt">
			<head>
				<Script
					id="font-awesome"
					src="https://kit.fontawesome.com/1a62655504.js"
					crossOrigin="anonymous"
					async
				></Script>
				{/* GTAG */}
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=AW-16743308519"
				></Script>
				<Script
					async
					src="/gtag.js"
				/>

				{/* Analytics */}
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-RVTPNK8QHL"
				></Script>
				<Script
					async
					src="/analytics.js"
				></Script>
			</head>
			<body>
				<IndexableContent />
				<div id="bg" />
				<AnimatePresence>{children}</AnimatePresence>
				<Contacts />
			</body>
		</html>
	);
}
