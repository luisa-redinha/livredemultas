import { Metadata } from "next";

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
			<body>{children}</body>
		</html>
	);
}
