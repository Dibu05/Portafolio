import React from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import img from '../Pics/hola.jpeg';

const Home = () => {
  return (
    <div>
      <section className="hero" id="home">
        <div className="container top">
          <div className="left">
            <h3>Bienvenido!</h3>
            <h1>
              Hola, soy <span>Agustin Almada</span>
            </h1>
          </div>
          <h2>
            desarrollador 
            <span>
              <Typewriter
                words={[" Web", " Mobile", " Front end"]} loop cursor cursorStyle='|' typeSpeed={80} deleteSpeed={80} delaySpeed={1000}/>
            </span>
          </h2>

          <p>
            Tengo 23 años soy apasionado a las nuevas tecnologías y buenas
            practicas de desarrollo con un aprendizaje continuo para mejorar mis
            habilidades en el campo.
          </p>

          <div className="hero_btn d_flex">
            <div className="col_1">
              <h4>Mis Redes</h4>
              <div className="button">
                <button className="btn_shadow">
                  <i class="fab fa-facebook-f"></i>
                </button>
                <button className="btn_shadow">
                  <i class="fab fa-instagram"></i>
                </button>
                <button className="btn_shadow">
                  <i class="fab fa-linkedin-in"></i>
                </button>   
                <button className="btn_shadow">
                    <i class="fab fa-github"></i>
                </button>
                <button className="btn_shadow">
                    <i class="fab fa-gmail"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="left">
            <div className="left_img">
                <img src={img}/>
                </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
