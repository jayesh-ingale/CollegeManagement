import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const StudentAnnouncements = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [announcements, setAnnouncements] = useState([]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Fetch announcements from the backend (replace with actual API)
    const fetchAnnouncements = async () => {
      try {
        // Assuming the backend API will return an array of announcements
        const response = await fetch("/api/announcements");
        const data = await response.json();
        setAnnouncements(data);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="p-6 ml-64">
        <h1 className="text-3xl font-bold text-gray-800">Announcements</h1>
        <p className="text-gray-600 mt-2">All your recent announcements will be listed here.</p>

        <div className="mt-4 bg-white p-6 shadow-lg rounded-xl">
          {announcements.length > 0 ? (
            <div>
              {announcements.map((announcement, index) => (
                <div
                  key={index}
                  className="bg-yellow-100 p-4 mb-4 rounded-lg shadow-md hover:bg-yellow-200 transition duration-300"
                >
                  <p className="text-lg font-semibold text-gray-800">{announcement.title}</p>
                  <p className="text-sm text-gray-600 mt-2">{announcement.body}</p>
                  <span className="text-xs text-gray-400 mt-2">{new Date(announcement.date).toLocaleString()}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No announcements yet!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentAnnouncements;
