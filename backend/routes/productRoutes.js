import express from "express"
const router = express.Router()
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from "../controllers/productController.js"
import {protect, isAdmin} from "../middleware/authMiddleware.js"

router.route("/").get(getProducts).post(protect, isAdmin, createProduct)

router.route("/:id").get(getProductById).delete(protect, isAdmin, deleteProduct).put(protect, isAdmin, updateProduct)


export default router