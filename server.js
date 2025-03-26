import express from 'express'
import "./db/connection.js"
import methodOverride from "method-override";
import morgan from "morgan"
import path from "path"
import { fileURLToPath } from "url";



import carsRouter from "./controllers/cars.js"

const PORT = process.env.PORT || 3000
const app = express()

//TODO: What does this do
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));

//For CSS formatting
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname));

app.set("view engine", "ejs");




app.use("/", carsRouter)








app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
});