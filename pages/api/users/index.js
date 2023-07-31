// Import .env file
require("dotenv").config();
// Import apihandler class which i made previously
import ApiHandler from "@/servercomponents/apihandler";

// Export the apihandler object for /api/Users/
export default (req, res) => {
    new ApiHandler({
        post: createUser,
        get: allUsers,
        authKeys: [...JSON.parse(process.env["AUTH_KEY"])],
    }).handleRequest(req, res);
};

// CreateUser function for POST requests
function createUser(req, res) {
    res.status(200).json({
        message: "This is the POST createUser endpoint.",
    });
}

// AllUsers function for GET requests
function allUsers(req, res) {
    res.status(200).json({
        message: "This is the GET allUsers endpoint",
    });
}
