import Section from "@/components/containers/Section";
import Link from "next/link";
export default function page() {
	return (
		<Section className="multas">
			<header>
				<h2>Excesso de Velocidade</h2>

				<span className="info">
					<p>
						O excesso do limite máximo de velocidade que configure
						contraordenação grave ou muito grave é passível de
						aplicação da sanção acessória de inibição de conduzir e,
						ainda, ser-lhe-ão retirados pontos da carta.
					</p>
					<p>
						Mesmo que pague a coima, no caso das contraordenações
						graves e muito graves, ser-lhe-ão retirados pontos à
						carta e ficará inibido de conduzir por um período mínimo
						de um mês (no caso das graves) ou no mínimo dois meses
						(no caso das muito graves).
					</p>
					<Link
						href={"./tabelas"}
						className="button button--primary"
					>
						Consultar Tabelas
					</Link>
				</span>

				<img
					src={"/multas/velocidade.webp"}
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

			<div className="coimas">
				<div className="coimas-card">
					<h3>Coima Monetária</h3>
					<ul>
						<li>
							O valor exato depende de alguns fatores, tais como o
							tipo de veículo e se conduzia dentro ou fora das
							localidades
						</li>
						<li>As coimas podem variar entre os 60€ e os 2500€</li>
					</ul>
				</div>

				<div className="coimas-card">
					<h3>Inibição de Conduzir</h3>
					<ul>
						<li>
							Apenas para contraordenações graves ou muito graves
							(ficará, no mínimo, um mês sem poder conduzir).
						</li>
					</ul>
				</div>

				<div className="coimas-card">
					<h3>Pontos na Carta</h3>
					<ul>
						<li>Perda de 2 pontos para contraordenações graves</li>
						<li>
							Perda de 4 pontos para contraordenações muito graves
						</li>
					</ul>
				</div>
			</div>
		</Section>
	);
}
