import React,{useState} from "react"
import Modal from "./Modal"
import './Cards.css'

const Card = ({image, description, title, likes, category, tec, dire}) => {
  const [modal, setModal] = useState(false)
  
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={image} onClick={() => setModal(!modal)} alt=''/>
        </div>
        <div className='category d_flex'>
          <span onClick={() => setModal(!modal)}>{category}</span>
          <label> 
            <i className='far fa-heart'></i>  {likes}
          </label>
        </div>
        <div className='title'>
          <h2 onClick={() => setModal(!modal)}>{title}</h2>
        </div>
      </div>
      <Modal
       modal={modal}
       setModal={setModal}
       title={title} 
       likes={likes}
       category={category}
       image={image}
       description={description}
       tec={tec}
       dire={dire}
      />
    </>
  )
}

export default Card