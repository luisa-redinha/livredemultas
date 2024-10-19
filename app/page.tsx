"use client";
import About from "./sections/About";
import ContactUs from "./sections/ContactUs";
import FAQ from "./sections/FAQ";
import Hero from "./sections/Hero";
import Porque from "./sections/Porque";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<motion.main
			id="home"
			animate={{ opacity: 1, scale: 1 }}
			initial={{ opacity: 0, scale: 0.85 }}
			transition={{ ease: "easeInOut" }}
			exit={{ opacity: 0, scale: 0.85 }}
		>
			<Hero />
			<Porque />
			{/* <ContactUs /> */}
			<FAQ />
			<About />
		</motion.main>
	);
}
