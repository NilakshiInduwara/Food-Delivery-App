import express from 'express';
import { getRestaurants, createRestaurant } from '../controllers/restaurantController.js';
import { protect } from '../middleware/authMiddleware.js';
import { authorize } from '../middleware/authorizeMiddleware.js';

const router = express.Router();

router.route("/")
    .post(protect, authorize("restaurant"), createRestaurant)
    .get(getRestaurants);

export default router;