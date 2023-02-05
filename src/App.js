import { Route, Routes } from "react-router-dom";
import About from "./components/About";
// import Flipkart from "./components/Clone/Flipkart";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
// import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route element={ <Hero />} path="/" exact/>
        <Route element={ <Contact />} path="/contact" exact/>
        <Route element={ <About />} path="/about" exact/>
        <Route element={ <Portfolio />} path="/portfolio" exact/>
        <Route element={ <Portfolio />} path="/portfolio" exact/>
       
     </Routes>
      <Footer />
    </div>
  );
}

export default App;
