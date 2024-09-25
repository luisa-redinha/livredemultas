"use client";

import { KeyboardEvent, KeyboardEventHandler } from "react";
import Select from "react-select";

export type ComboBoxOption = { label: string; value: string | number };

export type ComboBoxProps = {
	data: ComboBoxOption[];
	onSelect?: Function;
	onKeyDown?: Function;
};

export default function ComboBox({ data, onSelect, onKeyDown }: ComboBoxProps) {
	const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
		const validKey = /^[\w\d -_]{1}$/gi;
		if (validKey.test(e.key)) {
			onKeyDown && onKeyDown((e.target as HTMLInputElement).value);
		}
	};

	return (
		<Select
			options={data}
			onChange={(n, a) => onSelect && onSelect(n?.label)}
			onKeyDown={onKeyDownHandler}
			className="input combobox"
			isSearchable
			isClearable
			placeholder="Pesquisar..."
		/>
	);
}
