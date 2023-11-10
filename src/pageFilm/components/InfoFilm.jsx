import React from 'react'
import './InfoFilm.css'
import img from "../../assets/chel.png"

export default function InfoFilm() {
    return (
        <div className="blockInfo">
            <div className="blockInfoImg">
                <img src={img} alt="" />
            </div>
            <div className="blockInfoText">
                <div>
                    <h4>Фрэнсис Аннан</h4>
                    <h5>Francis Annan</h5>
                    <p>Режисёр</p>
                </div>
            </div>
            <div className="blockInfoImg">
                <img src={img} alt="" />
            </div>
            <div className="blockInfoText">
                <div>
                    <h4>Фрэнсис Аннан</h4>
                    <h5>Francis Annan</h5>
                    <p>Режисёр</p>
                </div>
            </div>
            <div className="blockInfoText">
                <div>
                    <h4>Фрэнсис Аннан</h4>
                    <p>1. Arclight Films</p>
                    <p>2. Beagle Pug Films</p>
                    <p>3. Footprint Films</p>
                </div>
            </div>
            <div className="blockInfoText">
                <div>
                    <h4>Производство:</h4>
                    <p>1. Arclight Films</p>
                    <p>2. Beagle Pug Films</p>
                    <p>3. Footprint Films</p>
                </div>
            </div>
            <div className="blockInfoText">
                <div>
                    <h4>Спецэффекты:</h4>
                    <p>1. Arclight Films</p>
                    <p>2. Beagle Pug Films</p>
                    <p>3. Footprint Films</p>
                </div>
            </div>
            <div className="blockInfoText">
                <div>
                    <h4>Студия дубляжа:</h4>
                    <p>1. Пифагор</p>
                </div>
            </div>
        </div>
    )
}

