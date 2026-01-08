import React, { useContext } from 'react'
import { ThemeContextSetter } from '../context/ThemeContext'

const Footer = () => {
  let [theme,setTheme]=useContext(ThemeContextSetter)
  return (
    
    <div className='footer'>
      <h1>Footer</h1>
      <h1>{theme}</h1>
      <button onClick={()=>{
        if(theme=='light'){
          setTheme('dark')
        }else{
          setTheme('light')
        }
      }}>Change Theme</button>
    </div>
  )
}

export default Footer
