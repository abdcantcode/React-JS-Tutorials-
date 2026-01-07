import React, { useContext } from 'react'
import { PostDataContext } from './context/PostContext'
  

const App = () => {
  let data=useContext(PostDataContext)
  return (
    <div>
      <h1>HELLO GUYS {data}</h1>
    </div>
  )
}

export default App
