import express from 'express';
import { getRestaurants, createRestaurant, createFoodItem, getfoodItems } from '../controllers/restaurantController.js';
import { protect } from '../middleware/authMiddleware.js';
import { authorize } from '../middleware/authorizeMiddleware.js';
import { upload } from '../middleware/uploadImage.js';

const router = express.Router();

router.route("/")
    .post(protect, authorize("restaurant"), createRestaurant)
    .get(getRestaurants);
    
router.route("/getFoodItems").get(getfoodItems);

router.route("/createFoodItem")
    .post(upload.fields([
            { name: "image", maxCount: 1 },
            { name: "potionImages", maxCount: 10 }
        ]), protect, authorize("restaurant"), createFoodItem);

export default router;