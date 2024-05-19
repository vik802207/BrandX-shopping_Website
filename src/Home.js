import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame from "./pages/Frame";
import MacBookPro162 from "./pages/MacBookPro162";
import VideoPlayerR from "./components/VideoPlayerR";
import "./Home.css";
import BrandWala from "./components/BrandWala";
import AboutBrand from "./components/AboutBrand";
// import MacBookPro16 from "./components/MacBookPro16";
import MacBookPro16 from "./pages/MacBookPro16";
import ImageSlid from "./components/ImageSlid";
import MiniSlider from "./components/MiniSlider";
import Display from "./Newslider/components/pages/Display";
import MacBookPro1631 from "./components/Industry/MacBookPro1631";
import Indust from "./components/Industry/pages/Indust";
import Bran from './Strong/pages/Bran'
import Brand from './Strong/Brandwala/pages/Bran'
function Home() {
  return (
    <>
      <VideoPlayerR />
      <div className="Space"></div>
      <MacBookPro162 />
      <div className="Space"></div>
      <div className="Brand">
        <BrandWala />
      </div>
      <Brand/>
      <MiniSlider />
      <Display />

      <Indust />
    </>
  );
}
export default Home;
