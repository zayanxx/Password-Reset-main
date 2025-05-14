import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    setIsLoading(true);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/login`, { email, password });
      setMessage("Login successful! Redirecting...");
      toast.success("Login successful!");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Login error: ", error);
      setMessage("Login failed. Please try again.");
      toast.error("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        background: "linear-gradient(135deg, #3f87a6, #ebf8e1)",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div
        className="card p-4 shadow-lg animate__animated animate__fadeInDown"
        style={{
          maxWidth: "400px",
          width: "100%",
          borderRadius: "1rem",
          background: "#ffffffd9",
        }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary animate__animated animate__fadeIn">
            Welcome Back
          </h2>
          <p className="text-muted">Please login to continue</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 input-group">
            <span className="input-group-text bg-light">
              <i className="fas fa-envelope text-primary"></i>
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3 input-group">
            <span className="input-group-text bg-light">
              <i className="fas fa-lock text-primary"></i>
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 fw-bold shadow-sm animate__animated animate__pulse animate__infinite"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <i className="fas fa-spinner fa-spin me-2"></i> Logging in...
              </>
            ) : (
              <>
                <i className="fas fa-sign-in-alt me-2"></i> Login
              </>
            )}
          </button>
        </form>

        {message && (
          <div className="text-center mt-3">
            <p className="text-danger">{message}</p>
          </div>
        )}

        <div className="text-center mt-3">
          <p className="mb-1 text-muted">
            <i className="fas fa-user-plus me-1 text-primary"></i>
            Don’t have an account?{" "}
            <span
              className="text-primary fw-bold"
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={() => navigate("/register")}
            >
              Register here
            </span>
          </p>
          <p className="mb-0 text-muted">
            <i className="fas fa-key me-1 text-primary"></i>
            <span
              className="text-primary fw-bold"
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
