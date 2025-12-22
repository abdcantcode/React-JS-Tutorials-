import React from 'react'
import ExploreDiv from '../explore div/ExploreDiv'

const IndependentDesigners = () => {
  return (
    <div className='p-10 rounded-lg bg-[#303030] flex gap-6 text-white  row-span-1'>
      <div className='flex flex-col gap-6'>
        <h1 className='font-normal text-[20px]'>INDEPENDENT DESIGNERS</h1>
        <p className='font-light text-[12px]'>Our platform celebrates the ingenuity of independent designers, offering a diverse range of fashion-forward garments that reflect the creativity and innovation of the artists behind them. Explore curated collections showcasing unique creations by independent designers.</p>
      </div>
      <div className='flex justify-center items-end'>
        <ExploreDiv />
      </div>

    </div>
  )
}

export default IndependentDesigners
