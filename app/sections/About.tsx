import Section from "@/components/containers/Section";
import React from "react";

export default function About() {
	return (
		<Section className="about">
			<div className="intro">
				<h2>Sobre Nós</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Suscipit animi, facilis asperiores id aliquid repudiandae
					sequi impedit itaque cum nisi molestias error harum!
					Recusandae nulla qui provident quia id tenetur!
				</p>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Suscipit animi, facilis asperiores id aliquid repudiandae
					sequi impedit itaque cum nisi molestias error harum!
					Recusandae nulla qui provident quia id tenetur! Lorem, ipsum
					dolor sit amet consectetur adipisicing elit. Nesciunt odit
					accusamus provident omnis. Possimus consectetur eos ipsum
					culpa dolor dolorum ad? Animi tenetur voluptatem tempore
					quaerat sequi maiores ullam velit.
				</p>
			</div>
			<img
				src="/lawyer3.jpg"
				alt=""
				className="lawyer"
			/>

			<div className="links">
				<img
					src="/ansr.png"
					alt="ansr.png"
				/>
				<img
					src="/ip.png"
					alt="ip.png"
				/>
				<img
					src="/imt.png"
					alt="imt.png"
				/>
			</div>

			<p className="">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Suscipit animi, facilis asperiores id aliquid repudiandae sequi
				impedit itaque cum nisi molestias error harum! Recusandae nulla
				qui provident quia id tenetur! Lorem, ipsum dolor sit amet
				consectetur adipisicing elit. Nesciunt odit accusamus provident
				omnis. Possimus consectetur eos ipsum culpa dolor dolorum ad?
				Animi tenetur voluptatem tempore quaerat sequi maiores ullam
				velit.
			</p>
		</Section>
	);
}
