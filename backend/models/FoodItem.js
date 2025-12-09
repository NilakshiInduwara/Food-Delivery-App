import mongoose from "mongoose";

const foodItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    item: { type: String, required: true },
    price: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    potionImages: [{
        url: String,
        altText: String
    }],
}, { timestamps: true });

const FoodItem = mongoose.model("FoodItem", foodItemSchema);
export default FoodItem;