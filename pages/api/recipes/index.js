// Import necessary packages
require("dotenv").config();
import ApiHandler from "@/servercomponents/apihandler";
import Recipe from "@/models/recipe";
import User from "@/models/user";
require("@/servercomponents/db");
// use cloudinary!!!
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// Export the API route handler
export default (req, res) => {
  new ApiHandler({
    post: POST,
    get: GET,
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
async function POST(req, res) {
  let parsedBody = {};
  try {
    parsedBody = JSON.parse(req.body);
  } catch {
    return res.status(400).json({
      error: "Invalid Request",
    });
  }
  const { title, time, creator, ingredients, content, image } = parsedBody;

  const imageParts = image.split(",");
  const imageBuffer = Buffer.from(imageParts[1], "base64");

  if (!title || !time || !creator || !ingredients || !content) {
    return res.status(400).json({
      error: "Invalid Data",
      reqBody: [title, time, creator, ingredients, content],
    });
  }
  try {
    cloudinary.uploader
      .upload_stream({ resource_type: "image" }, async (error, result) => {
        if (error) {
          console.error("Error uploading image.");
          return res.status(500).json({
            error: "Error uploading image to cloudinary",
          });
        }
        const recipe = await Recipe.create({
          title,
          time,
          creator,
          ingredients,
          content,
          image: result.secure_url,
        });
        await User.updateOne(
          { username: creator },
          { $push: { recipes: recipe._id } }
        );
        console.log("Success");
        return res.status(200).json({ id: recipe._id });
      })
      .end(imageBuffer);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
}

// Function for GET allRecipes endpoint
async function GET(req, res) {
  try {
    const recipes = await Recipe.find({});
    return res.status(200).json({ data: recipes });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
}
