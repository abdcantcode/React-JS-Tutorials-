import React from 'react'
import Card from './components/Card'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const App = () => {
  const [user,setUser]=useState([]);
  async function renderData(){
    let response=await axios.get('https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json');
    setUser(response.data);
    console.log(response.data);
    
  }
  // renderData(); mai aisa chalaya toh hazaro baar call hota woh API for that apan use karte use effect
  useEffect(function(){
    renderData();
  },[])
  //Aisa idx={idx} card ku dena galat h toh, referring to line 25 ek div mein return karo pele ke jaisa
  return (
    <div >
      <button onClick={renderData}>HELLO</button>
      <div className='cardkadabba'>
        {user.map(function(elem,idx){
        return <div idx={idx}>
          <Card  elem={elem}/>
          </div> 
      })}
      </div>
      
      
    </div>
  )
}

export default App
