import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Panier from "../assets/Panier.svg";
import Shirt1 from "../assets/shirt1.png";
import Shirt2 from "../assets/shirt2.png";
import Shirt3 from "../assets/shirt3.png";
import { useEffect, useState } from "react";
import {  useNavigate} from 'react-router-dom';
import Closeicon from "../assets/Delete.svg";



function CartPage() {
  const Navigate = useNavigate();
  const [PanierVide, setPanierVide] = useState(true);
  const [count, setCount] = useState(1);
  const [selectedProduct , setselectedProduct]  = useState([]);
  const [totalPrice , settotalPrice]  = useState(0);
  
  let updatedTable = [];


  const retrieveTableData = () => {
    const storedData = localStorage.getItem('cartProducts') ? JSON.parse(localStorage.getItem('cartProducts') ) :[];
    if (storedData.length) {

      setselectedProduct (storedData);
    
        setPanierVide (false);
     
      
    }else{
      setPanierVide (true);
    }
  };

  useEffect(()=>{
    retrieveTableData();
  },  []);

  useEffect(()=>{
    const totalPrice2 =selectedProduct.reduce((acc , product) => {
    return acc+ Number(product.price)* product.count ;
    }, 0 ) ;
    
    settotalPrice(totalPrice2);
    console.log(totalPrice);
  
  },  [selectedProduct]);


  const removeProduct = (ind) => {
    const storedData = localStorage.getItem('cartProducts');
    if (storedData) {
      updatedTable =  JSON.parse(storedData);
      let key = updatedTable.splice(ind,1);
      console.log(updatedTable);
      localStorage.setItem('cartProducts',JSON.stringify(updatedTable));
     setselectedProduct(updatedTable);
     if(updatedTable.length === 0 ){
      setPanierVide (true);
     }
 
    }
  };

  
 
 const handleClickBuy = () =>{
  Navigate("/");
 };
  
 const decrement = (index) => {
  const updatedProducts = [...selectedProduct];
  if (updatedProducts[index].count > 1) {
    updatedProducts[index].count--;
    setselectedProduct(updatedProducts);
    localStorage.setItem('cartProducts',JSON.stringify(selectedProduct));
  }
};

const increment = (index) => {
  const updatedProducts = [...selectedProduct];
  if (updatedProducts[index].count < 5) {
  updatedProducts[index].count++;
  setselectedProduct(updatedProducts);
  localStorage.setItem('cartProducts',JSON.stringify(selectedProduct));
  }
};


  return (
    <div className=" bg-thirdColor">
        <Navbar/> 

      {PanierVide == true &&  
        <div className="flex justify-center items-center mt-10 flex-col mb-44">
          <img src={Panier} alt="" />
          <h1 className="block text-4xl font-bold font-Reem text-seconadryColor mt-16">Votre Panier est vide!</h1>
          <h1 className="block text-3xl font-semibold  font-Montserrat text-seconadryColor mt-10 text-center px-8 mb-16">Parcourez nos catégories et découvrez nos meilleures offres!</h1>
          <button className=" bg-seconadryColor font-Reem  focus:outline-none rounded-full text-lg font-semibold  text-primaryColor transition duration-200 flex items-center justify-center h-16 w-80 hover:bg-[#062D4C]" onClick={handleClickBuy}> Commencez vos achats</button>
        </div>}
       
       {PanierVide ==false &&
       
       <div className="flex justify-between flex-col lg:flex-row ">
       {/* La partie 1 */}

         <div className="max-w-2/5 lg:ml-16">
         <div className="flex justify-between mt-10 flex-row ">
         <span className="text-2xl font-bold font-Reem text-seconadryColor pl-10"> Produit</span>
         <span className="text-2xl font-bold font-Reem text-seconadryColor  pr-10 "> Quantité</span>
         </div>
           
          {/* La partie des produits */}
          {selectedProduct.map((product, index) => (

        <div key={index}>
        
         <div className="flex mt-6 flex-row justify-between">
          <div className="flex mt-6 flex-row ">
          <button className="ml-10 mt-10 w-8 h-8 " onClick={() =>removeProduct(index)}>
          <img src={Closeicon} alt="delete"  />
          </button>
           <img src={product.image} alt="Shirt1" className="ml-5 w-[65px] h-[70px]"/>
           <div className="md:w-64  flex flex-col ml-5 md:mr-16 lg:mr-2">
           <h2 className="font-medium text-lg text-balance font-Reem text-seconadryColor">{product.name}</h2>
           {product.selectedSize && (
                   <h2 className="font-medium text-lg text-balance font-Reem text-primaryColor">
                    Taille: {product.selectedSize}
                   </h2>
             )}
           <h2 className="font-medium text-lg text-balance font-Reem text-seconadryColor">{product.count} x {product.price}DA</h2>
           </div>
          </div>
           <div className="flex justify-center flex-row mt-6 mr-10 ml-5  lg:ml-72">
           <button className="w-10 h-10 bg-seconadryColor rounded-full " onClick={() =>decrement(index)} ><span className="text-white">-</span></button>
           <h3 className="font-medium text-seconadryColor ml-2 mr-2">{product.count}</h3>
           <button className="w-10 h-10 bg-seconadryColor rounded-full " onClick={() =>increment(index)} ><span className="text-white">+</span></button>
           </div>
          
         </div>
         <div className="h-[2px] bg-seconadryColor  rounded-full mt-4 mb-5 ml-5 mr-5"></div>
        </div>
          ))}

         {/* button continuer les achats */}

          <button className=" bg-seconadryColor ml-10  mt-4 font-Reem mb-5 transition duration-200 flex items-center justify-center h-12 w-64 hover:bg-primaryColor hover:text-seconadryColor  focus:outline-none rounded-full text-lg font-semibold text-primaryColor" onClick={handleClickBuy}><span>Continuer vos achats</span></button>
         </div>
    
         {/* La partie 2 */}
         <div className="lg:mr-32">
            {/* Affichage du total */}
          <h1 className="text-3xl font-bold font-Reem text-seconadryColor mt-12 pl-10">Total Panier</h1>
          <div className="h-[2px] bg-seconadryColor  rounded-full mt-4 mb-5 ml-5 mr-5"></div>
          <div className="flex justify-between  mt-5 flex-row ">
           <span className="text-xl font-semibold font-Reem text-seconadryColor pl-12">Sous Total</span>
           <span className="text-xl font-semibold font-Reem text-seconadryColor  pr-12 ">{totalPrice}DA</span>
          </div>
          <div className="h-[2px] bg-seconadryColor  rounded-full mt-4 mb-5 ml-5 mr-5"></div>
          {/* button validation des achats */}
          <div className="flex flex-row justify-center items-center ">
          <button className=" bg-seconadryColor  mt-4 font-Reem mb-5 transition duration-200 flex items-center justify-center h-16 w-72 hover:bg-primaryColor hover:text-seconadryColor  focus:outline-none rounded-full text-lg font-semibold text-primaryColor"><span>Valider la commande</span></button>
          </div>

           {/* Partie code promo  */}
          <h1 className="text-3xl font-bold font-Reem text-seconadryColor mt-12 pl-10">Code promo :</h1>
         <div className="flex items-center flex-col justify-center mb-12">
         <div className="  h-16 w-72 max-w-80 justify-center  mt-12 flex items-center rounded-5xl bg-white  flex-1 rounded-[60px] border-none outline-none text-lg  p-2 ml-24 mr-24">
          <input className="bg-white  h-16 w-72 flex-1 rounded-[60px] border-none outline-none text-base text-left pl-10  p-2" type="text" placeholder="Code Promo" />
         </div>
         <button className=" bg-seconadryColor  mt-4 font-Reem mb-16 transition duration-200 flex items-center justify-center h-16 w-60 hover:bg-primaryColor hover:text-seconadryColor  focus:outline-none rounded-full text-lg font-semibold text-primaryColor"><span>Appliquer le code promo</span></button>
         </div>

         </div>

         
       </div>

       }
        

        
        <Footer/>
    </div>
  
  );
}

export default CartPage;
