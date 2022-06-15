import React from 'react'
import Header from './components/Header/Header'
import "./App.css"
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Skills/>
    </div>
  )
}

export default App