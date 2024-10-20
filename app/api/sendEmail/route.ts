import { sendMail } from "@/nodemailer/main";

export function GET() {
	return new Response(JSON.stringify("Alive"));
}

export async function POST(req: Request) {
	const content = await req.formData();
	const data: Record<string, any> = {};
	const files: Blob[] = [];
	content.forEach((val, key) => {
		if (val === "true" || val === "false") data[key] = Boolean(val);
		if (val instanceof Blob) {
			files.push(val);
		} else data[key] = val;
	});

	const res = await sendMail({ ...data, files });
	return new Response(JSON.stringify({ data: res.body }), {
		headers: { "Content-Type": "application/json" },
		status: res.statusCode,
	});
}
