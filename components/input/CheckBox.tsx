"use client";

import { forwardRef, InputHTMLAttributes, Ref } from "react";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

const CheckBox = forwardRef(
	(props: CheckBoxProps, ref: Ref<HTMLInputElement>) => {
		return (
			<label
				className={`checkbox ${
					props.disabled ? "checkbox--disabled" : ""
				} ${props.className}`}
			>
				<span className="checkbox__toggle">
					<input
						{...props}
						ref={ref}
						type="checkbox"
						className="checkbox__input"
					/>
					<span className="checkbox__toggle__inner" />
				</span>

				<span className="checkbox__label">{props.label}</span>
			</label>
		);
	}
);

CheckBox.displayName = "CheckBox";

export default CheckBox;
