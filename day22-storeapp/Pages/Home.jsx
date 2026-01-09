import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigator=useNavigate();
  return (
    <div className='home'>
      <h1>Welcome to our Store</h1>
      <button onClick={()=>{
        navigator('/product');
      }}>Show All Products</button>
    </div>
  )
}

export default Home
