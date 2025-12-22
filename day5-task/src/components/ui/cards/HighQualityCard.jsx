import React from 'react'
import ExploreDiv from '../explore div/ExploreDiv'
const HighQualityCard = () => {
  return (
    <div className='p-10 rounded-lg bg-[#303030] flex gap-6 text-white  '>
      <div className='flex flex-col gap-6'>
        <h1 className='font-normal text-[20px]'>HIGH QUALITY</h1>
        <p className='font-light text-[12px]'>Embrace superior craftsmanship with our meticulously curated,
enduringly high-quality garments. Discover garments crafted
with utmost attention to detail and finest materials, promising
longevity and timeless style.</p>
      </div>
      <div className='flex justify-center items-end'>
        <ExploreDiv />
      </div>

    </div>
  )
}

export default HighQualityCard
