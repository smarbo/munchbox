// Import .env file
require("dotenv").config();
// Import database connection
require("@/servercomponents/db");
// Import apihandler class which i made previously
import ApiHandler from "@/servercomponents/apihandler";
// Import user model
import User from "@/models/user";
// Import bcrypt to hash passwords
const bcrypt = require("bcrypt");

// Export the apihandler object for /api/Users/
export default (req, res) => {
	new ApiHandler({
		post: createUser,
		get: fetchUser,
		authKeys: [...JSON.parse(process.env["AUTH_KEY"])],
	}).handleRequest(req, res);
};

// CreateUser function for POST requests
async function createUser(req, res) {
	let { username, email, password } = req.body;
	console.log(`recieved post request, password is ${password}`);
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(password, salt, async(err, hash) => {
			password = hash;
			try {
				if ((await User.find({ username: username })).length > 0) {
					return res.status(409).json({ message: 0 });
				}
				if ((await User.find({ email: email })).length > 0) {
					return res.status(409).json({ message: 1 });
				}

				const newUser = new User({ username, email, password });
				await newUser.save();
				const userId = (await User.findOne({ username })).id;
				res.status(201).json({ message: "User created successfully.", userId });
				return res.end();
			} catch (error) {
				return res.status(500).json({ message: "FAILED" });
			}

		});
	});
}

// AllUsers function for GET requests
async function fetchUser(req, res) {
	let { userId } = req.cookies;
	const user = await User.findById(userId);
	if (user) {
		return res.status(200).json({
			username: user.username,
			email: user.email,
			image: user.image,
			recipes: user.recipes,
		});
	}
	res.setHeader("Set-Cookie", "userId=; HttpOnly");
	return res.status(404).json({ error: "User not found." });
}
