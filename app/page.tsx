import About from "./sections/About";
import ContactUs from "./sections/ContactUs";
import FAQ from "./sections/FAQ";
import Hero from "./sections/Hero";
import Porque from "./sections/Porque";
export default function Home() {
	return (
		<main id="home">
			<Hero />
			<Porque />
			<ContactUs />
			<FAQ />
			<About />
		</main>
	);
}
