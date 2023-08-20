// user.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
});

const User = mongoose.models.User || mongoose.model("User", userSchema); // Use mongoose.model() method to create the model
module.exports = User;
