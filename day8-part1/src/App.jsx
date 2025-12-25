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
  let [num,setNum]=useState(0);
  
  return (
    <div>
      <h1>
        {num}
      </h1>
      <button onClick={()=>{
        setNum(num+1);
      }}>
        Increase Value
      </button>

      <button onClick={()=>{
        setNum(num-1);
      }}>
        Decrease Value
      </button>
    </div>
  )
}

export default App
