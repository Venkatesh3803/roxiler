import express from "express";
import { getMonthSales, getProducts, getProductsCategory, getSoldProductsPerMonth } from "../controllers/ProductController.js";

const route = express.Router();

route.get("/", getProducts)
route.get("/monthsale", getMonthSales)
route.get("/soldproductpermonth", getSoldProductsPerMonth)
route.get("/notsoldproductpermonth", getSoldProductsPerMonth)
route.get("/productcateogry", getProductsCategory)

export default route