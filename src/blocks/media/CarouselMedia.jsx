import React, { useState } from 'react'
import './CarouselMedia.css'
import Like from '../../btn/Like'
import Dislike from '../../btn/Dislike'

export default function CarouselMedia() {
    const [mainTrailer, setMainTrailer] = useState(0)
    const array = [
        {
            id: 1,
            name: 'Мулан',
            img: '../src/assets/media/image1.png',
        },
        {
            id: 2,
            name: 'Форсаж 9',
            img: '../src/assets/media/image.png',
        },
        {
            id: 3,
            name: 'Чёрная Вдова',
            img: '../src/assets/media/image2.png',
        },
        {
            id: 4,
            name: 'Тихое место 4',
            img: '../src/assets/media/image3.png',
        },
    ];
    return (
        <div>
            <div className="main_trailer">
                <img src={array[mainTrailer].img} alt="trailer" className='main_trailer_img'/>
                <div className="row_main_trailer">
                    <h3>{array[mainTrailer].name}</h3>
                    <div className="row_like">
                        <Like />
                        <Dislike />
                    </div>
                </div>
            </div>

            <div className="sliderTrailer">
                <div className="switch" style={{
                    transform: `translate(${mainTrailer * 100}%)`
                }} />
            </div>
            <div className="trailers">
                {
                    array.map((item, index) => {
                        return (
                            <div className="min_trailer" key={item.id}
                                onClick={() => setMainTrailer(index)}>
                                <img src={item.img} alt="" />
                                <h4>{item.name}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

