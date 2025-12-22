import React from 'react'

const AboutCard = () => {
  return (
    <div className='bg-[#303030] rounded-lg  flex flex-col gap-7 p-5'>
      <h4 className='tracking-tighter text-white'>ABOUT</h4>
      <h1 className='text-[40px] text-white'>
        WHERE FASHION MEETS FREEDOM
      </h1>
      <div className='flex gap-10'>
        <p className='font-extralight opacity-75 text-[12px] text-white'>We believe that fashion should be
          an expression of individuality. We encourage
          creativity and originality in every item we
          offer, presenting customers with exclusive
          collections from independent designers.
          With a commitment to fostering
          a community of creativity and innovation,</p>
        <p className='font-extralight opacity-75 text-[12px] text-white'>we strive to connect designers with fashion
          enthusiasts who appreciate the artistry and
          individuality behind each piece. Driven
          by our dedication to authenticity, we curate
          each collection with a keen eye for unique
          designs that inspire confidence and
          self-expression.</p>
      </div>
    </div>
  )
}

export default AboutCard
