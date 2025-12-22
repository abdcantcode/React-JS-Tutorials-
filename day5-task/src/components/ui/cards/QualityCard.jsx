import React from 'react'
import LearnMoreDiv from '../learn more div/LearnMoreDiv'

const QualityCard = () => {
  return (
    <div className='flex gap-8 flex-col bg-[#303030] p-7 rounded-lg flex-1'>
      <h2 className='text-white font-extralight text-[20px]'>QUALITY</h2>
      <h4 className='text-white text-[14px]'>Experience unparalleled craftsmanship and attention to detail</h4>
      <LearnMoreDiv />
    </div>
  )
}

export default QualityCard
