import React, { useState } from 'react'
import Navbar from './Navbar'

const App = () => {
  let [theme,setTheme]=useState('light')

  const datachanger=(param)=>{
    setTheme(param);
  }
  return (
    <div className='parent'>
      <h1>The theme is {theme}</h1>
      <Navbar changer={datachanger} theme={theme}/>
    </div>
  )
}

export default App
