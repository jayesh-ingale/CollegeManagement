import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const FacultyAnnouncements = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [announcementText, setAnnouncementText] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleAnnouncementSubmit = () => {
    // Submit the announcement to the backend (for now, we will log it to console)
    console.log("Announcement submitted:", announcementText);

    // Clear the input field after submitting
    setAnnouncementText("");
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="p-6 ml-64">
        <h1 className="text-3xl font-bold text-gray-800">Post Announcements</h1>
        <p className="text-gray-600 mt-2">Make important announcements for your students here.</p>

        <div className="mt-4 bg-white p-6 shadow-lg rounded-xl">
          <div className="mb-4">
            <label className="text-lg font-medium text-gray-700">Announcement</label>
            <textarea
              className="w-full h-40 p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Type your announcement here..."
              value={announcementText}
              onChange={(e) => setAnnouncementText(e.target.value)}
            ></textarea>
          </div>

          <button
            onClick={handleAnnouncementSubmit}
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Post Announcement
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacultyAnnouncements;
