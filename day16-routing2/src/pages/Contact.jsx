import React from 'react'
import { Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div><div className='flex justify-between px-5 items-center bg-blue-500 gap-5 h-10'>
    <h1>SALE IS LIVE</h1>
    <h1>SALE IS LIVE</h1>
    <h1>SALE IS LIVE</h1>
    <h1>SALE IS LIVE</h1>
    <h1>SALE IS LIVE</h1>
    <h1>SALE IS LIVE</h1>
    <h1>SALE IS LIVE</h1>
    <h1>SALE IS LIVE</h1></div>
      <Outlet/>
    </div>
    
  )
}

export default Contact
