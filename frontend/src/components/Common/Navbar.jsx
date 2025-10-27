import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { GrFavorite } from "react-icons/gr";
import { VscThreeBars } from "react-icons/vsc";
import SearchBar from "../Common/SearchBar";
import { useState, useRef, useEffect } from "react";
import Cart from "../Cart/Cart";

const Navbar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const cartRef = useRef(null);

    const handleCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    };

    const handlePopUpOpen = () => {
        setIsPopUpOpen(!isPopUpOpen);
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

    useEffect(() => {
      const handleClickOutside = (e) => {
        if (!e.target.closest(".account-popup")) {
          setIsPopUpOpen(false);
        }
      };
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }, []);

  return (
    <>
      <nav className="container fixed top-0 z-10 border-b-2 bg-white mx-auto flex items-center justify-between py-4 pr-6 pl-4">
        <div>
          <Link to="/" className="text-lg font-semibold">
            DelivaryDash
          </Link>
        </div>

        {/* Location status */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="#"
            className="text-gray-700 hover:text-black uppercase text-sm font-semibold"
          >
            Your Location
          </Link>
        </div>

        {/* Cart, Account, Favorites, Search bar, Three bars */}
        <div className="flex space-x-4 items-center" ref={cartRef}>
          <button
            onClick={handleCartOpen}
            className="text-gray-700 hover:text-black"
          >
            <FaShoppingCart />
            <span className="bg-orange-400 text-white text-xs rounded-full px-1 py-0 absolute">
              2
            </span>
          </button>
          {isCartOpen && <Cart />}

          <button className="text-gray-700 hover:text-black">
            <GrFavorite />
          </button>

          <div className="relative group inline-block account-popup">
            <button
              onClick={handlePopUpOpen}
              className="text-gray-700 hover:text-black"
            >
              <RiAccountCircleFill />
            </button>

            {isPopUpOpen && (
              <span
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2
                 bg-gray-800 text-white text-sm
                 px-3 py-2 rounded-md shadow-lg
                 transition-opacity duration-200 z-50"
              >
                <div className="mb-1 hover:text-gray-200">
                  <Link to="/register">
                    <button>Register</button>
                  </Link>
                </div>
                <div className="hover:text-gray-200">
                  <Link to="/login">
                    <button>Sign In</button>
                  </Link>
                </div>
              </span>
            )}
          </div>

          <button className="text-gray-700 hover:text-black md:hidden">
            <VscThreeBars />
          </button>
          <SearchBar />
        </div>
      </nav>
    </>
  );
}

export default Navbar