import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//@desc    Fetch all products
//@router  GET /api/products
//@access  Public
const getProducts = asyncHandler(async (req, res) => {
    const pageSize = 12;
    const page = Number(req.query.pageNumber) || 1;
    const name = req.query.name || "";
    const category = req.query.category || "";
    const brand = req.query.brand || "";
    const min =
        req.query.min && Number(req.query.min) !== 0
            ? Number(req.query.min)
            : 0;
    const max =
        req.query.max && Number(req.query.max) !== 0
            ? Number(req.query.max)
            : 0;

    const nameFilter = name ? { name: { $regex: name, $options: "i" } } : {};
    const categoryFilter = category ? { category } : {};
    const brandFilter = brand ? { brand } : {};
    const priceFilter = min && max ? { price: { $gte: min, $lte: max } } : {};

    const count = await Product.countDocuments({
        ...nameFilter,
        ...categoryFilter,
        ...brandFilter,
        ...priceFilter,
    });
    const products = await Product.find({
        ...nameFilter,
        ...categoryFilter,
        ...brandFilter,
        ...priceFilter,
    })
        .skip(pageSize * (page - 1))
        .limit(pageSize);

    res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

//@desc    Fetch single product
//@router  GET /api/products/product/:id
//@access  Public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error("Product not found");
    }
});

//@desc    GET brands product
//@router  GET /api/products/list/brands?cat=
//@access  Public
const getProductBrands = asyncHandler(async (req, res) => {
    const category = req.query.category || "";
    const categoryFilter = category ? { category } : {};

    const brands = await Product.find({ ...categoryFilter }).distinct("brand");
    res.json(brands);
});

//@desc    GET new products
//@router  GET /api/products/sort/new
//@access  Public
const getNewProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({}).sort({ createdAt: -1 }).limit(5);

    res.json(products);
});

//@desc    Create a product
//@router  POST /api/products
//@access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
        user: req.user._id,
        name: "Sample name",
        price: 0,
        oldPrice: 0,
        image1: "/images/sample.jpg",
        image2: "/images/sample.jpg",
        image3: "/images/sample.jpg",
        brand: "Sample brand",
        category: " ",
        inStock: true,
        discount: 0,
        type: "",
        desc: "Sample description",
        intro: "Sample introduction",
    });

    const createProduct = await product.save();
    res.status(201).json(createProduct);
});

//@desc    Update a product
//@router  PUT /api/products/product/:id
//@access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
    const {
        name,
        price,
        oldPrice,
        image1,
        image2,
        image3,
        brand,
        category,
        inStock,
        discount,
        type,
        desc,
        intro,
    } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
        product.name = name;
        product.price = price;
        product.oldPrice = oldPrice;
        product.image1 = image1;
        product.image2 = image2;
        product.image3 = image3;
        product.brand = brand;
        product.category = category;
        product.inStock = inStock;
        product.discount = discount;
        product.type = type;
        product.desc = desc;
        product.intro = intro;

        const updateProduct = await product.save();
        res.json(updateProduct);
    } else {
        res.status(404);
        throw new Error("Product not found");
    }
});

//@desc    Delete a product
//@router  DELETE /api/products/product/:id
//@access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        await product.remove();
        res.json({ message: "Product removed" });
    } else {
        res.status(404);
        throw new Error("Product not found");
    }
});

export {
    getProducts,
    getProductById,
    getProductBrands,
    getNewProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};
