import React from 'react'
import ExploreDiv from '../explore div/ExploreDiv'
const EcoCard = () => {
  return (
    <div className='p-10 rounded-lg bg-[#303030] flex gap-6 text-white  '>
      <div className='flex flex-col gap-6'>
        <h1 className='font-normal text-[20px]'>ECO-FRIENDLY</h1>
        <p className='font-light text-[12px]'>Join our commitment to sustainability with eco-friendly fashion options,
stylish yet mindful of our planet. Explore guilt-free shopping with our
eco-conscious collections, crafted with planet-friendly materials and
ethical practices.</p>
      </div>
      <div className='flex justify-center items-end'>
        <ExploreDiv />
      </div>

    </div>
  )
}

export default EcoCard
