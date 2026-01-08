import React, { useContext } from 'react'
import { ThemeContextSetter } from '../context/ThemeContext'

const Footer = () => {
  let data=useContext(ThemeContextSetter)
  return (
    
    <div className='footer'>
      <h1>Footer</h1>
      <h1>{data}</h1>
      <button onClick={()=>{
        
      }}>Change Theme</button>
    </div>
  )
}

export default Footer
