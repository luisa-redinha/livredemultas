import Logo from "@/components/misc/Logo";
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
					Se recebeu uma multa e quer contestar, conte connosco. Os
					nossos especialistas em direito rodoviário analisarão o seu
					caso e construirão uma defesa sólida em seu nome.
				</motion.p>

				<div className="hero__contacts">
					<a
						href="https://wa.me/+351913785352"
						className="button button--primary hero__contacts__link"
					>
						<i className="fa-brands fa-whatsapp" />
						Whatsapp
					</a>
					<a
						href="tel:+351913785352"
						className="button button--primary hero__contacts__link"
					>
						<i className="fa-solid fa-mobile-screen" />
						+351 913 785 352
					</a>
					<a
						href="mailto:geral@livredemultas.pt?subject=Contestar%20Multa"
						className="button button--primary hero__contacts__link"
					>
						<i className="fa-regular fa-envelope" />
						Email
					</a>
				</div>
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
