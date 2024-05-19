import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame from "./pages/Frame"; //pahle ka Navbar
import MacBookPro162 from "./pages/MacBookPro162";
import VideoPlayerR from "./components/VideoPlayerR";
import "./Home.css";
import BrandWala from "./components/BrandWala";
import AboutBrand from "./components/AboutBrand";
// import MacBookPro16 from "./components/MacBookPro16";
import MacBookPro16 from './pages/MacBookPro16'
import ImageSlid from "./components/ImageSlid";
import MiniSlider from './components/MiniSlider'
import Display from "./Newslider/components/pages/Display";
import MacBookPro1631 from './components/Industry/MacBookPro1631'
import Frame1 from './Slide/Frame1'
import Home from './Home'
import About from "./About";
import OurBrands from "./OurBrands";
import Navbar from './Navbar'
import NeedFranchise from "./NeedFranchise";
import MainGallery from './MainGallery'
import Contact from "./Contact";
function App() {
  return (
    <>
  <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/aboutUs" element={<About/>} />
    <Route path="/ourBrands" element={<OurBrands/>} />
    <Route path="/Need-franchise" element={ <NeedFranchise/>  } />
    <Route path="/gallery" element={ <MainGallery/>  } />
    <Route path="/contact-Us" element={ <Contact/>  } />
  </Routes>
  <Frame1/>
    </>
  );
}
export default App;
