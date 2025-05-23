import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/logo.png" alt="J&C TECH" className="logo-image" />
        </div>
        
        <div className="footer-info">
          <p className="copyright">
            © {currentYear} J&C TECH. Todos os direitos reservados.
          </p>
          <p className="address">
            Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100
          </p>
        </div>

        <div className="footer-social">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 