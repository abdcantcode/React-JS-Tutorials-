import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <div>
      <div className="w-screen bg-amber-700 flex justify-between items-center h-10 px-10">
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </div>
  );
};

export default App;
