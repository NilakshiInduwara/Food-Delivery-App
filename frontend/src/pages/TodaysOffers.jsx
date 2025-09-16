import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoMdStar, IoMdStarOutline, IoMdStarHalf } from "react-icons/io";
import { CARD_WIDTH } from "../Constants";
import offer1 from "../assets/images/Temp/Offer-1.jpg";
import offer2 from "../assets/images/Temp/Offer-2.jpg";
import offer3 from "../assets/images/Temp/Offer-3.webp";
import potion1 from "../assets/images/Temp/potion1.jpg";
import potion2 from "../assets/images/Temp/potion2.jpg";
import PlaceOrder from "../components/Common/PlaceOrder";

const offers = [
    { id: 1, name: "Italiano Delight", item: "Fried Rice", price: 10.90, title: "50% off on all orders", description: "Get 50% off on all orders above $20 50% off on all orders above $20", validTill: "2023-12-31", increment: 230.50, image: offer1, potionImages: [{url: potion2, altText: "Small"}, {url: potion1, altText: "Large" }] },
    { id: 4, name: "Italiano Delight", item: "Fried Rice", price: 11.99, title: "50% off on all ordersw", description: "Get 50% off on all orders above $20", validTill: "2023-12-31", increment: 130.00, image: offer2, potionImages: [{url: potion1, altText: "Potion 1"}, {url: potion2, altText: "Potion 2"}] },
    { id: 5, name: "Italiano Delight", item: "Fried Rice", price: 14.99, title: "50% off on all orderss", description: "Get 50% off on all orders above $20", validTill: "2023-12-31", increment: 130.00, image: offer3, potionImages: [{url: potion1, altText: "Potion 1"}, {url: potion2, altText: "Potion 2"}] },
    { id: 6, name: "Italiano Delight", item: "Fried Rice", price: 105.99, title: "50% off on all ordersf", description: "Get 50% off on all orders above $20", validTill: "2023-12-31", increment: 130.00, image: offer2, potionImages: [{url: potion1, altText: "Potion 1"}, {url: potion2, altText: "Potion 2"}] },
    { id: 7, name: "Italiano Delight", item: "Fried Rice", price: 134.90, title: "50% off on all ordddddd", description: "Get 40% off ", validTill: "2023-12-31", increment: 130.00, image: offer3, potionImages: [{url: potion1, altText: "Potion 1"}, {url: potion2, altText: "Potion 2"}] },
    { id: 8, name: "Italiano Delight", item: "Fried Rice", price: 10.99, title: "50% off on all placedsf", description: "Get 40% off ", validTill: "2023-12-31", increment: 130.00, image: offer3, potionImages: [{url: potion1, altText: "Potion 1"}, {url: potion2, altText: "Potion 2"}] },
    { id: 2, name: "Sushi World", item: "Noodles", price: 12.99, title: "Free Delivery", description: "Enjoy free delivery on your first 3 orders", validTill: "2023-11-30", increment: 130.00, image: offer2, potionImages: [{url: potion1, altText: "Potion 1"}, {url: potion2, altText: "Potion 2"}] },
    { id: 3, name: "Burger Barn", item: "Pizza", price: 14.99, title: "Buy 1 Get 1 Free", description: "Buy one pizza and get another one free", validTill: "2023-10-15", increment: 130.00, image: offer3, potionImages: [{url: potion1, altText: "Potion 1"}, {url: potion2, altText: "Potion 2"}] },
];

const restaurants = [
    { id: 1, name: "Italiano Delight", cuisine: "Italian", rating: 4.5, location: "Downtown" },
    { id: 2, name: "Sushi World", cuisine: "Japanese", rating: 4.7, location: "210,V, Galle Rd, Matara" },
    { id: 3, name: "Curry House", cuisine: "Indian", rating: 4.3, location: "Midtown" },
    { id: 4, name: "Burger Barn", cuisine: "American", rating: 5.0, location: "Downtown" },
    { id: 5, name: "Taco Town", cuisine: "Mexican", rating: 4.2, location: "Uptown" },
    { id: 6, name: "Dragon's Breath", cuisine: "Chinese", rating: 4.6, location: "Midtown" },
    { id: 7, name: "Mediterraneo", cuisine: "Mediterranean", rating: 4.4, location: "Downtown" },
    { id: 8, name: "Vegan Vibes", cuisine: "Vegan", rating: 4.8, location: "Uptown" },
    { id: 9, name: "BBQ Pit", cuisine: "Barbecue", rating: 4.1, location: "Midtown" },
    { id: 10, name: "Seafood Shack", cuisine: "Seafood", rating: 4.5, location: "Downtown" },
    { id: 11, name: "Pasta Palace", cuisine: "Italian", rating: 4.3, location: "Uptown" },
    { id: 12, name: "Ramen Realm", cuisine: "Japanese", rating: 4.7 },
    { id: 13, name: "Spice Route", cuisine: "Indian", rating: 4.4 },
    { id: 14, name: "Grill Master", cuisine: "American", rating: 4.2 },
    { id: 15, name: "Burrito Bros", cuisine: "Mexican", rating: 4.1 },
    { id: 16, name: "Wok This Way", cuisine: "Chinese", rating: 4.6 },
    { id: 17, name: "Olive Tree", cuisine: "Mediterranean", rating: 4.5 },
    { id: 18, name: "Green Garden", cuisine: "Vegan", rating: 4.8 },
    { id: 19, name: "Smokey's BBQ", cuisine: "Barbecue", rating: 4.3 },
    { id: 20, name: "Ocean's Bounty", cuisine: "Seafood", rating: 4.7 },
];

const TodaysOffers = () => {
    const scrollRef = useRef(null);
    const placeOrderRef = useRef(null);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);
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
        }
    },[]);

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
                <div key={restaurant.id} 
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
            <div className="mb-2 md:mb-5 ml-5 md:ml-7">
                <h3 className="text-[18px] md:text-[28px] font-bold">{selectedRestaurant.name}</h3>
                <p className="text-gray-600 text-[12px] md:text-[16px]">{selectedRestaurant.cuisine} • {selectedRestaurant.location}</p>
            </div>
            {filteredOffers.length > 0 ? (
                <div ref={placeOrderRef}>
                    <button className="grid grid-cols-2 md:grid-cols-4 gap-6 px-5">
                        {filteredOffers.map((offer) => (
                            <div key={offer.id} onClick={() => {setSelectedOffer(offer); handlePlaceOrderOpen();}} className="relative border border-gray-300 rounded-lg hover:shadow-md transition">
                                <img src={offer.image} alt={offer.title} className="w-full h-[100px] md:h-[200px] object-cover object-center rounded-t-lg"/>
                                <div className="absolute top-3 md:top-5 left-3 bg-black opacity-75 px-1 md:px-2 py-1"><h3 className="text-white text-[12px]">{offer.title}</h3></div>
                                <div className="px-3 py-2 text-[10px] md:text-[13px]">
                                    <span className="flex justify-between mb-[5px] font-semibold">
                                        <p>LKR {offer.price.toFixed(2)}</p>
                                        <p className="text-right">Valid Till: {new Date(offer.validTill).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</p>
                                    </span>
                                    <p className="text-left">{offer.description}</p>                                
                                </div>
                            </div>
                        ))}
                    </button>
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