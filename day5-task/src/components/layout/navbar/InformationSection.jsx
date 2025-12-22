import React from 'react'
import IndependencyCard from '../../ui/cards/IndependencyCard'
import UniquityCard from '../../ui/cards/UniquityCard'
import QualityCard from '../../ui/cards/QualityCard'
import SustainabilityCard from '../../ui/cards/SustainabilityCard'

const InformationSection = () => {
  return (
    <div className='flex gap-2  w-full p-3'>
      <IndependencyCard />
      <UniquityCard />
      <QualityCard />
      <SustainabilityCard />
    </div>
  )
}

export default InformationSection
