const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rollNumber: { type: String, required: true, unique: true },
  course: { type: String, required: true },
  year: { type: Number, required: true },
  section: { type: String },
  attendance: [{ date: Date, status: String }], // Example: [{ date: "2025-03-11", status: "Present" }]
  assignments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Assignment" }],
  feesPaid: { type: Boolean, default: false },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
