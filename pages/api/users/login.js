require("dotenv").config();
require("@/servercomponents/db");
import ApiHandler from "@/servercomponents/apihandler";
import User from "@/models/user";
const bcrypt = require("bcrypt");

export default (req, res) => {
  new ApiHandler({
    post: loginUser,
    get: checkLoggedIn,
    del: logoutUser,
    authKeys: [...JSON.parse(process.env["AUTH_KEY"])],
  }).handleRequest(req, res);
};

async function loginUser(req, res) {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });
  if (user) {
    const success = await bcrypt.compare(password, user.password);
    if (success) {
      res.setHeader("Set-Cookie", `userId=${user._id}; HttpOnly`);
      res.status(200).json({ message: "Login successful" });
      res.end();
    } else {
      res.status(401).json({ message: "Invalid credentials." });
      res.end();
    }
  } else {
    res.status(404).json({ message: "User not found." });
  }
}

async function checkLoggedIn(req, res) {
  const { userId } = req.cookies;
  if (userId) {
    return res.status(200).json({ loggedIn: true }); // Is logged in
  } else {
    return res.status(201).json({ loggedIn: false }); // Not logged in
  }
}

async function logoutUser(req, res) {
  res.setHeader("Set-Cookie", "userId=; HttpOnly");
  res.status(200).json({ message: "Logout successful" });
  res.end();
}
