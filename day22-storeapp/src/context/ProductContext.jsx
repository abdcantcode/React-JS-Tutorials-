import React, { useEffect } from 'react'
import axios from 'axios'
import { createContext } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const ProductContextProvider = createContext()

const ProductContext = (props) => {

  async function getData() {
    let data = await axios.get('https://fakestoreapi.com/products/')
    console.log(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <ProductContextProvider.Provider>
      {props.children}
    </ProductContextProvider.Provider>
  )
}

export default ProductContext
