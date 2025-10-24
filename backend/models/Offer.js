const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    item: { type: String, required: true },
    price: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    validTill: { type: Date, required: true },
    increment: { type: Number, required: true },
    image: { type: String },
    potionImages: [{
        url: String,
        altText: String
    }],
}, { timestamps: true });

module.exports = mongoose.model("Offer", offerSchema);