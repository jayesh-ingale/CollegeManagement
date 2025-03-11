import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const Library = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sample Study Materials & Books Data
  const materials = [
    { id: 1, title: "Mathematics Basics", subject: "Mathematics", type: "PDF", link: "https://www.freebookcentre.net/Mathematics/Differential-Geometry-Books.html", author: "John Doe", edition: "3rd", available: true, downloads: 150, youtube: "https://youtu.be/yIoIzGrM_xA?si=RcxLYQAYAwbh3Ogj" },
    { id: 2, title: "Physics Concepts", subject: "Physics", type: "DOC", link: "#", author: "Jane Smith", edition: "2nd", available: false, downloads: 95, youtube: "https://www.youtube.com/watch?v=def456" },
    { id: 3, title: "Chemistry Handbook", subject: "Chemistry", type: "PPT", link: "#", author: "Alan Turing", edition: "4th", available: true, downloads: 180, youtube: "https://www.youtube.com/watch?v=ghi789" },
    { id: 4, title: "English Literature", subject: "English", type: "PDF", link: "#", author: "William Blake", edition: "1st", available: true, downloads: 110, youtube: "https://www.youtube.com/watch?v=jkl012" },
  ];

  // Filtering and Searching
  const filteredMaterials = materials
    .filter((material) =>
      material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.subject.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((material) => (filter === "all" ? true : material.type === filter));

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="p-6 ml-64">
        <h1 className="text-3xl font-bold text-gray-800">📚 Library</h1>
        <p className="text-gray-600 mt-2">Browse and download study materials and textbooks.</p>

        {/* 🔍 Search & Filter */}
        <div className="mt-4 flex space-x-4">
          <input
            type="text"
            placeholder="Search by title or subject..."
            className="border p-2 w-1/3 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="border p-2 rounded"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Formats</option>
            <option value="PDF">PDF</option>
            <option value="DOC">DOC</option>
            <option value="PPT">PPT</option>
          </select>
        </div>

        {/* 📚 Study Materials Table */}
        <div className="mt-6 bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">📘 Study Materials</h2>
          <table className="w-full border-collapse mt-3">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 border">Title</th>
                <th className="p-3 border">Subject</th>
                <th className="p-3 border">Format</th>
                <th className="p-3 border">Author</th>
                <th className="p-3 border">Edition</th>
                <th className="p-3 border">Availability</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMaterials.map((material) => (
                <tr key={material.id} className="text-center bg-gray-100">
                  <td className="p-3 border">{material.title}</td>
                  <td className="p-3 border">{material.subject}</td>
                  <td className="p-3 border">{material.type}</td>
                  <td className="p-3 border">{material.author}</td>
                  <td className="p-3 border">{material.edition}</td>
                  <td className={`p-3 border font-semibold ${material.available ? "text-green-500" : "text-red-500"}`}>
                    {material.available ? "Available" : "Issued"}
                  </td>
                  <td className="p-3 border">
                    <a href={material.link} className="text-blue-500 underline">Download</a> | 
                    <a href={material.youtube} className="text-red-500 underline ml-2">YouTube</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ⭐ Popular & Recently Added Books */}
        <div className="mt-6 flex space-x-6">
          <div className="bg-white p-4 shadow-md rounded-lg w-1/2">
            <h2 className="text-xl font-semibold text-gray-700">🔥 Popular Books</h2>
            <ul className="mt-3">
              {materials.sort((a, b) => b.downloads - a.downloads).slice(0, 3).map((book) => (
                <li key={book.id} className="p-2 bg-blue-100 mb-2 rounded">
                  <span className="text-blue-700 font-semibold">{book.title} - {book.downloads} downloads</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg w-1/2">
            <h2 className="text-xl font-semibold text-gray-700">🆕 Recently Added</h2>
            <ul className="mt-3">
              {materials.slice(-3).map((book) => (
                <li key={book.id} className="p-2 bg-green-100 mb-2 rounded">
                  <span className="text-green-700 font-semibold">{book.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Library;
