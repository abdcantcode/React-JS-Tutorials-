import React from 'react'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className='h-full w-full '>
      <Navbar color="red" list={['Aalu','Bhendi','Baigan','Kaddu']}/>
    <Navbar color="blue" list={['Banana','Mango','Apple']}/>
    <Navbar color="yellow" list={['Abdul aziz','Saleem','Zeeshan','Aamer']}/>
    </div>
  )
}

export default App
