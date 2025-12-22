import React from 'react'
import ExploreDiv from '../explore div/ExploreDiv'

const ExclusiveCard = () => {
  return (
    <div className='p-10 rounded-lg bg-[#303030] flex gap-6 text-white  row-span-1'>
      <div className='flex flex-col gap-6'>
        <h1 className='font-normal text-[20px]'>EXCLUSIVE & UNIQUITY</h1>
        <p className='font-light text-[12px]'>Indulge in curated collections showcasing exclusive, one-of-a-kind pieces, each with its own story and charm. Experience the allure of unique fashion pieces that radiate sophistication and individuality, curated for those who seek exclusivity.</p>
      </div>
      <div className='flex justify-center items-end'>
        <ExploreDiv />
      </div>

    </div>
  )
}

export default ExclusiveCard
