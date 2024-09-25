import Link from "next/link";
import React from "react";

type SectionThumbnailProps = {
	src?: string;
	path?: string;
	label: string;
};

export default function SectionThumbnail(props: SectionThumbnailProps) {
	return (
		<Link
			href={props.path || ""}
			className="section-thumbnail"
		>
			<img src={props.src} />
			<span>{props.label}</span>
		</Link>
	);
}
