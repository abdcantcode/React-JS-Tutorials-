import React, { useContext } from 'react'
import { ProductContextProvider } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Products = () => {
  let ProductData=useContext(ProductContextProvider)
  
  return (
    <div className='product-container'>
      {ProductData.map(function(elem,idx){
        return <Link href="" key={idx} target='_blank' to={`/product/${elem.id}`}>
          <div className='product'>
            <img src={elem.image} alt="" />
          <h1>{elem.title}</h1>
          </div>
        </Link>
      })}
    </div>
  )
}

export default Products
