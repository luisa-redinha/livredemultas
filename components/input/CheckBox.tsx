"use client";

import { ChangeEventHandler } from "react";

type CheckBoxProps = {
	children: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	className?: string;
};

export default function CheckBox(props: CheckBoxProps) {
	return (
		<label className={"checkbox " + props.className}>
			<span className="checkbox__toggle">
				<input
					type="checkbox"
					className="checkbox__input"
					aria-hidden
					onChange={props.onChange}
				/>
				<span className="checkbox__toggle__inner" />
			</span>

			<span className="checkbox__label">{props.children}</span>
		</label>
	);
}
