import React, { createContext, useState } from 'react'
export const ThemeContextSetter=createContext()
const ThemeContext = (props) => {
  let [theme,setTheme]=useState('light')
  let data=1;

  return (
    <div className='app'>
      <ThemeContextSetter.Provider value={data}>
      {props.children}
      </ThemeContextSetter.Provider>  
    </div>
  )
}

export default ThemeContext
