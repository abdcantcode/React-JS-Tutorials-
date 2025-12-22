import React from 'react'
import Image2Card from '../../ui/cards/Image2Card'
import HighQualityCard from '../../ui/cards/HighQualityCard'
import EcoFriendlyCard from '../../ui/cards/EcoFriendlyCard'

const Grid2 = () => {
  return (
    <div className='grid grid-cols-2 auto-rows-fr gap-6 p-10'>
      <Image2Card/>
      <HighQualityCard/>
      
      
      <EcoFriendlyCard/>
      
    </div>
  )
}

export default Grid2
