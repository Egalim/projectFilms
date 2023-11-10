import React from 'react'
import './AboutFilm.css'
import Like from '../btn/Like'
import { Link } from "react-router-dom"
import Dislike from '../btn/Dislike'
import arrowLink from "../assets/arrowLink.svg"
import heart from "../assets/heart.svg"
import DetailFilm from './components/DetailFilm'
import InfoFilm from "./components/InfoFilm";

export default function AboutFilm({ localFilmName, filmName, img, filmRating }) {
    return (
        <>
            <div className="aboutFilm">
                <div className="imgFilm">
                    <img src={img} alt="" />
                </div>
                <div className="characteristic">
                    <p className="pathPage">
                        <Link className="linkHome" to={`/`}>Главная</Link>
                        <img src={arrowLink} alt="" />
                        {localFilmName}</p>
                    <h1 className="localFilmName">{localFilmName}</h1>
                    <h3>{filmName}</h3>
                    <h4>Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.</h4>
                    <div style={{ textAlign: 'center' }}><button className='btn_poster'> <h4>Все новинки</h4></button></div>
                </div>

            </div>
            <div className="action">
                <div>
                    <Like />
                    <Dislike />
                    <div className="favorites">
                        <button className="heart"><img src={heart} /></button>
                        <h5>В избранном у 37933 человек</h5>
                    </div>
                </div>
            </div>
            <DetailFilm />
            <InfoFilm />
        </>
    )
}

