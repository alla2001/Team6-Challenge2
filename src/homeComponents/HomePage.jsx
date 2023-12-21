import "../homeStyle.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Planners from "./Planners";
import Shirts from "./Shirts";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "./Footer";
import Mugs from "./Mugs";

function HomePage() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Shirts />
      <Planners />
      <Mugs />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;