import React from 'react';
import '../../styles/QuemSomos.css';

const QuemSomos: React.FC = () => {
  return (
    <section className="quem-somos-section" id="quem-somos">
      <div className="quem-somos-overlay"></div>
      <div className="quem-somos-content">
        <div className="section-header">
          <h2 className="section-subtitle">Nossa História</h2>
          <h1 className="quem-somos-title">
            Transformando Ideias em Realidade Digital
          </h1>
        </div>

        <div className="quem-somos-grid">
          <div className="quem-somos-text">
            <p className="quem-somos-paragraph">
              Fundada em 2020, a J&C Technologies nasceu da visão de dois empreendedores apaixonados por tecnologia e inovação. 
              O que começou como um pequeno projeto de desenvolvimento de software rapidamente se transformou em uma empresa 
              reconhecida por sua excelência e compromisso com resultados.
            </p>
            <p className="quem-somos-paragraph">
              Nossa jornada começou com o desenvolvimento de soluções personalizadas para pequenas empresas locais, 
              e hoje atendemos clientes de diversos setores, desde startups até grandes corporações. Ao longo dos anos, 
              construímos uma reputação sólida baseada em três pilares fundamentais: inovação, qualidade e parceria.
            </p>
          </div>

          <div className="quem-somos-stats">
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Projetos Entregues</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Clientes Satisfeitos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Anos de Experiência</span>
            </div>
          </div>
        </div>

        <div className="quem-somos-values">
          <div className="value-item">
            <div className="value-icon">🚀</div>
            <h3>Inovação</h3>
            <p>Buscamos constantemente novas tecnologias e metodologias para entregar soluções de ponta que transformam negócios.</p>
          </div>
          <div className="value-item">
            <div className="value-icon">⭐</div>
            <h3>Qualidade</h3>
            <p>Comprometimento com a excelência em cada projeto, garantindo soluções robustas e escaláveis.</p>
          </div>
          <div className="value-item">
            <div className="value-icon">🤝</div>
            <h3>Parceria</h3>
            <p>Construímos relacionamentos duradouros baseados em confiança, transparência e resultados mensuráveis.</p>
          </div>
        </div>

        <div className="quem-somos-cta">
          <p className="cta-text">Pronto para transformar sua empresa com tecnologia?</p>
          <button className="cta-button">Fale Conosco</button>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos; 