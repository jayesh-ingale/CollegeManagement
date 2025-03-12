import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid credentials");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("name", data.name);

      if (data.role === "student") {
        navigate("/dashboard");
      } else if (data.role === "faculty") {
        navigate("/faculty-dashboard");
      } else {
        setError("Invalid role. Contact admin.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError("Server error. Please try again.");
    }
  };

  return (
    <div style={styles.loginContainer}>
      {/* 🏫 Welcome Heading */}
      <h1 style={styles.welcomeHeading}>Welcome to College Management System</h1>

      <div style={styles.loginBox}>
        <h2 style={styles.heading}>Sign In</h2>
        {error && <p style={styles.errorMessage}>{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

// ✅ **Dark Blue to Green Gradient UI with Dark Blue Login Button**
const styles = {
  loginContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column", // 🏫 Stacks Welcome Heading on top
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #1E3A8A, #22C55E)", // **Dark Blue to Green Gradient 🎨**
  },
  welcomeHeading: {
    color: "white",
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
  },
  loginBox: {
    background: "rgba(255, 255, 255, 0.15)", // **Glassmorphism Effect**
    backdropFilter: "blur(15px)",
    padding: "40px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    width: "350px",
  },
  heading: {
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    background: "#1E40AF", // **Dark Blue Button**
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
  buttonHover: {
    background: "#1E3A8A", // **Darker Blue on Hover**
  },
  errorMessage: {
    color: "#FF4D4D",
    fontWeight: "bold",
  },
};

export default Login;
