import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { createContext } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const ProductContextProvider = createContext()

const ProductContext = (props) => {
  let [productData,setProductData]=useState([]);
  async function getData() {
    let apidata = await axios.get('https://fakestoreapi.com/products/')
    
    
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <ProductContextProvider.Provider value={productData}>
      {props.children}
    </ProductContextProvider.Provider>
  )
}

export default ProductContext
