import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm animated-navbar">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">
                    <i className="bi bi-key me-2"></i>
                    Password Reset
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
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                                to="/"
                            >
                                <i className="bi bi-house-door me-1"></i> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`}
                                to="/login"
                            >
                                <i className="bi bi-box-arrow-in-right me-1"></i> Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.pathname === '/register' ? 'active' : ''}`}
                                to="/register"
                            >
                                <i className="bi bi-person-plus me-1"></i> Register
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.pathname === '/forgot-password' ? 'active' : ''}`}
                                to="/forgot-password"
                            >
                                <i className="bi bi-key-fill me-1"></i> Forgot Password
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.pathname === '/verify' ? 'active' : ''}`}
                                to="/verify"
                            >
                                <i className="bi bi-envelope-check-fill me-1"></i> Email Verify
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${location.pathname === '/reset' ? 'active' : ''}`}
                                to="/reset"
                            >
                                <i className="bi bi-lock-fill me-1"></i> Reset Password
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
