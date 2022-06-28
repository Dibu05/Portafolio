import React from 'react'
import Header from './components/Header/Header'
import "./App.css"
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portafolio/Portfolio.js'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default App