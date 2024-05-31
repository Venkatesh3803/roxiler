import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import ProductRoute from "./Routes/ProductRoute.js"
import cors from "cors"


const app = express();
const port = 5000
dotenv.config()
app.use(cors())
app.use(express.json())


const connectDb = () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("connected to db")
    }).catch((err) => {
        console.log(err)
    })
}

app.listen(port, () => {
    connectDb()
    console.log("app is listening at port 5000")
})

//routes

app.use("/api/products", ProductRoute)

