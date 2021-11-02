import asyncHandler from "express-async-handler";
import News from "../models/newsModel.js";

// @desc    Fetch all news
// @route   GET /api/news
// @access  Public
const getNews = asyncHandler(async (req, res) => {
    const pageSize = 6;
    const page = Number(req.query.pageNumber) || 1;

    const count = await News.countDocuments({});
    const news = await News.find({})
        .limit(pageSize)
        .skip(pageSize * (page - 1));

    res.json({ news, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch single news
// @route   GET /api/news/:id
// @access  Public
const getNewsById = asyncHandler(async (req, res) => {
    const news = await News.findById(req.params.id);

    if (news) {
        res.json(news);
    } else {
        res.status(404);
        throw new Error("News not found");
    }
});

// @desc    Create a news
// @route   POST /api/news
// @access  Private/Admin
const createNews = asyncHandler(async (req, res) => {
    const news = new News({
        user: req.user._id,
        imgTitle: "/images/sample.jpg",
        title: "Sample title",
        author: "Evo Watch",
        desc: "Sample description",
        content: "Sample content",
        numReviews: 0,
    });

    const createdNews = await news.save();
    res.status(201).json(createdNews);
});

// @desc    Update a news
// @route   PUT /api/news/:id
// @access  Private/Admin
const updateNews = asyncHandler(async (req, res) => {
    const { imgTitle, title, author, desc, content } = req.body;

    const news = await News.findById(req.params.id);

    if (news) {
        news.imgTitle = imgTitle;
        news.title = title;
        news.author = author;
        news.desc = desc;
        news.content = content;

        const updatedNews = await news.save();
        res.json(updatedNews);
    } else {
        res.status(404);
        throw new Error("News not found");
    }
});

// @desc    Delete a news
// @route   DELETE /api/news/:id
// @access  Private/Admin
const deleteNews = asyncHandler(async (req, res) => {
    const news = await News.findById(req.params.id);

    if (news) {
        await news.remove();
        res.json({ message: "News removed" });
    } else {
        res.status(404);
        throw new Error("News not found");
    }
});

// @desc    Create new review
// @route   POST /api/news/:id/reviews
// @access  Private
const createNewsReview = asyncHandler(async (req, res) => {
    const { comment } = req.body;

    const news = await News.findById(req.params.id);

    if (news) {
        const alreadyReviewed = news.reviews.find(
            (r) => r.user.toString() === req.user._id.toString()
        );

        if (alreadyReviewed) {
            res.status(400);
            throw new Error("News already reviewed");
        }

        const review = {
            name: req.user.name,
            comment,
            user: req.user._id,
        };

        news.reviews.push(review);

        news.numReviews = news.reviews.length;

        await news.save();
        res.status(201).json({ message: "Comment added" });
    } else {
        res.status(404);
        throw new Error("News not found");
    }
});

export {
    getNews,
    getNewsById,
    createNews,
    updateNews,
    deleteNews,
    createNewsReview,
};
