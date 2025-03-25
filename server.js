import express from 'express'
import "./db/connection.js"

import carsRouter from "./controllers/cars.js"

const PORT = process.env.PORT || 3000
const app = express()

//TODO: What does this do
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.set('view engine', 'ejs')

app.use("/", carsRouter)








app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
});