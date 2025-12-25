import React from 'react'

const Box = (props) => {
  const color=props.type==='Male'?'blue':(props.type==='Other')?'conic-gradient(red,blue,pink,green,yellow,orange,black,red)':'pink'
  return (


    <div style={{background:color}} className='gendercard'>
      <h1>{props.type}'s Washroom</h1>
    </div>
  )
}

export default Box
