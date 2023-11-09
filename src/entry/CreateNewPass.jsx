import React from 'react'
import Btn_entry from './entry_comp/Btn_entry'
import Form from './entry_comp/form'

export default function CreateNewPass() {
  return (
    <div className='container_entry'>
      <h2 className='entry_title'>Восстановить пароль</h2>
      <form className='form_entry'>
        <Form text_input={'Придумайте новый пароль'} />
        <Form text_input={'Подтвердите новый пароль'} />
        <Btn_entry title_btn_entry={'Готово!'} link={`/entry`}/>
      </form>
    </div>
  )
}
