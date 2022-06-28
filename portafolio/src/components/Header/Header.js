import React, {useState} from "react";
import "./Header.css";
import pic_logo from "../Pics/home.jpg";


const Header = () => {
    // esto es para que el header sea responsive y se vea en todo el ancho de la pantalla y no solo en la parte de arriba 
    window.addEventListener('scroll',function () {
        const header = document.querySelector('.header');
        header.classList.toggle('active', window.scrollY > 100);
    })
    // toggle menu
    const [open, setOpen] = useState(false);



  return (
    <div>
      <header className="header">
        <div className="container d_flex">
          <div>
            <a href="home">
              <img className="logo" src={pic_logo} alt="logo" />
            </a>
          </div>
          <div className="navlink">
            {/*<ul className="link f_flex uppercase">*/}
                <ul className={open ? "nav-link-open" : "link f_flex uppercase"} onClick={() => setOpen(false)}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#skills">Habilidades</a>
              </li>
              <li>
                <a href="#portfolio">Proyecto</a>
              </li>
              <li>
                <a href="#contact">Contacto</a>
              </li>
            </ul>
            <button className="toggle" onClick={() => setOpen(!open)}>
                {open ? <i className="fas fa-times close home-btn"></i>:<i className="fas fa-bars open"></i>}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
