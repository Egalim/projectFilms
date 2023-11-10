import React from 'react'
import './TrailerFilm.css'
import Title from '../components/Title'
import Detail from '../components/Detail'
// import img from '../assets/media/image.png'
import Like from '../btn/Like'
import Dislike from '../btn/Dislike'
import VK from '../assets/vk.svg'
import FB from '../assets/facebook.svg'
import Google from '../assets/google.svg'
import Twitter from '../assets/twitter.svg'

export default function TrailerFilm({ name, img }) {
    return (
        <div>
            <Title main_title={'Трейлеры фильма'} visible={false}>
                <Detail detail_title={'Все трейлеры'} />
            </Title>

            <div className="main_trailer">
                <img src={img} alt="trailer" className='main_trailer_img' />
                <div className="row_main_trailer">
                    <h3>{name}</h3>

                    <div className="logo_net_cont">
                        <a href='' className='logo_net'><img src={VK} alt="" /></a>
                        <a href='' className='logo_net'><img src={FB} alt="" /></a>
                        <a href='' className='logo_net'><img src={Google} alt="" /></a>
                        <a href='' className='logo_net'><img src={Twitter} alt="" /></a>
                    </div>

                    <div className="row_like">
                        <Like />
                        <Dislike />
                    </div>
                </div>
            </div>
        </div>
    )
}
