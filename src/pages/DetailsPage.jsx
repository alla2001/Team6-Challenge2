import { useState } from "react";
import T_shirt1img from "../assets/T-shirt1pic.png"
function DetailsPage() {

  const [count, setCount] = useState(1);
  const [selectedButton, setSelectedButton] = useState(-1);

  const handleClick = (index) => {
    setSelectedButton(index === selectedButton ? -1 : index);
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

  return (
      <div className="bg-thirdColor min-h-screen">

          <div className="container mx-auto w-full px-3 pt-20 lg:pt-6 flex flex-wrap items-center ">

             <div className="mt-15 flex-fluid flex flex-col items-center">
               <div className="inline-block w-full lg:w-[32rem]  mx-auto rounded-2xl border border-seconadryColor border-md overflow-hidden bg-[#D3D3D3]">
               <img src={T_shirt1img} alt="image_of_t-shirt" className="w-full h-full object-cover" />
               </div>
             </div>
        

        <div className="flex-fluid ml-4 mb-10 ">
         <h3 className="font-bold text-seconadryColor mt-3">T-shirt Brainy Casual</h3>
         <h4 className="font-semibold mt-4 text-seconadryColor">1900 DA</h4>
         <p className="mt-3 text-seconadryColor">Fabriqué à partir de matériaux de qualité, il offre un confort optimal pour une utilisation quotidienne. Son design simple est rehaussé du logo BRAINY imprimé. Avec sa coupe décontractée et sa couleur polyvalente, ce t-shirt est parfait pour une tenue décontractée ou pour une séance d’entraînement. Il incarne le confort et le style sportif, en faisant un choix pratique et tendance pour toutes les occasions.</p>   
         <h3 className="font-medium text-seconadryColor mt-4">Taille :</h3>
         <div className="flex items-center gap-7 mt-4">
      {sizes.map((size, index) => (
        <button
          key={index}
          className={`w-10 h-10 rounded-full ${
            selectedButton === index ? 'bg-primaryColor' : 'bg-seconadryColor'
          }`}
          onClick={() => handleClick(index)}
        >
          <span className="text-white">{size}</span>
        </button>
      ))}
    </div>
        <div className="h-1 bg-seconadryColor w-[315px] rounded-full mt-4"></div>
        <h3 className="font-medium text-seconadryColor mt-4">Quantité :</h3>
        <div className="flex  items-center gap-7 mt-4">
            <button className="w-10 h-10 bg-seconadryColor rounded " onClick={decrement} ><span className="text-white">-</span></button>
            <h3 className="font-medium text-seconadryColor mt-4 mb-3">{count}</h3>
            <button className="w-10 h-10 bg-seconadryColor rounded" onClick={increment} ><span className="text-white">+</span></button>
        </div>
        <button className="w-[115px]  h-[35px] bg-primaryColor rounded mt-4"><span className="text-white">J'achète</span></button>
        </div>
        </div>
        </div>
  )
}

export default DetailsPage
