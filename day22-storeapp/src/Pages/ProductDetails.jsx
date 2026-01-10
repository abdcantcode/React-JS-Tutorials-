import React, { useContext } from 'react'
import { ProductContextProvider } from '../context/ProductContext'

const ProductDetails = () => {
  let data=useContext(ProductContextProvider);
  
  return (
    <div>
      <h1>Product ke details</h1>
      {/* {datasetter(data)} */}
      <h1>{data}</h1>
    </div>
  )
}

export default ProductDetails
