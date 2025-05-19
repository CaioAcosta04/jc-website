import React, { useState } from 'react';
import '../../styles/Contato.css';

const Contato: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado:', formData);
    // Limpar o formulário após o envio
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      mensagem: ''
    });
  };

  return (
    <section className="contato-section" id="contato">
      <div className="contato-overlay"></div>
      <div className="contato-content">
        <div className="section-header">
          <h2 className="section-subtitle">Entre em Contato</h2>
          <h1 className="contato-title">
            Vamos Conversar Sobre Seu Projeto
          </h1>
        </div>

        <div className="contato-grid">
          <div className="contato-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Endereço</h3>
              <p>Av. Paulista, 1000 - Bela Vista</p>
              <p>São Paulo - SP, 01310-100</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Telefone</h3>
              <p>+55 (11) 99999-9999</p>
              <p>+55 (11) 3333-3333</p>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h3>Email</h3>
              <p>contato@jctech.com.br</p>
              <p>comercial@jctech.com.br</p>
            </div>

            <div className="info-card">
              <div className="info-icon">⏰</div>
              <h3>Horário de Atendimento</h3>
              <p>Segunda a Sexta: 9h às 18h</p>
              <p>Sábado: 9h às 13h</p>
            </div>
          </div>

          <div className="contato-form-container">
            <form className="contato-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nome">Nome Completo</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  placeholder="Digite seu nome"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Digite seu email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefone">Telefone</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="Digite seu telefone"
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  placeholder="Digite sua mensagem"
                  rows={5}
                />
              </div>

              <button type="submit" className="submit-button">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        <div className="social-links">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contato; 