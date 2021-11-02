import express from 'express';
const router = express.Router();
import {
    getNews,
    getNewsById,
    createNews,
    updateNews,
    deleteNews,
    createNewsReview,
} from '../controllers/newsController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router
    .route('/')
    .get(getNews)
    .post(protect, admin, createNews);

router.route('/:id/reviews').post(protect, createNewsReview);

router
    .route('/:id')
    .get(getNewsById)
    .put(protect, admin, updateNews)
    .delete(protect, admin, deleteNews);

export default router;
