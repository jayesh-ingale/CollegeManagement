import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard";
import Attendance from "./Pages/Attendance";
import Assignments from "./Pages/Assignment";
import Timetable from "./Pages/Timetable";
import Exam from "./Pages/Exam";
import Fees from "./Pages/Fees";
import Library from "./Pages/Library";
import "./index.css";
import Announcements from "./Pages/Announcements";
import Login from "./Login";

// Faculty Features (Inside FacultyDashboard Folder)
import FacultyDashboard from "./Faculty Dashboard/Pages/FacultyDashboard";
import FacultyTimetable from "./Faculty Dashboard/Pages/FacultyTimetable";
import FacultyAttendance from "./Faculty Dashboard/Pages/FacultyAttendance";
import FacultyAnnouncements from "./Faculty Dashboard/Pages/FacultyAnnouncements";
import FacultySidebar from "./Faculty Dashboard/Components/Sidebar";
import FacultyNavbar from "./Faculty Dashboard/Components/Navbar";

const App = () => {
  const [userType, setUserType] = useState("student"); // Default is "student"

  return (
    <Router>
     
      
      <Routes>
        {/* Student Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/exams" element={<Exam />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/library" element={<Library />} />
        <Route path="/announcements" element={<Announcements/>} />
        <Route path="/" element={<Login/>} />

        {/* Faculty Routes */}
        <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
        <Route path="/faculty-timetable" element={<FacultyTimetable />} />
        <Route path="/faculty-attendance" element={<FacultyAttendance />} />
        <Route path="/faculty-announcements" element={<FacultyAnnouncements />} />

        
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
