import React from 'react'
import LearnMore from '../../ui/buttons/LearnMore'
import LearnMoreDiv from '../../ui/learn more div/LearnMoreDiv'

const Hero = () => {
  return (
    <div className='  rounded-lg flex items-center justify-center h-screen w-screen py-2 relative'>
      <img className='object-cover rounded-lg w-[98%] h-[98%]'
      src ="https://images.unsplash.com/photo-1527843812948-a8c2ddd2fb68?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <h1 className='text-white absolute left-20 font-extralight tracking-widest text-[100px]
      bottom-75'>DESIGN</h1>
      <h1 className='text-white absolute left-55 bottom-50 font-extralight tracking-widest text-[100px] '>& FREEDOM</h1>
      <p className='text-white absolute left-25 bottom-20 font-light'>Explore Independent Style by Embracing Uniqueness </p>
      <p className='text-white absolute left-25 bottom-15 font-light'>with Our Exclusive Designer Apparel</p>
      <div className='text-white absolute bottom-15 right-15'>
        <LearnMoreDiv />
      </div>
      
      

    </div>
  )
}

export default Hero
