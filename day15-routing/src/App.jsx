import { Routes,Route } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Routes>
        <Route to='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
