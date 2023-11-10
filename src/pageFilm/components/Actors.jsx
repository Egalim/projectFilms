import React from 'react'
import Title from '../../components/Title'
import Detail from '../../components/Detail'
import CardActor from './CardActor'

export default function Actors() {
    const cards = ['','','','','','','','','','']
    return (
        <div>
            <Title main_title={'В главных ролях:'}>
                <Detail detail_title={'Все актёры'} />
            </Title>

            <div className="listActor">
                {cards.map(() => {
                    return <CardActor />
                })}
            </div>
        </div>
    )
}

