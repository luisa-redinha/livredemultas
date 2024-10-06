"use client";
import React, { ReactNode, RefObject } from "react";
import { motion } from "framer-motion";
import FrameDecor from "../misc/FrameDecor";

export default function Section({
	children,
	className = "",
}: {
	children?: ReactNode;
	className?: string;
}) {
	return (
		<motion.section
			className={`section`}
			whileInView={{ opacity: 1, scale: 1 }}
			initial={{ opacity: 0, scale: 0.8 }}
			transition={{ ease: "easeInOut" }}
			exit={{ opacity: 0, scale: 0.8 }}
			viewport={{
				amount: 0.65,
				margin: "300%",
			}}
		>
			<FrameDecor variant="top" />
			<div className={`section__content ${className}`}>{children}</div>

			<FrameDecor variant="bot" />
		</motion.section>
	);
}
