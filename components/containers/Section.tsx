import React, { ReactNode } from "react";

export default function Section({
	children,
	className,
}: {
	children?: ReactNode;
	className?: string;
}) {
	return (
		<section className={`section`}>
			<FrameDecor className="frame-decor--top" />

			<div className={`section__content ${className}`}>{children}</div>

			<FrameDecor className="frame-decor--bot" />
		</section>
	);
}

const FrameDecor = ({ className }: { className: string }) => (
	<div className={`frame-decor ${className}`}>
		<span className="frame-decor__bar frame-decor__bar--h frame-decor__bar--h--1"></span>
		<span className="frame-decor__bar frame-decor__bar--h frame-decor__bar--h--2"></span>
		<span className="frame-decor__bar frame-decor__bar--v frame-decor__bar--v--1"></span>
		<span className="frame-decor__bar frame-decor__bar--v frame-decor__bar--v--2"></span>
	</div>
);
