import React, { useState } from 'react'

const Navbar = (props) => {
 let [newtheme,setNewTheme]=useState('')
  
  return (
    <div className='child'>
      <form onSubmit={(e)=>{
        e.preventDefault()
        props.changer(newtheme);{/*Yeh prop hai jo tum udhar se lere jo ki ek function hai usku idhar leke tum usmein pass karre apna changed thingy basically udhar se set karlete tum  */}
      }}>
        <input type="text" 
        value={newtheme}
        onChange={(e)=>
          setNewTheme(e.target.value)
          
        }
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Navbar
