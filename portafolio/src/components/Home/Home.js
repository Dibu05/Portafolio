import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import cv from './CvAgustin.pdf';


const Home = () => {

  return (
    <div>
      <section className="hero" id="home">
        <div className="container top">
          <div className="leftt">
            <h3>Bienvenido/a!</h3>
            <h1>
              Hola, soy <span>Agustin Almada</span>
            </h1>
          </div>
          <h2>
            desarrollador
            <span>
              <Typewriter
                options={{
                  strings: ["> Web", "> Mobile", "> Front end"],
                  loop: true,
                  delay: 40,
                  autoStart: true,
                }}
              />
            </span>
          </h2>

          <p>
            Tengo 23 años soy de Argentina, gradudado en SoyHenry como FullStack Developer, apasionado al deporte y a las nuevas tecnologías
            y buenas practicas de desarrollo con un aprendizaje continuo para
            mejorar mis habilidades en el campo.
          </p>

          <div className="hero_btn d_flex">
            <div className="col_1">
              <h4>Mis Redes</h4>
              <div className="button">
                <a href="https://www.facebook.com/agusstin.almada/" target={"_blank"} rel="noopener">
                <button className="btn_shadow">
                  <i className="fab fa-facebook-f"></i>
                </button>
                </a>
                <a href="https://www.instagram.com/agustinalmadaa/" target={"_blank"} rel="noopener">
                <button className="btn_shadow">
                  <i className="fab fa-instagram"></i>
                </button>
                </a>
                <a href="https://www.linkedin.com/in/agustin-almada-5216b2197/" target={"_blank"} rel="noopener">
                <button className="btn_shadow">
                  <i className="fab fa-linkedin-in"></i>
                </button>
                </a>
                <a href="https://github.com/Dibu05" target={"_blank"} rel="noopener">
                <button className="btn_shadow">
                  <i className="fab fa-github"></i>
                </button>
                </a>
              </div>
            </div>
          </div>
          <div className="btn_cv">
            <a href={cv} download='CurriculumAlmadaAgustin'><button className="btn_shadow">
              <h4>Descargar CV!</h4>
            </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
