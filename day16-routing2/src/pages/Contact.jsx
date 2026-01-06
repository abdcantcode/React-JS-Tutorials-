import React from 'react'
import { Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='flex justify-center items-center text-3xl h-[100vh]'>
      <h1>CONTACT PAGE</h1>
      <Outlet/>
    </div>
  )
}

export default Contact
