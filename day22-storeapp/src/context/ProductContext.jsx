import React, { useEffect } from 'react'
import axios from 'axios'
import { createContext } from 'react-router-dom';
export const ProductContextProvider=createContext()
const ProductContext = (props) => {
  async function getData() {
    let data = await axios.get('https://fakestoreapi.com/products/');
    console.log(data);
  }
  useEffect(function () {
    getData()
  }, [])
  
  return (
    <div>
      <ProductContextProvider.Provider>
      {props.children}
      </ProductContextProvider>
    </div>
  )
}

export default ProductContext
