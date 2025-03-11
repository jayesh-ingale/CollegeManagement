import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { Bar } from "react-chartjs-2";
import "chart.js/auto"; // Required for Chart.js

const Exams = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Exam Data
  const exams = [
    { subject: "Mathematics", date: "2025-04-05", time: "10:00 AM - 12:00 PM", status: "Upcoming" },
    { subject: "Physics", date: "2025-04-08", time: "2:00 PM - 4:00 PM", status: "Upcoming" },
    { subject: "Chemistry", date: "2025-03-28", time: "11:00 AM - 1:00 PM", status: "Completed", score: 85 },
    { subject: "English", date: "2025-03-25", time: "9:00 AM - 11:00 AM", status: "Completed", score: 78 },
    { subject: "Mathematics", date: "2025-03-22", time: "1:00 PM - 3:00 PM", status: "Completed", score: 92 },
    { subject: "Physics", date: "2025-03-18", time: "10:00 AM - 12:00 PM", status: "Completed", score: 80 },
  ];

  // Define Colors for Subjects
  const subjectColors = {
    Mathematics: "#9966FF", // Purple
    Physics: "#FF9F40", // Orange
    Chemistry: "#FF6384", // Pink
    English: "#36A2EB", // Blue
  };

  // Prepare Data for Chart
  const completedExams = exams.filter(e => e.status === "Completed");
  const performanceData = {
    labels: completedExams.map(e => e.subject),
    datasets: [
      {
        label: "Marks Obtained",
        data: completedExams.map(e => e.score),
        backgroundColor: completedExams.map(e => subjectColors[e.subject] || "#4BC0C0"), // Default Cyan
        borderColor: "#333",
        borderWidth: 1,
        barThickness: 50, // Makes bars thicker
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows custom height
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="p-6 ml-64">
        <h1 className="text-3xl font-bold text-gray-800">📚 Exams</h1>
        <p className="text-gray-600 mt-2">Manage your exam schedule, results, and performance.</p>

        {/* 📅 Upcoming Exams Section */}
        <div className="mt-6 bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">📅 Upcoming Exams</h2>
          <table className="w-full border-collapse mt-3">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 border">Subject</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Time</th>
                <th className="p-3 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {exams.map((exam, index) => (
                <tr key={index} className={exam.status === "Completed" ? "bg-green-100" : "bg-yellow-100"}>
                  <td className="p-3 border">{exam.subject}</td>
                  <td className="p-3 border">{exam.date}</td>
                  <td className="p-3 border">{exam.time}</td>
                  <td className="p-3 border">{exam.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 📊 Exam Performance Bar Graph */}
        <div className="mt-6 bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">📈 Exam Performance</h2>
          <div className="h-96"> {/* Sets Fixed Height for Better View */}
            <Bar data={performanceData} options={options} />
          </div>
        </div>

        {/* 📝 Mock Tests Section */}
        <div className="mt-6 bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">📝 Practice & Mock Tests</h2>
          <ul className="mt-3">
            <li className="p-2 bg-blue-100 mb-2 rounded">
              <a href="#" className="text-blue-700 font-semibold">📘 Mathematics Mock Test</a>
            </li>
            <li className="p-2 bg-blue-100 mb-2 rounded">
              <a href="#" className="text-blue-700 font-semibold">📗 Physics Practice Paper</a>
            </li>
            <li className="p-2 bg-blue-100 mb-2 rounded">
              <a href="#" className="text-blue-700 font-semibold">📙 Chemistry Quiz</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Exams;
