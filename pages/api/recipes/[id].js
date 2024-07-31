// Import the packages needed
require("dotenv").config();
const mongoose = require("mongoose");
import ApiHandler from "@/servercomponents/apihandler";
import { extractPublicId } from "cloudinary-build-url";

import Recipe from "@/models/recipe";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});
export default (req, res) => {
    new ApiHandler({
        get: GET,
        del: DEL,
        authKeys: [...JSON.parse(process.env["AUTH_KEY"])],
    }).handleRequest(req, res);
};

async function GET(req, res) {
    try {
        const recipes = await Recipe.find({ _id: req.query.id });

        if (recipes.length >= 1 && recipes) {
            return res.status(200).json({ recipe: recipes[0] });
        }
    } catch (err) {
        if (err instanceof mongoose.Error.CastError) {
            // CastError is thrown when the ObjectId is not found
            return res.status(404).json({ notFound: true });
        }
        return res.status(500).json({ error: err });
    }
}

async function DEL(req, res) {
    try {
        let recipe = await Recipe.find({ _id: req.query.id });
        recipe = recipe[0];
        const publicId = extractPublicId(recipe.image);
        await cloudinary.uploader.destroy(publicId);
        await Recipe.deleteOne({ _id: req.query.id });
        return res.status(200).json({ operationSuccess: true });
    } catch (err) {
        console.log(err);
        if (err instanceof mongoose.Error.CastError) {
            return res.status(404).json({ notFound: true });
        }
        return res.status(500).json({ error: err });
    }
}

// fetch failed, mongodb timeout
