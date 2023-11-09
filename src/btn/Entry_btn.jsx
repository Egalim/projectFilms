import React from 'react'
import './Btn.css'
import { useNavigate } from 'react-router-dom'

export default function Entry_btn()  {
  const navigate = useNavigate()
  return (
    <div className='entry_btn btn' onClick={()=>
    navigate(`/entry`)}><h4>Войти</h4></div>
  )
}
