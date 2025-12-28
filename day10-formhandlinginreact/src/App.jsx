import React from 'react'
import { useState } from 'react';

const App = () => {

  const [name,setName]=useState('');//Initially name ku '' rakhre empty nai rakh sakte
  
  const submitHandler=(e)=>{
    e.preventDefault();//Tum uppar e ke badle u bhi leke niche u bhi rakh sakte they lekin dusri jagah pe jo hai niche udhar se e lena zaroori nai rehta, basically niche dono same aur uppar dono same 
    console.log("Form submitted")
    

    setName('');
  }
  
  //Bhai tum button ku nai lagate on submit woh form ku lagate
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input type="text"
          required
          value={name}
          onChange={(e)=>{
            setName(e.target.value)
            // console.log(e.target.value) tum yeh karke dekhe toh samajh aajata kya hai so scene 
          }}

        />
        <button>Submit</button>
        
      </form>
    </div>
  )
}

export default App

//Tum direct DOM se interact nai karsakte react mein toh tumaku react ku bolna padhta isliye next aage apne ku karna jo padhta apart from prevent default woh sab apan karre