// src/components/Header.jsx
import React from 'react';
import '../styles/Header.css'; // Custom styles here
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'animate.css'; // Import animate.css for animations
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome for icons

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div>
      <header className="small-header d-flex flex-column align-items-center justify-content-center p-3 bg-dark text-white animate__animated animate__fadeInDown">
        <h1 className="h5 m-0 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <i className="fas fa-lock me-2"></i>Secure Auth
        </h1>
        <p className="welcome-text animate__animated animate__fadeInUp" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '1rem' }}>
          <i className="fas fa-smile me-2"></i>Welcome to the Secure Authentication System!
        </p>
        <p className="login-prompt animate__animated animate__fadeInUp" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem' }}>
          <i className="fas fa-envelope me-2"></i>Please log in with your email to continue.
        </p>
        <div className="button-group mt-3">
          <Button
            variant="primary"
            className="me-2 animate__animated animate__fadeInLeft"
            onClick={handleLogin}
          >
            <i className="fas fa-sign-in-alt me-2"></i>Login
          </Button>
          <Button
            variant="success"
            className="animate__animated animate__fadeInRight"
            onClick={handleRegister}
          >
            <i className="fas fa-user-plus me-2"></i>Register
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Header;