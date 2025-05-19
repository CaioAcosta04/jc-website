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
              Fundada em 2025, a J&C Technologies nasceu da união de dois profissionais apaixonados por tecnologia e inovação. 
              Especialistas em transformar desafios em soluções tecnológicas eficientes, construímos nossa reputação 
              baseada em confiança e excelência, garantindo resultados excepcionais para nossos clientes.
            </p>
            <p className="quem-somos-paragraph">
              Nossa trajetória iniciou-se com o desenvolvimento de soluções sob medida para pequenas empresas locais. 
              Ao longo de nossa história, estabelecemos uma reputação sólida fundamentada em três pilares essenciais: 
              inovação constante, excelência em qualidade e parcerias duradouras.
            </p>
          </div>
        </div>

        <div className="quem-somos-values">
          <div className="value-item">
            <div className="value-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h3>Confiança</h3>
            <p>Construímos relacionamentos duradouros baseados em transparência e compromisso com nossos clientes.</p>
          </div>
          <div className="value-item">
            <div className="value-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Segurança</h3>
            <p>Garantimos a proteção e integridade dos dados e sistemas de nossos clientes em todas as nossas soluções.</p>
          </div>
          <div className="value-item">
            <div className="value-icon">
              <i className="fas fa-award"></i>
            </div>
            <h3>Excelência</h3>
            <p>Buscamos a perfeição em cada projeto, entregando soluções de alta qualidade e inovação.</p>
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