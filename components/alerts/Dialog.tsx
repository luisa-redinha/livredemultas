"use client";

import { AnimatePresence, motion } from "framer-motion";
import Button from "../buttons/Button";
import { createPortal } from "react-dom";
import { ReactNode } from "react";

type DialogProps = {
	show: boolean;
	toggle: () => void;
	className?: string;
	title: string;
	children: ReactNode;
};

const Dialog = ({
	show,
	toggle,
	className = "",
	title,
	children,
}: DialogProps) => {
	return createPortal(
		<AnimatePresence>
			{show && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className={"dialog__wrapper" + className}
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.5 }}
						className="dialog"
					>
						<h3 className="dialog__title">{title}</h3>

						<div className="dialog__content">{children}</div>

						<span className="dialog__buttons">
							<Button onClick={toggle}>Ok</Button>
						</span>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>,

		document.querySelector("body") as HTMLBodyElement
	);
};
export default Dialog;
