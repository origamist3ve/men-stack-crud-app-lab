import { Router } from "express";
import Car from "../models/car.js";

const carsRouter = Router();


carsRouter.get("/", (req, res) => {
    res.render("index");
})

//show all cars
carsRouter.get("/cars", async(req, res) => {
    const cars = await Car.find({})
    res.render("cars/index", { cars }); // The file that is being rendered at the cars url
})

//Create form
carsRouter.get("/cars/new", async(req, res) => {
    res.render("cars/new");
})



carsRouter.get("/cars/:id/edit", async(req, res) => {
    const {id} = req.params;
    const car = await Car.findById(id);

    res.render("cars/edit", { car });


})


//Takes in the name and descirption inside the new.ejs and posts then redirects to index
carsRouter.post("/cars", async(req, res) => {
    let {name, description} = req.body;

    const car = await Car.create({name, description});

    res.redirect("/cars");
})

carsRouter.get("/cars/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const car = await Car.findById(id);
        res.render("cars/show", {car});
    } catch (err) {
        res.render("cars/error");
    }
})

carsRouter.put("/cars/:id/", async(req, res) => {
    const {id} = req.params;
    const updateData = {
        name: req.body.name,
        description: req.body.description,
    }
    await Car.findByIdAndUpdate(id, updateData, {
        returnDocument: "after"
    }); // updates the id to the method that changes the data
    res.redirect(`/cars/${id}`);
})

carsRouter.delete("/cars/:id", async(req, res) => {
    const {id} = req.params;
    await Car.findByIdAndDelete(id);
    res.redirect("/cars");
})




export default carsRouter