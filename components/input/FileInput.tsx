"use client";

import {
	ChangeEvent,
	forwardRef,
	InputHTMLAttributes,
	Ref,
	useRef,
	useState,
} from "react";
import Button from "../buttons/Button";
import { validateFiles } from "../utils/util-functions";

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	afterUploadLabel?: string;
}

const FileInput = forwardRef(
	(
		{
			label = "Anexar Ficheiros",
			afterUploadLabel = "Ficheiro(s) Anexado(s)",
			...props
		}: FileInputProps,
		ref: Ref<HTMLInputElement>
	) => {
		const [fileCount, setFileCount] = useState<number | null>(null);

		const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
			const files = event.target.files;

			if (!files) {
				setFileCount(null);
				return;
			}

			if (!validateFiles(files, 2 * 1024 * 1024)) {
				alert(
					"Um dos ficheiros submetidos não é suportado. One of the files submitted is not supported."
				);
				setFileCount(null);
				return;
			}

			setFileCount(files.length);
		};

		return (
			<label className="button button--primary fileinput">
				<>
					<input
						ref={ref}
						type="file"
						multiple
						accept="image/jpeg,image/jpg, image/png, application/pdf"
						{...props}
						onChange={handleFileChange}
					/>
					<i className="fa-regular fa-file fileinput__icon" />
					<span className="fileinput__text">
						{fileCount ? `${fileCount} ${afterUploadLabel}` : label}
					</span>
				</>
			</label>
		);
	}
);
FileInput.displayName = "File Input";
export default FileInput;
