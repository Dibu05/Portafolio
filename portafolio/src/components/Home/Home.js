import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";

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
            Tengo 23 años soy de Argentina, apasionado a las nuevas tecnologías y buenas
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
