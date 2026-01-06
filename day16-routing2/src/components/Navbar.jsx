import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-red-500 flex w-full justify-between px-10 gap items-center h-10'>
      <NavLink 
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  HOME
</NavLink>
      <NavLink 
  to="/about"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  ABOUT US
</NavLink>
<NavLink 
  to="/contact"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  CONTACT US
</NavLink>
      
    </div>
  )
}

export default Navbar
