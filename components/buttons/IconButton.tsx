"use client";

import React from "react";

enum ICONS {
	whatsapp = "fa-brands fa-whatsapp",
	phone = "fa-solid fa-phone",
	email = "fa-solid fa-envelope",
}

export type IconButtonProps = {
	onClick?: Function;
	icon: keyof typeof ICONS;
};

export default function IconButton(props: IconButtonProps) {
	return (
		<button
			className="button button--primary icon-button"
			onClick={() => props?.onClick && props.onClick()}
		>
			<i className={ICONS[props.icon]} />
		</button>
	);
}
