import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { VscThreeBars } from "react-icons/vsc";
import SearchBar from "../Common/SearchBar";

const Navbar = () => {
  return (
    <>
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
            <div>
                <Link to="/" className="text-lg font-semibold"> DelivaryDash</Link>
            </div>

            <div className="hidden md:flex space-x-6">
                <Link to="#" className="text-gray-700 hover:text-black uppercase text-sm font-semibold">
                    Your Location
                </Link>
            </div>

            <div className="flex space-x-4 items-center">
                <Link to="#" className="text-gray-700 hover:text-black">
                    <FaShoppingCart className=""/>
                    <span className="bg-orange-400 text-white text-xs rounded-full px-1 py-0 absolute">2</span>
                </Link>
                <Link to="#" className="text-gray-700 hover:text-black"><RiAccountCircleFill /></Link>
                <button className="text-gray-700 hover:text-black md:hidden"><VscThreeBars /></button>
                <SearchBar />
            </div>
        </nav>
    </>
  )
}

export default Navbar