const Student = require("../Models/Student");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

// Generate JWT Token with role
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// Login Function
const loginUser = async (req, res) => {
  const { id, password } = req.body;

  try {
    // Check for user (Ensure you're using the correct field: id or rollNumber)
    let student = await Student.findOne({ id });

    if (!student) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // Send response with JWT
    res.json({
      _id: student._id,
      name: student.name,
      role: student.role, // Important for redirection
      id: student.id,
      token: generateToken(student._id, student.role), // Token now contains role
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = { loginUser };
