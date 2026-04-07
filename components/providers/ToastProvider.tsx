"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
	return (
		<Toaster
			position="top-center"
			toastOptions={{
				duration: 4000,
				style: {
					background: "#333",
					color: "#fff",
					fontSize: "0.95rem",
				},
			}}
		/>
	);
}
