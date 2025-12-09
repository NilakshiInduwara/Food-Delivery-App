import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoMdStar, IoMdStarOutline, IoMdStarHalf } from "react-icons/io";
import { CARD_WIDTH } from "../Constants";
import PlaceOrder from "../components/Common/PlaceOrder";
import { RESTAURANTS_URL, OFFERS_URL } from "../Constants";

const TodaysOffers = () => {
    const scrollRef = useRef(null);
    const placeOrderRef = useRef(null);

    const [offers, setOffers] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [selectedOffer, setSelectedOffer] = useState(null);
    const [isPlaceOrderOpen, setIsPlaceOrderOpen] = useState(false);

    const scrollLeftOrRight = (direction) => {
        const scrollAmount = direction === 'left' ? -CARD_WIDTH : CARD_WIDTH; 
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    }

    const checkScroll = () => {
        if(scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
        }
    }

    useEffect(() => {
        checkScroll();
        const ref = scrollRef.current;
        if(ref) {
            ref.addEventListener("scroll", checkScroll);
        }
        return () => {
            if(ref) {
                ref.removeEventListener("scroll", checkScroll);
            }
        };
    },[]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const [restaurantsRes, offersRes] = await Promise.all([
            fetch(RESTAURANTS_URL),
            fetch(OFFERS_URL),
          ]);

          const [restaurantsData, offersData] = await Promise.all([
            restaurantsRes.json(),
            offersRes.json(),
          ]);

          setRestaurants(restaurantsData);
          setOffers(offersData);

          if (restaurantsData.length > 0) {
            setSelectedRestaurant(restaurantsData[0]);
          }
        } catch (err) {
          console.error("Error fetching data:", err);
        }
      };

      fetchData();
    }, []);

    const filteredOffers = selectedRestaurant ? offers.filter((offer) => offer.name === selectedRestaurant.name) : [];

    const handlePlaceOrderOpen = () => {
        setIsPlaceOrderOpen(!isPlaceOrderOpen);
    }

  return (
    <div className="md:ml-40 md:mt-20">
        <div className="mx-auto relative ml-[29.5rem] mb-3 md:mb-9">
            <h2 className="text-[25px] md:text-4xl font-bold">Today's Offers</h2>
        </div>

        {/* Restaurant Names Scroller */}
        <div ref={scrollRef} className="container mx-auto overflow-x-scroll flex space-x-[10px] md:space-x-[20px] relative px-5 no-scrollbar">
            {restaurants.map((restaurant) => (
                <div key={restaurant._id} 
                    onClick={() => setSelectedRestaurant(restaurant)} 
                    className={`min-w-[100px] md:min-w-[120px] max-w-[100px] md:max-w-[120px] cursor-pointer border rounded-lg py-2 pl-2 transition ${selectedRestaurant.id === restaurant.id ? "bg-blue-50 border-blue-300" : "border-gray-300"}`}>
                    <h3 className="text-sm font-semibold">{restaurant.name}</h3>
                    <p className="text-gray-600 text-sm">{restaurant.cuisine}</p>
                    <p className="text-gray-600 text-sm flex">
                        {restaurant.rating === 0 && <IoMdStarOutline className="mt-[2.8px]" />}
                        {restaurant.rating === 5 && <IoMdStar className="mt-[2.8px]" />}
                        {restaurant.rating > 0 && restaurant.rating < 5 && <IoMdStarHalf className="mt-[2.8px]" />}
                        {restaurant.rating}
                    </p>
                </div>
            ))}
        </div>

        <div className="hidden sm:flex absolute right-0 space-x-1 mt-6 mr-7">
            <button disabled={!canScrollLeft} onClick={() => scrollLeftOrRight('left')} className={`px-[3px] py-[2px] md:p-1 rounded border 
                ${canScrollLeft ? "text-gray-700 hover:text-black" : "text-gray-300 cursor-not-allowed"}`}>
                <FiChevronLeft className="text-[15px] md:text-2xl"/>
            </button>
            <button disabled={!canScrollRight} onClick={() => scrollLeftOrRight('right')} className={`px-[3px] md:p-1 rounded border ${canScrollRight ? "text-gray-700 hover:text-black" : "text-gray-300 cursor-not-allowed"}`}>
                <FiChevronRight className="text-[15px] md:text-2xl"/>
            </button>
        </div>

        {/* Offers List */}
        <div className="mt-5 md:mt-20 mb-10">
            {selectedRestaurant && (
                <div className="mb-2 md:mb-5 ml-5 md:ml-7">
                <h3 className="text-[18px] md:text-[28px] font-bold">{selectedRestaurant.name}</h3>
                <p className="text-gray-600 text-[12px] md:text-[16px]">{selectedRestaurant.cuisine} • {selectedRestaurant.location}</p>
            </div>
            )}
            
            {filteredOffers.length > 0 ? (
                <div ref={placeOrderRef}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-5">
                        {filteredOffers.map((offer) => (
                            <div key={offer._id} onClick={() => {setSelectedOffer(offer); handlePlaceOrderOpen();}} className="relative border border-gray-300 rounded-lg hover:shadow-md transition">
                                <img src={`http://localhost:5000${offer.image}`} alt={offer.title} className="w-full h-[100px] md:h-[200px] object-cover object-center rounded-t-lg"/>
                                <div className="absolute top-3 md:top-5 left-3 bg-black opacity-75 px-1 md:px-2 py-1"><h3 className="text-white text-[12px]">{offer.title}</h3></div>
                                <div className="px-3 py-2 text-[10px] md:text-[13px]">
                                    <div className="text-base font-bold mb-[5px]">{offer.item}</div>
                                    <span className="flex justify-between mb-[5px] font-semibold">
                                        <p>LKR {offer.price.toFixed(2)}</p>
                                        <p className="text-right">Valid Till: {new Date(offer.validTill).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</p>
                                    </span>
                                    <p className="text-left">{offer.description}</p>                                
                                </div>
                            </div>
                        ))}
                    </div>
                    {isPlaceOrderOpen && (
                        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 flex justify-center items-center">
                            <PlaceOrder handlePlaceOrderOpen={handlePlaceOrderOpen} offer={selectedOffer} />
                        </div>
                    )}
                </div>
            ) : (
                <div className="mt-10">
                    <p className="text-center">No offers available at the moment. Please check back later!</p>
                </div>
            )}
        </div>
        
    </div>
  )
}

export default TodaysOffers