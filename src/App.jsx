import { useState, useEffect } from "react";
import * as React from "react";
import './App.css'
import Header from './header/Header'
import Poster from './blocks/poster/Poster';
import Media from './blocks/media/Media';
import Films from './blocks/films/Films';
import News from "./blocks/news/News";
import Actors from "./blocks/actors/Actors";
import Updates from "./blocks/updates/updates";
import FormSub from "./blocks/formSub/FormSub";
import Footer from "./blocks/footer/Footer";

function App() {

  const arrPopFilms = [
    {
      name: 'Джокер',
      img: '../src/assets/media/image.png',
      categories: 'Триллер, драма, криминал',
      rating: '8.50',
    },
    {
      name: 'История игрушек 4',
      img: '../src/assets/media/image.png',
      categories: 'Мультфильм, фэнтези, комедия, приключения ...',
      rating: '7.80',
    },
    {
      name: 'Однажды в… Голливуде',
      img: '../src/assets/media/image.png',
      categories: 'Драма, комедия',
      rating: '7.70',
    },
    {
      name: 'Солнцестояние',
      img: '../src/assets/media/image.png',
      categories: 'Ужасы, триллер, драма',
      rating: '7.10',
    },
    {
      name: 'Джокер',
      img: '../src/assets/media/image.png',
      categories: 'Триллер, драма, криминал',
      rating: '8.50',
    },
    {
      name: 'История игрушек 4',
      img: '../src/assets/media/image.png',
      categories: 'Мультфильм, фэнтези, комедия, приключения ...',
      rating: '7.80',
    },
    {
      name: 'Однажды в… Голливуде',
      img: '../src/assets/media/image.png',
      categories: 'Драма, комедия',
      rating: '7.70',
    },
    {
      name: 'Солнцестояние',
      img: '../src/assets/media/image.png',
      categories: 'Ужасы, триллер, драма',
      rating: '7.10',
    },
  ];

  const [array, setArray] = useState([]);
  const [arrCategory, setArrCategory] = useState([]);
  const [indexCategory, setIndexCategory] = useState();

  React.useEffect(() => {
    fetch('http://192.168.144.66:8081/api/movies')
      .then(response => response.json())
      .then(json => setArray(json))
  }, []);

  useEffect(() => {
    fetch('http://192.168.144.66:8081/api/genres')
      .then(response => response.json())
      .then(json => setArrCategory(json))
  }, []);

  useEffect(() => {
    if (arrCategory.length > 0) {
      fetch(`http://192.168.144.66:8081/api/movies/${arrCategory[indexCategory]}`)
        .then(response => response.json())
        .then(json => setArray(json))
    }
  }, [indexCategory])

  return (
    <>
      <div className="first_block">
        <div className="container">
          <Header />
          <Poster />
        </div>
      </div>
      <div className="container">
        <Media />
        <Films arr={array} />
        <Actors />
        <Updates />
        <News arr={array}/>
        <FormSub />
        <Footer />

      </div>
    </>
  )
}

export default App