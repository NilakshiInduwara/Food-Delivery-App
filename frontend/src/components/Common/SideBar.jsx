import { Link } from "react-router-dom";

const SideBar = () => {
    const categories = [
      "Burgers 🍔",
      "Pizzas 🍕",
      "Fries 🍟",
      "Hot Dogs 🌭",
      "Sandwiches 🥪",
      "Tacos 🌮",
      "Sushi 🍣",
      "Ramen 🍜",
      "Seafood 🦞",
      "Salads 🥗",
      // "Rice 🍚",
      // "Curry 🍛",
      "Soup 🥣",
      "Breakfast 🥞",
      "Cheese 🧀",
      "Bread 🍞",
      "Ice Cream 🍦",
      "Cake 🍰",
      "Donuts 🍩",
      // "Cookies 🍪",
      // "Chocolate 🍫",
      // "Popcorn 🍿",
      "Drinks 🥤",
      "Coffee ☕",
      "Tea 🍵",
      // "Beer 🍺",
      // "Wine 🍷",
      // "Cocktails 🍸"
    ];

  return (
    <div className="hidden md:block bg-orange-50 p-4 rounded w-40 top-16 bottom-0 overflow-y-auto fixed no-scrollbar">
        {categories.map((category, index) => (
            <div key={index}  className="text-gray-800 hover:text-black pb-3">
                <Link to="#" >{category}</Link>
            </div>
        ))}
    </div>
  )
}

export default SideBar