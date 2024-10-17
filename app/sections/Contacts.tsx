import IconButton from "@/components/buttons/IconButton";
import React from "react";

export default function Contacts({ className = "" }: { className?: string }) {
	return (
		<section
			id="contacts"
			className={className}
		>
			<a
				href="https://wa.me/+351913785352"
				target="_blank"
			>
				<IconButton icon="whatsapp" />
			</a>
			<a
				href="tel:+351913785352"
				target="_blank"
			>
				<IconButton icon="phone" />
			</a>
			<a
				href="mailto:geral@livredemultas.pt?subject=Contestar%20Multa"
				target="_blank"
			>
				<IconButton icon="email" />
			</a>
		</section>
	);
}
