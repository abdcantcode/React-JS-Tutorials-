import React from 'react'
import Image1Card from '../../ui/cards/Image1Card'
import IndependentDesigners from '../../ui/cards/IndependentDesigners'
import ExclusiveCard from '../../ui/cards/ExclusiveCard'

const Grid1 = () => {
  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-6 p-10  '>
      <Image1Card/>
      <IndependentDesigners/>
      <ExclusiveCard/>
      
      
    </div>
  )
}

export default Grid1
