import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const Assignments = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [assignments, setAssignments] = useState([]);
  const [newAssignment, setNewAssignment] = useState({ subject: "", title: "", deadline: "", status: "pending" });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const addAssignment = () => {
    if (newAssignment.subject && newAssignment.title && newAssignment.deadline) {
      setAssignments([...assignments, newAssignment]);
      setNewAssignment({ subject: "", title: "", deadline: "", status: "pending" });
    }
  };

  const markAsCompleted = (index) => {
    const updatedAssignments = assignments.map((assignment, i) =>
      i === index ? { ...assignment, status: "completed" } : assignment
    );
    setAssignments(updatedAssignments);
  };

  return (
    <div className="relative min-h-screen bg-[#f5f7fa]">  {/* Light Gray Background */}
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-[#1e3a5f]">Assignments</h1>  {/* Dark Blue Text */}
        <p className="text-gray-600 mt-2">Manage your assignments here.</p>

        {/* Add Assignment Form */}
        <div className="bg-white p-4 shadow-md rounded-lg mt-4 border-l-4 border-[#ff7f50]"> {/* Orange Border */}
          <h2 className="text-lg font-semibold text-gray-700">Add Assignment</h2>
          <div className="mt-2 grid grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Subject"
              className="p-2 border rounded"
              value={newAssignment.subject}
              onChange={(e) => setNewAssignment({ ...newAssignment, subject: e.target.value })}
            />
            <input
              type="text"
              placeholder="Title"
              className="p-2 border rounded"
              value={newAssignment.title}
              onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
            />
            <input
              type="date"
              className="p-2 border rounded"
              value={newAssignment.deadline}
              onChange={(e) => setNewAssignment({ ...newAssignment, deadline: e.target.value })}
            />
            <button
              className="col-span-3 bg-[#1e3a5f] text-white px-4 py-2 rounded hover:bg-[#14263c]" // Dark Blue
              onClick={addAssignment}
            >
              Add Assignment
            </button>
          </div>
        </div>

        {/* Assignment List */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-700">Pending Assignments</h2>
          <ul className="mt-2">
            {assignments.filter(a => a.status === "pending").length === 0 && <p>No pending assignments.</p>}
            {assignments.filter(a => a.status === "pending").map((assignment, index) => (
              <li 
                key={index} 
                className="p-3 bg-[#ffedd5] border-l-4 border-[#ff7f50] mt-2 rounded flex justify-between items-center"
              > {/* Light Orange Background */}
                <span>
                  <strong>{assignment.subject}:</strong> {assignment.title} (Due: {assignment.deadline})
                </span>
                <button
                  className="bg-[#4CAF50] text-white px-3 py-1 rounded hover:bg-[#388E3C]"
                  onClick={() => markAsCompleted(index)}
                >
                  Mark as Completed
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-700">Completed Assignments</h2>
          <ul className="mt-2">
            {assignments.filter(a => a.status === "completed").length === 0 && <p>No completed assignments.</p>}
            {assignments.filter(a => a.status === "completed").map((assignment, index) => (
              <li 
                key={index} 
                className="p-3 bg-[#d4edda] border-l-4 border-[#28a745] mt-2 rounded"
              > {/* Light Green Background */}
                <strong>{assignment.subject}:</strong> {assignment.title} (Completed)
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
