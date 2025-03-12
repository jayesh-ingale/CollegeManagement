import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Users from "./pages/users";
import Attendance from "./pages/attendance";
import Assignments from "./pages/assignments";
import Announcements from "./pages/announcements";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/assignments" element={<Assignments />} />
      <Route path="/announcements" element={<Announcements />} />
    </Routes>
  </Router>
);
