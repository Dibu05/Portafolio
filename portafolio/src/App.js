import React from 'react'
import Header from './components/Header/Header'
import "./App.css"
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Portafolio from './components/Portafolio/Portafolio'

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Skills/>
      <Portafolio/>
    </div>
  )
}

export default App