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
