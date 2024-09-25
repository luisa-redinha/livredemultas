import SectionThumbnail from "@/components/buttons/SectionThumbnail";
import Section from "@/components/containers/Section";
import React from "react";

export default function Porque() {
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
				ipsum, dolor sit amet consectetur adipisicing elit. Id assumenda
				suscipit ex eveniet, officiis repellat odit cumque rem tenetur
				repudiandae possimus, ab nam non vero, pariatur cupiditate
				ducimus nostrum atque.
			</p>
			<img
				src="/lawyer2.jpg"
				alt=""
			/>

			<div className="multas">

				<SectionThumbnail src="/multa1.jpg" label="Excesso de Velocidade" />
				<SectionThumbnail src="/multa2.png" label="Excesso de Alcool"/>
				<SectionThumbnail src="/multa3.png" label="Multas a Empresas"/>
				<SectionThumbnail src="/multa4.png" label="Outras Multas"/>

			</div>
		</Section>
	);
}
