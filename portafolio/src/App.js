import React from 'react';
import Header from './components/Header/Header';
import "./App.css";
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portafolio/Portfolio.js';
import Contact from './components/Contact/Contact';
import Resume from './components/Resumen/Resume';
const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Skills/>
      <Portfolio/>
      <Resume/>
      <Contact/>  
    </div>
  )
}

export default App