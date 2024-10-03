import Section from "@/components/containers/Section";
import React from "react";
import { motion } from "framer-motion";
export default function About() {
	const contentDelay = 0.30;
	return (
		<Section className="about">
			<h2>Sobre Nós</h2>

			<div className="intro">
				<motion.p
					whileInView={{ opacity: 1 }}
					initial={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					transition={{
						delay: contentDelay * 1,
						ease: "easeInOut",
						duration: 1.5,
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Suscipit animi, facilis asperiores id aliquid repudiandae
					sequi impedit itaque cum nisi molestias error harum!
					Recusandae nulla qui provident quia id tenetur!
				</motion.p>

				<motion.p
					whileInView={{ opacity: 1 }}
					initial={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					transition={{
						delay: contentDelay * 2,
						ease: "easeInOut",
						duration: 1.5,
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Suscipit animi, facilis asperiores id aliquid repudiandae
					sequi impedit itaque cum nisi molestias error harum!
					Recusandae nulla qui provident quia id tenetur! Lorem, ipsum
					dolor sit amet consectetur adipisicing elit. Nesciunt odit
					accusamus provident omnis. Possimus consectetur eos ipsum
					culpa dolor dolorum ad? Animi tenetur voluptatem tempore
					quaerat sequi maiores ullam velit.
				</motion.p>
			</div>

			<motion.img
				src="/lawyer3.jpg"
				alt=""
				className="lawyer"
				whileInView={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				transition={{
					delay: contentDelay * 3,
					ease: "easeInOut",
					duration: 1.5,
				}}
			/>

			<motion.div
				className="links"
				whileInView={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				transition={{
					delay: contentDelay * 4,
					ease: "easeInOut",
					duration: 1.5,
				}}
			>
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
			</motion.div>

			<motion.p
				className="note"
				whileInView={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				transition={{
					delay: contentDelay * 5,
					ease: "easeInOut",
					duration: 1.5,
				}}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Suscipit animi, facilis asperiores id aliquid repudiandae sequi
				impedit itaque cum nisi molestias error harum! Recusandae nulla
				qui provident quia id tenetur! Lorem, ipsum dolor sit amet
				consectetur adipisicing elit. Nesciunt odit accusamus provident
				omnis. Possimus consectetur eos ipsum culpa dolor dolorum ad?
				Animi tenetur voluptatem tempore quaerat sequi maiores ullam
				velit.
			</motion.p>
		</Section>
	);
}
