import React from "react";
import ReactDOM from "react-dom/client";  // ✅ Use ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Attendance from "./Pages/Attendance";
import Assignments from "./Pages/Assignment";  // ✅ Correct Import
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import "./index.css";  // or "./App.css" if that's where your styles are
import Timetable from "./Pages/Timetable";
import Exam from "./Pages/Exam";
import Fees from "./Pages/Fees";
import Library from "./Pages/Library";

const App = () => {
  return (
    <Router>
     
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/assignments" element={<Assignments />} />  
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/exams" element={<Exam />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/library" element={<Library />} />
        
      </Routes>
    </Router>
  );
};

// ✅ Use ReactDOM.createRoot() for React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
