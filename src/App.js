
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbars from './Components/Navbars';
import Section1 from './Components/Section1';
import Footer from './Components/Footer';
import About from './Components/About';
import Pics from './Components/Pics';
import Contact from './Components/Contact';
function App() {
  return (
   <>
   <Navbars/>
   {/* <Section1/> */}
   {/* <About/> */}
   {/* <Pics/> */}
   {/* <Contact/> */}
   {/* <Footer/> */}
   <Routes>
      <Route path="/" element = {<Section1 />} />
      <Route path= "/about" element = {<About />} />
      <Route path= "/pics" element = {<Pics />} />
      <Route path= "/contact" element = {<Contact />} />
  </Routes>
   </>
  );
}

export default App;
