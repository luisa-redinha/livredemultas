import React from "react";
import multas from "../multas.json";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import Section from "@/components/containers/Section";
export default function page({ params }: { params: { multaId: number } }) {
	/*

		Next steps -> faq -> Go with zahirs awnser
		-> work on responsiveness
		-> animate stuff
		-> figure out form stuff

	*/
	const multaData = multas[params.multaId];
	console.log(params.multaId);
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

				<img
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
				<div className="coimas-card coimas__leve">
					<h3>Leve</h3>
					<ul>
						{multaData.coimas?.leve.map((e, i) => (
							<li key={"coima-leve-" + i}>{e}</li>
						))}
					</ul>
				</div>
				<div className="coimas-card coimas__grave">
					<h3>Grave</h3>
					<ul>
						{multaData.coimas?.grave.map((e, i) => (
							<li key={"coima-leve-" + i}>{e}</li>
						))}
					</ul>
				</div>
				<div className="coimas-card coimas__muito-grave">
					<h3>Muito Grave</h3>
					<ul>
						{multaData.coimas?.muitoGrave.map((e, i) => (
							<li key={"coima-leve-" + i}>{e}</li>
						))}
					</ul>
				</div>
			</div>
		</Section>
	);
}
