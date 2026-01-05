import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Kuchbhi from "./pages/Kuchbhi";
import KuchBhiNahi from "./pages/KuchBhiNahi";

const App = () => {
  return (
    <div>
      <div className="w-screen bg-amber-700 flex justify-between items-center h-10 px-10">
        {/* <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/">Home</a>
        <a href="/contact">Contact</a> 
        Iski wajah se refresh hota*/ }
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects/>}/>
        {/*Ismein tum /projects/men bolke bhi bana sakte */}
        <Route path='/about/:id' element={<Kuchbhi/>}/>
        <Route path='/projects/:bgn' element={<KuchBhiNahi/>}/>
        <Route path='/projects/:bgn/aalu' element={<KuchBhiNahi/>}/>
        {/*Idhar bas beech ka bgn ich hai dynamic */}
      </Routes>
    </div>
  );
};

export default App;
