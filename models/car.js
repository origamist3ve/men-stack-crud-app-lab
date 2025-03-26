import mongoose from "mongoose";

const carSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
})

const Car = mongoose.model('Car', carSchema)

export default Car;
