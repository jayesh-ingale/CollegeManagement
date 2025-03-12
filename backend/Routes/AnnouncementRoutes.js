// routes/announcementRoutes.js

const express = require("express");
const { createAnnouncement, getAnnouncements } = require("../Controllers/AnnouncementController");

const router = express.Router();

// Route for teachers to create an announcement (no authentication needed)
router.post("/create", createAnnouncement);

// Route for students to get all announcements (no authentication needed)
router.get("/", getAnnouncements);

module.exports = router;
