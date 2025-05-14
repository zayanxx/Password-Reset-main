// src/components/Header.jsx
import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Header.css';

const Header = () => {
  const navigate = useNavigate();

  const scrollToContent = () => {
    const section = document.getElementById('home-content');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className="text-white d-flex align-items-center animate__animated animate__fadeIn"
      style={{
        background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
        fontFamily: "'Poppins', sans-serif",
        minHeight: '95vh',
        overflow: 'hidden',
      }}
    >
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeInDown">
              <i className="fas fa-home me-2 text-success"></i>
              Welcome Home
            </h1>

            <p className="lead animate__animated animate__fadeInUp animate__delay-1s">
              <i className="fas fa-info-circle me-2 text-primary"></i>
              Explore your dashboard and manage your account with ease.
            </p>

            <p className="animate__animated animate__fadeInUp animate__delay-2s">
              <i className="fas fa-cogs me-2 text-warning"></i>
              Customize settings, view secure data, and more.
            </p>

            <div
              className="d-flex justify-content-center gap-3 mt-4 flex-wrap animate__animated animate__fadeInUp animate__delay-3s"
            >
              <Button
                variant="outline-light"
                size="lg"
                onClick={() => navigate('/login')}
                className="px-4 py-2 rounded-pill fw-bold shadow-sm hover-scale"
                style={{ minWidth: '160px', fontSize: '1.1rem' }}
              >
                <i className="fas fa-sign-in-alt me-2"></i>Login
              </Button>

              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/register')}
                className="px-4 py-2 rounded-pill fw-bold shadow-sm hover-scale"
                style={{ minWidth: '160px', fontSize: '1.1rem' }}
              >
                <i className="fas fa-user-plus me-2"></i>Register
              </Button>
            </div>

            <div
              className="mt-5 animate__animated animate__bounce animate__infinite animate__slow"
              onClick={scrollToContent}
              style={{ cursor: 'pointer' }}
              aria-label="Scroll to content"
            >
              <i className="fas fa-chevron-down fa-2x text-light hover-glow"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
