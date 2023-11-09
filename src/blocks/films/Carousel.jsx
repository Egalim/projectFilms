import './Carousel.css'
import Slides from './Slides'
import BtnCarousel from '../../btn/BtnCarousel'
import React, { useState } from "react";


export default function Carousel({ children, num, justifyContent }) {
    const [currentCount, setCurrentCount] = useState(0)
    const [totalCount, setTotalCount] = useState(num)  
    const mathTC = 2

    

    function toLeft() {
        if (currentCount > 0) {
            setCurrentCount(currentCount - 1)
        } else {
            setCurrentCount(mathTC - 1)
        }
    }

    function toRight() {
        if (currentCount < mathTC - 1) {
            setCurrentCount(currentCount + 1)
        } else {
            setCurrentCount(currentCount == 0);
        }
    }

    return (
        <>
            <div className="cutCarouselFlip">
            <Slides currentCount={currentCount}>
                    {children}
                </Slides>
                <BtnCarousel toLeft={toLeft} toRight={toRight} currentCount={currentCount} mathTC={mathTC} justifyContent={justifyContent} />
            </div>
        </>
    )
}

