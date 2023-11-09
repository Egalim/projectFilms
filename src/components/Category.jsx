import React from 'react'
import './Title.css'
import { Link } from 'react-router-dom'

export default function Category({ arrCategory, setArrCategory, selected }) {

    return (
        <div className='category_title'>
            {
                arrCategory.map((item, index) => {
                    return (
                        <Link to="" style={{
                            color: index === selected ? 'white' : ''
                        }} onClick={() => {
                            setArrCategory(index)
                        }} className='aCategory' key={index}> <h4>{item}</h4> </Link>
                    )
                })
            }
        </div>
    )
}

