import React from 'react'
import './Footer.css'
import VK from '../../assets/vk.svg'
import FB from '../../assets/facebook.svg'
import Google from '../../assets/google.svg'
import Twitter from '../../assets/twitter.svg'
import Nav from '../../header/Nav'

export default function Footer() {
  return (
    <footer>
        <div className="logo_net_cont">
                    <a href='' className='logo_net'><img src={VK} alt="" /></a>
                    <a href='' className='logo_net'><img src={FB} alt="" /></a>
                    <a href='' className='logo_net'><img src={Google} alt="" /></a>
                    <a href='' className='logo_net'><img src={Twitter} alt="" /></a>
        </div>

        <Nav />

        <h5>2023 © Kinoarea.  Все права защищены</h5>
        <h5 className='a_foot'><a href="#">Политика конфиденциальности</a></h5>
    </footer>
  )
}

