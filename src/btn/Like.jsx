import { useState } from "react"
import likeImg from '../assets/like.png'
import './Btn.css'

export default function Like() {
  const [like, setLike] = useState(0)

    return (
        <div>
          <button className="btnLike" onClick={
            () => {
              setLike(like + 1)
            }
          }>
            <img src={likeImg} alt="" />
          </button>
          <p className="numLike">{like}</p>
        </div>
    )
}