import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import offerRoutes from './routes/offerRoutes.js';
import restaurantRoutes from './routes/restaurantRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 3000;

// connect MongoDB
connectDB();

app.get("/", (req, res) => {
res.send("WELCOME TO FOOD-DELIVERY API!");
});

// Serve uploaded images
app.use("/uploads", express.static("uploads"));

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/offers", offerRoutes);
app.use("/api/restaurants", restaurantRoutes);

app.listen(PORT, () => {
console. log(`Server is running on http://localhost:${PORT}`);
});