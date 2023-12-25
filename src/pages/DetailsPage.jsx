import { useState  , useEffect } from "react";
import { useParams ,useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function DetailsPage() {

  const Navigate = useNavigate();

  const { name, price, description, image } = useParams();
  const [count, setCount] = useState(1);
  const [selectedButton, setSelectedButton] = useState(1);
  const [selectedSize , setselectedSize ] = useState("S");
  let selectedProduct  = [];


  const retrieveTableData = () => {
    const storedData = localStorage.getItem('cartProducts');
    if (storedData) {
      selectedProduct = JSON.parse(storedData);
    }
  };
  
  const handleSubmitProduct =() =>{
    retrieveTableData();
    if (shouldRenderComponent){
      selectedProduct.push({name , price ,image , count ,selectedSize });
    }else{
      selectedProduct.push({name , price , image , count });
    }
   
    localStorage.setItem('cartProducts',JSON.stringify(selectedProduct));
  
  Navigate("/cart");
  
  };
  const handleClick = (index) => {
    
      setSelectedButton(index === selectedButton ? 1 : index);
      let currentValue = index === selectedButton ? 1 : index;
      setselectedSize(sizes[currentValue]);
      
    
   
  };

  const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];

  const increment = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };


  const shouldRenderComponent = !name.includes('Planner') && !name.includes('Mug');

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className=" bg-thirdColor">
    <Navbar/>
      <div className="bg-thirdColor min-h-screen xl:mt-16">

          <div className="container mx-auto w-full px-3 pt-20 lg:pt-6 flex flex-wrap items-center ">

             <div className="mt-15 flex-fluid flex flex-col items-center">
               <div className="inline-block w-full lg:w-[32rem]  mx-auto rounded-2xl border border-seconadryColor border-md overflow-hidden bg-[#D3D3D3]">
               <img src={image} alt="image_of_t-shirt" className="w-full h-full object-cover" />
               </div>
             </div>
        

        <div className="flex-fluid ml-4 mb-10 ">
         <h3 className="font-bold text-seconadryColor mt-3">{name}</h3>
         <h4 className="font-semibold mt-4 text-seconadryColor">{price}DA</h4>
         <p className="mt-3 text-seconadryColor">{description}</p>   
        <div>
        {shouldRenderComponent && (
          <>
        <h3 className="font-medium text-seconadryColor mt-4">Taille :</h3>
         <div className="flex items-center gap-7 mt-4">
      {sizes.map((size, index) => (
        <button
          key={index}
          className={`w-10 h-10 rounded-full ${
            selectedButton === index ? 'bg-primaryColor' : 'bg-seconadryColor'
          }`}
          onClick={() => handleClick(index)  }
        >
          <span className="text-white">{size}</span>
        </button>
      ))}
    </div>
        <div className="h-1 bg-seconadryColor w-[315px] rounded-full mt-4"></div>
        </>)}
        </div>
        <h3 className="font-medium text-seconadryColor mt-4">Quantité :</h3>
        <div className="flex  items-center gap-7 mt-4">
            <button className="w-10 h-10 bg-seconadryColor rounded " onClick={decrement} ><span className="text-white">-</span></button>
            <h3 className="font-medium text-seconadryColor mt-4 mb-3">{count}</h3>
            <button className="w-10 h-10 bg-seconadryColor rounded" onClick={increment} ><span className="text-white">+</span></button>
        </div>
        <button onClick={() => handleSubmitProduct()}  className=" bg-primaryColor  mt-4 font-Reem  transition duration-200 flex items-center justify-center h-16 w-80 hover:bg-[#062D4C] hover:text-primaryColor  focus:outline-none rounded-full text-lg font-semibold text-seconadryColor"><span>Ajouter Au Panier</span></button>
        </div>
        </div>
        </div>
        <Footer/>
        </div>
  )
}

export default DetailsPage
