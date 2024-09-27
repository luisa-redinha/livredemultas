import Accordion, { AccordionItem } from "@/components/accordion/Accordion";
import Section from "@/components/containers/Section";
import faqData from "./faq.json";
export default function FAQ() {
	return (
		<Section className="faq">
			<h2>Perguntas Frequentes</h2>
			<Accordion>
				{faqData.map((e, i) => (
					<AccordionItem
						header={e.q}
						key={`faq-q${i}`}
					>
						<ul>
							{e.a.map((p, j) => (
								<li key={`faq-q${i}-ap-${j}`}>{p}</li>
							))}
						</ul>
					</AccordionItem>
				))}
			</Accordion>
		</Section>
	);
}
