// server.js or app.js

const express = require("express");
const mongoose = require("mongoose");
const announcementRoutes = require("./Routes/AnnouncementRoutes");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Database Connection
mongoose.connect("mongodb://localhost:27017/collegeDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/announcements", announcementRoutes);

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
