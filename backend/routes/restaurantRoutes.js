import express from 'express';
import { getRestaurants, createRestaurant } from '../controllers/restaurantController.js';
const router = express.Router();

router.route("/")
    .post(createRestaurant)
    .get(getRestaurants);

export default router;