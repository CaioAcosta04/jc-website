import React from 'react';
import '../../styles/HeroBanner.css';

const HeroBanner: React.FC = () => {
  const handleContactClick = () => {
    window.open('https://wa.me/5519999232639', '_blank');
  };

  return (
    <section className="hero-banner">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          J&C <span style={{ fontWeight: 300 }}>TECHNOLOGIES</span>
        </h1>
        <p className="hero-slogan">
          Transformando problemas em soluções digitais
        </p>
        <button 
          className="contact-button"
          onClick={handleContactClick}
        >
          Entrar em contato
        </button>
      </div>
    </section>
  );
};

export default HeroBanner; 