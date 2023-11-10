import React from 'react'
import cardImg from "../../assets/chel1.png"
import './Actors.css'

export default function CardActor() {
    return (
        <div className="cardActor">
            <div className="cardActorImg">
                <img src={cardImg} alt="" />
            </div>
            <h4>Дэниэл Рэдклифф</h4>
            <h5>Daniel Radcliffe</h5>
            <p>Тим Дженкин</p>
        </div>
    )
}

