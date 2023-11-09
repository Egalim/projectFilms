import React from 'react'
import img from '../assets/logo.svg'
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/")} id="logo">
      <img src={img} alt="logo" />
    </div>
  )
}

export default Logo