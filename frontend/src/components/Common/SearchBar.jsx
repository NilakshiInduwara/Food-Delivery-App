import { useState } from "react";
import { IoSearch,IoClose } from "react-icons/io5";

const SearchBar = () => {
    const [searchItem, setsearchItem] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSearchClick = () => {
        setIsOpen(!isOpen);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchItem);
        setIsOpen(false);
    }

  return (
    <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen?
        "absolute top-0 left-0 w-full bg-white h-24 z-50": "w-auto"}`}>
        {isOpen ? (
            <form onSubmit={handleSearch} className="relative flex items-center justify-center w-full">
                <div className="relative w-1/2">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchItem}
                        onChange={(e) => setsearchItem(e.target.value)}
                        className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus: outline-none w-full
                        placeholder: text-gray-700"
                    />
                    {/* search icon */}
                    <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 
                        text-gray-600 hover:text-gray-800">
                        <IoSearch className="h-6 w-6" />
                    </button>
                </div>
                <button type="button" onClick={handleSearchClick} className="text-gray-700 hover:text-black"><IoClose className="h-6 w-6"/></button>
            </form>
        ) :
            (<button onClick={handleSearchClick} className="text-gray-700 hover:text-black hidden md:flex">
                <IoSearch />
            </button>)
        }
    </div>
  )
}

export default SearchBar