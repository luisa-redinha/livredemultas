"use client";

import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary";
}

export default function Button({
	variant = "primary",
	type = "button",
	...props
}: ButtonProps) {
	return (
		<button
			{...props}
			type={type}
			className={`button button--${variant} ${props.className ?? ""}`}
		/>
	);
}
