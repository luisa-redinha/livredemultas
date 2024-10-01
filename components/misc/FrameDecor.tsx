enum FRAME_VARIANTS {
	top = "frame-decor--top",
	bot = "frame-decor--bot",
}

export default function FrameDecor({
	variant,
}: {
	variant: keyof typeof FRAME_VARIANTS;
}) {
	return (
		<div className={`frame-decor ${FRAME_VARIANTS[variant]}`}>
			<span className="frame-decor__bar frame-decor__bar--h frame-decor__bar--h--1"></span>
			<span className="frame-decor__bar frame-decor__bar--h frame-decor__bar--h--2"></span>
			<span className="frame-decor__bar frame-decor__bar--v frame-decor__bar--v--1"></span>
			<span className="frame-decor__bar frame-decor__bar--v frame-decor__bar--v--2"></span>
		</div>
	);
}
