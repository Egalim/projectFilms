import * as React from "react"
import Logo from '../components/logo'
import Nav from './Nav'
import './Header.css'
import Search_btn from "../btn/Search_btn"
import Entry_btn from "../btn/Entry_btn"

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Nav />
      <div className="two_btn">
        <Search_btn />
        <Entry_btn />
      </div>
    </header>
  )
}

