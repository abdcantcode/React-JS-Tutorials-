import React, { useContext } from 'react'
import { ThemeContextSetter } from '../context/ThemeContext'

const Navbar = () => {
  let data=useContext(ThemeContextSetter)
  return (
    <div className='navbar'>
      <h1>Navbar</h1>
      <h1>{data}</h1>
    </div>
  )
}

export default Navbar
