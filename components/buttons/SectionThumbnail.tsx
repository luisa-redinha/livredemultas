import { motion } from "framer-motion";
import Link from "next/link";
import React, { LegacyRef } from "react";

type SectionThumbnailProps = {
	src?: string;
	path?: string;
	label: string;
};

const Component = React.forwardRef((props: SectionThumbnailProps, ref) => (
	<Link
		ref={ref as LegacyRef<HTMLAnchorElement> | undefined}
		href={props.path || ""}
		className="section-thumbnail"
	>
		<img src={props.src} />
		<span>{props.label}</span>
	</Link>
));

const SectionThumbnail = motion.create(Component);

export default SectionThumbnail;
