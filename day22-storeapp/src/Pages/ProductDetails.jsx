import React, { useContext } from 'react'
import { ProductContextProvider } from '../context/ProductContext'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  let data=useContext(ProductContextProvider);
  let id=useParams();
  console.log(data);
  console.log(id);
  console.log(data[0])
  return (
    <div>
      <h1></h1>
      
    </div>
  )
}

export default ProductDetails
