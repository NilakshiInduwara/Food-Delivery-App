import { useState } from "react";
import { MdDelete } from "react-icons/md";

const CartContent = () => {
  const [cartContent, setCartContent] = useState([
    { id: 1, name: "Burger", price: 500, quantity: 1 },
    { id: 2, name: "Pizza", price: 800, quantity: 2 },
    { id: 3, name: "Fries", price: 300, quantity: 1 },
  ]);

  const handleQuantityChange = (id, amount) => {
    setCartContent((prevCart) =>
      prevCart.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: Math.max(product.quantity + amount, 1), // avoid < 1
            }
          : product
      )
    );
  };

  const handleDelete = (id) => {
    setCartContent((prevCart) => prevCart.filter((product) => product.id !== id));
  };
    
  return (
    <div>
        {cartContent.map((product, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-2">
                <span className="flex-1 line-clamp-2">{product.name}</span>
                <span className="flex-1 font-semibold ml-3">LKR {product.price}</span>
                <div className="flex items-center mt-2">
                    <button onClick={() => handleQuantityChange(product.id, -1)} className="border rounded-lg px-2 text-xl font-medium">-</button>
                    <span className="font-semibold m-1">{product.quantity}</span>
                    <button onClick={() => handleQuantityChange(product.id, 1)} className="border rounded-lg px-2 text-xl font-medium">+</button>
                </div>
                <div onClick={() => handleDelete(product.id)} className="mt-2 ml-1"><MdDelete /></div>
            </div>
        ))}
    </div>
  )
}

export default CartContent