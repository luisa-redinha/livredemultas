import Section from "@/components/containers/Section";
import Link from "next/link";
import { redirect } from "next/navigation";
import multas from "../multas.json";
import Image from "next/image";
export default function page({ params }: { params: { multaId: number } }) {
	const multaData = multas[Number(params.multaId)];

	if (!multaData) redirect("/multas");

	return (
		<Section className="multas">
			<header>
				<h2>{multaData.label}</h2>

				<span className="info">
					{multaData.info?.map((e, i) => (
						<p key={`multa-info-p-${i}`}>{e}</p>
					))}
				</span>

				<Image
					src={multaData.img}
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
				{multaData.coimas?.grave && (
					<div className="coimas-card coimas__grave">
						<h3>Grave</h3>
						<ul>
							{multaData.coimas?.grave.map((e, i) => (
								<li key={"coima-leve-" + i}>{e}</li>
							))}
						</ul>
					</div>
				)}
				{multaData.coimas?.muitoGrave && (
					<div className="coimas-card coimas__muito-grave">
						<h3>Muito Grave</h3>
						<ul>
							{multaData.coimas?.muitoGrave.map((e, i) => (
								<li key={"coima-leve-" + i}>{e}</li>
							))}
						</ul>
					</div>
				)}{" "}
				{multaData.coimas?.crime && (
					<div className="coimas-card coimas__muito-grave">
						<h3>Crime</h3>
						<ul>
							{multaData.coimas?.muitoGrave.map((e, i) => (
								<li key={"coima-leve-" + i}>{e}</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</Section>
	);
}
