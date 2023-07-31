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
        const { headers } = req;
        const reqAuthKey = headers["munchbox-auth-key"];
        let keyValid = false;
        this.authKeys.forEach((key) => {
            if (reqAuthKey === key) keyValid = true;
        });
        if (keyValid) {
            switch (req.method) {
                case "GET":
                    return this.getFn(req, res);
                case "POST":
                    return this.postFn(req, res);
                case "PUT":
                    return this.putFn(req, res);
                case "DELETE":
                    return this.delFn(req, res);
                default:
                    return res
                        .status(405)
                        .json({ error: `Method ${req.method} not allowed.` });
            }
        }

        return res
            .status(401)
            .json({ error: `Invalid authentication key '${reqAuthKey}'` });
    }
}
