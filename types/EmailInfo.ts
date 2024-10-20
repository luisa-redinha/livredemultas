export default interface EmailInfo {
	name?: string;
	email?: string;
	mobile?: string;
	info?: string;
	urgent?: boolean;
	files?: Blob[];
}
