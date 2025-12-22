import DummyTypaSection from "./components/layout/navbar/DummyTypaSection"
import Grid1 from "./components/layout/navbar/Grid1"

import InformationSection from "./components/layout/navbar/InformationSection"
import Navbar from "./components/layout/navbar/Navbar"

import Hero from "./components/layout/navbar/Hero"

import About from "./components/layout/navbar/About"
import Grid2 from "./components/layout/navbar/Grid2"


const App = () => {
  return (
    <div className="bg-black">
      
      
      <Navbar/>
      <Hero/>
      <InformationSection/>
      <DummyTypaSection/>
      <About/>
      <h1 className="ml-10 mt-10 text-white text-[30px]">OUR ADVANTAGES</h1>
      <Grid1/>
      <Grid2/>
      
      
    </div>
  )
}

export default App
