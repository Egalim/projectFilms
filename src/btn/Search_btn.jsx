import React from 'react'
import search from '../assets/search.svg'
import './btn.css'

export default function Search_btn() {
    return (
        <button className='search_btn btn'>
            <img src={search} alt="" />
        </button>
    )
}
