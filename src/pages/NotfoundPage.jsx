import Navbar from "../components/Navbar";
import Footer from "../components/Footer";




function NotfoundPage() {
 
  return (
    <div className=" bg-thirdColor">
        <Navbar/> 

        <div className="flex justify-center items-center mt-10 flex-col mb-44">
        
          <h1 className="block text-7xl font-bold font-Reem text-seconadryColor mt-32">404</h1>
          <h1 className="block text-3xl font-medium  font-Montserrat text-seconadryColor mt-6 text-center px-8  mb-48">Page Non Trouvée</h1>
         
        </div>
        

        
        <Footer/>
    </div>
  
  );
}

export default NotfoundPage;
