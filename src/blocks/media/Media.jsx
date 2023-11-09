import React from 'react'
import Title from '../../components/Title'
import './Media.css'
import Detail from '../../components/Detail'
import CarouselMedia from './CarouselMedia'

export default function Media() {
    return (
        <div id='media'>
            <Title main_title={'Новые трейлеры'} visible={false}>
               <Detail detail_title={'Все трейлеры'}/>
            </Title>
            <CarouselMedia />
        </div>
    )
}

