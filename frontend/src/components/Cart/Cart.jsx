import CartContent from "./CartContent";

const Cart = () => {
  return (
    <div className="absolute right-0 top-10 w-96 sm:w-1/2 md:w-1/3 bg-white shadow-lg rounded-lg p-4 z-50">
      <h3 className="font-semibold text-gray-700 mb-3">Your Cart</h3>
      <div className="space-y-2 max-h-96 overflow-y-auto">
        <CartContent />
      </div>
      
      <div className="mt-4">
        <button
          className="w-full block text-center bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart