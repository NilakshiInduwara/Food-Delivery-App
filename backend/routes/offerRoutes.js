const express = require("express");
const { getOffers, getOfferById, createOffer } = require("../controllers/offerController");
const { upload } = require("../middleware/uploadImage");
const router = express.Router();

router.route("/")
    .get(getOffers)
    .post(upload.fields([
        { name: "image", maxCount: 1 },
        { name: "potionImages", maxCount: 10 }
    ]), createOffer);

router.route("/:id").get(getOfferById);

module.exports = router;