import React from 'react'
import axios from 'axios'
const App = () => {

  async function renderData(){
    let response= await axios.get('https://picsum.photos/v2/list?page=2&limit=10');//{data} bolke bhi le sakte destructuring basically 
    console.log(response.data);

  }

  return (
    <div>
      <button onClick={renderData}>Get Data</button>
    </div>
  )
}

export default App
