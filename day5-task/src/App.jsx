import DummyTypaSection from "./components/layout/navbar/DummyTypaSection"
import Grid1 from "./components/layout/navbar/Grid1"
import Grid2 from "./components/layout/navbar/Grid2"
import InformationSection from "./components/layout/navbar/InformationSection"
import Navbar from "./components/layout/navbar/Navbar"
import Image1Card from "./components/ui/cards/Image1Card"
import IndependentDesigners from "./components/ui/cards/IndependentDesigners"
import ClientsDiv from "./components/ui/info div/ClientsDiv"
import DesignersDiv from "./components/ui/info div/DesignersDiv"
import MasterPieces from "./components/ui/info div/MasterPieces"
import Hero from "./components/layout/navbar/Hero"
import AboutCard from "./components/ui/cards/AboutCard"
import About from "./components/layout/navbar/About"


const App = () => {
  return (
    <div className="bg-black">
      
       <Navbar/>
       <Hero/>
       <InformationSection/>
       <DummyTypaSection/>

      <About/>
      <Grid1/>
    </div>
  )
}

export default App
