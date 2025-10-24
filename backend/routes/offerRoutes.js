const express = require("express");
const { getOffers, getOfferById, createOffer } = require("../controllers/offerController");
const router = express.Router();

router.route("/")
    .get(getOffers)
    .post(createOffer);

router.route("/:id").get(getOfferById);

module.exports = router;