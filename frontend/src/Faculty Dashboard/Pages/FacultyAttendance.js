// src/Pages/FacultyAttendance.js

import React, { useState } from "react";
import FacultyNavbar from "../Components/Navbar"; // Import Faculty Navbar
import FacultySidebar from "../Components/Sidebar"; // Import Faculty Sidebar

const FacultyAttendance = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [attendanceData, setAttendanceData] = useState([
    { id: 1, name: "John Doe", present: false },
    { id: 2, name: "Jane Smith", present: false },
    { id: 3, name: "Bob Johnson", present: false },
    // Add more students
  ]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleAttendanceChange = (id) => {
    setAttendanceData((prevData) =>
      prevData.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  const handleBulkAttendance = (status) => {
    setAttendanceData((prevData) =>
      prevData.map((student) => ({
        ...student,
        present: status,
      }))
    );
  };

  const handleSubmitAttendance = () => {
    if (window.confirm("Are you sure you want to submit the attendance?")) {
      alert("Attendance submitted successfully!");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <FacultySidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        <FacultyNavbar toggleSidebar={toggleSidebar} />

        {/* Attendance Content */}
        <div className="px-6 py-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Faculty Attendance</h1>
          <p className="text-lg text-gray-600 mb-6">
            Mark attendance for your students below:
          </p>

          {/* Bulk Actions */}
          <div className="mb-6 flex space-x-6">
            <button
              onClick={() => handleBulkAttendance(true)}
              className="px-5 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
            >
              Mark All Present
            </button>
            <button
              onClick={() => handleBulkAttendance(false)}
              className="px-5 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition"
            >
              Mark All Absent
            </button>
          </div>

          {/* Attendance Table */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-left text-gray-600 border-b-2">
                  <th className="px-4 py-2 text-lg font-semibold">Student Name</th>
                  <th className="px-4 py-2 text-lg font-semibold">Attendance</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-100 transition-all duration-300">
                    <td className="px-4 py-3">{student.name}</td>
                    <td className="px-4 py-3 flex justify-center">
                      <button
                        onClick={() => handleAttendanceChange(student.id)}
                        className={`px-6 py-2 rounded-full font-semibold text-white transition-all duration-300 ${
                          student.present
                            ? "bg-green-500 hover:bg-green-600"
                            : "bg-red-500 hover:bg-red-600"
                        }`}
                      >
                        {student.present ? "Present" : "Absent"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-right">
            <button
              onClick={handleSubmitAttendance}
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
            >
              Submit Attendance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyAttendance;
