import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { VscThreeBars } from "react-icons/vsc";
import SearchBar from "../Common/SearchBar";
import { useState, useRef, useEffect } from "react";
import Cart from "../Cart/Cart";

const Navbar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const cartRef = useRef(null);

    const handleCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (cartRef.current && !cartRef.current.contains(e.target)) {
                setIsCartOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);

        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

  return (
    <>
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
            <div>
                <Link to="/" className="text-lg font-semibold"> DelivaryDash</Link>
            </div>

            {/* Location status */}
            <div className="hidden md:flex space-x-6">
                <Link to="#" className="text-gray-700 hover:text-black uppercase text-sm font-semibold">
                    Your Location
                </Link>
            </div>

            {/* Cart, Account, Search bar */}
            <div className="flex space-x-4 items-center" ref={cartRef}>
                <button 
                    onClick={handleCartOpen}
                    className="text-gray-700 hover:text-black">
                    <FaShoppingCart className=""/>
                    <span className="bg-orange-400 text-white text-xs rounded-full px-1 py-0 absolute">2</span>
                </button>
                {isCartOpen && (
                    <Cart isOpen={isCartOpen} handleCartOpen={handleCartOpen}/>
                )}

                <Link to="#" className="text-gray-700 hover:text-black"><RiAccountCircleFill /></Link>
                
                <button className="text-gray-700 hover:text-black md:hidden"><VscThreeBars /></button>
                <SearchBar />
            </div>
        </nav>
    </>
  )
}

export default Navbar