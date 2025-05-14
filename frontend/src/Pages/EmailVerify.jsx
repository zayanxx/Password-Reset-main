import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  if (!email) {
    toast.error("Email not found. Please start over.");
    navigate("/forgot-password");
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otp || otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/verify-email`, {
        email,
        otp,
      });

      if (response.data.success) {
        toast.success("OTP verified. You may now reset your password.");
        navigate("/reset", { state: { email } });
      } else {
        toast.error(response.data.message || "Invalid OTP.");
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        background: "linear-gradient(135deg, #43cea2, #185a9d)",
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
          <h2 className="fw-bold text-success animate__animated animate__fadeIn">
            Verify OTP
          </h2>
          <p className="text-muted">
            Enter the 6-digit OTP sent to <strong>{email}</strong>
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 input-group">
            <span className="input-group-text bg-light">
              <i className="fas fa-key text-success"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter OTP"
              maxLength="6"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              autoFocus
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-100 fw-bold shadow-sm animate__animated animate__pulse animate__infinite"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <i className="fas fa-spinner fa-spin me-2"></i> Verifying...
              </>
            ) : (
              <>
                <i className="fas fa-check-circle me-2"></i> Verify OTP
              </>
            )}
          </button>
        </form>

        <div className="text-center mt-4">
          <span
            className="text-success fw-bold"
            style={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={() => navigate("/forgot-password")}
          >
            <i className="fas fa-arrow-left me-1"></i> Back to Forgot Password
          </span>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
