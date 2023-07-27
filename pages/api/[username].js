require("dotenv").config();

export default function handler(req, res) {
    const { method, headers } = req;

    if (method !== "GET") {
        return res.status(405).json({ message: "wrong method" });
    }

    if (!headers.api_key || headers.api_key !== process.env.API_KEY) {
        return res.status(401).json({ message: "invalid key" });
    }

    return res
        .status(200)
        .json({ message: `good girl; username is ${req.query.username}` });
}
