// Import .env file
require("dotenv").config();

// Import apihandler class which you made previously
import ApiHandler from "@/servercomponents/apihandler";
import db from "@/servercomponents/db";
import Recipe from "@/models/recipe"; // Use import instead of require

// Export the apihandler object for /api/recipes/
export default (req, res) => {
    new ApiHandler({
        post: createRecipe,
        get: allRecipes,
        authKeys: [...JSON.parse(process.env["AUTH_KEY"])],
    }).handleRequest(req, res);
};

// Create recipe function for POST requests
async function createRecipe(req, res) {
    const { title, time, creator, ingredients, content, image } = req.body;
    const dbRes = await Recipe.create({
        title,
        time,
        creator,
        ingredients,
        content,
        image,
    });
    res.status(200).json({
        message: await dbRes.creator,
    });
}

// All recipes function for GET requests
function allRecipes(req, res) {
    res.status(200).json({
        message: "This is the GET allRecipes endpoint",
    });
}
