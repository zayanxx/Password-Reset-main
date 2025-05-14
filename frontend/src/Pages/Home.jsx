import React from 'react';
import Header from '../Components/Header';
import 'animate.css';

const Home = () => {
  const scrollToContent = () => {
    const section = document.getElementById('home-content');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-page" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Header />

      <section
        id="home-content"
        className="info-section py-5 text-center text-white"
        style={{
          background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
          fontFamily: "'Poppins', sans-serif",
          minHeight: '100vh',
          overflow: 'hidden',
          paddingBottom: '80px', // Added more space at the bottom
        }}
      >
        <div className="container">
          <h2 className="mb-4 fw-bold animate__animated animate__fadeInDown">
            <i className="fas fa-lock me-2 text-primary"></i> Why Choose Our Auth System?
          </h2>
          <p
            className="lead text-light animate__animated animate__fadeIn animate__delay-1s"
            style={{ fontSize: '1.2rem', lineHeight: '1.7' }}
          >
            Secure login, registration, and password reset with OTP-based email verification. Built with the powerful MERN stack for scalability and performance.
          </p>

          <div className="row mt-5 justify-content-center">
            {/* Secure Login */}
            <div className="col-md-4 mb-4">
              <div
                className="card shadow-lg border-0 animate__animated animate__zoomIn animate__delay-1s"
                style={{ borderRadius: '15px' }}
              >
                <div className="card-body text-center">
                  <i className="fas fa-user-check fa-3x mb-3 text-primary animate__animated animate__pulse animate__infinite"></i>
                  <h5 className="card-title fw-bold text-uppercase">Secure Login</h5>
                  <p className="card-text">
                    Authenticate with JWT tokens and encrypted passwords, ensuring peace of mind for every user.
                  </p>
                </div>
              </div>
            </div>

            {/* Easy Registration */}
            <div className="col-md-4 mb-4">
              <div
                className="card shadow-lg border-0 animate__animated animate__zoomIn animate__delay-2s"
                style={{ borderRadius: '15px' }}
              >
                <div className="card-body text-center">
                  <i className="fas fa-user-plus fa-3x mb-3 text-success animate__animated animate__pulse animate__infinite"></i>
                  <h5 className="card-title fw-bold text-uppercase">Easy Registration</h5>
                  <p className="card-text">
                    Sign up quickly with OTP email verification, ensuring secure account creation.
                  </p>
                </div>
              </div>
            </div>

            {/* Password Reset */}
            <div className="col-md-4 mb-4">
              <div
                className="card shadow-lg border-0 animate__animated animate__zoomIn animate__delay-3s"
                style={{ borderRadius: '15px' }}
              >
                <div className="card-body text-center">
                  <i className="fas fa-sync-alt fa-4x mb-3 text-warning animate__animated animate__spin animate__infinite"></i>
                  <h5 className="card-title fw-bold text-uppercase">Password Reset</h5>
                  <p className="card-text">
                    Reset passwords securely via OTP email validation, ensuring privacy protection.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Icon to Scroll */}
          <div
            className="col-12 text-center mb-4 animate__animated animate__bounceIn animate__infinite"
            style={{ cursor: 'pointer' }}
            onClick={scrollToContent}
          >
            <i className="fas fa-arrow-down fa-3x text-light"></i> {/* Arrow Icon */}
          </div>

          {/* Get Started Button */}
          <div className="col-md-6 mx-auto text-center mt-5 animate__animated animate__fadeInUp animate__delay-4s">
            <a
              href="/login"
              className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg"
              style={{
                transition: 'transform 0.3s ease, background-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.backgroundColor = '#4e73df';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              Get Started Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
