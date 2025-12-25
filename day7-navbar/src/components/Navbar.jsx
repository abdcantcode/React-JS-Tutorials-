import React from 'react'

const Navbar = (props) => {
  
  return (
    
    <div style={{backgroundColor:props.color}}
    className='w-full h-15 flex bg-red-500 gap-5 items-center justify-center my-10'>
       {/* /* <h1>Home</h1>
      <h1>About </h1>
      <h1>Contact Us</h1>
      <h1>Nothing</h1> */  }
      {/*Aisa likhne ke badle array iterate kar utne navbars print */}
      {
        props.list.map(function(elem,idx){
          return <h1 key={idx}>{elem}</h1>;{/*Yeh daldiye toh woh key waala error nai aata*/}
        })
      }
        </div>
  )
}

export default Navbar

