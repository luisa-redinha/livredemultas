import Section from "@/components/containers/Section";
import Link from "next/link";
export default function page() {
	return (
		<Section className="multas outras-multas">
			<header>
				<h2>Outras Multas</h2>

				<span className="info">
					<p>
						Além das infrações mais comuns, como excesso de
						velocidade e condução sob o efeito de álcool, a equipa
						do Livre de Multas está aqui para o ajudar a contestar
						qualquer tipo de multa rodoviária.
					</p>
					<p>
						Se foi multado por não usar o cinto de segurança, por
						estacionar indevidamente, por conduzir sem carta ou com
						carta caducada, ou mesmo por infrações relacionadas com
						a sinalização, conte connosco. A nossa equipa de
						advogados, especializados em direito rodoviário,
						analisará o seu caso e poderá orientá-lo sobre os
						procedimentos adequados a seguir. Estamos preparados
						para lidar com qualquer situação, desde multas multas
						por excesso de passageiros até infrações.
					</p>
				</span>

				<img
					src={"/multas/outras.webp"}
					alt="Imagem ilustrativa"
				/>
				<nav>
					<Link
						href={"/"}
						className="button button--secondary"
					>
						Início
					</Link>
					<Link
						href={"../"}
						className="button button--secondary"
					>
						Ver Outras Multas
					</Link>
				</nav>
			</header>

			<div className="outras-multas-links">
				<a
					className="button button--primary outras-multas-contact"
					href="mailto:geral@livredemultas.pt?subject=Contestar%20Multa"
					target="_blank"
				>
					Não perca tempo, contacte-nos já!
				</a>

				<a
					className="button button--primary outras-multas-contact"
					href="
				https://www.imt-ip.pt/sites/IMTT/Portugues/EnsinoConducao/ManuaisEnsinoConducao/Documents/Fichas/FT_Contra-Ordenacoes%20Rodoviarias_2011.pdf"
					target="_blank"
				>
					Ler mais sobre as Contraordenações Rodoviárias
				</a>
			</div>
		</Section>
	);
}
