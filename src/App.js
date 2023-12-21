import "./App.css";
import Home from "./Components/Home";
import Planners from "./Components/Planners";
import Shirts from "./Components/Shirts";

import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Mugs from "./Components/Mugs";

function App() {
  return (
    <div className="App">
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

export default App;