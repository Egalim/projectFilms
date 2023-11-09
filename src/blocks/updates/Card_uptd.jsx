import React from 'react'
import './Card_uptd.css'
import img from '../../assets/news.png'

export default function Card_uptd() {
    return (
        <div className="news" style={{ backgroundImage: `url(${img})` }}>
            <h5>Не время умирать. Перенос релиза фильма </h5>
        </div>

    )
}
