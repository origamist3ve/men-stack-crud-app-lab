import { Router } from "express";
import Car from "../models/car.js";

const carsRouter = Router();

carsRouter.get("/", (req, res) => {
    res.render("index");
})

carsRouter.get("/cars", (req, res) => {
    res.render("new");
})





export default carsRouter