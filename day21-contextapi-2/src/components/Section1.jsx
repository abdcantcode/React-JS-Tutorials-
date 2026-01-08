import React, { useContext } from 'react'
import { ThemeContextSetter } from '../context/ThemeContext'

const Section1 = () => {
  let [theme,setTheme]=useContext(ThemeContextSetter)
  return (
    <div >
      <h1>Section1</h1>
      <h1>{theme}</h1>
    </div>
  )
}

export default Section1
