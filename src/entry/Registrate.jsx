import React from 'react'
import Form from './entry_comp/form'
import Btn_entry from './entry_comp/Btn_entry'
import './Entry.css'

export default function Registrate() {
    return (
        <div className='container_entry'>
            <h2 className='entry_title'>Войти</h2>
            <form className='form_entry'>
                <Form text_input={'Имя'} />
                <Form text_input={'Фамилия'} />
                <Form text_input={'Придумайте логин'} />
                <Form text_input={'Придумайте пароль'} />
                <Form text_input={'Повторите пароль'} />
                <Form text_input={'Номер телефона или e-mail'} />
                <div className='check_agree'>
                    <div>
                        <input id='checkbox1' type="checkbox" className='checkbox' />
                        <label htmlFor='checkbox1'>
                            <pre>Соглашаюсь на условия &nbsp;</pre>
                            <a className='link_reg'> политики конфиденциальности</a>
                        </label>
                    </div>
                    <div>
                        <input id='checkbox2' type="checkbox" className='checkbox' />
                        <label htmlFor='checkbox2'>
                            Соглашаюсь на обработку персональных данных
                        </label>
                    </div>
                </div>
                <Btn_entry title_btn_entry={'Зарегистрироваться'} link={`/entry`} />
            </form>

        </div>
    )
}

