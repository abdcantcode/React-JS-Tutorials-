import React, { useState } from 'react'
import './index.css'
import Card from './components/Card';
const App = () => {

  const [name,setName]=useState('');
  const [profession,setProfession]=useState('');
  const [url,setUrl]=useState('');
  const [desc,setDesc]=useState('');

  let localdata=JSON.parse(localStorage.getItem('user-data')) || []
  console.log(localdata);
  let [details,setDetails]=useState(localdata);

  function submitHandler(e){
    e.preventDefault(); //Preventing default form behaviour

    let finalDetails=[...details];
    finalDetails.push({name,profession,url,desc});
    
    setDetails(finalDetails)
    localStorage.setItem('user-data',JSON.stringify(finalDetails));

    setName('');  //After submission making those input tags go blank
    setProfession('');
    setDesc('');
    setUrl('');
    console.log(details);

  }
  function handleRemove(idx){
    let copyofdetails=[...details];

    let conf=confirm("PAKKA DELETE KARDU KYA LALA");
    if (conf){
      copyofdetails.splice(idx,1);
    }
    else{
      alert("NOT DELETED");
    }
    
    setDetails(copyofdetails);
    localStorage.setItem('user-data',JSON.stringify(copyofdetails));
    
  }


  return (
    <div className='w-full p-5 bg-black h-full flex flex-col'>
      <form className='flex gap-2 flex-wrap  w-full' onSubmit={(e)=>{
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
          {details.map(function(elem,idx){
            return <Card handler={handleRemove} id={idx} key={idx}  info={elem}/>
          })}
       </div>
      
      

    </div>
  )
}

export default App
