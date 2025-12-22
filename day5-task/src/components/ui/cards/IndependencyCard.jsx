import React from 'react'
import LearnMoreDiv from '../learn more div/LearnMoreDiv'

const IndependencyCard = () => {
  return (
    <div className='flex gap-8 flex-col bg-[#303030] p-7 rounded-lg flex-1'>
      <h2 className='text-white font-extralight text-[20px]'>INDEPENDENCY</h2>
      <h4 className='text-white text-[14px]'>Explore the creativity of independendent designers from around the globe</h4>
      <LearnMoreDiv />
    </div>
  )
}

export default IndependencyCard
