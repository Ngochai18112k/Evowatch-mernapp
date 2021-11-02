import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        name: {
            type: String,
            required: true,
            unique: true,
        },
        image1: {
            type: String,
            required: true,
        },
        image2: {
            type: String,
            required: true,
        },
        image3: {
            type: String,
        },
        brand: {
            type: String,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        oldPrice: {
            type: Number,
        },
        discount: {
            type: Number,
        },
        category: {
            type: String,
            required: true,
        },
        type: {
            type: String,
        },
        inStock: {
            type: Boolean,
            required: true,
            default: false,
        },
        desc: {
            type: String,
            required: true,
        },
        intro: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
