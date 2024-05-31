import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    category: {
        type: String,
    },
    image: {
        type: String,
    },
    sold: {
        type: Boolean,
        default: false
    },
    dateOfSale: {
        type: String,
     
    },
}, { timestamps: true })

export default mongoose.model("products", productModel)