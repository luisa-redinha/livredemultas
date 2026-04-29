import "./main.css";
import { AnimatePresence } from "framer-motion";
import { Metadata } from "next";
import Script from "next/script";
import Contacts from "./sections/Contacts";
import IndexableContent from "./sections/IndexableContent";
import ToastProvider from "@/components/providers/ToastProvider";

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
				{/* Font Awesome */}
				<Script
					id="font-awesome"
					src="https://kit.fontawesome.com/1a62655504.js"
					crossOrigin="anonymous"
					strategy="afterInteractive"
				/>

				{/* Google Tag Manager */}
				<Script
					id="gtm-script"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
							(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
							new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
							j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
							'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
							})(window,document,'script','dataLayer','GTM-5NQ24B9H');
						`,
					}}
				/>
			</head>
			<body>
				{/* Google Tag Manager (noscript) */}
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-5NQ24B9H"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
					/>
				</noscript>

				<ToastProvider />
				<IndexableContent />
				<div id="bg" />
				<AnimatePresence>
					{children}
				</AnimatePresence>
				<Contacts />
			</body>
		</html>
	);
}
