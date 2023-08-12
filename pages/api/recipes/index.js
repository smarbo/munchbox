// Import necessary packages
require("dotenv").config();
import ApiHandler from "@/servercomponents/apihandler";
import path from "path";
import Recipe from "@/models/recipe";
require("@/servercomponents/db");
const uploadPath = path.join("var", "task", "uploads", "recipes");
const fs = require("fs/promises");

async function initUploadDirs() {
    try {
        await fs.access(uploadPath);
    } catch (error) {
        if (error.code === "ENOENT") {
            await fs.mkdir(uploadPath, { recursive: true });
        } else {
            throw error;
        }
    }
}

initUploadDirs();

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
    const parsedBody = JSON.parse(req.body);
    const { title, time, creator, ingredients, content, image } = parsedBody;
    const recipeId = Date.now();
    if (!title || !time || !creator || !ingredients || !content) {
        return res.status(400).json({
            error: "Invalid Data",
            reqBody: [title, time, creator, ingredients, content],
        });
    }
    try {
        const base64Data = image.split(",")[1];
        const imageBuffer = Buffer.from(base64Data, "base64");
        const filePath = path.join(uploadPath, `${recipeId}.jpg`);
        console.log(filePath);
        await fs.writeFile(filePath, imageBuffer);
        await Recipe.create({
            title,
            time,
            creator,
            ingredients,
            content,
            recipeId,
        });
        console.log("Success");
        return res.status(200).json({ message: "Success!" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: err });
    }
}

// Function for GET allRecipes endpoint
function allRecipes(req, res) {
    try {
        const recipes = Recipe.find({});
        return res.status(200).json({ data: recipes });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: err });
    }
}
