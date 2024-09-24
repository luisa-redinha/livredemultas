import Logo from "@/components/misc/Logo";
import Hero from "./sections/Hero";
import Section from "@/components/containers/Section";
import Porque from "./sections/Porque";
export default function Home() {
	return (
		<main id="home">
			<Hero />
			<Porque />
		</main>
	);
}
