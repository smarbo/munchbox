// recipe.js

const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    time: {
        type: Number,
        required: true,
    },
    creator: {
        type: String,
        required: true,
    },
    ingredients: [
        {
            name: {
                type: String,
                required: true,
            },
            amount: {
                type: String,
                required: true,
            },
        },
    ],
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema); // Use mongoose.model() method to create the model
module.exports = Recipe;
