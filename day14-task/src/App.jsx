import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {

  const [userdata,SetUserdata]=useState([]);
  const [num,Setnum]=useState(0);

  async function APIHandler(){
    let response=await axios.get('https://randomuser.me/api/');  
    SetUserdata(response.data.results[0].name.first +" "+response.data.results[0].name.last); 
  }

  useEffect(()=>{
    APIHandler();
  },[])
  return (
    <div>
      <h1>{userdata}</h1>
      <h2>{num}</h2>
      <button onClick={()=>{
        Setnum(num+1);
        APIHandler();
      }}>Render Random User</button>
    </div>
  )
}

export default App
