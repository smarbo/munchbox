require("dotenv").config();
import path from "path";
import ApiHandler from "@/servercomponents/apihandler";
const directoryPath = path.join(__dirname, "uploads", "recipes");
const fs = require("fs/promises");

export default (req,res) => {
 new ApiHandler({
    authKeys: [...JSON.parse(process.env.AUTH_KEY)] 
  }).handleRequest(req,res) 
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "8mb" 
    }
  }
}
