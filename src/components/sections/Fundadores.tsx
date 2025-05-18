import React from 'react';
import '../../styles/Fundadores.css';

const Fundadores: React.FC = () => {
  return (
    <section className="fundadores-section" id="fundadores">
      <div className="fundadores-overlay"></div>
      <div className="fundadores-content">
        <div className="section-header">
          <h2 className="section-subtitle">Nossa Equipe</h2>
          <h1 className="fundadores-title">
            Conheça os Fundadores
          </h1>
        </div>

        <div className="fundadores-grid">
          <div className="fundador-card">
            <div className="fundador-image-container">
              <img 
                src="/images/fundador1.jpeg" 
                alt="Caio Acosta" 
                className="fundador-image"
              />
            </div>
            <h3>Caio Acosta</h3>
            <p className="fundador-cargo">CEO & Co-Founder</p>
            <p className="fundador-bio">
              Com mais de 5 anos de experiência em desenvolvimento de software, 
              Caio lidera a J&C Technologies com uma visão clara de inovação e 
              excelência técnica. Especialista em arquitetura de software e 
              desenvolvimento web, ele combina conhecimento técnico profundo 
              com habilidades de gestão para entregar soluções de alta qualidade.
            </p>
            <div className="fundador-skills">
              <span>React</span>
              <span>Node.js</span>
              <span>TypeScript</span>
              <span>AWS</span>
            </div>
          </div>

          <div className="fundador-card">
            <div className="fundador-image-container">
              <img 
                src="/images/fundador2.jpeg" 
                alt="João Gabriel" 
                className="fundador-image"
              />
            </div>
            <h3>João Gabriel</h3>
            <p className="fundador-cargo">CTO & Co-Founder</p>
            <p className="fundador-bio">
              João traz mais de 7 anos de experiência em desenvolvimento de 
              software e arquitetura de sistemas. Sua expertise em tecnologias 
              emergentes e metodologias ágeis tem sido fundamental para o 
              sucesso dos projetos da J&C Technologies, garantindo soluções 
              escaláveis e de alta performance.
            </p>
            <div className="fundador-skills">
              <span>Python</span>
              <span>DevOps</span>
              <span>Cloud</span>
              <span>Machine Learning</span>
            </div>
          </div>
        </div>

        <div className="fundadores-cta">
          <p className="cta-text">Quer fazer parte do nosso time?</p>
          <button className="cta-button">Ver Vagas</button>
        </div>
      </div>
    </section>
  );
};

export default Fundadores; 