import React from 'react'
import AboutCard from '../../ui/cards/AboutCard'
import HeroImage from '../../ui/cards/HeroImage'

const About = () => {
  return (
    <div className='grid grid-cols-2 w-screen gap-5 p-5'>
      <AboutCard/>
      
      <HeroImage/>
    </div>
  )
}

export default About
