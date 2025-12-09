import FoodItem from "../models/FoodItem.js";
import Restaurant from "../models/Restaurant.js";

export const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getfoodItems = async (req, res) => {
  try {
    const foodItems = await FoodItem.find();
    res.json(foodItems);
  } catch (err) {
    console.error("Error fetching food items: ", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createRestaurant = async (req, res) => {
  try {
    const { name, cuisine, rating, location } = req.body;
    const restaurant = await Restaurant.create({
      name,
      cuisine,
      rating,
      location,
    });
    res.status(201).json(restaurant);
  } catch (error) {
    console.error("Error creating restaurant:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createFoodItem = async (req, res) => {
    try {
        const { name, item, price, title, description 
          // ,validTill, increment 
        } = req.body;

        if (!name || !item || !price || !title || !description) {
          return res.status(400).json({ message: "All fields are required" });
        }

        // Handle main image
        const image = req.files.image ? `/uploads/${req.files.image[0].filename}` : null;

        // Handle potion images
        const potionImages = req.files.potionImages ? req.files.potionImages.map(file => ({
            url: `/uploads/${file.filename}`,
            altText: file.originalname
        })) : [];

        const foodItem = await FoodItem.create({
            name,
            item,
            price,
            title,
            description,
            // validTill,
            // increment,
            image,
            potionImages,
        });

        res.status(201).json(foodItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
