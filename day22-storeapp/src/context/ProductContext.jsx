import React, { useEffect } from 'react'
import axios from 'axios'
const ProductContext = () => {
  async function getData() {
    let data = await axios.get('https://fakestoreapi.com/products/');
    console.log(data);
  }
  useEffect(function () {
    getData()
  }, [])
  return (
    <div>

    </div>
  )
}

export default ProductContext
