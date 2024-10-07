import SectionThumbnail from "@/components/buttons/SectionThumbnail";
import Section from "@/components/containers/Section";
import React from "react";

export default function Porque() {
	const sectionThumbnailDelay = 0.25;

	return (
		<Section className="porque">
			<h2>Porquê Contestar</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Necessitatibus animi architecto aspernatur adipisci, non, ad
				corrupti exercitationem harum eligendi ipsam libero doloremque
				at a aperiam quia quaerat aut. Explicabo, doloribus.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Necessitatibus animi architecto aspernatur adipisci, non, ad
				corrupti exercitationem harum eligendi ipsam libero doloremque
				at a aperiam quia quaerat aut. Explicabo, doloribus. Lorem
				ipsum, dolor sit amet consectetur adipisicing elit.
			</p>
			<img
				src="/lawyer2.jpg"
				alt=""
			/>

			<div className="multas-comuns">
				<SectionThumbnail
					tabIndex={1}
					src="/multa1.jpg"
					label="Excesso de Velocidade"
					whileInView={{ opacity: 1 }}
					initial={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					transition={{
						delay: sectionThumbnailDelay * 1,
						ease: "easeInOut",
						duration: 1.5,
					}}
				/>
				<SectionThumbnail
					tabIndex={2}
					src="/multa2.png"
					label="Excesso de Alcool"
					whileInView={{ opacity: 1 }}
					initial={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					transition={{
						delay: sectionThumbnailDelay * 2,
						ease: "easeInOut",
						duration: 1.5,
					}}
				/>
				<SectionThumbnail
					tabIndex={3}
					src="/multa3.png"
					label="Multas a Empresas"
					path="./multas"
					whileInView={{ opacity: 1 }}
					initial={{ opacity: 0 }}
					exit={{ opacity: 0, transitionDelay: "unset" }}
					transition={{
						delay: sectionThumbnailDelay * 3,
						ease: "easeInOut",
						duration: 1.5,
					}}
				/>
				<SectionThumbnail
					tabIndex={4}
					src="/multa4.png"
					label="Outras Multas"
					path="./multas"
					whileInView={{ opacity: 1 }}
					initial={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					transition={{
						delay: sectionThumbnailDelay * 4,
						ease: "easeInOut",
						duration: 1.5,
					}}
				/>
			</div>
		</Section>
	);
}
