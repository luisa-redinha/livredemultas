import Section from "@/components/containers/Section";
import Link from "next/link";
export default function page() {
	return (
		<Section className="multas">
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
						a sinalização, conte connosco. Nossa equipa de advogados
						especializados em direito rodoviário analisará o seu
						caso e o orientará sobre os próximos passos. Não se
						preocupe, estamos preparados para lidar com a maioria
						das situações, desde multas por excesso de lotação até
						infrações relacionadas com o estado do veículo
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

			<a
				className="button button--primary outras-multas-contact"
				href="mailto:geral@livredemultas.pt?subject=Contestar%20Multa"
				target="_blank"
			>
				Não perca tempo, contacte-nos já!
			</a>
		</Section>
	);
}
