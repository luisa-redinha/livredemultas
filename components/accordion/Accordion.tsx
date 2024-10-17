"use client";

import {
	AccordionItem as Item,
	Accordion as SzhAccordion,
} from "@szhsin/react-accordion";
import { ReactElement, ReactNode } from "react";

export interface AccordionProps {
	className?: string;
	children: ReactElement | ReactElement[];
}

export default function Accordion({ children }: AccordionProps) {
	return (
		<SzhAccordion
			transition
			transitionTimeout={250}
		>
			{children}
		</SzhAccordion>
	);
}

export const AccordionItem = ({
	header,
	children,
}: {
	header: string;
	children: ReactNode;
}) => {
	return (
		<Item
			header={
				<>
					{header}
					<i className="fa-solid fa-chevron-down chevron-down" />
				</>
			}
		>
			{children}
		</Item>
	);
};
