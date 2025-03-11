import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const Attendance = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  // Dummy logged-in student details
  const student = {
    name: "Rahul Sharma",
    rollNumber: "20BCS045",
    attendance: [
      { subject: "Mathematics", total: 40, attended: 36 },
      { subject: "Physics", total: 40, attended: 34 },
      { subject: "Chemistry", total: 40, attended: 38 },
      { subject: "Computer Science", total: 40, attended: 37 },
    ],
  };

  // Calculate attendance percentage & color code it
  const calculatePercentage = (attended, total) => {
    const percentage = ((attended / total) * 100).toFixed(2);
    let colorClass = "text-green-600"; // Default to green

    if (percentage < 50) {
      colorClass = "text-red-600";
    } else if (percentage < 75) {
      colorClass = "text-orange-500";
    }

    return <span className={`font-bold ${colorClass}`}>{percentage}%</span>;
  };

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative min-h-screen bg-[#f5f7fa] flex">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <div className="p-6">
          {/* Student Info */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-6 border-l-4 border-[#ff7f50]"> {/* Orange Left Border */}
            <h1 className="text-3xl font-bold text-[#1e3a5f]">Attendance</h1>  {/* Dark Blue Header */}
            <p className="text-gray-600 mt-1">
              Student: <span className="font-semibold">{student.name}</span>
            </p>
            <p className="text-gray-600">
              Roll Number: <span className="font-semibold">{student.rollNumber}</span>
            </p>
          </div>

          {/* Attendance Table */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">Attendance Record</h2> {/* Dark Blue Header */}
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#ffedd5] text-left text-[#ff7f50]"> {/* Orange Header */}
                  <th className="p-3 border">Subject</th>
                  <th className="p-3 border">Total Classes</th>
                  <th className="p-3 border">Attended</th>
                  <th className="p-3 border">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {student.attendance.map((subject, index) => (
                  <tr key={index} className="text-center bg-white hover:bg-gray-100 transition">
                    <td className="p-3 border">{subject.subject}</td>
                    <td className="p-3 border">{subject.total}</td>
                    <td className="p-3 border">{subject.attended}</td>
                    <td className="p-3 border">{calculatePercentage(subject.attended, subject.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
