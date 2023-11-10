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
                <h4>{name}</h4>
                <h5 className='filmCategories'>{categories.join(', ')}</h5>
            </div>
        </div>
    )
}

