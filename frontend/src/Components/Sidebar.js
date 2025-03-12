import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-[#1D4350] to-[#A43931] text-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
        onClick={toggleSidebar}
      >
        &times;
      </button>

      <div className="p-6 mt-8">
        <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
        <ul className="space-y-4">
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/dashboard" onClick={toggleSidebar}>
              <i className="fa-solid fa-chart-line mr-2"></i> Overview
            </Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/attendance" onClick={toggleSidebar}>
              <i className="fa-solid fa-calendar-check mr-2"></i> Attendance
            </Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/assignments" onClick={toggleSidebar}>
              <i className="fa-solid fa-book mr-2"></i> Assignments
            </Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/timetable" onClick={toggleSidebar}>
              <i className="fa-solid fa-clock mr-2"></i> Timetable
            </Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/exams" onClick={toggleSidebar}>
              <i className="fa-solid fa-file-alt mr-2"></i> Exams
            </Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/fees" onClick={toggleSidebar}>
              <i className="fa-solid fa-file-invoice-dollar mr-2"></i> Fees
            </Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/announcements" onClick={toggleSidebar}>
              <i className="fa-solid fa-bullhorn mr-2"></i> Announcements
            </Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/library" onClick={toggleSidebar}>
            <i class="fa-solid fa-book"></i> &nbsp;Library
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
