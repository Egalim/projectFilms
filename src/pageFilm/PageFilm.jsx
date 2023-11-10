import React from 'react'
import './PageFilm.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from '../header/Header';
import AboutFilm from './AboutFilm';
import Actors from './components/Actors';
import Links from './components/Links';
import TrailerFilm from './TrailerFilm';
import FormSub from '../blocks/formSub/FormSub';
import Footer from '../blocks/footer/Footer';
import PosterFilm from './PosterFilm';


export default function PageFilm() {
    const [array, setArray] = useState('');
    let { movieId } = useParams();

    useEffect(() => {
        fetch(`http://192.168.144.66:8081/api/movie/${movieId}`)
            .then((response) => response.json())
            .then((json) => setArray(json));
    }, []);
    return (
        <>
            <div className="filmBG">
                <div className="filmBGgradient">
                    <img className="filmBGImg" src={array.backgroundImage} alt="" />
                </div>
                <div className="container">
                    <Header />
                    <div className="reducedContainer">
                        <AboutFilm
                            localFilmName={array.localName}
                            filmName={array.originalName}
                            img={array.urlIcon}
                            filmRating={array.averageRating}
                        />
                    </div>
                </div>
            </div>
            <div className="container">
                <Actors />
                <Links />
                <TrailerFilm name={array.localName} img={array.urlIcon} />
                {/* <PosterFilm name={array.localName} /> */}
                <div style={{marginTop: '10vh'}}></div>
                <FormSub />
                <Footer />
            </div>

        </>
    );
}
