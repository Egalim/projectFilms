import React from 'react'
import './Actors.css'
import Title from '../../components/Title'
import Category from '../../components/Category'
import CardActor from './CardActor'
import i1 from '../../assets/actor/taran.png'
import i2 from '../../assets/actor/state.png'

export default function Actors() {
    const arrData = ['За год', 'За месяц ', 'За неделю']

    const arrPersons = [
        {
            nameLocal: 'Тинто Брасс',
            name: 'Tinto Brass',
            age: '87',
            place: '3',
        },
        {
            nameLocal: 'Джеки Чан',
            name: 'Jackie Chan',
            age: '66',
            place: '4',
        },
        {
            nameLocal: 'Том Харди',
            name: 'Tom Hardy',
            age: '42',
            place: '5',
        },
        {
            nameLocal: 'Акшай Кумар',
            name: 'Akshay Kumar',
            age: '52',
            place: '6',
        },
    ]

    return (
        <div id='actors'>
            <Title main_title={'Популярные персоны'}>
                <Category arrCategory={arrData} />
            </Title>
            <div className="container_actor">
                <CardActor img_actor={i1} actor={'Квентин Тарантино'} actor_name={'Quentin Tarantino'} age={'57 лет'} place={'1'} />
                <CardActor img_actor={i2} actor={'Джейсон Стейтем'} actor_name={'Jason Statham'} age={'52 года'} place={'2'} />
                <div className="list_actor">
                    {
                        arrPersons.map((e, index) => {
                            return (
                                <div className='row_list_actor' key={index}>
                                    <div className='rows_list_actor'>
                                        <h4 className='txt_bold'>{e.nameLocal}</h4>
                                        <h4 className='txt_grey th4'>{e.name}</h4>
                                        <h5 className='txt_yellow'>{e.age} лет</h5>
                                    </div>
                                    <h5 className='txt_yellow'>{e.place}-е место</h5>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

