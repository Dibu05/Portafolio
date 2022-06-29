import React from "react";
import "./Modal.css";

const Modal = ({
  title,
  image,
  category,
  likes,
  description,
  modal,
  setModal,
  tec,
  dire
}) => {
  return (
    <>
      {modal && (
        <div className="contenedor">
          <div className="div_modal">
            <div className="heder">
            <div className="div_category">{category}</div>
            <button className="btn_shadow" onClick={() => setModal(!modal)}>
              X
            </button>
            </div>
            <div className="div_title">{title}</div>
            <div className="div_description">
            <div>{description}</div>
            <h5 className="div_tec">Tecnologias Utilizadas: <span className="span_txt">{tec}</span></h5>
            </div>
            <div className="btn_proy">
              <a href={dire} target="_blank" rel="noopener noreferrer"><button className="btn_shadow">Ver Proyecto <i className="fab fa-github"></i></button></a>
              <button className="btn_shadow" onClick={() => setModal(!modal)}>Me gusta <i className="far fa-thumbs-up"></i></button>
            </div>
            <div className="div_likes"><i className='far fa-heart'></i> {likes}</div>
            <div className="div_img">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
