"use client";

import Select from "react-select";

export type ComboBoxOption = { label: string; value: string | number };

export type ComboBoxProps = {
	data: ComboBoxOption[];
};

export default function ComboBox({ data }: ComboBoxProps) {
	return (
		<Select
			options={data}
			className="input combobox"
			isClearable
			placeholder="Pesquisar..."
		/>
	);
}
