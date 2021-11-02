import express from "express";
const router = express.Router();
import {
    getProducts,
    getProductById,
    getNewProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductBrands,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);

router.get("/sort/new", getNewProducts);

router.get("/list/brands", getProductBrands);

router
    .route("/product/:id")
    .get(getProductById)
    .put(protect, admin, updateProduct)
    .delete(protect, admin, deleteProduct);

export default router;
