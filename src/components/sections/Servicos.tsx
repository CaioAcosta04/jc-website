import React from 'react';
import '../../styles/Servicos.css';

const Servicos: React.FC = () => {
  return (
    <section className="servicos-section" id="servicos">
      <div className="servicos-overlay"></div>
      <div className="servicos-content">
        <div className="section-header">
          <h2 className="section-subtitle">Nossos Serviços</h2>
          <h1 className="servicos-title">
            Soluções Tecnológicas Completas
          </h1>
          <p className="section-description">
            Transformamos ideias em soluções digitais inovadoras, impulsionando o crescimento do seu negócio
          </p>
        </div>

        <div className="servicos-grid">
          <div className="servico-card">
            <div className="servico-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3>Desenvolvimento Web</h3>
            <p>
              Criamos soluções web modernas e escaláveis, utilizando as mais recentes tecnologias 
              para garantir performance, segurança e uma experiência excepcional para seus usuários.
            </p>
            <ul className="servico-features">
              <li><i className="fas fa-check"></i> Sites Institucionais Responsivos</li>
              <li><i className="fas fa-check"></i> E-commerce Personalizado</li>
              <li><i className="fas fa-check"></i> Aplicações Web Complexas</li>
              <li><i className="fas fa-check"></i> Landing Pages Otimizadas</li>
            </ul>
            <button className="servico-button">
              Saiba Mais <i className="fas fa-arrow-right"></i>
            </button>
          </div>

          <div className="servico-card">
            <div className="servico-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3>Desenvolvimento Mobile</h3>
            <p>
              Desenvolvemos aplicativos nativos e híbridos que proporcionam uma experiência 
              fluida e intuitiva, mantendo a performance e segurança como prioridades.
            </p>
            <ul className="servico-features">
              <li><i className="fas fa-check"></i> Apps Nativos iOS e Android</li>
              <li><i className="fas fa-check"></i> Aplicativos Híbridos</li>
              <li><i className="fas fa-check"></i> Progressive Web Apps</li>
              <li><i className="fas fa-check"></i> Manutenção e Suporte</li>
            </ul>
            <button className="servico-button">
              Saiba Mais <i className="fas fa-arrow-right"></i>
            </button>
          </div>

          <div className="servico-card">
            <div className="servico-icon">
              <i className="fas fa-robot"></i>
            </div>
            <h3>Automação</h3>
            <p>
              Implementamos soluções de automação inteligentes que otimizam processos, 
              reduzem custos e aumentam a produtividade da sua empresa.
            </p>
            <ul className="servico-features">
              <li><i className="fas fa-check"></i> Robotic Process Automation</li>
              <li><i className="fas fa-check"></i> Workflows Automatizados</li>
              <li><i className="fas fa-check"></i> Integração de Sistemas</li>
              <li><i className="fas fa-check"></i> Automação de Testes</li>
            </ul>
            <button className="servico-button">
              Saiba Mais <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className="servicos-cta">
          <p className="cta-text">Precisa de uma solução personalizada para seu negócio?</p>
          <button className="cta-button">Solicite um Orçamento</button>
        </div>
      </div>
    </section>
  );
};

export default Servicos; 