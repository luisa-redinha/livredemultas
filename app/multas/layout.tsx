import Section from "@/components/containers/Section";
import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
	return <Section className="multas">{children}</Section>;
}
