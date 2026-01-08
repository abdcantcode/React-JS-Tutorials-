import React, { useContext } from 'react'
import { ThemeContextSetter } from '../context/ThemeContext'

const Navbar = () => {
  let [theme,setTheme]=useContext(ThemeContextSetter)
  return (
    
    <div className='navbar'>
      <h1>Navbar</h1>
      
      <button onClick={()=>{
        if(theme=='light'){
          setTheme('dark')
        }else{
          setTheme('light')
        }
      }}>Change Theme</button>
      <h1>{theme}</h1>
    </div>
  )
}

export default Navbar
