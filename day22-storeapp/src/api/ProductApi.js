import axios from 'axios'
export async function getData() {
    let apidata = await axios.get('https://fakestoreapi.com/products/')
    return apidata.data;
  }