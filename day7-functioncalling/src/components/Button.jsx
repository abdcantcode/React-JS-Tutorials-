import React from 'react'

const Button = () => {
  function clicked(){
    alert('Button dabara aaaaaa');
  }
  return (
    <div className='bg-emerald-500 h-10 w-20 mx-10 my-10 active:scale-90 ' onClick={clicked}>
      
      <h1 > Button</h1>
    </div>
  )
}

export default Button
