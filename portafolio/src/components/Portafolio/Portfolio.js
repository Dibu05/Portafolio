import React from "react"
import "./Portfolio.css"
import Card from "./Card"
import Portafolio_data from "./Portafolio_data"

const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            <h1>Mis Proyectos</h1>
          </div>

          <div className='content'>
            {Portafolio_data.map((value, index) => {
              return <Card key={index} image={value.image} category={value.category} likes={value.likes} title={value.title} description={value.description} tec={value.tec} dire={value.dire}/>
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio