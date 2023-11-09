import React from 'react'
import './CardCarousel.css'

export default function CardCarousel({name, img, categories, rating}) {
    return (
        <div className="cardCarousel">
            <p className="rating">{rating}</p>
            <div className="cardImg">
                <img src={img} alt="" />
            </div>
            <div className="about">
                <h3>{name}</h3>
                <h4 className='filmCategories'>{categories.join(', ')}</h4>
            </div>
        </div>
    )
}

