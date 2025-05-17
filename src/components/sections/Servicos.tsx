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
        </div>

        <div className="servicos-grid">
          <div className="servico-card">
            <div className="servico-icon">💻</div>
            <h3>Desenvolvimento Web</h3>
            <p>
              Criamos sites e aplicações web modernas, responsivas e otimizadas para SEO. 
              Utilizamos as mais recentes tecnologias para garantir performance e segurança.
            </p>
            <ul className="servico-features">
              <li>Sites Institucionais</li>
              <li>E-commerce</li>
              <li>Aplicações Web</li>
              <li>Landing Pages</li>
            </ul>
          </div>

          <div className="servico-card">
            <div className="servico-icon">📱</div>
            <h3>Desenvolvimento Mobile</h3>
            <p>
              Desenvolvemos aplicativos nativos e híbridos para iOS e Android, 
              focando em experiência do usuário e performance.
            </p>
            <ul className="servico-features">
              <li>Apps Nativos</li>
              <li>Apps Híbridos</li>
              <li>PWA</li>
              <li>Manutenção</li>
            </ul>
          </div>

          <div className="servico-card">
            <div className="servico-icon">🔄</div>
            <h3>Automação</h3>
            <p>
              Automatizamos processos de negócio para aumentar a eficiência e 
              reduzir custos operacionais.
            </p>
            <ul className="servico-features">
              <li>RPA</li>
              <li>Workflows</li>
              <li>Integrações</li>
              <li>Automação de Testes</li>
            </ul>
          </div>

          <div className="servico-card">
            <div className="servico-icon">🔒</div>
            <h3>Consultoria em TI</h3>
            <p>
              Oferecemos consultoria especializada em tecnologia, ajudando empresas 
              a implementar soluções digitais de forma estratégica.
            </p>
            <ul className="servico-features">
              <li>Análise de Requisitos</li>
              <li>Arquitetura de Software</li>
              <li>DevOps</li>
              <li>Segurança</li>
            </ul>
          </div>
        </div>

        <div className="servicos-cta">
          <p className="cta-text">Precisa de uma solução personalizada?</p>
          <button className="cta-button">Solicite um Orçamento</button>
        </div>
      </div>
    </section>
  );
};

export default Servicos; 