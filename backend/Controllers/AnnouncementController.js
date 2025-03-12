// controllers/announcementController.js

const Announcement = require("../Models/Announcement");

// Create an announcement (no authentication)
const createAnnouncement = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Use a placeholder if you don't have a logged-in user (or use a static ID)
    const announcement = new Announcement({
      title,
      content,
      createdBy: "Anonymous", // You can change this to a static user ID if needed
    });

    await announcement.save();
    res.status(201).json({ message: "Announcement created successfully", announcement });
  } catch (error) {
    res.status(500).json({ message: "Failed to create announcement" });
  }
};

// Get all announcements (no authentication)
const getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find().sort({ createdAt: -1 });
    res.status(200).json(announcements);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch announcements" });
  }
};

module.exports = { createAnnouncement, getAnnouncements };
