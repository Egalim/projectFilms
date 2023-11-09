import React from 'react'
import { useState } from "react"
import dislikeImg from '../assets/dislike.png'
import './Btn.css'

export default function Dislike() {
  const [dislike, setDislike] = useState(0)

    return (
        <div className='btnEstimate'>
        <button className="btnLike" onClick={() => {
          setDislike(dislike + 1)
        }}>
          <img src={dislikeImg} alt="" />
        </button>
        <p className="numLike">{dislike}</p>
      </div>

    )
}