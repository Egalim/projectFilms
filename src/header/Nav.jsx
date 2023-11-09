import * as React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

const Nav = () => {
  return (
    <nav className="nav">
        <a href="#poster"><h4>Афиша</h4></a>
        <a href="#media"><h4>Медиа</h4></a>
        <a href="#popular_films"><h4>Фильмы</h4></a>
        <a href="#actors"><h4>Актёры</h4></a>
        <a href="updates"><h4>Новости</h4></a>
        <a href="#new_film"><h4>Подборки</h4></a>
        <a href="#poster"><h4>Категории</h4></a>
    </nav>
  )
}

export default Nav