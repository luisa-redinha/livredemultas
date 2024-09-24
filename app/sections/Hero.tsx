import Button from "@/components/buttons/Button";
import Logo from "@/components/misc/Logo";
import Image from "next/image";
import React from "react";

export default function Hero() {
	return (
		<div className="hero">
			<Logo />

			<div className="hero__info">
				<h2 className="hero__info__title">
					<span>Conteste a sua multa.</span>
					<span>Defenda-se!</span>
				</h2>

				<p className="hero__info__text">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Quam obcaecati quis consequatur laborum et earum tenetur?
					Distinctio numquam rerum animi corporis, impedit tenetur
					odio doloremque quas debitis quisquam nostrum modi.
				</p>

				<Button>Fale Connosco</Button>
			</div>

			<img
				src="/lawyer1.png"
				className="hero__lawyer"
				draggable="false"
			/>
		</div>
	);
}
