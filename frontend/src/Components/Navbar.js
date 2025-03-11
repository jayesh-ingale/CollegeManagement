import React from "react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-gradient-to-r from-[#0F2027] to-[#2C5364] p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Left Section - Sidebar Toggle, Contact & Logo */}
        <div className="flex items-center space-x-6">  
          {/* Sidebar Toggle Button */}
          <button onClick={toggleSidebar} className="text-white text-2xl focus:outline-none">
            <i className="fa-solid fa-bars"></i> {/* Three-line menu icon */}
          </button>

          {/* Mail Icon with Spacing Fix */}
          <i className="fa-solid fa-envelope text-xl cursor-pointer ml-2"></i>  
          
          {/* Dashboard Title */}
          <div className="text-lg font-bold flex items-center">
            <i className="fa-solid fa-school text-xl mr-2"></i>
            <span>Student Dashboard</span>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 ml-auto">  
          <li className="hover:text-gray-300 cursor-pointer"><i className="fa-solid fa-house"></i> Home</li>
          <li className="hover:text-gray-300 cursor-pointer"><i className="fa-solid fa-users"></i> Students</li>
          <li className="hover:text-gray-300 cursor-pointer"><i className="fa-solid fa-book"></i> Courses</li>
        </ul>

        {/* Right Section - Profile & Logout */}
        <div className="flex items-center space-x-4 ml-6">
          <i className="fa-solid fa-user-circle text-2xl cursor-pointer"></i>
          <button className="bg-red-500 hover:bg-red-700 px-3 py-1 rounded">
            <i className="fa-solid fa-right-from-bracket"></i> Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
