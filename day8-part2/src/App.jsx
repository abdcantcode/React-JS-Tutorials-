import React from 'react'
import { useState } from 'react'
import './index.css'
import Men from './components/Men'
import Women from './components/Women'
const App = () => {
  let [gender,setGender]=useState('Male')
  function changegender(){
    if(gender==='Male'){
      setGender('Female')
    }else{
      setGender('Male')
    }
  }
  return (
    <div>
      <h1>{gender}</h1>
      <button onClick={changegender}>Change Gender</button>
      {gender==='Male'?<Men/>:<Women/>}
    </div>
  )
}

export default App
