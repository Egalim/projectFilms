import React from 'react'
import '../Entry.css'

function Form({text_input}) {
  return (
    <div>
        <input type="text" placeholder={text_input}></input> 
    </div>
  )
}

export default Form