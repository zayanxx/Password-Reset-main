// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'animate.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark  shadow-sm animate__animated animate__fadeInDown"
      style={{
        background: 'black',
        backdropFilter: 'blur(10px)',
        fontFamily: "'Poppins', sans-serif",
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="fas fa-key me-2 text-warning"></i>SecureAuth
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-center text-lg-start">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${location.pathname === '/' ? 'active text-primary fw-bold' : ''}`}
              >
                <i className="fas fa-home me-1"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className={`nav-link ${location.pathname === '/login' ? 'active text-info fw-bold' : ''}`}
              >
                <i className="fas fa-sign-in-alt me-1"></i> Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/register"
                className={`nav-link ${location.pathname === '/register' ? 'active text-success fw-bold' : ''}`}
              >
                <i className="fas fa-user-plus me-1"></i> Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
