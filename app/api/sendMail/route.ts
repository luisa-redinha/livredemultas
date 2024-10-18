import type { NextApiRequest, NextApiResponse } from "next";

export default function GET(req: NextApiRequest, res: NextApiResponse) {
	// const  {content,attachments} = req.body;

	res.status(200).json("Ok");
}
