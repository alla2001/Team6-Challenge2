import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Shirts from "../components/Shirts";
import Planners from "../components/Planners";
import Mugs from "../components/Mugs";
import Testimonial from "../components/Testimonial";
import Questions from "../components/Questions";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";



function HomePage() {
  const  {state} = useLocation();
  return (
    <div className=" bg-thirdColor">
        <Navbar prop={state}/>
        <Home />
        <Shirts />
        <Planners />
        <Mugs />
        <Testimonial />
        <Questions />
        <Footer/>
    </div>
  
  );
}

export default HomePage;
