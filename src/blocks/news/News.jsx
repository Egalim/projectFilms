import React from 'react'
import Title from '../../components/Title'
import Slides from '../films/Slides'
import CardCarousel from '../../components/CardCarousel'
import { useState } from "react"
import BtnCarousel from '../../btn/BtnCarousel'


export default function News({ arr }) {
    const [currentCount, setCurrentCount] = useState(0)
    const [totalCount, setTotalCount] = useState(arr.length - 1)
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
            <Title main_title={'Ожидаемые новинки'} visible={false}>
                <BtnCarousel toLeft={toLeft} toRight={toRight} currentCount={currentCount} mathTC={mathTC} justifyContent={'flex-end'} />
            </Title>

            <div className="cutCarouselFlip">
            <Slides currentCount={currentCount + 1} >
                {arr.map((e, index) => {
                    return (
                        <CardCarousel key={e.id} name={e.localName} img={e.urlIcon} categories={e.genres} rating={e.averageRating} />
                    )
                })}
            </Slides>
            </div>
        </>
    )
}

