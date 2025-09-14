import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { toast } from 'sonner';

const PlaceOrder = ({handlePlaceOrderOpen, offer}) => {
  const [selectedPotionImage, setSelectedPotionImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // useEffect(() => {
  //   if(offer.potionImages && offer.potionImages.length > 0) {
  //     setSelectedPotionImage(offer.potionImages[0].altText);
  //   }
  // }, [offer]);

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(prev + amount, 1));
  };

  const calculateTotalPrice = () => {
    let basePrice = offer.price;
    if (selectedPotionImage === "Large") {
      basePrice += offer.increment;
    }
    return basePrice * quantity;
  };

  const handleAddToCart = () => {
    if(!selectedPotionImage){
      toast.error("Please select the potion size.", {
        duration: 1000,
      });
      return;
    }
    // setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success("Added to the cart", {
        duration: 2000,
      });
      setIsButtonDisabled(false);
      setSelectedPotionImage("");
      setQuantity(1);
    });
  };

  return (
    <div className="rounded-lg bg-white p-5">
        <div className="w-[25rem] h-[20rem] md:w-[35rem] md:h-[30rem]">
            <div className="flex justify-end">
                <button onClick={handlePlaceOrderOpen} className="border rounded-sm mb-2"><IoClose /></button>
            </div>
            <div className="mb-4">
                <img src={offer.image} alt={offer.title} className="w-full h-[90px] md:h-[200px] object-cover object-center rounded-t-lg"/>
                <h3 className="text:md md:text-xl font-semibold mb-2 mt-3">{offer.item}</h3>
                <p className="text-gray-600 mb-1 text-sm md:text-md">{offer.description}</p>
                <p className="text-md font-semibold text-orange-400">LKR {offer.price.toFixed(2)}</p>

                <div className="grid grid-cols-2 gap-0 mb-1 mt-3 ml-2">
                  <div>
                    <p className="tracking-tighter">Potion :</p>
                    <div className="flex gap-4 mt-2">
                      {offer.potionImages.map((img, index) => (
                        <div key={index}>
                          <img                              
                            src={img.url} 
                            alt={img.altText} 
                            className={`w-[80px] h-[50px] md:h-[80px] object-cover border-2 object-center rounded-md cursor-pointer transition
                              ${selectedPotionImage === img.altText ? "border-blue-950" : "border-gray-400"}`}
                            onClick={() => {setSelectedPotionImage(img.altText); setIsButtonDisabled(false);}}
                          />
                          <p className="text-sm">{img.altText}</p>
                          {img.altText === "Large" && (
                            <p className="text-xs tracking-tighter">+ LKR {offer.increment.toFixed(2)}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-start mt-2">
                      <p className="tracking-tighter mr-4 mt-1">Quantity :</p>
                      <button onClick={() => handleQuantityChange(-1)} className="border rounded-lg px-2 text-xl font-medium">-</button>
                      <span className="font-semibold m-1">{quantity}</span>
                      <button onClick={() => handleQuantityChange(1)} className="border rounded-lg px-2 text-xl font-medium">+</button>
                    </div>
                    <div className="flex justify-start mt-4">
                      <p className="text-lg font-bold text-orange-500">LKR {calculateTotalPrice().toFixed(2)}</p>
                    </div>
                    <div onClick={handleAddToCart} className="flex flex-col mt-4">
                      <button className={`text-white py-2 px-4 rounded mr-4 ${isButtonDisabled ? "bg-orange-400 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600"}`}>Add to Cart</button>
                    </div>
                  </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default PlaceOrder