// user.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "This user has not added a description yet.",
  },
  following: {
    type: [String],
    default: [],
  },
  followers: {
    type: [String],
    default: [],
  },
  recipes: {
    type: [String],
    default: [],
  },
  image: {
    type: String,
    default:
      "https://www.shareicon.net/data/512x512/2016/09/01/822751_user_512x512.png",
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema); // Use mongoose.model() method to create the model
module.exports = User;
