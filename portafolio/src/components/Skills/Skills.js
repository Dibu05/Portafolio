import React from 'react'
import { Carousel } from 'react-bootstrap'
import react from '../Pics/Icons/atom.png'
import css from '../Pics/Icons/css.png'
import node from '../Pics/Icons/nodejs.png'
import redux from '../Pics/Icons/redux.png'
import js from '../Pics/Icons/js.png'
import github from '../Pics/Icons/github.png'
import html from '../Pics/Icons/html-5.png'
import material from '../Pics/Icons/material.png'
import postgress from '../Pics/Icons/postgre.png'
import sass from '../Pics/Icons/sass.png'
import tp from '../Pics/Icons/typescript.png'
import './Skills.css'

const Skills = () => {
  return (
    <div className='carrusel'>
      <h2>Habilidades!</h2>
<Carousel>
  <Carousel.Item interval={1500}>
    <img
      className="icon"
      src={react}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='txt'>REACT</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="icon"
      src={css}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 className='txt'>CSS</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="icon"
      src={node}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className='txt'>NODE.JS</h3>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="icon"
      src={redux}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='txt'>REDUX</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="icon"
      src={js}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='txt'>JAVASCRIPT</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="icon"
      src={github}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='txt'>GITHUB</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="icon"
      src={html}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='txt'>HTML</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="icon"
      src={material}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='txt'>MATERIAL UI</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="icon"
      src={postgress}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='txt'>POSTGRESQL</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="icon"
      src={sass}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='txt'>SASS</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="icon"
      src={tp}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='txt'>TYPESCRIPT</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default Skills