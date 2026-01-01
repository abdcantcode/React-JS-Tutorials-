import React, { useEffect, useState } from 'react'

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [text, setText] = useState('');
  useEffect(function () {
    console.log("Use effect runs");
  }) //Runs on every change like page render, change in num1, num2, num3 and the input 

   useEffect(function () {
    console.log("Use effect with empty dependency list runs");  //Only runs on the first page render
  },[]) 

  useEffect(function () {
    console.log("Use effect only on change in num1 or input field");  //Only runs on if any changes in the dependency list 
  },[num1,text]) 

  return (
    <div>
      <h1>{num1}</h1>
      <button onClick={() => {
        setNum1(num1 + 1);
      }}>INCREASE VALUE
      </button>
      <br />
      <br />
      <h1>{num2}</h1>
      <button onClick={() => {
        setNum2(num2 + 1);
      }}>INCREASE VALUE
      </button>
      <br />
      <br />
      <h1>{num3}</h1>
      <button onClick={() => {
        setNum3(num3 + 1);
      }}>INCREASE VALUE
      </button>
      <br /><br />
      <input type="text"
      value={text}
      onChange={(e)=>{
        setText(e.target.value);
        
      }} 
      required
      />
    </div>
  )
}

export default App
