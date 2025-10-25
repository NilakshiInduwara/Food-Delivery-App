import express from 'express';
import { getOffers, getOfferById, createOffer } from '../controllers/offerController.js';
import { upload } from '../middleware/uploadImage.js';
const router = express.Router();

router.route("/")
    .get(getOffers)
    .post(upload.fields([
        { name: "image", maxCount: 1 },
        { name: "potionImages", maxCount: 10 }
    ]), createOffer);

router.route("/:id").get(getOfferById);

export default router;