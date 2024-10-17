import SectionThumbnail from "@/components/buttons/SectionThumbnail";
import Section from "@/components/containers/Section";
import React from "react";

export default function Porque() {
	const sectionThumbnailDelay = 0.25;

	return (
		<Section className="porque">
			<h2>Porquê Contestar</h2>
			<p>
				Em Portugal, como em qualquer outro país, é possível contestar
				multas, principalmente as relacionadas com infrações de
				trânsito. A possibilidade de recorrer de uma multa é um direito
				do cidadão, mas exige conhecimento das regras e dos prazos
				legais.
			</p>
			<p>
				Recorrer a um advogado para contestar uma multa é uma forma de
				garantir que os seus direitos serão defendidos de forma adequada
				e profissional. A experiência e os conhecimentos da nossa equipa de advogados
				fazem a diferença entre o sucesso e o fracasso de uma
				contestação!
			</p>
			<img
				src="/lawyer2.webp"
				alt=""
			/>

			<div className="multas-comuns">
				<SectionThumbnail
					tabIndex={1}
					src="/multas/velocidade.webp"
					path="./multas/velocidade"
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
					src="/multas/alcool.webp"
					label="Excesso de Alcool"
					path="./multas/1"
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
					src="/multas/empresas.webp"
					label="Multas a Empresas"
					path="./multas/empresas"
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
					src="/multas/outras.webp"
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
