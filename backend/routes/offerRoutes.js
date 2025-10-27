import express from 'express';
import { getOffers, getOfferById, createOffer } from '../controllers/offerController.js';
import { upload } from '../middleware/uploadImage.js';
import { protect } from '../middleware/authMiddleware.js';
import { authorize } from '../middleware/authorizeMiddleware.js';

const router = express.Router();

router.route("/")
    .get(getOffers)
    .post(upload.fields([
        { name: "image", maxCount: 1 },
        { name: "potionImages", maxCount: 10 }
    ]), protect, authorize("restaurant"), createOffer);

router.route("/:id").get(getOfferById);

export default router;