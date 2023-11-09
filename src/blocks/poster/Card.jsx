import React from 'react'
import './Card.css'

export default function Card({name, img, categories, rating}) {

  return (
    <div className='card'>
      <div className="rating">{rating}</div>
      <img src={img} alt="film" />
      <h4>{name}</h4>
      <h5>{categories.join(', ')}</h5>
    </div>
  )
}

