"use client";

import {
	Accordion as SzhAccordion,
	AccordionItem as Item,
	AccordionItemProps,
} from "@szhsin/react-accordion";
import {
	Children,
	ReactElement,
	ReactNode,
	cloneElement,
	useState,
} from "react";

export interface AccordionProps {
	className?: string;
	children: ReactElement | ReactElement[];
}

export default function Accordion({ className, children }: AccordionProps) {
	const [isOpen, setIsOpen] = useState<false | number>(false);

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
