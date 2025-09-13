import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const PlaceOrder = ({handlePlaceOrderOpen, offer}) => {
  const [selectedPotionImage, setSelectedPotionImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if(offer.potionImages && offer.potionImages.length > 0) {
      setSelectedPotionImage(offer.potionImages[0].url);
    }
  }, [offer]);

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(prev + amount, 1));
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
                <p className="text-lg font-bold text-orange-500">LKR {offer.price}</p>
                <div className="grid grid-cols-2 gap-6 mb-1 mt-3 ml-2">
                  <div>
                    <p className="italic">Potion</p>
                    <div className="flex gap-4 mt-2">
                      {offer.potionImages.map((img, index) => (
                        <div key={index}>
                          <img                              
                            src={img.url} 
                            alt={img.altText} 
                            className={`w-[80px] h-[50px] md:h-[80px] object-cover border-2 object-center rounded-md cursor-pointer transition
                              ${selectedPotionImage === img.url ? "border-blue-950" : "border-gray-400"}`}
                            onClick={() => setSelectedPotionImage(img.url)}
                          />
                          <p className="text-sm">{img.altText}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="italic">Amount</p>
                    <div className="flex items-center mt-2">
                      <button onClick={() => handleQuantityChange(-1)} className="border rounded-lg px-2 text-xl font-medium">-</button>
                      <span className="font-semibold m-1">{quantity}</span>
                      <button onClick={() => handleQuantityChange(1)} className="border rounded-lg px-2 text-xl font-medium">+</button>
                    </div>
                    <div className="flex flex-col mb-3 mt-3">
                      <button className="bg-orange-500 text-white py-2 px-4 rounded mr-4">Add to Cart</button>
                    </div>
                  </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default PlaceOrder