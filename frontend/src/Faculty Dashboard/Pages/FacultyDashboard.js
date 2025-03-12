// src/Pages/FacultyDashboard.js

import React, { useState } from "react";
import FacultyNavbar from "../Components/Navbar"; // Import Faculty Navbar
import FacultySidebar from "../Components/Sidebar"; // Import Faculty Sidebar

const FacultyDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [facultyInfo, setFacultyInfo] = useState({
    name: "Dr. John Doe",
    profilePic: "https://www.w3schools.com/w3images/avatar2.png",
    designation: "Professor of Computer Science",
    department: "Computer Science & Engineering",
  });
  const [activityFeed, setActivityFeed] = useState([
    { id: 1, message: "Marked attendance for class A1", time: "2 hours ago" },
    { id: 2, message: "Posted an announcement about upcoming exams", time: "5 hours ago" },
    { id: 3, message: "Updated course syllabus for CS101", time: "1 day ago" },
  ]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleProfileEdit = () => {
    alert("Edit Profile clicked!");
  };

  const handleQuickAction = (action) => {
    alert(`${action} clicked!`);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <FacultySidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        <FacultyNavbar toggleSidebar={toggleSidebar} />

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Faculty Dashboard</h1>

          {/* Profile Section */}
          <div className="flex items-center space-x-6 bg-white shadow-md rounded-lg p-6">
            <img
              src={facultyInfo.profilePic}
              alt="Faculty Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{facultyInfo.name}</h2>
              <p className="text-gray-600">{facultyInfo.designation}</p>
              <p className="text-gray-500">{facultyInfo.department}</p>
              <button
                onClick={handleProfileEdit}
                className="mt-2 text-blue-500 hover:underline"
              >
                Edit Profile
              </button>
            </div>
          </div>

          {/* Quick Action Panel */}
          <div className="grid grid-cols-3 gap-6">
  {/* Create Announcement Button */}
  <div
    onClick={() => handleQuickAction("Create Announcement")}
    className="bg-gradient-to-r from-orange-400 to-orange-600 text-white text-center py-8 rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition-all"
  >
    <p className="font-semibold text-xl">Create Announcement</p>
    <p className="text-sm mt-2">Post updates for your students.</p>
  </div>

  {/* Mark Attendance Button */}
  <div
    onClick={() => handleQuickAction("Mark Attendance")}
    className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-center py-8 rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition-all"
  >
    <p className="font-semibold text-xl">Mark Attendance</p>
    <p className="text-sm mt-2">Take attendance for your classes.</p>
  </div>

  {/* View Timetable Button */}
  <div
    onClick={() => handleQuickAction("View Timetable")}
    className="bg-gradient-to-r from-amber-400 to-amber-600 text-white text-center py-8 rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition-all"
  >
    <p className="font-semibold text-xl">View Timetable</p>
    <p className="text-sm mt-2">Check your schedule here.</p>
  </div>
</div>



          {/* Dashboard Widgets */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800">Total Attendance</h3>
              <p className="text-4xl font-bold text-gray-600">85%</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800">Upcoming Exams</h3>
              <ul className="text-gray-600 space-y-2">
                <li>CS101 - 12th March</li>
                <li>CS102 - 15th March</li>
              </ul>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h3>
            <div className="space-y-4">
              {activityFeed.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  <div>
                    <p className="text-gray-800">{activity.message}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
