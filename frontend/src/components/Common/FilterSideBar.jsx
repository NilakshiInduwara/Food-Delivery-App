import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const FilterSideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    brunches: [],
    bakery: [],
    beverages: [],
    desserts: [],
    minPrice: 0,
    maxPrice: 5000,
  });
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const brunches = [
    "Burgers",
    "Pizzas",
    "Fries",
    "Hot Dogs",
    "Sandwiches",
    "Tacos",
    "Sushi",
    "Ramen",
    "Seafood",
    "Salads",
    "Soup",
    "Breakfast",
  ];
  const bakery = ["Cheese", "Bread"];
  const desserts = ["Ice Cream", "Cake", "Donuts"];
  const beverages = ["Drinks", "Coffee", "Tea"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
        brunches: params.brunches ? params.brunches.split(",") : [],
        bakery: params.bakery ? params.bakery.split(",") : [],
        desserts: params.desserts ? params.desserts.split(",") : [],
        beverages: params.beverages ? params.beverages.split(",") : [],
        maxPrice: params.maxPrice || 5000,
    });

    setPriceRange([0, params.maxPrice || 5000]);
  },[searchParams]);

  const handleFilterChange = (e) => {
    const {name, value, checked, type} = e.target;
  };

  return (
    <div className="hidden md:block p-4 w-40 top-[3.4rem] bottom-0 overflow-y-auto fixed no-scrollbar shadow-lg">
      <h5 className="text-sm tracking-tighter font-semibold">Filter Options</h5>
      {/* Brunch field */}
      <div className="mt-3">
        <label className="block text-sm font-bold">Brunch</label>
        {brunches.map((brunch) => (
          <div key={brunch} className="flex items-center">
            <input 
                type="checkbox" 
                name="brunch" 
                value={brunch}
                onChange={handleFilterChange}
                className="h-[10px] w-[10px] mr-1 ml-1 accent-blue-500 focus:ring-blue-400"/>
            <span className="text-sm tracking-tighter">{brunch}</span>
          </div>
        ))}
      </div>

      {/* Bakery */}
      <div className="mt-3">
        <label className="block text-sm font-bold">Bakery</label>
        {bakery.map((bakery) => (
          <div key={bakery} className="flex items-center">
            <input 
                type="checkbox" 
                name="bakery" 
                value={bakery}
                onChange={handleFilterChange}
                className="h-[10px] w-[10px] mr-1 ml-1 accent-blue-500 focus:ring-blue-400"/>
            <span className="text-sm tracking-tighter">{bakery}</span>
          </div>
        ))}
      </div>

      {/* Beverages */}
      <div className="mt-3">
        <label className="block text-sm font-bold">Beverages</label>
        {beverages.map((beverage) => (
          <div key={beverage} className="flex items-center">
            <input 
                type="checkbox" 
                name="beverage" 
                value={beverage}
                onChange={handleFilterChange}
                className="h-[10px] w-[10px] mr-1 ml-1 accent-blue-500 focus:ring-blue-400"/>
            <span className="text-sm tracking-tighter">{beverage}</span>
          </div>
        ))}
      </div>

      {/* Desserts */}
      <div className="mt-3">
        <label className="block text-sm font-bold">Desserts</label>
        {desserts.map((dessert) => (
          <div key={dessert} className="flex items-center">
            <input 
                type="checkbox" 
                name="dessert" 
                value={dessert}
                onChange={handleFilterChange}
                className="h-[10px] w-[10px] mr-1 ml-1 accent-blue-500 focus:ring-blue-400"/>
            <span className="text-sm tracking-tighter">{dessert}</span>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div className="block mt-3">
        <label className="text-sm">Price Range</label>
        <input 
            type="range" 
            name="priceRange" 
            min={0} 
            max={5000} 
            className="h-2 cursor-pointer accent-blue-500" />
        <div className="flex justify-between">
            <span className="text-xs">0</span>
            <span className="tracking-tighter text-xs">{priceRange[1]}</span>
        </div>
      </div>

    </div>
  );
};

export default FilterSideBar;
