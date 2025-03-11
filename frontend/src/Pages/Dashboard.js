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

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Navbar with toggle functionality */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Sidebar with visibility control */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className={`p-6 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-16"}`}>
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to the student dashboard.</p>

        {/* Statistics Cards - Adjusted Left */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-[90%]">
          <Card title="Total Students" value="1,200" icon="fa-users" />
          <Card title="New Admissions" value="120" icon="fa-user-plus" />
          <Card title="Courses Available" value="45" icon="fa-book" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
