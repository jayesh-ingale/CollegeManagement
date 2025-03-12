import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

const Login = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Using useNavigate

  const handleLogin = () => {
    // Simple Validation
    if (!name || !id || !password) {
      setError("All fields are required!");
      return;
    }

    // Here, you can call an API to validate the user credentials
    // For now, let's assume the login is successful if fields are filled
    setError("");

    // Conditional check to determine if user is a student or faculty
    if (id.startsWith("S")) {
      // Redirect to Student Dashboard
      navigate("/dashboard");
    } else if (id.startsWith("F")) {
      // Redirect to Faculty Dashboard
      navigate("/faculty-dashboard");
    } else {
      setError("Invalid ID format");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#0F2027] to-[#2C5364]">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-700">Welcome Back!</h2>
        <p className="text-center text-gray-500">Please log in to continue</p>

        {error && <div className="text-red-500 text-center">{error}</div>}

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="id" className="block text-gray-700">Student/Faculty ID</label>
            <input
              type="text"
              id="id"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
              placeholder="Enter your ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="w-full p-3 mt-4 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition duration-300"
          >
            Log In
          </button>

          <div className="flex items-center justify-between mt-4">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <a href="#" className="text-sm text-teal-500 hover:text-teal-600">Forgot Password?</a>
          </div>

        
        </form>
      </div>
    </div>
  );
};

export default Login;
