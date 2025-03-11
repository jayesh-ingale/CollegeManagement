const Student = require("../Models/Student");

// Get all students
const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get student by ID
const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student Not Found" });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Add a new student
const addStudent = async (req, res) => {
  try {
    const { name, email, password, rollNumber, course, year, section } = req.body;

    // Check if student already exists
    const studentExists = await Student.findOne({ email });
    if (studentExists) {
      return res.status(400).json({ message: "Student already exists" });
    }

    // Create new student
    const newStudent = new Student({ name, email, password, rollNumber, course, year, section });
    const savedStudent = await newStudent.save();
    
    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = { getStudents, getStudentById, addStudent };
