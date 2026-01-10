import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigator=useNavigate()
  return (<>
    <div className='flex justify-center items-center text-3xl h-screen'>
      <h1>HOME PAGE</h1>
      </div>
      <div className='w-full h-15 bottom-0 bg-emerald-600 flex justify-center item-center py-2'>
        <button className='border-2 border-black px-2 rounded-lg bg-red-500'onClick={()=>{
          navigator('/contact');
        }}
        >Explore Courses</button>
      
    </div>
    </>
  )
}

export default Home
