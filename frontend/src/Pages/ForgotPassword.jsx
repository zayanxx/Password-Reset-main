import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/send-reset-otp`, { email });

      if (response.data.success) {
        toast.success("OTP sent to your email.");
        navigate("/verify", { state: { email } });
      } else {
        toast.error(response.data.message || "Failed to send OTP.");
      }
    } catch (error) {
      console.error("Forgot password error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div
        className="card p-4 shadow-lg animate__animated animate__fadeInDown"
        style={{
          maxWidth: "400px",
          width: "100%",
          borderRadius: "1rem",
          background: "#ffffffdd",
        }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary animate__animated animate__fadeIn">
            Forgot Password
          </h2>
          <p className="text-muted">Enter your email to receive an OTP</p>
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

          <button
            type="submit"
            className="btn btn-primary w-100 fw-bold shadow-sm animate__animated animate__pulse animate__infinite"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <i className="fas fa-spinner fa-spin me-2"></i> Sending...
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane me-2"></i> Send OTP
              </>
            )}
          </button>
        </form>

        <div className="text-center mt-4">
          <span
            className="text-primary fw-bold"
            style={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={() => navigate("/login")}
          >
            <i className="fas fa-arrow-left me-1"></i> Back to Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;