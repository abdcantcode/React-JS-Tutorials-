import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Koder from './pages/Koder'
import Kodex from './pages/Kodex'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}>
        {/*Nested routing aisa karna rehta aur contact page mein <Outlet/> rakhna padhta*/}
          <Route path='/contact/kodex' element={<Kodex/>}/>
          <Route path='/contact/koder' element={<Koder/>}/>
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
