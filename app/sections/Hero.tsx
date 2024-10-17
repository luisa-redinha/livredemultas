import Button from "@/components/buttons/Button";
import Logo from "@/components/misc/Logo";
import React, { createRef, RefObject } from "react";
import { motion } from "framer-motion";
export default function Hero() {
	return (
		<div className="hero">
			<Logo />

			<div className="hero__info">
				<motion.h2
					className="hero__info__title"
					whileInView={{ opacity: 1 }}
					initial={{ opacity: 0 }}
					transition={{ ease: "easeInOut", delay: 0.2 }}
					exit={{ opacity: 0 }}
				>
					<span>Conteste a sua multa.</span>
					<span>Defenda-se!</span>
				</motion.h2>

				<motion.p
					className="hero__info__text"
					whileInView={{ rotateX: 0 }}
					initial={{ rotateX: 90 }}
					transition={{ ease: "easeInOut", delay: 0.15 }}
					exit={{ rotateX: -90 }}
				>
					Acreditamos na justiça para todos. Se recebeu uma multa que
					considera injusta, conte connosco. Os nossos especialistas
					em direito rodoviário analisarão o seu caso e construirão
					uma defesa sólida em seu nome.
				</motion.p>

				<a
					className="button button--primary"
					href="mailto:geral@livredemultas.pt?subject=Contestar%20Multa"
					target="_blank"
				>
					Fale Connosco
				</a>
			</div>

			<motion.img
				src="/lawyer1.png"
				className="hero__lawyer"
				draggable="false"
				layout
				whileInView={{ opacity: 1, scale: 1 }}
				initial={{ opacity: 0, scale: 0.8 }}
				transition={{ ease: "easeInOut", delay: 0.2 }}
				exit={{ opacity: 0, scale: 0.8 }}
				viewport={{
					amount: 0.5,
					margin: "0%",
				}}
			/>
		</div>
	);
}
