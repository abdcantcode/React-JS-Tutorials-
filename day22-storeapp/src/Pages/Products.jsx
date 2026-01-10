import React, { useContext } from 'react'
import { ProductContextProvider } from '../context/ProductContext'

const Products = () => {
  let ProductData=useContext(ProductContextProvider)
  console.log(ProductData)
  return (
    <div className='product-container'>
      {ProductData.map(function(elem){
        return <a href="">
          <div className='product'>
            <img src={elem.image} alt="" />
          <h1>{elem.title}</h1>
          </div>
        </a>
      })}
    </div>
  )
}

export default Products
