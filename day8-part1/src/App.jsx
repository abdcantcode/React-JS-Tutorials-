// import React from 'react'
// import './index.css'
// const App = () => {
//   let a=0;
//   let increase=()=>{
//     a++;
//     console.log(a);
//   }
//   return (
//     <div>
//       <h1>
//         {a}
//       </h1>
//       <button onClick={increase}>
//         Increase Value
//       </button>
//     </div>
//   )
// }

// export default App
//Doing the above thing leads to changes in only the console value of a not in the ui so we use the useState snippet 

import React from 'react'
import { useState } from 'react'
import './index.css'

const App = () => {
  let [num, setNum] = useState(0);
  let [king, setKing] = useState('Abdul Aziz');
  let [queen, setQueen] = useState('Alisha');
  let [val, setVal] = useState(0);
  let [user, setUser] = useState(0);
  let users = ['Abdullah', 'Aamer', 'Saleem'];
  let [marks,setMarks]=useState([95,40,33,56]);


  function changeKing() {
    setKing('Abdullah');
  }
  function changeQueen() {
    setQueen('Nalla hai Abdullah');
  }
  function changeVal() {
    let nextVal = Math.floor(Math.random() * 100)
    setVal(nextVal);
  }

  return (
    <div>
      <div id='one'>
        <h1>
          {num}
        </h1>
        <button onClick={() => {
          setNum(num + 1);
        }}>
          Increase Value
        </button>

        <button onClick={() => {
          setNum(num - 1);
        }}>
          Decrease Value
        </button>
      </div>


      <div id='two'>
        <h1>
          {king}
        </h1>
        <button onClick={changeKing}>
          Change King
        </button>

        <h1>
          {queen}
        </h1>
        <button onClick={changeQueen}>
          Change Queen
        </button>


      </div>


      <div id='three'>
        <h1>{val}</h1>
        <button onClick={changeVal}>Ghapla kardo</button>
      </div>

      <div id='four'>
        <h1>{users[user]}</h1>
        <button onClick={() => {
          user < users.length - 1 ? setUser(user + 1) : alert("Out of index");
        }}>Ghapla Time baby </button>
      </div>

      <div id='five'>
        {
          marks.map(function(elem,idx){
            return <h1>Marks of {idx+1} is {elem}  {elem<40?'FAIL':'PASS'}</h1>
          })}
          <button onClick={()=>{
              let newMarks=marks.map(function(elem){
                if(elem>95){
                  return 100;
                }
                else if(elem>35 && elem<40){
                  return 40;
                }
                else{
                  return elem+5;
                }
                
              })
              setMarks(newMarks);
          }}>Grace Dedo bhai gareeb ku </button>
      </div>


    </div>
  )
}

export default App
