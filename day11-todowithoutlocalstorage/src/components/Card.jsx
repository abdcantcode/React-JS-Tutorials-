import React from 'react'

const Card = (props) => {
  
  
  return (
    <div className='flex flex-col gap-3 h-fit w-[22%] bg-white rounded-lg items-center py-4'>
        <img className='object-cover object-center rounded-[50%] w-[80px] h-[80px] ' src={props.info.url} alt="" />
        <h3 className='text-[18px] font-bold'>{props.info.name}</h3>
        <h4 className='text-blue-400 font-semibold'>{props.info.profession}</h4>
        <p className='text-sm text-center'>{props.info.desc}
        </p>
        <button onClick={()=>{
          props.handler(props.id)
        }} className='bg-red-500 px-4 text-white active:scale-90 font-bold py-2 rounded-lg'>Remove</button>
      </div>
  )
}

export default Card
