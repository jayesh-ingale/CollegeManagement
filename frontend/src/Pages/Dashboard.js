import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Card from "../Components/Card";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Student Data (Can be fetched dynamically)
  const studentName = localStorage.getItem("name") || "Student";
  const studentProfilePic = "https://randomuser.me/api/portraits/men/31.jpg"; // Sample profile pic

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Navbar with toggle functionality */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Sidebar with visibility control */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className={`p-6 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-16"}`}>
        {/* Student Profile Section */}
        <div className="flex items-center bg-gradient-to-r from-[#0072ff] to-[#00c6ff] text-white p-6 rounded-lg shadow-lg">
          <img
            src={studentProfilePic}
            alt="Profile"
            className="w-16 h-16 rounded-full border-2 border-white"
          />
          <div className="ml-4">
            <h2 className="text-2xl font-bold">Welcome, {studentName}! 🎓</h2>
            <p className="opacity-80 italic">"The future belongs to those who believe in the beauty of their dreams."</p>
          </div>
        </div>

        {/* Statistics Cards - Adjusted Left */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-[90%]">
          <Card
            title="Total Students"
            value="1,200"
            icon="fa-users"
            quote="Education is the key to unlocking the world."
          />
          <Card
            title="New Admissions"
            value="120"
            icon="fa-user-plus"
            quote="Knowledge is power, and you are on the path to greatness."
          />
          <Card
            title="Courses Available"
            value="45"
            icon="fa-book"
            quote="Every course you take is a step toward your dreams."
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
