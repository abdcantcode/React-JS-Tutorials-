import React from 'react'
import LeftNav from '../../ui/left/LeftNav'
import RightNav from '../../ui/right/RightNav'

const Navbar = () => {
  return (
    <div className='padding flex justify-between p-3 items-center'>
      <LeftNav />
      <RightNav />
    </div>
  )
}

export default Navbar
