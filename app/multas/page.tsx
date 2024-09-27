"use client";

import Section from "@/components/containers/Section";
import ComboBox from "@/components/input/ComboBox";
import React, { useState } from "react";
import multas from "./multas.json";
import SectionThumbnail from "@/components/buttons/SectionThumbnail";
import Button from "@/components/buttons/Button";
import Link from "next/link";
export default function page() {
	const comboBoxData = multas.map((e, i) => ({
		label: e.label,
		value: i,
	}));

	const [list, setList] = useState(multas);

	const onKeyFilterChangeHandler = (str: string) => {
		if (!str) {
			setList(multas);
			return;
		}

		setList(
			multas.filter((e) => e.label.match(new RegExp(`^${str}`, "gi")))
		);
	};
	const onSelectHandler = (str: string) => {
		if (!str) {
			setList(multas);
			return;
		}
		const target = multas.find((e) => e.label === str);
		target && setList([target]);
	};

	return (
		<>
			<header>
				<h2>Tipos de Multas</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Illo placeat quia mollitia nesciunt, molestias, impedit
					eveniet vero maiores nostrum numquam excepturi debitis
					consectetur fuga amet vitae velit, laborum deserunt sunt?
				</p>
				<nav>
					<Link
						className="button button--secondary"
						href="/"
					>
						Início
					</Link>
				</nav>
			</header>

			<div className="search">
				<h3>Pesquisar</h3>
				<ComboBox
					data={comboBoxData}
					onKeyDown={onKeyFilterChangeHandler}
					onSelect={onSelectHandler}
				/>
			</div>

			<div className="grid">
				{list.map((e, i) => (
					<SectionThumbnail
						{...e}
						path={`/multas/${i}`}
						key={`${e.label}-${i}`}
					/>
				))}
			</div>
		</>
	);
}
