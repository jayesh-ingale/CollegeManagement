import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Hardcoded admin credentials
    const adminUsername = "admin";
    const adminPassword = "password123";

    if (username === adminUsername && password === adminPassword) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div style={styles.loginContainer}>
      <h1 style={styles.welcomeHeading}>Welcome to College Management System</h1>

      <div style={styles.loginBox}>
        <h2 style={styles.heading}>Admin Login</h2>
        {error && <p style={styles.errorMessage}>{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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

const styles = {
  loginContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #1E3A8A, #22C55E)",
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
    background: "rgba(255, 255, 255, 0.15)",
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
    background: "#1E40AF",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
  buttonHover: {
    background: "#1E3A8A",
  },
  errorMessage: {
    color: "#FF4D4D",
    fontWeight: "bold",
  },
};

export default Login;


