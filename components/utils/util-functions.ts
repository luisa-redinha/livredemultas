export const checkFileSize = (file: File, limit: number) => file.size >= limit;

export const validateFiles = (
	filesList: FileList,
	limit = 0,
	types = ["application/pdf", "image/png", "image/jpg", "image/jpeg"]
) => {
	for (const key in filesList) {
		if (!(filesList[key] instanceof File)) continue;

		const validSize = filesList[key].size < limit,
			supported = types.includes(filesList[key].type);

		console.log("size", validSize, "type", supported);

		if (!validSize || !supported) return false;
	}

	return true;
};
