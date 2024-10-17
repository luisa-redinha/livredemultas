"use client";
import SectionThumbnail from "@/components/buttons/SectionThumbnail";
import Section from "@/components/containers/Section";
import Link from "next/link";
import multas from "./multas.json";

export default function page() {
	return (
		<Section className="multas">
			<header>
				<h2>Tipos de Multas</h2>
				<p>
					Temos uma equipa de advogados com uma enorme e elevada
					experiência e exigência na defesa de contraordenações
					rodoviárias e na aplicação do direito rodoviário.
					Identificamos aqui alguns dos tipos de contraordenações cuja
					defesa fazemos. Se pretende evitar a aplicação de uma coima,
					vulgarmente conhecida por multa, nós podemos ajudar.
					
				</p>
				<nav>
					<Link
						className="button button--secondary"
						href="/"
					>
						Início
					</Link>
				</nav>
			</header>

			<div className="grid">
				{/* ===== */}

				<SectionThumbnail
					src={"/multas/velocidade.webp"}
					label="Excesso de Velocidade"
					path={`/multas/velocidade`}
					key={`velocidade`}
				/>

				{/* Multas json data */}

				{multas.map((e, i) => (
					<SectionThumbnail
						{...e}
						src={e.img}
						path={`/multas/${i}`}
						key={`${e.label}-${i}`}
					/>
				))}

				{/* ===== */}

				<SectionThumbnail
					src={"/multas/empresas.webp"}
					label="Multas a Empresas"
					path={`/multas/empresas`}
					key={`multas-empresas`}
				/>

				<SectionThumbnail
					src={"/multas/outras.webp"}
					label="Outras Multas"
					path={`/multas/outras`}
					key={`outras`}
				/>
			</div>
		</Section>
	);
}
