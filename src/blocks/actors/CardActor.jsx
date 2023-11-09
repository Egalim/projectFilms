import React from 'react'
import './CardActor.css'

export default function CardActor({ img_actor, actor, actor_name, age, place }) {
    return (
        <div className='card_actor' style={{ backgroundImage: `url(${img_actor})` }}>
            <h5>{place}-е место</h5>
            <div className="row_actor">
                <h3>{actor}</h3>
                <h4 className='txt_grey'>{actor_name}</h4>
                <h5>{age}</h5>
            </div>
        </div>
    )
}
