import React from 'react'
import Title from '../../components/Title'
import Category from '../../components/Category';
import Carousel from './Carousel';
import './Films.css'
import CardCarousel from '../../components/CardCarousel';

export default function Films({arr}) {
    const arrCatPopFilms = ['Всё время', '2023', '2022',
        '2021', '2020', '2019', '2018'];
    return (
        <div id='popular_films'>
            <Title main_title={'Популярные фильмы'}>
                <Category arrCategory={arrCatPopFilms} />
            </Title>
            <Carousel num={arr.length - 1} justifyContent={'center'} slides={true} btn={true}>
                {arr.map((e, index) => {
                    return (
                        <CardCarousel key={e.id} name={e.localName} img={e.urlIcon} categories={e.genres} rating={e.averageRating} />
                    )
                })}
            </Carousel>

        </div>
    )
}

