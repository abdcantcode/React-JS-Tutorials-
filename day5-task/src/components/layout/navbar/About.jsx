import React from 'react'
import AboutCard from '../../ui/cards/AboutCard'
import HeroImage from '../../ui/cards/HeroImage'

const About = () => {
  return (
    <div className='grid grid-cols-2 w-full gap-5 px-5'>
      <AboutCard/>
      
      <HeroImage/>
    </div>
  )
}

export default About
