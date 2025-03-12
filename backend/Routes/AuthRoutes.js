const express = require("express");
const bcrypt = require("bcryptjs"); // Change from bcrypt to bcryptjs

const jwt = require("jsonwebtoken");
const User = require("../Models/User");

const router = express.Router();

// Login Route
router.post("/login", async (req, res) => {
    const { userId, password } = req.body;

    try {
        // Find user in DB
        const user = await User.findOne({ userId });
        if (!user) return res.status(400).json({ message: "User not found" });

        // Compare password (you need to store hashed passwords in DB)
        const isMatch = password === user.password; // Replace this with bcrypt.compare if using hashing
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        // Generate JWT Token
        const token = jwt.sign({ userId: user.userId, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

        // Send Response
        res.json({ token, role: user.role, name: user.name });

    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
