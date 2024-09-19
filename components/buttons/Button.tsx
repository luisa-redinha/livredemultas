"use client";

import React from "react";

export type ButtonProps = {
	onClick?: Function;
	children: string;
	variant?: "primary" | "secondary";
};

export default function Button({ variant = "primary", ...props }: ButtonProps) {
	return (
		<button
			className={`button button--${variant}`}
			onClick={() => props?.onClick && props.onClick()}
		>
			{props.children}
		</button>
	);
}
