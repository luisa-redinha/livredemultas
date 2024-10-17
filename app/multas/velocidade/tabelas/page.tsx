import Button from "@/components/buttons/Button";
import Section from "@/components/containers/Section";
import Link from "next/link";
export default function page() {
	return (
		<Section className="multas">
			<header>
				<h2>Tabelas dos Limites e Coimas</h2>

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
						Voltar
					</Link>
				</nav>
			</header>

			<Tabela1 />

			<Tabela2 />
		</Section>
	);
}

const Tabela1 = () => (
	<table className="table">
		<thead>
			<tr className="table__title">
				<td colSpan={6}>
					<h3>Ligeiros e Motociclos</h3>
				</td>
			</tr>
			<tr className="table__header">
				<td colSpan={3}>Fora das Localidades</td>
				<td colSpan={3}>Dentro das Localidades</td>
			</tr>
			<tr className="table__sub-header">
				<td>Excesso de Velocidade</td>
				<td>Coima Min.</td>
				<td>Coima Max.</td>
				{/* === */}
				<td>Excesso de Velocidade</td>
				<td>Coima Min.</td>
				<td>Coima Max.</td>
			</tr>
		</thead>

		<tbody>
			{/* === */}
			<tr className="table__row">
				<td>Até 20km/h</td>
				<td>60€</td>
				<td>300€</td>
				{/* === */}
				<td>Até 30km/h</td>
				<td>60€</td>
				<td>300€</td>
			</tr>
			{/* === */}
			<tr className="table__row">
				<td>De 20km/h a 40km/h</td>
				<td>120€</td>
				<td>600€</td>
				{/* === */}
				<td>De 30km/h a 60km/h</td>
				<td>120€</td>
				<td>600€</td>
			</tr>
			{/* === */}
			<tr className="table__row">
				<td>De 40km/h a 60km/h</td>
				<td>300€</td>
				<td>1.500€</td>
				{/* === */}
				<td>De 60km/h a 80km/h</td>
				<td>300€</td>
				<td>1.500€</td>
			</tr>
			{/* === */}
			<tr className="table__row">
				<td>Superior a 60km/h</td>
				<td>500€</td>
				<td>2.500€</td>
				{/* === */}
				<td>Superior a 80km/h</td>
				<td>500€</td>
				<td>2.500€</td>
			</tr>
		</tbody>
	</table>
);

const Tabela2 = () => (
	<table className="table">
		<thead>
			<tr className="table__title">
				<td colSpan={6}>
					<h3>Outros Veículos</h3>
				</td>
			</tr>
			<tr className="table__header">
				<td colSpan={3}>Fora das Localidades</td>
				<td colSpan={3}>Dentro das Localidades</td>
			</tr>
			<tr className="table__sub-header">
				<td>Excesso de Velocidade</td>
				<td>Coima Min.</td>
				<td>Coima Max.</td>
				{/* === */}
				<td>Excesso de Velocidade</td>
				<td>Coima Min.</td>
				<td>Coima Max.</td>
			</tr>
		</thead>

		<tbody>
			{/* === */}
			<tr className="table__row">
				<td>Até 10km/h</td>
				<td>60€</td>
				<td>300€</td>
				{/* === */}
				<td>Até 20km/h</td>
				<td>60€</td>
				<td>300€</td>
			</tr>
			{/* === */}
			<tr className="table__row">
				<td>De 10km/h a 20km/h</td>
				<td>120€</td>
				<td>600€</td>
				{/* === */}
				<td>De 20km/h a 40km/h</td>
				<td>120€</td>
				<td>600€</td>
			</tr>
			{/* === */}
			<tr className="table__row">
				<td>De 20km/h a 40km/h</td>
				<td>300€</td>
				<td>1.500€</td>
				{/* === */}
				<td>De 40km/h a 60km/h</td>
				<td>300€</td>
				<td>1.500€</td>
			</tr>
			{/* === */}
			<tr className="table__row">
				<td>Superior a 40km/h</td>
				<td>500€</td>
				<td>2.500€</td>
				{/* === */}
				<td>Superior a 60km/h</td>
				<td>500€</td>
				<td>2.500€</td>
			</tr>
		</tbody>
	</table>
);
