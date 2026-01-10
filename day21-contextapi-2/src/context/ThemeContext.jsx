/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react'
export const ThemeContextSetter=createContext()
const ThemeContext = (props) => {
  let [theme,setTheme]=useState('light')
  

  return (
    <div className='app'>
      <ThemeContextSetter.Provider value={[theme,setTheme]}>
      {props.children}
      </ThemeContextSetter.Provider>  
    </div>
  )
}

export default ThemeContext
