const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();
connectDB(); // Connect to MongoDB

app.use(cors());
app.use(express.json()); // Middleware to parse JSON

// Routes
const studentRoutes = require("./Routes/StudentRoutes");
const authRoutes = require("./Routes/AuthRoutes");

app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes); // ✅ Add authentication route

app.get("/", (req, res) => {
  res.send("College Management Backend Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
