import React, { useState } from "react";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminLogin.css"; 
import backgroundImage from "../../images/secure.jpg"; 

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error("Invalid login credentials");
      }

      const data = await response.json();
      localStorage.setItem("adminToken", data.token);

      login();
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="login-card">
        <h2 className="text-center mb-4">Login In</h2>
        <p className="text-center mb-4">
          Welcome to the optigaze Admin page. Please login
          to experience.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              type="text"
              id="email"
              className="form-control"
              placeholder="Enter your e-mail"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              required
              aria-label="E-mail input field"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              required
              aria-label="Password input field"
            />
          </div>
          
          {error && (
            <div className="alert alert-danger" aria-live="assertive">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary w-100 mt-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "LOGIN"}
          </button>
        </form>
        <p className="text-center mt-3">
          Go to the user page?<a href="/">Click Here</a>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
