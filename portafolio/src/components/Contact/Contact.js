import React, { useRef } from "react";
import "./Contact.css";
import contact1 from "../Pics/contact1.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_543wctg",
        "template_nil7dm7",
        form.current,
        "pFQVROh4UDrQayiy_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h1 className="titulo_contc">Contactese conmigo! </h1>
          </div>

          <div className="content">
            <div className="left">
              <div className="box box_shodow">
                <div className="img">
                  <img src={contact1} alt="" />
                </div>
                <div className="details">
                  <h1>Agustin Almada</h1>
                  <p>
                    Estoy motivado y disponible para el trabajo. Contáctese
                    conmigo a través del formulario seran respondidos cuanto
                    antes!
                  </p>
                  <br />
                  <p>Celular: +54 3855144791</p>
                  <p>Email: almadaagustin05@gmail.com</p>
                  <br />
                </div>
              </div>
            </div>

            <div className="right box_shodow">
              <form ref={form} onSubmit={sendEmail} >
                <div className="columnas">
                  <div className="input">
                    <span>Nombre.</span>
                    <input
                      placeholder="Agustin..."
                      type="text"
                      name="name"
                      className="input_name"
                      required
                    />
                  </div>
                </div>
                <div className="input">
                  <span>Email.</span>
                  <input
                    placeholder="Ejemplo@gmail.com"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="input">
                  <span>Asunto.</span>
                  <input
                    placeholder="Me comunico..."
                    type="text"
                    name="asunto"
                    required
                  />
                </div>
                <div className="input">
                  <span>Tu Mensaje.</span>
                  <textarea
                    placeholder="Hola Agustin...."
                    cols="45"
                    rows="10"
                    name="message"
                    required
                  ></textarea>
                </div>
                <button id="button" className="btn_shadow">
                  Enviar <i className="fa fa-long-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
