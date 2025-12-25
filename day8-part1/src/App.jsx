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
        }}>Ghapla Time baby</button>
      </div>

      <div id='five'>

      </div>


    </div>
  )
}

export default App
