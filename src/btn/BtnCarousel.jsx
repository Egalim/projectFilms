import btnLeft from "../assets/ArrowL.svg"
import btnRight from "../assets/ArrowR.svg"
import './Btn.css'

export default function BtnCarousel({toLeft, toRight, currentCount, mathTC, justifyContent}) {
    
    return (
        <div className="counterFlip" style={{
            justifyContent: `${justifyContent}`
        }}>
            <button onClick={toLeft}><img src={btnLeft} alt="" /></button>
            <p>{currentCount + 1}/{mathTC}</p>
            <button onClick={toRight}><img src={btnRight} alt="" /></button>
        </div>
    )
}