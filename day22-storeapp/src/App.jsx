import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import ProductDetails from './Pages/ProductDetails'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>

      </Routes>
    </div>
  )
}

export default App
