import Section from "@/components/containers/Section";
import Link from "next/link";
export default function page() {
	return (
		<Section className="multas">
			<header>
				<h2>Multas a Empresas</h2>

				<span className="info"></span>

				<img
					src={"/multas/empresas.png"}
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
					<h3>TVDE</h3>
					<ul>
						<li>Falta de licenciamento</li>
						<li>Condutores não certificados</li>
						<li>Tarifas não conformes</li>
						<li>Incumprimento com as plataformas eletrónicas</li>
					</ul>
				</div>

				<div className="coimas-card">
					<h3>ACT</h3>
					<ul>
						<li>Tempos de condução</li>
						<li>Certificação de tacógrafos</li>
						<li>Pausas e tempos de repouso</li>
						<li>Outras</li>
					</ul>
				</div>

				<div className="coimas-card">
					<h3>IMT e ASAE</h3>
					<ul>
						<li>Excesso de carga</li>
						<li>Transportes por entidade não autorizada</li>
						<li>Documentação e guias de transporte</li>
						<li>Higiene e segurança</li>
					</ul>
				</div>
			</div>
		</Section>
	);
}
