import { h1 } from "framer-motion/client";
import React from "react";

export default function Logo() {
	return (
		<h1 className="logo">
			<img
				src="/greek-column.png"
				alt="greek-column-logo"
			/>
			Livre de Multas
		</h1>
	);
}
