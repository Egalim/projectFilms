import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


export default function Btn_entry({ title_btn_entry, link }) {
  const navigate = useNavigate()
  const linkClick = () => {
    navigate(link)
  }
  return (
    <button className='btn_entry txt_black' type='submit' onClick={linkClick}>
      <h4>{title_btn_entry}</h4>
    </button>
  )
}
