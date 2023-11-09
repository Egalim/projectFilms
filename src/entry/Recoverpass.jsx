import React from 'react'
import Form from './entry_comp/form'
import Btn_entry from './entry_comp/Btn_entry'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Recoverpass() {
  const navigate = useNavigate();
  return (
    <div className='container_entry'>
      <h2 className='entry_title'>Восстановить пароль</h2>
      <form className='form_entry'>
        <Form text_input={'Почта или номер телефона'} />
        <div className="row_form">
          <button className='btn_entry_sent border' onClick={()=>{
            navigate(``)
          }}>
            <h5>Отправить</h5>
          </button>
          <Form text_input={'Полученный код'} />
        </div>
        <Btn_entry title_btn_entry={'Далее'} link={`/createpass`}></Btn_entry>
      </form>
      
    </div>
  )
}
