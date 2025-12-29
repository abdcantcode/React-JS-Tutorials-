import React, { useState } from 'react'
import './index.css'
const App = () => {

  const [name,setName]=useState('');
  const [profession,setProfession]=useState('');
  const [url,setUrl]=useState('');
  const [desc,setDesc]=useState('');

  function submitHandler(e){
    e.preventDefault();
    setName('');
    setProfession('');
    setDesc('');
    setUrl('');

  }


  return (
    <div>
      <form>
        <input type="text" 
        onChange={(e)=>{
          setName(e.target.value);
        }}
        value={name}
        placeholder='Enter your name'
        required/>

        <input type="text" 
        onChange={(e)=>{
          setProfession(e.target.value);
        }}
        value={profession}
        placeholder='Enter your profession'
        required/>

        <input type="text" 
        onChange={(e)=>{
          setUrl(e.target.value);
        }}
        value={url}
        placeholder='Enter your Image URL'
        required/>

        <input type="text" 
        onChange={(e)=>{
          setDesc(e.target.value);
        }}
        value={desc}
        placeholder='Enter your '
        required/>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
