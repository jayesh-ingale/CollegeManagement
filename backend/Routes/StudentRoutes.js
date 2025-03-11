const express = require("express");
const { getStudents, addStudent, getStudentById } = require("../Controllers/studentController");

const router = express.Router();

router.get("/", getStudents); // Get all students
router.get("/:id", getStudentById); // Get student by ID
router.post("/", addStudent); // Add a new student

module.exports = router; // ✅ Correct Export
