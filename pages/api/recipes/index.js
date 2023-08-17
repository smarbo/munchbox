// Import necessary packages
require("dotenv").config();
import ApiHandler from "@/servercomponents/apihandler";
import path from "path";
import Recipe from "@/models/recipe";
require("@/servercomponents/db");
// use cloudinary!!!
import { v2 as cloudinary } from "cloudinary";

console.log(process.env["CLOUDINARY_NAME"]);

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});

// Export the API route handler
export default (req, res) => {
    new ApiHandler({
        post: createRecipe,
        get: allRecipes,
        authKeys: [...JSON.parse(process.env["AUTH_KEY"])],
    }).handleRequest(req, res);
};

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "8mb",
        },
    },
};

// Function to create a recipe for POST requests
async function createRecipe(req, res) {
    let parsedBody = {};
    try {
        parsedBody = JSON.parse(req.body);
    } catch {
        return res.status(400).json({
            error: "Invalid Request",
        });
    }
    const { title, time, creator, ingredients, content, image } = parsedBody;
    const recipeId = Date.now();

    const imageParts = image.split(",");
    const imageBuffer = Buffer.from(imageParts[1], "base64");

    if (!title || !time || !creator || !ingredients || !content) {
        return res.status(400).json({
            error: "Invalid Data",
            reqBody: [title, time, creator, ingredients, content],
        });
    }
    try {
        const cloudinaryRes = await cloudinary.uploader
            .upload_stream(
                { resource_type: "image" },
                async (error, result) => {
                    if (error) {
                        console.error("Error uploading image.");
                        return res.status(500).json({
                            error: "Error uploading image to cloudinary",
                        });
                    }
                    await Recipe.create({
                        title,
                        time,
                        creator,
                        ingredients,
                        content,
                        recipeId,
                        image: result.secure_url,
                    });
                    console.log("Success");
                    return res.status(200).json({ message: "Success!" });
                }
            )
            .end(imageBuffer);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: err });
    }
}

// Function for GET allRecipes endpoint
async function allRecipes(req, res) {
    try {
        const recipes = await Recipe.find({});
        return res.status(200).json({ data: recipes });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: err });
    }
}
