import React from 'react'
import './Title.css'

export default function Title(props) {
    const { main_title, visible, children } = props;
    return ( 
    <div className='title_line'>
        <h1>{main_title}</h1>
        {visible && <div className="line" />}
        {children}
    </div>
  )
}

