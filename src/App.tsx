import React from 'react';
import './App.css';
import HeroBanner from './components/sections/HeroBanner';
import QuemSomos from './components/sections/QuemSomos';
import Servicos from './components/sections/Servicos';
import Fundadores from './components/sections/Fundadores';
import Contato from './components/sections/Contato';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header /> 
      <HeroBanner />
      <QuemSomos />
      <Servicos />
      <Fundadores />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
