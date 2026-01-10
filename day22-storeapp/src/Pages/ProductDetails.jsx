import React, { useContext } from 'react'
import { ProductContextProvider } from '../context/ProductContext'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  let data=useContext(ProductContextProvider);
  let params=useParams();
  console.log(data);
  console.log(params);
  console.log(data[0])
  return (
    <div>
      <h1>{data.map(function(elem,idx){
        if((idx+1)===params)return <h1 key={idx}>{elem.title}</h1>
        else return null
      })}</h1>
      
    </div>
  )
}

export default ProductDetails
