import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoMdStar, IoMdStarOutline, IoMdStarHalf } from "react-icons/io";
import { CARD_WIDTH } from "../Constants";

const offers = [
    { id: 1, item: "Fried Rice", title: "50% off on all orders", description: "Get 50% off on all orders above $20", validTill: "2023-12-31", image: "https://via.placeholder.com/150" },
    { id: 2, item: "Noodles", title: "Free Delivery", description: "Enjoy free delivery on your first 3 orders", validTill: "2023-11-30", image: "https://via.placeholder.com/150" },
    { id: 3, item: "Pizza", title: "Buy 1 Get 1 Free", description: "Buy one pizza and get another one free", validTill: "2023-10-15", image: "https://via.placeholder.com/150" },
];

const restaurants = [
    { id: 1, name: "Italiano Delight", cuisine: "Italian", rating: 4.5 },
    { id: 2, name: "Sushi World", cuisine: "Japanese", rating: 4.7 },
    { id: 3, name: "Curry House", cuisine: "Indian", rating: 4.3 },
    { id: 4, name: "Burger Barn", cuisine: "American", rating: 4.0 },
    { id: 5, name: "Taco Town", cuisine: "Mexican", rating: 4.2 },
    { id: 6, name: "Dragon's Breath", cuisine: "Chinese", rating: 4.6 },
    { id: 7, name: "Mediterraneo", cuisine: "Mediterranean", rating: 4.4 },
    { id: 8, name: "Vegan Vibes", cuisine: "Vegan", rating: 4.8 },
    { id: 9, name: "BBQ Pit", cuisine: "Barbecue", rating: 4.1 },
    { id: 10, name: "Seafood Shack", cuisine: "Seafood", rating: 4.5 },
    { id: 11, name: "Pasta Palace", cuisine: "Italian", rating: 4.3 },
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
    const containerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const scrollLeftOrRight = (direction) => {
        // const container = containerRef.current;
        // if (!container) return;

        // const card = container.querySelector("div");
        // const CARD_WIDTH = card?.offsetWidth || 100;
    
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


  return (
    <div className="remove-sidebar remove-navbar">
        <div className="mx-auto relative text-center mb-8">
            <h2 className="text-4xl font-bold">Today's Offers</h2>
        </div>

        {/* <div>
            <p className="text-center mt-4">No offers available at the moment. Please check back later!</p>
        </div> */}

        <div ref={scrollRef} className="container mx-auto overflow-x-scroll flex space-x-[20px] relative pl-5 no-scrollbar">
            {restaurants.map((restaurant) => (
                <div key={restaurant.id} className="min-w-[120px] max-w-[120px] relative">
                    <h3 className="text-sm font-semibold">{restaurant.name}</h3>
                    <p className="text-gray-600 text-sm">{restaurant.cuisine}</p>
                    <p className="text-gray-600 text-sm flex">
                        {restaurant.rating === 0 && <IoMdStarOutline className="mt-[2.8px]" />}
                        {restaurant.rating === 5 && <IoMdStar className="mt-[2.8px]" />}
                        {restaurant.rating > 0 && restaurant.rating < 5 && <IoMdStarHalf className="mt-[2.8px]" />}
                        {restaurant.rating}</p>
                </div>
            ))}
        </div>

        <div className="absolute right-0 flex space-x-1 mt-1 mr-5">
            <button disabled={!canScrollLeft} onClick={() => scrollLeftOrRight('left')} className={`p-1 rounded border 
                ${canScrollLeft ? "text-gray-700 hover:text-black" : "text-gray-300 cursor-not-allowed"}`}>
                <FiChevronLeft className="text-2xl"/>
            </button>
            <button disabled={!canScrollRight} onClick={() => scrollLeftOrRight('right')} className={`p-1 rounded border ${canScrollRight ? "text-gray-700 hover:text-black" : "text-gray-300 cursor-not-allowed"}`}>
                <FiChevronRight className="text-2xl"/>
            </button>
        </div>
        
    </div>
  )
}

export default TodaysOffers