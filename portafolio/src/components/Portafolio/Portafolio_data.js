import img1 from '../Pics/Portafolio/food.jpeg'
import img2 from '../Pics/Portafolio/galeria.jpeg'
import img3 from '../Pics/Portafolio/meme.png'
import img4 from '../Pics/Portafolio/nippy.jpeg'
import img5 from '../Pics/Portafolio/portfolio.png'
import img6 from '../Pics/Portafolio/wiki.png'

const Portafolio_Data = [
  {
    id: 1,
    category: "Web",
    title: "Portfolio",
    description: "Proyecto personal realizado para volcar todos mis trabajos. Responsive",
    likes: 910,
    tec:'React, Bootstrap, CSS.',
    image: img5,
    dire: 'https://www.github.com/Dibu05/Portafolio'
  },
  {
    id: 2,
    category: "Web",
    title: "Wiki Rick and Morty",
    description: "Wiki de personajes de Rick and Morty, cuenta con un Search,Paginado,Filtros, se puede acceder al detalle de cada carta. 100% responsive",
    likes: "875",
    tec:'React,Sass,React Hooks,Axios.',
    image: img6,
    dire: 'https://www.github.com/Dibu05/Rick-and-Morty-Wiki'
  },
  {
    id: 3,
    category: "Web",
    title: "Generador de Memes",
    description: "Web para divertirse generando Memes para que puedas compartir con tus amigos!",
    likes: 640,
    tec:'React,Bootstrap',
    image: img3,
    dire: 'https://www.github.com/Dibu05/Memes'
  },
  {
    id: 4,
    category: "Mobile",
    title: "App para Riders",
    description: "Proyecto en el que trabajo con otros dev para la empresa NIPPY basado en el desarrollo de una aplicación Mobile para el servicio de delivery que incluye: registro, login, perfil, localización en mapa, entre otras. Por politicas de la empresa no puedo mostrar el Codigo,",
    likes: 1020,
    tec:'React Native, Mongo DB, Redux, Expo, Axios, CSS.',
    image: img4,
  },
  {
    id: 5,
    category: "Web",
    title: "Web de Recetas",
    description: "He tenido la oportunidad de desarrollar una SPA (Single Page Application) sobre recetas de comidas trabaja en conjunto con una API especializada en recetas, y mi propia Base de Datos ",
    likes: 1000,
    tec:'React, Redux, NodeJs, Express, PostgreSQL',
    image: img1,
    dire: 'https://www.github.com/Dibu05/PI-Food-SPA'
  },
  {
    id: 6,
    category: "Mobile",
    title: "Galeria",
    description: "Galeria de imagenes, puedes entrar al detalle de cada imagen y conocer sus autores.Para practicar React Native y trabajar en conjunto con una API de imagenes",
    likes: 650,
    tec:'React Native, Axios',
    image: img2,
    dire: 'https://www.github.com/Dibu05/Test'
  },
];

export default Portafolio_Data;