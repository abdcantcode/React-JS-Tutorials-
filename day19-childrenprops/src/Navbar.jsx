import React from 'react'

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <h1>Yeh hai navbar ka proper content</h1>
      {props.children}
    </div>
  )
}

export default Navbar
