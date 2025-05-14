// src/pages/Home.jsx
import React from 'react';
import Header from '../Components/Header';
// import '../assets/css/Home.css'; // Optional: additional page styling

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <section className="info-section py-5 text-center">
        <div className="container">
          <h2 className="mb-4 fw-bold animate__animated animate__fadeInUp">
            <i className="fas fa-lock me-2"></i> Why Use Our Auth System?
          </h2>
          <p className="lead text-muted animate__animated animate__fadeInUp animate__delay-1s">
            Our system offers secure login, registration, and password reset with email verification using OTP.
            Built on the powerful MERN stack for performance and scalability.
          </p>
          <div className="row mt-5 justify-content-center">
            <div className="col-md-4 mb-4 animate__animated animate__zoomIn">
              <div className="card shadow h-100">
                <div className="card-body">
                  <i className="fas fa-user-check fa-3x mb-3 text-primary"></i>
                  <h5 className="card-title fw-bold">Secure Login</h5>
                  <p className="card-text">Authenticate users using secure JWT tokens and hashed passwords.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 animate__animated animate__zoomIn animate__delay-1s">
              <div className="card shadow h-100">
                <div className="card-body">
                  <i className="fas fa-user-plus fa-3x mb-3 text-success"></i>
                  <h5 className="card-title fw-bold">Easy Registration</h5>
                  <p className="card-text">Quick and simple signup flow with OTP-based email verification.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 animate__animated animate__zoomIn animate__delay-2s">
              <div className="card shadow h-100">
                <div className="card-body">
                  <i className="fas fa-sync-alt fa-3x mb-3 text-warning"></i>
                  <h5 className="card-title fw-bold">Password Reset</h5>
                  <p className="card-text">Reset password securely via email OTP validation and expiration handling.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
