require("dotenv").config();

export default class ApiHandler {
    constructor({ get, post, put, del, authKeys }) {
        this.getFn = get || this.defaultFn("GET");
        this.postFn = post || this.defaultFn("POST");
        this.putFn = put || this.defaultFn("PUT");
        this.delFn = del || this.defaultFn("DELETE");
        this.authKeys = authKeys || null;
    }

    defaultFn(method) {
        return (req, res) => {
            console.log(`Method ${method} not allowed.`);
            res.status(405).json({ error: `Method ${method} not allowed.` });
        };
    }

    async handleRequest(req, res) {
        try {
            const { headers } = req;
            const reqAuthKey = headers["munchbox-auth-key"];
            let keyValid = false;
            this.authKeys.forEach((key) => {
                if (reqAuthKey === key) keyValid = true;
            });
            if (keyValid) {
                switch (req.method) {
                    case "GET":
                        try {
                            return this.getFn(req, res);
                        } catch (err) {
                            return res.status(500).json({
                                error: err,
                            });
                        }
                    case "POST":
                        try {
                            return this.postFn(req, res);
                        } catch (err) {
                            return res.status(500).json({
                                error: err,
                            });
                        }
                    case "PUT":
                        try {
                            return this.putFn(req, res);
                        } catch (err) {
                            return res.status(500).json({
                                error: err,
                            });
                        }
                    case "DELETE":
                        try {
                            return this.delFn(req, res);
                        } catch (err) {
                            return res.status(500).json({
                                error: err,
                            });
                        }
                    default:
                        return res.status(405).json({
                            error: `Method ${req.method} not allowed.`,
                        });
                }
            }

            return res
                .status(401)
                .json({ error: `Invalid authentication key '${reqAuthKey}'` });
        } catch (err) {
            return res.status(500).json({ error: "Something went wrong." });
        }
    }
}
