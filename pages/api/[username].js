// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const { method, headers } = req;

    if (method !== "GET") {
        return res.status(405).json({ message: "Method POST Not Allowed" });
    }

    if (!headers["API_KEY"] || headers["API_KEY"] !== process.env["API_KEY"]) {
        return res.status(401).json({ message: "Invalid API Key" });
    }

    return res
        .status(200)
        .json({
            message: "User found successfully.",
            user: req.query.username,
        });
}
