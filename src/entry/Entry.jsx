import React from 'react'
import './Entry.css'
import Form from './entry_comp/form'
import Btn_entry from './entry_comp/Btn_entry'
import { Link, useNavigate } from 'react-router-dom'
import VK from '../assets/vk.svg'
import FB from '../assets/facebook.svg'
import Google from '../assets/google.svg'
import Twitter from '../assets/twitter.svg'

function Entry() {
    const navigate = useNavigate()
    return (
        <div className='container_entry'>
            <h2 className='entry_title'>Войти</h2>
            <form className='form_entry'>
                <Form text_input={'Логин, почта или телефон'} />
                <Form text_input={'Ваш пароль'} />
                <Btn_entry title_btn_entry={'Войти'} />
                <button className='btn_entry txt_black btn_entry_grey' onClick={()=>{
                    navigate(`/registrate`)
                }}>
                    <h4>Зарегистрироваться</h4>
                </button>
            </form>
            <Link to={'/recoverpass'} className='link_entry'>Восстановить пароль</Link>
            <div className="logo_net_cont">
                    <a href='' className='logo_net'><img src={VK} alt="" /></a>
                    <a href='' className='logo_net'><img src={FB} alt="" /></a>
                    <a href='' className='logo_net'><img src={Google} alt="" /></a>
                    <a href='' className='logo_net'><img src={Twitter} alt="" /></a>
                </div>
        </div>
    )
}

export default Entry