import React from 'react'

const Card = (props) => {
  console.log();
  return (

    
    <div className='bg-white w-full h-full px-10 py-10 '>
      <div className='w-55 bg-white rounded-3xl h-75 pt-0.5 relative shadow-[0_15px_40px_rgba(0,0,0,0.15)]'>

        <div className='w-[98%] h-[37%] rounded-3xl bg-red-600 m-auto'>
          <img className='w-full h-full object-center object-cover rounded-3xl  ' src={props.user.coverPhoto} alt="" />
        </div>

        <div className='rounded-full h-17 w-17 bg-red-300 border-4 border-white absolute top-[23%] left-[50%] translate-x-[-50%]'>
          <img className='h-full w-full object-cover object-center rounded-full' src={props.user.profilePhoto} alt="" />
        </div>

        <div className='text-center mt-10'>
          <h4 className=' font-mono font-bold text-lg'>{props.user.name}</h4>
          <p className='text-[10px] mx-4 font-light'>
            {props.user.role}
          </p>
        </div>

        <div className='rounded-full h-8 w-8 absolute top-2 right-2 bg-white flex justify-center items-center'>
          <i className="ri-add-line"></i>
        </div>

        <div className='flex gap-3 justify-center mt-4 text-center bg-gray-50 rounded-2xl'>
          <div >
            <h3 className='font-mono font-bold'>{props.user.likes}</h3>
            <p className='text-[10px] mx-4 font-light'>Likes</p>
          </div>

          <div >
            <h3 className='font-mono font-bold'>{props.user.posts}</h3>
            <p className='text-[10px] mx-4 font-light'>Posts</p>
          </div>

          <div >
            <h3 className='font-mono font-bold'>{props.user.views}</h3>
            <p className='text-[10px] mx-4 font-light'>Views</p>
          </div>
        </div>

        <div className='flex absolute bottom-0.5 w-full justify-center items-center gap-5 font-semibold text-xl'>
          <i className="ri-instagram-line"></i>
          <i className="ri-twitter-x-line"></i>
          <i className="ri-threads-line"></i>
        </div>

      </div>
    </div>
  )
}

export default Card
