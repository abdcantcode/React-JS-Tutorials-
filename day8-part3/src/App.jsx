import React from 'react'
import Box from './components/Box';
import { useState } from 'react'

const App = () => {
  let[gender,setGender]=useState('Other');
  
  function changeGender(){
    if(gender==='Male'){
      setGender('Female');
    }
    else if(gender==='Female'){
      setGender('Other')
    }
    else{
      setGender('Male');
    }
  }
  return (
    <div>
      <h1>{gender}</h1>
      <button onClick={changeGender}>Change Gender</button>
      <Box type={gender}/>
    </div>
  )
}

export default App
