import React, { useState } from 'react'
import './index.css'
const App = () => {

  const [name,setName]=useState('');
  const [profession,setProfession]=useState('');
  const [url,setUrl]=useState('');
  const [desc,setDesc]=useState('');
  let [details,setDetails]=useState([]);

  function submitHandler(e){
    e.preventDefault(); //Preventing default form behaviour

    let copyofdetails=[...details];
    copyofdetails.push({name,profession,url,desc})
    setDetails(copyofdetails);
    console.log(copyofdetails);



    setName('');  //After submission making those input tags go blank
    setProfession('');
    setDesc('');
    setUrl('');

  }


  return (
    <div className='w-full p-5 bg-black h-full flex flex-col'>
      <form className='flex gap-2 flex-wrap w-fit  w-full' onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input className='border-2 w-[49%] border-white text-white rounded-lg p-2'  type="text" 
        onChange={(e)=>{
          setName(e.target.value);
        }}
        value={name}
        placeholder='Enter your name'
        required/>

        <input className='border-2 border-white text-white w-[49%] rounded-lg p-2' type="text" 
        onChange={(e)=>{
          setProfession(e.target.value);
        }}
        value={profession}
        placeholder='Enter your profession'
        required/>

        <input className='border-2 border-white text-white w-[49%] rounded-lg p-2' type="text" 
        onChange={(e)=>{
          setUrl(e.target.value);
        }}
        value={url}
        placeholder='Enter your Image URL'
        required/>

        <input className='border-2 border-white text-white w-[49%] rounded-lg p-2' type="text" 
        onChange={(e)=>{
          setDesc(e.target.value);
        }}
        value={desc}
        placeholder='Enter your description'
        required/>

        <button className='bg-emerald-500 px-16 py-2 rounded-lg font-bold active:scale-95 m-auto'>Submit</button>
      </form>
        <div className='flex gap-2 my-3'>

        

      <div className='flex flex-col gap-3 h-fit w-[22%] bg-white rounded-lg items-center py-4'>
        <img className='object-cover object-center rounded-[50%] w-[80px] h-[80px] ' src="https://images.pexels.com/photos/15260732/pexels-photo-15260732.jpeg" alt="" />
        <h3 className='text-[18px] font-bold'>Abdullah Aajaz</h3>
        <h4 className='text-blue-400 font-semibold'>Developer</h4>
        <p className='text-sm text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, magni?
        </p>
        <button className='bg-red-500 px-4 text-white active:scale-90 font-bold py-2 rounded-lg'>Remove</button>
      </div>
      



        </div>
      
      

    </div>
  )
}

export default App
