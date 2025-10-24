const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const offerRoutes = require("./routes/offerRoutes");

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

app.listen(PORT, () => {
console. log(`Server is running on http://localhost:${PORT}`);
});