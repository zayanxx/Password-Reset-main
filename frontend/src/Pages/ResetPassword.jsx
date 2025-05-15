import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const API_BASE_URL =
    import.meta.env.VITE_API_URL || "https://password-reset-main.onrender.com";

  useEffect(() => {
    if (!email) {
      navigate("/forgot-password");
    }
  }, [email, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otp || !newPassword || !confirmPassword) {
      toast.error("All fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setIsLoading(true);
    try {
      const payload = { email, otp, newPassword };
      const { data } = await axios.post(`${API_BASE_URL}/reset-password`, payload);

      if (data.success) {
        toast.success("Password reset successfully. Please log in.");
        navigate("/login");
      } else {
        toast.error(data.message || "Failed to reset password.");
      }
    } catch (error) {
      console.error("Reset password error:", error);
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (!email) return <Navigate to="/forgot-password" replace />;

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
        role="form"
        aria-labelledby="reset-password-title"
      >
        <div className="text-center mb-4">
          <h2
            className="fw-bold text-primary animate__animated animate__fadeIn"
            id="reset-password-title"
          >
            Reset Password
          </h2>
          <p className="text-muted">
            We sent an OTP to <strong>{email}</strong>. Enter it below along with your new password.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 input-group">
            <span className="input-group-text bg-light">
              <i className="fas fa-key text-primary" aria-hidden="true"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              aria-label="Enter OTP code"
              disabled={isLoading}
            />
          </div>

          <div className="mb-3 input-group">
            <span className="input-group-text bg-light">
              <i className="fas fa-lock text-primary" aria-hidden="true"></i>
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              aria-label="New password"
              disabled={isLoading}
            />
          </div>

          <div className="mb-4 input-group">
            <span className="input-group-text bg-light">
              <i className="fas fa-lock text-primary" aria-hidden="true"></i>
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              aria-label="Confirm new password"
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 fw-bold shadow-sm animate__animated animate__pulse animate__infinite"
            disabled={isLoading}
            aria-label="Reset password button"
          >
            {isLoading ? (
              <>
                <i className="fas fa-spinner fa-spin me-2" aria-hidden="true"></i>
                Resetting...
              </>
            ) : (
              <>
                <i className="fas fa-check me-2" aria-hidden="true"></i>
                Reset Password
              </>
            )}
          </button>
        </form>

        <div className="text-center mt-4">
          <button
            className="btn btn-link text-primary fw-bold p-0"
            onClick={() => navigate("/login")}
            style={{ textDecoration: "underline" }}
            aria-label="Back to login"
          >
            <i className="fas fa-arrow-left me-1" aria-hidden="true"></i>
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
