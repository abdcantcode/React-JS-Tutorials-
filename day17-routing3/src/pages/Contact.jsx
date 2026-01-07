import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <div className='flex justify-between px-5 items-center bg-blue-500 gap-5 h-10'>
        <h1>SALE IS LIVE</h1>
        <h1>SALE IS LIVE</h1>
        <h1>SALE IS LIVE</h1>
        <h1>SALE IS LIVE</h1>
        <h1>SALE IS LIVE</h1>
        <h1>SALE IS LIVE</h1>
        <h1>SALE IS LIVE</h1>
        <h1>SALE IS LIVE</h1>
      </div>
      
      {/* Add these navigation links */}
      <div className="flex gap-4 p-4">
        <Link to="/contact">All Courses</Link>
        <Link to="/contact/koder">Koder</Link>
        <Link to="/contact/kodex">Kodex</Link>
      </div>
      
      <Outlet/>
    </div>
  )
}

export default Contact