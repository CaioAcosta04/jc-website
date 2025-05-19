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
            Sua visão estratégica e capacidade de inovação têm sido essenciais para o crescimento da empresa. 
            Formando em Engenharia de Software, Caio combina conhecimento técnico com habilidades de gestão, 
            sempre buscando as melhores soluções para nossos clientes e mantendo a J&C Technologies na 
            vanguarda do mercado de tecnologia.
            </p>
            <div className="fundador-skills">
              <span>Confiança</span>
              <span>Liderança</span>
              <span>Gestão</span>
              <span>Comunicação</span>
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
            Com vasta experiência em desenvolvimento de software e arquitetura de sistemas, 
            João Gabriel lidera nossa equipe técnica com maestria. Sua expertise em 
            tecnologias emergentes e metodologias ágeis tem sido fundamental para 
            entregarmos soluções inovadoras e escaláveis. Formando em Engenharia de Software, ele combina profundo conhecimento técnico com visão estratégica, 
            garantindo que nossa empresa mantenha os mais altos padrões de qualidade e 
            inovação em todos os projetos.
            </p>
            <div className="fundador-skills">
              <span>Mentalidade</span>
              <span>Determinação</span>
              <span>Excelência</span>
              <span>Raciocínio</span>
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