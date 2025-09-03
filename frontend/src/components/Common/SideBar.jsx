import { Link } from "react-router-dom";

const SideBar = () => {
    const categories = ["Burgers", "Pizzas", "Fries", "Drinks", "Desserts","Burgers", "Pizzas", "Fries", "Drinks", "Desserts","Burgers", "Pizzas", "Fries", "Drinks", "Desserts","nothingg", "Pizzas", "Fries", "Drinks", "nothing","nothingg", "Pizzas", "Fries", "Drinks", "nothing"];
  return (
    <div className="bg-orange-50 p-4 rounded w-40 top-16 bottom-0 overflow-y-auto fixed no-scrollbar">
        {categories.map((category, index) => (
            <div key={index}  className="text-gray-800 italic hover:text-black pb-3">
                <Link to="#" >{category}</Link>
            </div>
        ))}
    </div>
  )
}

export default SideBar