import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <img src="/images/logo.png" alt="J&C TECH" className="logo-image" />
        </div>
        
        <nav className="nav-menu">
          <button onClick={() => scrollToSection('inicio')} className="nav-button">
            Início
          </button>
          <button onClick={() => scrollToSection('quem-somos')} className="nav-button">
            Quem Somos
          </button>
          <button onClick={() => scrollToSection('servicos')} className="nav-button">
            Serviços
          </button>
          <button onClick={() => scrollToSection('fundadores')} className="nav-button">
            Fundadores
          </button>
          <button onClick={() => scrollToSection('contato')} className="nav-button">
            Contato
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header; 